import type { FaqItem } from "@/seo/schema";

type IndustryRichContent = {
  highlights: string[];
  features: { title: string; description: string }[];
  compliancePoints: string[];
  sections: { heading: string; body: string }[];
  extraFaqs?: FaqItem[];
  extraFacts?: { heading: string; body: string }[];
};

export const INDUSTRY_RICH_CONTENT: Record<string, IndustryRichContent> = {
  "hrms-for-fintech": {
    highlights: [
      "ATS and onboarding built for fast-growing fintech teams",
      "Variable pay for sales, partnerships, and operations incentives",
      "India PF/ESI/TDS and UAE WPS on one platform",
      "Document vault with expiry alerts for regulated roles",
    ],
    features: [
      {
        title: "Rapid hiring and onboarding",
        description:
          "Move candidates from offer to active employee with digital onboarding checklists, document collection, and probation tracking — critical when fintech teams scale 20–30% year on year.",
      },
      {
        title: "Incentive and commission payroll",
        description:
          "Configure quarterly bonuses, partnership commissions, and sales incentives as variable pay components that roll into statutory payroll without manual spreadsheets.",
      },
      {
        title: "Multi-entity India + GCC payroll",
        description:
          "Run India statutory payroll at HQ and UAE WPS payroll for Gulf subsidiaries from one HRMS — ideal for payment companies expanding to Dubai or Riyadh.",
      },
      {
        title: "Audit-ready compliance records",
        description:
          "Maintain payroll registers, approval trails, and employee document histories that support RBI, SEBI, and internal audit requirements for regulated financial technology firms.",
      },
    ],
    compliancePoints: [
      "India PF (EPFO)",
      "India ESI (ESIC)",
      "Professional Tax (multi-state)",
      "TDS & Form 16",
      "UAE WPS / SIF",
      "KSA GOSI",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Fintech startups, NBFCs, payment gateways, digital lenders, and neobanks with 50–2,000 employees that need compliant payroll, fast onboarding, and variable compensation — especially teams operating across India and the GCC.",
      },
      {
        heading: "Typical HR workflows",
        body: "Recruit engineers and compliance officers through ATS pipelines, onboard with KYC document collection, run monthly payroll with incentive components, manage shift rosters for customer support centres, and process exits with full-and-final settlement aligned to India or UAE labour law.",
      },
      {
        heading: "India and GCC payroll on one HRMS",
        body: "Fintech companies frequently start in India and open UAE or Saudi entities for regional expansion. OfficeKit HR eliminates duplicate employee records by running India statutory deductions and Gulf WPS/GOSI payroll from a single platform with Arabic/English employee self-service.",
      },
    ],
    extraFaqs: [
      {
        question: "How quickly can a fintech company go live on OfficeKit HR?",
        answer:
          "Most mid-market fintech teams go live in 2–4 weeks with core HR, attendance, and payroll modules. Multi-entity India+GCC setups typically complete in 4–6 weeks with parallel payroll validation.",
      },
      {
        question: "Does OfficeKit support probation and contract employee types in fintech?",
        answer:
          "Yes. Configure probation periods, notice rules, and contract durations per role — with automatic alerts when probation ends or contracts approach expiry.",
      },
    ],
    extraFacts: [
      {
        heading: "Fintech HR compliance in India and UAE",
        body: "Regulated fintech employers must maintain auditable payroll records, background verification documentation, and statutory filings. OfficeKit consolidates these workflows so HR teams spend less time on spreadsheets and more time on talent and culture.",
      },
    ],
  },

  "hrms-for-healthcare": {
    highlights: [
      "24/7 shift rostering for clinical and support teams",
      "Medical licence and certification expiry alerts",
      "On-call and overtime pay for nursing staff",
      "Multi-branch hospital and clinic management",
    ],
    features: [
      {
        title: "Clinical shift rostering",
        description:
          "Build rotating schedules for nurses, technicians, and support staff with swap approvals, overtime rules, and department-level roster visibility across wards and clinics.",
      },
      {
        title: "Credential and licence tracking",
        description:
          "Store medical registrations, nursing council certificates, and speciality credentials with automatic expiry reminders — reducing compliance risk for hospital HR teams.",
      },
      {
        title: "Hospital group payroll",
        description:
          "Process payroll for clinical and administrative staff across multiple hospital branches or clinic locations with consolidated group reporting and branch-level cost centres.",
      },
      {
        title: "Employee self-service for clinical staff",
        description:
          "Let nurses and doctors view rosters, request leave, download payslips, and submit shift swap requests from mobile — reducing admin load on ward managers.",
      },
    ],
    compliancePoints: [
      "India PF & ESI",
      "Professional Tax",
      "TDS payroll",
      "UAE WPS payroll",
      "Gratuity & EOS (GCC)",
      "Overtime & on-call pay rules",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Hospitals, multi-speciality clinic chains, diagnostic labs, and healthcare groups in India and the GCC that manage 24/7 clinical operations with strict credential compliance and high shift complexity.",
      },
      {
        heading: "Healthcare HR workflows",
        body: "Roster nurses and doctors across departments, track attendance against shift schedules, manage leave around emergency coverage, run monthly payroll with overtime and on-call premiums, and maintain document records for medical council registrations and renewals.",
      },
      {
        heading: "Compliance for hospital employers",
        body: "Healthcare employers face labour law requirements for working hours, overtime, and record-keeping alongside clinical credential mandates. OfficeKit HR centralises shift data, payroll registers, and document expiry tracking so hospital administrators stay audit-ready.",
      },
    ],
    extraFaqs: [
      {
        question: "Can OfficeKit separate clinical and admin payroll?",
        answer:
          "Yes. Departments and employee categories can have different shift policies, pay components, and approval hierarchies while consolidating into a single monthly payroll run.",
      },
      {
        question: "Does OfficeKit work for small clinics as well as hospital chains?",
        answer:
          "Yes. OfficeKit scales from single-clinic setups to multi-hospital groups with modular pricing — start with core HR and payroll, add rostering and document management as you grow.",
      },
    ],
    extraFacts: [
      {
        heading: "Why hospitals need industry-specific HRMS",
        body: "Generic corporate HR tools rarely handle 24/7 shift complexity, credential expiry, and clinical overtime rules. Healthcare HRMS must align roster management with payroll and compliance in one system.",
      },
    ],
  },

  "hrms-for-it-services": {
    highlights: [
      "ATS recruitment for engineering and delivery hiring",
      "OKR-based performance management",
      "Hybrid and remote attendance policies",
      "India HQ + GCC subsidiary payroll",
    ],
    features: [
      {
        title: "Recruitment pipeline management",
        description:
          "Track candidates from sourcing to offer with interview scheduling, hiring manager feedback, and onboarding handoff — built for IT services firms hiring 10–100 people per quarter.",
      },
      {
        title: "OKRs and performance reviews",
        description:
          "Run quarterly OKR cycles, manager reviews, and continuous feedback aligned to engineering and delivery team structures — without separate performance tools.",
      },
      {
        title: "Hybrid workforce attendance",
        description:
          "Configure office, remote, and hybrid attendance policies with mobile check-in for remote days and biometric integration at delivery centres and GCC offices.",
      },
      {
        title: "Bench and contractor tracking",
        description:
          "Manage consultants, contractors, and bench resources with contract expiry alerts, separate pay rules, and project-based cost centre reporting.",
      },
    ],
    compliancePoints: [
      "India PF & ESI",
      "Professional Tax (multi-state)",
      "TDS & Form 16",
      "UAE WPS",
      "KSA GOSI",
      "Gratuity calculation",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "IT services companies, software product firms, and technology consultancies with 50–5,000 employees — especially those with India development centres and GCC delivery or sales offices in Dubai, Riyadh, or Kuwait.",
      },
      {
        heading: "IT company HR workflows",
        body: "Source and hire developers and project managers through ATS, onboard with IT asset and access checklists, track hybrid attendance, run quarterly OKR reviews, process India statutory payroll monthly, and manage GCC entity payroll when teams expand internationally.",
      },
      {
        heading: "Scaling from India to the Gulf",
        body: "Many IT firms open UAE or Saudi subsidiaries for regional clients. OfficeKit HR lets HR teams manage India and GCC payroll on one platform — avoiding duplicate employee master data and separate regional HR tools.",
      },
    ],
    extraFaqs: [
      {
        question: "Can OfficeKit integrate with existing IT asset or access management?",
        answer:
          "OfficeKit focuses on HR, payroll, attendance, and performance. Onboarding checklists can include IT provisioning tasks, and employee data exports support integration with downstream systems.",
      },
      {
        question: "Is OfficeKit suitable for product startups vs large IT services firms?",
        answer:
          "Yes. Modular pricing lets startups enable recruitment and payroll first, then add OKRs, attendance, and GCC modules as headcount and geographic footprint grow.",
      },
    ],
    extraFacts: [
      {
        heading: "IT sector hiring velocity",
        body: "Technology companies face the highest hiring pressure of any sector. HRMS with built-in ATS, fast onboarding, and scalable payroll reduces time-to-productivity for new engineers and delivery staff.",
      },
    ],
  },

  "hrms-for-retail": {
    highlights: [
      "Geo-fenced mobile attendance per store",
      "Shift scheduling for sales floor teams",
      "Multi-store payroll consolidation",
      "Seasonal hiring templates",
    ],
    features: [
      {
        title: "Store-level attendance",
        description:
          "Retail staff check in via mobile GPS geo-fencing tied to their assigned store, while head office teams use biometric or Face-Kit — all consolidated in one attendance dashboard.",
      },
      {
        title: "Shift rotation and scheduling",
        description:
          "Configure shift patterns, weekly rotations, and swap approvals for front-line retail teams across malls, high streets, and franchise outlets.",
      },
      {
        title: "Multi-location payroll",
        description:
          "Run payroll for stores across Indian states or GCC emirates with state-specific professional tax, store-level incentives, and consolidated group reporting.",
      },
      {
        title: "Seasonal workforce scaling",
        description:
          "Onboard temporary staff for festive peaks and sale events with reusable templates, faster document collection, and streamlined exit processing after seasonal contracts end.",
      },
    ],
    compliancePoints: [
      "Shops & Establishments",
      "India PF & ESI",
      "State Professional Tax",
      "UAE WPS",
      "KSA GOSI",
      "Bonus Act compliance",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Retail chains, franchise networks, supermarket groups, and specialty store brands with store-based teams across multiple cities in India, UAE, or other GCC markets.",
      },
      {
        heading: "Retail HR workflows",
        body: "Schedule shifts per store, track floor staff attendance via mobile, manage high turnover with fast onboarding, run monthly payroll with store incentives, and consolidate compliance reporting across the retail network.",
      },
      {
        heading: "Multi-country retail operations",
        body: "Retail brands expanding from India to Gulf malls need HRMS that handles India statutory payroll and UAE WPS in one system. OfficeKit supports store-wise grouping with country-specific compliance rules per location.",
      },
    ],
    extraFaqs: [
      {
        question: "Can store managers approve leave and attendance?",
        answer:
          "Yes. Role-based access lets store managers approve leave, shift swaps, and attendance corrections for their location while HR maintains group-level oversight.",
      },
      {
        question: "Does OfficeKit handle franchise vs company-owned store structures?",
        answer:
          "Yes. Organisational units can represent franchise partners or company-owned stores with independent policies and consolidated reporting at the brand level.",
      },
    ],
    extraFacts: [
      {
        heading: "Retail turnover and onboarding speed",
        body: "Front-line retail roles see annual turnover of 30–60%. Fast digital onboarding and mobile self-service reduce HR admin burden and keep stores staffed during peak trading periods.",
      },
    ],
  },

  "hrms-for-hospitality": {
    highlights: [
      "FOH and BOH shift scheduling",
      "Service charge and tip allocation",
      "Multi-outlet attendance tracking",
      "GCC end-of-service and gratuity",
    ],
    features: [
      {
        title: "Front and back-of-house scheduling",
        description:
          "Manage rotating shifts for reception, housekeeping, kitchen, and restaurant teams across hotel properties and restaurant outlets with overtime and holiday pay rules.",
      },
      {
        title: "Tip and service charge distribution",
        description:
          "Track service charge pools and distribute amounts by outlet, role, or hours worked — integrated alongside regular monthly payroll processing.",
      },
      {
        title: "Multi-property HR administration",
        description:
          "Group employees by hotel, resort, or restaurant brand with property-level attendance and payroll settings plus consolidated reporting for hospitality groups.",
      },
      {
        title: "GCC hospitality payroll",
        description:
          "Process WPS-compliant payroll with gratuity and end-of-service calculations for hospitality workers in UAE, Saudi Arabia, and other Gulf countries.",
      },
    ],
    compliancePoints: [
      "UAE WPS / MOHRE",
      "KSA GOSI",
      "India PF & ESI",
      "Gratuity & EOS",
      "Overtime regulations",
      "Holiday pay rules",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Hotels, restaurant chains, resort groups, and catering companies with shift-based teams operating 24/7 across India and GCC hospitality markets.",
      },
      {
        heading: "Hospitality HR workflows",
        body: "Build weekly shift rosters, track attendance across outlets, manage seasonal hiring for peak tourism periods, allocate service charges, run monthly payroll with overtime premiums, and process end-of-service for GCC hospitality staff.",
      },
      {
        heading: "Labour law alignment",
        body: "Hospitality employers must comply with working hour limits, overtime rules, and gratuity obligations that differ between India and Gulf labour laws. OfficeKit HR configures country-specific policies per property or outlet.",
      },
    ],
    extraFaqs: [
      {
        question: "Can employees swap shifts through self-service?",
        answer:
          "Yes. Shift swap requests route to managers for approval, with updated rosters reflected in attendance and payroll calculations automatically.",
      },
      {
        question: "Does OfficeKit support hotel groups with both India and UAE properties?",
        answer:
          "Yes. One platform manages India statutory payroll for domestic properties and UAE WPS payroll for Gulf hotels with consolidated group reporting.",
      },
    ],
    extraFacts: [
      {
        heading: "Seasonal hospitality workforce",
        body: "Tourism peaks in UAE and India drive seasonal hiring surges. Hospitality HRMS must onboard temporary staff quickly and process accurate final settlements when contracts end.",
      },
    ],
  },

  "hrms-for-manufacturing": {
    highlights: [
      "Face-Kit and biometric shop-floor attendance",
      "Multi-shift scheduling and overtime",
      "Contractor and temp worker management",
      "Production incentive pay components",
    ],
    features: [
      {
        title: "Shop-floor attendance at scale",
        description:
          "Deploy Face-Kit facial recognition or biometric devices at factory gates and production lines — handling thousands of blue-collar check-ins per day with shift validation.",
      },
      {
        title: "Shift and overtime management",
        description:
          "Configure rotating shifts, night-shift premiums, and overtime caps aligned to factory labour regulations across Indian states and GCC manufacturing zones.",
      },
      {
        title: "Contractor workforce tracking",
        description:
          "Manage contract labour, temporary workers, and agency staff with separate attendance rules, document tracking, and payroll components alongside permanent factory employees.",
      },
      {
        title: "Multi-plant consolidation",
        description:
          "Run payroll across manufacturing plants in different states or countries with plant-level cost centres and group-level compliance dashboards.",
      },
    ],
    compliancePoints: [
      "Factories Act alignment",
      "India PF & ESI",
      "Bonus Act",
      "Gratuity calculation",
      "UAE WPS",
      "Overtime & shift rules",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Manufacturing plants, industrial units, and production facilities with large blue-collar workforces, multi-shift operations, and plants across India and GCC free zones or industrial cities.",
      },
      {
        heading: "Factory HR workflows",
        body: "Schedule production shifts, capture shop-floor attendance via biometric or Face-Kit, calculate overtime and night premiums, manage contractor headcount, and run statutory payroll with bonus and gratuity provisions.",
      },
      {
        heading: "Blue-collar payroll complexity",
        body: "Manufacturing payroll involves shift differentials, production bonuses, contractor payments, and strict overtime rules. OfficeKit HR automates these calculations within India PF/ESI and GCC WPS compliance frameworks.",
      },
    ],
    extraFaqs: [
      {
        question: "Does OfficeKit integrate with existing factory biometric devices?",
        answer:
          "Yes. OfficeKit integrates with common biometric attendance hardware and Face-Kit for contactless check-in — syncing punch data to payroll and shift reports.",
      },
      {
        question: "Can production bonuses be tied to shift or output metrics?",
        answer:
          "Yes. Variable pay components for production targets, shift completion, or monthly output bonuses integrate into regular statutory payroll runs.",
      },
    ],
    extraFacts: [
      {
        heading: "Manufacturing attendance reliability",
        body: "Factory floors demand 99%+ attendance capture accuracy. Face-Kit and biometric integrations eliminate buddy punching and provide real-time visibility for plant managers and HR.",
      },
    ],
  },

  "hrms-for-education": {
    highlights: [
      "Academic term-based leave policies",
      "Faculty contract and tenure tracking",
      "Multi-campus employee management",
      "Qualification document vault",
    ],
    features: [
      {
        title: "Academic calendar leave",
        description:
          "Configure leave policies that follow semesters and academic terms rather than financial year cycles — with carry-over rules appropriate for teaching staff.",
      },
      {
        title: "Faculty contract management",
        description:
          "Track adjunct, visiting, and tenured faculty contracts with duration alerts, renewal workflows, and separate pay rules for permanent vs contractual staff.",
      },
      {
        title: "Multi-campus administration",
        description:
          "Manage employees across school branches, college campuses, or university departments with campus-level attendance and consolidated institution-wide payroll.",
      },
      {
        title: "Certification and qualification records",
        description:
          "Store teaching qualifications, NET/SET certificates, and professional credentials with expiry tracking for accreditation and compliance audits.",
      },
    ],
    compliancePoints: [
      "India PF & ESI",
      "Professional Tax",
      "TDS payroll",
      "Gratuity for long-serving faculty",
      "GCC payroll (international schools)",
      "Contract labour rules",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Schools, colleges, universities, training institutes, and international schools in India and the GCC managing diverse faculty types — permanent, adjunct, visiting, and administrative staff.",
      },
      {
        heading: "Education institution HR workflows",
        body: "Onboard faculty with qualification verification, track class-linked attendance, manage semester leave requests, process monthly payroll for teaching and non-teaching staff, and handle contract renewals for visiting lecturers.",
      },
      {
        heading: "Why academic HR differs from corporate HR",
        body: "Education institutions run on academic calendars, not financial years. Leave policies, contract structures, and faculty categories require HRMS configuration that standard corporate tools do not provide out of the box.",
      },
    ],
    extraFaqs: [
      {
        question: "Can OfficeKit handle exam-season temporary hiring?",
        answer:
          "Yes. Seasonal workers for exam invigilation or guest lectures can be onboarded with fixed-term contracts and processed through streamlined exit workflows after the academic event.",
      },
      {
        question: "Does OfficeKit support international schools in the UAE?",
        answer:
          "Yes. GCC payroll with WPS compliance supports international school staff in UAE and other Gulf countries alongside India campus payroll for multi-country education groups.",
      },
    ],
    extraFacts: [
      {
        heading: "Faculty diversity in education HR",
        body: "Institutions employ tenured professors, adjunct lecturers, lab assistants, and admin staff — each with different contracts, leave entitlements, and pay structures. Centralised HRMS simplifies this complexity.",
      },
    ],
  },

  "hrms-for-logistics": {
    highlights: [
      "GPS mobile attendance for drivers",
      "Warehouse multi-shift management",
      "Trip and distance-based pay",
      "Contractor and fleet staff tracking",
    ],
    features: [
      {
        title: "Field staff GPS attendance",
        description:
          "Drivers and delivery personnel check in via mobile at depots, dispatch points, or geo-fenced delivery zones — with route validation for trip-based payroll.",
      },
      {
        title: "Warehouse shift operations",
        description:
          "Manage 24/7 warehouse shifts with rotation schedules, overtime rules, and night-shift premiums for sorting, packing, and inventory teams.",
      },
      {
        title: "Trip-based pay components",
        description:
          "Configure per-trip, per-delivery, or distance-based pay alongside fixed salary — integrated into monthly statutory payroll without manual calculation.",
      },
      {
        title: "Multi-hub payroll",
        description:
          "Consolidate payroll across transport hubs, warehouses, and regional offices in India and GCC with location-specific compliance rules.",
      },
    ],
    compliancePoints: [
      "India PF & ESI",
      "Motor transport worker rules",
      "Bonus & gratuity",
      "UAE WPS",
      "Overtime regulations",
      "Contract labour compliance",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Logistics companies, courier services, warehousing operators, fleet operators, and supply chain firms with field-based drivers, warehouse staff, and multi-location operations across India and the Gulf.",
      },
      {
        heading: "Logistics HR workflows",
        body: "Track driver attendance on routes, schedule warehouse shifts, calculate trip-based earnings, manage high-churn entry-level roles with fast onboarding, and run multi-state or multi-country payroll monthly.",
      },
      {
        heading: "Field workforce compliance",
        body: "Logistics employers face unique challenges tracking workers who are never at a fixed desk. Mobile GPS attendance and trip-linked pay components address these needs while maintaining statutory compliance.",
      },
    ],
    extraFaqs: [
      {
        question: "Can OfficeKit validate driver trips for payroll?",
        answer:
          "Yes. Geo-fenced checkpoints at depots and delivery locations help validate trip attendance data before trip-based pay components are included in payroll.",
      },
      {
        question: "Does OfficeKit handle logistics companies with both India and GCC operations?",
        answer:
          "Yes. Multi-country payroll supports India statutory compliance and GCC WPS for logistics groups operating warehouses and fleet hubs in both regions.",
      },
    ],
    extraFacts: [
      {
        heading: "Logistics workforce churn",
        body: "Entry-level logistics roles see high turnover. Digital onboarding and mobile self-service reduce HR processing time and keep dispatch and warehouse operations staffed.",
      },
    ],
  },

  "hrms-for-bfsi": {
    highlights: [
      "Branch-level employee grouping",
      "Sales incentive and RM commissions",
      "Regulatory document management",
      "Call centre shift rostering",
    ],
    features: [
      {
        title: "Branch network management",
        description:
          "Organise employees by branch, region, and zone with independent attendance rules, reporting hierarchies, and payroll cost centres for large BFSI geographic footprints.",
      },
      {
        title: "Relationship manager incentives",
        description:
          "Configure commission structures, quarterly targets, and performance bonuses for relationship managers and sales teams — integrated into regular payroll runs.",
      },
      {
        title: "Regulatory compliance records",
        description:
          "Maintain background verification documents, role certifications, and audit-ready payroll registers required for banking and insurance regulatory inspections.",
      },
      {
        title: "Customer-facing shift management",
        description:
          "Schedule branch staff and call centre agents with roster rules, overtime caps, and holiday coverage aligned to financial sector working hour policies.",
      },
    ],
    compliancePoints: [
      "India PF & ESI",
      "Professional Tax",
      "TDS & Form 16",
      "UAE WPS",
      "KSA GOSI",
      "Audit-ready registers",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Banks, insurance companies, NBFCs, and financial services organisations with branch networks, call centres, and corporate offices across India and GCC financial hubs.",
      },
      {
        heading: "BFSI HR workflows",
        body: "Manage branch staff rotations, track RM performance incentives, maintain regulatory document records, run monthly statutory payroll across states, and consolidate compliance reporting for internal and external audits.",
      },
      {
        heading: "Financial sector compliance",
        body: "BFSI employers face stringent record-keeping for employee backgrounds, working hours, and payroll accuracy. OfficeKit HR provides document vaults, approval trails, and statutory reports that support regulatory requirements.",
      },
    ],
    extraFaqs: [
      {
        question: "Can OfficeKit segregate payroll by branch for cost allocation?",
        answer:
          "Yes. Branches function as cost centres with independent payroll reporting while HR maintains consolidated group-level dashboards.",
      },
      {
        question: "Does OfficeKit support insurance and banking companies in UAE free zones?",
        answer:
          "Yes. UAE WPS payroll supports mainland and free-zone entities with MOHRE-aligned salary processing and SIF file generation.",
      },
    ],
    extraFacts: [
      {
        heading: "BFSI branch network complexity",
        body: "Large banks and insurers operate hundreds of branches with different regional labour laws. Centralised HRMS with branch-level configuration reduces compliance risk and payroll errors.",
      },
    ],
  },

  "hrms-for-real-estate": {
    highlights: [
      "Agent commission payroll",
      "UAE WPS for property firms",
      "Mobile attendance at project sites",
      "Multi-branch sales team management",
    ],
    features: [
      {
        title: "Commission-based agent payroll",
        description:
          "Configure deal commissions, quarterly bonuses, and tiered incentive structures for sales agents and leasing consultants — processed within WPS-compliant payroll runs.",
      },
      {
        title: "UAE property sector WPS",
        description:
          "Generate WPS/SIF salary files for real estate brokerages and developers registered in UAE mainland and free zones, with gratuity and end-of-service calculations.",
      },
      {
        title: "Field agent attendance",
        description:
          "Sales agents check in via mobile GPS at project sites, showrooms, or branch offices — with geo-fencing configurable per development or sales territory.",
      },
      {
        title: "High-turnover sales onboarding",
        description:
          "Fast digital onboarding for agents with document collection, commission structure setup, and probation tracking — critical in high-churn real estate sales teams.",
      },
    ],
    compliancePoints: [
      "UAE WPS / MOHRE",
      "Gratuity & EOS",
      "India PF & ESI",
      "Professional Tax",
      "TDS payroll",
      "Commission tax handling",
    ],
    sections: [
      {
        heading: "Who this is for",
        body: "Property developers, real estate brokerages, facility management firms, and property consultancies with commission-based sales teams across UAE, India, and other GCC property markets.",
      },
      {
        heading: "Real estate HR workflows",
        body: "Onboard sales agents with commission agreements, track field attendance at project sites, calculate deal-based earnings monthly, file UAE WPS salary transfers, and process agent exits with gratuity settlements.",
      },
      {
        heading: "Property sector payroll in UAE",
        body: "UAE real estate firms must comply with WPS salary filing and gratuity obligations for all employees. OfficeKit automates SIF generation and end-of-service calculations alongside variable commission pay.",
      },
    ],
    extraFaqs: [
      {
        question: "Can commission structures vary by project or development?",
        answer:
          "Yes. Variable pay rules can be configured per team, project, or branch — allowing different commission rates for off-plan vs ready property sales.",
      },
      {
        question: "Does OfficeKit handle RERA-registered brokerage compliance in UAE?",
        answer:
          "OfficeKit maintains employee records, payroll registers, and document management that support brokerage HR compliance — with WPS filing for all registered agents on payroll.",
      },
    ],
    extraFacts: [
      {
        heading: "Real estate sales turnover",
        body: "Property sales teams experience high agent turnover. Streamlined onboarding and commission payroll reduce administrative friction and help brokerages retain top performers.",
      },
    ],
  },
};
