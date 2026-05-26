#!/usr/bin/env node
/**
 * Smoke-test Syncora external leads API.
 * Usage: node scripts/test-syncora-lead.mjs
 */
import { loadViteEnv } from "./load-env.mjs";

const root = new URL("..", import.meta.url).pathname;
const apiKey = loadViteEnv(root, "VITE_SYNCORA_API_KEY");
const apiUrl = loadViteEnv(
  root,
  "VITE_SYNCORA_LEADS_URL",
  "https://app.syncoraai.com/api/leads/external",
);

if (!apiKey) {
  console.error("Missing VITE_SYNCORA_API_KEY in .env");
  process.exit(1);
}

const payload = {
  name: "zyn",
  email: "zyntest@gmail.com",
  companyName: "apollo systems and solutions",
  jobTitle: "CEO",
  phone: "34567893456",
  source: "API Integration",
};

const res = await fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  },
  body: JSON.stringify(payload),
});

const text = await res.text();
console.log(`Status: ${res.status}`);
console.log(text);

if (!res.ok) process.exit(1);
