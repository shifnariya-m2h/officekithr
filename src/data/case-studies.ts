export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  region: string;
  employees: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: { text: string; author: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "lulu-international-exchange",
    company: "Lulu International Exchange LLC",
    industry: "Financial Services",
    region: "UAE",
    employees: "500+",
    challenge:
      "Manual HR processes across multiple branches with inconsistent attendance tracking and delayed payroll cycles.",
    solution:
      "Deployed OfficeKit HR for attendance, leave, payroll, and employee self-service with WPS-compliant salary processing.",
    results: [
      "Reduced payroll processing time by 50%",
      "Unified attendance across all branches",
      "Employee self-service adoption above 85%",
    ],
    quote: {
      text: "OfficeKit HR made our tedious daily HR process so easy.",
      author: "Mohideen Kader",
      role: "Head of HR",
    },
  },
  {
    slug: "thai-group",
    company: "Thai Group",
    industry: "Trading & Distribution",
    region: "UAE / India",
    employees: "200+",
    challenge:
      "Managing HR across India and UAE entities with separate tools for payroll and attendance.",
    solution:
      "Consolidated to OfficeKit HR for multi-country payroll, WPS compliance, and India statutory payroll on one platform.",
    results: [
      "Single HRMS for India and UAE operations",
      "Eliminated duplicate employee data entry",
      "Faster month-end payroll close",
    ],
    quote: {
      text: "OfficeKit HR helps you present your best phase with concise, structured HR workflows.",
      author: "Anees",
      role: "Head of HR",
    },
  },
  {
    slug: "midac-electronics",
    company: "Midac Electronics",
    industry: "Manufacturing",
    region: "India / GCC",
    employees: "300+",
    challenge:
      "Shift-based attendance, multi-location payroll, and statutory compliance across states and GCC entities.",
    solution:
      "Implemented Face-Kit attendance, shift rules, and unified India+GCC payroll with automated PF, ESI, and WPS.",
    results: [
      "Contactless attendance for factory floors",
      "Statutory compliance automated for 3 countries",
      "HR admin hours reduced by 20+ per month",
    ],
    quote: {
      text: "Statutory payroll for India and WPS for UAE on one platform saved our HR team weeks every month.",
      author: "Sajitha",
      role: "HR Manager",
    },
  },
];
