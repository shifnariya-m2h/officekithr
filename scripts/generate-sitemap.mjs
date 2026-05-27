/**
 * Build-time SEO assets: sitemap, robots, blog manifest, prerender route list.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { loadViteEnv } from "./load-env.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const SCRIPTS = join(ROOT, "scripts");
const SITE = loadViteEnv(ROOT, "VITE_SITE_URL", "https://www.officekithr.com").replace(
  /\/$/,
  ""
);
const today = new Date().toISOString().split("T")[0];

const STATIC_PATHS = [
  "/",
  "/about-us",
  "/pricing",
  "/contact",
  "/features/recruitment-management",
  "/features/attendance-and-leave",
  "/features/payroll-and-compliance",
  "/features/performance-appraisal",
  "/features/self-service-portal",
  "/features/exit-management",
  "/features/mobile-app",
  "/features/employee-management",
  "/features/face-kit",
  "/features/ai-pilot",
  "/resources/blogs",
  "/resources/use-cases",
  "/resources/community",
  "/resources/guides",
  "/privacy-policy",
  "/terms-and-condition",
  "/cookie-policy",
  "/ae",
  "/solutions",
  "/solutions/best-hrms-software-india",
  "/solutions/payroll-software-uae",
  "/solutions/wps-compliance-software",
  "/solutions/ai-hr-software-gcc",
  "/solutions/payroll-software-ksa",
  "/solutions/hrms-software-kuwait",
  "/solutions/payroll-software-qatar",
  "/solutions/hrms-software-oman",
  "/solutions/hrms-software-bahrain",
  "/solutions/payroll-software-kerala",
  "/compare",
  "/compare/greythr-alternative",
  "/compare/keka-alternative",
  "/compare/zoho-people-alternative",
  "/compare/factohr-alternative",
  "/compare/officenet-alternative",
  "/compare/pockethrms-alternative",
  "/compliance",
  "/compliance/india-payroll-compliance",
  "/compliance/uae-payroll-compliance",
  "/compliance/ksa-payroll-compliance",
  "/compliance/kuwait-payroll-compliance",
  "/compliance/qatar-payroll-compliance",
  "/compliance/oman-payroll-compliance",
  "/compliance/bahrain-payroll-compliance",
  "/hr-software-uae",
  "/payroll-software-uae",
  "/hrms-software-india",
  "/wps-compliance-software",
  "/best-payroll-software-india",
  "/best-hrms-for-construction",
  "/officekit-vs-keka",
  "/officekit-vs-greythr",
  "/hr-software-dubai",
  "/hr-software-riyadh",
  "/hr-software-kochi",
  "/hr-software-healthcare",
  "/payroll-software-india",
  "/attendance-software-uae",
  "/resources/blogs/hrblogs",
  "/resources/blogs/performance-management-tools",
  "/resources/blogs/streamliningpayroll",
  "/resources/blogs/mobileappupdates",
  "/resources/blogs/navigatehybrid",
  "/resources/blogs/quality-vs-quantity-hiring",
  "/resources/blogs/whyhrms",
  "/resources/blogs/aipowered",
  "/resources/blogs/hrmssystem",
  "/resources/blogs/realworld-dei",
  "/longtail/cloud-hrms-small-business-india",
  "/longtail/best-payroll-software-uae-dubai",
  "/longtail/hr-automation-ai-tools-gcc",
  "/longtail/employee-self-service-portal-india",
  "/longtail/wps-payroll-software-dubai",
  "/longtail/hrms-for-startups-india",
  "/longtail/biometric-attendance-system-uae",
  "/longtail/payroll-outsourcing-vs-software-india",
  "/longtail/gratuity-calculation-software-uae",
  "/longtail/multi-country-payroll-gcc",
  "/longtail/top-hrms-in-india",
  "/longtail/hrms-uae",
  "/longtail/best-hr-software-in-dubai",
  "/longtail/top-hrms-in-gcc",
  "/longtail/best-hrms-in-middle-east",
  "/longtail/hrms-saudi-arabia",
  "/longtail/attendance-software-india",
  "/longtail/best-hrms-for-startups-india",
  "/longtail/employee-management-software-india",
  "/longtail/payroll-software-gcc",
  "/solutions/hrms-software-bangalore",
  "/solutions/hrms-software-chennai",
  "/solutions/hrms-software-hyderabad",
  "/solutions/payroll-software-mumbai",
  "/solutions/hrms-software-delhi-ncr",
  "/compare/darwinbox-alternative",
  "/compare/bamboohr-alternative",
  "/compare/bayzat-alternative",
  "/compare/zenhr-alternative",
  "/compare/gulfhr-alternative",
  "/industries/hrms-for-retail",
  "/industries/hrms-for-hospitality",
  "/industries/hrms-for-education",
  "/industries/hrms-for-logistics",
  "/industries/hrms-for-bfsi",
];

const PRIORITY = {
  "/": "1.0",
  "/pricing": "0.9",
  "/ae": "0.85",
  "/solutions/best-hrms-software-india": "0.88",
  "/solutions/payroll-software-uae": "0.88",
  "/solutions/wps-compliance-software": "0.87",
  "/solutions/ai-hr-software-gcc": "0.87",
  "/solutions/payroll-software-ksa": "0.86",
  "/solutions/hrms-software-kuwait": "0.86",
  "/solutions/payroll-software-qatar": "0.86",
  "/solutions/hrms-software-oman": "0.85",
  "/solutions/hrms-software-bahrain": "0.85",
  "/solutions/payroll-software-kerala": "0.86",
  "/compliance": "0.82",
  "/compliance/india-payroll-compliance": "0.85",
  "/compliance/uae-payroll-compliance": "0.85",
  "/compliance/ksa-payroll-compliance": "0.84",
  "/compliance/kuwait-payroll-compliance": "0.84",
  "/compliance/qatar-payroll-compliance": "0.84",
  "/compliance/oman-payroll-compliance": "0.83",
  "/compliance/bahrain-payroll-compliance": "0.83",
  "/compare/keka-alternative": "0.82",
  "/compare/zoho-people-alternative": "0.82",
  "/compare/factohr-alternative": "0.82",
  "/compare/officenet-alternative": "0.80",
  "/compare/pockethrms-alternative": "0.80",
  "/compare/greythr-alternative": "0.86",
  "/hr-software-uae": "0.88",
  "/payroll-software-uae": "0.88",
  "/hrms-software-india": "0.88",
  "/wps-compliance-software": "0.87",
  "/officekit-vs-keka": "0.82",
  "/officekit-vs-greythr": "0.82",
  "/resources/blogs": "0.8",
  "/solutions/hrms-software-bangalore": "0.84",
  "/solutions/hrms-software-chennai": "0.84",
  "/solutions/hrms-software-hyderabad": "0.84",
  "/solutions/payroll-software-mumbai": "0.84",
  "/solutions/hrms-software-delhi-ncr": "0.84",
  "/compare/darwinbox-alternative": "0.80",
  "/compare/bamboohr-alternative": "0.80",
  "/compare/bayzat-alternative": "0.80",
  "/compare/zenhr-alternative": "0.78",
  "/compare/gulfhr-alternative": "0.78",
  "/longtail/top-hrms-in-india": "0.82",
  "/longtail/hrms-uae": "0.82",
  "/longtail/best-hr-software-in-dubai": "0.82",
  "/longtail/top-hrms-in-gcc": "0.82",
  "/longtail/best-hrms-in-middle-east": "0.82",
  "/longtail/hrms-saudi-arabia": "0.82",
  "/longtail/attendance-software-india": "0.82",
  "/longtail/best-hrms-for-startups-india": "0.82",
  "/longtail/employee-management-software-india": "0.82",
  "/longtail/payroll-software-gcc": "0.82",
  "/industries/hrms-for-retail": "0.82",
  "/industries/hrms-for-hospitality": "0.82",
  "/industries/hrms-for-education": "0.82",
  "/industries/hrms-for-logistics": "0.82",
  "/industries/hrms-for-bfsi": "0.82",
};

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function excerptFrom(html, max = 160) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim().slice(0, max);
}

async function fetchDynamicBlogs() {
  try {
    const res = await fetch("https://api.officekithr.com/api/blogs");
    if (!res.ok) return { paths: [], manifest: {} };
    const posts = await res.json();
    const manifest = {};
    const paths = [];

    for (const p of posts) {
      const slug =
        p.slug || (p.title ? slugify(p.title) : null);
      if (!slug) continue;
      const path = `/blog/${slug}`;
      paths.push(path);
      const description =
        p.excerpt || excerptFrom(p.content) ||
        "Expert HR insights from OfficeKit HR.";
      manifest[slug] = {
        slug,
        path,
        title: `${p.title} | OfficeKit HR Blog`,
        headline: p.title,
        description,
        image: p.image || `${SITE}/ImageThumbnail2.png`,
        datePublished: p.createdAt?.split("T")[0] || p.date,
        author: p.author || "OfficeKit HR Team",
      };
    }

    return { paths, manifest };
  } catch {
    console.warn("[sitemap] Could not fetch dynamic blogs — static URLs only.");
    return { paths: [], manifest: {} };
  }
}

function urlEntry(path, priority = "0.7", changefreq = "monthly") {
  const loc = path === "/" ? `${SITE}/` : `${SITE}${path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const { paths: dynamicPaths, manifest } = await fetchDynamicBlogs();
const allPaths = [...new Set([...STATIC_PATHS, ...dynamicPaths])];

/**
 * Prerender route list (separate from sitemap URL count).
 * - PRERENDER_BLOGS=0 → static pages only (~52 routes, ~2 min)
 * - On CI (Cloudflare/GitHub), blogs are skipped unless PRERENDER_BLOGS=1
 */
const onCi = Boolean(process.env.CI || process.env.CF_PAGES);
const prerenderBlogs =
  process.env.PRERENDER_BLOGS === "1" ||
  (process.env.PRERENDER_BLOGS !== "0" && !onCi);
const prerenderPaths = prerenderBlogs ? allPaths : [...STATIC_PATHS];

const urls = allPaths
  .map((path) => {
    const p =
      PRIORITY[path] ??
      (path.startsWith("/blog") || path.includes("/blogs/") ? "0.65" : "0.75");
    const freq = path === "/" || path === "/resources/blogs" ? "weekly" : "monthly";
    return urlEntry(path, p, freq);
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `# Robots.txt — generated ${today}
# https://www.officekithr.com/llms.txt — LLM-readable site summary

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

# AI search & answer engine crawlers (content allowed for retrieval/citation)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(join(PUBLIC, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(PUBLIC, "robots.txt"), robots, "utf8");
writeFileSync(
  join(PUBLIC, "blog-seo-manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);
writeFileSync(
  join(SCRIPTS, "prerender-routes.json"),
  JSON.stringify(prerenderPaths, null, 2),
  "utf8"
);

console.log(
  `[seo] sitemap: ${allPaths.length} URLs | prerender: ${prerenderPaths.length} routes | blog manifest: ${Object.keys(manifest).length} posts`
);
