# OfficeKit HR — SEO & Platform Architecture

## Phase 1 Decision: Vite + Prerender Now → Next.js App Router (Month 1–3)

| Criterion | Vite SPA (current + fixes) | Vite + SSG/prerender | Next.js App Router |
|-----------|---------------------------|----------------------|-------------------|
| Time to ship | ✅ Immediate | ~1–2 weeks | 4–8 weeks |
| Per-route HTML for crawlers | ❌ JS-dependent | ✅ Static HTML | ✅ SSR/SSG |
| Core Web Vitals | Good after lazy split | Better | Best (RSC, streaming) |
| Blog/programmatic SEO | Build scripts | Build scripts | `generateStaticParams` |
| AI-search extractability | Medium (Helmet) | High | Highest |
| cPanel deploy | ✅ Native | ✅ `dist/` | Needs Node or Vercel |

**Recommendation:** Keep Vite for **24-hour P0 fixes** (implemented). Add **vite-prerender** or **react-snap** in Week 1 for top 30 URLs. Plan **Next.js App Router migration** in Month 1 for 100k+ traffic and programmatic GEO pages.

### Target folder structure (Next.js migration)

```
app/
  (marketing)/
    page.tsx                    # /
    pricing/page.tsx
    contact/page.tsx
    about-us/page.tsx
  features/
    [slug]/page.tsx
  geo/
    [country]/page.tsx          # india, uae, saudi-arabia, kuwait, qatar
  resources/
    blogs/page.tsx
    blog/[slug]/page.tsx
  ae/page.tsx                   # Arabic UAE
lib/seo/
  metadata.ts                   # generateMetadata()
  schema.ts
  sitemap.ts                    # generateSitemap()
  robots.ts
components/seo/
  JsonLd.tsx
  Breadcrumb.tsx
```

### Current Vite SEO system (implemented)

```
src/seo/
  site-config.ts      # Canonical host: www.officekithr.com
  route-seo.ts        # Static route title/description/hreflang
  schema.ts           # Organization, FAQ, Article, Breadcrumb
  SeoHead.tsx         # react-helmet-async per-route meta
  PageShell.tsx       # Page wrapper + FAQ schema
scripts/
  generate-sitemap.mjs  # Build-time sitemap + robots
public/api/
  leads.php           # Server proxy (SYNCORA_API_KEY)
  hr-popup.php          # Server proxy (HR_GOOGLE_SHEET_URL)
```

### Canonical & hreflang rules

- **Preferred host:** `https://www.officekithr.com` (matches `.htaccess` www redirect)
- **Homepage:** `hreflang=en` → `/`, `hreflang=ar-AE` → `/ae`, `x-default` → `/`
- **Never** duplicate canonical across routes (fixed via `SeoHead`)

### Content silo architecture (Month 1+)

```
/geo/india          → payroll, PF, ESI, attendance
/geo/uae            → WPS, gratuity, Arabic ESS
/geo/saudi-arabia   → GOSI, Saudization
/geo/kuwait         → local labor law
/geo/qatar          → WPS Qatar

/features/[module]  → product intent
/compare/[competitor]
/tools/[calculator]
/glossary/[term]
/compliance/[topic]
```

Internal linking: hub pages → spoke features → blog clusters → CTA `/contact`.
