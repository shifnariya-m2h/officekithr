# Lighthouse / Core Web Vitals optimization

Production targets: **Mobile ≥ 95**, **Desktop ≥ 98**, LCP &lt; 1.8s, TBT &lt; 150ms, CLS &lt; 0.05.

## Architecture

| Layer | Implementation |
|-------|----------------|
| Motion | `LazyMotion` + `domAnimation` + `MotionConfig` — animations off on mobile (`data-perf-mode="mobile"`) |
| Lottie | `LazyLottie` — IO viewport, no mobile autoplay |
| Analytics | `CookieConsent` + `DeferredAnalytics` — idle / interaction gated |
| Images | `OptimizedImage` + `src/lib/seo/assets.ts` — WebP + AVIF `<picture>` |
| Code split | Route `React.lazy`, home `LazySection`, Vite `manualChunks` |
| CSS | Async stylesheet plugin, Tailwind purge via `content` paths |

## Pre-deploy checklist

- [ ] `npm run build` (sitemap + `optimize-images` + Vite + prerender)
- [ ] `brew install webp` and optionally `brew install libavif` for AVIF hero assets
- [ ] Verify LCP: `/BG-*` + `mobile-mockup-240.webp` / `dashboardok-1024.webp` with `fetchPriority="high"`
- [ ] PageSpeed on **production URL** (not localhost)
- [ ] Cloudflare: Brotli, cache `/*.webp` `/*.avif` `/assets/*` 1y immutable
- [ ] `index.html` short TTL or bypass cache

## Key files

- `vite.config.ts` — chunks, async CSS, es2020, no motion preload
- `index.html` — critical CSS, LCP preloads, early `data-perf-mode`
- `src/lib/performance/*` — mobile mode, third-party loader, `MotionProvider`
- `src/components/ui/OptimizedImage.tsx` — responsive + AVIF
- `src/lib/seo/assets.ts` — canonical URLs + srcsets
- `scripts/optimize-images.mjs` — WebP variants + optional AVIF

## Expected improvements

| Metric | Before | Target |
|--------|--------|--------|
| LCP | 2.5–4s | &lt; 1.8s |
| TBT | motion + lottie + chat | &lt; 150ms |
| CLS | missing dimensions | &lt; 0.05 |
| JS (initial) | large vendor | &lt; 180KB gzip (route-dependent) |

## Notes

- Scores on `npm run dev` are not representative — always test production build.
- Prerender (`PRERENDER=1` default) improves FCP/LCP for crawlers and cold loads.
- Remove duplicate `motion` npm package; alias `motion/react` → `framer-motion` in Vite.
