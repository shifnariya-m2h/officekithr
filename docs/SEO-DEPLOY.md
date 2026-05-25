# SEO deploy checklist

## Build (required for production)

```bash
npm run build
```

`npm run build` uses Playwright Chromium for prerender (installed once via `postinstall` / `ensure-playwright.mjs`). On CI (e.g. Cloudflare Pages), use `npm run build`, not `vite build` alone.

### Faster builds (~2 min vs ~5+ min)

| Option | Command / env | Effect |
|--------|----------------|--------|
| **Parallel prerender** (default) | `npm run build` | 6 routes at a time (`PRERENDER_CONCURRENCY=8` optional) |
| **Skip dynamic blog HTML** | `npm run build:fast` or `PRERENDER_BLOGS=0` | Prerender ~52 static URLs only; sitemap + `blog-seo-manifest.json` still list all posts |
| **SPA only** | `npm run build:spa` | No Playwright step |

On Cloudflare Pages → **Settings → Environment variables** → add `PRERENDER_BLOGS` = `0` and keep `npm run build` if deploy time is the bottleneck.

This generates:

- `public/sitemap.xml` + `robots.txt`
- `public/blog-seo-manifest.json` — dynamic blog titles/descriptions for instant client SEO
- `scripts/prerender-routes.json` — route list for prerender
- `dist/**/index.html` — static HTML per URL for crawlers
- `dist/404.html` — real HTTP 404 page (with `noindex`)

## After publishing a new API blog post

1. Run `npm run build` and redeploy `dist/`
2. New posts are picked up automatically in sitemap, manifest, and prerender

## Apache (cPanel)

`.htaccess` serves prerendered files first; unknown URLs return **404** (not soft 200).

## Architecture

- **One `SeoHead`** in `App.tsx` — no duplicate meta tags
- **`usePageSeo()`** — pages override title/description/robots
- **`blog-seo-manifest.json`** — correct blog meta before API response
- **`PageJsonLd`** — article/breadcrumb schema without duplicating Organization graph
