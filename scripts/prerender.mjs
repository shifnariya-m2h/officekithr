/**
 * Post-build prerender: static HTML per route for crawlers + correct HTTP 404 on deploy.
 * Routes are rendered in parallel (PRERENDER_CONCURRENCY, default 6).
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
const CONCURRENCY = Math.max(
  1,
  Math.min(12, Number(process.env.PRERENDER_CONCURRENCY || 6))
);
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

async function waitForRoute(page, route) {
  if (route.startsWith("/blog/")) {
    await Promise.race([
      page.waitForSelector("article h1", { timeout: 20000 }),
      page.waitForFunction(
        () => {
          const meta = document.querySelector('meta[name="description"]');
          const title = document.title || "";
          return (
            meta?.getAttribute("content")?.length > 20 &&
            !title.startsWith("Loading")
          );
        },
        { timeout: 12000 }
      ),
    ]).catch(() => {});
    return;
  }

  await page.waitForFunction(
    () => {
      const title = document.title || "";
      return title.length > 3 && !title.startsWith("Loading");
    },
    { timeout: 10000 }
  ).catch(() => {});
  await page.waitForTimeout(250);
}

async function renderRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await waitForRoute(page, route);
  writeHtml(route, normalizeHtml(await page.content()));
}

async function runPool(browser, routes) {
  let index = 0;
  const next = () => routes[index++];

  async function worker() {
    const page = await browser.newPage();
    try {
      let route;
      while ((route = next())) {
        await renderRoute(page, route);
        console.log(`[prerender] ${route}`);
      }
    } finally {
      await page.close();
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, routes.length) }, () => worker())
  );
}

async function main() {
  if (!existsSync(DIST)) {
    console.error("[prerender] dist/ not found. Run vite build first.");
    process.exit(1);
  }

  console.log(
    `[prerender] ${ROUTES.length} routes, concurrency ${CONCURRENCY}`
  );

  const preview = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { cwd: ROOT, stdio: "pipe", shell: true }
  );

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/`);
    const browser = await chromium.launch({ headless: true });
    await runPool(browser, ROUTES);

    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/this-route-does-not-exist-ok-seo-404`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
    await page.waitForTimeout(500);
    writeFileSync(
      join(DIST, "404.html"),
      normalizeHtml(await page.content()),
      "utf8"
    );
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
