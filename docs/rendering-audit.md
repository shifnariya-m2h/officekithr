# Rendering audit — OfficeKit HR (Vite SPA + Playwright prerender)

> **Stack note:** This is a **Vite + React Router SPA**, not Next.js. The equivalent of SSR/SSG/ISR is **post-build Playwright prerender** (`scripts/prerender.mjs`), which snapshots fully hydrated HTML per route into `dist/<path>/index.html`.

## How rendering works

| Layer | Mechanism |
|-------|-----------|
| Dev | Client-only (`vite` + HMR) |
| Production build | `vite build` → JS bundles + shell `index.html` |
| Crawlable HTML | `node scripts/prerender.mjs` (Playwright) after build |
| CI default | Prerender **skipped** unless `PRERENDER=1` |
| Local default | Prerender **on** unless `PRERENDER=0` |

### Why the homepage shell looked empty

1. `index.html` ships with an empty `<div id="root">` — all content is React-rendered.
2. Below-fold sections use `DeferredMount` (idle timeout) and `React.lazy` — content is not in the DOM until JS runs.
3. Without prerender, `curl /` returns ~6 KB of images + script tags, no H1.
4. With prerender, Playwright waits for `#faq-heading`, scrolls, and writes full HTML to `dist/index.html`.

## Route → strategy → recommendation → effort

| Route group | Current strategy | Recommended | Effort |
|-------------|------------------|-------------|--------|
| `/` homepage | SPA + prerender (Playwright) | Keep prerender; `DeferredMount` mounts immediately for bots/webdriver | **Done** |
| `/pricing`, `/features/*` | SPA + prerender | Keep prerender; static data in `site-pricing.ts` / page components | **Done** |
| `/gcc-compliance`, `/compliance/*` | SPA + prerender | Keep prerender | **Done** |
| `/officekit-vs-*`, `/compare/*` | SPA + prerender via marketing/compare pages | Keep prerender; config-driven tables | **Done** |
| `/resources/blogs/*`, `/blog/:slug` | SPA + prerender | Keep prerender | Low |
| `/ae`, `/solutions/*`, `/longtail/*` | SPA + prerender | Keep prerender | Low |
| Dashboard / logged-in (none public) | N/A | Stay client-only | — |

## Verification commands

```bash
# Full production build with prerender (local default)
npm run build

# Skip prerender (fast CI build)
PRERENDER=0 npm run build

# Force prerender on CI
PRERENDER=1 npm run build

# Post-build smoke test
node scripts/verify-prerender.mjs

# Check raw HTML for key routes
curl -s dist/index.html | grep -o '<h1[^>]*>[^<]*'
curl -s dist/pricing/index.html | grep -i 'Flexible HRMS'
curl -s dist/gcc-compliance/index.html | grep -i 'GCC payroll'
```

## Deployment requirement

**Set `PRERENDER=1` in Cloudflare Pages / CI** or crawlers will receive the empty SPA shell. See `docs/SEO-DEPLOY.md`.

## Future: true SSR

Migrating to Next.js App Router or Vite SSR would eliminate the Playwright step but is a large rewrite. Current prerender + `noscript` fallback is the pragmatic equivalent for marketing routes.
