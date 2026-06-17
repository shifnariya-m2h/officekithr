import { safeLocalGet, safeLocalSet } from "@/lib/safe-storage";

export const CONSENT_STORAGE_KEY = "ok_cookie_consent";

/** Fired when user accepts cookies (loads deferred third-party scripts). */
export const COOKIE_CONSENT_EVENT = "ok-cookie-consent";

export type ConsentValue = "accepted" | "rejected";

export function getConsent(): ConsentValue | null {
  const v = safeLocalGet(CONSENT_STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function setConsent(value: ConsentValue): void {
  safeLocalSet(CONSENT_STORAGE_KEY, value);
}
