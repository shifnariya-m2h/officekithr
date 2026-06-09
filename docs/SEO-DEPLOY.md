# SEO deploy checklist

## Build (required for production)

```bash
npm run build
```

**Cloudflare / Netlify / GitHub CI:** `npm run build` **skips Playwright prerender** (fast ~2–3 min). Sitemap + `blog-seo-manifest.json` still generate. Set env `PRERENDER=1` only when you need static HTML files in `dist/`.

**Local full SEO build:** `PRERENDER=1 npm run build` (installs Chromium via `ensure-playwright.mjs`).

| Command / env | Effect |
|---------------|--------|
| `npm run build` on CI | Sitemap + Vite only — **no hang, no Playwright** |
| `PRERENDER=1` | Full prerender (local or CI) |
| `PRERENDER_BLOGS=0` | Static routes only when prerender runs |
| `npm run build:spa` | No sitemap script chain issues — sitemap + vite only |

Build command on host must stay **`npm run build`** (runs `scripts/run-build.mjs`).

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

## Cloudflare

1. **Disable “Managed robots.txt”** (or align with `public/robots.txt`) so AI crawlers (`GPTBot`, `PerplexityBot`, `Google-Extended`) are not blocked by conflicting rules.
2. **`public/_redirects`** handles www, trailing-slash removal, and canonical URL consolidation.
3. Production SEO build: `PRERENDER=1 npm run build` then deploy `dist/`.

## Architecture

- **One `SeoHead`** in `App.tsx` — no duplicate meta tags
- **`usePageSeo()`** — pages override title/description/robots
- **`blog-seo-manifest.json`** — correct blog meta before API response
- **`PageJsonLd`** — article/breadcrumb schema without duplicating Organization graph
