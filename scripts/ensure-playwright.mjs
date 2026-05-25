/**
 * Install Playwright Chromium only when missing (skips ~30–60s on cached CI builds).
 */
import { execSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
  try {
    const browser = await chromium.launch({ headless: true });
    await browser.close();
    console.log("[playwright] Chromium ready");
  } catch {
    console.log("[playwright] Installing Chromium…");
    execSync("npx playwright install chromium", { stdio: "inherit", cwd: ROOT });
  }
}

main().catch((err) => {
  console.error("[playwright]", err.message);
  process.exit(1);
});
