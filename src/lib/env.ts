/** Client-safe env (Vite). Server secrets belong in hosting env, not here. */

function str(value: string | undefined, fallback: string): string {
  const v = value?.trim();
  return v || fallback;
}

function flag(value: string | undefined): boolean {
  return value === "true" || value === "1";
}

const siteUrl = str(
  import.meta.env.VITE_SITE_URL,
  "https://www.officekithr.com",
).replace(/\/$/, "");

let siteHost = "www.officekithr.com";
try {
  siteHost = new URL(siteUrl).host;
} catch {
  /* keep default */
}

export const env = {
  siteUrl,
  siteHost,
  leadsApiUrl: str(import.meta.env.VITE_LEADS_API_URL, "/api/leads.php"),
  hrPopupApiUrl: str(
    import.meta.env.VITE_HR_POPUP_API_URL,
    "/api/hr-popup.php",
  ),
  blogApiUrl: str(
    import.meta.env.VITE_BLOG_API_URL,
    "https://api.officekithr.com/api/blogs",
  ),
  gaMeasurementId: str(
    import.meta.env.VITE_GA_MEASUREMENT_ID,
    "G-J60WZ10KBF",
  ),
  gtagId: str(import.meta.env.VITE_GTAG_ID, "GT-KDD8X4P9"),
  googleAdsId: str(import.meta.env.VITE_GOOGLE_ADS_ID, "AW-17365780413"),
  googleAdsConversion: str(
    import.meta.env.VITE_GOOGLE_ADS_CONVERSION,
    "AW-17365780413/MAzACIaay74bEL2P09hA",
  ),
  tawkPropertyId: str(
    import.meta.env.VITE_TAWK_PROPERTY_ID,
    "68bbb72167c586192c667ccf",
  ),
  tawkWidgetId: str(import.meta.env.VITE_TAWK_WIDGET_ID, "1j4ek6n8v"),
  disableTawk: flag(import.meta.env.VITE_DISABLE_TAWK),
  disableAnalytics: flag(import.meta.env.VITE_DISABLE_ANALYTICS),
} as const;

export function isTawkEnabled(): boolean {
  return (
    !env.disableTawk &&
    Boolean(env.tawkPropertyId) &&
    Boolean(env.tawkWidgetId)
  );
}
