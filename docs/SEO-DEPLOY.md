# SEO deploy checklist

## Build (required for production)

```bash
npm run build
```

**Cloudflare / Netlify / GitHub CI:** `npm run build` **runs Playwright prerender by default**. Set `PRERENDER=0` for fast Vite-only builds (~2–3 min).

**Fast local build (no prerender):** `PRERENDER=0 npm run build` or `npm run build:spa`.

| Command / env | Effect |
|---------------|--------|
| `npm run build` | Sitemap + Vite + **prerender** (default) |
| `PRERENDER=0` | Vite-only — skip Playwright (fast CI/dev) |
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

This site is a **Vite static SPA** with prerendered HTML — **not** Next.js. Do **not** use `opennextjs-cloudflare` or any OpenNext deploy command.

### Cloudflare Workers (Git)

| Setting | Value |
|---------|--------|
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |

`wrangler.jsonc` points at `./dist` (static assets). Optional one-shot: `npm run deploy:cloudflare`.

Set env `PRERENDER=0` on the build only if you need a fast Vite-only deploy (not recommended for production SEO).

### Cloudflare Pages (alternative)

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | *(leave empty — Pages uploads `dist` automatically)* |

### After deploy

1. **Disable “Managed robots.txt”** (or align with `public/robots.txt`) so AI crawlers (`GPTBot`, `PerplexityBot`, `Google-Extended`) are not blocked by conflicting rules.
2. **`public/_redirects`** handles www, trailing-slash removal, and canonical URL consolidation.
3. Production SEO build is the default: `npm run build` then deploy `dist/`. Use `PRERENDER=0` only for quick smoke deploys.

## Architecture

- **One `SeoHead`** in `App.tsx` — no duplicate meta tags
- **`usePageSeo()`** — pages override title/description/robots
- **`blog-seo-manifest.json`** — correct blog meta before API response
- **`PageJsonLd`** — article/breadcrumb schema without duplicating Organization graph
