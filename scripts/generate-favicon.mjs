/**
 * Renders public/favicon.svg to PNG sizes and favicon.ico for legacy browsers.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const svgPath = path.join(publicDir, "favicon.svg");
const svg = fs.readFileSync(svgPath, "utf8");

const sizes = [
  { name: "favicon-32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
];

async function renderPng(browser, size) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  const html = `<!DOCTYPE html><html><body style="margin:0;background:transparent">${svg.replace(
    "<svg",
    `<svg width="${size}" height="${size}"`
  )}</body></html>`;
  await page.setContent(html, { waitUntil: "load" });
  const buffer = await page.screenshot({
    type: "png",
    omitBackground: true,
    clip: { x: 0, y: 0, width: size, height: size },
  });
  await page.close();
  return buffer;
}

/** Minimal ICO writer for a single 32×32 PNG payload. */
function pngToIco(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry[0] = 32;
  entry[1] = 32;
  entry[2] = 0;
  entry[3] = 0;
  entry[4] = 1;
  entry[5] = 0;
  entry[6] = 32;
  entry[7] = 0;
  const imageOffset = 6 + 16;
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(imageOffset, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

const browser = await chromium.launch();
try {
  for (const { name, size } of sizes) {
    const png = await renderPng(browser, size);
    fs.writeFileSync(path.join(publicDir, name), png);
    console.log(`Wrote ${name} (${size}×${size})`);
  }

  const favicon32 = fs.readFileSync(path.join(publicDir, "favicon-32.png"));
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), pngToIco(favicon32));
  console.log("Wrote favicon.ico");
} finally {
  await browser.close();
}
