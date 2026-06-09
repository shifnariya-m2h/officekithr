export type AuthorityClusterConfig = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  pillarPages: { title: string; path: string; description: string }[];
};

export const AUTHORITY_CLUSTERS: Record<string, AuthorityClusterConfig> = {
  "payroll-compliance": {
    slug: "payroll-compliance",
    name: "Payroll & Statutory Compliance",
    description:
      "Comprehensive content cluster covering payroll processing, statutory deductions, and labour law compliance across India and the GCC—including PF, ESI, PT, TDS, WPS, GOSI, PIFSS, PASI, and SIO regulations for multi-country employers.",
    icon: "FileCheck",
    pillarPages: [
      {
        title: "India Payroll Compliance Guide",
        path: "/compliance/india-payroll-compliance",
        description: "PF, ESI, PT, TDS, gratuity, and bonus compliance for Indian employers.",
      },
      {
        title: "UAE Payroll Compliance Guide",
        path: "/compliance/uae-payroll-compliance",
        description: "WPS, MOHRE, gratuity, and pension for UAE mainland and free-zone entities.",
      },
      {
        title: "KSA Payroll Compliance Guide",
        path: "/compliance/ksa-payroll-compliance",
        description: "GOSI, ZATCA, Qiwa, and Saudi labour law compliance.",
      },
      {
        title: "Kuwait Payroll Compliance Guide",
        path: "/compliance/kuwait-payroll-compliance",
        description: "PIFSS contributions, end-of-service indemnity, and Kuwait Labour Law.",
      },
      {
        title: "Qatar Payroll Compliance Guide",
        path: "/compliance/qatar-payroll-compliance",
        description: "WPS Qatar, end-of-service gratuity, and Labour Law (Law 14/2004).",
      },
      {
        title: "Oman Payroll Compliance Guide",
        path: "/compliance/oman-payroll-compliance",
        description: "PASI social insurance and Labour Law (RD 35/2003) compliance.",
      },
      {
        title: "Bahrain Payroll Compliance Guide",
        path: "/compliance/bahrain-payroll-compliance",
        description: "SIO, LMRA, and Labour Law (Law 36/2012) compliance.",
      },
      {
        title: "Payroll & Compliance Feature",
        path: "/features/payroll-and-compliance",
        description: "OfficeKit HR payroll engine with multi-country statutory support.",
      },
      {
        title: "Best Payroll Software India",
        path: "/hrms-software-india",
        description: "India payroll software for SMEs with PF, ESI, PT, and TDS.",
      },
      {
        title: "Payroll Software UAE",
        path: "/payroll-software-uae",
        description: "UAE WPS-ready payroll and HRMS integration.",
      },
      {
        title: "Payroll Software KSA",
        path: "/solutions/payroll-software-ksa",
        description: "Saudi payroll software with GOSI and ZATCA compliance.",
      },
    ],
  },
  "hr-automation": {
    slug: "hr-automation",
    name: "HR Automation & AI",
    description:
      "Content cluster focused on AI-assisted HR workflows, HR automation tools, biometric attendance, and intelligent process optimisation for modern HR teams in India and the GCC.",
    icon: "Bot",
    pillarPages: [
      {
        title: "AI Pilot Feature",
        path: "/features/ai-pilot",
        description: "AI-powered HR workflow automation for leave, approvals, and reminders.",
      },
      {
        title: "AI HR Software GCC",
        path: "/solutions/ai-hr-software-gcc",
        description: "AI-assisted HR software for UAE, KSA, Kuwait, and Qatar employers.",
      },
      {
        title: "HR Automation AI Tools GCC",
        path: "/longtail/hr-automation-ai-tools-gcc",
        description: "Long-tail landing for AI HR tools across GCC countries.",
      },
      {
        title: "Face-Kit Biometric Attendance",
        path: "/features/attendance-and-leave",
        description: "Contactless face recognition attendance for high-volume workforces.",
      },
      {
        title: "Biometric Attendance System UAE",
        path: "/longtail/biometric-attendance-system-uae",
        description: "UAE attendance tracking with Face-Kit, biometric device, and mobile options.",
      },
      {
        title: "AI-Powered HR Blog",
        path: "/resources/blogs/aipowered",
        description: "Why embrace AI-powered features in HRMS for forward-thinking teams.",
      },
      {
        title: "HR Automation for GCC",
        path: "/solutions/ai-hr-software-gcc",
        description: "Drive efficiency across multi-country GCC operations with AI-assisted HR tools.",
      },
      {
        title: "Attendance Software UAE",
        path: "/attendance-software-uae",
        description: "UAE attendance tracking with biometric, mobile, and WPS payroll integration.",
      },
    ],
  },
  "employee-experience": {
    slug: "employee-experience",
    name: "Employee Experience & ESS",
    description:
      "Content cluster covering employee self-service, mobile HR apps, digital payslips, and engagement tools that improve the day-to-day experience for employees in India and GCC organisations.",
    icon: "Users",
    pillarPages: [
      {
        title: "Self-Service Portal Feature",
        path: "/features/self-service-portal",
        description: "Employee self-service for leave, payslips, profiles, and expense claims.",
      },
      {
        title: "Mobile App Feature",
        path: "/features/mobile-app",
        description: "iOS and Android apps for attendance, approvals, and HR tasks on the go.",
      },
      {
        title: "Employee Self-Service Portal India",
        path: "/longtail/employee-self-service-portal-india",
        description: "ESS portal for Indian employees: payslips, Form 16, and leave applications.",
      },
      {
        title: "HR Software Dubai",
        path: "/hr-software-dubai",
        description: "Dubai HR software with bilingual Arabic/English mobile ESS.",
      },
      {
        title: "HR Software Delhi",
        path: "/hr-software-dubai",
        description: "Delhi NCR HR software with comprehensive employee self-service.",
      },
      {
        title: "Mobile HRMS Security Blog",
        path: "/resources/blogs/mobileappupdates",
        description: "Mobile HRMS security and data protection best practices.",
      },
      {
        title: "Employee Management Feature",
        path: "/features/employee-management",
        description: "Centralised employee profiles, documents, and lifecycle management.",
      },
    ],
  },
  "recruitment-talent": {
    slug: "recruitment-talent",
    name: "Recruitment & Talent Management",
    description:
      "Content cluster focused on applicant tracking, recruitment automation, onboarding workflows, performance management, and talent retention strategies for growing organisations.",
    icon: "Search",
    pillarPages: [
      {
        title: "Recruitment Management Feature",
        path: "/features/recruitment-management",
        description: "ATS with job posts, pipelines, interviews, offers, and digital onboarding.",
      },
      {
        title: "Performance Appraisal Feature",
        path: "/features/performance-appraisal",
        description: "OKRs, review cycles, continuous feedback, and goal tracking.",
      },
      {
        title: "Quality vs Quantity Hiring Blog",
        path: "/resources/blogs/quality-vs-quantity-hiring",
        description: "Why quality hiring beats volume recruiting for long-term business growth.",
      },
      {
        title: "Performance Management Tools Blog",
        path: "/resources/blogs/performance-management-tools",
        description: "Advanced performance management features for improved retention and growth.",
      },
      {
        title: "Best HRMS India",
        path: "/hrms-software-india",
        description: "End-to-end HRMS with recruitment ATS and performance management modules.",
      },
    ],
  },
  "gcc-hr": {
    slug: "gcc-hr",
    name: "GCC HR & Workforce Management",
    description:
      "Comprehensive content cluster covering HR, payroll, attendance, and compliance across all GCC markets—UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain—for multi-country employers.",
    icon: "Globe",
    pillarPages: [
      {
        title: "Payroll Software UAE",
        path: "/payroll-software-uae",
        description: "UAE payroll with WPS, multi-currency, and employee self-service.",
      },
      {
        title: "Payroll Software KSA",
        path: "/solutions/payroll-software-ksa",
        description: "Saudi payroll software with GOSI and ZATCA compliance.",
      },
      {
        title: "HRMS Software Kuwait",
        path: "/solutions/hrms-software-kuwait",
        description: "Kuwait HRMS with PIFSS contributions and labour law compliance.",
      },
      {
        title: "Payroll Software Qatar",
        path: "/solutions/payroll-software-qatar",
        description: "Qatar payroll with WPS, gratuity, and labour law rules.",
      },
      {
        title: "HRMS Software Oman",
        path: "/solutions/hrms-software-oman",
        description: "Oman HRMS with PASI social insurance and labour law compliance.",
      },
      {
        title: "HRMS Software Bahrain",
        path: "/solutions/hrms-software-bahrain",
        description: "Bahrain HRMS with SIO, LMRA, and labour law support.",
      },
      {
        title: "WPS Compliance Software",
        path: "/wps-compliance-software",
        description: "UAE WPS salary file generation and MOHRE-aligned compliance workflows.",
      },
      {
        title: "AI HR Software GCC",
        path: "/solutions/ai-hr-software-gcc",
        description: "AI-assisted HR automation for multi-country GCC operations.",
      },
      {
        title: "Multi-Country Payroll GCC",
        path: "/longtail/multi-country-payroll-gcc",
        description: "Unified payroll processing for 6 GCC countries from one HRMS.",
      },
      {
        title: "HR Software UAE",
        path: "/hr-software-uae",
        description: "Unified HRMS, payroll, and WPS-ready compliance for UAE companies.",
      },
      {
        title: "HR Software Riyadh",
        path: "/hr-software-riyadh",
        description: "HR and workforce management for Riyadh and KSA entities.",
      },
    ],
  },
  "india-hr": {
    slug: "india-hr",
    name: "India HR & Payroll",
    description:
      "Content cluster dedicated to India-specific HR and payroll operations—covering statutory compliance (PF, ESI, PT, TDS), state-specific rules, HRMS adoption for SMEs, and expansion support for Indian companies growing into the GCC.",
    icon: "IndianRupee",
    pillarPages: [
      {
        title: "Best HRMS Software India",
        path: "/hrms-software-india",
        description: "India HRMS with recruitment, payroll, attendance, and ESS modules.",
      },
      {
        title: "Payroll Software Kerala",
        path: "/solutions/payroll-software-kerala",
        description: "Kerala-specific payroll with PT and Shops & Establishments compliance.",
      },
      {
        title: "India Payroll Compliance Guide",
        path: "/compliance/india-payroll-compliance",
        description: "Complete India payroll compliance: PF, ESI, PT, TDS, gratuity, bonus.",
      },
      {
        title: "Cloud HRMS for Small Business India",
        path: "/longtail/cloud-hrms-small-business-india",
        description: "Affordable cloud HR software for Indian SMEs with 10–100 employees.",
      },
      {
        title: "HRMS for Startups India",
        path: "/longtail/hrms-for-startups-india",
        description: "Startup-friendly HRMS with per-user pricing and modular features.",
      },
      {
        title: "Employee Self-Service Portal India",
        path: "/longtail/employee-self-service-portal-india",
        description: "ESS portal for Indian employees with payslips, leave, and Form 16.",
      },
      {
        title: "Payroll Outsourcing vs Software India",
        path: "/longtail/payroll-outsourcing-vs-software-india",
        description: "Compare outsourced payroll vs in-house software for Indian businesses.",
      },
      {
        title: "HR Software Kochi",
        path: "/hr-software-kochi",
        description: "Kochi and Kerala HRMS with local implementation support.",
      },
      {
        title: "Best Payroll Software India",
        path: "/hrms-software-india",
        description: "Statutory payroll automation for Indian finance and HR teams.",
      },
      {
        title: "HRMS Software India",
        path: "/hrms-software-india",
        description: "End-to-end HRMS with statutory payroll, attendance, and recruitment.",
      },
    ],
  },
};

export const AUTHORITY_CLUSTER_SLUGS = Object.keys(AUTHORITY_CLUSTERS);
