import type { FaqItem } from "@/seo/schema";
import { GEO_INTERNAL_LINKS } from "@/data/geo-links";

export type FeatureGeoConfig = {
  directAnswer: string;
  definition?: { term: string; meaning: string };
  summary: string;
  compliancePoints: string[];
  regions: ("India" | "UAE" | "GCC")[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const FEATURE_GEO_BY_PATH: Record<string, FeatureGeoConfig> = {
  "/features/employee-management": {
    directAnswer:
      "OfficeKit HR employee management centralises profiles, org charts, documents, employment history, and lifecycle events for India and GCC teams — one HRMS system of record from hire to exit.",
    definition: {
      term: "Employee management (core HR)",
      meaning:
        "Software that stores employee master data, organisational structure, documents, and HR lifecycle events in a single system of record.",
    },
    summary:
      "Core HR for mid-market teams in India and the GCC: employee records, document vault, org charts, and lifecycle workflows connected to payroll and attendance.",
    compliancePoints: ["India PF/ESI records", "UAE employee files", "Document retention", "Multi-entity org"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "What employee data is centralized in OfficeKit HR?",
        answer:
          "Profiles, documents, org structure, employment history, compensation details, and lifecycle events — accessible to HR and managers with role-based permissions.",
      },
      {
        question: "Does OfficeKit support multi-company employee management in India?",
        answer:
          "Yes. Group companies can run separate entities with shared or independent employee records, org units, and reporting while consolidating HR administration.",
      },
      {
        question: "Can employees in the UAE access their own HR documents?",
        answer:
          "Yes. The employee self-service portal lets UAE staff download payslips, labour contracts, and policy documents without HR intervention.",
      },
      {
        question: "Is document management included for GCC compliance?",
        answer:
          "Yes. HR teams store visas, labour cards, contracts, and certification documents with expiry alerts for UAE and wider GCC workforce compliance.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.hrmsIndia,
      GEO_INTERNAL_LINKS.hrSoftwareUae,
      { label: "Self-service portal", href: "/features/self-service-portal" },
      { label: "Exit management", href: "/features/exit-management" },
    ],
  },

  "/features/self-service-portal": {
    directAnswer:
      "OfficeKit HR employee self-service lets staff in India and the GCC apply for leave, download payslips, submit expense claims, and update profiles from web or mobile — reducing HR ticket volume.",
    definition: {
      term: "Employee self-service (ESS)",
      meaning:
        "A portal where employees complete routine HR tasks — leave, payslips, profile updates, and approvals — without contacting HR.",
    },
    summary:
      "ESS portal for India and GCC employees: leave requests, payslips, claims, reimbursements, and manager approvals on web and mobile.",
    compliancePoints: ["Digital payslips", "Leave audit trail", "Expense claims", "Arabic + English (UAE)"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "What can employees do in the self-service portal?",
        answer:
          "Apply for leave, download payslips and Form 16 (India), submit expense claims and travel requests, update profiles, and track approval status.",
      },
      {
        question: "Does ESS work for UAE employees in Arabic?",
        answer:
          "Yes. The UAE experience supports Arabic and English for employees and managers using self-service on web and mobile.",
      },
      {
        question: "Can managers approve leave and claims from mobile?",
        answer:
          "Yes. Managers receive notifications and approve leave, expenses, and attendance regularisation from the OfficeKit mobile app.",
      },
      {
        question: "Are expense claims integrated with payroll?",
        answer:
          "Yes. Approved reimbursements and salary advances flow into monthly payroll runs for India and GCC entities.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.hrmsIndia,
      GEO_INTERNAL_LINKS.payrollUae,
      { label: "Mobile HR app", href: "/features/mobile-app" },
      { label: "Payroll & compliance", href: "/features/payroll-and-compliance" },
    ],
  },

  "/features/attendance-and-leave": {
    directAnswer:
      "OfficeKit HR attendance and leave management supports biometric devices, mobile geo-fencing, Face-Kit face recognition, shift rules, overtime, and leave policies for India and GCC workforces — synced to payroll.",
    definition: {
      term: "Attendance & leave management",
      meaning:
        "HR software that captures work hours, shifts, and leave balances with policy rules and manager approvals, feeding accurate payroll inputs.",
    },
    summary:
      "Track attendance via biometric, mobile, or AI face scan; manage shifts, overtime, and leave for India and UAE teams with payroll integration.",
    compliancePoints: ["Shift & OT rules", "Geo-fenced check-in", "Face-Kit AI", "WPS-ready hours", "PF/ESI hours"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "What attendance capture methods are supported in India?",
        answer:
          "Web check-in, mobile GPS geo-fencing, biometric devices, and Face-Kit AI face recognition — with configurable shift and overtime rules per location.",
      },
      {
        question: "Does OfficeKit support UAE shift and attendance rules?",
        answer:
          "Yes. Administrators define shifts, grace periods, overtime, and holiday calendars for UAE entities, with attendance data flowing into WPS payroll.",
      },
      {
        question: "Are shift and overtime rules configurable?",
        answer:
          "Yes. Shift rotations, grace periods, overtime policies, and holiday calendars can be set by location, department, or role.",
      },
      {
        question: "Does attendance data sync with payroll?",
        answer:
          "Yes. Approved attendance, overtime, and leave feed directly into India statutory payroll and UAE WPS salary runs.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.attendanceUae,
      GEO_INTERNAL_LINKS.hrmsIndia,
      { label: "Face Kit attendance", href: "/features/face-kit" },
      { label: "Payroll & compliance", href: "/features/payroll-and-compliance" },
    ],
  },

  "/features/payroll-and-compliance": {
    directAnswer:
      "OfficeKit HR automates payroll for India (PF, ESI, PT, TDS) and GCC countries (UAE WPS, KSA GOSI, Kuwait PIFSS) with salary slips, bank files, and statutory returns from one platform.",
    definition: {
      term: "Payroll & compliance software",
      meaning:
        "HRMS payroll that calculates salaries, deductions, and statutory filings aligned with local labour and tax regulations.",
    },
    summary:
      "Statutory payroll for India and GCC: automated calculations, WPS bank files, PF/ESI/PT returns, and audit-ready reports integrated with attendance.",
    compliancePoints: ["India PF & ESI", "PT & TDS", "UAE WPS", "KSA GOSI", "Kuwait PIFSS", "Gratuity & EOS"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Does OfficeKit HR support UAE WPS payroll?",
        answer:
          "Yes. OfficeKit generates WPS-compliant salary files and reporting workflows for UAE employers without third-party WPS add-ons.",
      },
      {
        question: "Which India payroll regulations are covered?",
        answer:
          "PF, ESI, professional tax, TDS, and Form 16 with audit-ready registers and challan support for mid-market Indian companies.",
      },
      {
        question: "Can payroll integrate with attendance and leave?",
        answer:
          "Yes. Payroll runs use attendance, overtime, and leave data from the same HRMS to reduce manual reconciliation.",
      },
      {
        question: "Does OfficeKit handle loans and salary advance deductions?",
        answer:
          "Yes. Configure salary advances and loan EMI schedules with automatic monthly deductions until balances are recovered.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.wpsUae,
      GEO_INTERNAL_LINKS.payrollUae,
      GEO_INTERNAL_LINKS.payrollIndia,
      GEO_INTERNAL_LINKS.gccCompliance,
    ],
  },

  "/features/performance-appraisal": {
    directAnswer:
      "OfficeKit HR performance management runs appraisal cycles, OKRs, KPIs, and 360° feedback for India and GCC teams — with self-assessments and manager reviews in one workflow.",
    definition: {
      term: "Performance management",
      meaning:
        "Software for goal setting, review cycles, feedback, and performance ratings aligned to company OKRs and compensation decisions.",
    },
    summary:
      "Appraisal cycles, OKRs, and continuous feedback for India and GCC organisations — connected to employee records and self-service.",
    compliancePoints: ["Review cycles", "OKR tracking", "360° feedback", "Goal alignment"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Does OfficeKit support OKRs and review cycles?",
        answer:
          "Yes. Teams run continuous feedback, scheduled appraisal cycles, and goal tracking aligned to company OKRs with manager and self-assessments.",
      },
      {
        question: "Can performance reviews run across India and GCC entities?",
        answer:
          "Yes. Review templates and cycles can be configured per country or entity while consolidating talent reports at group level.",
      },
      {
        question: "Are performance ratings linked to compensation?",
        answer:
          "Performance outcomes can inform increment and bonus workflows; compensation changes flow into payroll with full audit history.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.hrmsIndia,
      { label: "Employee self-service", href: "/features/self-service-portal" },
      { label: "Employee management", href: "/features/employee-management" },
    ],
  },

  "/features/exit-management": {
    directAnswer:
      "OfficeKit HR exit management covers online resignations, clearance checklists, asset handover, and full-and-final settlement for India and GCC employees with statutory-compliant documentation.",
    definition: {
      term: "Exit management (offboarding)",
      meaning:
        "HR workflows for resignations, clearance, asset return, and final settlement when an employee leaves the organisation.",
    },
    summary:
      "Structured offboarding for India and GCC: resignation workflows, clearance, F&F settlement, gratuity, and compliance documentation.",
    compliancePoints: ["F&F settlement", "Gratuity (UAE/India)", "Clearance workflow", "Notice period pay"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Does OfficeKit HR handle full and final settlement in India?",
        answer:
          "Yes. Exit workflows cover leave encashment, gratuity, notice period pay, pending reimbursements, and statutory-compliant final payslips.",
      },
      {
        question: "Can employees submit resignations online?",
        answer:
          "Yes. Employees submit resignations through self-service with configurable multi-level approval chains and HR notifications.",
      },
      {
        question: "Does offboarding cover UAE end-of-service benefits?",
        answer:
          "Yes. UAE exit workflows calculate gratuity and end-of-service entitlements aligned with local labour regulations.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.payrollUae,
      GEO_INTERNAL_LINKS.hrmsIndia,
      { label: "Employee management", href: "/features/employee-management" },
    ],
  },

  "/features/mobile-app": {
    directAnswer:
      "The OfficeKit HR mobile app gives India and GCC employees and managers attendance check-in, leave requests, approvals, payslips, and expense claims from iOS and Android.",
    definition: {
      term: "Mobile HRMS app",
      meaning:
        "A smartphone application for employees and managers to complete HR tasks — attendance, leave, approvals, and payslips — outside the office.",
    },
    summary:
      "Mobile HR for India and UAE teams: geo check-in, leave, approvals, payslips, and claims on iOS and Android.",
    compliancePoints: ["Geo check-in", "Push approvals", "Digital payslips", "Offline-friendly"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Is there a mobile app for iOS and Android?",
        answer:
          "Yes. The OfficeKit mobile app covers attendance, leave, approvals, payslips, and expense claims for employees and managers.",
      },
      {
        question: "Can field staff in India use GPS attendance on mobile?",
        answer:
          "Yes. Mobile geo-fenced check-in supports sales, logistics, and retail field teams with location-tied attendance rules.",
      },
      {
        question: "Do UAE employees get payslips on mobile?",
        answer:
          "Yes. UAE employees download salary slips and submit leave or claims from the mobile app in English or Arabic.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.attendanceUae,
      { label: "Self-service portal", href: "/features/self-service-portal" },
      { label: "Attendance & leave", href: "/features/attendance-and-leave" },
    ],
  },

  "/features/recruitment-management": {
    directAnswer:
      "OfficeKit HR recruitment management provides applicant tracking, job posting, interview scheduling, offer letters, and paperless onboarding for India and GCC hiring teams — connected to core HR records.",
    definition: {
      term: "Recruitment management (ATS)",
      meaning:
        "Software that manages job requisitions, candidate pipelines, interviews, offers, and onboarding handoff to HR records.",
    },
    summary:
      "ATS and onboarding for India and GCC: job posts, pipelines, interviews, offers, and digital onboarding linked to employee management.",
    compliancePoints: ["Offer letters", "Onboarding checklists", "Document collection", "Pipeline reporting"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Does OfficeKit include applicant tracking?",
        answer:
          "Yes. Recruiters manage job posts, pipelines, interviews, and offer letters in one ATS connected to onboarding and core HR.",
      },
      {
        question: "Can onboarding be automated after hire?",
        answer:
          "Yes. New hires move into structured onboarding checklists with document collection and role assignments without duplicate data entry.",
      },
      {
        question: "Does recruitment work for UAE hiring compliance?",
        answer:
          "Yes. Offer and onboarding workflows capture documents required for UAE employment including contracts and visa-related HR files.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.hrmsIndia,
      GEO_INTERNAL_LINKS.hrSoftwareUae,
      { label: "Employee management", href: "/features/employee-management" },
    ],
  },

  "/features/face-kit": {
    directAnswer:
      "Face Kit is OfficeKit HR's AI face scan attendance app — touchless check-in for India and GCC teams, free for up to 25 users, synced with payroll, leave, and HR reports.",
    definition: {
      term: "AI face recognition attendance",
      meaning:
        "Touchless employee attendance using facial recognition on mobile or kiosk, replacing cards and fingerprints for shift-based teams.",
    },
    summary:
      "Touchless AI face scan attendance for India and UAE workforces — integrates with OfficeKit HR payroll, shifts, and compliance reporting.",
    compliancePoints: ["Touchless check-in", "Shift sync", "Free up to 25 users", "Payroll integration"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "Is Face Kit available for teams in India and the UAE?",
        answer:
          "Yes. Face Kit works for shop-floor, retail, and field teams in India and GCC countries with attendance synced to OfficeKit HR.",
      },
      {
        question: "Does face scan attendance integrate with payroll?",
        answer:
          "Yes. Attendance captured via Face Kit flows into shift rules, overtime calculation, and monthly payroll runs.",
      },
      {
        question: "How many users are free on Face Kit?",
        answer:
          "Face Kit is free for up to 25 users; larger teams can scale with OfficeKit HR subscription plans.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.attendanceUae,
      { label: "Attendance & leave", href: "/features/attendance-and-leave" },
      { label: "Manufacturing HRMS", href: "/industries/hrms-for-manufacturing" },
    ],
  },

  "/features/ai-pilot": {
    directAnswer:
      "AI Pilot is OfficeKit HR's voice and chat assistant for employees and HR teams in India and the GCC — automate leave queries, payslip lookups, policy answers, and everyday HR workflows.",
    definition: {
      term: "AI HR assistant",
      meaning:
        "An AI-powered chat or voice interface that answers HR questions and completes routine tasks like leave balance checks and payslip requests.",
    },
    summary:
      "AI voice and chat HR assistant for India and GCC teams — leave, payslips, policies, and workflows without waiting on HR tickets.",
    compliancePoints: ["Voice + chat", "Leave & payslip queries", "Policy answers", "Workflow automation"],
    regions: ["India", "UAE", "GCC"],
    faqs: [
      {
        question: "What HR tasks can AI Pilot automate?",
        answer:
          "Employees can ask about leave balances, download payslips, check policies, and trigger approvals via voice or chat in English.",
      },
      {
        question: "Is AI Pilot available for UAE HR teams?",
        answer:
          "Yes. AI Pilot supports GCC deployments alongside core OfficeKit HR modules for attendance, payroll, and self-service.",
      },
      {
        question: "Does AI Pilot replace the HR team?",
        answer:
          "No. It handles repetitive employee queries so HR can focus on strategic work; complex cases escalate to human approvers.",
      },
    ],
    relatedLinks: [
      GEO_INTERNAL_LINKS.aiHrGcc,
      { label: "Self-service portal", href: "/features/self-service-portal" },
      { label: "Mobile HR app", href: "/features/mobile-app" },
    ],
  },
};

export function getFeatureGeo(path: string): FeatureGeoConfig | null {
  return FEATURE_GEO_BY_PATH[path] ?? null;
}
