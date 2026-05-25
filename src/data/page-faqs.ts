import type { FaqItem } from "@/seo/schema";

export type PageGeoConfig = {
  faqs: FaqItem[];
  relatedLinks?: { label: string; href: string }[];
  summary?: string;
};

/** Per-route FAQs for PreFooterGeo + FAQPage JSON-LD on key pages. */
export const PAGE_GEO_BY_PATH: Record<string, PageGeoConfig> = {
  "/pricing": {
    summary:
      "OfficeKit HR offers Starter, Growth, and Enterprise plans with modular HRMS features for India and GCC teams.",
    faqs: [
      {
        question: "Can I customize OfficeKit HR to fit my company's needs?",
        answer:
          "Yes. OfficeKit HR is modular—you can enable recruitment, payroll, attendance, performance, and self-service based on your requirements.",
      },
      {
        question: "Do you offer cloud and on-premise deployment?",
        answer:
          "Yes. OfficeKit supports cloud, on-premise, and hybrid deployment models depending on your security and IT policies.",
      },
      {
        question: "Is pricing based on the number of employees?",
        answer:
          "Pricing is typically per active user per month, with plans scaled for team size and selected modules.",
      },
      {
        question: "Is there a free demo available?",
        answer:
          "Yes. Book a free demo at /contact to see payroll, attendance, and compliance workflows for your region.",
      },
    ],
    relatedLinks: [
      { label: "HRMS for India", href: "/solutions/best-hrms-software-india" },
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
    ],
  },
  "/features/payroll-and-compliance": {
    summary:
      "OfficeKit HR automates payroll calculations, statutory filings, and GCC compliance including UAE WPS salary transfers.",
    faqs: [
      {
        question: "Does OfficeKit HR support UAE WPS payroll?",
        answer:
          "Yes. OfficeKit supports UAE WPS-compliant salary processing and reporting workflows for employers in the UAE.",
      },
      {
        question: "Which payroll regulations are covered for India?",
        answer:
          "Indian payroll modules support PF, ESI, professional tax, and other statutory deductions with audit-ready reports.",
      },
      {
        question: "Can payroll integrate with attendance and leave?",
        answer:
          "Yes. Payroll runs use attendance, overtime, and leave data from the same HRMS to reduce manual reconciliation.",
      },
    ],
    relatedLinks: [
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
    ],
  },
  "/features/recruitment-management": {
    faqs: [
      {
        question: "Does OfficeKit include applicant tracking?",
        answer:
          "Yes. Recruiters can manage job posts, pipelines, interviews, and offer letters in one ATS connected to onboarding.",
      },
      {
        question: "Can onboarding be automated after hire?",
        answer:
          "Yes. New hires move into structured onboarding checklists with document collection and role assignments.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/solutions/best-hrms-software-india" },
    ],
  },
  "/features/attendance-and-leave": {
    faqs: [
      {
        question: "What attendance capture methods are supported?",
        answer:
          "OfficeKit supports web check-in, mobile GPS/geo-fencing, biometric devices, and Face-Kit face recognition.",
      },
      {
        question: "Are shift and overtime rules configurable?",
        answer:
          "Yes. Administrators can define shifts, grace periods, overtime policies, and holiday calendars by location.",
      },
    ],
  },
  "/features/performance-appraisal": {
    faqs: [
      {
        question: "Does OfficeKit support OKRs and review cycles?",
        answer:
          "Yes. Teams can run continuous feedback, scheduled appraisal cycles, and goal tracking aligned to company OKRs.",
      },
    ],
  },
  "/features/self-service-portal": {
    faqs: [
      {
        question: "What can employees do in the self-service portal?",
        answer:
          "Employees access payslips, apply for leave, update profiles, submit HR requests, and view policies without HR intervention.",
      },
    ],
  },
  "/features/mobile-app": {
    faqs: [
      {
        question: "Is there a mobile app for iOS and Android?",
        answer:
          "Yes. The OfficeKit mobile app covers attendance, leave, approvals, and payslips for employees and managers.",
      },
    ],
  },
  "/features/employee-management": {
    faqs: [
      {
        question: "What employee data is centralized in OfficeKit?",
        answer:
          "Core HR stores profiles, documents, org structure, employment history, and lifecycle events in one system of record.",
      },
    ],
  },
  "/about-us": {
    faqs: [
      {
        question: "Who is OfficeKit HR built for?",
        answer:
          "OfficeKit HR serves growing and mid-market businesses in India and the GCC that need unified HR, payroll, and compliance on one platform.",
      },
      {
        question: "Where is OfficeKit HR available?",
        answer:
          "The product is used by companies in India, UAE, Kuwait, Saudi Arabia, and Qatar with localized payroll support.",
      },
    ],
  },
  "/contact": {
    faqs: [
      {
        question: "How do I book an OfficeKit HR demo?",
        answer:
          "Use the contact form on this page or email hello@officekithr.com. Our team schedules a walkthrough of modules relevant to your region.",
      },
    ],
  },
  "/ae": {
    faqs: [
      {
        question: "هل يدعم OfficeKit الرواتب والامتثال في الإمارات؟",
        answer:
          "نعم. يدعم OfficeKit معالجة الرواتب وفق متطلبات الإمارات بما في ذلك نظام حماية الأجور (WPS) والتقارير المحلية.",
      },
      {
        question: "Does OfficeKit support English and Arabic?",
        answer:
          "Yes. The UAE experience supports Arabic and English for HR teams and employees.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "WPS compliance", href: "/solutions/wps-compliance-software" },
    ],
  },
};

export function getPageGeo(pathname: string): PageGeoConfig | null {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  return PAGE_GEO_BY_PATH[path] ?? null;
}
