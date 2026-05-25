import { existsSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Read VITE_* from process.env or .env / .env.local (for Node build scripts).
 */
export function loadViteEnv(root, key, fallback = "") {
  if (process.env[key]?.trim()) {
    return process.env[key].trim().replace(/^["']|["']$/g, "");
  }
  for (const file of [".env.local", ".env"]) {
    const path = join(root, file);
    if (!existsSync(path)) continue;
    const match = readFileSync(path, "utf8").match(
      new RegExp(`^${key}=(.+)$`, "m"),
    );
    if (match) {
      return match[1].trim().replace(/^["']|["']$/g, "");
    }
  }
  return fallback;
}
