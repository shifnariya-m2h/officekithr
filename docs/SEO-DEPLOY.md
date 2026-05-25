# SEO deploy checklist

## Build (required for production)

```bash
npm run build
```

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
