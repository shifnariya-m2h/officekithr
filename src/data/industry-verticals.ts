import type { FaqItem } from "@/seo/schema";
import { INDUSTRY_RICH_CONTENT } from "@/data/industry-rich-content";

export type IndustryRichContent = {
  highlights: string[];
  features: { title: string; description: string }[];
  compliancePoints: string[];
  sections: { heading: string; body: string }[];
  extraFaqs?: FaqItem[];
  extraFacts?: { heading: string; body: string }[];
};

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
  highlights: string[];
  features: { title: string; description: string }[];
  compliancePoints: string[];
  sections: { heading: string; body: string }[];
};

const INDUSTRY_BASE: Record<string, Omit<IndustryConfig, "highlights" | "features" | "compliancePoints" | "sections">> = {
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
      { label: "Best HRMS software India", href: "/hrms-software-india" },
      { label: "GCC compliance hub", href: "/gcc-compliance" },
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
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "GCC compliance hub", href: "/gcc-compliance" },
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
      { label: "Best HRMS software India", href: "/hrms-software-india" },
      { label: "Payroll software India", href: "/payroll-software-india" },
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

  "hrms-for-fintech": {
    slug: "hrms-for-fintech",
    path: "/industries/hrms-for-fintech",
    title: "HRMS for Fintech | Payment & NBFC Workforce — OfficeKit HR",
    metaDescription:
      "Fintech HRMS for payment companies, NBFCs, and digital lenders. Regulatory compliance, variable pay, India+GCC payroll, and scalable hiring. OfficeKit HR.",
    h1: "HRMS for fintech companies",
    subtitle:
      "Scale fintech teams with compliant payroll, fast onboarding, and variable pay for sales and operations roles across India and the GCC.",
    directAnswer:
      "OfficeKit HR is an HRMS for fintech companies — payment gateways, digital lenders, NBFCs, and neobanks — with rapid onboarding, regulatory document management, sales incentive payroll, and statutory compliance for India (PF, ESI, PT, TDS) and GCC markets (WPS, GOSI, PIFSS).",
    definition: {
      term: "Fintech HRMS",
      meaning:
        "A human resource management system tailored for financial technology companies to manage fast-growing teams, variable compensation, regulatory background checks, and multi-country payroll for India and Gulf operations.",
    },
    challenges: [
      "Rapid headcount growth with tight compliance deadlines",
      "Variable pay and commission structures for sales and partnership teams",
      "Background verification and document management for regulated roles",
      "Multi-entity payroll across India HQ and GCC subsidiaries",
      "Shift and roster management for customer support and operations centres",
      "Audit-ready payroll registers for RBI, SEBI, and financial sector audits",
    ],
    facts: [
      {
        heading: "Fintech workforce scaling",
        body: "Fintech startups and scale-ups hire aggressively across engineering, sales, compliance, and customer operations. HRMS must support fast onboarding, role-based access, variable pay, and statutory payroll without slowing growth.",
      },
      {
        heading: "OfficeKit HR for fintech employers",
        body: "OfficeKit provides ATS recruitment, configurable incentive pay components, document expiry tracking, and India+GCC statutory payroll — so fintech HR teams can scale headcount while staying audit-ready.",
      },
    ],
    capabilities: [
      "Fast recruitment and onboarding workflows",
      "Sales incentive and commission pay components",
      "Document management for KYC and compliance records",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC WPS payroll and end-of-service benefits",
      "Shift scheduling for operations and support teams",
      "Employee self-service for payslips and leave",
      "Audit-ready payroll registers and reports",
    ],
    faqs: [
      {
        question: "Can OfficeKit HR handle variable pay for fintech sales teams?",
        answer:
          "Yes. OfficeKit supports variable pay components including commissions, quarterly bonuses, and incentive payouts configured per role and integrated into regular payroll runs.",
      },
      {
        question: "Does OfficeKit support fintech companies with India and UAE entities?",
        answer:
          "Yes. One platform runs India statutory payroll and UAE WPS payroll for fintech groups expanding from India to Dubai, Abu Dhabi, or other GCC hubs.",
      },
      {
        question: "How does OfficeKit help with compliance document tracking for fintech?",
        answer:
          "Employee documents can be stored with expiry alerts for certifications, background checks, and role-specific compliance records required in regulated financial services.",
      },
    ],
    relatedLinks: [
      { label: "HRMS for BFSI", href: "/industries/hrms-for-bfsi" },
      { label: "IT services HRMS", href: "/industries/hrms-for-it-services" },
      { label: "HRMS software India", href: "/hrms-software-india" },
      { label: "Payroll & compliance", href: "/features/payroll-and-compliance" },
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
      { label: "Best HRMS software India", href: "/hrms-software-india" },
      { label: "HRMS for logistics", href: "/industries/hrms-for-logistics" },
    ],
  },
  "hrms-for-manufacturing": {
    slug: "hrms-for-manufacturing",
    path: "/industries/hrms-for-manufacturing",
    title: "HRMS for Manufacturing | Factory Payroll & Attendance — OfficeKit HR",
    metaDescription:
      "Manufacturing HRMS with shift attendance, Face-Kit biometric, blue-collar payroll, overtime rules, and India+GCC statutory compliance. OfficeKit HR.",
    h1: "HRMS for manufacturing",
    subtitle:
      "Shift-based attendance, factory payroll, and compliance for manufacturing plants in India and the GCC.",
    directAnswer:
      "OfficeKit HR is an HRMS for manufacturing companies with shift scheduling, biometric and Face-Kit attendance, overtime and night-shift rules, contractor management, and statutory payroll for factory workforces across India and GCC countries.",
    definition: {
      term: "Manufacturing HRMS",
      meaning:
        "A human resource management system for factories and production plants to manage shift-based workforces, shop-floor attendance, overtime calculations, and statutory payroll aligned with manufacturing labour regulations.",
    },
    challenges: [
      "Shift and overtime tracking across production lines",
      "Blue-collar attendance at scale on factory floors",
      "Multi-location plants with different shift policies",
      "Contractor and temporary worker management",
      "Statutory compliance across Indian states and GCC countries",
      "Bonus, gratuity, and production-linked incentive pay",
    ],
    facts: [
      {
        heading: "Manufacturing workforce complexity",
        body: "Factory operations run on rotating shifts with high blue-collar headcount, strict overtime rules, and production-linked incentives. HRMS for manufacturing must handle biometric attendance at scale and payroll tied to shift differentials.",
      },
      {
        heading: "OfficeKit HR for manufacturing employers",
        body: "OfficeKit provides Face-Kit facial recognition, biometric integrations, configurable shift rules, overtime policies, and India+GCC statutory payroll for multi-plant manufacturing groups.",
      },
    ],
    capabilities: [
      "Shift scheduling and rotation management",
      "Face-Kit and biometric attendance for shop floors",
      "Overtime and night-shift premium calculations",
      "Contractor and temporary worker tracking",
      "India statutory payroll (PF, ESI, PT, bonus, gratuity)",
      "GCC WPS payroll and end-of-service benefits",
      "Multi-plant employee grouping and reporting",
    ],
    faqs: [
      {
        question: "Does OfficeKit support factory shift attendance?",
        answer:
          "Yes. Biometric devices, mobile geo-fencing, and Face-Kit facial recognition integrate with configurable shift rules and overtime calculation for factory teams.",
      },
      {
        question: "Can OfficeKit manage HR across multiple manufacturing plants?",
        answer:
          "Yes. Plants can be configured as organisational units with independent shift policies while consolidating payroll and compliance reporting at the group level.",
      },
      {
        question: "Does OfficeKit handle production-linked incentive pay?",
        answer:
          "Yes. Variable pay components for production bonuses and shift incentives can be configured per role and integrated into regular statutory payroll runs.",
      },
    ],
    relatedLinks: [
      { label: "Face-Kit attendance", href: "/features/face-kit" },
      { label: "Construction HRMS", href: "/best-hrms-for-construction" },
      { label: "Attendance & leave", href: "/features/attendance-and-leave" },
    ],
  },
  "hrms-for-it-services": {
    slug: "hrms-for-it-services",
    path: "/industries/hrms-for-it-services",
    title: "HRMS for IT Companies | India & GCC — OfficeKit HR",
    metaDescription:
      "HRMS for IT services and software companies: ATS recruitment, OKRs, India payroll, hybrid attendance, and GCC expansion support. OfficeKit HR.",
    h1: "HRMS for IT services",
    subtitle:
      "Recruitment, performance, and payroll for IT companies scaling in India and the Gulf.",
    directAnswer:
      "OfficeKit HR is an HRMS for IT services and software companies with applicant tracking, OKR-based performance management, hybrid attendance, India statutory payroll, and GCC modules for firms expanding to Dubai, Riyadh, Bangalore, or other tech hubs.",
    definition: {
      term: "IT HRMS",
      meaning:
        "A human resource management system for IT services, software product, and technology consulting firms to manage rapid hiring, performance cycles, remote attendance, and multi-country payroll.",
    },
    challenges: [
      "Rapid hiring across engineering, sales, and delivery teams",
      "Performance management with OKRs and appraisal cycles",
      "India HQ and GCC subsidiary payroll on one platform",
      "Remote and hybrid attendance policies",
      "Contractor and bench resource management",
      "Employee self-service for distributed tech teams",
    ],
    facts: [
      {
        heading: "IT sector HR demands",
        body: "IT and software companies hire at pace, run quarterly OKRs, and often expand to GCC delivery centres. HRMS must support ATS pipelines, performance modules, and statutory payroll across India and Gulf entities.",
      },
      {
        heading: "OfficeKit HR for IT employers",
        body: "OfficeKit combines recruitment management, OKR performance tracking, hybrid attendance, and India+GCC payroll — ideal for IT services firms from 50 to 5,000 employees.",
      },
    ],
    capabilities: [
      "ATS recruitment and onboarding workflows",
      "OKRs and continuous performance management",
      "Hybrid and remote attendance tracking",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC WPS payroll for UAE and Saudi subsidiaries",
      "Contractor and consultant management",
      "Employee self-service portal and mobile app",
    ],
    faqs: [
      {
        question: "Is OfficeKit good for IT companies with UAE offices?",
        answer:
          "Yes. One HRMS runs India statutory payroll at HQ and UAE WPS payroll for Gulf subsidiaries, with shared employee records and consolidated reporting.",
      },
      {
        question: "Does OfficeKit support OKR-based performance for tech teams?",
        answer:
          "Yes. Performance management includes OKR tracking, review cycles, and feedback workflows suited to engineering and product organisations.",
      },
      {
        question: "Can OfficeKit handle hybrid attendance for remote tech teams?",
        answer:
          "Yes. Attendance policies support office, remote, and hybrid models with mobile check-in and integration with biometric devices at delivery centres.",
      },
    ],
    relatedLinks: [
      { label: "Bangalore HRMS", href: "/solutions/hrms-software-bangalore" },
      { label: "HRMS software India", href: "/hrms-software-india" },
      { label: "Recruitment management", href: "/features/recruitment-management" },
      { label: "Performance appraisal", href: "/features/performance-appraisal" },
    ],
  },
  "hrms-for-healthcare": {
    slug: "hrms-for-healthcare",
    path: "/industries/hrms-for-healthcare",
    title: "HRMS for Healthcare | Hospital Workforce Management — OfficeKit HR",
    metaDescription:
      "Healthcare HRMS for hospitals and clinics: shift rostering, credential tracking, clinical staff payroll, and India+GCC compliance. OfficeKit HR.",
    h1: "HRMS for healthcare",
    subtitle:
      "Shift rostering, compliance, and payroll for hospitals, clinics, and healthcare groups.",
    directAnswer:
      "OfficeKit HR supports healthcare workforce management with 24/7 shift scheduling, medical licence and credential expiry alerts, attendance for clinical and admin staff, and statutory payroll for hospitals and clinic groups in India and the GCC.",
    definition: {
      term: "Healthcare HRMS",
      meaning:
        "A human resource management system for hospitals, clinics, diagnostic chains, and healthcare groups to manage clinical shift rosters, credential compliance, and payroll for medical and administrative staff.",
    },
    challenges: [
      "24/7 shift rostering for nurses, doctors, and support staff",
      "Medical licence and credential expiry tracking",
      "Multi-location clinics and hospital branches",
      "Regulatory record-keeping for healthcare labour laws",
      "Overtime and on-call pay for clinical teams",
      "High turnover in entry-level healthcare roles",
    ],
    facts: [
      {
        heading: "Healthcare workforce demands",
        body: "Hospitals and clinic chains operate around the clock with complex shift rotations, credential requirements, and strict compliance. HRMS for healthcare must handle roster management and audit-ready payroll for clinical staff.",
      },
      {
        heading: "OfficeKit HR for healthcare employers",
        body: "OfficeKit provides shift rostering, document expiry alerts for licences and certifications, attendance tracking, and India+GCC statutory payroll for healthcare groups from single clinics to multi-hospital networks.",
      },
    ],
    capabilities: [
      "24/7 shift rostering and rotation management",
      "Credential and licence expiry alerts",
      "Attendance for clinical and admin staff",
      "Overtime and on-call pay configuration",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "GCC payroll and end-of-service for healthcare workers",
      "Employee self-service for schedules and payslips",
      "Document management for medical certifications",
    ],
    faqs: [
      {
        question: "Can OfficeKit manage nurse shift schedules?",
        answer:
          "Yes. Configurable shift rules, rotations, swap approvals, and overtime calculation support 24/7 healthcare operations across departments.",
      },
      {
        question: "Does OfficeKit track medical licence expiry dates?",
        answer:
          "Yes. Employee documents including medical licences and certifications can be stored with automatic expiry alerts for HR and department heads.",
      },
      {
        question: "Can OfficeKit handle payroll for multi-location hospital groups?",
        answer:
          "Yes. Branches and departments can be grouped independently with consolidated payroll and compliance reporting at the hospital group level.",
      },
    ],
    relatedLinks: [
      { label: "Healthcare HR software", href: "/hr-software-healthcare" },
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "Attendance & leave", href: "/features/attendance-and-leave" },
      { label: "Employee management", href: "/features/employee-management" },
    ],
  },
  "hrms-for-real-estate": {
    slug: "hrms-for-real-estate",
    path: "/industries/hrms-for-real-estate",
    title: "HRMS for Real Estate | UAE & India Property Firms — OfficeKit HR",
    metaDescription:
      "HRMS for real estate and property companies: agent commission payroll, UAE WPS compliance, gratuity, and multi-branch workforce management. OfficeKit HR.",
    h1: "HRMS for real estate",
    subtitle:
      "Commission payroll, WPS compliance, and HR for property developers and brokerages.",
    directAnswer:
      "OfficeKit HR is an HRMS for real estate companies with variable pay for sales agents, UAE WPS payroll, gratuity and end-of-service calculation, mobile attendance for field teams, and India statutory payroll for property firms operating across India and the Gulf.",
    definition: {
      term: "Real estate HRMS",
      meaning:
        "A human resource management system for property developers, brokerages, and real estate agencies to manage commission-based sales teams, branch-level payroll, and WPS compliance in UAE and GCC markets.",
    },
    challenges: [
      "Complex agent commission and bonus structures",
      "Multi-branch sales teams across cities and emirates",
      "UAE WPS compliance for property and brokerage firms",
      "High turnover in sales and leasing roles",
      "Field attendance for agents visiting project sites",
      "Gratuity and end-of-service for GCC property staff",
    ],
    facts: [
      {
        heading: "Real estate payroll complexity",
        body: "Property firms pay agents through base salary plus commissions tied to deals closed. HRMS must handle variable pay, WPS filing in UAE, and gratuity calculations while managing high-churn sales teams across branches.",
      },
      {
        heading: "OfficeKit HR for real estate employers",
        body: "OfficeKit supports commission pay components, UAE WPS payroll, mobile geo-fenced attendance for field agents, and India statutory payroll for developers with operations in both markets.",
      },
    ],
    capabilities: [
      "Commission and variable pay components",
      "UAE WPS payroll and MOHRE compliance",
      "Gratuity and end-of-service calculation",
      "Mobile geo-fenced attendance for field agents",
      "Multi-branch employee management",
      "India statutory payroll (PF, ESI, PT, TDS)",
      "Employee self-service for payslips and leave",
    ],
    faqs: [
      {
        question: "Does OfficeKit handle real estate agent commissions?",
        answer:
          "Yes. Variable pay components for commissions, deal bonuses, and quarterly incentives integrate into regular WPS-compliant payroll runs.",
      },
      {
        question: "Can OfficeKit manage HR for property firms with branches in UAE and India?",
        answer:
          "Yes. One platform handles UAE WPS payroll for Gulf branches and India statutory payroll for domestic operations with consolidated reporting.",
      },
      {
        question: "How does attendance work for field-based real estate agents?",
        answer:
          "Agents can check in via mobile GPS geo-fencing at project sites or branch offices, with attendance rules configurable per team and location.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "HR software Dubai", href: "/hr-software-dubai" },
      { label: "Payroll & compliance", href: "/features/payroll-and-compliance" },
    ],
  },
};

export const INDUSTRY_PAGES: Record<string, IndustryConfig> = Object.fromEntries(
  Object.entries(INDUSTRY_BASE).map(([slug, page]) => {
    const rich = INDUSTRY_RICH_CONTENT[slug];
    if (!rich) {
      return [
        slug,
        {
          ...page,
          highlights: [],
          features: [],
          compliancePoints: [],
          sections: [],
        } satisfies IndustryConfig,
      ];
    }
    return [
      slug,
      {
        ...page,
        highlights: rich.highlights,
        features: rich.features,
        compliancePoints: rich.compliancePoints,
        sections: rich.sections,
        faqs: [...page.faqs, ...(rich.extraFaqs ?? [])],
        facts: [...page.facts, ...(rich.extraFacts ?? [])],
      } satisfies IndustryConfig,
    ];
  })
) as Record<string, IndustryConfig>;
