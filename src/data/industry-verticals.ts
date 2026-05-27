import type { FaqItem } from "@/seo/schema";

export type IndustryConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  definition?: { term: string; meaning: string };
  challenges: string[];
  facts: { heading: string; body: string }[];
  capabilities: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const INDUSTRY_PAGES: Record<string, IndustryConfig> = {
  "hrms-for-retail": {
    slug: "hrms-for-retail",
    path: "/industries/hrms-for-retail",
    title: "HRMS for Retail Industry | Retail Workforce Management — OfficeKit HR",
    metaDescription:
      "Retail HRMS software for stores, multi-location teams, shift-based attendance, and India+GCC payroll. OfficeKit HR for retail workforce management.",
    h1: "HRMS for the retail industry",
    subtitle:
      "Manage store-level attendance, shift scheduling, and multi-location payroll across India and the GCC.",
    directAnswer:
      "OfficeKit HR is an HRMS purpose-built for retail businesses with store-based teams, shift rotations, multi-location attendance tracking, and statutory payroll across India and GCC countries. It handles store-wise employee grouping, geo-fenced attendance, shift rules, and consolidated payroll for retail chains.",
    definition: {
      term: "Retail HRMS",
      meaning:
        "A human resource management system tailored for retail organisations with store-based employees, multi-location operations, shift-based scheduling, seasonal workforce scaling, and centralised HR administration across branches.",
    },
    challenges: [
      "Managing attendance across multiple store locations",
      "Shift scheduling and rotation for sales floor teams",
      "High employee turnover in front-line retail roles",
      "Seasonal workforce scaling during peak periods",
      "Payroll complexity with store-specific incentives and commissions",
      "Statutory compliance across states and GCC countries for multi-location chains",
    ],
    facts: [
      {
        heading: "Retail workforce management complexity",
        body: "Retail chains operate across multiple store locations with distinct shift patterns, store-level attendance requirements, and region-specific labour laws. Centralised HRMS simplifies payroll, attendance consolidation, and compliance reporting for multi-store retail operations.",
      },
      {
        heading: "OfficeKit HR for retail chains",
        body: "OfficeKit provides geo-fenced mobile attendance for store teams, configurable shift rules, store-wise employee grouping, and statutory payroll for India (PF/ESI/PT) and GCC (WPS, GOSI, PIFSS) markets.",
      },
    ],
    capabilities: [
      "Multi-store attendance with geo-fenced mobile check-in",
      "Configurable shift scheduling and rotation",
      "Store-wise employee grouping and reporting",
      "Seasonal workforce onboarding templates",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC payroll compliance (UAE WPS, KSA GOSI, Kuwait PIFSS)",
      "Employee self-service for payslips and leave",
    ],
    faqs: [
      {
        question: "Can OfficeKit HR handle payroll for retail stores across different Indian states?",
        answer:
          "Yes. OfficeKit manages multi-state India payroll with state-specific professional tax, PF, ESI, and Shops & Establishments compliance for retail chains with stores across states.",
      },
      {
        question: "How does attendance work for retail employees in stores vs head office?",
        answer:
          "Store employees can use mobile GPS geo-fenced check-in tied to their store location, while office staff use standard biometric or Face-Kit facial recognition. Attendance rules and shift policies are configurable per location.",
      },
      {
        question: "Can OfficeKit manage GCC retail payroll alongside India operations?",
        answer:
          "Yes. If your retail chain operates stores in both India and GCC countries, OfficeKit handles statutory payroll for each country from a single platform with country-specific compliance rules.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS software India", href: "/solutions/best-hrms-software-india" },
      { label: "HRMS for hospitality", href: "/industries/hrms-for-hospitality" },
      { label: "Attendance & leave feature", href: "/features/attendance-and-leave" },
    ],
  },

  "hrms-for-hospitality": {
    slug: "hrms-for-hospitality",
    path: "/industries/hrms-for-hospitality",
    title: "HRMS for Hospitality | Hotel & Restaurant Workforce — OfficeKit HR",
    metaDescription:
      "Hospitality HRMS for hotels, restaurants, and resorts. Shift management, tip allocation, multi-location attendance, and India+GCC payroll. OfficeKit HR.",
    h1: "HRMS for hospitality",
    subtitle:
      "Streamline hotel and restaurant HR with shift scheduling, tip and service charge handling, and multi-location compliance.",
    directAnswer:
      "OfficeKit HR serves hospitality businesses — hotels, restaurants, and resorts — with shift-based attendance, rotation scheduling, service charge and tip allocation tracking, and statutory payroll for India and GCC countries. It manages front-of-house and back-of-house teams across multiple outlets.",
    definition: {
      term: "Hospitality HRMS",
      meaning:
        "A human resource management system designed for hotels, restaurants, resorts, and catering businesses to manage shift-based teams, multi-outlet payroll, tip allocation, and compliance with hospitality-specific labour regulations.",
    },
    challenges: [
      "Complex shift scheduling across FOH and BOH teams",
      "High seasonal workforce fluctuation",
      "Tip and service charge distribution tracking",
      "Multi-outlet attendance consolidation",
      "Labour law compliance for hospitality-specific working hours",
      "Gratuity and end-of-service for GCC hospitality workers",
    ],
    facts: [
      {
        heading: "Hospitality workforce demands",
        body: "Hotels and restaurants operate 24/7 with rotating shifts across front desk, kitchen, housekeeping, and management. HRMS for hospitality must handle shift swaps, overtime rules, tip tracking, and compliance with hospitality-specific labour regulations in India and the GCC.",
      },
      {
        heading: "OfficeKit HR for hospitality employers",
        body: "OfficeKit provides shift rotation scheduling, overtime policy management, geo-fenced attendance for multi-outlet teams, and statutory payroll that covers India PF/ESI and GCC WPS, GOSI, and end-of-service benefits.",
      },
    ],
    capabilities: [
      "Multi-outlet employee management and grouping",
      "Rotating shift scheduling and swap approvals",
      "Overtime and holiday pay policy rules",
      "Mobile geo-fenced attendance for remote outlets",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC WPS payroll and end-of-service calculation",
      "Employee self-service for schedules and payslips",
    ],
    faqs: [
      {
        question: "How does OfficeKit handle tip and service charge allocation in hospitality?",
        answer:
          "OfficeKit can track service charge pools and distribute them based on configurable rules (per outlet, by role, by hours worked) alongside regular payroll processing.",
      },
      {
        question: "Can OfficeKit manage HR across multiple hotel properties or restaurant chains?",
        answer:
          "Yes. Employees can be grouped by property or outlet, with independent attendance, shift, and payroll configurations per location while providing consolidated reporting at the group level.",
      },
      {
        question: "Does OfficeKit support GCC labour law compliance for hospitality workers?",
        answer:
          "Yes. OfficeKit handles UAE WPS with MOHRE compliance, KSA GOSI, gratuity, and end-of-service benefits for hospitality employees across all GCC countries.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/solutions/payroll-software-uae" },
      { label: "HRMS for retail", href: "/industries/hrms-for-retail" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },

  "hrms-for-education": {
    slug: "hrms-for-education",
    path: "/industries/hrms-for-education",
    title: "HRMS for Education | School & University Workforce — OfficeKit HR",
    metaDescription:
      "Education HRMS for schools, colleges, and universities. Faculty attendance, academic calendar-based leave, contract management, and India+GCC payroll. OfficeKit HR.",
    h1: "HRMS for education institutions",
    subtitle:
      "Manage faculty, staff, and administration with academic calendar-based leave, contract tracking, and multi-state payroll.",
    directAnswer:
      "OfficeKit HR provides HRMS for schools, colleges, and universities with faculty attendance tracking, academic calendar-based leave policies, contract and tenure management, and statutory payroll for India and GCC education institutions. It supports teaching and non-teaching staff with role-specific policies.",
    definition: {
      term: "Education HRMS",
      meaning:
        "A human resource management system tailored for educational institutions — schools, colleges, universities, and training centres — to manage faculty attendance, academic leave policies, employment contracts, and institution-specific payroll and compliance.",
    },
    challenges: [
      "Academic calendar-based leave that differs from standard business leave",
      "Faculty attendance tied to class schedules and contact hours",
      "Contract management for adjunct, visiting, and tenured faculty",
      "Multi-campus employee administration",
      "Gratuity and pension calculations for long-serving faculty",
      "Seasonal hiring for exam invigilation and guest lectures",
    ],
    facts: [
      {
        heading: "Education workforce management needs",
        body: "Educational institutions manage diverse employee types — tenured faculty, adjunct lecturers, administrative staff, and seasonal workers — each with different attendance policies, leave rules, and contract structures. Academic calendar-based HR policies differ significantly from corporate models.",
      },
      {
        heading: "OfficeKit HR for education employers",
        body: "OfficeKit supports faculty attendance tracking by class schedule, academic term-based leave policies, contract duration management, and statutory payroll for both India (PF, ESI, PT) and GCC education institutions.",
      },
    ],
    capabilities: [
      "Faculty attendance linked to class schedules",
      "Academic term-based leave policies",
      "Contract and tenure tracking with expiry alerts",
      "Multi-campus employee management",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC payroll compliance for international schools",
      "Employee self-service for payslips and leave requests",
      "Document management for qualification and certification records",
    ],
    faqs: [
      {
        question: "Can OfficeKit handle faculty leave policies that follow academic semesters?",
        answer:
          "Yes. Leave policies can be configured to follow academic terms or semesters rather than the standard financial year, with carry-over rules appropriate for teaching staff.",
      },
      {
        question: "Does OfficeKit support contract management for adjunct and visiting faculty?",
        answer:
          "Yes. Employment contracts with fixed durations, automatic expiry alerts, and renewal workflows help manage adjunct, visiting, and temporary faculty alongside permanent staff.",
      },
      {
        question: "Can OfficeKit manage HR across multiple campuses?",
        answer:
          "Yes. Multi-campus education institutions can group employees by campus with independent attendance configurations while consolidating payroll and compliance reporting centrally.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS software India", href: "/solutions/best-hrms-software-india" },
      { label: "Employee management feature", href: "/features/employee-management" },
    ],
  },

  "hrms-for-logistics": {
    slug: "hrms-for-logistics",
    path: "/industries/hrms-for-logistics",
    title: "HRMS for Logistics | Transport & Supply Chain — OfficeKit HR",
    metaDescription:
      "Logistics HRMS for transport, warehousing, and supply chain. Driver attendance, fleet-linked payroll, shift management, and India+GCC compliance. OfficeKit HR.",
    h1: "HRMS for logistics and supply chain",
    subtitle:
      "Manage driver teams, warehouse staff, and fleet operations with GPS-based attendance and multi-location payroll.",
    directAnswer:
      "OfficeKit HR is an HRMS for logistics and supply chain companies with features for driver and field staff attendance via mobile GPS, shift management for warehouse operations, distance-based or trip-based pay components, and statutory payroll across India and GCC countries.",
    definition: {
      term: "Logistics HRMS",
      meaning:
        "A human resource management system for transport, warehousing, and supply chain businesses to manage field-based teams, driver attendance, fleet-linked payroll, shift scheduling, and multi-location compliance.",
    },
    challenges: [
      "Tracking attendance for drivers and field staff away from fixed locations",
      "Shift management across 24/7 warehouse operations",
      "Distance-based and trip-based pay calculations",
      "High employee churn in entry-level logistics roles",
      "Multiple statutory compliance across states and GCC countries for fleet operations",
      "Overtime and night shift differential calculations",
    ],
    facts: [
      {
        heading: "Logistics workforce challenges",
        body: "Logistics and supply chain companies manage drivers, warehouse staff, and admin teams across multiple locations with shift-based operations. Mobile attendance, trip-based pay, fleet integration, and multi-region statutory compliance are critical requirements.",
      },
      {
        heading: "OfficeKit HR for logistics employers",
        body: "OfficeKit provides GPS-based mobile attendance for field staff, configurable shift rules for warehouses, payroll components for trip and distance-based pay, and statutory compliance for India and GCC markets.",
      },
    ],
    capabilities: [
      "GPS-based mobile attendance for drivers and field staff",
      "Multi-shift management for warehouse operations",
      "Trip and distance-based pay component configuration",
      "Overtime and night shift premium calculations",
      "India statutory payroll (PF, ESI, PT, bonus, gratuity)",
      "GCC WPS payroll and end-of-service benefits",
      "Contractor and temporary worker management",
    ],
    faqs: [
      {
        question: "How does attendance work for drivers who are not at a fixed location?",
        answer:
          "OfficeKit's mobile app with GPS geo-fencing allows drivers and field staff to check in at dispatch points, delivery locations, or depots. Route-based checkpoints can be configured for trip validation.",
      },
      {
        question: "Can OfficeKit handle trip-based or distance-based pay for drivers?",
        answer:
          "Yes. Payroll components can be configured to incorporate trip counts, distance travelled, or per-delivery rates alongside fixed salary components, all within statutory compliance frameworks.",
      },
      {
        question: "Does OfficeKit support logistics companies operating across India and GCC?",
        answer:
          "Yes. OfficeKit handles multi-country payroll for logistics companies with operations in both India and GCC markets, supporting country-specific compliance and currency handling.",
      },
    ],
    relatedLinks: [
      { label: "Attendance & leave feature", href: "/features/attendance-and-leave" },
      { label: "HRMS for retail", href: "/industries/hrms-for-retail" },
      { label: "Payroll software India", href: "/payroll-software-india" },
    ],
  },

  "hrms-for-bfsi": {
    slug: "hrms-for-bfsi",
    path: "/industries/hrms-for-bfsi",
    title: "HRMS for BFSI | Banking & Financial Services — OfficeKit HR",
    metaDescription:
      "BFSI HRMS for banking, insurance, NBFCs, and financial services. Branch-level management, regulatory compliance, and India+GCC payroll. OfficeKit HR.",
    h1: "HRMS for BFSI",
    subtitle:
      "Manage branch-level teams, regulatory compliance, and statutory payroll for banking, insurance, and financial services.",
    directAnswer:
      "OfficeKit HR provides HRMS for BFSI (Banking, Financial Services, and Insurance) organisations with branch-level team management, regulatory compliance reporting, shift and roster management for customer-facing staff, and statutory payroll for India and GCC financial institutions.",
    definition: {
      term: "BFSI HRMS",
      meaning:
        "A human resource management system for banking, financial services, and insurance companies to manage branch-based teams, regulatory compliance, shift scheduling for customer-facing staff, and statutory payroll aligned with financial sector regulations.",
    },
    challenges: [
      "Branch-level employee management across large geographic footprints",
      "Regulatory compliance for financial sector working hours and leave policies",
      "Shift and roster management for branch and call centre staff",
      "Sales incentive and commission tracking for relationship managers",
      "Background verification and document management for regulated roles",
      "Multi-state and multi-country payroll compliance with financial sector levies",
    ],
    facts: [
      {
        heading: "BFSI workforce management requirements",
        body: "BFSI organisations manage employees across branches, regional offices, and corporate centres with regulatory requirements for working hours, leave policies, and record-keeping. Sales incentives, commissions, and role-specific compliance add further complexity.",
      },
      {
        heading: "OfficeKit HR for BFSI employers",
        body: "OfficeKit supports branch-level employee grouping, regulatory policy configuration, sales incentive tracking, and statutory payroll for BFSI entities across India (PF/ESI/PT) and GCC (WPS, GOSI, PIFSS) markets.",
      },
    ],
    capabilities: [
      "Branch and region-level employee management",
      "Configurable shift and roster scheduling",
      "Sales incentive and commission pay components",
      "Document management for regulatory compliance",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC payroll and end-of-service benefits",
      "Employee self-service for payslips and leave",
      "Audit-ready payroll registers and reports",
    ],
    faqs: [
      {
        question: "Can OfficeKit manage HR across multiple branches for a BFSI organisation?",
        answer:
          "Yes. Branches can be configured as organisational units with independent attendance rules, reporting hierarchies, and payroll cost centres while providing consolidated group-level reporting.",
      },
      {
        question: "How does OfficeKit handle sales incentives and commissions for financial services roles?",
        answer:
          "OfficeKit supports variable pay components including sales commissions, quarterly bonuses, and incentive payouts that can be configured per role and integrated into regular payroll runs.",
      },
      {
        question: "Does OfficeKit support BFSI compliance with financial sector regulations in India and GCC?",
        answer:
          "OfficeKit provides audit-ready payroll registers, statutory compliance reports, and document management to support regulatory record-keeping requirements for financial services entities.",
      },
    ],
    relatedLinks: [
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
      { label: "Best HRMS software India", href: "/solutions/best-hrms-software-india" },
      { label: "HRMS for logistics", href: "/industries/hrms-for-logistics" },
    ],
  },
};
