/**
 * Post-build prerender: static HTML per route for crawlers + correct HTTP 404 on deploy.
 */
import { spawn } from "child_process";
import { chromium } from "playwright";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import http from "http";
import { loadViteEnv } from "./load-env.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = 4173;
const SITE = loadViteEnv(ROOT, "VITE_SITE_URL", "https://www.officekithr.com").replace(
  /\/$/,
  ""
);

const routesFile = join(ROOT, "scripts", "prerender-routes.json");
if (!existsSync(routesFile)) {
  console.error("[prerender] Missing prerender-routes.json — run generate-sitemap first.");
  process.exit(1);
}
const ROUTES = JSON.parse(readFileSync(routesFile, "utf8"));

function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() - start > timeoutMs) {
            reject(new Error("Preview server did not start in time"));
          } else {
            setTimeout(tick, 400);
          }
        });
    };
    tick();
  });
}

function writeHtml(route, html) {
  const outDir =
    route === "/"
      ? DIST
      : join(DIST, route.replace(/^\//, "").replace(/\/$/, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}

function normalizeHtml(html) {
  return html.replace(/http:\/\/127\.0\.0\.1:\d+/g, SITE);
}

async function renderRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });

  if (route.startsWith("/blog/")) {
    await page
      .waitForSelector("article h1", { timeout: 20000 })
      .catch(() => page.waitForTimeout(3000));
  } else {
    await page.waitForTimeout(800);
  }

  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});

  let html = await page.content();
  html = normalizeHtml(html);
  writeHtml(route, html);
}

async function main() {
  if (!existsSync(DIST)) {
    console.error("[prerender] dist/ not found. Run vite build first.");
    process.exit(1);
  }

  const preview = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { cwd: ROOT, stdio: "pipe", shell: true }
  );

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/`);
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    for (const route of ROUTES) {
      await renderRoute(page, route);
      console.log(`[prerender] ${route}`);
    }

    await page.goto(`http://127.0.0.1:${PORT}/this-route-does-not-exist-ok-seo-404`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    writeFileSync(join(DIST, "404.html"), normalizeHtml(await page.content()), "utf8");

    await browser.close();
    console.log(`[prerender] Done — ${ROUTES.length} routes + 404.html`);
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error("[prerender] Failed:", err.message);
  process.exit(1);
});
