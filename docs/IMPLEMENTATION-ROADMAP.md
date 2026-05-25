# OfficeKit HR — Implementation Roadmap

Prioritized by: SEO impact → Security → Performance → Traffic growth → Complexity.

---

## ✅ Immediate (24 hours) — DONE IN THIS PR

| Fix | Status |
|-----|--------|
| Per-route meta via `react-helmet-async` | ✅ |
| Canonical unified to `www.officekithr.com` | ✅ |
| Removed fake AggregateRating schema | ✅ |
| Dynamic sitemap (55 URLs incl. API blogs) | ✅ |
| Broken blog category links → `?category=` | ✅ |
| API key removed from client → `/api/leads.php` | ✅ |
| HR popup → `/api/hr-popup.php` | ✅ |
| Route-level code splitting (`React.lazy`) | ✅ |
| 404 `noindex` | ✅ |
| Blog Article schema on `/blog/:slug` | ✅ |
| Single H1 fixes (home, mobile, contact) | ✅ |
| Deferred Tawk.to, trimmed `index.html` scripts | ✅ |
| `.env` gitignored | ✅ |

**Deploy checklist:**
1. Set cPanel env: `SYNCORA_API_KEY`, `HR_GOOGLE_SHEET_URL`
2. **Rotate** exposed `sk_live_*` key in Syncora dashboard
3. `npm run build` → upload `dist/`
4. Submit sitemap in Google Search Console

---

## Week 1

| Task | SEO | Perf | Complexity |
|------|-----|------|------------|
| Prerender top 30 routes (`vite-plugin-prerender`) | Critical | Medium | Medium |
| Add FAQ schema to Pricing + homepage FAQ | High | — | Low |
| 301 redirects for typo URLs (`employe-managment` → correct) | High | — | Low |
| Self-host fonts (remove Google Fonts CDN) | Medium | High | Low |
| Remove duplicate `motion` package | — | Medium | Low |
| CookieYes + FB Pixel via consent gating only | — | Medium | Medium |

---

## Week 2

| Task | Impact |
|------|--------|
| True HTTP 404 for unknown paths (Apache `ErrorDocument` + prerendered 404.html) | SEO Critical |
| Image pipeline: WebP/AVIF, `width`/`height`, LCP `fetchpriority` | CWV High |
| Hero scroll container height reduction | CLS High |
| `getPostBySlug` CDN cache headers on API | Perf Medium |
| Security headers: remove `unsafe-eval` from CSP entirely | Security High |

---

## Month 1

| Task | Impact |
|------|--------|
| Next.js App Router migration (marketing routes first) | SEO Critical |
| GEO landing pages: India, UAE, SA, KW, QA | Traffic High |
| Industry templates (manufacturing, retail, IT) | Programmatic SEO |
| Comparison pages vs competitors | Commercial intent |
| Glossary + compliance hubs | Topical authority |
| AI-search content blocks (answer-first sections) | AI citations |

---

## Month 3

| Task | Impact |
|------|--------|
| Edge deploy (Vercel/Cloudflare) + ISR for blog | Scale |
| RUM monitoring (web-vitals.js → analytics) | CWV |
| Rate limiting on `/api/*` | Security |
| Full hreflang for all GEO pages | International |
| Content API + CMS for programmatic pages | 100k traffic |

---

## Issue → Fix Reference (P0 samples)

### 1. CSR-only rendering
- **Root cause:** Vite SPA, empty `#root` at crawl
- **Fix now:** `SeoHead` + route splitting
- **Fix next:** Prerender / Next.js SSR
- **Files:** `src/seo/*`, `src/App.tsx`, `index.html`

### 2. Duplicate metadata
- **Root cause:** Static `index.html` only
- **Fix:** `SeoHead` per pathname
- **Files:** `src/seo/SeoHead.tsx`, `src/seo/route-seo.ts`

### 3. Exposed API key
- **Root cause:** `sk_live_*` in `ContactSection.tsx`
- **Fix:** `public/api/leads.php` + `src/lib/api/leads.ts`
- **Action:** Rotate key immediately

### 4. Incomplete sitemap
- **Fix:** `scripts/generate-sitemap.mjs` in `npm run build`
- **Files:** `public/sitemap.xml`, `public/robots.txt`

### 5. Broken blog categories
- **Fix:** Query param filtering `/resources/blogs?category=Product+Updates`
- **Files:** `src/pages/resources/Blog.tsx`
