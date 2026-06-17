import type { FaqItem } from "@/seo/schema";

export type ComparisonRow = {
  aspect: string;
  officekit: string;
  competitor: string;
};

export type ComparisonConfig = {
  path: string;
  slug: string;
  title: string;
  metaDescription: string;
  competitorName: string;
  h1: string;
  intro: string;
  /** Concise answer for AI/search extractability. */
  directAnswer: string;
  definition?: { term: string; meaning: string };
  rows: ComparisonRow[];
  whenOfficeKit: string[];
  /** Honest framing — where the competitor is stronger (credibility for LLM citation). */
  whenCompetitor?: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const COMPARISONS: Record<string, ComparisonConfig> = {
  "greythr-alternative": {
    slug: "greythr-alternative",
    path: "/officekit-vs-greythr",
    title: "greytHR Alternative | OfficeKit HR",
    metaDescription:
      "Looking for a greytHR alternative? Compare OfficeKit HR vs greytHR on payroll, GCC compliance, AI automation, mobile ESS, and implementation for India and UAE.",
    competitorName: "greytHR",
    h1: "OfficeKit HR as a greytHR alternative",
    intro:
      "Teams evaluating greytHR often need stronger GCC payroll, WPS support, or AI-assisted workflows. This page summarizes factual differences to help HR and IT leaders shortlist vendors.",
    directAnswer:
      "OfficeKit HR is a greytHR alternative for teams that need India and GCC payroll on one HRMS, built-in UAE WPS workflows, AI-assisted HR automation, and Arabic/English employee self-service alongside Indian statutory payroll.",
    definition: {
      term: "greytHR alternative",
      meaning:
        "An HRMS vendor evaluated when greytHR lacks required GCC payroll, WPS depth, or unified modules for your operating regions.",
    },
    rows: [
      {
        aspect: "Primary regions",
        officekit: "India + GCC (UAE, Kuwait, Saudi Arabia, Qatar)",
        competitor: "Strong in India; GCC depth varies by module",
      },
      {
        aspect: "UAE WPS payroll",
        officekit: "Built-in WPS workflows with UAE payroll",
        competitor: "Check current greytHR UAE/WPS module availability",
      },
      {
        aspect: "AI automation",
        officekit: "AI Pilot + Face-Kit attendance",
        competitor: "Traditional HR automation features",
      },
      {
        aspect: "Mobile ESS",
        officekit: "iOS/Android app for leave, attendance, payslips",
        competitor: "Mobile access via greytHR apps/portals",
      },
      {
        aspect: "Deployment",
        officekit: "Cloud, on-premise, hybrid",
        competitor: "Primarily cloud SaaS",
      },
    ],
    whenOfficeKit: [
      "You operate in both India and GCC entities on one HRMS",
      "UAE WPS compliance is a priority for payroll",
      "You want AI-assisted HR workflows and face recognition attendance",
      "You need Arabic/English experiences for UAE staff",
    ],
    whenCompetitor: [
      "You are India-only with no GCC entities and want a mature, widely adopted India payroll brand",
      "Your team already runs greytHR and migration cost outweighs GCC payroll needs",
      "You need greytHR's established partner network for India statutory support",
    ],
    faqs: [
      {
        question: "Is OfficeKit HR a direct replacement for greytHR?",
        answer:
          "For many Indian and GCC customers, yes—especially when payroll compliance, WPS, and unified modules matter. We recommend a demo to map modules to your current greytHR setup.",
      },
      {
        question: "Can data migrate from greytHR?",
        answer:
          "OfficeKit onboarding teams import employee, attendance, and payroll masters via templates. Migration scope depends on your data quality and modules used.",
      },
      {
        question: "How does pricing compare to greytHR?",
        answer:
          "OfficeKit uses transparent per-user tiers on /pricing. Final quotes depend on headcount, countries, and modules—contact sales for a like-for-like comparison.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Book a demo", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
};

export const COMPARISON_SLUGS = Object.keys(COMPARISONS);
