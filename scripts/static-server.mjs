/**
 * Minimal static server for dist/ — starts and stops cleanly (no Vite preview orphans).
 */
import http from "http";
import { readFileSync, existsSync, statSync } from "fs";
import { join, extname } from "path";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

export function startStaticServer(distDir, port) {
  const dist = distDir;

  const server = http.createServer((req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url ?? "/", "http://127.0.0.1").pathname
      );
      let filePath = join(dist, pathname.replace(/^\//, ""));

      if (pathname.endsWith("/")) {
        filePath = join(filePath, "index.html");
      } else if (!extname(pathname) && existsSync(join(filePath, "index.html"))) {
        filePath = join(filePath, "index.html");
      } else if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
        filePath = join(dist, "index.html");
      }

      if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
        res.statusCode = 404;
        res.end("Not found");
        return;
      }

      const ext = extname(filePath);
      res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
      res.end(readFileSync(filePath));
    } catch {
      res.statusCode = 500;
      res.end("Error");
    }
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => {
      resolve({
        close: () =>
          new Promise((done, err) => {
            server.close((e) => (e ? err(e) : done()));
            server.closeAllConnections?.();
          }),
      });
    });
  });
}
