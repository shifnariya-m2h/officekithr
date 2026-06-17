/** Shared FAQ types — homepage uses a short set; /faq uses the full library. */
export type HomeFaq = {
  question: string;
  answer: string;
  bullets?: string[];
  ordered?: boolean;
};

export type HomeFaqCategory = {
  id: string;
  label: string;
  faqs: HomeFaq[];
};

/** Lean homepage FAQs — high-intent questions only; full list lives on /faq. */
export const HOME_FAQ_CATEGORIES: HomeFaqCategory[] = [
  {
    id: "overview",
    label: "Overview",
    faqs: [
      {
        question: "What is OfficeKit HR?",
        answer:
          "OfficeKit HR is an AI-powered HRMS for growing businesses in India and the GCC. It unifies recruitment, attendance, leave, payroll, performance, and employee self-service on one platform — from hire to retire.",
      },
      {
        question: "Who is OfficeKit HR built for?",
        answer:
          "Startups, SMEs, and mid-market companies with 50–2,000+ employees — especially teams running multi-branch or multi-country operations across India, UAE, Saudi Arabia, Kuwait, Qatar, and other GCC markets.",
      },
      {
        question: "Is OfficeKit HR suitable for multi-location businesses?",
        answer:
          "Yes. You can run location-specific leave rules, shifts, holiday calendars, and payroll policies while keeping employee records and reporting centralized for HR leadership.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    faqs: [
      {
        question: "Does OfficeKit HR support UAE WPS and GCC payroll?",
        answer:
          "Yes. OfficeKit generates WPS-compliant salary files (SIF) for the UAE, Saudi Arabia, and other GCC countries, with localized payroll workflows built in — no separate WPS add-on required.",
      },
      {
        question: "Can one HRMS handle India and GCC payroll together?",
        answer:
          "Yes. OfficeKit runs India statutory payroll (PF, ESI, PT, TDS) and GCC payroll (WPS, GOSI, and local schemes) on one platform — ideal for companies with India HQ and Gulf subsidiaries.",
      },
      {
        question: "How does statutory compliance work for India?",
        answer:
          "Indian payroll covers PF, ESI, Professional Tax, and TDS with audit-ready reports. Calculations pull from attendance and leave data so month-end runs need less manual reconciliation.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Get started",
    faqs: [
      {
        question: "How much does OfficeKit HR cost?",
        answer:
          "Plans start from ₹99 or AED 15 per user per month (Silver tier). Gold and Platinum add advanced modules like performance, multi-company, and travel. See our pricing page or book a demo for a tailored quote.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a free demo on our website. Our implementation team helps with data migration, policy setup, and training. Ongoing support is available via email, chat, and phone.",
      },
    ],
  },
];

/** Full FAQ library for /faq — organized by topic, no duplicate product copy. */
export const FAQ_PAGE_CATEGORIES: HomeFaqCategory[] = [
  {
    id: "general",
    label: "General",
    faqs: [
      {
        question: "What is OfficeKit HR?",
        answer:
          "OfficeKit HR is an AI-powered HRMS that automates recruitment, onboarding, attendance, leave, payroll, performance, and exit on one platform — built for growing businesses in India and the GCC.",
      },
      {
        question: "Who is OfficeKit HR built for?",
        answer:
          "Startups, SMEs, and mid-market companies with 50–2,000+ employees that need unified HR and payroll instead of spreadsheets or disconnected tools.",
      },
      {
        question: "Is OfficeKit HR suitable for multi-location businesses?",
        answer:
          "Yes. Manage branches, stores, or project sites from one dashboard with location-specific shifts, leave rules, and holiday calendars — while leadership sees consolidated reports.",
      },
      {
        question: "Is OfficeKit HR an HRMS or payroll software?",
        answer:
          "Both. OfficeKit is a full HRMS with native payroll for India and GCC countries — you do not need a separate payroll add-on for WPS, PF, ESI, or statutory filings.",
      },
    ],
  },
  {
    id: "india-gcc",
    label: "India & GCC",
    faqs: [
      {
        question: "Which countries does OfficeKit HR support?",
        answer:
          "OfficeKit supports India, UAE, Saudi Arabia, Kuwait, Qatar, Oman, and Bahrain — with localized payroll, statutory compliance, and employee self-service for each market.",
      },
      {
        question: "What is the best HRMS software for companies in India?",
        answer:
          "For Indian SMEs and mid-market firms, a strong HRMS should cover PF, ESI, Professional Tax, TDS, attendance, leave, and payroll in one system. OfficeKit HR is built for this — with modular pricing from ₹99 per user/month and no third-party payroll plugins.",
      },
      {
        question: "Does OfficeKit HR support UAE payroll and WPS compliance?",
        answer:
          "Yes. OfficeKit generates WPS-compliant SIF bank files for UAE salary transfers, handles gratuity and end-of-service calculations, and includes WPS workflows in payroll — not as a paid add-on.",
      },
      {
        question: "Can one HRMS run payroll in both India and the GCC?",
        answer:
          "Yes. Companies with India headquarters and Gulf subsidiaries use OfficeKit to run PF/ESI/TDS payroll for Indian entities and WPS/GOSI payroll for GCC entities on one platform, with shared employee records and group-level reporting.",
      },
      {
        question: "Does OfficeKit support Saudi Arabia payroll and GOSI?",
        answer:
          "Yes. Saudi payroll includes GOSI contribution calculations, WPS-compliant salary processing, and end-of-service benefits — aligned with Kingdom labour regulations.",
      },
      {
        question: "What Indian statutory compliance does OfficeKit automate?",
        answer: "Indian payroll covers:",
        bullets: [
          "Provident Fund (PF) and Employee State Insurance (ESI) deductions and filings.",
          "Professional Tax (PT) across applicable states.",
          "Income tax (TDS) and Form 16 generation.",
          "Gratuity provisions and audit-ready statutory reports.",
        ],
      },
      {
        question: "What is WPS and how does OfficeKit help UAE employers?",
        answer:
          "WPS (Wage Protection System) requires UAE employers to pay salaries through approved bank channels using compliant SIF files. OfficeKit automates SIF file generation, salary disbursement tracking, and WPS reporting so you avoid MOHRE penalties and failed transfers.",
      },
      {
        question: "Does OfficeKit support Kuwait, Qatar, Oman, and Bahrain payroll?",
        answer:
          "Yes. GCC payroll extends to Kuwait (PIFSS), Qatar (WPS), Oman (PASI), and Bahrain (SIO) with localized statutory deductions, gratuity rules, and compliant salary files for each country.",
      },
      {
        question: "Is OfficeKit HR a greytHR or Keka alternative for Indian SMEs?",
        answer:
          "OfficeKit is a strong alternative for Indian SMEs that also operate in the GCC. Unlike India-only HRMS tools, OfficeKit unifies India statutory payroll and Gulf WPS compliance on one platform — with AI automation, Face-Kit attendance, and modular per-user pricing.",
      },
      {
        question: "Does OfficeKit support Arabic and English for GCC employees?",
        answer:
          "Yes. Employee self-service supports English and Arabic — essential for UAE and wider GCC workforces where staff and managers need bilingual access to payslips, leave, policies, and approvals.",
      },
      {
        question: "Can OfficeKit calculate UAE gratuity and end-of-service benefits?",
        answer:
          "Yes. Gratuity and end-of-service settlements are calculated based on tenure, salary components, and UAE labour law rules — and flow into full-and-final payroll processing at exit.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    faqs: [
      {
        question: "What plans does OfficeKit HR offer?",
        answer:
          "Three tiers — Silver, Gold, and Platinum — priced per active user per month. Silver covers core HR essentials; Gold adds multi-company, claims, and performance; Platinum includes travel, training, and grievance modules.",
      },
      {
        question: "How much does OfficeKit HR cost?",
        answer:
          "Silver starts from ₹99 or AED 15 per user/month. Gold from ₹149 or AED 22. Platinum from ₹199 or AED 30. Final pricing depends on team size and enabled modules.",
      },
      {
        question: "Is pricing based on the number of employees?",
        answer:
          "Yes. Pricing is per active user per month. You only pay for modules you enable — recruitment, payroll, attendance, performance, and more can be switched on as you grow.",
      },
      {
        question: "Can I customize OfficeKit HR to fit our needs?",
        answer:
          "Yes. OfficeKit is modular. Enable the HR, payroll, attendance, and compliance workflows you need today and add modules later without replacing your core system.",
      },
      {
        question: "Do you offer cloud and on-premise deployment?",
        answer:
          "Yes. Choose cloud, on-premise, or hybrid deployment depending on your IT and data-residency requirements.",
      },
      {
        question: "Are volume discounts available?",
        answer:
          "Yes. Organizations with 200+ employees receive volume pricing. Contact our sales team for a custom quote.",
      },
      {
        question: "Is there a free demo available?",
        answer:
          "Yes. Book a free demo to see payroll, attendance, and compliance workflows configured for your region — no commitment required.",
      },
    ],
  },
  {
    id: "modules",
    label: "HR Modules",
    faqs: [
      {
        question: "Does OfficeKit include applicant tracking?",
        answer:
          "Yes. Recruiters manage job posts, candidate pipelines, interview scheduling, and offer letters in one ATS. Hired candidates flow directly into onboarding and core HR records.",
      },
      {
        question: "Can onboarding be automated after hire?",
        answer:
          "Yes. New hires receive structured checklists for document collection, policy acknowledgements, asset assignment, and role setup — reducing manual HR follow-ups.",
      },
      {
        question: "What employee data is centralized in OfficeKit?",
        answer:
          "Core HR stores profiles, documents, org structure, employment history, compensation, and lifecycle events in one system of record accessible to authorized roles only.",
      },
      {
        question: "What can employees do in the self-service portal?",
        answer:
          "Employees view payslips, apply for leave, check attendance, update profiles, submit HR requests, and access company policies — without waiting on HR for routine tasks.",
      },
      {
        question: "Does OfficeKit support OKRs and performance reviews?",
        answer:
          "Yes. Run scheduled appraisal cycles, continuous feedback, and goal tracking aligned to company OKRs. Managers get data-backed review drafts with the AI Review Co-Pilot.",
      },
      {
        question: "Does OfficeKit handle employee exit and full-and-final settlement?",
        answer:
          "Yes. Exit workflows cover resignation processing, clearance checklists, asset return, and full-and-final settlement calculations tied to payroll.",
      },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    faqs: [
      {
        question: "How does OfficeKit HR track employee attendance?",
        answer: "Multiple capture methods work side by side:",
        ordered: true,
        bullets: [
          "Biometric devices — real-time sync from eSSL and compatible hardware across branches.",
          "Geo-fencing and geo-tagging — mobile check-in for field and remote teams within defined boundaries.",
          "Face Kit — facial recognition for touchless attendance.",
          "Web check-in — clock in/out through the employee self-service portal.",
        ],
      },
      {
        question: "Are shift and overtime rules configurable?",
        answer:
          "Yes. Define rotating shifts, night shifts, grace periods, break rules, and overtime policies by department or location. Overtime hours auto-calculate from attendance logs against assigned shifts.",
      },
      {
        question: "Can we configure custom leave policies?",
        answer:
          "Yes. Set up leave types (casual, sick, earned, maternity, unpaid, and more) with entitlement rules, accrual rates, and carry-forward limits per department, role, or geography.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    faqs: [
      {
        question: "Can OfficeKit handle multi-company or holding-group payroll?",
        answer:
          "Yes. Gold and Platinum plans support multi-company structures — run separate payroll entities, policies, and reports while sharing a unified HR database.",
      },
      {
        question: "Does payroll sync with attendance and leave automatically?",
        answer:
          "Yes. Pay runs pull approved leave, overtime, and attendance data directly from the HRMS — reducing manual exports and reconciliation every month.",
      },
      {
        question: "Can it handle complex shift rotations and overtime in payroll?",
        answer:
          "Yes. Shift schedules cross-reference biometric and mobile attendance logs. Approved overtime flows into payroll calculations without spreadsheet work.",
      },
      {
        question: "Does OfficeKit support reimbursements and salary advances?",
        answer:
          "Yes. Gold and Platinum plans include claims, reimbursements, and salary advance workflows with manager approvals — integrated into monthly payroll runs.",
      },
      {
        question: "Can employees download payslips and tax documents?",
        answer:
          "Yes. Employees access digital payslips, Form 16 (India), and salary certificates through self-service on web and mobile — anytime, without HR intervention.",
      },
    ],
  },
  {
    id: "ai-mobile",
    label: "AI & Mobile",
    faqs: [
      {
        question: 'What makes OfficeKit HR "AI-powered"?',
        answer:
          "OfficeKit applies AI across HR operations — not just as a chatbot:",
        bullets: [
          "Smart Payroll Auditing — flags anomalies and entry errors before you process a run.",
          "Predictive Insights — surfaces early burnout and attrition risk signals from attendance patterns.",
          "Review Co-Pilot — drafts objective, data-backed performance reviews for managers.",
          "AI Pilot — conversational assistant for policy questions and HR workflow guidance.",
        ],
      },
      {
        question: "What is Face Kit?",
        answer:
          "Face Kit is OfficeKit's facial recognition module for touchless attendance capture. It integrates with attendance policies and payroll the same way biometric devices do.",
      },
      {
        question: "Is there a mobile app for iOS and Android?",
        answer:
          "Yes. The OfficeKit app covers attendance, leave, approvals, payslips, expense claims, and travel requests for employees and managers on the go.",
      },
      {
        question: "What can managers do via the mobile app?",
        answer:
          "Managers approve or reject leave, attendance regularizations, salary advances, and travel requests with push notifications — no need to log in from a desktop.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    faqs: [
      {
        question: "Is our payroll and employee data secure?",
        answer:
          "OfficeKit uses encryption at rest and in transit, with role-based access controls so employees, managers, and HR admins only see data they are authorized to view.",
      },
      {
        question: "Can OfficeKit HR integrate with our existing software?",
        answer:
          "Yes. Open APIs connect biometric hardware, accounting systems, and ERP platforms so HR data flows across your existing business stack.",
      },
      {
        question: "Where is customer data hosted?",
        answer:
          "Cloud deployments use secure, region-appropriate infrastructure. On-premise and hybrid options are available for organizations with specific data-residency requirements.",
      },
      {
        question: "What support do you provide after go-live?",
        answer:
          "Dedicated onboarding assistance, data migration help, team training, and ongoing support via email, live chat, and phone. Enterprise customers can access priority support.",
      },
    ],
  },
];

export const HOME_ALL_FAQS: HomeFaq[] = HOME_FAQ_CATEGORIES.flatMap(
  (category) => category.faqs
);

export const FAQ_PAGE_ALL_FAQS: HomeFaq[] = FAQ_PAGE_CATEGORIES.flatMap(
  (category) => category.faqs
);

/** Plain-text answer for FAQPage JSON-LD. */
export function homeFaqToSchemaAnswer(faq: HomeFaq): string {
  if (!faq.bullets?.length) return faq.answer;
  const list = faq.bullets.join(" ");
  return `${faq.answer} ${list}`;
}
