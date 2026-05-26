# Lighthouse / Core Web Vitals optimization

## Checklist (production)

- [ ] Run `npm run build` (runs `optimize-images` + Vite + optional prerender)
- [ ] Verify LCP element: mobile mockup (≤767px) or dashboard (≥768px) with `fetchPriority="high"`
- [ ] Confirm `index.html` preloads match hero assets
- [ ] PageSpeed Mobile + Desktop ≥ 95 on production URL (not localhost)
- [ ] CLS &lt; 0.1 — all images have `width` / `height`
- [ ] TBT — motion/lottie/chat load after idle or interaction
- [ ] Cloudflare: Brotli on, cache everything `/*.webp`, `/assets/*`
- [ ] Deploy with source maps unless upload size matters (`STRIP_SOURCEMAPS=1`)

## Cloudflare

1. **Speed → Optimization**: Brotli, Auto Minify (HTML/CSS/JS if not already minified by Vite).
2. **Cache Rules**: `*.webp`, `/assets/*` → Edge TTL 1 year, Cache-Control immutable.
3. **`index.html`**: bypass cache or short TTL (already in `public/_headers`).
4. **Early Hints** (optional): link preload headers for LCP images on `/`.

## Before vs after (expected)

| Metric | Before (typical) | After (target) |
|--------|------------------|----------------|
| LCP | 2.5–4s (large mockup, low priority) | &lt; 2.0s |
| FCP | ~1.8s (blocking CSS) | &lt; 1.2s |
| CLS | Logo/mockup ratio warnings | &lt; 0.05 |
| TBT | motion + lottie on main thread | &lt; 200ms |
| CSS transfer | ~20KB blocking | async + purged |
| Partner logos | 20–50KB each | &lt; 6KB each |

## Key files

- `vite.config.ts` — async CSS, chunk split, hidden sourcemaps, motion dedupe
- `index.html` — critical CSS, LCP preloads
- `src/lib/seo/assets.ts` — canonical image URLs + srcsets
- `src/components/ui/OptimizedImage.tsx` — responsive LCP/content images
- `src/components/ui/PartnerLogo.tsx` — marquee logos
- `scripts/optimize-images.mjs` — WebP resize/compress in CI/build
