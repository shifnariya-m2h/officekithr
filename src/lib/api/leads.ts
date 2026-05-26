import { env } from "@/lib/env";

export interface SyncoraLeadPayload {
  name: string;
  email: string;
  companyName: string;
  jobTitle: string;
  phone: string;
  source: string;
}

/** HR popup — fixed source label (no UTM). */
export const POPUP_LEAD_SOURCE = "websitepopup";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Contact forms — UTM query string when present, otherwise fallback label. */
export function buildUtmSource(fallback = "contact"): string {
  try {
    const url = new URL(window.location.href);
    const utm = UTM_KEYS.flatMap((key) => {
      const value = url.searchParams.get(key);
      return value ? [`${key}=${value}`] : [];
    });
    if (utm.length > 0) return utm.join("&");
  } catch {
    /* ignore */
  }
  return fallback;
}

export async function submitLead(
  payload: SyncoraLeadPayload,
): Promise<Response> {
  const body: SyncoraLeadPayload = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    companyName: payload.companyName.trim(),
    jobTitle: payload.jobTitle.trim(),
    phone: payload.phone.trim(),
    source: payload.source.trim(),
  };

  return fetch(env.syncoraLeadsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": env.syncoraApiKey,
    },
    body: JSON.stringify(body),
  });
}
