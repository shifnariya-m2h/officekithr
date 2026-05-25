/**
 * Production build without prerendering dynamic /blog/* routes (faster CI).
 * Sitemap and blog-seo-manifest still include all posts.
 */
import { execSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

process.env.PRERENDER_BLOGS = "0";
execSync("npm run build", { stdio: "inherit", cwd: ROOT, env: process.env });
