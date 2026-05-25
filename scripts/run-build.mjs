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
const prerender =
  process.env.PRERENDER === "1" ||
  (process.env.PRERENDER !== "0" && !isCi);

function run(cmd) {
  console.log(`[build] ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: ROOT, env: process.env });
}

run("node scripts/generate-sitemap.mjs");
run("npx vite build");

if (prerender) {
  run("node scripts/ensure-playwright.mjs");
  run("node scripts/prerender.mjs");
} else {
  console.log(
    "[build] Skipping prerender on CI (set PRERENDER=1 to enable). Sitemap + SPA deploy only."
  );
}

console.log("[build] Complete");
