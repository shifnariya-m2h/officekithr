# Agent-ready SaaS — self-serve signup recommendation

**Current score drivers (audit):** Low machine-readable pricing visibility (partially addressed via `/pricing` + `pricingPageSchema`) and sales-only purchase path (demo/contact CTAs, no self-serve checkout).

This document scopes a **minimal** self-serve path — not a build spec. Do not implement checkout until product/billing decisions are made.

## Goal

Enable AI agents and buyers to complete evaluation → trial → paid conversion without a sales call, while keeping enterprise deals on the existing demo flow.

## Minimal viable self-serve flow

```
Landing (/pricing) → Sign up → Tenant provisioned → Module selection → Payment → Onboarding wizard
```

### 1. Public pricing API (machine-readable)

- **Exists:** `SITE_PRICING` in `src/data/site-pricing.ts`, JSON-LD `Offer` on `/pricing`  
- **Gap:** No public `GET /api/pricing` or `pricing.json` for agents  
- **Recommendation:** Expose `public/pricing.json` at build time mirroring `SITE_PRICING` (no auth)

### 2. Signup endpoint

- Email + company + country + headcount band  
- Creates pending tenant in existing backend (`api.officekithr.com` — confirm with backend team)  
- Sends verification email  
- **Effort:** M — depends on existing auth/tenant APIs

### 3. Trial provisioning

- 14-day trial on Silver tier, India or GCC region flag  
- Set `localStorage.officekit_onboarding_completed_at` on completion (powers `ReviewPromptBanner`)  
- **Effort:** M

### 4. Payment

- Stripe or Razorpay for India; Stripe for GCC (currency AED)  
- Map plan IDs: `silver`, `gold`, `platinum` → price IDs in payment provider  
- Webhook → activate subscription, seat count  
- **Effort:** L — PCI, invoicing, tax, cancellation

### 5. Agent discoverability

- `/.well-known/agent.json` or extend `llms.txt` with:
  - Pricing URL
  - Signup URL (when live)
  - Supported regions
  - Free trial terms  
- **Effort:** S

## What NOT to build yet

- Full ecommerce cart with add-ons  
- Multi-entity billing in self-serve  
- Custom enterprise contracts online

## Success metrics

- % of new tenants from self-serve vs demo  
- Agent-Ready SaaS Index score (re-audit after pricing.json + signup live)  
- Time-to-first-payroll-run for self-serve cohort

## Dependencies (business decisions)

| Decision | Owner |
|----------|-------|
| Trial length and tier | Product |
| Payment provider per region | Finance |
| Minimum seat count for self-serve | Sales |
| G2/Capterra before or after self-serve launch | Marketing |

## Suggested phase 1 (4–6 weeks engineering)

1. `public/pricing.json` from `SITE_PRICING`  
2. `/signup` page (form → lead API today, tenant API when ready)  
3. Update `llms.txt` with signup + pricing links  
4. Keep "Contact sales" for 200+ seats and enterprise
