import { env } from "@/lib/env";

export interface SyncoraLeadPayload {
  name: string;
  email: string;
  companyName?: string;
  jobTitle?: string;
  phone: string;
  source: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Base label + page path + UTM query (when present). */
export function buildLeadSource(base: string): string {
  const parts = [base];

  try {
    const url = new URL(window.location.href);
    parts.push(url.pathname);

    const utm = UTM_KEYS.flatMap((key) => {
      const value = url.searchParams.get(key);
      return value ? [`${key}=${value}`] : [];
    });

    if (utm.length > 0) {
      parts.push(utm.join("&"));
    }
  } catch {
    /* ignore invalid URL in non-browser contexts */
  }

  return parts.join("|");
}

export async function submitLead(
  payload: Omit<SyncoraLeadPayload, "source"> & { source?: string },
  sourceBase = "Officekit-Website",
): Promise<Response> {
  const body: SyncoraLeadPayload = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    companyName: payload.companyName ?? "",
    jobTitle: payload.jobTitle ?? "",
    source: payload.source ?? buildLeadSource(sourceBase),
  };

  return fetch(env.leadsApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
