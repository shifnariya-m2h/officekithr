import { env } from "@/lib/env";

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message__c?: string;
  source?: string;
}

export async function submitLead(payload: LeadPayload): Promise<Response> {
  return fetch(env.leadsApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source: payload.source ?? "Officekit-Website",
    }),
  });
}
