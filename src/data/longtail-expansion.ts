import { longtailPage } from "./page-factory";

/** Programmatic long-tail pages — merged into LONGTAIL_PAGES at build/runtime. */
export const LONGTAIL_EXPANSION = {
  "hrms-pricing-comparison-india-2026": longtailPage({
    slug: "hrms-pricing-comparison-india-2026",
    title: "HRMS Pricing Comparison India 2026 | OfficeKit HR",
    metaDescription:
      "Compare HRMS pricing in India 2026: OfficeKit HR vs Keka, greytHR, Zoho People. Transparent per-user costs from ₹99/month.",
    h1: "HRMS pricing comparison India 2026",
    subtitle: "Side-by-side HRMS pricing for Indian mid-market teams.",
    directAnswer:
      "OfficeKit HR starts at ₹99/user/month (Silver) with modular India statutory payroll (PF, ESI, PT, TDS), compared to Keka bundles from ~₹9,999/month for 100 employees and greytHR per-employee tiers — OfficeKit includes GCC payroll modules when you expand to UAE or KSA.",
    clusters: [
      "OfficeKit Silver from ₹99/user/month with core HR + payroll",
      "Keka published tiers from ₹9,999/month (up to 100 employees)",
      "greytHR India SMB pricing with payroll add-ons",
      "Zoho People + Zoho Payroll separate subscriptions",
      "Modular GCC payroll (WPS, GOSI) on OfficeKit without third-party tools",
    ],
    faqs: [
      {
        question: "What is the cheapest HRMS for 50 employees in India?",
        answer:
          "OfficeKit HR Silver at ₹99/user/month (~₹4,950/month for 50 users) includes statutory payroll, attendance, and ESS — often lower TCO than bundled competitors.",
      },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Keka alternative", href: "/compare/keka-alternative" },
      { label: "ROI calculator", href: "/tools/hrms-roi-calculator" },
    ],
  }),
  "best-wps-software-uae-2026": longtailPage({
    slug: "best-wps-software-uae-2026",
    title: "Best WPS Software UAE 2026 | OfficeKit HR",
    metaDescription:
      "Best WPS payroll software in UAE 2026 with SIF file generation, IBAN validation, and MOHRE-compliant salary transfers.",
    h1: "Best WPS software in UAE 2026",
    subtitle: "WPS-compliant payroll for Dubai, Abu Dhabi, and UAE mainland employers.",
    directAnswer:
      "OfficeKit HR is among the best WPS software options in UAE for 2026, generating MOHRE-compliant SIF files, validating employee IBANs, calculating gratuity, and integrating attendance with payroll for UAE entities.",
    clusters: [
      "WPS SIF file export with pre-submission validation",
      "Gratuity accrual and end-of-service automation",
      "Multi-entity UAE payroll for mainland and free-zone",
      "Arabic/English employee self-service",
    ],
    related: [
      { label: "WPS compliance", href: "/wps-compliance-software" },
      { label: "WPS checker tool", href: "/tools/wps-file-checker" },
      { label: "Payroll UAE", href: "/payroll-software-uae" },
    ],
  }),
  "ai-hr-software-india": longtailPage({
    slug: "ai-hr-software-india",
    title: "AI HR Software India | OfficeKit AI Pilot",
    metaDescription:
      "AI HR software for India with workflow automation, recruitment assistance, and statutory payroll. OfficeKit AI Pilot.",
    h1: "AI HR software for India",
    subtitle: "Automate HR workflows with AI Pilot alongside India statutory payroll.",
    directAnswer:
      "OfficeKit HR is AI HR software for India that combines AI Pilot workflow automation with statutory payroll (PF, ESI, PT, TDS), recruitment ATS, and Face-Kit attendance for mid-market employers.",
    clusters: [
      "AI Pilot for reminders, workflows, and recruitment screening",
      "Face-Kit AI face recognition attendance",
      "India statutory payroll automation",
      "Modular pricing from ₹99/user/month",
    ],
    related: [
      { label: "AI Pilot feature", href: "/features/ai-pilot" },
      { label: "HRMS India", href: "/hrms-software-india" },
    ],
  }),
  "pf-esi-due-dates-2026": longtailPage({
    slug: "pf-esi-due-dates-2026",
    title: "PF & ESI Due Dates 2026 India | Compliance Calendar",
    metaDescription:
      "PF and ESI payment due dates for 2026: 15th of each month. Challan filing deadlines and penalties for Indian employers.",
    h1: "PF and ESI due dates 2026",
    subtitle: "Monthly compliance calendar for Indian payroll teams.",
    directAnswer:
      "PF and ESI contributions in India are due by the 15th of the following month. Late payment attracts interest and damages. OfficeKit HR auto-generates challans and reminder workflows for PF (EPFO) and ESI (ESIC) deadlines.",
    clusters: [
      "PF challan due: 15th of each month",
      "ESI challan due: 15th of each month",
      "ECR filing alongside PF payment",
      "Quarterly TDS returns for salary TDS",
      "Annual Form 16 issuance by June",
    ],
    related: [
      { label: "PF calculator", href: "/tools/pf-esi-calculator" },
      { label: "India compliance", href: "/compliance/india-payroll-compliance" },
    ],
  }),
  "wps-salary-file-rejected": longtailPage({
    slug: "wps-salary-file-rejected",
    title: "WPS Salary File Rejected? Fix Common UAE Errors",
    metaDescription:
      "Why UAE WPS salary files get rejected: invalid IBAN, MOHRE ID mismatch, SIF format errors. How to fix and prevent rejections.",
    h1: "WPS salary file rejected — how to fix",
    subtitle: "Troubleshoot MOHRE WPS SIF rejections and prevent payroll delays.",
    directAnswer:
      "UAE WPS files are rejected for invalid IBANs, incorrect employee MOHRE IDs, wrong SIF record format, or salary component mismatches. OfficeKit HR validates data before export and provides a free WPS file checker at /tools/wps-file-checker.",
    clusters: [
      "Validate UAE IBAN format (AE + 23 digits)",
      "Match employee MOHRE establishment ID",
      "Correct EDR/SCR record structure in SIF",
      "Align salary components with employment contract",
    ],
    related: [
      { label: "WPS file checker", href: "/tools/wps-file-checker" },
      { label: "WPS guide", href: "/knowledge/wps-compliance" },
    ],
  }),
  "hrms-for-100-500-employees": longtailPage({
    slug: "hrms-for-100-500-employees",
    title: "HRMS for 100–500 Employees | Mid-Market HR Software",
    metaDescription:
      "HRMS for companies with 100–500 employees: multi-entity payroll, attendance, recruitment, and India+GCC compliance.",
    h1: "HRMS for 100 to 500 employees",
    subtitle: "Mid-market HRMS without enterprise complexity or cost.",
    directAnswer:
      "OfficeKit HR is an HRMS for companies with 100–500 employees that need multi-module HR (payroll, attendance, recruitment, performance) with India and GCC statutory compliance, modular pricing, and 14-day implementation timelines.",
    clusters: [
      "Per-user pricing scales linearly without enterprise minimums",
      "Multi-company and multi-country payroll",
      "Recruitment ATS and onboarding workflows",
      "Volume discounts for 200+ employees",
    ],
  }),
  "on-premise-hrms-india": longtailPage({
    slug: "on-premise-hrms-india",
    title: "On-Premise HRMS India | Cloud, Hybrid & Self-Hosted",
    metaDescription:
      "On-premise and hybrid HRMS deployment in India with statutory payroll, data residency, and commercial support from OfficeKit HR.",
    h1: "On-premise HRMS in India",
    subtitle: "Deploy HRMS on your infrastructure with full India payroll compliance.",
    directAnswer:
      "OfficeKit HR supports on-premise, hybrid, and cloud HRMS deployment in India with PF, ESI, PT, TDS payroll, biometric attendance integration, and commercial implementation support for regulated industries.",
    clusters: [
      "On-premise deployment for data residency requirements",
      "Hybrid cloud + on-prem for multi-location groups",
      "Biometric device integration on local network",
      "Same statutory payroll engine as cloud SaaS",
    ],
  }),
  "face-recognition-attendance-india": longtailPage({
    slug: "face-recognition-attendance-india",
    title: "Face Recognition Attendance India | Face-Kit",
    metaDescription:
      "AI face recognition attendance system for India: contactless check-in, shift rules, and payroll integration. OfficeKit Face-Kit.",
    h1: "Face recognition attendance in India",
    subtitle: "Contactless biometric attendance with Face-Kit AI.",
    directAnswer:
      "OfficeKit Face-Kit provides face recognition attendance for Indian workplaces — contactless check-in for offices and factories, linked to shift rules, overtime, and statutory payroll without separate biometric middleware.",
    clusters: [
      "AI face recognition without fingerprint hardware",
      "Mobile and kiosk-based check-in",
      "Shift and overtime policy engine",
      "Attendance-linked payroll runs",
    ],
    related: [{ label: "Face-Kit", href: "/features/face-kit" }],
  }),
  "geo-fencing-attendance-uae": longtailPage({
    slug: "geo-fencing-attendance-uae",
    title: "Geo-Fencing Attendance UAE | Mobile HRMS",
    metaDescription:
      "Geo-fencing attendance app for UAE field teams, retail, and construction. GPS check-in with WPS payroll integration.",
    h1: "Geo-fencing attendance in UAE",
    subtitle: "GPS-based attendance for mobile and field workforces in the Gulf.",
    directAnswer:
      "OfficeKit HR provides geo-fencing attendance for UAE employers — mobile GPS check-in within defined work zones, integrated with WPS payroll and Arabic employee self-service.",
    clusters: [
      "GPS geo-fence per site or project",
      "Mobile attendance for field sales and construction",
      "WPS payroll integration for UAE entities",
      "Arabic ESS mobile app",
    ],
  }),
  "contractor-payroll-uae": longtailPage({
    slug: "contractor-payroll-uae",
    title: "Contractor Payroll UAE | WPS for Contract Staff",
    metaDescription:
      "Contractor and temporary worker payroll in UAE with WPS compliance, gratuity rules, and HRMS integration.",
    h1: "Contractor payroll in UAE",
    subtitle: "Pay contract and temporary workers with WPS-compliant salary files.",
    directAnswer:
      "OfficeKit HR handles contractor payroll in UAE with WPS-compliant payments, configurable contract types, gratuity accrual per UAE Labour Law, and consolidated reporting alongside permanent employee payroll.",
    clusters: [
      "Contract vs permanent employee pay structures",
      "WPS SIF export for all worker types",
      "Gratuity calculation by contract type",
      "Document expiry tracking for visas and permits",
    ],
  }),
  "form-16-generation-software": longtailPage({
    slug: "form-16-generation-software",
    title: "Form 16 Generation Software India | OfficeKit HR",
    metaDescription:
      "Automate Form 16 generation from payroll TDS data. Part A and Part B for Indian employees. OfficeKit HR.",
    h1: "Form 16 generation software",
    subtitle: "Issue Form 16 Part A and B from integrated payroll TDS.",
    directAnswer:
      "OfficeKit HR generates Form 16 for Indian employees from payroll TDS calculations — Part A from TRACES data and Part B with salary breakup, deductions, and tax computation, ready for June distribution.",
    clusters: [
      "TDS computation from payroll runs",
      "Form 16 Part A + B PDF generation",
      "Employee self-service download",
      "Audit trail for tax compliance",
    ],
  }),
  "hrms-software-coimbatore": longtailPage({
    slug: "hrms-software-coimbatore",
    title: "HRMS Software Coimbatore | Tamil Nadu Payroll",
    metaDescription: "HRMS for Coimbatore manufacturers and IT firms: TN PT, PF/ESI, attendance, GCC payroll.",
    h1: "HRMS software in Coimbatore",
    subtitle: "Payroll and HR for Coimbatore's textile, manufacturing, and IT sectors.",
    directAnswer:
      "OfficeKit HR is HRMS software for Coimbatore companies with Tamil Nadu Professional Tax, PF/ESI payroll, factory attendance, and optional GCC modules for exporters.",
    clusters: ["Tamil Nadu PT slabs", "Manufacturing shift attendance", "PF/ESI compliance", "GCC payroll for exporters"],
  }),
  "hrms-software-jaipur": longtailPage({
    slug: "hrms-software-jaipur",
    title: "HRMS Software Jaipur | Rajasthan Payroll",
    metaDescription: "HRMS for Jaipur and Rajasthan: statutory payroll, attendance, recruitment for SMEs.",
    h1: "HRMS software in Jaipur",
    subtitle: "HR and payroll for Jaipur's tourism, retail, and services sector.",
    directAnswer:
      "OfficeKit HR provides HRMS for Jaipur employers with Rajasthan Professional Tax, PF/ESI, attendance, and employee self-service on modular per-user pricing.",
    clusters: ["Rajasthan PT compliance", "Retail and hospitality workforce", "Cloud HRMS from ₹99/user"],
  }),
  "payroll-software-sharjah": longtailPage({
    slug: "payroll-software-sharjah",
    title: "Payroll Software Sharjah | UAE WPS",
    metaDescription: "Payroll software for Sharjah with WPS SIF files, gratuity, and HRMS integration.",
    h1: "Payroll software in Sharjah",
    subtitle: "WPS-ready payroll for Sharjah mainland employers.",
    directAnswer:
      "OfficeKit HR is payroll software for Sharjah that generates WPS-compliant salary files, manages gratuity, and links attendance to pay runs for UAE entities.",
    clusters: ["Sharjah WPS compliance", "SIF file generation", "Gratuity automation"],
    related: [{ label: "Payroll UAE", href: "/payroll-software-uae" }],
  }),
  "hrms-software-doha": longtailPage({
    slug: "hrms-software-doha",
    title: "HRMS Software Doha | Qatar Payroll",
    metaDescription: "HRMS and payroll for Doha, Qatar: WPS Qatar, labour law compliance, Arabic ESS.",
    h1: "HRMS software in Doha",
    subtitle: "Qatar payroll and HR for Doha-based employers.",
    directAnswer:
      "OfficeKit HR is HRMS software for Doha companies with Qatar WPS payroll, end-of-service gratuity, labour law compliance, and Arabic/English employee self-service.",
    clusters: ["Qatar WPS payroll", "Gratuity and EOS benefits", "Arabic ESS"],
    related: [{ label: "Qatar payroll", href: "/solutions/payroll-software-qatar" }],
  }),
  "hrms-software-manama": longtailPage({
    slug: "hrms-software-manama",
    title: "HRMS Software Manama | Bahrain Payroll",
    metaDescription: "HRMS for Manama and Bahrain: SIO contributions, LMRA compliance, payroll.",
    h1: "HRMS software in Manama",
    subtitle: "Bahrain payroll and HR for Manama employers.",
    directAnswer:
      "OfficeKit HR supports Manama employers with Bahrain SIO payroll contributions, LMRA compliance record-keeping, and integrated attendance and ESS.",
    clusters: ["Bahrain SIO payroll", "LMRA compliance", "GCC multi-country support"],
    related: [{ label: "Bahrain HRMS", href: "/solutions/hrms-software-bahrain" }],
  }),
  "shift-scheduling-software-india": longtailPage({
    slug: "shift-scheduling-software-india",
    title: "Shift Scheduling Software India | OfficeKit HR",
    metaDescription:
      "Shift scheduling and roster management for Indian factories, retail, and healthcare with attendance-linked payroll.",
    h1: "Shift scheduling software in India",
    subtitle: "Roster planning, rotations, and overtime for shift-based teams.",
    directAnswer:
      "OfficeKit HR provides shift scheduling for Indian employers with configurable rotations, grace periods, overtime rules, and attendance-linked statutory payroll.",
    clusters: ["Shift roster templates", "Overtime policy engine", "Biometric and mobile check-in", "Factory and retail scheduling"],
  }),
  "arabic-hrms-software": longtailPage({
    slug: "arabic-hrms-software",
    title: "Arabic HRMS Software | Bilingual ESS UAE & GCC",
    metaDescription:
      "Arabic HRMS with bilingual employee self-service for UAE, KSA, and GCC workforces. OfficeKit HR.",
    h1: "Arabic HRMS software",
    subtitle: "Full Arabic and English HR experience for Gulf employees.",
    directAnswer:
      "OfficeKit HR is Arabic HRMS software with bilingual employee self-service (Arabic/English), Arabic payslips, leave requests, and mobile app support for UAE, Saudi Arabia, and GCC workforces.",
    clusters: ["Arabic ESS portal and mobile app", "Bilingual payslips and letters", "GCC statutory payroll", "RTL-friendly UI on /ae"],
    related: [{ label: "UAE Arabic page", href: "/ae" }],
  }),
  "multi-entity-payroll-india-uae": longtailPage({
    slug: "multi-entity-payroll-india-uae",
    title: "Multi-Entity Payroll India + UAE | One HRMS",
    metaDescription:
      "Run India HQ and UAE subsidiary payroll on one HRMS. PF/ESI/TDS + WPS compliance without duplicate tools.",
    h1: "Multi-entity payroll: India and UAE",
    subtitle: "One platform for India statutory and UAE WPS payroll.",
    directAnswer:
      "OfficeKit HR runs multi-entity payroll for companies with India headquarters and UAE subsidiaries — PF/ESI/TDS for Indian entities and WPS SIF payroll for UAE entities from a single HRMS with consolidated group reporting.",
    clusters: [
      "India entity: PF, ESI, PT, TDS",
      "UAE entity: WPS, gratuity, EOS",
      "Consolidated headcount and cost reporting",
      "Single employee record across transfers",
    ],
    related: [{ label: "India+GCC knowledge", href: "/knowledge/india-gcc-payroll" }],
  }),
  "leave-encashment-calculator-uae": longtailPage({
    slug: "leave-encashment-calculator-uae",
    title: "Leave Encashment UAE | Calculation Guide",
    metaDescription:
      "How UAE leave encashment is calculated on resignation or termination. OfficeKit HR automates encashment in payroll.",
    h1: "Leave encashment in UAE",
    subtitle: "Calculate unused annual leave payout per UAE Labour Law.",
    directAnswer:
      "UAE leave encashment pays unused annual leave days at basic salary rate upon termination or resignation. OfficeKit HR tracks leave balances and calculates encashment automatically during final settlement payroll.",
    clusters: ["Annual leave balance tracking", "Encashment on termination", "Final settlement payroll", "WPS payment for EOS"],
    related: [{ label: "Gratuity calculator", href: "/tools/gratuity-calculator-uae" }],
  }),
  "payroll-outsourcing-vs-software-gcc": longtailPage({
    slug: "payroll-outsourcing-vs-software-gcc",
    title: "Payroll Outsourcing vs Software GCC | OfficeKit HR",
    metaDescription:
      "Compare payroll outsourcing vs in-house HRMS software in GCC. Cost, control, and compliance trade-offs.",
    h1: "Payroll outsourcing vs software in GCC",
    subtitle: "When to bring GCC payroll in-house with HRMS.",
    directAnswer:
      "GCC payroll outsourcing suits very small teams; in-house HRMS like OfficeKit HR gives mid-market companies control over WPS/GOSI compliance, faster month-end close, and lower long-term cost above 50 employees.",
    clusters: [
      "Outsourcing: low setup, less control, per-run fees",
      "HRMS: higher control, audit trail, scales with headcount",
      "Break-even typically at 30–50 employees in GCC",
      "OfficeKit modular pricing from AED 15/user/month",
    ],
  }),
  "best-hrms-manufacturing-smes-india": longtailPage({
    slug: "best-hrms-manufacturing-smes-india",
    title: "Best HRMS for Manufacturing SMEs India",
    metaDescription:
      "Best HRMS for small and mid-size manufacturers in India: shift attendance, PF/ESI, Face-Kit biometric.",
    h1: "Best HRMS for manufacturing SMEs in India",
    subtitle: "Factory-ready HRMS without enterprise price tags.",
    directAnswer:
      "OfficeKit HR is among the best HRMS choices for manufacturing SMEs in India — shift scheduling, Face-Kit attendance, PF/ESI payroll, and per-user pricing from ₹99/month without ERP complexity.",
    clusters: ["Shift and overtime rules", "Face-Kit factory attendance", "Statutory payroll automation", "Scales from 50 to 500 workers"],
    related: [{ label: "Manufacturing industry", href: "/industries/hrms-for-manufacturing" }],
  }),
  "qiwa-payroll-integration-ksa": longtailPage({
    slug: "qiwa-payroll-integration-ksa",
    title: "Qiwa Payroll Integration KSA | Saudi HRMS",
    metaDescription:
      "KSA payroll aligned with Qiwa and MHRSD requirements. GOSI calculations and Saudi labour law compliance.",
    h1: "Qiwa and KSA payroll integration",
    subtitle: "Saudi payroll records aligned with MHRSD and GOSI.",
    directAnswer:
      "OfficeKit HR supports KSA payroll with GOSI contribution calculations, salary records aligned with MHRSD/Qiwa reporting requirements, and HRMS integration for Saudi entities.",
    clusters: ["GOSI employer/employee contributions", "KSA salary component mapping", "MHRSD-compliant records", "Multi-GCC entity support"],
    related: [{ label: "KSA payroll", href: "/solutions/payroll-software-ksa" }],
  }),
  "zatca-payroll-compliance-ksa": longtailPage({
    slug: "zatca-payroll-compliance-ksa",
    title: "ZATCA Payroll Compliance KSA | Saudi Arabia",
    metaDescription:
      "ZATCA-aligned payroll record-keeping for Saudi employers. GOSI, WPS-like transfers, and audit reports.",
    h1: "ZATCA payroll compliance in KSA",
    subtitle: "Payroll records structured for ZATCA and GOSI requirements.",
    directAnswer:
      "OfficeKit HR structures KSA payroll reports for ZATCA record-keeping alongside GOSI contribution filings, helping Saudi employers maintain audit-ready payroll registers.",
    clusters: ["GOSI monthly remittance", "ZATCA-aligned payroll registers", "Salary component documentation", "EOS benefit calculations"],
  }),
  "hrms-for-ngos-india": longtailPage({
    slug: "hrms-for-ngos-india",
    title: "HRMS for NGOs India | Non-Profit HR Software",
    metaDescription:
      "Affordable HRMS for Indian NGOs and non-profits: PF/ESI for staff, volunteer tracking, grant-funded payroll.",
    h1: "HRMS for NGOs in India",
    subtitle: "Statutory payroll and HR for non-profit organisations.",
    directAnswer:
      "OfficeKit HR provides affordable HRMS for Indian NGOs with statutory payroll for paid staff, attendance, leave, and modular pricing that fits grant-funded budgets.",
    clusters: ["Low per-user pricing for small teams", "PF/ESI for eligible staff", "Document management", "Audit-ready payroll reports"],
  }),
  "digital-onboarding-software-india": longtailPage({
    slug: "digital-onboarding-software-india",
    title: "Digital Onboarding Software India | OfficeKit HR",
    metaDescription:
      "Digital employee onboarding with offer letters, document collection, and checklist automation in India.",
    h1: "Digital onboarding software in India",
    subtitle: "Paperless onboarding from offer to day one.",
    directAnswer:
      "OfficeKit HR digital onboarding automates offer letters, document collection, background check tracking, and joining checklists — integrated with India statutory payroll setup for new hires.",
    clusters: ["Digital offer letters", "Document upload and verification", "Onboarding task checklists", "Payroll master creation on joining"],
    related: [{ label: "Recruitment", href: "/features/recruitment-management" }],
  }),
  "ats-for-smes-india": longtailPage({
    slug: "ats-for-smes-india",
    title: "ATS for SMEs India | Applicant Tracking",
    metaDescription:
      "Applicant tracking system for Indian SMEs: job posts, interview scheduling, offer management. OfficeKit HR ATS.",
    h1: "ATS for SMEs in India",
    subtitle: "Hire faster without enterprise recruiting software costs.",
    directAnswer:
      "OfficeKit HR includes an ATS for Indian SMEs — job posting, candidate pipeline, interview feedback, and digital offer letters integrated with onboarding and payroll.",
    clusters: ["Job board posting", "Candidate pipeline stages", "Interview scheduling", "Offer-to-onboarding flow"],
    related: [{ label: "Recruitment feature", href: "/features/recruitment-management" }],
  }),
  "fnf-settlement-payroll-india": longtailPage({
    slug: "fnf-settlement-payroll-india",
    title: "Full & Final Settlement Payroll India | FNF",
    metaDescription:
      "Automate full and final settlement: leave encashment, gratuity, notice pay, and clearance workflows in India.",
    h1: "Full and final settlement payroll in India",
    subtitle: "FNF calculation and clearance workflows on resignation.",
    directAnswer:
      "OfficeKit HR automates full and final (FNF) settlement in India — leave encashment, gratuity, notice period pay, pending reimbursements, and clearance checklists with statutory-compliant final payslips.",
    clusters: ["Leave encashment calculation", "Gratuity for 5+ year employees", "Notice pay and recovery", "Clearance workflow automation"],
    related: [{ label: "Exit management", href: "/features/exit-management" }],
  }),
  "hrms-data-migration-guide": longtailPage({
    slug: "hrms-data-migration-guide",
    title: "HRMS Data Migration Guide | OfficeKit HR",
    metaDescription:
      "Step-by-step HRMS data migration from spreadsheets, greytHR, or Keka. Employee, attendance, and payroll masters.",
    h1: "HRMS data migration guide",
    subtitle: "Migrate employee, attendance, and payroll data safely.",
    directAnswer:
      "OfficeKit HR migration imports employee masters, attendance history, and payroll components via Excel templates — typical mid-market migrations complete in 2–4 weeks with parallel payroll validation.",
    clusters: [
      "Employee master import template",
      "Attendance history migration",
      "Opening balance for leave and loans",
      "Parallel payroll run validation",
    ],
    related: [
      { label: "Migrate from greytHR", href: "/guides/migrate-from-greythr" },
      { label: "Migrate from Keka", href: "/guides/migrate-from-keka" },
    ],
  }),
  "hrms-implementation-timeline": longtailPage({
    slug: "hrms-implementation-timeline",
    title: "HRMS Implementation Timeline | Go Live in 14 Days",
    metaDescription:
      "Typical HRMS implementation timeline: discovery, migration, UAT, go-live. OfficeKit HR mid-market deployments.",
    h1: "HRMS implementation timeline",
    subtitle: "What to expect from kickoff to go-live.",
    directAnswer:
      "OfficeKit HR typical implementation: Week 1 discovery and config, Week 2 data migration and UAT, Week 3 go-live for core HR and payroll — 14-day go-live SLA for standard mid-market deployments.",
    clusters: [
      "Days 1–3: Requirements and module configuration",
      "Days 4–10: Data migration and parallel payroll",
      "Days 11–14: UAT, training, and go-live",
      "Ongoing: hypercare support for first payroll cycle",
    ],
  }),
  "best-payroll-software-kerala-2026": longtailPage({
    slug: "best-payroll-software-kerala-2026",
    title: "Best Payroll Software Kerala 2026 | OfficeKit HR",
    metaDescription:
      "Best payroll software in Kerala 2026: Kerala PT, PF/ESI, local support from Calicut HQ.",
    h1: "Best payroll software in Kerala 2026",
    subtitle: "Kerala statutory payroll with local implementation support.",
    directAnswer:
      "OfficeKit HR is payroll software for Kerala with Professional Tax, PF/ESI, local implementation support from Calicut HQ, and GCC payroll for Kerala exporters.",
    clusters: ["Kerala PT compliance", "Local support team in Calicut", "PF/ESI automation", "GCC modules for NRI operations"],
    related: [{ label: "Kerala payroll", href: "/solutions/payroll-software-kerala" }],
  }),
  "free-zone-payroll-dubai": longtailPage({
    slug: "free-zone-payroll-dubai",
    title: "Free Zone Payroll Dubai | DMCC, JAFZA, DIFC",
    metaDescription:
      "Payroll software for Dubai free zone companies: DMCC, JAFZA, DIFC with WPS and multi-entity support.",
    h1: "Free zone payroll in Dubai",
    subtitle: "WPS payroll for Dubai free zone entities.",
    directAnswer:
      "OfficeKit HR supports Dubai free zone payroll for DMCC, JAFZA, and other zones with WPS SIF generation, gratuity, and consolidated reporting alongside UAE mainland entities.",
    clusters: ["Free zone vs mainland WPS rules", "Multi-entity UAE payroll", "Gratuity and EOS", "Employee visa document tracking"],
    related: [{ label: "Dubai HR", href: "/hr-software-dubai" }],
  }),
  "construction-payroll-uae": longtailPage({
    slug: "construction-payroll-uae",
    title: "Construction Payroll UAE | WPS for Site Workers",
    metaDescription:
      "Construction payroll in UAE: site-based attendance, WPS for labour camp workers, gratuity. OfficeKit HR.",
    h1: "Construction payroll in UAE",
    subtitle: "Site attendance and WPS payroll for construction workforces.",
    directAnswer:
      "OfficeKit HR handles construction payroll in UAE with geo-fenced site attendance, WPS salary files for labour and staff, gratuity accrual, and project-based cost allocation.",
    clusters: ["Site geo-fence attendance", "WPS for blue-collar workers", "Project cost centres", "Visa and permit expiry alerts"],
    related: [{ label: "Construction HRMS", href: "/best-hrms-for-construction" }],
  }),
  "healthcare-hrms-india-compliance": longtailPage({
    slug: "healthcare-hrms-india-compliance",
    title: "Healthcare HRMS India | Hospital Shift Payroll",
    metaDescription:
      "Healthcare HRMS for Indian hospitals: nurse rosters, 24/7 shifts, PF/ESI, credential tracking.",
    h1: "Healthcare HRMS compliance in India",
    subtitle: "Shift rostering and statutory payroll for clinical staff.",
    directAnswer:
      "OfficeKit HR is healthcare HRMS for India with 24/7 shift rosters, nurse scheduling, credential expiry alerts, and PF/ESI payroll for hospital and clinic workforces.",
    clusters: ["24/7 shift rostering", "Credential licence tracking", "PF/ESI for hospital staff", "Leave and overtime for clinical roles"],
    related: [{ label: "Healthcare industry", href: "/industries/hrms-for-healthcare" }],
  }),
  "okr-software-india-hrms": longtailPage({
    slug: "okr-software-india-hrms",
    title: "OKR Software India | Performance Management",
    metaDescription:
      "OKR and goal tracking in OfficeKit HR performance module for Indian teams.",
    h1: "OKR software for India teams",
    subtitle: "Set goals, track OKRs, and run performance cycles.",
    directAnswer:
      "OfficeKit HR includes OKR and goal tracking within its performance management module — quarterly OKRs, manager check-ins, and review cycles integrated with HRMS employee records.",
    clusters: ["OKR goal setting", "Quarterly review cycles", "Manager feedback workflows", "Linked to compensation reviews"],
    related: [{ label: "Performance feature", href: "/features/performance-appraisal" }],
  }),
  "employee-self-service-arabic": longtailPage({
    slug: "employee-self-service-arabic",
    title: "Employee Self-Service Arabic | GCC ESS Portal",
    metaDescription:
      "Arabic employee self-service portal for leave, payslips, and HR requests in UAE and GCC.",
    h1: "Arabic employee self-service portal",
    subtitle: "Bilingual ESS for Gulf-based employees.",
    directAnswer:
      "OfficeKit HR employee self-service is available in Arabic and English — payslips, leave requests, attendance views, and HR letters in both languages for UAE, KSA, and GCC staff.",
    clusters: ["Arabic payslip download", "Bilingual leave application", "Mobile ESS iOS/Android", "RTL portal on /ae"],
    related: [{ label: "ESS feature", href: "/features/self-service-portal" }, { label: "UAE page", href: "/ae" }],
  }),
  "tally-hrms-integration-india": longtailPage({
    slug: "tally-hrms-integration-india",
    title: "HRMS Tally Integration India | Payroll to Accounting",
    metaDescription:
      "Export HRMS payroll journals to Tally for Indian accounting. OfficeKit HR finance integration.",
    h1: "HRMS and Tally integration",
    subtitle: "Sync payroll journals from HRMS to Tally accounting.",
    directAnswer:
      "OfficeKit HR exports payroll journal entries for Tally import — salary, PF, ESI, PT, and TDS components mapped to your chart of accounts for month-end accounting close.",
    clusters: ["Payroll journal export", "Component-wise GL mapping", "Month-end accounting handoff", "Audit trail for finance"],
  }),
  "hrms-security-gdpr-compliance": longtailPage({
    slug: "hrms-security-gdpr-compliance",
    title: "HRMS Data Security & GDPR | OfficeKit HR",
    metaDescription:
      "Enterprise HRMS security: encryption, role-based access, audit logs, and GDPR-aligned data handling.",
    h1: "HRMS data security and GDPR",
    subtitle: "Protect employee data with enterprise-grade HRMS security.",
    directAnswer:
      "OfficeKit HR provides role-based access control, encrypted data transmission, audit logs, and data retention policies aligned with GDPR principles for companies with EU-connected operations.",
    clusters: ["Role-based access control", "Encryption in transit and at rest", "Audit logs for payroll changes", "Data export and deletion on request"],
  }),
  "remote-work-hrms-india": longtailPage({
    slug: "remote-work-hrms-india",
    title: "Remote Work HRMS India | Hybrid Attendance",
    metaDescription:
      "HRMS for remote and hybrid teams in India: mobile attendance, leave, payroll, performance.",
    h1: "HRMS for remote work in India",
    subtitle: "Manage distributed teams with cloud HRMS.",
    directAnswer:
      "OfficeKit HR supports remote and hybrid workforces in India with mobile attendance, geo-fenced check-in, leave management, statutory payroll, and performance OKRs for distributed teams.",
    clusters: ["Mobile attendance for remote staff", "Hybrid work policies", "Cloud ESS from anywhere", "Statutory payroll regardless of work location"],
    related: [{ label: "Remote work blog", href: "/resources/blogs/hrblogs" }],
  }),
  "statutory-bonus-calculation-india": longtailPage({
    slug: "statutory-bonus-calculation-india",
    title: "Statutory Bonus Calculation India 2026",
    metaDescription:
      "Payment of Bonus Act: 8.33% minimum bonus calculation for eligible Indian employees. OfficeKit HR automates bonus payroll.",
    h1: "Statutory bonus calculation in India",
    subtitle: "Bonus Act compliance for eligible employees earning ≤ ₹21,000/month.",
    directAnswer:
      "Statutory bonus in India is minimum 8.33% of annual salary (or ₹100/month minimum) for employees earning ≤ ₹21,000/month. OfficeKit HR calculates and pays bonus through integrated payroll with audit-ready registers.",
    clusters: ["8.33% minimum bonus rate", "Eligibility: salary ≤ ₹21,000/month", "Maximum 20% of annual salary", "Bonus payment with regular payroll or separately"],
    related: [{ label: "India compliance", href: "/compliance/india-payroll-compliance" }],
  }),
  "professional-tax-calculator-karnataka": longtailPage({
    slug: "professional-tax-calculator-karnataka",
    title: "Professional Tax Calculator Karnataka 2026",
    metaDescription:
      "Karnataka Professional Tax slabs and monthly deduction calculator for Indian employers.",
    h1: "Karnataka Professional Tax calculator",
    subtitle: "PT slabs for Karnataka employees up to ₹200/month.",
    directAnswer:
      "Karnataka Professional Tax is deducted monthly per slab — maximum ₹200/month for salaries above ₹15,000. OfficeKit HR auto-calculates Karnataka PT alongside PF, ESI, and TDS in Bangalore and Karnataka entities.",
    clusters: ["Karnataka PT slab table", "Monthly deduction in payroll", "PT return filing", "Multi-state PT for Karnataka + other states"],
    related: [{ label: "Bangalore HRMS", href: "/solutions/hrms-software-bangalore" }],
  }),
};

export const LONGTAIL_EXPANSION_SLUGS = Object.keys(LONGTAIL_EXPANSION);
