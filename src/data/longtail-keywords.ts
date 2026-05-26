import type { FaqItem } from "@/seo/schema";

export type LongtailConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  clusters: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const LONGTAIL_PAGES: Record<string, LongtailConfig> = {
  "cloud-hrms-small-business-india": {
    slug: "cloud-hrms-small-business-india",
    path: "/longtail/cloud-hrms-small-business-india",
    title: "Cloud HRMS for Small Business in India | Affordable HR Software — OfficeKit HR",
    metaDescription:
      "Looking for cloud HRMS for small business in India? Compare affordable HR software with PF/ESI payroll, attendance, and employee self-service for teams of 10–100.",
    h1: "Cloud HRMS for Small Business in India",
    subtitle:
      "Affordable, statutory-ready HR software for Indian SMEs and startups with 10 to 100 employees.",
    directAnswer:
      "OfficeKit HR is a cloud HRMS for small businesses in India that provides statutory payroll (PF, ESI, PT, TDS), attendance tracking, leave management, and employee self-service on a per-user pricing model designed for teams of 10–100 employees without enterprise complexity.",
    clusters: [
      "Small business HR software that scales from 10 to 500 employees",
      "Affordable India payroll with PF, ESI, PT, and TDS auto-calculations",
      "Cloud-based attendance with mobile check-in and biometric integration",
      "Employee self-service portal for leave, payslips, and expense claims",
    ],
    faqs: [
      {
        question: "What is the best cloud HRMS for a 50-employee company in India?",
        answer:
          "For 50-employee Indian companies, OfficeKit HR offers per-user pricing, statutory payroll (PF, ESI, PT, TDS), attendance, and ESS—all in one cloud platform without enterprise minimums or long-term contracts.",
      },
      {
        question: "How much does cloud HRMS cost for small businesses in India?",
        answer:
          "OfficeKit HR uses transparent per-user per-month pricing. Small businesses typically start with core HR and payroll modules, adding attendance, recruitment, or performance as they grow. See /pricing for current plans.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/solutions/best-hrms-software-india" },
      { label: "Payroll software India", href: "/solutions/best-hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  "best-payroll-software-uae-dubai": {
    slug: "best-payroll-software-uae-dubai",
    path: "/longtail/best-payroll-software-uae-dubai",
    title: "Best Payroll Software in UAE Dubai | WPS-Ready — OfficeKit HR",
    metaDescription:
      "Find the best payroll software in UAE Dubai with WPS compliance, gratuity calculation, and multi-currency support. Compare OfficeKit HR for Dubai mainland and free-zone companies.",
    h1: "Best Payroll Software in UAE & Dubai",
    subtitle:
      "WPS-ready payroll, gratuity automation, and HRMS integration for Dubai and UAE companies.",
    directAnswer:
      "OfficeKit HR is payroll software for UAE and Dubai businesses that includes WPS-compliant salary file generation, gratuity accrual calculation, multi-currency support, and attendance integration—serving both mainland and free-zone companies from a single cloud platform.",
    clusters: [
      "UAE WPS-compliant payroll software for Dubai mainland and free-zone companies",
      "Gratuity calculation and end-of-service benefit automation",
      "Multi-currency payroll processing for GCC operations",
      "Attendance-linked pay runs with biometric and mobile check-in",
    ],
    faqs: [
      {
        question: "What is the best payroll software for small businesses in Dubai?",
        answer:
          "Small businesses in Dubai benefit from OfficeKit HR's WPS-ready payroll, integrated attendance, and per-user pricing. It covers mainland and free-zone requirements without needing separate payroll tools.",
      },
      {
        question: "Does payroll software in Dubai support WPS?",
        answer:
          "Yes. OfficeKit HR generates WPS-compliant SIF files for Dubai and UAE companies, validates employee IBANs and salary components, and helps reduce salary file rejection rates.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
      { label: "HR software Dubai", href: "/hr-software-dubai" },
    ],
  },
  "hr-automation-ai-tools-gcc": {
    slug: "hr-automation-ai-tools-gcc",
    path: "/longtail/hr-automation-ai-tools-gcc",
    title: "HR Automation AI Tools for GCC | Smart HRMS — OfficeKit HR",
    metaDescription:
      "Explore HR automation AI tools for the GCC: automated payroll, recruitment screening, employee self-service, and AI-assisted HR workflows for UAE, Saudi Arabia, and Kuwait.",
    h1: "HR Automation & AI Tools for the GCC",
    subtitle:
      "Automate repetitive HR work while keeping compliance and payroll under human control.",
    directAnswer:
      "OfficeKit HR provides AI-assisted HR automation for GCC businesses—including AI Pilot for workflow automation (leave approvals, reminders, document routing), Face-Kit for contactless attendance, and automated payroll runs—across UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain.",
    clusters: [
      "AI Pilot for HR workflow automation (leave, approvals, policy routing)",
      "Face-Kit biometric attendance with contactless face recognition",
      "Automated payroll processing across 6 GCC countries",
      "Recruitment automation with AI-powered candidate screening",
    ],
    faqs: [
      {
        question: "What HR tasks can AI automate in GCC companies?",
        answer:
          "AI can automate leave policy checks, approval routing, attendance flagging, payroll reminders, and recruitment screening. OfficeKit's AI Pilot handles these while keeping payroll compliance auditable by human teams.",
      },
      {
        question: "Is AI HR software compliant with UAE/KSA regulations?",
        answer:
          "Yes. OfficeKit HR's AI features assist with routine tasks; all payroll and compliance outputs remain fully configurable and auditable per local regulations (WPS, GOSI, PIFSS, etc.).",
      },
    ],
    relatedLinks: [
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "AI Pilot feature", href: "/features/ai-pilot" },
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
    ],
  },
  "employee-self-service-portal-india": {
    slug: "employee-self-service-portal-india",
    path: "/longtail/employee-self-service-portal-india",
    title: "Employee Self-Service Portal India | Mobile ESS — OfficeKit HR",
    metaDescription:
      "Employee self-service portal for India: apply leave, download payslips, update profiles, and submit requests via mobile or web. Reduce HR ticket volume with OfficeKit ESS.",
    h1: "Employee Self-Service Portal for India",
    subtitle:
      "Empower employees to manage HR tasks independently while reducing administrative overhead.",
    directAnswer:
      "OfficeKit HR's employee self-service portal for India allows employees to apply for leave, download digital payslips and Form 16, update personal profiles, submit expense claims, and view attendance records—via web or mobile app—reducing HR ticket volume and payroll data entry errors.",
    clusters: [
      "Digital payslips and Form 16 downloads for Indian employees",
      "Mobile leave application and manager approval workflows",
      "Attendance and timesheet self-service with geo-check-in",
      "Profile updates, document uploads, and expense submissions",
    ],
    faqs: [
      {
        question: "What can employees do in an ESS portal?",
        answer:
          "Employees can apply for leave, download payslips and tax forms, mark attendance, update personal details, submit expenses, and view company policies—all without contacting HR for routine tasks.",
      },
      {
        question: "Does OfficeKit ESS work on mobile phones?",
        answer:
          "Yes. OfficeKit HR includes iOS and Android mobile apps for employees and managers, with attendance check-in, leave requests, approval workflows, and payslip access on the go.",
      },
    ],
    relatedLinks: [
      { label: "Self-service portal feature", href: "/features/self-service-portal" },
      { label: "Mobile app feature", href: "/features/mobile-app" },
      { label: "Best HRMS India", href: "/solutions/best-hrms-software-india" },
    ],
  },
  "wps-payroll-software-dubai": {
    slug: "wps-payroll-software-dubai",
    path: "/longtail/wps-payroll-software-dubai",
    title: "WPS Payroll Software Dubai | Salary File Generation — OfficeKit HR",
    metaDescription:
      "WPS payroll software for Dubai and UAE: generate SIF salary files, validate employee data, and reconcile payroll with MOHRE requirements. OfficeKit HR.",
    h1: "WPS Payroll Software for Dubai",
    subtitle:
      "Generate validated SIF files, reduce WPS rejections, and streamline salary transfers for Dubai entities.",
    directAnswer:
      "OfficeKit HR is WPS payroll software for Dubai and UAE entities that generates validated SIF (Salary Information Files), checks employee IBANs and salary components for errors, and links payroll to attendance and leave data—reducing WPS file rejections and manual reconciliation time for finance teams.",
    clusters: [
      "SIF file generation with pre-submission validation checks",
      "Employee IBAN and salary component verification",
      "Attendance-to-payroll reconciliation for WPS cycles",
      "MOHRE-aligned payroll audit trails and reports",
    ],
    faqs: [
      {
        question: "What causes WPS file rejections in Dubai?",
        answer:
          "Common rejection reasons include invalid IBANs, mismatched employee IDs, incorrect salary amounts, and period mismatches. OfficeKit HR validates these fields before generating SIF files.",
      },
      {
        question: "Can WPS payroll software integrate with attendance systems?",
        answer:
          "Yes. OfficeKit HR links attendance and leave data to payroll so WPS salary files reflect actual days worked, overtime, and deductions—reducing manual reconciliation.",
      },
    ],
    relatedLinks: [
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "HR software Dubai", href: "/hr-software-dubai" },
    ],
  },
  "hrms-for-startups-india": {
    slug: "hrms-for-startups-india",
    path: "/longtail/hrms-for-startups-india",
    title: "HRMS for Startups in India | Affordable HR Software — OfficeKit HR",
    metaDescription:
      "HRMS for startups in India: affordable cloud HR software with payroll, attendance, and recruitment for early-stage and growing startups. OfficeKit HR.",
    h1: "HRMS for Startups in India",
    subtitle:
      "Scalable HR software for Indian startups with 5 to 200 employees—pay only for what you use.",
    directAnswer:
      "OfficeKit HR is an HRMS for startups in India that offers modular, per-user pricing for payroll (PF, ESI, PT, TDS), attendance tracking, recruitment ATS, and employee self-service—designed for early-stage and growth-stage startups that need enterprise features without enterprise pricing or complexity.",
    clusters: [
      "Affordable per-user pricing for early-stage startups",
      "Statutory payroll (PF, ESI, PT, TDS) for Indian compliance",
      "Recruitment ATS and onboarding for growing teams",
      "Scalable from 5 to 500+ employees without platform changes",
    ],
    faqs: [
      {
        question: "What is the best HRMS for a 20-person startup in India?",
        answer:
          "Startups with 20 employees typically need simple payroll, attendance, and leave management. OfficeKit HR offers modular plans so you can start with core HR and payroll, then add features as you grow.",
      },
      {
        question: "Do startups need an HRMS from day one?",
        answer:
          "Even at 5–10 employees, an HRMS saves time on payroll calculations, leave tracking, and compliance. OfficeKit HR's startup-friendly pricing makes it affordable from day one.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/solutions/best-hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
      { label: "Payroll software India", href: "/solutions/best-hrms-software-india" },
    ],
  },
  "biometric-attendance-system-uae": {
    slug: "biometric-attendance-system-uae",
    path: "/longtail/biometric-attendance-system-uae",
    title: "Biometric Attendance System UAE | Face-Kit & Mobile — OfficeKit HR",
    metaDescription:
      "Biometric attendance system for UAE: Face-Kit face recognition, fingerprint device integration, and mobile geo-check-in for Dubai, Abu Dhabi, and GCC workforces.",
    h1: "Biometric Attendance System for UAE",
    subtitle:
      "Track employee attendance with face recognition, biometric devices, or mobile check-in—linked to UAE payroll.",
    directAnswer:
      "OfficeKit HR's biometric attendance system for UAE supports Face-Kit contactless face recognition, integration with existing biometric devices (fingerprint, card), mobile GPS geo-check-in, and web check-in—all automatically linked to attendance reports and WPS payroll processing for Dubai, Abu Dhabi, and GCC entities.",
    clusters: [
      "Face-Kit contactless face recognition for high-volume sites",
      "Biometric device integration (fingerprint, card, QR)",
      "Mobile GPS geo-fencing for field and remote employees",
      "Automatic attendance-to-payroll sync for WPS compliance",
    ],
    faqs: [
      {
        question: "What attendance methods does OfficeKit support in the UAE?",
        answer:
          "OfficeKit supports Face-Kit face recognition, biometric device integration (ZKTeco, etc.), mobile GPS check-in, and web check-in. All methods feed into a unified attendance dashboard linked to payroll.",
      },
      {
        question: "Can biometric attendance integrate with UAE WPS payroll?",
        answer:
          "Yes. Attendance data (check-in/out times, overtime, late marks) flows directly into payroll calculations, ensuring WPS salary files reflect actual hours worked.",
      },
    ],
    relatedLinks: [
      { label: "Attendance software UAE", href: "/attendance-software-uae" },
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
    ],
  },
  "payroll-outsourcing-vs-software-india": {
    slug: "payroll-outsourcing-vs-software-india",
    path: "/longtail/payroll-outsourcing-vs-software-india",
    title: "Payroll Outsourcing vs Software India | In-House vs Outsource — OfficeKit HR",
    metaDescription:
      "Compare payroll outsourcing vs software for India: cost, control, compliance, and data security. Decide between outsourced payroll services or in-house HRMS software.",
    h1: "Payroll Outsourcing vs Software in India",
    subtitle:
      "Compare the pros and cons of outsourced payroll services vs in-house HRMS software for Indian businesses.",
    directAnswer:
      "Payroll outsourcing vs software in India: outsourcing transfers payroll processing to a third party for a monthly fee, while payroll software (like OfficeKit HR) keeps processing in-house with automated PF, ESI, PT, and TDS calculations. Software gives more control, faster data access, and integration with attendance and HR data, while outsourcing reduces the need for in-house payroll expertise.",
    clusters: [
      "Cost comparison: outsourcing per-employee fees vs software per-user subscription",
      "Data control and security differences between outsourced and in-house",
      "Integration: software connects payroll with attendance, HR, and compliance",
      "Turnaround time: in-house software vs outsourced payroll cycles",
    ],
    faqs: [
      {
        question: "Is it cheaper to outsource payroll or use payroll software in India?",
        answer:
          "For companies with 20–200 employees, payroll software typically costs less per employee than outsourcing while offering faster turnaround, direct data access, and HRMS integration. Outsourcing may suit very small teams or companies without in-house payroll knowledge.",
      },
      {
        question: "Can payroll software handle PF and ESI filing like outsourcing firms?",
        answer:
          "Yes. OfficeKit HR automates PF, ESI, PT, and TDS calculations and provides challan-ready reports—similar to outsourced service outputs but with in-house control and data visibility.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software India", href: "/solutions/best-hrms-software-india" },
      { label: "Best HRMS India", href: "/solutions/best-hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  "gratuity-calculation-software-uae": {
    slug: "gratuity-calculation-software-uae",
    path: "/longtail/gratuity-calculation-software-uae",
    title: "Gratuity Calculation Software UAE | EOS Benefits — OfficeKit HR",
    metaDescription:
      "Gratuity calculation software for UAE: automated end-of-service benefit calculations per UAE Labour Law, accrual tracking, and audit-ready reports. OfficeKit HR.",
    h1: "Gratuity Calculation Software for UAE",
    subtitle:
      "Automate end-of-service gratuity calculations, accrual tracking, and reporting for UAE employers.",
    directAnswer:
      "OfficeKit HR's gratuity calculation software for UAE automatically computes end-of-service benefits per UAE Labour Law (21 days of basic salary per year for first 5 years, 30 days per year thereafter, capped at 2 years of total basic salary) based on employee service tenure, contract type, and last drawn basic salary—with transparent accrual reports for HR and finance teams.",
    clusters: [
      "UAE gratuity auto-calculation per Labour Law (21 days/year × first 5 years, 30 days/year thereafter)",
      "Accrual tracking and reporting for balance sheet and audit purposes",
      "Contract type handling (limited vs unlimited contract differences)",
      "Termination scenarios: with/without cause, resignation, retirement",
    ],
    faqs: [
      {
        question: "How is gratuity calculated in the UAE for unlimited contracts?",
        answer:
          "For unlimited contracts: employees with 1–5 years get 21 days basic salary per year; 5+ years get 30 days per year. Different deduction rates apply based on who terminated the contract and the reason.",
      },
      {
        question: "Can gratuity software integrate with payroll and HR records?",
        answer:
          "Yes. OfficeKit HR calculates gratuity based on live service tenure and basic salary data from employee records, with accrual reports that update automatically after each payroll run.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "HR software UAE", href: "/solutions/best-hrms-software-india" },
      { label: "WPS compliance software", href: "/solutions/wps-compliance-software" },
    ],
  },
  "multi-country-payroll-gcc": {
    slug: "multi-country-payroll-gcc",
    path: "/longtail/multi-country-payroll-gcc",
    title: "Multi-Country Payroll GCC | UAE, KSA, Kuwait, Qatar — OfficeKit HR",
    metaDescription:
      "Multi-country payroll for GCC: process payroll across UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain from one HRMS. OfficeKit HR.",
    h1: "Multi-Country Payroll for the GCC",
    subtitle:
      "Run payroll for 6 GCC countries from one HRMS—with country-specific compliance, currencies, and reporting.",
    directAnswer:
      "OfficeKit HR provides multi-country payroll for the GCC across UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain—each with country-specific statutory deductions (WPS, GOSI, PIFSS, PASI, SIO), compliance rules, leave policies, and audit reporting, all managed from a single HRMS instance with consolidated group reporting.",
    clusters: [
      "UAE payroll with WPS SIF file generation",
      "KSA payroll with GOSI contributions and ZATCA-aligned reports",
      "Kuwait payroll with PIFSS social insurance tracking",
      "Qatar payroll with WPS and end-of-service gratuity",
      "Oman payroll with PASI contribution management",
      "Bahrain payroll with SIO and LMRA compliance",
    ],
    faqs: [
      {
        question: "Can one HRMS handle payroll for multiple GCC countries?",
        answer:
          "Yes. OfficeKit HR supports 6 GCC countries (UAE, Saudi Arabia, Kuwait, Qatar, Oman, Bahrain) from a single instance, each with country-specific payroll rules, statutory deductions, and reporting currencies.",
      },
      {
        question: "How does multi-country GCC payroll handle different currencies?",
        answer:
          "OfficeKit supports multi-currency payroll processing. Each entity can run payroll in its local currency (AED, SAR, KWD, QAR, OMR, BHD) with consolidated group-level reporting in your preferred base currency.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "Payroll software KSA", href: "/solutions/payroll-software-ksa" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
    ],
  },
};

export const LONGTAIL_SLUGS = Object.keys(LONGTAIL_PAGES);
