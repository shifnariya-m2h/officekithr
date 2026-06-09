import type { FaqItem } from "@/seo/schema";

export type ComplianceConfig = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  country: string;
  countryCode: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  regulations: { name: string; description: string }[];
  complianceSteps: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
};

export const PAYROLL_COMPLIANCE: Record<string, ComplianceConfig> = {
  "india-payroll-compliance": {
    slug: "india-payroll-compliance",
    path: "/compliance/india-payroll-compliance",
    title: "India Payroll Compliance Guide | PF, ESI, PT, TDS — OfficeKit HR",
    metaDescription:
      "Complete guide to India payroll compliance for 2026–2027: PF, ESI, professional tax, TDS, gratuity, and bonus under Indian labour laws. Stay compliant with OfficeKit HR.",
    country: "India",
    countryCode: "IN",
    h1: "India Payroll Compliance Guide",
    subtitle:
      "Navigating PF, ESI, PT, TDS, gratuity, and bonus compliance for Indian employers.",
    directAnswer:
      "India payroll compliance requires employers to deduct and remit Provident Fund (PF) at 12% each from employer and employee, ESI at 3.25% employer and 0.75% employee (gross ≤ ₹21,000/month), Professional Tax per state slab, TDS per income tax slabs, gratuity at 4.81% of basic for employees with 5+ years tenure, and statutory bonus at 8.33% of basic. OfficeKit HR automates these calculations and provides challan-ready reports.",
    regulations: [
      {
        name: "Employees' Provident Fund (EPF)",
        description:
          "Mandatory for establishments with 20+ employees. Employer and employee each contribute 12% of basic + DA. Employers also pay 0.5% EDLI and 0.5% pension (EPS) within the 12%.",
      },
      {
        name: "Employees' State Insurance (ESI)",
        description:
          "Mandatory for establishments with 10+ employees (some states 20+) where gross pay ≤ ₹21,000/month. Employer contributes 3.25%, employee 0.75%.",
      },
      {
        name: "Professional Tax (PT)",
        description:
          "State-level tax deducted from employee salaries. Slabs and rates vary by state (e.g., Karnataka up to ₹200/month, Maharashtra up to ₹300/month, Tamil Nadu up to ₹179/month). Employers must register and file returns per state.",
      },
      {
        name: "Tax Deducted at Source (TDS)",
        description:
          "Employers deduct income tax per employee's declared investment proofs and applicable tax slabs. Quarterly TDS returns and Form 16 issuance are mandatory.",
      },
      {
        name: "Payment of Gratuity Act, 1972",
        description:
          "Payable to employees with 5+ years of continuous service at 15 days of last drawn salary per year of service. Applicable to establishments with 10+ employees.",
      },
      {
        name: "Payment of Bonus Act, 1965",
        description:
          "Mandatory bonus for employees earning ≤ ₹21,000/month. Minimum 8.33% of annual salary or ₹100 per month, whichever is higher. Maximum 20% of annual salary.",
      },
    ],
    complianceSteps: [
      "Register your establishment with EPFO, ESIC, and state PT authorities",
      "Set up salary components (basic, DA, HRA, allowances, deductions) per compliance rules",
      "Configure PF at 12% (employee and employer), ESI if applicable, and PT per state slab",
      "Collect employee investment declarations for TDS at the start of each financial year",
      "Run monthly payroll with auto-calculated statutory deductions",
      "Generate and remit PF challans (due 15th), ESI challans (due 15th), PT returns (per state schedule)",
      "File quarterly TDS returns and issue Form 16 to employees by June each year",
      "Calculate and accrue gratuity for eligible employees with 5+ years tenure",
      "Compute statutory bonus at minimum 8.33% for eligible employees",
      "Maintain audit-ready statutory registers and annual compliance reports",
    ],
    faqs: [
      {
        question: "What is the PF contribution rate for 2026–2027?",
        answer:
          "The standard PF rate is 12% each from employee and employer on basic + DA. The employer's share includes 8.33% towards EPS (pension), 3.67% EPF, 0.5% EDLI, and 0.5% EPF admin charges.",
      },
      {
        question: "Who is eligible for ESI coverage in India?",
        answer:
          "Employees with gross monthly wages ≤ ₹21,000 in covered establishments (10+ employees in most states, 20+ in some) are eligible. ESI provides medical, sickness, maternity, and disability benefits.",
      },
      {
        question: "How is professional tax calculated across different states?",
        answer:
          "PT rates vary by state and salary slab. For example, Karnataka charges ₹0–₹200/month, Maharashtra up to ₹300/month, and Tamil Nadu up to ₹179/month. OfficeKit HR configures state-specific slabs automatically.",
      },
      {
        question: "What is the gratuity calculation formula?",
        answer:
          "Gratuity = (Last drawn basic + DA) × 15/26 × Years of service. Eligible after 5 continuous years. For non-covered establishments, the calculation may differ.",
      },
    ],
    relatedLinks: [
      { label: "Best HRMS India", href: "/hrms-software-india" },
      { label: "Payroll software Kerala", href: "/solutions/payroll-software-kerala" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "uae-payroll-compliance": {
    slug: "uae-payroll-compliance",
    path: "/compliance/uae-payroll-compliance",
    title: "UAE Payroll Compliance Guide | WPS, MOHRE, Gratuity — OfficeKit HR",
    metaDescription:
      "Complete guide to UAE payroll compliance: WPS salary files, MOHRE regulations, gratuity calculation, and pension requirements for mainland and free-zone employers.",
    country: "UAE",
    countryCode: "AE",
    h1: "UAE Payroll Compliance Guide",
    subtitle:
      "WPS, MOHRE regulations, gratuity, and pension compliance for UAE employers.",
    directAnswer:
      "UAE payroll compliance requires employers to pay salaries through the Wages Protection System (WPS) via approved financial channels, maintain MOHRE-compliant employment contracts and records, calculate end-of-service gratuity per UAE Labour Law (21 days basic per year for first 5 years, 30 days thereafter), and for Dubai government entities, contribute to the Dubai Pension Fund. OfficeKit HR automates WPS/SIF file generation, gratuity accrual, and audit-ready reporting.",
    regulations: [
      {
        name: "Wages Protection System (WPS)",
        description:
          "Mandatory for all UAE-registered employers. Salaries must be paid through WPS-approved banks using Standard Information Files (SIF). Non-compliance results in penalties and labour transaction blocks.",
      },
      {
        name: "MOHRE Labour Law Compliance",
        description:
          "Employers must register with MOHRE, maintain valid employment contracts through the MOHRE portal, and comply with UAE Labour Law (Federal Decree-Law No. 33 of 2021) on working hours, leave, and termination.",
      },
      {
        name: "End-of-Service Gratuity (EOS)",
        description:
          "Employees with 1+ year of continuous service are entitled to gratuity: 21 days basic salary for each of the first 5 years, and 30 days for each subsequent year. Caps at 2 years' total basic salary.",
      },
      {
        name: "Dubai Pension Fund (for government entities)",
        description:
          "Dubai government and semi-government entities must contribute to the Dubai Pension Fund at specified rates for UAE national employees.",
      },
    ],
    complianceSteps: [
      "Register your establishment with MOHRE and obtain a Labour Card and Establishment Card",
      "Set up employee contracts through the MOHRE portal with accurate job titles and salary details",
      "Configure payroll salary components aligned to UAE labour law (basic, housing, transport, allowances)",
      "Enable WPS-compliant payroll with SIF file generation for monthly salary runs",
      "Validate employee IBANs, salary amounts, and pay periods before WPS submission",
      "Calculate and accrue gratuity per service tenure (21 days/year for first 5 years, 30 days thereafter)",
      "Process leave encashment for unused annual leave at termination",
      "Maintain audit-ready payroll registers, contract copies, and WPS records for MOHRE inspections",
      "File pension contributions for eligible UAE national employees (Dubai government entities)",
    ],
    faqs: [
      {
        question: "What is UAE WPS and who needs to comply?",
        answer:
          "WPS (Wages Protection System) is a mandatory salary payment system through approved banks. All UAE-registered mainland and free-zone employers must comply or face fines and labour transaction blocks.",
      },
      {
        question: "How is gratuity calculated in the UAE?",
        answer:
          "For the first 5 years: 21 days of basic salary per year. For each subsequent year: 30 days of basic salary per year. Total gratuity is capped at 2 years of total basic salary. Different rules apply for termination with cause.",
      },
      {
        question: "What are the MOHRE compliance requirements for payroll?",
        answer:
          "Employers must maintain valid employment contracts, process salaries through WPS, pay on time each month, and keep payroll records for MOHRE inspections. Non-compliance can result in fines and blocked new visa applications.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software UAE", href: "/payroll-software-uae" },
      { label: "WPS compliance software", href: "/wps-compliance-software" },
      { label: "HR software UAE", href: "/hrms-software-india" },
    ],
  },
  "ksa-payroll-compliance": {
    slug: "ksa-payroll-compliance",
    path: "/compliance/ksa-payroll-compliance",
    title: "KSA Payroll Compliance Guide | GOSI, ZATCA, Saudi Labour Law — OfficeKit HR",
    metaDescription:
      "Complete guide to Saudi Arabia payroll compliance: GOSI contribution rates, ZATCA e-invoicing alignment, and Saudi labour law regulations for private-sector employers.",
    country: "Saudi Arabia",
    countryCode: "SA",
    h1: "KSA Payroll Compliance Guide",
    subtitle:
      "GOSI contributions, ZATCA-aligned reporting, and labour law compliance for Saudi employers.",
    directAnswer:
      "Saudi Arabia payroll compliance requires employers to register employees with GOSI and remit monthly contributions (9% employer, 9% employee on basic salary for Saudi nationals; 2% employer for expatriates), maintain records aligned to ZATCA e-invoicing requirements, and comply with the Saudi Labour Law (Royal Decree M/51) covering working hours, leave, end-of-service benefits, and termination. OfficeKit HR automates GOSI calculations, payroll reporting, and multi-country compliance.",
    regulations: [
      {
        name: "General Organization for Social Insurance (GOSI)",
        description:
          "Mandatory registration and monthly contribution remittance: 9% employer and 9% employee for Saudi nationals on basic salary, 2% employer for expatriates. Contributions cover occupational hazards, disability, and retirement benefits.",
      },
      {
        name: "ZATCA E-Invoicing Alignment",
        description:
          "ZATCA (Zakat, Tax and Customs Authority) requires electronic invoicing and record-keeping. Payroll reports must align with ZATCA requirements for accurate record-keeping and audit readiness.",
      },
      {
        name: "Saudi Labour Law (Royal Decree M/51)",
        description:
          "Governs working hours (48 hours/week), overtime (150% rate), annual leave (21 days, increasing to 30 days after 5 years), sick leave (up to 120 days), end-of-service benefits (half-month salary for first 5 years, one month thereafter), and termination rules.",
      },
      {
        name: "Qiwa Compliance",
        description:
          "Qiwa is the MHRSD platform for managing employee contracts, WPS-like salary reporting, and compliance with Saudization (Nitaqat) programme requirements. Employers must maintain up-to-date records on Qiwa.",
      },
    ],
    complianceSteps: [
      "Register your establishment and employees with GOSI within the first month of employment",
      "Set up salary components (basic, housing, transport, allowances) in payroll system",
      "Configure GOSI contribution rates: 9% employer + 9% employee (Saudi), 2% employer (expat)",
      "Maintain Qiwa records for employee contracts and Nitaqat compliance",
      "Run monthly payroll with auto-calculated GOSI deductions and employer contributions",
      "Generate GOSI contribution reports and remit by monthly deadlines",
      "Prepare ZATCA-aligned payroll records for audit purposes",
      "Calculate end-of-service benefits (half-month for first 5 years, one month thereafter)",
      "Track Saudi labour law leave entitlements (annual leave, sick leave, Hajj leave)",
      "Maintain compliance registers for MHRSD inspections",
    ],
    faqs: [
      {
        question: "What are the current GOSI contribution rates in Saudi Arabia?",
        answer:
          "For Saudi nationals: employer contributes 9% and employee contributes 9% on basic salary (total 18%). For expatriates: employer contributes 2% on basic salary. Additional 1% employer contribution for occupational hazard insurance up to certain limits.",
      },
      {
        question: "How is end-of-service benefit calculated in KSA?",
        answer:
          "Under Saudi Labour Law, EOS benefit is half-month of basic salary for each of the first 5 years, and one month's basic salary for each subsequent year. The employee is entitled to the full benefit upon retirement, termination without cause, or permanent disability.",
      },
      {
        question: "What is Qiwa and how does it affect KSA payroll compliance?",
        answer:
          "Qiwa is the MHRSD unified digital platform for employee contract management, Nitaqat compliance, and salary protection. Employers must maintain updated employment contracts and salary records on Qiwa.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software KSA", href: "/solutions/payroll-software-ksa" },
      { label: "HR software Riyadh", href: "/hr-software-riyadh" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "kuwait-payroll-compliance": {
    slug: "kuwait-payroll-compliance",
    path: "/compliance/kuwait-payroll-compliance",
    title: "Kuwait Payroll Compliance Guide | PIFSS, Labour Law — OfficeKit HR",
    metaDescription:
      "Complete guide to Kuwait payroll compliance: PIFSS social insurance contributions, private-sector labour law, end-of-service indemnity, and payroll regulations.",
    country: "Kuwait",
    countryCode: "KW",
    h1: "Kuwait Payroll Compliance Guide",
    subtitle:
      "PIFSS contributions, labour law compliance, and end-of-service indemnity for Kuwaiti employers.",
    directAnswer:
      "Kuwait payroll compliance requires employers to register employees with PIFSS and remit monthly social insurance contributions (employer 11.5%, employee 10.5% on eligible salary components for Kuwaiti nationals; lower rates for expatriates), comply with the Private Sector Labour Law (Law No. 6 of 2010) on working hours, leave, and termination, and calculate end-of-service indemnity at 15 days per year for the first 5 years and one month per year thereafter. OfficeKit HR automates PIFSS calculations, leave rules, and payroll reporting.",
    regulations: [
      {
        name: "Public Institution for Social Security (PIFSS)",
        description:
          "Mandatory social insurance for Kuwaiti nationals: employer contributes 11.5% and employee contributes 10.5% on eligible salary components. Expatriates have a separate contribution scheme managed through the Labour Law.",
      },
      {
        name: "Kuwait Private Sector Labour Law (Law No. 6 of 2010)",
        description:
          "Governs working hours (48 hours/week, reduced to 36 during Ramadan), annual leave (30 days), sick leave (15 days full pay, 15 days half pay, 15 days no pay), and termination procedures for private-sector employees.",
      },
      {
        name: "End-of-Service Indemnity (EOSI)",
        description:
          "Employees with 1+ year of service are entitled to end-of-service indemnity: 15 days basic salary per year for first 5 years, and one month per year thereafter. Different rules apply for Kuwaiti nationals under PIFSS.",
      },
      {
        name: "Manpower and Restructuring Authority",
        description:
          "Oversees employment regulations, work permits, and compliance with Kuwaitization policies. Employers must maintain accurate payroll and labour records for inspections.",
      },
    ],
    complianceSteps: [
      "Register employees with PIFSS within the first month of employment (Kuwaiti nationals)",
      "Configure salary components (basic, allowances, deductions) per PIFSS contribution rules",
      "Set up PIFSS contribution rates: employer 11.5%, employee 10.5% on applicable components",
      "Configure leave policies aligned to Kuwait Labour Law (30 days annual leave, sick leave rules)",
      "Run monthly payroll with auto-calculated PIFSS contributions and mandatory deductions",
      "Generate PIFSS contribution reports for monthly remittance",
      "Calculate end-of-service indemnity at 15 days/year for first 5 years, one month/year thereafter",
      "Track Ramadan working hour adjustments (6 hours/day or 36 hours/week)",
      "Maintain audit-ready payroll registers for Labour Authority inspections",
    ],
    faqs: [
      {
        question: "What are the PIFSS contribution rates in Kuwait?",
        answer:
          "For Kuwaiti nationals: employer contributes 11.5% and employee contributes 10.5% on basic salary. For expatriates: employer contributes small social security levies as per Kuwait labour law. Rates may be updated periodically by PIFSS.",
      },
      {
        question: "How is end-of-service indemnity calculated under Kuwait Labour Law?",
        answer:
          "For employees with 1+ year of service: 15 days of basic salary per year for the first 5 years, and one month of basic salary per year for each subsequent year. Different rules apply for Kuwaiti nationals covered by PIFSS.",
      },
      {
        question: "What are the working hour rules in Kuwait during Ramadan?",
        answer:
          "During Ramadan, working hours are reduced to 36 hours per week (6 hours per day) for all employees regardless of religion, as per Kuwait Labour Law Article 42.",
      },
    ],
    relatedLinks: [
      { label: "HRMS software Kuwait", href: "/solutions/hrms-software-kuwait" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "qatar-payroll-compliance": {
    slug: "qatar-payroll-compliance",
    path: "/compliance/qatar-payroll-compliance",
    title: "Qatar Payroll Compliance Guide | WPS, Labour Law — OfficeKit HR",
    metaDescription:
      "Complete guide to Qatar payroll compliance: WPS salary transfers, Labour Law (Law No. 14 of 2004), end-of-service gratuity, and payroll regulations for Doha employers.",
    country: "Qatar",
    countryCode: "QA",
    h1: "Qatar Payroll Compliance Guide",
    subtitle:
      "WPS compliance, end-of-service gratuity, and labour law regulations for Qatari employers.",
    directAnswer:
      "Qatar payroll compliance requires employers to process salaries through the Wages Protection System (WPS), comply with the Qatar Labour Law (Law No. 14 of 2004) covering working hours (48 hours/week), annual leave (21 working days, increasing to 28 after 5 years), and sick leave rules, calculate end-of-service gratuity at 3 weeks per year for first 5 years and 4 weeks per year thereafter, and maintain employee records with the Ministry of Labour. OfficeKit HR automates WPS file generation, gratuity calculations, and payroll processing.",
    regulations: [
      {
        name: "Qatar Wage Protection System (WPS)",
        description:
          "Mandatory for all employers in Qatar. Salaries must be paid through WPS-approved financial channels and reported to the Ministry of Labour. Non-compliance results in penalties and visa processing blocks.",
      },
      {
        name: "Qatar Labour Law (Law No. 14 of 2004 as amended)",
        description:
          "Governs working hours (48 hours/week, 36 during Ramadan), annual leave (21 working days for first 5 years, 28 thereafter), sick leave (up to 6 weeks per year at varying pay rates), overtime (125% of basic rate), and termination rules.",
      },
      {
        name: "End-of-Service Gratuity (EOSG)",
        description:
          "Employees with 1+ year of service are entitled to gratuity: 3 weeks of basic salary per year for the first 5 years, and 4 weeks per year for each subsequent year. Gratuity is capped at 2 years of total basic salary.",
      },
      {
        name: "Ministry of Labour (MOL) Compliance",
        description:
          "Employers must maintain accurate employment contracts, payroll records, and WPS reports. Regular inspections ensure compliance with labour laws and WPS requirements.",
      },
    ],
    complianceSteps: [
      "Register your establishment with the Ministry of Labour and obtain establishment card",
      "Set up employee contracts per Qatar Labour Law with accurate salary and terms",
      "Configure payroll system with salary components (basic, allowances, housing, transport)",
      "Enable WPS-compliant payroll with salary file generation for monthly processing",
      "Validate salary amounts, employee IDs, and bank details before WPS submission",
      "Calculate end-of-service gratuity: 3 weeks/year for first 5 years, 4 weeks/year thereafter",
      "Configure Ramadan working hours (36 hours/week) for automatic schedule adjustment",
      "Track leave entitlements per Qatari law (annual leave, sick leave, public holidays)",
      "Maintain payroll and WPS records for Ministry of Labour inspections",
    ],
    faqs: [
      {
        question: "What is the WPS requirement in Qatar?",
        answer:
          "Qatar's WPS requires all private-sector employers to pay salaries through approved banks and report to the Ministry of Labour. The system is similar to UAE's WPS but with country-specific file formats and regulations.",
      },
      {
        question: "How is end-of-service gratuity calculated in Qatar?",
        answer:
          "Employees earn 3 weeks of basic salary per year for the first 5 years of service, and 4 weeks per year for each subsequent year. The total is capped at 2 years of total basic salary. Different rules apply for termination with cause.",
      },
      {
        question: "What are the annual leave entitlements under Qatar Labour Law?",
        answer:
          "Employees are entitled to 21 working days of annual leave per year for the first 5 years of service, increasing to 28 working days after 5 years. Leave is paid at full basic salary.",
      },
    ],
    relatedLinks: [
      { label: "Payroll software Qatar", href: "/solutions/payroll-software-qatar" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "oman-payroll-compliance": {
    slug: "oman-payroll-compliance",
    path: "/compliance/oman-payroll-compliance",
    title: "Oman Payroll Compliance Guide | PASI, Labour Law — OfficeKit HR",
    metaDescription:
      "Complete guide to Oman payroll compliance: PASI social insurance contributions, Labour Law (Royal Decree 35/2003), end-of-service indemnity, and payroll regulations for Muscat employers.",
    country: "Oman",
    countryCode: "OM",
    h1: "Oman Payroll Compliance Guide",
    subtitle:
      "PASI contributions, end-of-service indemnity, and labour law compliance for Omani employers.",
    directAnswer:
      "Oman payroll compliance requires employers to register employees with PASI and remit social insurance contributions (employer 10.5%, employee 7% on basic salary for Omani nationals), comply with the Oman Labour Law (Royal Decree 35/2003) on working hours and leave, and calculate end-of-service indemnity at 15 days per year for first 3 years and one month per year thereafter. OfficeKit HR automates PASI calculations, leave tracking, and payroll processing for Omani entities.",
    regulations: [
      {
        name: "Public Authority for Social Insurance (PASI)",
        description:
          "Mandatory for Omani nationals working in the private sector. Employer contributes 10.5% and employee contributes 7% on basic salary. PASI covers old-age pension, disability, and death benefits.",
      },
      {
        name: "Oman Labour Law (Royal Decree 35/2003 as amended)",
        description:
          "Governs working hours (45 hours/week, 30 during Ramadan), annual leave (30 days), sick leave (10 weeks per year at varying pay rates), overtime rules, and termination procedures for private-sector employees.",
      },
      {
        name: "End-of-Service Indemnity (EOSI)",
        description:
          "Employees with 1+ year of service are entitled to indemnity: 15 days of basic salary per year for the first 3 years, and one month per year for each subsequent year. Omani nationals under PASI have a separate pension scheme.",
      },
      {
        name: "Ministry of Labour Compliance",
        description:
          "Employers must maintain accurate employment records, register with the Ministry of Labour, and comply with Omanization (Saudization equivalent) policies. Regular inspections ensure labour law compliance.",
      },
    ],
    complianceSteps: [
      "Register Omani national employees with PASI within the first month of employment",
      "Configure salary components for PASI contribution calculations",
      "Set up PASI rates: employer 10.5%, employee 7% on eligible salary components",
      "Configure leave policies per Oman Labour Law (30 days annual leave, 10 weeks sick leave)",
      "Run monthly payroll with auto-calculated PASI and mandatory deductions",
      "Generate PASI contribution reports for monthly remittance",
      "Calculate end-of-service indemnity: 15 days/year for first 3 years, one month/year thereafter",
      "Track Ramadan working hours (30 hours/week) in attendance and scheduling",
      "Maintain compliance registers for Ministry of Labour inspections",
    ],
    faqs: [
      {
        question: "What are the PASI contribution rates in Oman?",
        answer:
          "For Omani nationals: employer contributes 10.5% and employee contributes 7% on basic salary. The maximum insurable salary for PASI purposes is adjusted periodically by the authority.",
      },
      {
        question: "How is end-of-service indemnity calculated in Oman?",
        answer:
          "For the first 3 years: 15 days of basic salary per year. For each subsequent year: one month (30 days) of basic salary. Omani nationals covered by PASI receive pension benefits instead of lump-sum indemnity.",
      },
      {
        question: "What are the working hours in Oman during Ramadan?",
        answer:
          "During Ramadan, working hours are reduced to 30 hours per week (6 hours per day) for all employees, as per Oman Labour Law provisions.",
      },
    ],
    relatedLinks: [
      { label: "HRMS software Oman", href: "/solutions/hrms-software-oman" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
  "bahrain-payroll-compliance": {
    slug: "bahrain-payroll-compliance",
    path: "/compliance/bahrain-payroll-compliance",
    title: "Bahrain Payroll Compliance Guide | SIO, LMRA, Labour Law — OfficeKit HR",
    metaDescription:
      "Complete guide to Bahrain payroll compliance: SIO social insurance, LMRA registration and work permits, Labour Law (Law No. 36 of 2012), and end-of-service indemnity.",
    country: "Bahrain",
    countryCode: "BH",
    h1: "Bahrain Payroll Compliance Guide",
    subtitle:
      "SIO contributions, LMRA compliance, and labour law regulations for Bahraini employers.",
    directAnswer:
      "Bahrain payroll compliance requires employers to register with LMRA, obtain work permits for all employees, remit SIO social insurance contributions (employer 14%, employee 11% on basic salary for Bahraini nationals), comply with Bahrain Labour Law (Law No. 36 of 2012) on working hours and leave, and calculate end-of-service indemnity at 15 days per year for first 3 years and one month per year thereafter. OfficeKit HR automates SIO calculations, LMRA tracking, and payroll processing.",
    regulations: [
      {
        name: "Social Insurance Organization (SIO)",
        description:
          "Mandatory for Bahraini nationals: employer contributes 14% and employee contributes 11% on basic salary. Covers old-age, disability, death benefits, and unemployment insurance.",
      },
      {
        name: "Labour Market Regulatory Authority (LMRA)",
        description:
          "Manages work permits, employee registration, and compliance with the Bahrainization (Tamkeen) policy. Employers must register all employees, maintain valid permits, and pay LMRA fees monthly.",
      },
      {
        name: "Bahrain Labour Law (Law No. 36 of 2012)",
        description:
          "Governs working hours (48 hours/week, 36 during Ramadan), annual leave (30 days), sick leave (up to 15 weeks per year at varying pay rates), overtime, and termination for private-sector employees.",
      },
      {
        name: "End-of-Service Indemnity (EOSI)",
        description:
          "Employees with 1+ year of service are entitled to indemnity: 15 days of basic salary per year for the first 3 years, and one month per year for each subsequent year. Bahraini nationals under SIO receive pension benefits.",
      },
    ],
    complianceSteps: [
      "Register your establishment with LMRA and obtain CR (Commercial Registration) linkage",
      "Obtain work permits for all employees through the LMRA portal",
      "Register Bahraini national employees with SIO for social insurance",
      "Configure SIO rates: employer 14%, employee 11% on eligible salary components",
      "Set up LMRA fee payment schedule (monthly per employee fee)",
      "Configure leave policies per Bahrain Labour Law (30 days annual leave, 15 weeks sick leave)",
      "Run monthly payroll with auto-calculated SIO contributions and LMRA tracking",
      "Generate SIO contribution reports for monthly remittance",
      "Track work permit renewal dates and employee contract expiry",
      "Maintain compliance registers for LMRA and Ministry of Labour inspections",
    ],
    faqs: [
      {
        question: "What are the SIO contribution rates in Bahrain?",
        answer:
          "For Bahraini nationals: employer contributes 14% on basic salary (10% for social insurance + 4% for unemployment insurance), employee contributes 11% (6% social insurance + 5% unemployment insurance). Expatriates are not covered by SIO.",
      },
      {
        question: "What is LMRA and how does it affect payroll?",
        answer:
          "LMRA (Labour Market Regulatory Authority) issues work permits and regulates the labour market. Employers must pay monthly LMRA fees per employee and maintain valid permits—tracking these alongside payroll is vital for compliance.",
      },
      {
        question: "How is end-of-service indemnity calculated in Bahrain?",
        answer:
          "For the first 3 years: 15 days of basic salary per year. For each subsequent year: one month (30 days) of basic salary. Bahraini nationals covered by SIO receive pension benefits instead of lump-sum indemnity.",
      },
    ],
    relatedLinks: [
      { label: "HRMS software Bahrain", href: "/solutions/hrms-software-bahrain" },
      { label: "AI HR software GCC", href: "/solutions/ai-hr-software-gcc" },
      { label: "Payroll & compliance feature", href: "/features/payroll-and-compliance" },
    ],
  },
};

export const PAYROLL_COMPLIANCE_SLUGS = Object.keys(PAYROLL_COMPLIANCE);
