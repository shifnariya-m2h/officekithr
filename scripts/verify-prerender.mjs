/**
 * Post-prerender smoke test — fails the build if key routes lack unique H1/title.
 * Run: node scripts/verify-prerender.mjs
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const ROUTES_FILE = join(ROOT, "scripts", "prerender-routes.json");

/** Routes actually prerendered this build — CI skips blogs unless PRERENDER_BLOGS=1. */
function loadPrerenderRoutes() {
  if (!existsSync(ROUTES_FILE)) return null;
  return new Set(JSON.parse(readFileSync(ROUTES_FILE, "utf8")));
}

const prerenderRoutes = loadPrerenderRoutes();

const HOME_TITLE_SNIPPET = "AI-Powered HRMS for India, UAE";
const HOME_H1_SNIPPET = "GCC Payroll";

const CHECKS = [
  {
    route: "/",
    file: "index.html",
    mustIncludeTitle: "OfficeKit HR",
    mustHaveH1: true,
    mustNotBeHomepage: false,
  },
  {
    route: "/pricing",
    file: join("pricing", "index.html"),
    mustIncludeTitle: "Pricing",
    mustIncludeH1: "Flexible HRMS pricing",
    mustNotBeHomepage: true,
  },
  {
    route: "/gcc-compliance",
    file: join("gcc-compliance", "index.html"),
    mustIncludeTitle: "GCC",
    mustIncludeH1: "GCC payroll compliance",
    mustNotBeHomepage: true,
  },
  {
    route: "/hrms-software-india",
    file: join("hrms-software-india", "index.html"),
    mustIncludeTitle: "HRMS",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
  {
    route: "/officekit-vs-keka",
    file: join("officekit-vs-keka", "index.html"),
    mustIncludeTitle: "Keka",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
  {
    route: "/officekit-vs-zoho-people",
    file: join("officekit-vs-zoho-people", "index.html"),
    mustIncludeTitle: "Zoho",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
  {
    route: "/officekit-vs-darwinbox",
    file: join("officekit-vs-darwinbox", "index.html"),
    mustIncludeTitle: "Darwinbox",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
  {
    route: "/features/payroll-and-compliance",
    file: join("features", "payroll-and-compliance", "index.html"),
    mustIncludeTitle: "Payroll",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
  {
    route: "/reviews",
    file: join("reviews", "index.html"),
    mustIncludeTitle: "Reviews",
    mustIncludeH1: "OfficeKit HR reviews",
    mustNotBeHomepage: true,
  },
  {
    route: "/resources/blogs/wps-compliance-guide-2026",
    file: join("resources", "blogs", "wps-compliance-guide-2026", "index.html"),
    mustIncludeTitle: "WPS",
    mustHaveH1: true,
    mustNotBeHomepage: true,
  },
];

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m ? m[1].replace(/&amp;/g, "&") : "";
}

function extractH1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
}

function isHomepageBody(html) {
  const title = extractTitle(html);
  const h1 = extractH1(html);
  return title.includes(HOME_TITLE_SNIPPET) && h1.includes(HOME_H1_SNIPPET);
}

let failed = 0;

for (const check of CHECKS) {
  if (prerenderRoutes && !prerenderRoutes.has(check.route)) {
    console.log(`[verify-prerender] SKIP ${check.route} (not in prerender-routes.json)`);
    continue;
  }

  const filePath = join(DIST, check.file);
  if (!existsSync(filePath)) {
    console.error(`[verify-prerender] MISSING ${check.route} → ${check.file}`);
    failed++;
    continue;
  }

  const html = readFileSync(filePath, "utf8");
  const title = extractTitle(html);
  const h1 = extractH1(html);
  const size = html.length;

  if (check.mustIncludeTitle && !title.includes(check.mustIncludeTitle)) {
    console.error(
      `[verify-prerender] FAIL ${check.route}: title "${title}" missing "${check.mustIncludeTitle}"`
    );
    failed++;
    continue;
  }

  if (check.mustIncludeH1 && !h1.includes(check.mustIncludeH1)) {
    console.error(
      `[verify-prerender] FAIL ${check.route}: h1 "${h1}" missing "${check.mustIncludeH1}"`
    );
    failed++;
    continue;
  }

  if (check.mustIncludeBody && !html.includes(check.mustIncludeBody)) {
    console.error(
      `[verify-prerender] FAIL ${check.route}: HTML missing "${check.mustIncludeBody}"`
    );
    failed++;
    continue;
  }

  if (check.mustHaveH1 && !h1) {
    console.error(`[verify-prerender] FAIL ${check.route}: no <h1> in HTML (${size} bytes)`);
    failed++;
    continue;
  }

  if (check.mustNotBeHomepage && isHomepageBody(html)) {
    console.error(
      `[verify-prerender] FAIL ${check.route}: file contains homepage title/h1 (duplicate content)`
    );
    failed++;
    continue;
  }

  if (size < 20000 && check.route !== "/") {
    console.error(
      `[verify-prerender] WARN ${check.route}: thin HTML (${size} bytes) — may lack body content`
    );
  }

  console.log(`[verify-prerender] OK ${check.route} (${size} bytes)`);
}

if (failed > 0) {
  console.error(`[verify-prerender] ${failed} route(s) failed`);
  process.exit(1);
}

console.log("[verify-prerender] All checks passed");
