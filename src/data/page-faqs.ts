import type { FaqItem } from "@/seo/schema";
import { CANONICAL } from "@/seo/canonical-paths";
import { FEATURE_GEO_BY_PATH } from "@/data/feature-geo";

export type PageGeoConfig = {
  faqs: FaqItem[];
  relatedLinks?: { label: string; href: string }[];
  summary?: string;
  directAnswer?: string;
  definition?: { term: string; meaning: string };
  compliancePoints?: string[];
  regions?: ("India" | "UAE" | "GCC")[];
};

function featureGeoToPageGeo(): Record<string, PageGeoConfig> {
  return Object.fromEntries(
    Object.entries(FEATURE_GEO_BY_PATH).map(([path, geo]) => [
      path,
      {
        faqs: geo.faqs,
        relatedLinks: geo.relatedLinks,
        summary: geo.summary,
        directAnswer: geo.directAnswer,
        definition: geo.definition,
        compliancePoints: geo.compliancePoints,
        regions: geo.regions,
      },
    ])
  );
}

/** Per-route FAQs for PreFooterGeo + FAQPage JSON-LD on key pages. */
export const PAGE_GEO_BY_PATH: Record<string, PageGeoConfig> = {
  ...featureGeoToPageGeo(),
  "/pricing": {
    summary:
      "OfficeKit HR offers modular Silver, Gold, and Platinum plans for India and GCC teams — per-user pricing with core HR, payroll, attendance, and advanced automation modules. Book a demo for a tailored quote.",
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
      {
        question: "Does OfficeKit HR pricing include UAE WPS payroll?",
        answer:
          "Yes. UAE WPS payroll workflows are included in OfficeKit HR payroll modules without third-party WPS add-ons.",
      },
    ],
    relatedLinks: [
      { label: "HRMS for India", href: CANONICAL.hrmsIndia },
      { label: "Payroll software UAE", href: CANONICAL.payrollUae },
    ],
    regions: ["India", "UAE", "GCC"],
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
    regions: ["India", "UAE", "GCC"],
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
      { label: "Payroll software UAE", href: CANONICAL.payrollUae },
      { label: "WPS compliance", href: CANONICAL.wpsUae },
    ],
    regions: ["UAE", "GCC"],
  },
};

export function getPageGeo(pathname: string): PageGeoConfig | null {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  return PAGE_GEO_BY_PATH[path] ?? null;
}
