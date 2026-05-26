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
const LOGO_QUALITY = 55;
const LOGO_ALPHA_Q = 15;
const PARTNER_MAX_W = 160;
const PARTNER_MAX_H = 112;
const PARTNER_SMALL_W = 80;
const PARTNER_LOGO_RECOMPRESS_BYTES = 3_500;
const COMPANY_LOGOS = path.join(PUBLIC, "company-logos");

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
];

/** Additional variants (stem-width.webp). */
const VARIANTS = [
  { stem: "mobile-mockup", width: 480, quality: QUALITY },
  { stem: "mobile-mockup", width: 768, quality: QUALITY },
  { stem: "dashboardok", width: 1024, quality: QUALITY },
  { stem: "BG", width: 768, quality: QUALITY },
  { stem: "BG", width: 480, quality: QUALITY },
  { stem: "NavLogo", width: 137, quality: LOGO_QUALITY },
];

function hasCwebp() {
  try {
    execSync("cwebp -version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function imageSize(file) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${file}"`, {
      encoding: "utf8",
    });
    const w = out.match(/pixelWidth:\s*(\d+)/);
    const h = out.match(/pixelHeight:\s*(\d+)/);
    return {
      width: w ? Number(w[1]) : null,
      height: h ? Number(h[1]) : null,
    };
  } catch {
    return { width: null, height: null };
  }
}

function fitWithin(w, h, maxW, maxH) {
  if (!w || !h) return { width: maxW, height: 0 };
  const scale = Math.min(maxW / w, maxH / h, 1);
  if (scale >= 1) return { width: w, height: h };
  return {
    width: Math.max(1, Math.round(w * scale)),
    height: Math.max(1, Math.round(h * scale)),
  };
}

function toWebp(input, output, { width, height, quality = QUALITY, alphaQ }) {
  const parts = [`cwebp -q ${quality}`];
  if (alphaQ != null) parts.push(`-alpha_q ${alphaQ}`);
  if (width && height) parts.push(`-resize ${width} ${height}`);
  else if (width) parts.push(`-resize ${width} 0`);
  else if (height) parts.push(`-resize 0 ${height}`);
  parts.push(`"${input}"`, `-o "${output}"`);
  execSync(parts.join(" "), { stdio: "pipe" });
}

function walk(dir, acc = [], filter = () => true) {
  if (!fs.existsSync(dir)) return acc;
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

function isPartnerVariantName(name) {
  return /^.+-(\d+)\.webp$/i.test(name);
}

function optimizePartnerLogo(file, { targetW, targetH, quality = LOGO_QUALITY }) {
  const { width: w, height: h } = imageSize(file);
  const fit = fitWithin(w, h, targetW, targetH);
  const tmp = `${file}.opt.tmp`;
  const useWidth = !w || !h || w / h >= targetW / targetH;
  toWebp(file, tmp, {
    width: useWidth ? fit.width : undefined,
    height: useWidth ? undefined : fit.height,
    quality,
    alphaQ: LOGO_ALPHA_Q,
  });
  maybeReplace(file, tmp, { force: true });
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

// Resize / recompress non-partner WebP in place
for (const file of walk(PUBLIC, [], (n) => /\.webp$/i.test(n) && !isPartnerVariantName(n))) {
  const target = RESIZE_IN_PLACE.find((t) => t.match.test(file));
  if (!target) continue;
  const stat = fs.statSync(file);
  if (stat.size < MIN_BYTES) continue;
  const { width: w } = imageSize(file);
  const needsResize = w && w > target.width;
  const needsRecompress = stat.size > 8_000;
  if (!needsResize && !needsRecompress) continue;
  const tmp = `${file}.opt.tmp`;
  try {
    toWebp(file, tmp, {
      width: needsResize ? target.width : w,
      quality: target.quality ?? QUALITY,
    });
    if (maybeReplace(file, tmp, { force: needsRecompress && !needsResize })) {
      changed++;
      console.log(`[optimize-images] ${path.relative(PUBLIC, file)}`);
    }
  } catch (e) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    console.warn(`[optimize-images] skip ${file}:`, e.message);
  }
}

// Partner logos: fit in 160×112 + 80w variant
if (fs.existsSync(COMPANY_LOGOS)) {
  const PARTNER_SMALL_H = Math.round(
    (PARTNER_MAX_H * PARTNER_SMALL_W) / PARTNER_MAX_W
  );

  for (const file of walk(COMPANY_LOGOS, [], (n) => /\.webp$/i.test(n) && !isPartnerVariantName(n))) {
    const stat = fs.statSync(file);
    const { width: w, height: h } = imageSize(file);
    const needsFit =
      (w && w > PARTNER_MAX_W) ||
      (h && h > PARTNER_MAX_H) ||
      stat.size > PARTNER_LOGO_RECOMPRESS_BYTES;

    if (needsFit) {
      try {
        const before = stat.size;
        optimizePartnerLogo(file, {
          targetW: PARTNER_MAX_W,
          targetH: PARTNER_MAX_H,
        });
        const after = fs.statSync(file).size;
        if (after !== before) {
          changed++;
          console.log(
            `[optimize-images] partner ${path.basename(file)} (${(before / 1024).toFixed(1)}K → ${(after / 1024).toFixed(1)}K)`
          );
        }
      } catch (e) {
        console.warn(`[optimize-images] skip partner ${file}:`, e.message);
      }
    }

    const stem = path.basename(file, ".webp");
    const smallOut = path.join(COMPANY_LOGOS, `${stem}-${PARTNER_SMALL_W}.webp`);
    const srcMtime = fs.statSync(file).mtimeMs;
    if (fs.existsSync(smallOut) && fs.statSync(smallOut).mtimeMs >= srcMtime) continue;

    try {
      const { width: w2, height: h2 } = imageSize(file);
      const fit = fitWithin(w2, h2, PARTNER_SMALL_W, PARTNER_SMALL_H);
      const useWidth = !w2 || !h2 || w2 / h2 >= PARTNER_SMALL_W / PARTNER_SMALL_H;
      toWebp(file, smallOut, {
        width: useWidth ? fit.width : undefined,
        height: useWidth ? undefined : fit.height,
        quality: LOGO_QUALITY,
        alphaQ: LOGO_ALPHA_Q,
      });
      changed++;
      console.log(
        `[optimize-images] partner variant ${path.basename(smallOut)} (${(fs.statSync(smallOut).size / 1024).toFixed(1)}K)`
      );
    } catch (e) {
      console.warn(`[optimize-images] skip variant ${stem}:`, e.message);
    }
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

// Fail build if any partner logo is still oversized
const oversized = [];
for (const file of walk(COMPANY_LOGOS, [], (n) => /\.webp$/i.test(n))) {
  const size = fs.statSync(file).size;
  if (size > 8_000) oversized.push(`${path.basename(file)} (${(size / 1024).toFixed(1)}K)`);
}
if (oversized.length) {
  console.warn(
    `[optimize-images] Warning: ${oversized.length} logo(s) still > 8KB: ${oversized.join(", ")}`
  );
}

console.log(`[optimize-images] ${changed} file(s) updated.`);
