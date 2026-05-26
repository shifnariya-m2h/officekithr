/**
 * Removes .map files from dist/ before deploy (smaller upload; Lighthouse payload).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name.endsWith(".map")) files.push(p);
  }
  return files;
}

let removed = 0;
for (const file of walk(DIST)) {
  fs.unlinkSync(file);
  removed++;
}
console.log(`[strip-sourcemaps] removed ${removed} file(s)`);
