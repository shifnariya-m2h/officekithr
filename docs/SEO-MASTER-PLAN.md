# OfficeKit HR — SEO & Growth Master Plan

**Status:** Phase 1–2 foundation shipped in codebase (May 2026)  
**Stack:** Vite + React + prerender + cPanel  
**Canonical host:** `https://www.officekithr.com`

---

## Executive summary

OfficeKit HR is positioned as an **AI-powered HRMS** for **India + GCC** (UAE, Saudi Arabia, Kuwait, Qatar). The site now has:

- Per-route SEO (`SeoHead`, `route-seo.ts`, `PageShell`)
- Build-time sitemap + AI-crawler `robots.txt`
- `llms.txt` for LLM/GEO discovery
- **14 commercial GEO landing pages** at flat URLs (e.g. `/hr-software-uae`)
- **Solutions hub** (`/solutions`) + legacy paths 301 → canonical flat URLs
- **Comparison pages** (`/officekit-vs-greythr`, `/officekit-vs-keka`)
- JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList, Product, comparison WebPage
- Security headers (HSTS, CSP, Permissions-Policy)
- Consent-gated analytics + demo conversion events

---

## Phase 1 — Technical SEO (implemented)

| Item | Implementation |
|------|----------------|
| robots.txt | `scripts/generate-sitemap.mjs` — allows GPTBot, Claude-Web, PerplexityBot, Google-Extended, etc. |
| sitemap.xml | Build script — static + dynamic blog URLs |
| Canonical tags | `canonicalUrl()` → `www.officekithr.com` |
| hreflang | Home `/` ↔ `/ae` (ar-AE) |
| OG / Twitter | `SeoHead.tsx` |
| Meta per route | `route-seo.ts` + `PageShell` overrides |
| 404 noindex | `getRouteSeo` fallback |
| Redirects | `_redirects`, `.htaccess`, `LegacyRedirect` |
| Schema | `src/seo/schema.ts` |
| Breadcrumbs | `SeoBreadcrumb.tsx` + `breadcrumbSchema` |
| Prerender list | `scripts/prerender-routes.json` (from build) |

**Deploy:** Run `npm run build` before upload so `sitemap.xml` and `robots.txt` regenerate.

---

## Phase 2 — GEO / LLM SEO (implemented)

| Asset | Path |
|-------|------|
| LLM summary | `/llms.txt` |
| HR software UAE | `/hr-software-uae` |
| Payroll UAE | `/payroll-software-uae` |
| HRMS India | `/hrms-software-india` |
| WPS compliance | `/wps-compliance-software` |
| Best payroll India | `/best-payroll-software-india` |
| Construction HRMS | `/best-hrms-for-construction` |
| vs Keka | `/officekit-vs-keka` |
| vs greytHR | `/officekit-vs-greythr` |
| Programmatic | `/hr-software-dubai`, `/hr-software-riyadh`, `/hr-software-kochi`, `/hr-software-healthcare`, `/payroll-software-india`, `/attendance-software-uae` |

**Content pattern (every landing page):**

1. H1 + subtitle  
2. **Direct answer** block (`DirectAnswerBlock`)  
3. Semantic definition (`<dl>`)  
4. Highlights + capabilities  
5. FAQ accordion + **FAQPage** schema  
6. Internal links to features + contact  
7. **Sticky demo CTA** (`StickyDemoCta`)

**Data source:** `src/data/marketing-pages.ts`  
**Template:** `src/pages/marketing/MarketingLandingPage.tsx`

---

## Phase 3 — Core Web Vitals (next)

| Priority | Action |
|----------|--------|
| P0 | Prerender top 50 URLs (`npm run build` includes route list) |
| P0 | Hero image: WebP/AVIF, `width`/`height`, `fetchpriority="high"` |
| P1 | Self-host fonts (remove render-blocking Google Fonts) |
| P1 | RUM: `web-vitals` → GA4 |
| P2 | Remove duplicate `motion` / heavy chart libs on marketing pages |

**Target:** Lighthouse mobile 90+, CWV pass.

---

## Phase 4 — CRO (partial)

| Done | Next |
|------|------|
| Sticky demo CTA on marketing pages | Calendly embed on `/contact` |
| HR popup (home, 12s delay) | Exit-intent variant |
| `trackDemoConversion` | ROI calculator page |
| WhatsApp CTA | Live chat consent gating |

---

## Phase 5 — Content authority (roadmap)

Build **hub → spoke** clusters:

```
/solutions (hub)
  → /wps-compliance-software
  → /payroll-software-uae
  → /hrms-software-india
/features/payroll-and-compliance (product)
/resources/blogs (editorial)
```

**Month 1 content:**

- UAE payroll compliance guide (3,000+ words)
- India PF/ESI checklist
- WPS filing step-by-step
- Glossary: `/glossary/wps`, `/glossary/gratuity`, etc.

---

## Phase 6 — Programmatic SEO (started)

Template: `MarketingLandingPage` + `marketing-pages.ts`  
**Scale:** Add city/industry entries to `MARKETING_PAGES`, run build, submit sitemap.

**Rules:** Unique `directAnswer` + FAQs per URL; no duplicate paragraphs across cities.

---

## Phase 7 — E-E-A-T (roadmap)

- `/about-us` — founder story, team credentials  
- `/security` — SOC2 path, data residency, encryption  
- Review widgets (G2/Capterra) — embed after consent  
- Align LinkedIn / Crunchbase with `organizationSchema` `sameAs`

---

## Phase 8 — Analytics (implemented baseline)

| Tool | File |
|------|------|
| GA4 / gtag | `src/lib/analytics.ts` |
| Page views | `ScrollToTop.tsx` → `trackPageView` |
| Demo leads | `trackDemoConversion` |
| Events | `trackEvent` (e.g. sticky CTA) |
| Consent | `src/lib/consent.ts`, `CookieConsent.tsx` |

**UTM framework:** `utm_source`, `utm_medium`, `utm_campaign` on all paid links → GA4 explorations.

---

## Phase 9 — Security (implemented)

- `.htaccess` + `public/_headers`: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy  
- API keys server-side: `public/api/leads.php`, `hr-popup.php`

---

## Internal linking rules

1. Homepage → top 3 GEO pages (UAE, India, WPS)  
2. Feature pages → relevant GEO page in footer  
3. Blog posts → one commercial page + one feature CTA  
4. Comparison pages → `/contact` + `/pricing`  
5. Anchor text: descriptive (“payroll software UAE”), not “click here”

---

## Competitor keyword map

| Query | Target URL |
|-------|------------|
| best HRMS software India | `/hrms-software-india` |
| payroll software UAE | `/payroll-software-uae` |
| WPS compliance software | `/wps-compliance-software` |
| greytHR alternative | `/officekit-vs-greythr` |
| Keka alternative | `/officekit-vs-keka` |
| HR software GCC | `/hr-software-uae`, `/solutions/ai-hr-software-gcc` |
| AI HRMS platform | `/features/ai-pilot`, `/solutions/ai-hr-software-gcc` |

---

## File reference

```
src/seo/           — SeoHead, schema, route-seo, PageShell
src/data/          — marketing-pages, geo-landings, comparisons, home-faqs
src/pages/marketing/ — GEO landing template
public/llms.txt    — LLM discovery
scripts/generate-sitemap.mjs
docs/SEO-ARCHITECTURE.md
docs/IMPLEMENTATION-ROADMAP.md
```

---

## Immediate post-deploy checklist

1. `npm run build` → upload `dist/`  
2. Google Search Console: submit `sitemap.xml`  
3. Validate 301s: `/solutions/payroll-software-uae` → `/payroll-software-uae`  
4. Rich Results Test on homepage + `/hr-software-uae`  
5. Rotate any exposed API keys (see IMPLEMENTATION-ROADMAP.md)  
6. Monitor GA4: `demo_submit`, `sticky_cta_click`, page paths
