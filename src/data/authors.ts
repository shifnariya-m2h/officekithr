export type AuthorConfig = {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  social?: { linkedin?: string; twitter?: string };
  articles: { title: string; path: string }[];
};

export const AUTHORS: Record<string, AuthorConfig> = {
  "aiswarya-k": {
    name: "Aiswarya K",
    title: "HR Content Specialist",
    bio: "Aiswarya writes about HR best practices, recruitment strategies, and workforce management for OfficeKit HR. She covers trends shaping the future of HR in India and the GCC.",
    articles: [
      { title: "Remote Work HR Strategies 2026", path: "/resources/blogs/hrblogs" },
      { title: "Quality vs Quantity in Hiring", path: "/resources/blogs/quality-vs-quantity-hiring" },
      { title: "Why Businesses Need an HRMS", path: "/resources/blogs/whyhrms" },
      { title: "Choosing an HRMS System", path: "/resources/blogs/hrmssystem" },
    ],
  },
  karthik: {
    name: "Karthik",
    title: "Product Marketing Manager",
    bio: "Karthik covers OfficeKit HR product updates, performance management, and AI-powered HR features. He helps businesses understand how technology transforms HR operations.",
    articles: [
      { title: "Performance Management Tools", path: "/resources/blogs/performance-management-tools" },
      { title: "Mobile HRMS Security", path: "/resources/blogs/mobileappupdates" },
      { title: "AI-Powered HR Features", path: "/resources/blogs/aipowered" },
    ],
  },
  nihal: {
    name: "Nihal",
    title: "Payroll & Compliance Analyst",
    bio: "Nihal specialises in payroll compliance, statutory regulations, and WPS systems for India and the GCC. His guides help finance teams navigate complex payroll rules.",
    articles: [
      { title: "Smarter Payroll Solutions", path: "/resources/blogs/streamliningpayroll" },
    ],
  },
  arathi: {
    name: "Arathi",
    title: "HR Strategy Consultant",
    bio: "Arathi advises on hybrid workplace strategies, DEI initiatives, and organisational culture. She brings practical experience to OfficeKit HR's content on people management.",
    articles: [
      { title: "Hybrid Workplace HR Strategies", path: "/resources/blogs/navigatehybrid" },
      { title: "Real-World DEI in HR", path: "/resources/blogs/realworld-dei" },
    ],
  },
};
