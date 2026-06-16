/**
 * Post-build prerender: static HTML per route for crawlers + 404.html.
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync, readFileSync, existsSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { loadViteEnv } from "./load-env.mjs";
import { startStaticServer } from "./static-server.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SPA_FALLBACK = join(DIST, "__spa_fallback.html");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
const CONCURRENCY = Math.max(
  1,
  Math.min(8, Number(process.env.PRERENDER_CONCURRENCY || 4))
);
const SITE = loadViteEnv(ROOT, "VITE_SITE_URL", "https://www.officekithr.com").replace(
  /\/$/,
  ""
);

const HOME_TITLE = "OfficeKit HR | AI-Powered HRMS for India, UAE & GCC";
const HOME_H1_SNIPPET = "AI-Powered HRMS for";

const routesFile = join(ROOT, "scripts", "prerender-routes.json");
if (!existsSync(routesFile)) {
  console.error("[prerender] Missing prerender-routes.json — run generate-sitemap first.");
  process.exit(1);
}

/** Homepage last so other routes never fall back to prerendered homepage HTML. */
function sortRoutes(routes) {
  const rest = routes.filter((r) => r !== "/");
  return [...rest, "/"];
}
const ROUTES = sortRoutes(JSON.parse(readFileSync(routesFile, "utf8")));

function writeHtml(route, html) {
  const outDir =
    route === "/"
      ? DIST
      : join(DIST, route.replace(/^\//, "").replace(/\/$/, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}

function normalizeHtml(html) {
  return dedupeSeoHead(html.replace(/http:\/\/127\.0\.0\.1:\d+/g, SITE));
}

/** Strip static index.html SEO tags — keep only react-helmet-async (data-rh) output. */
function dedupeSeoHead(html) {
  let out = html;
  const strip = (pattern) => {
    out = out.replace(pattern, "");
  };

  strip(/<link rel="canonical" href="[^"]*"(?![^>]*\bdata-rh)[^>]*>\s*/gi);
  strip(/<meta name="description" content="[^"]*"(?![^>]*\bdata-rh)[^>]*>\s*/gi);
  strip(/<meta name="robots" content="[^"]*"(?![^>]*\bdata-rh)[^>]*>\s*/gi);
  strip(/<meta property="og:[^"]*" content="[^"]*"(?![^>]*\bdata-rh)[^>]*>\s*/gi);
  strip(/<meta name="twitter:[^"]*" content="[^"]*"(?![^>]*\bdata-rh)[^>]*>\s*/gi);

  const titles = [...out.matchAll(/<title[^>]*>([^<]*)<\/title>/gi)];
  if (titles.length > 1) {
    const keep = titles.find((m) => m[0].includes("data-rh")) ?? titles[titles.length - 1];
    for (const m of titles) {
      if (m[0] !== keep[0]) strip(m[0]);
    }
  }

  return out;
}

async function waitForRoute(page, route) {
  await page.waitForLoadState("domcontentloaded", { timeout: 45000 });

  if (route === "/") {
    await page.waitForSelector("#trusted-companies-heading", { timeout: 30000 });
    await page.waitForSelector("#faq-heading", { timeout: 30000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    return;
  }

  if (route === "/ae") {
    await page.waitForSelector("h1", { timeout: 30000 });
    await page.waitForTimeout(600);
    return;
  }

  if (route.startsWith("/blog/")) {
    await page.waitForSelector("article h1, main h1", { timeout: 30000 });
    return;
  }

  // Lazy chunks + Suspense: wait for visible H1 and meaningful body text.
  await page.waitForSelector("h1", { timeout: 35000 });
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      const h1 = document.querySelector("h1");
      const text = root?.innerText?.trim() ?? "";
      return (
        h1 &&
        h1.innerText.trim().length > 8 &&
        text.length > 250 &&
        !text.startsWith("Loading")
      );
    },
    { timeout: 35000 }
  );

  // Reject accidental homepage capture on inner routes.
  const pathname = new URL(page.url()).pathname.replace(/\/$/, "") || "/";
  if (pathname === route.replace(/\/$/, "") || pathname === route) {
    const captured = await page.evaluate((homeH1) => {
      const h1 = document.querySelector("h1")?.innerText ?? "";
      const title = document.title ?? "";
      return {
        isHomeH1: h1.includes(homeH1) && h1.includes("GCC Payroll"),
        isHomeTitle: title.includes("AI-Powered HRMS for India, UAE"),
      };
    }, HOME_H1_SNIPPET);

    if (captured.isHomeH1 && captured.isHomeTitle && route !== "/") {
      await page.waitForTimeout(2500);
      const retry = await page.evaluate((homeH1) => {
        const h1 = document.querySelector("h1")?.innerText ?? "";
        return h1.includes(homeH1) && h1.includes("GCC Payroll");
      }, HOME_H1_SNIPPET);
      if (retry) {
        throw new Error(
          `${route}: captured homepage body — lazy route did not render (check Suspense/chunk load)`
        );
      }
    }
  }
}

async function renderRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "commit", timeout: 60000 });
  await waitForRoute(page, route);
  const html = normalizeHtml(await page.content());

  const hasH1 = /<h1[\s>]/i.test(html);
  if (route !== "/404" && !hasH1) {
    throw new Error(`${route}: prerendered HTML missing <h1>`);
  }

  writeHtml(route, html);
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

  // Vite shell before any route overwrites dist/index.html — used as SPA fallback during prerender.
  copyFileSync(join(DIST, "index.html"), SPA_FALLBACK);

  console.log(`[prerender] ${ROUTES.length} routes, concurrency ${CONCURRENCY}`);

  const httpServer = await startStaticServer(DIST, PORT, {
    fallbackFile: SPA_FALLBACK,
  });
  const browser = await chromium.launch({ headless: true });

  try {
    await runPool(browser, ROUTES);

    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/this-route-does-not-exist-ok-seo-404`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
    writeFileSync(
      join(DIST, "404.html"),
      normalizeHtml(await page.content()),
      "utf8"
    );
    await page.close();

    try {
      const { execSync } = await import("child_process");
      execSync("node scripts/verify-prerender.mjs", { stdio: "inherit", cwd: ROOT });
    } catch {
      process.exit(1);
    }

    console.log(`[prerender] Done — ${ROUTES.length} routes + 404.html`);
  } finally {
    await browser.close();
    await httpServer.close();
  }
}

const forceExitMs = Number(process.env.PRERENDER_FORCE_EXIT_MS || 45 * 60 * 1000);
const forceExit = setTimeout(() => {
  console.error("[prerender] Timed out — increase PRERENDER_FORCE_EXIT_MS if needed");
  process.exit(1);
}, forceExitMs);
forceExit.unref();

main()
  .then(() => {
    clearTimeout(forceExit);
    process.exit(0);
  })
  .catch((err) => {
    clearTimeout(forceExit);
    console.error("[prerender] Failed:", err.message);
    process.exit(1);
  });
