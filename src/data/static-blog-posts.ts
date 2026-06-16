/** Metadata for static blog routes — titles, excerpts, and schema fields. */
export type StaticBlogMeta = {
  path: string;
  title: string;
  description: string;
  headline: string;
  author: string;
  datePublished: string;
  image: string;
  readTime: string;
  category: string;
};

export const STATIC_BLOG_POSTS: Record<string, StaticBlogMeta> = {
  "/resources/blogs/hrblogs": {
    path: "/resources/blogs/hrblogs",
    title: "Remote Work HR Strategies 2026 | OfficeKit HR Blog",
    description:
      "Discover practical HR strategies for remote and hybrid teams in 2026 — engagement, compliance, payroll, and performance with modern HRMS tools.",
    headline: "The Future of Remote Work: HR Strategies for 2026 and Beyond",
    author: "Aiswarya K",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop",
    readTime: "5 min read",
    category: "HR Best Practices",
  },
  "/resources/blogs/performance-management-tools": {
    path: "/resources/blogs/performance-management-tools",
    title: "Performance Management Tools | OfficeKit HR Blog",
    description:
      "Learn why enhanced performance management tools improve retention, feedback cycles, and growth for modern HR teams.",
    headline: "Advanced Performance Management Features Released for HRMS",
    author: "Karthik",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
    readTime: "3 min read",
    category: "Product Updates",
  },
  "/resources/blogs/streamliningpayroll": {
    path: "/resources/blogs/streamliningpayroll",
    title: "Smarter Payroll Solutions | OfficeKit HR Blog",
    description:
      "How smarter payroll automation helps businesses pay accurately, stay compliant, and support financial health.",
    headline: "HRMS Launches Advanced Payroll Management Enhancements",
    author: "Nihal",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
    readTime: "8 min read",
    category: "Product Updates",
  },
  "/resources/blogs/mobileappupdates": {
    path: "/resources/blogs/mobileappupdates",
    title: "Mobile HRMS Security | OfficeKit HR Blog",
    description:
      "Why mobile HRMS security matters for payroll compliance, data protection, and preventing costly breaches.",
    headline:
      "Mobile App Updates: Enhanced Security Features and Data Protection for HRMS",
    author: "Karthik",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop",
    readTime: "4 min read",
    category: "Product Updates",
  },
  "/resources/blogs/navigatehybrid": {
    path: "/resources/blogs/navigatehybrid",
    title: "Hybrid Workplace HR Strategies | OfficeKit HR Blog",
    description:
      "HR and manager strategies for hybrid workplaces — attendance, payroll, engagement, and HRMS workflows.",
    headline:
      "Navigating the Hybrid Workplace with HRMS: Strategies for HR and Managers",
    author: "Arathi",
    datePublished: "2026-05-27",
    image:
      "https://media.istockphoto.com/id/641434530/photo/human-resources-management-app-concept-on-mobile-phone-screen.jpg?s=612x612&w=1200",
    readTime: "4 min read",
    category: "Product Updates",
  },
  "/resources/blogs/quality-vs-quantity-hiring": {
    path: "/resources/blogs/quality-vs-quantity-hiring",
    title: "Quality vs Quantity in Hiring | OfficeKit HR Blog",
    description:
      "Why quality hiring beats volume recruiting — cost savings, retention, and long-term business growth.",
    headline: "Quality vs. Quantity: Why the Right Hire Saves More Than You Think",
    author: "Aiswarya K",
    datePublished: "2026-05-27",
    image:
      "https://media.istockphoto.com/id/2124660831/photo/human-resources-management-concept-headhunters-recruit-employees-using-candidate-resumes.jpg?s=612x612&w=1200",
    readTime: "3 min read",
    category: "Product Updates",
  },
  "/resources/blogs/whyhrms": {
    path: "/resources/blogs/whyhrms",
    title: "Why Businesses Need an HRMS | OfficeKit HR Blog",
    description:
      "Why SMEs and enterprises need an HRMS in a competitive landscape — automation, compliance, and employee engagement.",
    headline: "Why Businesses Need an HRMS in Today's Competitive Landscape",
    author: "Aiswarya K",
    datePublished: "2026-05-27",
    image:
      "https://media.istockphoto.com/id/1346294817/photo/human-resource-hexagonal-touch-screen-concept.jpg?s=612x612&w=1200",
    readTime: "5 min read",
    category: "Product Updates",
  },
  "/resources/blogs/aipowered": {
    path: "/resources/blogs/aipowered",
    title: "AI-Powered HR Features | OfficeKit HR Blog",
    description:
      "How AI-powered HRMS features automate workflows and give forward-thinking organizations a strategic edge.",
    headline: "Why Embrace AI-Powered Features in HRMS?",
    author: "Karthik",
    datePublished: "2026-05-27",
    image:
      "https://media.istockphoto.com/id/1693321583/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-with-kpi-and-metrics.jpg?s=612x612&w=1200",
    readTime: "4 min read",
    category: "AI Updates",
  },
  "/resources/blogs/hrmssystem": {
    path: "/resources/blogs/hrmssystem",
    title: "Choosing an HRMS System | OfficeKit HR Blog",
    description:
      "A practical guide to evaluating and selecting the right HRMS for your business size, region, and compliance needs.",
    headline:
      "Why a Human Resource Management System (HRMS) Like OfficeKit HR is Essential for Modern Businesses",
    author: "Aiswarya K",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
    readTime: "6 min read",
    category: "HR Best Practices",
  },
  "/resources/blogs/realworld-dei": {
    path: "/resources/blogs/realworld-dei",
    title: "Real-World DEI in HR | OfficeKit HR Blog",
    description:
      "Practical DEI approaches for HR teams — inclusion, psychological safety, and measurable workplace outcomes.",
    headline: "Real World DEI: Actions That Drive Inclusion, Equity & Diversity",
    author: "Arathi",
    datePublished: "2026-05-27",
    image: "/recruitment-onboarding.webp",
    readTime: "5 min read",
    category: "Leadership & Culture",
  },
};
