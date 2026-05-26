import { env } from "@/lib/env";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsLoaded = false;

function injectGtagScript(): void {
  if (
    analyticsLoaded ||
    typeof window === "undefined" ||
    env.disableAnalytics
  ) {
    return;
  }
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${env.gaMeasurementId}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.gtag?.("config", env.gaMeasurementId, { anonymize_ip: true });
    if (env.gtagId) window.gtag?.("config", env.gtagId);
    if (env.googleAdsId) window.gtag?.("config", env.googleAdsId);
  };
}

/** Defers GTM/gtag until after first paint to protect LCP & TBT. */
export function loadAnalytics(): void {
  if (analyticsLoaded || typeof window === "undefined" || env.disableAnalytics) {
    return;
  }

  const run = () => injectGtagScript();

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 4000 });
  } else {
    window.setTimeout(run, 2500);
  }
}

export function trackPageView(path: string): void {
  if (!window.gtag || env.disableAnalytics) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
  window.gtag("config", env.gaMeasurementId, {
    page_path: path,
    anonymize_ip: true,
  });
  if (env.googleAdsId) {
    window.gtag("config", env.googleAdsId, { page_path: path });
  }
}

export function trackDemoConversion(source: string): void {
  if (!window.gtag || env.disableAnalytics) return;
  window.gtag("event", "conversion", {
    send_to: env.googleAdsConversion,
    event_category: "lead",
    event_label: source,
  });
  window.gtag("event", "demo_submit", {
    event_category: "lead",
    event_label: source,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (env.disableAnalytics) return;
  window.gtag?.("event", name, params);
}
