import { BlogPost } from "@/types";
import { getPublishedArticles } from "@/data/article-posts";
import { blogImageForSlug } from "@/data/blog-images";

/** Map article categories to blog hub filter labels. */
const CATEGORY_LABELS: Record<string, string> = {
  Product: "Product Updates",
  Industry: "HR Best Practices",
  "GCC HR": "GCC Compliance",
  Security: "Compliance News",
  Compliance: "Compliance News",
  Payroll: "India Compliance",
  Recruitment: "HR Best Practices",
};

function normalizeCategory(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

/** Legacy static blog pages (React route components). */
const LEGACY_BLOG_POSTS: BlogPost[] = [
  {
    _id: "legacy-remote-work",
    title: "The Future of Remote Work: HR Strategies for 2026 and Beyond",
    excerpt:
      "Discover the latest trends and strategies for managing remote teams effectively in the evolving workplace landscape.",
    author: "Aiswarya K",
    createdAt: "2026-05-18",
    updates: "Remote Work",
    readTime: "5 min read",
    image: blogImageForSlug("hrblogs"),
    link: "/resources/blogs/hrblogs",
  },
  {
    _id: "legacy-performance",
    title: "Why Invest in Enhanced Performance Management Tools?",
    excerpt:
      "Modern enterprises thrive by equipping their HR departments with technology that fosters employee satisfaction and accelerates growth.",
    author: "Karthik",
    createdAt: "2026-05-12",
    updates: "Product Updates",
    readTime: "3 min read",
    image: blogImageForSlug("performance-management-tools"),
    link: "/resources/blogs/performance-management-tools",
  },
  {
    _id: "legacy-payroll",
    title: "Why Modern Businesses Need Smarter Payroll Solutions",
    excerpt:
      "Efficient payroll management ensures timely compensation, tax compliance, and stronger organizational financial health.",
    author: "Nihal",
    createdAt: "2026-05-05",
    updates: "Product Updates",
    readTime: "8 min read",
    image: blogImageForSlug("streamliningpayroll"),
    link: "/resources/blogs/streamliningpayroll",
  },
  {
    _id: "legacy-mobile",
    title: "Mobile App Updates: Why Businesses Should Prioritize Mobile HRMS Security?",
    excerpt:
      "Securing your mobile HRMS app protects sensitive employee data, payroll compliance, and prevents costly data breaches.",
    author: "Karthik",
    createdAt: "2026-04-28",
    updates: "Product Updates",
    readTime: "4 min read",
    image: blogImageForSlug("mobileappupdates"),
    link: "/resources/blogs/mobileappupdates",
  },
  {
    _id: "legacy-hybrid",
    title: "Navigating the Hybrid Workplace: Strategies for HR and Managers",
    excerpt:
      "Smart HR strategies and HRMS software to manage hybrid workplaces, streamline payroll, and boost employee engagement.",
    author: "Arathi",
    createdAt: "2026-04-20",
    updates: "Remote Work",
    readTime: "4 min read",
    image: blogImageForSlug("navigatehybrid"),
    link: "/resources/blogs/navigatehybrid",
  },
  {
    _id: "legacy-hiring",
    title: "Quality vs. Quantity: Why the Right Hire Saves More Than You Think",
    excerpt:
      "Recruitment is one of the most important jobs for HR. Choosing quality over quantity saves money, time, and builds long-term growth.",
    author: "Aiswarya K",
    createdAt: "2026-04-14",
    updates: "HR Best Practices",
    readTime: "3 min read",
    image: blogImageForSlug("quality-vs-quantity-hiring"),
    link: "/resources/blogs/quality-vs-quantity-hiring",
  },
  {
    _id: "legacy-whyhrms",
    title: "Why Businesses Need an HRMS in Today's Competitive Landscape",
    excerpt:
      "People management is becoming more challenging. Old-style HR methods no longer keep pace with modern business demands.",
    author: "Aiswarya K",
    createdAt: "2026-04-08",
    updates: "HR Best Practices",
    readTime: "5 min read",
    image: blogImageForSlug("whyhrms"),
    link: "/resources/blogs/whyhrms",
  },
  {
    _id: "legacy-ai",
    title: "Why Embrace AI-Powered Features in HRMS?",
    excerpt:
      "In today's digital workplace, AI is a strategic advantage. Forward-thinking organizations are enhancing HRMS with artificial intelligence.",
    author: "Karthik",
    createdAt: "2026-03-25",
    updates: "Product Updates",
    readTime: "4 min read",
    image: blogImageForSlug("aipowered"),
    link: "/resources/blogs/aipowered",
  },
  {
    _id: "legacy-dei",
    title: "Real World DEI: Actions That Drive Inclusion, Equity & Diversity",
    excerpt:
      "DEI means action — changing how things work, who is included, and how fair the system is for everyone.",
    author: "Aiswarya K",
    createdAt: "2026-03-18",
    updates: "Leadership & Culture",
    readTime: "5 min read",
    image: blogImageForSlug("realworld-dei"),
    link: "/resources/blogs/realworld-dei",
  },
  {
    _id: "legacy-hrmssystem",
    title: "Why OfficeKit HR is Essential for Modern Businesses",
    excerpt:
      "A unified HRMS helps growing companies manage recruitment, attendance, payroll, and compliance without spreadsheet chaos.",
    author: "Arathi",
    createdAt: "2026-03-10",
    updates: "Product Updates",
    readTime: "5 min read",
    image: blogImageForSlug("hrmssystem"),
    link: "/resources/blogs/hrmssystem",
  },
];

const seoArticles: BlogPost[] = getPublishedArticles().map((article) => ({
  _id: `seo-${article.slug}`,
  title: article.headline,
  excerpt: article.metaDescription,
  author: article.author,
  createdAt: article.datePublished,
  updates: normalizeCategory(article.category),
  readTime: article.readTime,
  image: blogImageForSlug(article.slug),
  link: article.path,
}));

function sortByDateDesc(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/** All blog listing cards — static only, no API. */
export const BLOG_LISTING_POSTS: BlogPost[] = sortByDateDesc([
  ...seoArticles,
  ...LEGACY_BLOG_POSTS,
]);

export const BLOG_CATEGORIES = [
  { label: "All Posts", shortLabel: "All", param: "" },
  { label: "HR Best Practices", shortLabel: "HR Tips", param: "HR Best Practices" },
  { label: "Product Updates", shortLabel: "Product", param: "Product Updates" },
  { label: "Compliance News", shortLabel: "Compliance", param: "Compliance News" },
  { label: "GCC Compliance", shortLabel: "GCC", param: "GCC Compliance" },
  { label: "India Compliance", shortLabel: "India", param: "India Compliance" },
  { label: "Leadership & Culture", shortLabel: "Culture", param: "Leadership & Culture" },
  { label: "Remote Work", shortLabel: "Remote", param: "Remote Work" },
  { label: "HR Trends", shortLabel: "Trends", param: "HR Trends" },
] as const;
