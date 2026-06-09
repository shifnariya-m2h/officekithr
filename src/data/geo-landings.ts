import type { FaqItem } from "@/seo/schema";
import { GEO_LANDINGS_NEW } from "@/data/geo-landings-new";
import { CANONICAL } from "@/seo/canonical-paths";

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
      { label: "UAE payroll", href: CANONICAL.payrollUae },
      { label: "HRMS India", href: CANONICAL.hrmsIndia },
    ],
  },
  ...GEO_LANDINGS_NEW,
};

export const GEO_LANDING_SLUGS = Object.keys(GEO_LANDINGS);

/** Primary marketing pages linked from /solutions hub (canonical URLs). */
export const GEO_HUB_PRIMARY_LINKS = {
  india: { label: "HRMS software India", path: CANONICAL.hrmsIndia },
  uae: [
    { label: "Payroll software UAE", path: CANONICAL.payrollUae },
    { label: "WPS compliance software", path: CANONICAL.wpsUae },
  ],
} as const;

/** Grouped for /solutions hub — India, UAE, GCC & other regions. */
export const GEO_LANDING_REGIONS = {
  india: [
    "payroll-software-kerala",
    "hrms-software-bangalore",
    "hrms-software-chennai",
    "hrms-software-hyderabad",
    "payroll-software-mumbai",
    "hrms-software-delhi-ncr",
  ] as const,
  uae: [] as const,
  gcc: [
    "ai-hr-software-gcc",
    "payroll-software-ksa",
    "hrms-software-kuwait",
    "payroll-software-qatar",
    "hrms-software-oman",
    "hrms-software-bahrain",
  ] as const,
} as const;
