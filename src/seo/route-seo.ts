import { STATIC_BLOG_POSTS } from "@/data/static-blog-posts";
import { MARKETING_PAGES } from "@/data/marketing-pages";
import { GEO_LANDINGS_NEW } from "@/data/geo-landings-new";
import { COMPARISONS_NEW } from "@/data/comparisons-new";
import { PAYROLL_COMPLIANCE } from "@/data/payroll-compliance";
import { LONGTAIL_PAGES } from "@/data/longtail-keywords";
import { INDUSTRY_PAGES } from "@/data/industry-verticals";
import { KNOWLEDGE_PAGES } from "@/data/knowledge-pages";
import { TOOL_PAGES } from "@/data/tools-config";
import { GUIDE_PAGES } from "@/data/guide-pages";
import { ARTICLE_POSTS, getPublishedArticles } from "@/data/article-posts";
import { SITE } from "./site-config";

export type RouteSeoConfig = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  robots?: string;
  hreflang?: { lang: string; path: string }[];
  type?: "website" | "article";
};

const defaultDesc =
  "AI-powered HRMS for recruitment, attendance, payroll, and compliance. Trusted by businesses in India, UAE, Kuwait, Saudi Arabia, and Qatar.";

export const STATIC_ROUTES: RouteSeoConfig[] = [
  {
    path: "/",
    title: "OfficeKit HR | AI-Powered HRMS for India, UAE & GCC",
    description:
      "Transform HR with OfficeKit — recruitment, payroll, attendance, performance, and self-service. Built for India, UAE, Kuwait, Saudi Arabia, and Qatar.",
    hreflang: [
      { lang: "en", path: "/" },
      { lang: "ar-AE", path: "/ae" },
      { lang: "x-default", path: "/" },
    ],
  },
  {
    path: "/about-us",
    title: "About OfficeKit HR | Enterprise HRMS Platform",
    description:
      "Learn how OfficeKit HR helps growing businesses automate HR, payroll, and compliance across India and the Middle East.",
  },
  {
    path: "/pricing",
    title: "OfficeKit HR Pricing | Flexible HRMS Plans",
    description:
      "Compare OfficeKit HR pricing and plans for startups to enterprises. Transparent HRMS pricing for India and GCC markets.",
  },
  {
    path: "/contact",
    title: "Contact OfficeKit HR | Book a Demo",
    description:
      "Book a free OfficeKit HR demo. Talk to our team about payroll, attendance, recruitment, and compliance for your business.",
  },
  {
    path: "/features/recruitment-management",
    title: "Recruitment Management Software | OfficeKit HR",
    description:
      "Hire faster with AI-assisted recruitment, applicant tracking, and onboarding workflows in OfficeKit HR.",
  },
  {
    path: "/features/attendance-and-leave",
    title: "Attendance & Leave Management | OfficeKit HR",
    description:
      "Track attendance, shifts, and leave with biometric integrations and real-time dashboards.",
  },
  {
    path: "/features/payroll-and-compliance",
    title: "Payroll & Compliance Software | OfficeKit HR",
    description:
      "Automate payroll, tax compliance, and statutory reporting for India and GCC payroll teams.",
  },
  {
    path: "/features/performance-appraisal",
    title: "Performance Appraisal Software | OfficeKit HR",
    description:
      "Run continuous performance reviews, OKRs, and feedback cycles with OfficeKit HR.",
  },
  {
    path: "/features/self-service-portal",
    title: "Employee Self-Service Portal | OfficeKit HR",
    description:
      "Empower employees with ESS for payslips, leave requests, profiles, and HR requests.",
  },
  {
    path: "/features/exit-management",
    title: "Exit Management & Offboarding | OfficeKit HR",
    description:
      "Streamline resignations, clearance, and exit interviews with structured offboarding workflows.",
  },
  {
    path: "/features/mobile-app",
    title: "Mobile HRMS App | OfficeKit HR",
    description:
      "Manage HR on the go with secure mobile apps for attendance, leave, and employee self-service.",
  },
  {
    path: "/features/employee-management",
    title: "Employee Management System | OfficeKit HR",
    description:
      "Centralize employee records, documents, org charts, and lifecycle management in one HRMS.",
  },
  {
    path: "/features/face-kit",
    title: "Face-Kit Biometric Attendance | OfficeKit HR",
    description:
      "AI face recognition attendance for accurate, contactless time tracking at scale.",
  },
  {
    path: "/features/ai-pilot",
    title: "AI Pilot for HR Automation | OfficeKit HR",
    description:
      "Automate repetitive HR tasks with OfficeKit AI Pilot — smart workflows for modern HR teams.",
  },
  {
    path: "/resources/blogs",
    title: "HR Blog & Insights | OfficeKit HR",
    description:
      "Expert articles on HR best practices, payroll, compliance, remote work, and product updates.",
  },
  {
    path: "/resources/use-cases",
    title: "HRMS Use Cases | OfficeKit HR",
    description:
      "See how businesses use OfficeKit HR across industries and regions.",
  },
  {
    path: "/resources/community",
    title: "OfficeKit HR Community",
    description: "Join the OfficeKit HR community for HR leaders and practitioners.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | OfficeKit HR",
    description: "How OfficeKit HR collects, uses, and protects your personal data.",
    robots: "index, follow",
  },
  {
    path: "/terms-and-condition",
    title: "Terms & Conditions | OfficeKit HR",
    description: "Terms of use for OfficeKit HR products and services.",
    robots: "index, follow",
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy | OfficeKit HR",
    description:
      "How OfficeKit HR uses cookies and similar technologies on www.officekithr.com.",
    robots: "index, follow",
  },
  {
    path: "/solutions",
    title: "HRMS Solutions by Region | OfficeKit HR",
    description:
      "Guides for best HRMS in India, UAE payroll, WPS compliance, and AI HR software across the GCC.",
  },
  {
    path: "/solutions/ai-hr-software-gcc",
    title: "AI HR Software for GCC | OfficeKit HR",
    description:
      "AI-powered HR software for UAE, Kuwait, Saudi Arabia, and Qatar — automation with payroll compliance.",
  },
  {
    path: "/solutions/hrms-software-bangalore",
    title: "HRMS Software Bangalore | Karnataka Payroll — OfficeKit HR",
    description:
      "HRMS for Bangalore and Karnataka: India statutory payroll, biometric attendance, recruitment, and GCC expansion. OfficeKit HR.",
  },
  {
    path: "/solutions/hrms-software-chennai",
    title: "HRMS Software Chennai | Tamil Nadu Payroll — OfficeKit HR",
    description:
      "HRMS for Chennai and Tamil Nadu: statutory payroll with TN PT, attendance, and recruitment for manufacturing and IT companies. OfficeKit HR.",
  },
  {
    path: "/solutions/hrms-software-hyderabad",
    title: "HRMS Software Hyderabad | Telangana Payroll — OfficeKit HR",
    description:
      "HRMS for Hyderabad and Telangana: statutory payroll, attendance, recruitment, and GCC expansion for pharma and IT companies. OfficeKit HR.",
  },
  {
    path: "/solutions/payroll-software-mumbai",
    title: "Payroll Software Mumbai | Maharashtra PT — OfficeKit HR",
    description:
      "Payroll software for Mumbai and Maharashtra: Maharashtra PT, PF/ESI, Shops & Establishments, and GCC support for BFSI firms. OfficeKit HR.",
  },
  {
    path: "/solutions/hrms-software-delhi-ncr",
    title: "HRMS Software Delhi NCR | Multi-State Payroll — OfficeKit HR",
    description:
      "HRMS for Delhi NCR: multi-state payroll for Delhi, Gurgaon, Noida with attendance, recruitment, and GCC expansion. OfficeKit HR.",
  },
  {
    path: "/compare",
    title: "Compare HRMS Software | OfficeKit HR",
    description:
      "Factual HRMS comparison guides including OfficeKit HR vs greytHR for India and GCC buyers.",
  },
  {
    path: "/ae",
    title: "برنامج الموارد البشرية في الإمارات | OfficeKit HR",
    description:
      "حلول الموارد البشرية والرواتب والحضور للشركات في الإمارات والخليج — OfficeKit HR.",
    hreflang: [
      { lang: "ar-AE", path: "/ae" },
      { lang: "en", path: "/" },
      { lang: "x-default", path: "/" },
    ],
  },
  ...Object.values(MARKETING_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Static blog posts (unique titles/descriptions from static-blog-posts.ts)
  ...Object.values(STATIC_BLOG_POSTS).map((meta) => ({
    path: meta.path,
    title: meta.title,
    description: meta.description,
    ogImage: meta.image,
    type: "article" as const,
  })),
  // New GEO landing pages (KSA, Kuwait, Qatar, Oman, Bahrain, Kerala)
  ...Object.values(GEO_LANDINGS_NEW).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // New comparison pages (Zoho, factoHR, Officenet, PocketHRMS, Keka)
  ...Object.values(COMPARISONS_NEW).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Payroll compliance pages
  ...Object.values(PAYROLL_COMPLIANCE).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Long-tail keyword pages
  ...Object.values(LONGTAIL_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Industry vertical pages
  ...Object.values(INDUSTRY_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Knowledge entity pages
  ...Object.values(KNOWLEDGE_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  // Interactive tools
  ...Object.values(TOOL_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  {
    path: "/tools",
    title: "Free HR & Payroll Tools | OfficeKit HR",
    description:
      "PF/ESI calculator, UAE gratuity calculator, HRMS ROI calculator, and WPS file checker for India and GCC HR teams.",
  },
  {
    path: "/knowledge",
    title: "HR & Payroll Knowledge Base | OfficeKit HR",
    description:
      "Authoritative entity pages on OfficeKit HR, India+GCC payroll, and UAE WPS compliance for search and AI engines.",
  },
  {
    path: "/customers",
    title: "Customer Success Stories | OfficeKit HR",
    description:
      "Case studies from Lulu International Exchange, Thai Group, Midac Electronics and 500+ companies using OfficeKit HR.",
  },
  {
    path: "/reviews",
    title: "OfficeKit HR Reviews & Customer Testimonials",
    description:
      "Read verified customer testimonials from HR leaders using OfficeKit HR for India and GCC payroll, attendance, and compliance.",
  },
  {
    path: "/guides",
    title: "HR & Payroll Guides | OfficeKit HR",
    description:
      "Buyer guides, migration playbooks, and compliance checklists for India and GCC HR teams.",
  },
  ...Object.values(GUIDE_PAGES).map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
  })),
  ...getPublishedArticles().map((p) => ({
    path: p.path,
    title: p.title,
    description: p.metaDescription,
    type: "article" as const,
  })),
  // Compliance hub
  {
    path: "/compliance",
    title: "Payroll Compliance Guide | India, UAE, KSA, GCC — OfficeKit HR",
    description:
      "Country-specific payroll compliance guides for India, UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain. OfficeKit HR.",
  },
  {
    path: "/gcc-compliance",
    title: "GCC Payroll Compliance Hub | WPS, GOSI, PIFSS — OfficeKit HR",
    description:
      "GCC payroll compliance hub covering UAE WPS, Saudi GOSI, Kuwait PIFSS, Qatar WPS, Oman PASI, and Bahrain SIO with OfficeKit HR.",
  },
  // Longtail hub
  {
    path: "/resources/guides",
    title: "HR Knowledge Base & Guides | OfficeKit HR",
    description:
      "In-depth guides on HRMS, payroll, compliance, and HR automation for India and GCC businesses.",
  },
];

const routeMap = new Map(
  STATIC_ROUTES.map((r) => [r.path, r])
);

export function getRouteSeo(pathname: string): RouteSeoConfig {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  const exact = routeMap.get(path);
  if (exact) return exact;

  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    return {
      path,
      title: `${slug.replace(/-/g, " ")} | OfficeKit HR Blog`,
      description: defaultDesc,
      type: "article",
    };
  }

  return {
    path,
    title: `Page Not Found | ${SITE.name}`,
    description: "The page you are looking for does not exist.",
    robots: "noindex, nofollow",
  };
}

export const SITEMAP_STATIC_PATHS = STATIC_ROUTES.map((r) => r.path);
