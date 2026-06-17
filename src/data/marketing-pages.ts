import type { FaqItem } from "@/seo/schema";

export type ComparisonRow = {
  feature: string;
  officekit: string;
  competitor: string;
};

export type MarketingPageConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  /** Optional hero background (defaults to shared HR banner). */
  heroImage?: string;
  /** First paragraph — optimized for AI answer extraction */
  directAnswer: string;
  definition?: { term: string; meaning: string };
  highlights: string[];
  features: { title: string; description: string }[];
  compliancePoints?: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
  breadcrumb: { name: string; path: string }[];
  comparison?: {
    competitorName: string;
    rows: ComparisonRow[];
    whenCompetitor?: string[];
  };
  priority?: "geo" | "compare" | "industry" | "programmatic";
};

const sharedRelated = {
  uae: [
    { label: "Payroll software UAE", href: "/payroll-software-uae" },
    { label: "WPS compliance", href: "/wps-compliance-software" },
    { label: "UAE landing (Arabic)", href: "/ae" },
    { label: "Book a demo", href: "/contact" },
  ],
  india: [
    { label: "Best payroll software India", href: "/best-payroll-software-india" },
    { label: "HRMS India", href: "/hrms-software-india" },
    { label: "Payroll feature", href: "/features/payroll-and-compliance" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export const MARKETING_PAGES: Record<string, MarketingPageConfig> = {
  "hr-software-uae": {
    slug: "hr-software-uae",
    path: "/hr-software-uae",
    title: "HR Software UAE | OfficeKit HR — WPS & GCC Compliance",
    metaDescription:
      "OfficeKit HR is HR software built for UAE businesses: WPS payroll, Arabic ESS, attendance, leave, and end-of-service workflows. Book a free demo.",
    h1: "HR Software for UAE Businesses",
    subtitle: "Unified HRMS, payroll, and WPS-ready compliance for companies in Dubai, Abu Dhabi, and across the Emirates.",
    directAnswer:
      "OfficeKit HR is HR software for the UAE that combines core HR, payroll, WPS/SIF file generation, attendance, leave, and Arabic employee self-service in one platform—designed for mainland and free-zone companies.",
    definition: {
      term: "HR software (UAE)",
      meaning:
        "Cloud-based systems that manage employee records, payroll, attendance, leave, and labor-law compliance for employers registered in the United Arab Emirates.",
    },
    highlights: [
      "WPS-ready payroll and SIF exports",
      "Arabic & English employee self-service",
      "Gratuity and EOS calculations",
      "Biometric & mobile attendance",
    ],
    features: [
      {
        title: "UAE payroll & WPS",
        description:
          "Run monthly payroll with salary components aligned to UAE labor law and generate WPS-compliant bank files.",
      },
      {
        title: "Core HR for distributed teams",
        description:
          "Centralize contracts, visas, documents, and org structure for HQ and branch employees.",
      },
      {
        title: "Attendance across sites",
        description:
          "Track shifts on construction sites, retail outlets, and offices with mobile and biometric options.",
      },
      {
        title: "Manager & employee apps",
        description:
          "Approve leave, view payslips, and submit HR requests from iOS and Android.",
      },
    ],
    compliancePoints: [
      "WPS salary file (SIF) support",
      "Gratuity accrual tracking",
      "Leave as per UAE labor law templates",
      "Audit-ready payroll registers",
    ],
    faqs: [
      {
        question: "What is the best HR software in the UAE?",
        answer:
          "The best HR software in the UAE depends on company size and compliance needs. OfficeKit HR is built for mid-market employers that need WPS payroll, Arabic ESS, attendance, and HR workflows in one system.",
      },
      {
        question: "Does OfficeKit HR support WPS in the UAE?",
        answer:
          "Yes. OfficeKit HR supports WPS-compliant payroll processing and SIF file generation for UAE bank salary transfers.",
      },
      {
        question: "Can OfficeKit HR work for construction companies in the UAE?",
        answer:
          "Yes. Multi-location attendance, shift scheduling, and payroll for site-based workforces are supported—see our construction HRMS page.",
      },
    ],
    relatedLinks: sharedRelated.uae,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HR Software UAE", path: "/hr-software-uae" },
    ],
    priority: "geo",
  },
  "payroll-software-uae": {
    slug: "payroll-software-uae",
    path: "/payroll-software-uae",
    title: "Payroll Software UAE | WPS-Ready Payroll — OfficeKit HR",
    metaDescription:
      "Automate UAE payroll with WPS/SIF files, gratuity, deductions, and audit reports. OfficeKit HR payroll software for Dubai and GCC teams.",
    h1: "Payroll Software for the UAE",
    subtitle: "Accurate, WPS-compliant payroll with gratuity, allowances, and bank-ready salary files.",
    directAnswer:
      "OfficeKit HR payroll software for the UAE automates salary calculation, deductions, gratuity accrual, and WPS/SIF bank file generation so finance and HR teams close payroll faster with fewer compliance errors.",
    definition: {
      term: "Payroll software (UAE)",
      meaning:
        "Applications that calculate employee salaries, statutory deductions, and produce WPS-compliant payment files for UAE-registered employers.",
    },
    highlights: [
      "WPS & SIF export",
      "Multi-currency ready for GCC",
      "Integrated with attendance & leave",
      "Finance-grade audit trails",
    ],
    features: [
      {
        title: "Salary structure builder",
        description: "Configure basic, housing, transport, and variable pay per grade or employee.",
      },
      {
        title: "WPS file generation",
        description: "Produce bank-ready SIF files aligned with UAE WPS requirements.",
      },
      {
        title: "Gratuity & EOS",
        description: "Track end-of-service benefits with transparent accrual reports.",
      },
      {
        title: "Payslips & ESS",
        description: "Employees access digital payslips in English or Arabic.",
      },
    ],
    compliancePoints: ["UAE WPS", "Gratuity", "Leave encashment", "Payroll registers"],
    faqs: [
      {
        question: "Which payroll software supports WPS in UAE?",
        answer:
          "OfficeKit HR includes WPS/SIF payroll file generation, integrated with attendance and leave so net pay reflects actual days worked.",
      },
      {
        question: "How is UAE gratuity calculated in OfficeKit HR?",
        answer:
          "Gratuity rules are applied based on service tenure and contract type, with accrual reports for finance and HR audit.",
      },
    ],
    relatedLinks: sharedRelated.uae,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Payroll Software UAE", path: "/payroll-software-uae" },
    ],
    priority: "geo",
  },
  "hrms-software-india": {
    slug: "hrms-software-india",
    path: "/hrms-software-india",
    title: "HRMS Software India | Statutory Payroll & HR — OfficeKit HR",
    metaDescription:
      "OfficeKit HR is HRMS software for India: PF, ESI, PT, TDS payroll, attendance, recruitment, and employee self-service. Request a demo.",
    h1: "HRMS Software for India",
    subtitle: "End-to-end HRMS with India statutory payroll, attendance, and compliance built in.",
    directAnswer:
      "OfficeKit HR is HRMS software for India that covers recruitment, core HR, attendance, leave, statutory payroll (PF, ESI, professional tax, TDS), and employee self-service for growing companies across metros and tier-2 cities.",
    definition: {
      term: "HRMS (India)",
      meaning:
        "Human Resource Management Systems adapted to Indian labor laws, tax statutes, and payroll compliance requirements.",
    },
    highlights: [
      "PF, ESI, PT, TDS payroll",
      "Multi-state compliance templates",
      "Recruitment to exit lifecycle",
      "Mobile ESS in English",
    ],
    features: [
      {
        title: "Statutory payroll",
        description: "Automate PF, ESI, PT, and TDS with challan-ready outputs.",
      },
      {
        title: "Attendance & shifts",
        description: "Integrate biometrics and geo-fencing for factory and office staff.",
      },
      {
        title: "Recruitment ATS",
        description: "Track candidates, offers, and onboarding checklists.",
      },
      {
        title: "Performance & OKRs",
        description: "Run review cycles aligned to Indian appraisal calendars.",
      },
    ],
    compliancePoints: ["PF", "ESI", "Professional tax", "TDS", "Form 16 support"],
    faqs: [
      {
        question: "What is the best HRMS software in India?",
        answer:
          "Leading HRMS platforms in India include OfficeKit HR, Keka, greytHR, and Zoho People. OfficeKit HR is strong for mid-market firms needing India payroll, GCC expansion, and AI-assisted HR in one vendor.",
      },
      {
        question: "Does OfficeKit HR support PF and ESI?",
        answer: "Yes. Statutory deductions and filings are built into the India payroll module.",
      },
    ],
    relatedLinks: sharedRelated.india,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HRMS Software India", path: "/hrms-software-india" },
    ],
    priority: "geo",
  },
  "wps-compliance-software": {
    slug: "wps-compliance-software",
    path: "/wps-compliance-software",
    title: "WPS Compliance Software UAE | OfficeKit HR",
    metaDescription:
      "Generate WPS-compliant SIF files, validate salaries, and align payroll with UAE WPS rules using OfficeKit HR.",
    h1: "WPS Compliance Software for UAE Payroll",
    subtitle: "Reduce WPS rejections with validated salary files and payroll audit trails.",
    directAnswer:
      "OfficeKit HR WPS compliance software helps UAE employers generate validated WPS/SIF salary files, reconcile payroll with attendance, and maintain audit logs for Ministry of Human Resources & Emiratisation (MOHRE) wage protection requirements.",
    definition: {
      term: "WPS (Wage Protection System)",
      meaning:
        "UAE government system requiring employers to pay salaries through approved banks using standardized salary information files (SIF).",
    },
    highlights: [
      "SIF file export",
      "Salary validation checks",
      "MOHRE-aligned workflows",
      "Integrated attendance-to-pay",
    ],
    features: [
      {
        title: "SIF generation",
        description: "Export bank-ready files with employee IBAN, amounts, and pay periods.",
      },
      {
        title: "Pre-submission validation",
        description: "Catch missing IBANs, zero salaries, or period mismatches before upload.",
      },
      {
        title: "Payroll reconciliation",
        description: "Match paid days with attendance and leave deductions.",
      },
    ],
    compliancePoints: ["WPS", "SIF", "UAE labor law payroll"],
    faqs: [
      {
        question: "What is WPS compliance software?",
        answer:
          "It is payroll HR software that produces and validates UAE Wage Protection System (WPS) salary files so employees are paid on time through approved channels.",
      },
      {
        question: "Can OfficeKit HR fix WPS file rejections?",
        answer:
          "Built-in validation flags common rejection causes—invalid IBAN, wrong establishment ID, or amount mismatches—before files reach the bank.",
      },
    ],
    relatedLinks: sharedRelated.uae,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "WPS Compliance", path: "/wps-compliance-software" },
    ],
    priority: "geo",
  },
  "best-payroll-software-india": {
    slug: "best-payroll-software-india",
    path: "/best-payroll-software-india",
    title: "Best Payroll Software India 2026 | OfficeKit HR",
    metaDescription:
      "Compare the best payroll software for India: statutory compliance, automation, and scalability. See why teams choose OfficeKit HR.",
    h1: "Best Payroll Software for India",
    subtitle: "Statutory-ready payroll automation for finance and HR teams.",
    directAnswer:
      "The best payroll software in India automates salary processing with PF, ESI, professional tax, and TDS compliance, integrates attendance, and scales from 50 to 5,000 employees—criteria OfficeKit HR is built to meet.",
    highlights: [
      "Full India statutory stack",
      "Attendance-linked pay runs",
      "Employee self-service payslips",
      "Expansion to GCC payroll",
    ],
    features: [
      {
        title: "One-click pay runs",
        description: "Process monthly payroll with previews and approval workflows.",
      },
      {
        title: "Compliance calendar",
        description: "Track due dates for challans and filings.",
      },
      {
        title: "Multi-entity payroll",
        description: "Support group companies with separate ledgers.",
      },
    ],
    faqs: [
      {
        question: "What is the best payroll software in India for SMEs?",
        answer:
          "SMEs often choose OfficeKit HR, greytHR, or Keka. OfficeKit HR suits firms that also operate in the GCC and want one HRMS for India and UAE payroll.",
      },
    ],
    relatedLinks: sharedRelated.india,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Best Payroll Software India", path: "/best-payroll-software-india" },
    ],
    priority: "geo",
  },
  "best-hrms-for-construction": {
    slug: "best-hrms-for-construction",
    path: "/best-hrms-for-construction",
    title: "Best HRMS for Construction | Site Attendance & Payroll",
    metaDescription:
      "HRMS for construction: multi-site attendance, shift payroll, subcontractor tracking, and GCC compliance. OfficeKit HR.",
    h1: "Best HRMS for Construction Companies",
    subtitle: "Manage site workforces, shifts, and payroll across projects in India and the GCC.",
    directAnswer:
      "The best HRMS for construction handles multi-site biometric attendance, shift-based payroll, worker compliance documents, and WPS-ready UAE payroll—capabilities provided by OfficeKit HR for contractors and EPC firms.",
    highlights: [
      "Site-level attendance",
      "Shift & overtime rules",
      "Bulk worker onboarding",
      "UAE WPS for site payroll",
    ],
    features: [
      {
        title: "Project-based attendance",
        description: "Allocate workers to sites and cost centers automatically.",
      },
      {
        title: "Subcontractor workforce",
        description: "Track temp labor IDs, visas, and safety induction status.",
      },
      {
        title: "Mobile approvals",
        description: "Site supervisors approve leave and overtime from the field.",
      },
    ],
    faqs: [
      {
        question: "Why do construction companies need specialized HRMS?",
        answer:
          "Construction HR involves rotating crews, site transfers, and strict attendance-to-pay linkage—generic HR tools often miss shift logic and multi-project costing.",
      },
    ],
    relatedLinks: [
      { label: "HR software UAE", href: "/hr-software-uae" },
      { label: "Attendance feature", href: "/features/attendance-and-leave" },
      { label: "Contact sales", href: "/contact" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HRMS for Construction", path: "/best-hrms-for-construction" },
    ],
    priority: "industry",
  },
  "officekit-vs-keka": {
    slug: "officekit-vs-keka",
    path: "/officekit-vs-keka",
    title: "OfficeKit HR vs Keka | HRMS Comparison 2026",
    metaDescription:
      "Compare OfficeKit HR vs Keka: India payroll, UAE WPS, GCC expansion, pricing, and AI HR features. See which HRMS fits your team.",
    h1: "OfficeKit HR vs Keka",
    subtitle: "An honest comparison for India-first teams expanding to the GCC.",
    directAnswer:
      "OfficeKit HR vs Keka: both offer India payroll and modern HRMS features. OfficeKit HR differentiates with native UAE WPS payroll, Arabic ESS, and unified India + GCC compliance—ideal when you operate across India and the Middle East. Keka is widely used for India-only mid-market HR.",
    highlights: [
      "GCC + India in one platform",
      "WPS & Arabic ESS",
      "AI Pilot automation",
      "Competitive mid-market pricing",
    ],
    features: [
      {
        title: "GCC payroll",
        description: "OfficeKit HR includes UAE WPS; verify Keka modules for your GCC entities.",
      },
      {
        title: "Implementation",
        description: "OfficeKit offers guided rollout for payroll and attendance integrations.",
      },
    ],
    comparison: {
      competitorName: "Keka",
      rows: [
        { feature: "India statutory payroll", officekit: "Yes", competitor: "Yes" },
        { feature: "UAE WPS / SIF", officekit: "Native", competitor: "Add-on / partner" },
        { feature: "Arabic ESS", officekit: "Yes", competitor: "Limited" },
        { feature: "GCC multi-country", officekit: "IN, AE, KW, SA, QA", competitor: "Primarily India" },
        { feature: "AI HR automation", officekit: "AI Pilot", competitor: "Keka AI features" },
        { feature: "Construction shifts", officekit: "Strong", competitor: "Moderate" },
      ],
      whenCompetitor: [
        "India-only operations with no GCC entities — Keka's India brand and UX are mature",
        "You want Keka's integrated expense, hiring, and helpdesk modules",
      ],
    },
    faqs: [
      {
        question: "Is OfficeKit HR a good Keka alternative?",
        answer:
          "Yes, especially if you need UAE WPS payroll, Arabic employee apps, or one vendor for India and GCC entities.",
      },
    ],
    relatedLinks: [
      { label: "vs greytHR", href: "/officekit-vs-greythr" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Book demo", href: "/contact" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "OfficeKit vs Keka", path: "/officekit-vs-keka" },
    ],
    priority: "compare",
  },
  "officekit-vs-greythr": {
    slug: "officekit-vs-greythr",
    path: "/officekit-vs-greythr",
    title: "OfficeKit HR vs greytHR | HRMS Comparison",
    metaDescription:
      "OfficeKit HR vs greytHR comparison: payroll, UAE compliance, mobile ESS, and AI features for India and GCC businesses.",
    h1: "OfficeKit HR vs greytHR",
    subtitle: "Modern HRMS with GCC compliance vs established India payroll leader.",
    directAnswer:
      "OfficeKit HR vs greytHR: greytHR is a long-standing India payroll and HR platform. OfficeKit HR adds AI workflows, mobile-first ESS, and built-in UAE WPS for companies that outgrow India-only tools or run parallel GCC operations.",
    highlights: ["UAE WPS native", "AI Pilot", "Unified India + GCC", "Modern mobile UX"],
    features: [],
    comparison: {
      competitorName: "greytHR",
      rows: [
        { feature: "India payroll", officekit: "Yes", competitor: "Yes" },
        { feature: "UAE WPS", officekit: "Built-in", competitor: "Not core focus" },
        { feature: "AI automation", officekit: "AI Pilot", competitor: "Limited" },
        { feature: "Mobile ESS", officekit: "iOS & Android", competitor: "Yes" },
        { feature: "Implementation speed", officekit: "Agile rollout", competitor: "Established process" },
      ],
      whenCompetitor: [
        "India-only payroll with no GCC expansion — greytHR's India depth and partner network are established",
        "You are already on greytHR and migration cost outweighs GCC payroll needs",
      ],
    },
    faqs: [
      {
        question: "greytHR alternative for UAE companies?",
        answer: "OfficeKit HR is a strong greytHR alternative when UAE WPS and Arabic ESS are required alongside India payroll.",
      },
    ],
    relatedLinks: [
      { label: "vs Keka", href: "/officekit-vs-keka" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
      { label: "Contact", href: "/contact" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "OfficeKit vs greytHR", path: "/officekit-vs-greythr" },
    ],
    priority: "compare",
  },
  "officekit-vs-zoho-people": {
    slug: "officekit-vs-zoho-people",
    path: "/officekit-vs-zoho-people",
    title: "OfficeKit HR vs Zoho People | HRMS Comparison 2026",
    metaDescription:
      "Compare OfficeKit HR vs Zoho People: India payroll, UAE WPS, GCC compliance, AI automation, and bundled pricing for HR teams.",
    h1: "OfficeKit HR vs Zoho People",
    subtitle: "Unified India + GCC HRMS vs Zoho's modular HR ecosystem.",
    directAnswer:
      "OfficeKit HR vs Zoho People: Zoho People handles core HR globally but GCC payroll and India statutory compliance often require Zoho Payroll and integrations. OfficeKit HR bundles India PF/ESI/PT/TDS and UAE WPS, KSA GOSI, and Kuwait PIFSS in one HRMS with AI Pilot and Arabic ESS.",
    highlights: [
      "India + GCC payroll in one platform",
      "Native UAE WPS workflows",
      "AI Pilot automation",
      "Transparent per-user pricing",
    ],
    features: [
      {
        title: "Bundled payroll",
        description:
          "OfficeKit includes India and GCC payroll without separate Zoho Payroll subscriptions.",
      },
      {
        title: "GCC depth",
        description:
          "Built-in WPS, GOSI, and PIFSS for employers operating across the Gulf.",
      },
    ],
    comparison: {
      competitorName: "Zoho People",
      rows: [
        { feature: "India statutory payroll", officekit: "Built-in", competitor: "Via Zoho Payroll" },
        { feature: "UAE WPS", officekit: "Native", competitor: "Integration required" },
        { feature: "GCC multi-country", officekit: "6 countries", competitor: "Limited GCC depth" },
        { feature: "AI automation", officekit: "AI Pilot + Face-Kit", competitor: "Zoho Blue / workflows" },
        { feature: "Arabic ESS", officekit: "Yes", competitor: "Partial" },
        { feature: "Pricing model", officekit: "Per-user tiers on /pricing", competitor: "HR + Payroll separate" },
      ],
      whenCompetitor: [
        "You are invested in the Zoho ecosystem (CRM, Books, Projects) and want native integrations",
        "Global HR beyond India/GCC matters more than bundled GCC payroll",
      ],
    },
    faqs: [
      {
        question: "Is OfficeKit HR a good Zoho People alternative?",
        answer:
          "Yes, when you need India and GCC payroll on one platform with WPS compliance and bilingual employee apps — without managing multiple Zoho products.",
      },
      {
        question: "Can data migrate from Zoho People to OfficeKit?",
        answer:
          "Yes. OfficeKit onboarding imports employee, attendance, and payroll masters via migration templates.",
      },
    ],
    relatedLinks: [
      { label: "vs Keka", href: "/officekit-vs-keka" },
      { label: "vs greytHR", href: "/officekit-vs-greythr" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "OfficeKit vs Zoho People", path: "/officekit-vs-zoho-people" },
    ],
    priority: "compare",
  },
  "officekit-vs-darwinbox": {
    slug: "officekit-vs-darwinbox",
    path: "/officekit-vs-darwinbox",
    title: "OfficeKit HR vs Darwinbox | HRMS Comparison 2026",
    metaDescription:
      "Compare OfficeKit HR vs Darwinbox for mid-market teams: India payroll, GCC compliance, AI automation, implementation speed, and per-user pricing.",
    h1: "OfficeKit HR vs Darwinbox",
    subtitle: "Mid-market HRMS with GCC payroll vs enterprise-scale Darwinbox.",
    directAnswer:
      "OfficeKit HR vs Darwinbox: Darwinbox targets large enterprises with comprehensive HR suites and custom pricing. OfficeKit HR fits mid-market companies (50–1,000+ employees) needing India statutory payroll, native UAE WPS and KSA GOSI, AI Pilot automation, and faster rollout at transparent per-user pricing.",
    highlights: [
      "Mid-market pricing",
      "Native GCC payroll",
      "Weeks-not-months rollout",
      "AI Pilot + Face-Kit",
    ],
    features: [
      {
        title: "Implementation",
        description:
          "Agile guided onboarding in weeks vs typical 3–6 month enterprise rollouts.",
      },
      {
        title: "GCC compliance",
        description:
          "WPS, GOSI, PIFSS, PASI, and SIO built in for multi-country Gulf operations.",
      },
    ],
    comparison: {
      competitorName: "Darwinbox",
      rows: [
        { feature: "Target market", officekit: "Mid-market 50–1,000+", competitor: "Enterprise 500+" },
        { feature: "India payroll", officekit: "Yes", competitor: "Yes" },
        { feature: "UAE WPS", officekit: "Native", competitor: "Configurable" },
        { feature: "AI automation", officekit: "AI Pilot", competitor: "Darwinbox AI suite" },
        { feature: "Pricing", officekit: "Published per-user tiers", competitor: "Enterprise custom" },
        { feature: "Implementation", officekit: "Weeks", competitor: "3–6 months typical" },
      ],
      whenCompetitor: [
        "Large enterprise (1,000+ employees) needing Darwinbox's full HCM suite and APAC scale",
        "Budget for enterprise custom pricing and long implementation programs",
      ],
    },
    faqs: [
      {
        question: "Is OfficeKit a Darwinbox alternative for mid-market?",
        answer:
          "Yes. OfficeKit delivers enterprise-grade payroll and HR automation at mid-market pricing with faster implementation — especially for India + GCC operations.",
      },
      {
        question: "How does OfficeKit pricing compare to Darwinbox?",
        answer:
          "OfficeKit publishes per-user tiers on /pricing. Darwinbox uses custom enterprise quotes. Contact sales for a headcount-based comparison.",
      },
    ],
    relatedLinks: [
      { label: "vs Keka", href: "/officekit-vs-keka" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "AI HR GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Pricing", href: "/pricing" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "OfficeKit vs Darwinbox", path: "/officekit-vs-darwinbox" },
    ],
    priority: "compare",
  },
  "hr-software-dubai": {
    slug: "hr-software-dubai",
    path: "/hr-software-dubai",
    title: "HR Software Dubai | OfficeKit HR",
    metaDescription:
      "HR and payroll software for Dubai companies: WPS, free zone, and mainland compliance with OfficeKit HR.",
    h1: "HR Software in Dubai",
    subtitle: "Payroll, attendance, and HR for Dubai mainland and free-zone entities.",
    directAnswer:
      "OfficeKit HR provides HR software for Dubai businesses with WPS payroll, multi-entity support, and employee apps used by teams in DIFC, mainland, and industrial zones.",
    highlights: ["Dubai payroll", "WPS files", "Multi-entity", "Arabic ESS"],
    features: [
      {
        title: "Free zone & mainland",
        description: "Configure policies per establishment within one group account.",
      },
    ],
    faqs: [
      {
        question: "Which HR software do Dubai SMEs use?",
        answer:
          "Dubai SMEs use regional and global HRMS vendors; OfficeKit HR is chosen for WPS payroll and India-GCC workforce in one system.",
      },
    ],
    relatedLinks: sharedRelated.uae,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HR Software UAE", path: "/hr-software-uae" },
      { name: "Dubai", path: "/hr-software-dubai" },
    ],
    priority: "programmatic",
  },
  "hr-software-riyadh": {
    slug: "hr-software-riyadh",
    path: "/hr-software-riyadh",
    title: "HR Software Riyadh & Saudi Arabia | OfficeKit HR",
    metaDescription:
      "HRMS for Saudi Arabia: GOSI-ready workflows, attendance, and payroll with OfficeKit HR.",
    h1: "HR Software for Riyadh & Saudi Arabia",
    subtitle: "HR and workforce management for KSA entities.",
    directAnswer:
      "OfficeKit HR supports Saudi Arabia operations with payroll, attendance, and HR records aligned to KSA workforce practices—alongside UAE and India entities in one group.",
    highlights: ["KSA payroll support", "GCC workforce hub", "Arabic ESS", "Group reporting"],
    features: [
      {
        title: "KSA payroll configuration",
        description: "Set up salary components and deductions for Saudi entities.",
      },
    ],
    faqs: [
      {
        question: "HR software for Saudi Arabia?",
        answer:
          "OfficeKit HR serves Saudi entities as part of a GCC rollout, with centralized HR analytics across India and Middle East subsidiaries.",
      },
    ],
    relatedLinks: [
      { label: "HR software UAE", href: "/hr-software-uae" },
      { label: "Contact", href: "/contact" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HR Software Riyadh", path: "/hr-software-riyadh" },
    ],
    priority: "programmatic",
  },
  "hr-software-kochi": {
    slug: "hr-software-kochi",
    path: "/hr-software-kochi",
    title: "HR Software Kochi & Kerala | OfficeKit HR",
    metaDescription:
      "HRMS and payroll for Kochi and Kerala businesses: PF, ESI, attendance, and recruitment with OfficeKit HR.",
    h1: "HR Software in Kochi",
    subtitle: "Local implementation support for Kerala and South India companies.",
    directAnswer:
      "OfficeKit HR is used by Kochi and Kerala businesses for India statutory payroll, attendance, and HR automation—with implementation support from the OfficeKit team in India.",
    highlights: ["Kerala PT", "PF & ESI", "Local support", "GCC expansion path"],
    features: [
      {
        title: "South India payroll",
        description: "Professional tax and state-specific rules for Kerala entities.",
      },
    ],
    faqs: [
      {
        question: "HR software companies in Kochi?",
        answer:
          "Kochi businesses adopt cloud HRMS platforms like OfficeKit HR for payroll compliance and remote workforce management.",
      },
    ],
    relatedLinks: sharedRelated.india,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "HRMS India", path: "/hrms-software-india" },
      { name: "Kochi", path: "/hr-software-kochi" },
    ],
    priority: "programmatic",
  },
  "hr-software-healthcare": {
    slug: "hr-software-healthcare",
    path: "/hr-software-healthcare",
    title: "HR Software for Healthcare | Hospitals & Clinics",
    metaDescription:
      "HRMS for healthcare: shift rostering, credential tracking, payroll, and compliance for hospitals and clinics.",
    h1: "HR Software for Healthcare",
    subtitle: "Shift-based staffing, credential tracking, and compliant payroll for care teams.",
    directAnswer:
      "OfficeKit HR for healthcare organizations manages shift rosters, nurse and clinician credentials, leave, and payroll—including night differential and statutory compliance in India and the GCC.",
    highlights: ["Shift scheduling", "Credential expiry alerts", "Payroll with shifts", "ESS for clinical staff"],
    features: [
      {
        title: "Shift & roster management",
        description: "Build rotating rosters with overtime rules.",
      },
      {
        title: "License & document tracking",
        description: "Alert before medical licenses or visas expire.",
      },
    ],
    faqs: [
      {
        question: "Best HRMS for hospitals in India?",
        answer:
          "Healthcare HRMS must handle 24/7 shifts and compliance documentation—OfficeKit HR provides attendance, payroll, and ESS tuned for clinical workforces.",
      },
    ],
    relatedLinks: [
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Attendance", href: "/features/attendance-and-leave" },
    ],
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Healthcare HR", path: "/hr-software-healthcare" },
    ],
    priority: "programmatic",
  },
  "payroll-software-india": {
    slug: "payroll-software-india",
    path: "/payroll-software-india",
    title: "Payroll Software India | PF, ESI, TDS — OfficeKit HR",
    metaDescription:
      "India payroll software with PF, ESI, PT, TDS, Form 16, and attendance integration. OfficeKit HR.",
    h1: "Payroll Software for India",
    subtitle: "Statutory payroll automation integrated with HR and attendance.",
    directAnswer:
      "OfficeKit HR payroll software for India processes salaries with PF, ESI, professional tax, and TDS, generates payslips and challan data, and connects to attendance for accurate pay days.",
    highlights: ["PF & ESI", "TDS & Form 16", "Multi-state PT", "Attendance-linked"],
    features: [
      {
        title: "Statutory engine",
        description: "Apply India compliance rules by state and entity.",
      },
    ],
    faqs: [
      {
        question: "Top payroll software in India?",
        answer:
          "Leading options include OfficeKit HR, greytHR, Keka, and Zoho Payroll. Choose based on GCC expansion, AI features, and implementation support.",
      },
    ],
    relatedLinks: sharedRelated.india,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Payroll Software India", path: "/payroll-software-india" },
    ],
    priority: "programmatic",
  },
  "attendance-software-uae": {
    slug: "attendance-software-uae",
    path: "/attendance-software-uae",
    title: "Attendance Software UAE | Biometric & Mobile — OfficeKit HR",
    metaDescription:
      "UAE attendance software with biometric, mobile geo check-in, shifts, and payroll integration. OfficeKit HR.",
    h1: "Attendance Software for the UAE",
    subtitle: "Accurate time tracking linked to WPS payroll.",
    directAnswer:
      "OfficeKit HR attendance software for the UAE supports biometric devices, mobile check-in, shift rules, and automatic payroll sync so WPS salary files reflect actual worked hours.",
    highlights: ["Biometric integration", "Mobile attendance", "Shift rules", "WPS payroll link"],
    features: [
      {
        title: "Biometric & Face-Kit",
        description: "Contactless face recognition for high-volume sites.",
      },
    ],
    faqs: [
      {
        question: "Best attendance system in UAE?",
        answer:
          "Choose attendance software that integrates with UAE WPS payroll—OfficeKit HR unifies both.",
      },
    ],
    relatedLinks: sharedRelated.uae,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Attendance UAE", path: "/attendance-software-uae" },
    ],
    priority: "programmatic",
  },
};

export const MARKETING_PAGE_PATHS = Object.values(MARKETING_PAGES).map(
  (p) => p.path
);

export function getMarketingPage(slug: string): MarketingPageConfig | undefined {
  return MARKETING_PAGES[slug];
}
