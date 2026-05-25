/** Shared homepage FAQs — used in UI accordion and FAQPage JSON-LD. */
export type HomeFaq = {
  question: string;
  answer: string;
  image?: string;
};

export const HOME_SEO_FAQS: HomeFaq[] = [
  {
    question: "What is OfficeKit HR?",
    answer:
      "OfficeKit HR is an AI-powered HRMS platform for recruitment, attendance, payroll, performance management, and employee self-service across India and the GCC.",
  },
  {
    question: "Which countries does OfficeKit HR support?",
    answer:
      "OfficeKit HR supports businesses in India, UAE, Kuwait, Saudi Arabia, and Qatar with localized payroll and compliance workflows.",
  },
  {
    question: "Does OfficeKit HR include a mobile app?",
    answer:
      "Yes. Employees and managers can use the OfficeKit mobile app for attendance, leave, approvals, and payslips on iOS and Android.",
  },
  {
    question: "Is OfficeKit HR suitable as payroll software in the UAE?",
    answer:
      "Yes. OfficeKit supports UAE payroll with WPS-aligned workflows. See /solutions/payroll-software-uae and /solutions/wps-compliance-software.",
  },
  {
    question: "How does OfficeKit compare to greytHR?",
    answer:
      "OfficeKit HR is often evaluated as a greytHR alternative for teams needing GCC payroll, WPS, and AI automation. See /compare/greythr-alternative.",
  },
];

export const HOME_PRODUCT_FAQS: HomeFaq[] = [
  {
    question: "Recruitment & Onboarding",
    answer:
      "Slow hiring and messy onboarding lose great talent. OfficeKit HR streamlines recruitment and onboarding, helping you hire faster and get employees productive from day one.",
    image: "/recruitment-onboarding.webp",
  },
  {
    question: "Core HR",
    answer:
      "Managing employee data manually is time-consuming and error-prone. OfficeKit HR centralizes records and automates tasks—so HR runs smoothly and accurately.",
    image: "/corehr.webp",
  },
  {
    question: "Payroll & Compliance",
    answer:
      "Payroll mistakes and compliance risks drain trust and time. OfficeKit HR ensures accurate salaries, timely payments, and full compliance—without the stress.",
    image: "/payroll-comp.webp",
  },
  {
    question: "Performance & Growth",
    answer:
      "Unclear goals and vague reviews limit growth. OfficeKit HR streamlines performance tracking and feedback, helping teams achieve more with clarity.",
    image: "/perfo-growth.webp",
  },
  {
    question: "Operations & Support",
    answer:
      "Scattered processes and delayed support frustrate employees. OfficeKit HR simplifies operations and provides instant support—keeping your workforce engaged and productive.",
    image: "/operation-support.webp",
  },
];

export const HOME_ALL_FAQS: HomeFaq[] = [...HOME_SEO_FAQS, ...HOME_PRODUCT_FAQS];
