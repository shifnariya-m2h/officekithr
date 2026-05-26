import type { IncomingMessage, ServerResponse } from "http";
import type { Plugin } from "vite";

const SYNCORA_LEADS_URL = "https://app.syncoraai.com/api/leads/external";
const LEAD_API_PATHS = new Set(["/api/leads.php", "/api/hr-popup.php"]);

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

/** Dev-only proxy — mirrors public/api/leads.php (Vite does not run PHP). */
export function syncoraLeadsDevPlugin(apiKey: string | undefined): Plugin {
  return {
    name: "syncora-leads-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split("?")[0];
        if (!pathname || !LEAD_API_PATHS.has(pathname)) {
          return next();
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { error: "Method not allowed" });
          return;
        }

        if (!apiKey?.trim()) {
          sendJson(res, 503, {
            error:
              "Lead service not configured — set SYNCORA_API_KEY in .env",
          });
          return;
        }

        try {
          const body = await readBody(req);
          const upstream = await fetch(SYNCORA_LEADS_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": apiKey.trim(),
            },
            body,
          });

          const text = await upstream.text();
          res.statusCode = upstream.status;
          res.setHeader("Content-Type", "application/json");
          res.end(text || JSON.stringify({ error: "Upstream error" }));
        } catch {
          sendJson(res, 502, { error: "Syncora proxy error" });
        }
      });
    },
  };
}
