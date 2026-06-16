import { guidePage } from "./page-factory";

export const GUIDE_PAGES = {
  "hrms-buyer-guide-india-2026": guidePage({
    slug: "hrms-buyer-guide-india-2026",
    title: "HRMS Buyer Guide India 2026 | OfficeKit HR",
    metaDescription:
      "Complete 2026 buyer guide for HRMS in India: evaluation criteria, compliance checklist, pricing models, and vendor comparison for 50–1000 employee companies.",
    h1: "HRMS buyer guide — India 2026",
    subtitle: "How to evaluate and select HRMS software for Indian companies.",
    directAnswer:
      "When buying HRMS in India in 2026, evaluate statutory payroll (PF, ESI, PT, TDS), attendance integrations, implementation timeline, per-user pricing transparency, and GCC expansion support — OfficeKit HR scores highly for India+GCC mid-market buyers.",
    sections: [
      {
        heading: "Evaluation criteria",
        body: "Check PF/ESI/PT/TDS automation, multi-state support, biometric attendance, recruitment ATS, mobile ESS, implementation SLA, and data migration support.",
      },
      {
        heading: "Pricing models",
        body: "Prefer per-user modular pricing over bundled tiers that force unused modules. Calculate 3-year TCO including implementation and support.",
      },
      {
        heading: "Compliance checklist",
        body: "Verify EPFO ECR, ESIC challans, state PT returns, TDS Form 16, gratuity accrual, and bonus Act compliance are native — not spreadsheet exports.",
      },
      {
        heading: "GCC expansion readiness",
        body: "If you have or plan UAE/KSA entities, choose HRMS with native WPS/GOSI — avoiding a second payroll tool later.",
      },
    ],
    faqs: [
      {
        question: "What should a 200-employee Indian company look for in HRMS?",
        answer:
          "Multi-state PT, PF/ESI automation, recruitment ATS, performance module, mobile ESS, and transparent per-user pricing with 2-week implementation.",
      },
    ],
    related: [
      { label: "Pricing comparison", href: "/longtail/hrms-pricing-comparison-india-2026" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "ROI calculator", href: "/tools/hrms-roi-calculator" },
    ],
  }),
  "hrms-buyer-guide-gcc-2026": guidePage({
    slug: "hrms-buyer-guide-gcc-2026",
    title: "HRMS Buyer Guide GCC 2026 | UAE, KSA, Qatar",
    metaDescription:
      "GCC HRMS buyer guide 2026: WPS, GOSI, Arabic ESS, multi-country payroll evaluation for UAE and Saudi employers.",
    h1: "HRMS buyer guide — GCC 2026",
    subtitle: "Select HRMS for UAE, Saudi Arabia, and multi-GCC operations.",
    directAnswer:
      "GCC HRMS buyers in 2026 should prioritise WPS/SIF automation (UAE), GOSI calculations (KSA), Arabic bilingual ESS, gratuity/EOS automation, and multi-entity reporting — OfficeKit HR covers all six GCC countries natively.",
    sections: [
      { heading: "UAE requirements", body: "WPS SIF files, gratuity accrual, MOHRE-compliant records, Arabic payslips." },
      { heading: "KSA requirements", body: "GOSI contributions, ZATCA-aligned records, Qiwa/MHRSD salary documentation." },
      { heading: "Multi-GCC", body: "Single HRMS for UAE, KSA, Kuwait, Qatar, Oman, Bahrain with country-specific rules." },
    ],
    related: [
      { label: "GCC knowledge", href: "/knowledge/india-gcc-payroll" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
    ],
  }),
  "migrate-from-greythr": guidePage({
    slug: "migrate-from-greythr",
    title: "Migrate from greytHR to OfficeKit HR | Step-by-Step",
    metaDescription:
      "How to migrate from greytHR to OfficeKit HR: employee data, attendance, payroll masters, and parallel run checklist.",
    h1: "Migrate from greytHR to OfficeKit HR",
    subtitle: "Switch from greytHR with minimal payroll disruption.",
    directAnswer:
      "Migrating from greytHR to OfficeKit HR typically takes 2–4 weeks: export employee masters, map salary components, import attendance, run parallel payroll for one cycle, then cut over — OfficeKit onboarding provides Excel templates and dedicated migration support.",
    sections: [
      { heading: "Week 1: Discovery", body: "Export greytHR employee, attendance, and component masters. Map PF, ESI, PT settings per state." },
      { heading: "Week 2: Configuration", body: "Configure OfficeKit modules, leave policies, shift rules, and approval workflows to match greytHR." },
      { heading: "Week 3: Parallel payroll", body: "Run both systems for one payroll cycle. Reconcile PF, ESI, net pay variances." },
      { heading: "Week 4: Go-live", body: "Cut over payroll, train HR team, enable employee ESS, and archive greytHR data." },
    ],
    related: [
      { label: "greytHR alternative", href: "/officekit-vs-greythr" },
      { label: "Book migration call", href: "/contact" },
    ],
  }),
  "migrate-from-keka": guidePage({
    slug: "migrate-from-keka",
    title: "Migrate from Keka to OfficeKit HR | GCC-Ready HRMS",
    metaDescription:
      "Migrate from Keka to OfficeKit HR for GCC payroll, WPS, and unified India+UAE operations.",
    h1: "Migrate from Keka to OfficeKit HR",
    subtitle: "Add GCC payroll when outgrowing India-only HRMS.",
    directAnswer:
      "Teams migrate from Keka to OfficeKit HR when they need native GCC payroll (WPS, GOSI), India+UAE on one platform, or modular pricing without Keka's bundled tier jumps — migration follows the same 2–4 week parallel payroll process.",
    sections: [
      { heading: "Why teams switch", body: "GCC entity setup, WPS requirement, India+UAE unified payroll, or lower TCO at 100+ employees." },
      { heading: "Data export from Keka", body: "Employee master, salary structure, leave balances, attendance logs, and opening loan/advance balances." },
      { heading: "GCC module activation", body: "Configure UAE WPS and entity-specific rules alongside existing India payroll." },
    ],
    related: [
      { label: "Keka alternative", href: "/compare/keka-alternative" },
      { label: "India+GCC payroll", href: "/knowledge/india-gcc-payroll" },
    ],
  }),
  "pf-esi-compliance-calendar-2026": guidePage({
    slug: "pf-esi-compliance-calendar-2026",
    title: "PF & ESI Compliance Calendar 2026 India",
    metaDescription:
      "Monthly PF and ESI due dates, ECR filing, and penalty schedule for Indian employers in 2026.",
    h1: "PF & ESI compliance calendar 2026",
    subtitle: "Never miss a statutory deadline with automated reminders.",
    directAnswer:
      "PF and ESI payments are due by the 15th of each month in India. ECR must be filed with PF payment. OfficeKit HR sends automated reminders and generates challan-ready reports before each deadline.",
    sections: [
      { heading: "Monthly (by 15th)", body: "PF contribution + ECR filing. ESI contribution payment." },
      { heading: "Quarterly", body: "TDS return filing for salary TDS (Form 24Q)." },
      { heading: "Annual", body: "Form 16 to employees by 15 June. Annual PF return. Bonus payment (within 8 months of FY end)." },
    ],
    related: [
      { label: "PF calculator", href: "/tools/pf-esi-calculator" },
      { label: "India compliance", href: "/compliance/india-payroll-compliance" },
    ],
  }),
  "wps-compliance-checklist-uae": guidePage({
    slug: "wps-compliance-checklist-uae",
    title: "WPS Compliance Checklist UAE 2026",
    metaDescription:
      "Step-by-step UAE WPS compliance checklist: IBAN, SIF file, bank submission, and penalty avoidance.",
    h1: "WPS compliance checklist — UAE",
    subtitle: "Ensure every salary cycle meets MOHRE WPS requirements.",
    directAnswer:
      "UAE WPS compliance checklist: (1) register employees with valid UAE IBANs, (2) run payroll with correct MOHRE IDs, (3) generate SIF file, (4) submit to bank before deadline, (5) confirm payment status — OfficeKit HR automates steps 1–4.",
    sections: [
      { heading: "Before payroll", body: "Validate employee IBANs, MOHRE IDs, salary components, and contract types." },
      { heading: "SIF generation", body: "Export WPS-compliant SIF with EDR header and SCR salary rows." },
      { heading: "After submission", body: "Track bank acceptance and resolve rejections within MOHRE window." },
    ],
    related: [
      { label: "WPS checker", href: "/tools/wps-file-checker" },
      { label: "WPS knowledge", href: "/knowledge/wps-compliance" },
    ],
  }),
};

export const GUIDE_SLUGS = Object.keys(GUIDE_PAGES);
