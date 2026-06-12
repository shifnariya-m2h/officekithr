import type { FaqItem } from "@/seo/schema";

export type ToolConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  type: "calculator" | "validator";
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const TOOL_PAGES: Record<string, ToolConfig> = {
  "pf-esi-calculator": {
    slug: "pf-esi-calculator",
    path: "/tools/pf-esi-calculator",
    title: "PF & ESI Calculator India 2026 | OfficeKit HR",
    metaDescription:
      "Free PF and ESI contribution calculator for India. Calculate employer and employee PF (12%+12%) and ESI (3.25%+0.75%) based on basic salary.",
    h1: "PF & ESI contribution calculator",
    intro:
      "Estimate monthly Provident Fund and ESI contributions for Indian employees. OfficeKit HR auto-calculates these on every payroll run.",
    type: "calculator",
    faqs: [
      {
        question: "What is the PF contribution rate in India?",
        answer:
          "PF is 12% of basic salary from both employer and employee (24% total), subject to wage ceiling rules.",
      },
      {
        question: "What is the ESI contribution rate?",
        answer:
          "ESI is 3.25% employer and 0.75% employee on gross salary, applicable when salary is within the ESI wage ceiling.",
      },
    ],
    relatedLinks: [
      { label: "India payroll compliance", href: "/compliance/india-payroll-compliance" },
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  "gratuity-calculator-uae": {
    slug: "gratuity-calculator-uae",
    path: "/tools/gratuity-calculator-uae",
    title: "UAE Gratuity Calculator | End of Service Benefits",
    metaDescription:
      "Calculate UAE gratuity and end-of-service benefits based on basic salary and years of service. Free gratuity calculator for Dubai and UAE employers.",
    h1: "UAE gratuity calculator",
    intro:
      "Estimate end-of-service gratuity for UAE employees under UAE Labour Law. OfficeKit HR automates gratuity accrual on every payroll cycle.",
    type: "calculator",
    faqs: [
      {
        question: "How is UAE gratuity calculated?",
        answer:
          "For limited contracts: 21 days basic salary per year for the first 5 years, then 30 days per year thereafter. Calculations vary by contract type and termination reason.",
      },
    ],
    relatedLinks: [
      { label: "Payroll UAE", href: "/payroll-software-uae" },
      { label: "UAE compliance guide", href: "/compliance/uae-payroll-compliance" },
    ],
  },
  "hrms-roi-calculator": {
    slug: "hrms-roi-calculator",
    path: "/tools/hrms-roi-calculator",
    title: "HRMS ROI Calculator | OfficeKit HR",
    metaDescription:
      "Calculate ROI of switching to an HRMS. Estimate time saved on payroll, attendance, and HR admin vs manual processes or spreadsheets.",
    h1: "HRMS ROI calculator",
    intro:
      "Estimate annual savings from automating payroll, attendance, and HR admin. Most mid-market teams save 15–25 hours per month per HR staff member.",
    type: "calculator",
    faqs: [
      {
        question: "What ROI can I expect from an HRMS?",
        answer:
          "Mid-market teams typically see 40–60% reduction in payroll processing time and 30% fewer compliance errors within the first year.",
      },
    ],
    relatedLinks: [
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  "wps-file-checker": {
    slug: "wps-file-checker",
    path: "/tools/wps-file-checker",
    title: "WPS File Checker UAE | Validate SIF Format",
    metaDescription:
      "Check your UAE WPS SIF salary file for common errors — IBAN format, employee ID, salary components. Reduce MOHRE rejection rates.",
    h1: "WPS file format checker",
    intro:
      "Paste your SIF file content to check for common WPS rejection issues. For production payroll, use OfficeKit HR to generate validated WPS files automatically.",
    type: "validator",
    faqs: [
      {
        question: "Why do WPS files get rejected?",
        answer:
          "Common reasons: invalid IBAN, wrong employee MOHRE ID, incorrect record format, or salary component mismatch.",
      },
    ],
    relatedLinks: [
      { label: "WPS compliance", href: "/knowledge/wps-compliance" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
    ],
  },
};

export const TOOL_SLUGS = Object.keys(TOOL_PAGES);
