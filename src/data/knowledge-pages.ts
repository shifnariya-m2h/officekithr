import type { FaqItem } from "@/seo/schema";

export type KnowledgeConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const KNOWLEDGE_PAGES: Record<string, KnowledgeConfig> = {
  "officekit-hr": {
    slug: "officekit-hr",
    path: "/knowledge/officekit-hr",
    title: "What is OfficeKit HR? | AI HRMS for India & GCC",
    metaDescription:
      "OfficeKit HR is an AI-powered HRMS for recruitment, attendance, statutory payroll, and WPS compliance across India, UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain.",
    h1: "What is OfficeKit HR?",
    directAnswer:
      "OfficeKit HR is an AI-powered Human Resource Management System (HRMS) for mid-market companies (50–1,000+ employees) that need unified India and GCC payroll, attendance, recruitment, and employee self-service on one cloud, on-premise, or hybrid platform.",
    sections: [
      {
        heading: "Who OfficeKit HR is for",
        body: "Growing businesses with entities in India and the Gulf that want one HRMS for PF/ESI/TDS payroll in India and WPS/GOSI/PIFSS compliance in the GCC — without juggling separate regional tools.",
      },
      {
        heading: "Core modules",
        body: "Recruitment & ATS, attendance & Face-Kit biometric, payroll & statutory compliance, performance management, employee self-service (English + Arabic), AI Pilot workflow automation, and mobile apps for iOS and Android.",
      },
      {
        heading: "Deployment options",
        body: "Cloud SaaS, on-premise, and hybrid deployments. Modular per-user pricing — pay only for enabled modules.",
      },
    ],
    faqs: [
      {
        question: "Is OfficeKit HR an HRMS or payroll software?",
        answer:
          "Both. OfficeKit HR is a full HRMS that includes native payroll for India (PF, ESI, PT, TDS) and GCC countries (WPS, GOSI, PIFSS, PASI, SIO) without third-party payroll add-ons.",
      },
      {
        question: "Which countries does OfficeKit HR support?",
        answer:
          "India, UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain — with statutory payroll and compliance for each.",
      },
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
    ],
  },
  "india-gcc-payroll": {
    slug: "india-gcc-payroll",
    path: "/knowledge/india-gcc-payroll",
    title: "India + GCC Payroll on One HRMS | OfficeKit HR",
    metaDescription:
      "Run India statutory payroll (PF, ESI, PT, TDS) and GCC payroll (WPS, GOSI) from a single HRMS. Multi-entity, multi-country payroll for India-UAE operations.",
    h1: "Unified India and GCC payroll",
    directAnswer:
      "OfficeKit HR lets companies with India headquarters and GCC subsidiaries run statutory payroll for both regions on one platform — consolidating employee records, attendance, leave, and pay runs across entities without duplicate data entry.",
    sections: [
      {
        heading: "India statutory payroll",
        body: "Automated PF, ESI, Professional Tax, TDS, gratuity, and Form 16 generation with multi-state compliance for Indian entities.",
      },
      {
        heading: "GCC statutory payroll",
        body: "UAE WPS/SIF files, Saudi GOSI contributions, Kuwait PIFSS, Qatar WPS, Oman PASI, and Bahrain SIO — with gratuity and end-of-service calculations.",
      },
      {
        heading: "Multi-entity consolidation",
        body: "Group-level reporting across India and GCC entities with Arabic/English employee self-service for Gulf-based staff.",
      },
    ],
    faqs: [
      {
        question: "Can one HRMS handle both India and UAE payroll?",
        answer:
          "Yes. OfficeKit HR is built for cross-border operations with native compliance for India and all six GCC countries on a single platform.",
      },
    ],
    relatedLinks: [
      { label: "Multi-country payroll", href: "/longtail/multi-country-payroll-gcc" },
      { label: "India compliance", href: "/compliance/india-payroll-compliance" },
      { label: "UAE compliance", href: "/compliance/uae-payroll-compliance" },
    ],
  },
  "wps-compliance": {
    slug: "wps-compliance",
    path: "/knowledge/wps-compliance",
    title: "UAE WPS Compliance Guide | OfficeKit HR",
    metaDescription:
      "Complete guide to UAE WPS (Wage Protection System) compliance — SIF file format, salary transfer rules, penalties, and how OfficeKit HR automates WPS payroll.",
    h1: "UAE WPS compliance explained",
    directAnswer:
      "UAE WPS (Wage Protection System) requires employers to pay salaries through approved banks via SIF files. OfficeKit HR generates WPS-compliant salary files, validates employee IBANs, and tracks submission status to reduce MOHRE penalties.",
    sections: [
      {
        heading: "What is UAE WPS?",
        body: "WPS mandates that private sector employers transfer salaries electronically through UAE Central Bank-approved channels, using standardized SIF (Salary Information File) formats.",
      },
      {
        heading: "Common WPS rejection reasons",
        body: "Invalid IBANs, mismatched employee IDs, incorrect salary components, and late submissions. OfficeKit HR validates data before export.",
      },
      {
        heading: "WPS workflow in OfficeKit HR",
        body: "Run payroll → validate IBANs and MOHRE IDs → export SIF file → upload to bank → track payment confirmation.",
      },
    ],
    faqs: [
      {
        question: "What is a WPS SIF file?",
        answer:
          "A Salary Information File (SIF) is the standardized format UAE employers use to submit salary payment details to banks for WPS compliance.",
      },
      {
        question: "What happens if WPS salary file is rejected?",
        answer:
          "Rejected files delay salary payments and may trigger MOHRE penalties. OfficeKit HR pre-validates data to minimize rejection rates.",
      },
    ],
    relatedLinks: [
      { label: "WPS compliance software", href: "/wps-compliance-software" },
      { label: "WPS file checker tool", href: "/tools/wps-file-checker" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
    ],
  },
};

export const KNOWLEDGE_SLUGS = Object.keys(KNOWLEDGE_PAGES);
