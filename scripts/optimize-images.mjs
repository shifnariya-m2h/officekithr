/**
 * Batch-optimize WebP/PNG/JPG in /public (resize + recompress).
 * Requires: cwebp (brew install webp)
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PUBLIC = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const MIN_BYTES = 2_000;
const QUALITY = 82;
const LOGO_QUALITY = 72;
const PARTNER_LOGO_MAX_WIDTH = 160;

/** In-place max width (keeps aspect ratio). */
const RESIZE_IN_PLACE = [
  { match: /[/\\]NavLogo\.webp$/i, width: 274, quality: LOGO_QUALITY },
  { match: /dashboardok\.webp$/i, width: 1440, quality: QUALITY },
  { match: /mobile-mockup\.webp$/i, width: 750, quality: QUALITY },
  { match: /[/\\]BG\.webp$/i, width: 1280, quality: QUALITY },
  { match: /HiringOnboardings\.webp$/i, width: 800 },
  { match: /TimePayroll-min\.webp$/i, width: 800 },
  { match: /Performance-selfservice-min\.webp$/i, width: 800 },
  { match: /hrb0\.webp$/i, width: 640 },
  { match: /[/\\](haris-ceo|faizan-seo)\.webp$/i, width: 256 },
  {
    match: /[/\\]company-logos[/\\].+\.webp$/i,
    width: PARTNER_LOGO_MAX_WIDTH,
    quality: LOGO_QUALITY,
  },
];

/** Additional variants (stem-width.webp). */
const VARIANTS = [
  { stem: "mobile-mockup", width: 480, quality: QUALITY },
  { stem: "mobile-mockup", width: 768, quality: QUALITY },
  { stem: "dashboardok", width: 1024, quality: QUALITY },
  { stem: "BG", width: 768, quality: QUALITY },
];

function hasCwebp() {
  try {
    execSync("cwebp -version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function imageWidth(file) {
  try {
    const out = execSync(`sips -g pixelWidth "${file}"`, { encoding: "utf8" });
    const m = out.match(/pixelWidth:\s*(\d+)/);
    return m ? Number(m[1]) : null;
  } catch {
    return null;
  }
}

function toWebp(input, output, { width, quality = QUALITY }) {
  const resizeFlag = width ? `-resize ${width} 0` : "";
  execSync(
    `cwebp -q ${quality} ${resizeFlag} "${input}" -o "${output}"`.trim(),
    { stdio: "pipe" }
  );
}

function walk(dir, acc = [], filter = () => true) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc, filter);
    else if (filter(ent.name)) acc.push(p);
  }
  return acc;
}

function maybeReplace(file, tmp, { force = false } = {}) {
  const before = fs.statSync(file).size;
  const after = fs.statSync(tmp).size;
  if (force || after < before * 0.98) {
    fs.renameSync(tmp, file);
    return true;
  }
  fs.unlinkSync(tmp);
  return false;
}

if (!hasCwebp()) {
  console.error("[optimize-images] cwebp not found. Install: brew install webp");
  process.exit(1);
}

let changed = 0;

// PNG/JPG → WebP
for (const file of walk(PUBLIC, [], (n) => /\.(png|jpe?g)$/i.test(n))) {
  const stat = fs.statSync(file);
  if (stat.size < 80_000) continue;
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= stat.mtimeMs) continue;
  try {
    const resize = RESIZE_IN_PLACE.find((t) => t.match.test(file));
    const q = resize?.quality ?? QUALITY;
    if (resize) {
      toWebp(file, out, { width: resize.width, quality: q });
      fs.renameSync(file, out);
    } else {
      toWebp(file, out, { quality: q });
    }
    changed++;
    console.log(
      `[optimize-images] ${path.basename(file)} → ${path.basename(out)} (${(stat.size / 1024).toFixed(0)}K → ${(fs.statSync(out).size / 1024).toFixed(0)}K)`
    );
  } catch (e) {
    console.warn(`[optimize-images] skip ${file}:`, e.message);
  }
}

// Resize / recompress existing WebP in place
for (const file of walk(PUBLIC, [], (n) => /\.webp$/i.test(n))) {
  const target = RESIZE_IN_PLACE.find((t) => t.match.test(file));
  if (!target) continue;
  const stat = fs.statSync(file);
  if (stat.size < MIN_BYTES) continue;
  const w = imageWidth(file);
  const isLogo = /[/\\]company-logos[/\\]/.test(file);
  const needsResize = w && w > target.width;
  const isPartnerLogo = /[/\\]company-logos[/\\]/.test(file);
  const needsRecompress =
    isLogo && stat.size > (isPartnerLogo ? 6_000 : 12_000);
  if (!needsResize && !needsRecompress) continue;
  const tmp = `${file}.opt.tmp`;
  const outWidth = needsResize ? target.width : w;
  try {
    toWebp(file, tmp, {
      width: outWidth,
      quality: target.quality ?? QUALITY,
    });
    if (maybeReplace(file, tmp, { force: needsRecompress && !needsResize })) {
      changed++;
      console.log(
        `[optimize-images] ${needsResize ? "resized" : "recompressed"} ${path.relative(PUBLIC, file)}`
      );
    }
  } catch (e) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    console.warn(`[optimize-images] skip ${file}:`, e.message);
  }
}

// Generate width-suffixed variants
for (const { stem, width, quality } of VARIANTS) {
  const base = path.join(PUBLIC, `${stem}.webp`);
  if (!fs.existsSync(base)) continue;
  const out = path.join(PUBLIC, `${stem}-${width}.webp`);
  const srcMtime = fs.statSync(base).mtimeMs;
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= srcMtime) continue;
  try {
    toWebp(base, out, { width, quality });
    changed++;
    console.log(
      `[optimize-images] variant ${path.basename(out)} (${(fs.statSync(out).size / 1024).toFixed(0)}K)`
    );
  } catch (e) {
    console.warn(`[optimize-images] skip variant ${stem}-${width}:`, e.message);
  }
}

console.log(`[optimize-images] ${changed} file(s) updated.`);
