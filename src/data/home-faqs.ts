/** Shared homepage FAQs — used in UI accordion and FAQPage JSON-LD. */
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

export const HOME_FAQ_CATEGORIES: HomeFaqCategory[] = [
  {
    id: "general",
    label: "General",
    faqs: [
      {
        question: "What is OfficeKit HR?",
        answer:
          "OfficeKit HR is an end-to-end, AI-powered Human Resource Management System (HRMS) designed to automate the entire employee lifecycle—from hire to retire. Built specifically for growing startups, SMEs, and mid-market enterprises across India and the GCC region, we streamline recruitment, attendance, leave, payroll, and performance management into a single, cohesive platform.",
      },
      {
        question: "Is OfficeKit HR suitable for multi-location businesses?",
        answer:
          "Yes, absolutely. OfficeKit HR is built to handle complex, distributed workforces. Whether you have multiple branches, retail stores, or remote teams across India, the UAE, Saudi Arabia, Kuwait, and other GCC countries, the platform centralizes all employee data while allowing location-specific policies.",
      },
      {
        question: "Do employees get a mobile application?",
        answer:
          "Yes, the OfficeKit App is available for both iOS and Android. It features a modern, intuitive dashboard where employees can check in/out, view pay slips, track their leave balances, apply for travel reimbursements, and submit expense claims.",
      },
      {
        question: "What can managers do via the mobile app?",
        answer:
          "Heads of Departments (HODs) and managers can review, approve, or reject employee requests (leave applications, attendance regularizations, salary advances, and travel logs) on the go with real-time push notifications.",
      },
    ],
  },
  {
    id: "ai-features",
    label: "AI Features",
    faqs: [
      {
        question: 'What makes OfficeKit HR "AI-Powered"?',
        answer:
          "Unlike traditional HR software that simply stores data, OfficeKit HR uses an intelligent layer to analyze workforce patterns. Our built-in AI tools include:",
        bullets: [
          "Smart Payroll Auditing: Automatically catches payroll anomalies or manual entry errors before you execute a run.",
          "Predictive Insights: Flags early burnout signals and potential employee flight risks based on attendance velocities and tenure data.",
          "Review Co-Pilot: Helps managers draft objective, data-backed performance reviews in seconds.",
          "Policy Chatbot: An internal conversational assistant that answers routine employee policy questions instantly.",
        ],
      },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    faqs: [
      {
        question: "How does OfficeKit HR track employee attendance?",
        answer: "We offer complete flexibility with multiple capture methods:",
        ordered: true,
        bullets: [
          "Biometric Device Integration: Real-time data pulling from physical eSSL/biometric hardware across all your branches.",
          "Geo-Fencing & Geo-Tagging: Perfect for remote or field teams checking in via our mobile app within designated boundaries.",
          "Web Check-ins: Simple clock-in/out functionality through the Employee Self-Service (ESS) web portal.",
        ],
      },
      {
        question: "Can we configure custom leave policies?",
        answer:
          "Yes. You can fully customize leave types (Casual, Sick, Earned, Maternity, Unpaid, etc.) and assign specific entitlement rules, accrual rates, and carry-over limits based on the employee's department, role, or geographic location.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Payroll & Compliance",
    faqs: [
      {
        question: "Does OfficeKit HR support WPS compliance for the UAE and GCC?",
        answer:
          "Yes. OfficeKit HR is fully compliant with the Wage Protection System (WPS) in the UAE, Saudi Arabia, and other GCC nations. The platform automatically generates compliant bank files (SIF) to ensure flawless monthly salary transfers.",
      },
      {
        question: "How does the system handle statutory compliance in India?",
        answer:
          "For Indian businesses, OfficeKit HR automates all local statutory deductions and compliance reporting, including PF (Provident Fund), ESI, Professional Tax (PT), and TDS/Income Tax calculations, making your year-end tax filings stress-free.",
      },
      {
        question: "Can it handle complex shift rotations and overtime calculations?",
        answer:
          "Yes. The platform includes a robust Shift Management engine. It allows you to schedule rotating shifts, night shifts, and breaks. The system automatically calculates precise overtime hours by cross-referencing biometric logs against assigned shift policies, feeding the data directly into payroll.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    faqs: [
      {
        question: "Is our sensitive payroll and employee data secure?",
        answer:
          "Data security is our top priority. OfficeKit HR utilizes bank-grade encryption for data both at rest and in transit. Role-based access controls (RBAC) ensure that managers, HR admins, and employees only see the specific information they are authorized to access.",
      },
      {
        question: "Can OfficeKit HR integrate with our existing software?",
        answer:
          "Yes. OfficeKit HR features open APIs and seamlessly integrates with standard biometric hardware, accounting software, and external ERP systems to ensure data flows smoothly across your business infrastructure.",
      },
      {
        question: "How do we get started, and what kind of support do you provide?",
        answer:
          "You can book a free 30-minute consultation or request a live demo directly on our website. Once you choose a plan, our dedicated implementation team will assist you with onboarding, migrating your historical data, and training your team. We provide ongoing support via email, live chat, and phone.",
      },
    ],
  },
];

export const HOME_ALL_FAQS: HomeFaq[] = HOME_FAQ_CATEGORIES.flatMap(
  (category) => category.faqs
);

/** Plain-text answer for FAQPage JSON-LD. */
export function homeFaqToSchemaAnswer(faq: HomeFaq): string {
  if (!faq.bullets?.length) return faq.answer;
  const list = faq.bullets.join(" ");
  return `${faq.answer} ${list}`;
}
