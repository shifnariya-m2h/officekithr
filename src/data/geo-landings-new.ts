import type { FaqItem } from "@/seo/schema";
import type { GeoLandingConfig } from "./geo-landings";

export const GEO_LANDINGS_NEW: Record<string, GeoLandingConfig> = {
  "payroll-software-ksa": {
    slug: "payroll-software-ksa",
    path: "/solutions/payroll-software-ksa",
    title: "Payroll Software Saudi Arabia | GOSI & ZATCA — OfficeKit HR",
    metaDescription:
      "Saudi Arabia payroll software with GOSI contribution calculations, ZATCA-compliant reporting, WPS-like salary transfers, and HRMS integration. OfficeKit HR for KSA employers.",
    h1: "Payroll software for Saudi Arabia",
    subtitle:
      "Process salaries aligned with Saudi labour law, GOSI contributions, and ZATCA e-invoicing requirements.",
    directAnswer:
      "OfficeKit HR is payroll software for Saudi Arabia that calculates GOSI employer/employee contributions, generates salary reports aligned with ZATCA e-invoicing requirements, and manages payroll across KSA entities alongside other GCC operations.",
    definition: {
      term: "KSA payroll software",
      meaning:
        "Systems that calculate salaries, GOSI contributions, and produce compliant payroll records for employers registered in Saudi Arabia under Ministry of Human Resources and Social Development (MHRSD) regulations.",
    },
    facts: [
      {
        heading: "KSA payroll and GOSI requirements",
        body: "Employers in Saudi Arabia must register employees with GOSI, remit monthly contributions (9% employer, 9% employee on basic), and maintain payroll records for audit by MHRSD and ZATCA.",
      },
      {
        heading: "OfficeKit HR for Saudi Arabia",
        body: "OfficeKit links employee records, attendance, and leave to KSA payroll runs, calculates GOSI contributions, and provides audit-ready reports for ZATCA compliance alongside UAE and India entities.",
      },
    ],
    capabilities: [
      "KSA payroll processing and GOSI calculations",
      "Salary component mapping per employee grade",
      "Leave and attendance-driven pay inputs",
      "ZATCA-compliant payroll reporting",
      "Multi-country GCC support (AE, KW, QA, OM)",
      "Arabic / English employee self-service",
      "Audit-ready payroll registers",
    ],
    faqs: [
      {
        question: "Does OfficeKit HR support GOSI calculations for Saudi Arabia?",
        answer:
          "Yes. OfficeKit calculates employer and employee GOSI contributions based on salary components and provides contribution reports for monthly remittance.",
      },
      {
        question: "Can OfficeKit handle ZATCA e-invoicing requirements for payroll?",
        answer:
          "OfficeKit payroll reports are structured to align with ZATCA record-keeping requirements. We recommend consulting your tax advisor for full e-invoicing integration needs.",
      },
      {
        question: "What other GCC countries can I manage alongside KSA payroll?",
        answer:
          "OfficeKit serves UAE, Kuwait, Qatar, and Oman from the same HRMS instance with country-specific payroll rules and reporting.",
      },
    ],
    relatedLinks: [
      { label: "Payroll compliance KSA", href: "/compliance/ksa-payroll-compliance" },
      { label: "HR software Riyadh", href: "/hr-software-riyadh" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "hrms-software-kuwait": {
    slug: "hrms-software-kuwait",
    path: "/solutions/hrms-software-kuwait",
    title: "HRMS Software Kuwait | PIFSS & Labour Law — OfficeKit HR",
    metaDescription:
      "HRMS software for Kuwait: PIFSS pension contributions, attendance, leave as per Kuwait labour law, and payroll for private-sector employers.",
    h1: "HRMS software built for Kuwait",
    subtitle:
      "Centralised HR, PIFSS-compliant payroll, and workforce management for Kuwaiti private-sector entities.",
    directAnswer:
      "OfficeKit HR is HRMS software for Kuwait that manages employee records, attendance, leave as per Kuwait labour law (Articles 51–54), PIFSS pension contributions, and payroll for private-sector employers alongside GCC operations.",
    definition: {
      term: "HRMS (Kuwait)",
      meaning:
        "Human Resource Management Systems configured for Kuwaiti private-sector labour law, PIFSS social insurance contributions, and local payroll practices.",
    },
    facts: [
      {
        heading: "Kuwait labour law for HR teams",
        body: "Kuwait's Private Sector Labour Law (Law No. 6 of 2010) regulates working hours, leave entitlements, end-of-service indemnity, and termination. HRMS tools help companies stay compliant and reduce labour disputes.",
      },
      {
        heading: "How OfficeKit HR supports Kuwaiti employers",
        body: "OfficeKit provides core HR, leave management aligned to Kuwait labour law, PIFSS contribution tracking, and payroll processing—unified with other GCC entities in one platform.",
      },
    ],
    capabilities: [
      "Core HR and employee records management",
      "Kuwait labour law leave and attendance rules",
      "PIFSS pension contribution calculations",
      "Payroll processing for Kuwaiti entities",
      "End-of-service indemnity accrual tracking",
      "Mobile ESS for employees and managers",
      "Multi-country group reporting",
    ],
    faqs: [
      {
        question: "Does OfficeKit handle PIFSS contributions for Kuwait?",
        answer:
          "Yes. OfficeKit calculates employer (11.5%) and employee (10.5%) PIFSS contributions on eligible salary components with contribution reports for monthly remittance.",
      },
      {
        question: "Can OfficeKit manage leave rules specific to Kuwait labour law?",
        answer:
          "Yes. Leave policies are configurable to match Kuwait's Private Sector Law—including annual leave (30 days), sick leave, and public holiday entitlements.",
      },
    ],
    relatedLinks: [
      { label: "Kuwait payroll compliance", href: "/compliance/kuwait-payroll-compliance" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "payroll-software-qatar": {
    slug: "payroll-software-qatar",
    path: "/solutions/payroll-software-qatar",
    title: "Payroll Software Qatar | WPS & Labour Law — OfficeKit HR",
    metaDescription:
      "Qatar payroll software with WPS-compliant salary transfers, end-of-service gratuity, and labour law compliance for Doha and Ras Laffan employers.",
    h1: "Payroll software for Qatar",
    subtitle:
      "Accurate payroll, WPS compliance, and workforce management for employers in Qatar.",
    directAnswer:
      "OfficeKit HR is payroll software for Qatar that processes salaries according to Qatar labour law (Law No. 14 of 2004), generates WPS-compliant salary files, calculates end-of-service gratuity, and manages attendance-linked pay runs for private-sector employers.",
    definition: {
      term: "Qatar payroll software",
      meaning:
        "Systems that calculate salaries, statutory deductions, end-of-service benefits, and produce WPS-compliant payment files for employers registered in Qatar under the Ministry of Labour.",
    },
    facts: [
      {
        heading: "Qatar payroll and WPS requirements",
        body: "Qatar's Wage Protection System (WPS) requires employers to pay salaries through approved financial channels. Monthly payroll must be reported via WPS to the Ministry of Labour with mandatory record-keeping.",
      },
      {
        heading: "OfficeKit HR for Qatar operations",
        body: "OfficeKit connects attendance and leave data to payroll, supports WPS file generation for Qatar entities, and tracks end-of-service gratuity accruals per Qatari labour law.",
      },
    ],
    capabilities: [
      "Qatar payroll processing and WPS file generation",
      "End-of-service gratuity calculation",
      "Leave and attendance-driven pay inputs",
      "Multi-country GCC support",
      "Employee self-service and payslips",
      "Audit-ready payroll registers",
      "Arabic / English interface",
    ],
    faqs: [
      {
        question: "Does OfficeKit support Qatar's WPS system?",
        answer:
          "Yes. OfficeKit includes WPS-compliant salary file generation for Qatar entities, helping ensure timely and accurate salary processing.",
      },
      {
        question: "How is end-of-service gratuity calculated for Qatar?",
        answer:
          "Gratuity follows Qatar's three-week per year rule for the first 5 years, and four-weeks per year thereafter—OfficeKit calculates and tracks these accruals automatically.",
      },
    ],
    relatedLinks: [
      { label: "Qatar payroll compliance", href: "/compliance/qatar-payroll-compliance" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "hrms-software-oman": {
    slug: "hrms-software-oman",
    path: "/solutions/hrms-software-oman",
    title: "HRMS Software Oman | PASI & Labour Law — OfficeKit HR",
    metaDescription:
      "HRMS software for Oman: PASI pension contributions, attendance, leave, and payroll for Muscat and Sohar employers. OfficeKit HR.",
    h1: "HRMS software for Oman",
    subtitle:
      "Unified HR, PASI-compliant payroll, and workforce management for Omani private-sector entities.",
    directAnswer:
      "OfficeKit HR is HRMS software for Oman that manages employee records, PASI social insurance contributions (employer 10.5%, employee 7%), attendance, leave under Oman labour law (Royal Decree 35/2003), and payroll for private-sector employers alongside GCC operations.",
    definition: {
      term: "HRMS (Oman)",
      meaning:
        "Human Resource Management Systems configured for Omani labour law, PASI social insurance contributions, and local payroll practices under the Ministry of Labour.",
    },
    facts: [
      {
        heading: "Oman labour law for HR teams",
        body: "Oman's Labour Law (RD 35/2003) sets working hours, leave entitlements, end-of-service benefits, and termination rules. Employers must register employees with PASI and remit monthly social insurance contributions.",
      },
      {
        heading: "How OfficeKit HR supports Omani employers",
        body: "OfficeKit provides core HR, PASI contribution tracking, leave management aligned to Oman labour law, payroll processing, and end-of-service indemnity calculations—unified with other GCC entities.",
      },
    ],
    capabilities: [
      "Core HR and employee records management",
      "PASI social insurance contribution calculations",
      "Oman labour law leave and attendance rules",
      "Payroll processing for Omani entities",
      "End-of-service indemnity accrual tracking",
      "Mobile ESS for employees and managers",
      "Multi-country group reporting",
    ],
    faqs: [
      {
        question: "Does OfficeKit support PASI contributions for Oman?",
        answer:
          "Yes. OfficeKit calculates employer (10.5%) and employee (7%) PASI contributions on basic salary with monthly remittance reports.",
      },
      {
        question: "Can OfficeKit manage end-of-service benefits under Oman labour law?",
        answer:
          "Yes. End-of-service indemnity is calculated based on years of service per Oman labour law, with transparent accrual reports for HR and finance teams.",
      },
    ],
    relatedLinks: [
      { label: "Oman payroll compliance", href: "/compliance/oman-payroll-compliance" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "hrms-software-bahrain": {
    slug: "hrms-software-bahrain",
    path: "/solutions/hrms-software-bahrain",
    title: "HRMS Software Bahrain | LMRA & SIO — OfficeKit HR",
    metaDescription:
      "HRMS software for Bahrain: LMRA registration, SIO social insurance, attendance, and payroll for Manama and Riffa employers.",
    h1: "HRMS software for Bahrain",
    subtitle:
      "Centralised HR, SIO-compliant payroll, and workforce management for Bahraini private-sector entities.",
    directAnswer:
      "OfficeKit HR is HRMS software for Bahrain that manages employee records, SIO social insurance contributions (employer 14%, employee 11%), LMRA registration and renewal tracking, attendance, leave under Bahrain labour law (Law No. 36 of 2012), and payroll for private-sector employers alongside GCC operations.",
    definition: {
      term: "HRMS (Bahrain)",
      meaning:
        "Human Resource Management Systems configured for Bahraini labour law, SIO social insurance contributions, LMRA workforce registration, and local payroll practices.",
    },
    facts: [
      {
        heading: "Bahrain HR compliance requirements",
        body: "Bahrain employers must register employees with LMRA (Labour Market Regulatory Authority), remit SIO social insurance monthly (employer 14%, employee 11% on basic for Bahraini nationals), and follow Labour Law No. 36 of 2012 for leave, working hours, and termination.",
      },
      {
        heading: "How OfficeKit HR supports Bahraini employers",
        body: "OfficeKit provides core HR, LMRA ID tracking, SIO contribution calculations, leave management, payroll processing, and end-of-service indemnity tracking—unified with other GCC entities.",
      },
    ],
    capabilities: [
      "Core HR and employee records management",
      "LMRA registration and renewal tracking",
      "SIO social insurance contribution calculations",
      "Bahrain labour law leave and attendance rules",
      "Payroll processing for Bahraini entities",
      "End-of-service indemnity accrual tracking",
      "Mobile ESS and employee self-service",
      "Multi-country group reporting",
    ],
    faqs: [
      {
        question: "Does OfficeKit support SIO contributions for Bahrain?",
        answer:
          "Yes. OfficeKit calculates employer (14%) and employee (11%) SIO contributions for Bahraini nationals and provides monthly contribution reports for remittance.",
      },
      {
        question: "Can OfficeKit track LMRA registrations and renewals?",
        answer:
          "Yes. Employee records store LMRA IDs, work permit expiry dates, and renewal reminders help HR teams stay on top of regulatory compliance.",
      },
    ],
    relatedLinks: [
      { label: "Bahrain payroll compliance", href: "/compliance/bahrain-payroll-compliance" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "payroll-software-kerala": {
    slug: "payroll-software-kerala",
    path: "/solutions/payroll-software-kerala",
    title: "Payroll Software Kerala | PT, Shops & Establishments — OfficeKit HR",
    metaDescription:
      "Payroll software for Kerala businesses: Kerala Professional Tax, Shops & Establishments Act compliance, PF/ESI, and attendance integration with OfficeKit HR.",
    h1: "Payroll software for Kerala",
    subtitle:
      "Statutory payroll for Kerala with local compliance, attendance integration, and HRMS features.",
    directAnswer:
      "OfficeKit HR is payroll software for Kerala that handles Kerala-specific Professional Tax slabs (for Thiruvananthapuram, Kochi, Kozhikode urban areas), Shops & Establishments Act registration and returns, combined with full India PF/ESI/TDS payroll for businesses operating in the state.",
    definition: {
      term: "Kerala payroll software",
      meaning:
        "Payroll systems configured for Kerala state-specific statutory requirements—Kerala Professional Tax, Shops & Establishments Act compliance, and full India statutory payroll (PF, ESI, TDS).",
    },
    facts: [
      {
        heading: "Kerala-specific payroll requirements",
        body: "Businesses in Kerala must deduct Professional Tax at state-specified slabs (different for urban vs rural areas), register under the Kerala Shops & Establishments Act, and file annual returns—in addition to central PF, ESI, and TDS compliance.",
      },
      {
        heading: "OfficeKit HR for Kerala businesses",
        body: "OfficeKit supports Kerala payroll with configurable Professional Tax slabs, Shops & Establishments compliance tracking, and full India statutory payroll—serving Kochi, Thiruvananthapuram, Kozhikode, and statewide employers.",
      },
    ],
    capabilities: [
      "Kerala Professional Tax calculation by slab",
      "India statutory payroll (PF, ESI, TDS)",
      "Shops & Establishments registration tracking",
      "Attendance and leave-linked pay runs",
      "Recruitment and onboarding ATS",
      "Employee self-service and payslips",
      "Multi-state payroll support",
      "GCC expansion path for Kerala-based companies",
    ],
    faqs: [
      {
        question: "What are the Kerala Professional Tax slabs for 2026–2027?",
        answer:
          "Kerala PT slabs vary by gross salary—employers in urban areas (Thiruvananthapuram, Kochi, Kozhikode corporations) have different rates than rural areas. OfficeKit applies the correct slab based on employee location setup.",
      },
      {
        question: "Does OfficeKit support Shops & Establishments compliance in Kerala?",
        answer:
          "Yes. The platform tracks registration details, renewal dates, and annual return filing requirements for Kerala S&E Act compliance.",
      },
      {
        question: "Can OfficeKit help Kerala companies expanding to the GCC?",
        answer:
          "Yes. OfficeKit serves India and GCC on one platform—ideal for Kerala-based companies with operations in UAE, Saudi Arabia, or Qatar.",
      },
    ],
    relatedLinks: [
      { label: "HR software Kochi", href: "/hr-software-kochi" },
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "hrms-software-bangalore": {
    slug: "hrms-software-bangalore",
    path: "/solutions/hrms-software-bangalore",
    title: "HRMS Software Bangalore | Payroll & HR for Karnataka — OfficeKit HR",
    metaDescription:
      "HRMS software for Bangalore and Karnataka businesses: India statutory payroll (PF, ESI, PT), attendance, recruitment, and employee self-service for tech startups, enterprises, and GCC operations.",
    h1: "HRMS software for Bangalore",
    subtitle:
      "HR, payroll, and compliance for Karnataka businesses with multi-country expansion support.",
    directAnswer:
      "OfficeKit HR is HRMS software for Bangalore that handles India statutory payroll (PF, ESI, Karnataka Professional Tax, TDS), biometric and mobile attendance, recruitment ATS, and employee self-service—plus native GCC payroll for companies expanding to UAE, KSA, and other Gulf markets from their Bangalore headquarters.",
    definition: {
      term: "HRMS (Bangalore)",
      meaning:
        "Human Resource Management Systems configured for Karnataka state compliance—Karnataka Professional Tax, PF, ESI—and used by Bangalore-based tech, BPO, and manufacturing companies.",
    },
    facts: [
      {
        heading: "Bangalore HR and payroll requirements",
        body: "Bangalore employers must comply with Karnataka Professional Tax (slabs up to ₹200/month), PF contributions, ESI for eligible employees, and the Karnataka Shops & Establishments Act. Many Bangalore tech companies also operate GCC entities requiring multi-country payroll.",
      },
      {
        heading: "OfficeKit HR for Bangalore companies",
        body: "OfficeKit links employee records, attendance, and leave to Karnataka-compliant payroll, handles state-specific PT slabs, and provides a seamless expansion path to UAE, Saudi Arabia, and other GCC markets for Bangalore-headquartered companies.",
      },
    ],
    capabilities: [
      "Karnataka Professional Tax calculation",
      "India statutory payroll (PF, ESI, TDS)",
      "Attendance with biometric and mobile check-in",
      "Recruitment and applicant tracking",
      "Employee self-service and mobile app",
      "Multi-country GCC expansion support",
      "AI Pilot HR workflow automation",
    ],
    faqs: [
      {
        question: "What are the Karnataka Professional Tax rates for Bangalore?",
        answer:
          "Karnataka PT is slab-based up to ₹200/month depending on gross salary. OfficeKit applies the correct slab automatically based on employee salary and location setup.",
      },
      {
        question: "Can OfficeKit help Bangalore companies with UAE expansion?",
        answer:
          "Yes. Many Bangalore-based tech companies use OfficeKit for both India and GCC entities, managing payroll, attendance, and compliance across regions from one platform.",
      },
      {
        question: "What industries does OfficeKit serve in Bangalore?",
        answer:
          "OfficeKit serves Bangalore's tech startups, BPOs, manufacturing, and financial services companies with modular HRMS features that scale from 10 to 1,000+ employees.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "HR software Kochi", href: "/hr-software-kochi" },
    ],
  },
  "hrms-software-chennai": {
    slug: "hrms-software-chennai",
    path: "/solutions/hrms-software-chennai",
    title: "HRMS Software Chennai | Tamil Nadu Payroll & HR — OfficeKit HR",
    metaDescription:
      "HRMS software for Chennai and Tamil Nadu: statutory payroll with Tamil Nadu PT, PF/ESI, attendance, and recruitment for manufacturing, IT, and BPO companies.",
    h1: "HRMS software for Chennai",
    subtitle:
      "Comprehensive HR and payroll for Tamil Nadu businesses with multi-country growth options.",
    directAnswer:
      "OfficeKit HR is HRMS software for Chennai that manages India statutory payroll (PF, ESI, Tamil Nadu Professional Tax, TDS), attendance with biometric and mobile options, recruitment, performance management, and employee self-service—with GCC payroll support for companies expanding operations from Chennai.",
    definition: {
      term: "HRMS (Chennai)",
      meaning:
        "Human Resource Management Systems configured for Tamil Nadu compliance—Tamil Nadu Professional Tax, PF, ESI—for Chennai's manufacturing, IT, and BPO sectors.",
    },
    facts: [
      {
        heading: "Chennai payroll and compliance requirements",
        body: "Tamil Nadu employers deduct PT at slab rates up to ₹179/month, comply with PF and ESI requirements, and follow the Tamil Nadu Shops & Establishments Act. Manufacturing units in Chennai also face specific overtime and compliance rules.",
      },
      {
        heading: "OfficeKit HR for Chennai operations",
        body: "OfficeKit provides Tamil Nadu-compliant payroll with auto-calculated PT slabs, attendance integration, and a unified platform for Chennai companies managing both India and GCC entities.",
      },
    ],
    capabilities: [
      "Tamil Nadu Professional Tax calculation",
      "India statutory payroll (PF, ESI, TDS)",
      "Biometric and mobile attendance",
      "Shift management for manufacturing",
      "Recruitment and onboarding ATS",
      "Employee self-service portal",
      "Multi-country GCC payroll support",
    ],
    faqs: [
      {
        question: "What are the Tamil Nadu Professional Tax rates for Chennai?",
        answer:
          "Tamil Nadu PT is slab-based up to ₹179/month. The amount depends on gross salary and is deducted monthly. OfficeKit configures the correct slab per employee automatically.",
      },
      {
        question: "Does OfficeKit support manufacturing companies in Chennai?",
        answer:
          "Yes. OfficeKit offers shift management, overtime calculations, biometric attendance integration, and factory-compliant payroll for Chennai's manufacturing sector.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "HR software Kochi", href: "/hr-software-kochi" },
    ],
  },
  "hrms-software-hyderabad": {
    slug: "hrms-software-hyderabad",
    path: "/solutions/hrms-software-hyderabad",
    title: "HRMS Software Hyderabad | Telangana Payroll — OfficeKit HR",
    metaDescription:
      "HRMS software for Hyderabad and Telangana: statutory payroll, attendance, recruitment, and employee self-service with GCC expansion path for pharma and IT companies.",
    h1: "HRMS software for Hyderabad",
    subtitle:
      "End-to-end HRMS for Telangana businesses with multi-country compliance capabilities.",
    directAnswer:
      "OfficeKit HR is HRMS software for Hyderabad that manages India statutory payroll (PF, ESI, Telangana Professional Tax, TDS), biometric attendance, recruitment, performance management, and employee self-service—with native GCC payroll for Hyderabad-based pharmaceutical, IT, and BPO companies expanding to the Middle East.",
    definition: {
      term: "HRMS (Hyderabad)",
      meaning:
        "Human Resource Management Systems configured for Telangana state compliance, used by Hyderabad's pharmaceutical hubs, IT corridors (HITEC City), and BPO centers.",
    },
    facts: [
      {
        heading: "Hyderabad HR requirements",
        body: "Telangana employers must deduct PT at state-specified slabs (up to ₹200/month), comply with PF/ESI, and follow Telangana Shops & Establishments rules. Hyderabad's pharma and IT companies frequently manage GCC subsidiaries requiring multi-country payroll.",
      },
      {
        heading: "OfficeKit HR for Hyderabad businesses",
        body: "OfficeKit provides Telangana-compliant payroll, attendance, and HR workflows, plus native support for UAE WPS, KSA GOSI, and other GCC payroll requirements—ideal for Hyderabad companies with Middle East operations.",
      },
    ],
    capabilities: [
      "Telangana Professional Tax calculation",
      "India statutory payroll (PF, ESI, TDS)",
      "Biometric and mobile attendance",
      "Recruitment ATS and onboarding",
      "Performance management and OKRs",
      "Employee self-service portal",
      "Multi-country GCC payroll support",
    ],
    faqs: [
      {
        question: "What are the Professional Tax rates in Telangana?",
        answer:
          "Telangana PT has slab-based rates up to ₹200/month depending on gross monthly salary. OfficeKit calculates the correct deduction per employee automatically.",
      },
      {
        question: "Can Hyderabad pharma companies use OfficeKit for GCC payroll?",
        answer:
          "Yes. OfficeKit serves several Hyderabad-based pharma companies that operate manufacturing or sales entities in the UAE, Saudi Arabia, and other GCC markets.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "Payroll software KSA", href: "/solutions/payroll-software-ksa" },
    ],
  },
  "payroll-software-mumbai": {
    slug: "payroll-software-mumbai",
    path: "/solutions/payroll-software-mumbai",
    title: "Payroll Software Mumbai | Maharashtra PT & Compliance — OfficeKit HR",
    metaDescription:
      "Payroll software for Mumbai and Maharashtra: Maharashtra Professional Tax, PF/ESI, Shops & Establishments, and HRMS for BFSI, IT, and manufacturing companies.",
    h1: "Payroll software for Mumbai",
    subtitle:
      "Statutory payroll for Maharashtra with local compliance and HRMS integration.",
    directAnswer:
      "OfficeKit HR is payroll software for Mumbai that handles Maharashtra-specific Professional Tax slabs (up to ₹300/month, the highest in India), Shops & Establishments Act compliance, PF, ESI, and TDS—plus GCC payroll for Mumbai-based companies with Middle East operations—all in one cloud platform.",
    definition: {
      term: "Mumbai payroll software",
      meaning:
        "Payroll systems configured for Maharashtra state statutory requirements—Maharashtra Professional Tax, Shops & Establishments compliance—for Mumbai's BFSI, IT, and entertainment sectors.",
    },
    facts: [
      {
        heading: "Mumbai-specific payroll requirements",
        body: "Maharashtra has the highest Professional Tax slab in India (up to ₹300/month for high earners) and businesses must register under the Maharashtra Shops & Establishments Act. Mumbai's BFSI and IT sectors also face unique overtime and compliance requirements.",
      },
      {
        heading: "OfficeKit HR for Mumbai businesses",
        body: "OfficeKit supports Maharashtra payroll with configurable PT slabs (including the top ₹300 bracket), S&E Act compliance tracking, and full India statutory payroll—plus GCC expansion support for Mumbai-headquartered companies.",
      },
    ],
    capabilities: [
      "Maharashtra Professional Tax calculation",
      "India statutory payroll (PF, ESI, TDS)",
      "Shops & Establishments compliance tracking",
      "Attendance and leave-linked payroll",
      "BFSI and IT-specific overtime rules",
      "Employee self-service and payslips",
      "GCC expansion support",
    ],
    faqs: [
      {
        question: "What are the Maharashtra Professional Tax rates for Mumbai?",
        answer:
          "Maharashtra PT has slab-based rates from ₹0 to ₹300/month depending on gross salary. The maximum ₹300/month applies to employees earning above ₹10,000/month. OfficeKit applies the correct slab automatically.",
      },
      {
        question: "Does OfficeKit support BFSI companies in Mumbai?",
        answer:
          "Yes. OfficeKit serves BFSI companies with comprehensive compliance features, shift management for branch staff, and secure employee data management suitable for regulated industries.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software Kerala", href: "/solutions/payroll-software-kerala" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "hrms-software-delhi-ncr": {
    slug: "hrms-software-delhi-ncr",
    path: "/solutions/hrms-software-delhi-ncr",
    title: "HRMS Software Delhi NCR | Payroll & HR for NCR — OfficeKit HR",
    metaDescription:
      "HRMS software for Delhi NCR: statutory payroll, attendance, recruitment, and employee self-service for Gurgaon, Noida, and Delhi businesses with GCC expansion.",
    h1: "HRMS software for Delhi NCR",
    subtitle:
      "HR and payroll for Delhi, Gurgaon, and Noida with multi-state compliance and GCC support.",
    directAnswer:
      "OfficeKit HR is HRMS software for Delhi NCR that handles India statutory payroll (PF, ESI, Delhi PT, TDS), multi-state compliance for companies with offices across NCR states, biometric and mobile attendance, recruitment ATS, and employee self-service—plus GCC payroll for Delhi-headquartered companies expanding to the Middle East.",
    definition: {
      term: "HRMS (Delhi NCR)",
      meaning:
        "Human Resource Management Systems configured for Delhi NCR's multi-state compliance environment—Delhi, Haryana (Gurgaon), and Uttar Pradesh (Noida)—each with different PT rates and Shops & Establishments rules.",
    },
    facts: [
      {
        heading: "Delhi NCR multi-state compliance challenge",
        body: "Companies with offices across Delhi, Gurgaon (Haryana), and Noida (UP) face multiple PT rates, S&E registration requirements, and state-specific labour law compliance. A unified HRMS simplifies cross-state payroll and compliance tracking.",
      },
      {
        heading: "OfficeKit HR for Delhi NCR businesses",
        body: "OfficeKit handles multi-state payroll for Delhi NCR with auto-configured PT rates per location, centralized HR records for distributed teams, and GCC expansion support for companies with Middle East operations.",
      },
    ],
    capabilities: [
      "Multi-state professional tax (Delhi, Haryana, UP)",
      "India statutory payroll (PF, ESI, TDS)",
      "Biometric and mobile attendance",
      "Recruitment and onboarding ATS",
      "Multi-location HR management",
      "Employee self-service and mobile app",
      "GCC payroll expansion support",
    ],
    faqs: [
      {
        question: "How does OfficeKit handle different PT rates across Delhi NCR states?",
        answer:
          "OfficeKit automatically applies the correct Professional Tax rate based on employee work location—Delhi (up to ₹125/month), Haryana (up to ₹183.33/month), or UP (up to ₹300/month).",
      },
      {
        question: "Can OfficeKit manage employees across multiple NCR locations?",
        answer:
          "Yes. OfficeKit supports multi-location org structures with location-specific policies, compliance rules, and reporting while maintaining centralized HR records.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "HR software Kochi", href: "/hr-software-kochi" },
    ],
  },
};

export const GEO_LANDING_NEW_SLUGS = Object.keys(GEO_LANDINGS_NEW);
