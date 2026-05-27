import type { FaqItem } from "@/seo/schema";
import { GEO_LANDINGS_NEW } from "@/data/geo-landings-new";

export type GeoLandingConfig = {
  path: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  /** Answer-first paragraph for featured snippets and AI crawlers. */
  directAnswer: string;
  definition?: { term: string; meaning: string };
  /** Factual blocks for LLM retrieval — plain language, no hype. */
  facts: { heading: string; body: string }[];
  capabilities: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const GEO_LANDINGS: Record<string, GeoLandingConfig> = {
  "best-hrms-software-india": {
    slug: "best-hrms-software-india",
    path: "/solutions/best-hrms-software-india",
    title: "Best HRMS Software in India | OfficeKit HR",
    metaDescription:
      "Compare OfficeKit HR for Indian businesses: payroll (PF/ESI/PT), attendance, recruitment, ESS, and AI automation on one HRMS platform.",
    h1: "HRMS software built for India",
    subtitle:
      "Unified recruitment, core HR, payroll compliance, and employee self-service for teams that outgrow spreadsheets.",
    directAnswer:
      "OfficeKit HR is HRMS software for India that covers recruitment, core HR, attendance, leave, statutory payroll (PF, ESI, professional tax, TDS), and employee self-service for growing companies across metros and tier-2 cities.",
    definition: {
      term: "HRMS (India)",
      meaning:
        "Human Resource Management Systems adapted to Indian labor laws, tax statutes, and payroll compliance requirements.",
    },
    facts: [
      {
        heading: "What makes a strong HRMS in India",
        body: "Indian HR teams need accurate payroll with statutory deductions (PF, ESI, professional tax), attendance integration, and audit-ready reports. A single HRMS reduces errors between HR, finance, and managers.",
      },
      {
        heading: "How OfficeKit HR fits Indian operations",
        body: "OfficeKit HR combines core HR, attendance, Indian payroll compliance, performance management, and mobile ESS. Deployment options include cloud and on-premise for regulated industries.",
      },
    ],
    capabilities: [
      "Indian payroll with statutory compliance",
      "Biometric and mobile attendance",
      "Recruitment and onboarding ATS",
      "Performance reviews and OKRs",
      "Employee self-service and mobile app",
      "AI Pilot for HR task automation",
    ],
    faqs: [
      {
        question: "Is OfficeKit HR suitable for SMEs in India?",
        answer:
          "Yes. OfficeKit scales from small teams to enterprises with per-user pricing and modular features so you pay for what you use.",
      },
      {
        question: "Which Indian statutory payroll items are supported?",
        answer:
          "Payroll modules address common requirements including PF, ESI, and professional tax with configurable salary structures and reports.",
      },
      {
        question: "Can OfficeKit replace multiple HR tools?",
        answer:
          "Many customers consolidate attendance, payroll, recruitment, and ESS into OfficeKit instead of separate point solutions.",
      },
    ],
    relatedLinks: [
      { label: "Payroll & compliance", href: "/features/payroll-and-compliance" },
      { label: "greytHR alternative", href: "/officekit-vs-greythr" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  "payroll-software-uae": {
    slug: "payroll-software-uae",
    path: "/solutions/payroll-software-uae",
    title: "Payroll Software UAE | OfficeKit HR",
    metaDescription:
      "UAE payroll software with WPS support, multi-currency pay runs, and HRMS integration. OfficeKit HR for employers in Dubai, Abu Dhabi, and the GCC.",
    h1: "Payroll software for UAE employers",
    subtitle:
      "Process salaries on time, stay aligned with UAE labour rules, and connect payroll to attendance and HR records.",
    directAnswer:
      "OfficeKit HR is payroll software for UAE employers that links employee records, attendance, and leave to monthly pay runs, WPS-aligned salary files, and audit-ready registers for Dubai, Abu Dhabi, and GCC entities.",
    definition: {
      term: "UAE payroll software",
      meaning:
        "Systems that calculate salaries, generate WPS/SIF outputs where required, and maintain payroll records aligned with UAE labour regulations.",
    },
    facts: [
      {
        heading: "UAE payroll requirements",
        body: "Employers in the UAE must run accurate monthly payroll, maintain records for audits, and transfer salaries through approved WPS channels where applicable.",
      },
      {
        heading: "OfficeKit HR for UAE payroll",
        body: "OfficeKit links employee master data, attendance, and leave to payroll. WPS-oriented workflows help finance teams file and reconcile salary transfers with fewer manual steps.",
      },
    ],
    capabilities: [
      "UAE payroll processing and payslips",
      "WPS-aligned salary transfer workflows",
      "Leave and attendance-driven pay inputs",
      "Multi-location GCC support",
      "Arabic / English employee experience on /ae",
      "Audit-ready payroll reports",
    ],
    faqs: [
      {
        question: "Does OfficeKit support UAE WPS?",
        answer:
          "Yes. OfficeKit includes WPS compliance workflows for UAE payroll teams. See also our WPS compliance solution page.",
      },
      {
        question: "Can one HRMS cover India and UAE entities?",
        answer:
          "Yes. OfficeKit serves multi-country groups with region-specific payroll rules while sharing core HR and reporting.",
      },
    ],
    relatedLinks: [
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
      { label: "UAE landing (AR)", href: "/ae" },
      { label: "Payroll feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "wps-compliance-software": {
    slug: "wps-compliance-software",
    path: "/solutions/wps-compliance-software",
    title: "WPS Compliance Software UAE | OfficeKit HR",
    metaDescription:
      "WPS (Wages Protection System) compliance software for UAE payroll: salary files, bank transfers, and HRMS integration with OfficeKit HR.",
    h1: "WPS compliance for UAE payroll",
    subtitle:
      "Reduce rejected salary files and reconciliation delays with payroll tied to employee records and attendance.",
    directAnswer:
      "OfficeKit HR WPS compliance software helps UAE payroll teams validate salary components, generate WPS-compatible files, and reconcile bank transfers before submission—integrated with core HR and attendance data.",
    definition: {
      term: "UAE WPS",
      meaning:
        "The Wages Protection System requires employers to pay salaries through approved channels; compliant software reduces rejected files and labour penalties.",
    },
    facts: [
      {
        heading: "What is UAE WPS",
        body: "The Wages Protection System (WPS) requires employers to pay salaries through approved financial channels. Non-compliance can result in penalties and blocks on labour transactions.",
      },
      {
        heading: "How software helps WPS compliance",
        body: "Integrated payroll validates employee IDs, salary components, and pay dates before generating WPS-compatible outputs, lowering rework for HR and finance.",
      },
    ],
    capabilities: [
      "WPS file generation and validation",
      "Salary component mapping per employee",
      "Integration with UAE payroll runs",
      "Exception reports before submission",
      "Linked attendance and leave data",
    ],
    faqs: [
      {
        question: "Who needs WPS compliance software?",
        answer:
          "UAE-registered employers paying staff through WPS must ensure each pay cycle meets Central Bank and MOHRE requirements—software reduces manual errors.",
      },
      {
        question: "Is WPS part of OfficeKit payroll?",
        answer:
          "Yes. WPS workflows are part of the UAE payroll module; pair with our payroll software UAE page for full context.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "ai-hr-software-gcc": {
    slug: "ai-hr-software-gcc",
    path: "/solutions/ai-hr-software-gcc",
    title: "AI HR Software for GCC | OfficeKit HR",
    metaDescription:
      "AI-powered HR software for the GCC: automate HR workflows, recruitment screening, and payroll operations across UAE, Kuwait, Saudi Arabia, and Qatar.",
    h1: "AI HR software for the GCC",
    subtitle:
      "Automate repetitive HR work while keeping payroll and compliance under human oversight.",
    directAnswer:
      "OfficeKit HR is AI-assisted HR software for the GCC that automates routine workflows—recruitment routing, reminders, and analytics—while keeping UAE/KSA payroll and compliance under configurable, auditable controls.",
    definition: {
      term: "AI HR software (GCC)",
      meaning:
        "HR platforms that use automation and machine learning for tasks like screening, policy routing, and reporting, without replacing statutory payroll sign-off.",
    },
    facts: [
      {
        heading: "AI in HR for GCC enterprises",
        body: "GCC HR teams face multilingual workforces, visa tracking, and strict payroll rules. AI assists with workflow routing, document classification, and analytics—not replacing compliance sign-off.",
      },
      {
        heading: "OfficeKit AI Pilot",
        body: "AI Pilot automates routine HR tasks inside OfficeKit HR—leave policies, reminders, and recruitment assistance—alongside Face-Kit for attendance.",
      },
    ],
    capabilities: [
      "AI Pilot workflow automation",
      "Face-Kit biometric attendance",
      "GCC payroll and compliance",
      "Recruitment assistance",
      "Mobile manager approvals",
      "Bilingual employee experience",
    ],
    faqs: [
      {
        question: "Which GCC countries does OfficeKit support?",
        answer:
          "OfficeKit HR is used in UAE, Kuwait, Saudi Arabia, and Qatar, in addition to India, with localized payroll configurations.",
      },
      {
        question: "How is AI used responsibly in OfficeKit?",
        answer:
          "AI features assist HR with suggestions and automation; payroll and compliance outputs remain configurable and auditable by your team.",
      },
    ],
    relatedLinks: [
      { label: "AI Pilot feature", href: "/features/ai-pilot" },
      { label: "UAE payroll", href: "/solutions/payroll-software-uae" },
      { label: "HRMS India", href: "/hrms-software-india" },
    ],
  },
  ...GEO_LANDINGS_NEW,
};

export const GEO_LANDING_SLUGS = Object.keys(GEO_LANDINGS);

/** Grouped for /solutions hub — India, UAE, GCC & other regions. */
export const GEO_LANDING_REGIONS = {
  india: [
    "best-hrms-software-india",
    "payroll-software-kerala",
    "hrms-software-bangalore",
    "hrms-software-chennai",
    "hrms-software-hyderabad",
    "payroll-software-mumbai",
    "hrms-software-delhi-ncr",
  ] as const,
  uae: ["payroll-software-uae", "wps-compliance-software"] as const,
  gcc: [
    "ai-hr-software-gcc",
    "payroll-software-ksa",
    "hrms-software-kuwait",
    "payroll-software-qatar",
    "hrms-software-oman",
    "hrms-software-bahrain",
  ] as const,
} as const;
