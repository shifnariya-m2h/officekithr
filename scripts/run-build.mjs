/**
 * Production build entry — skips Playwright prerender on CI unless PRERENDER=1.
 */
import { execSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const isCi = Boolean(
  process.env.CI ||
    process.env.CF_PAGES ||
    process.env.NETLIFY ||
    process.env.VERCEL ||
    process.env.CLOUDFLARE_PAGES
);
// Prerender by default — critical for SEO/LCP scores (set PRERENDER=0 to skip).
const prerender = process.env.PRERENDER !== "0";

function run(cmd) {
  console.log(`[build] ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: ROOT, env: process.env });
}

run("node scripts/generate-sitemap.mjs");
try {
  run("node scripts/optimize-images.mjs");
} catch (e) {
  console.warn("[build] optimize-images skipped:", e.message);
}
try {
  run("node scripts/prune-public-assets.mjs");
} catch (e) {
  console.warn("[build] prune-public-assets skipped:", e.message);
}
run("npx vite build");
try {
  run("node scripts/strip-sourcemaps.mjs");
} catch (e) {
  console.warn("[build] strip-sourcemaps skipped:", e.message);
}

if (prerender) {
  run("node scripts/ensure-playwright.mjs");
  run("node scripts/prerender.mjs");
} else {
  console.log("[build] Skipping prerender (set PRERENDER=1 or unset PRERENDER=0).");
}

console.log("[build] Complete");
