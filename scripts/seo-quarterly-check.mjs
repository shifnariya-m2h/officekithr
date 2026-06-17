#!/usr/bin/env node
/**
 * Quarterly SEO monitoring stub.
 * Run: node scripts/seo-quarterly-check.mjs
 *
 * TODO: Wire Google Search Console API when credentials are available:
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
 *   GSC_SITE_URL=https://www.officekithr.com/
 */
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const ROUTES = join(ROOT, "scripts", "prerender-routes.json");

console.log("[seo-quarterly] OfficeKit HR — quarterly check stub\n");
console.log("Date:", new Date().toISOString().split("T")[0]);

// 1. Prerender route count
if (existsSync(ROUTES)) {
  const routes = JSON.parse(readFileSync(ROUTES, "utf8"));
  console.log(`\nPrerender routes: ${routes.length}`);
}

// 2. Local prerender verify (if dist exists)
if (existsSync(join(DIST, "index.html"))) {
  try {
    execSync("node scripts/verify-prerender.mjs", { cwd: ROOT, stdio: "inherit" });
  } catch {
    console.warn("[seo-quarterly] verify-prerender failed — run PRERENDER=1 npm run build");
  }
} else {
  console.log("\nNo dist/ — skip verify-prerender (run npm run build first)");
}

// 3. GSC API placeholder
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.log("\nTODO: Implement Search Console URL inspection / indexed count API");
} else {
  console.log("\nGSC API: not configured — use manual checklist in docs/seo-monitoring.md");
}

// 4. Review platforms
console.log("\nReview platforms: check G2/Capterra counts manually until profile URLs in src/data/review-platforms.ts");

console.log("\n[seo-quarterly] Done — see docs/seo-monitoring.md for full checklist");
