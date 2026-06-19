import { CANONICAL } from "@/seo/canonical-paths";

/** Reusable internal links for India, UAE, and GCC geo landing pages. */
export const GEO_INTERNAL_LINKS = {
  hrmsIndia: { label: "HRMS software India", href: CANONICAL.hrmsIndia },
  payrollIndia: { label: "Payroll software India", href: "/payroll-software-india" },
  bestPayrollIndia: { label: "Best payroll software India", href: "/best-payroll-software-india" },
  payrollUae: { label: "Payroll software UAE", href: CANONICAL.payrollUae },
  hrSoftwareUae: { label: "HR software UAE", href: "/hr-software-uae" },
  wpsUae: { label: "WPS compliance software", href: CANONICAL.wpsUae },
  gccCompliance: { label: "GCC compliance hub", href: CANONICAL.gccCompliance },
  hrDubai: { label: "HR software Dubai", href: "/hr-software-dubai" },
  attendanceUae: { label: "Attendance software UAE", href: "/attendance-software-uae" },
  payrollKsa: { label: "Payroll software KSA", href: "/solutions/payroll-software-ksa" },
  aiHrGcc: { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
  industriesHub: { label: "HRMS by industry", href: "/industries" },
} as const;
