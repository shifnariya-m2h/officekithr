/**
 * Batch-convert large PNG/JPG in /public to WebP (keeps originals).
 * Requires: cwebp (brew install webp)
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PUBLIC = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const MIN_BYTES = 80_000;
const QUALITY = 82;

/** Hero / feature images: max width for display (saves MB on slow networks). */
const RESIZE_TARGETS = [
  { match: /dashboardok\.webp$/i, width: 1440 },
  { match: /mobile-mockup\.webp$/i, width: 750 },
  { match: /HiringOnboardings\.webp$/i, width: 800 },
  { match: /TimePayroll-min\.webp$/i, width: 800 },
  { match: /Performance-selfservice-min\.webp$/i, width: 800 },
  { match: /hrb0\.webp$/i, width: 640 },
];

function hasCwebp() {
  try {
    execSync("cwebp -version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(png|jpe?g)$/i.test(ent.name)) acc.push(p);
  }
  return acc;
}

if (!hasCwebp()) {
  console.error("[optimize-images] cwebp not found. Install: brew install webp");
  process.exit(1);
}

let converted = 0;
for (const file of walk(PUBLIC)) {
  const stat = fs.statSync(file);
  if (stat.size < MIN_BYTES) continue;
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= stat.mtimeMs) continue;
  try {
    const resize = RESIZE_TARGETS.find((t) => t.match.test(file));
    const resizeFlag = resize ? `-resize ${resize.width} 0` : "";
    const target = resize ? file : out;
    execSync(`cwebp -q ${QUALITY} ${resizeFlag} "${file}" -o "${target}"`.trim(), {
      stdio: "pipe",
    });
    if (resize) {
      fs.renameSync(file, out);
    }
    converted++;
    const after = fs.statSync(out).size;
    console.log(
      `[optimize-images] ${path.basename(file)} → ${path.basename(out)} (${(stat.size / 1024).toFixed(0)}K → ${(after / 1024).toFixed(0)}K)`
    );
  } catch (e) {
    console.warn(`[optimize-images] skip ${file}:`, e.message);
  }
}
function walkWebp(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkWebp(p, acc);
    else if (/\.webp$/i.test(ent.name)) acc.push(p);
  }
  return acc;
}

for (const file of walkWebp(PUBLIC)) {
  const resize = RESIZE_TARGETS.find((t) => t.match.test(file));
  if (!resize) continue;
  const stat = fs.statSync(file);
  if (stat.size < MIN_BYTES) continue;
  const tmp = `${file}.opt.tmp`;
  try {
    execSync(
      `cwebp -q ${QUALITY} -resize ${resize.width} 0 "${file}" -o "${tmp}"`,
      { stdio: "pipe" }
    );
    const after = fs.statSync(tmp).size;
    if (after < stat.size * 0.98) {
      fs.renameSync(tmp, file);
      converted++;
      console.log(
        `[optimize-images] resized ${path.basename(file)} (${(stat.size / 1024).toFixed(0)}K → ${(after / 1024).toFixed(0)}K)`
      );
    } else {
      fs.unlinkSync(tmp);
    }
  } catch (e) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    console.warn(`[optimize-images] skip resize ${file}:`, e.message);
  }
}

console.log(`[optimize-images] ${converted} file(s) converted.`);
