export const CONSENT_STORAGE_KEY = "ok_cookie_consent";

/** Fired when user accepts cookies (loads deferred third-party scripts). */
export const COOKIE_CONSENT_EVENT = "ok-cookie-consent";

export type ConsentValue = "accepted" | "rejected";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function setConsent(value: ConsentValue): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
}
