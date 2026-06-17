# Review outreach templates — G2 & Capterra

Use these after a successful implementation (30–90 days post go-live). Personalize bracketed fields. Do not offer incentives that violate G2/Capterra review policies.

Reference customers in existing marketing copy:

| Company | Contact (from testimonials) | Region |
|---------|----------------------------|--------|
| Lulu International Exchange LLC | Mohideen Kader, Head of HR | UAE |
| Thai Group | Anees, Head of HR | UAE / India |
| Midac Electronics | Sajitha, HR Manager | India / GCC |
| Buchprufer | Venugopal, CEO | — |
| Tablez | TODO: confirm named contact with sales | UAE (logo on site) |

---

## Template A — Email (HR champion)

**Subject:** Quick favour — share your OfficeKit HR experience on G2?

Hi [First name],

Hope payroll month-end is running smoothly on OfficeKit HR.

We're building our presence on G2 so other HR teams in India and the GCC can find honest feedback when they shortlist HRMS tools. Would you be willing to leave a short review based on your experience with [modules used: payroll / WPS / attendance / etc.]?

- **G2:** TODO — add submission URL from `src/data/review-platforms.ts` once live  
- **Capterra:** TODO — add submission URL once live  

It takes about 5 minutes. If you're open to it, I can send a direct link. If anything isn't working well, reply here first — we'd rather fix it than ask for a public review.

Thanks,  
[Your name]  
OfficeKit HR Customer Success

---

## Template B — Email (executive sponsor)

**Subject:** 10-minute ask — OfficeKit HR review for [Company]

Hi [First name],

[Company] has been a valued OfficeKit HR customer since [go-live month/year]. As we expand visibility for teams evaluating HRMS in India and the GCC, third-party reviews on G2 and Capterra are the main source buyers (and AI assistants) trust.

Would you or [HR champion name] be comfortable sharing a brief review focused on:

1. Why you chose OfficeKit HR  
2. How [payroll / WPS / multi-country] works for you today  
3. One outcome your team cares about (time saved, compliance confidence, employee adoption)

No draft needed — your words matter more than polish. Happy to jump on a 15-minute call if easier.

Best,  
[Your name]

---

## Template C — LinkedIn DM (warm relationship)

Hi [First name] — we're collecting honest G2/Capterra reviews from customers who've been live on OfficeKit HR for GCC/India payroll. Your team's WPS / statutory work would be a huge help for other HR leaders researching tools. OK if I send the link? Totally fine if timing isn't right.

---

## Template D — Post-implementation check-in call script

1. Confirm satisfaction with [payroll run / WPS file / onboarding].  
2. Ask: "Would you recommend OfficeKit HR to a peer in [industry]?"  
3. If yes: "We'd appreciate a short G2 review — I can email the link after this call."  
4. If hesitant: capture feedback internally; do not push for a public review.

---

## Operational checklist

- [ ] Create G2 product listing and Capterra vendor profile (marketing)  
- [ ] Add `profileUrl` and `submitUrl` to `src/data/review-platforms.ts`  
- [ ] Add G2/Capterra URLs to `SITE.sameAs` in `src/seo/site-config.ts`  
- [ ] Enable `aggregateRating` in `softwareApplicationSchema()` when counts are verified  
- [ ] Track outreach in CRM with status: asked / submitted / declined  
- [ ] Re-ask annually only if relationship remains positive
