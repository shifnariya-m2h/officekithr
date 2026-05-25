/**
 * Post-build prerender: static HTML per route for crawlers + 404.html.
 */
import { chromium } from "playwright";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { loadViteEnv } from "./load-env.mjs";
import { startStaticServer } from "./static-server.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
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
      page.waitForSelector("article h1", { timeout: 15000 }),
      page.waitForFunction(
        () => {
          const meta = document.querySelector('meta[name="description"]');
          const title = document.title || "";
          return (
            (meta?.getAttribute("content")?.length ?? 0) > 20 &&
            !title.startsWith("Loading")
          );
        },
        { timeout: 8000 }
      ),
    ]).catch(() => {});
    return;
  }

  await page
    .waitForFunction(
      () => {
        const title = document.title || "";
        return title.length > 3 && !title.startsWith("Loading");
      },
      { timeout: 8000 }
    )
    .catch(() => {});
}

async function renderRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
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

  console.log(`[prerender] ${ROUTES.length} routes, concurrency ${CONCURRENCY}`);

  const httpServer = await startStaticServer(DIST, PORT);
  const browser = await chromium.launch({ headless: true });

  try {
    await runPool(browser, ROUTES);

    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/this-route-does-not-exist-ok-seo-404`, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    writeFileSync(
      join(DIST, "404.html"),
      normalizeHtml(await page.content()),
      "utf8"
    );
    await page.close();
    console.log(`[prerender] Done — ${ROUTES.length} routes + 404.html`);
  } finally {
    await browser.close();
    await httpServer.close();
  }
}

const forceExit = setTimeout(() => {
  console.warn("[prerender] Force exit after timeout");
  process.exit(0);
}, 8000);
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
