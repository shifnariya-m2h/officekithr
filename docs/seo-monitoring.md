# SEO / GEO quarterly monitoring

Run this checklist every quarter (Jan, Apr, Jul, Oct). Owner: marketing + engineering.

## 1. Review platform presence

| Metric | Source | Target |
|--------|--------|--------|
| G2 review count | G2 product page | Growing QoQ; TODO: set baseline when live |
| Capterra review count | Capterra vendor page | Growing QoQ |
| Average rating | Both platforms | ≥ 4.0 when sufficient volume |
| Response rate to outreach | CRM | Track from `docs/review-outreach-templates.md` |

**Action:** Update `src/data/review-platforms.ts` and `/reviews` page when profile URLs go live.

## 2. Indexed page count

### Option A — Search Console API (if credentials exist)

```bash
# TODO: Wire scripts/seo-quarterly-check.mjs when GOOGLE_APPLICATION_CREDENTIALS is set
node scripts/seo-quarterly-check.mjs
```

### Option B — Manual (no API)

1. Google Search Console → Pages → "Indexed" count  
2. Note delta vs last quarter  
3. Spot-check 10 URLs from `scripts/prerender-routes.json` with `site:officekithr.com/path`  
4. Record any "Crawled — currently not indexed" patterns

## 3. Prerender / crawl health

```bash
PRERENDER=1 npm run build
node scripts/verify-prerender.mjs
```

Confirm production deploy has `PRERENDER=1` (see `docs/rendering-audit.md`).

Spot-check:

```bash
curl -s https://www.officekithr.com/pricing | grep -c '₹99'
curl -s https://www.officekithr.com/gcc-compliance | grep -i 'WPS'
curl -s https://www.officekithr.com/officekit-vs-keka | grep -i 'Keka'
```

## 4. Structured data

- [Google Rich Results Test](https://search.google.com/test/rich-results) on `/`, `/pricing`, `/gcc-compliance`, one `/officekit-vs-*` page  
- Search Console → Enhancements → FAQ, Breadcrumbs (if reported)

## 5. LLM / AI visibility (qualitative)

- Query ChatGPT, Perplexity, Gemini: "best HRMS India GCC WPS" — note if OfficeKit is cited  
- Check `/llms.txt` and `/ai-index.txt` are reachable  
- Compare vs Keka, greytHR, Darwinbox citation frequency

## 6. Comparison content freshness

- Review `src/data/comparisons-new.ts` and `src/data/marketing-pages.ts` competitor rows for accuracy  
- Update pricing references if `src/data/site-pricing.ts` changes

## 7. Log template

| Quarter | Indexed pages | G2 reviews | Capterra reviews | Prerender pass | Notes |
|---------|---------------|------------|------------------|----------------|-------|
| Q_ 2026 | | TODO | TODO | | |
