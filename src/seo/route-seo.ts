import { STATIC_BLOG_POSTS } from "@/data/static-blog-posts";
import { MARKETING_PAGES } from "@/data/marketing-pages";
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
    path: "/solutions/best-hrms-software-india",
    title: "Best HRMS Software in India | OfficeKit HR",
    description:
      "OfficeKit HR: Indian payroll (PF/ESI/PT), attendance, recruitment, ESS, and AI automation in one HRMS.",
  },
  {
    path: "/solutions/payroll-software-uae",
    title: "Payroll Software UAE | OfficeKit HR",
    description:
      "UAE payroll with WPS support, attendance integration, and GCC compliance on OfficeKit HR.",
  },
  {
    path: "/solutions/wps-compliance-software",
    title: "WPS Compliance Software UAE | OfficeKit HR",
    description:
      "UAE Wages Protection System (WPS) compliance software integrated with OfficeKit payroll.",
  },
  {
    path: "/solutions/ai-hr-software-gcc",
    title: "AI HR Software for GCC | OfficeKit HR",
    description:
      "AI-powered HR software for UAE, Kuwait, Saudi Arabia, and Qatar — automation with payroll compliance.",
  },
  {
    path: "/compare",
    title: "Compare HRMS Software | OfficeKit HR",
    description:
      "Factual HRMS comparison guides including OfficeKit HR vs greytHR for India and GCC buyers.",
  },
  {
    path: "/compare/greythr-alternative",
    title: "greytHR Alternative | OfficeKit HR",
    description:
      "Compare OfficeKit HR vs greytHR: GCC payroll, WPS, AI automation, mobile ESS, and pricing.",
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
