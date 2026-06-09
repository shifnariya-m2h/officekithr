import { env } from "@/lib/env";

/**
 * Engagement signal tracker for GA4.
 *
 * Why: GA4 marks a session as "engaged" only if it lasts > 10s, has 2+ pageviews,
 * or fires a conversion event. By emitting custom events for scroll depth, dwell
 * time, active interactions, outbound clicks, and rage clicks, we (a) push more
 * sessions past the engagement threshold and (b) get actionable UX signals.
 *
 * Mark `scroll_75`, `time_30s`, `active_user`, and `outbound_click` as Key Events
 * in GA4 Admin so they count toward conversion / engagement reporting.
 */

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const SCROLL_THRESHOLDS = [25, 50, 75, 90] as const;
const TIME_THRESHOLDS_SECONDS = [10, 30, 60, 180] as const;
const ACTIVE_USER_INTERACTION_COUNT = 3;
const RAGE_CLICK_COUNT = 3;
const RAGE_CLICK_WINDOW_MS = 600;

let started = false;
let firedEvents = new Set<string>();
const cleanupFns: Array<() => void> = [];

function emit(name: string, params?: EventParams): void {
  if (env.disableAnalytics) return;
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

function fireOnce(key: string, name: string, params?: EventParams): void {
  if (firedEvents.has(key)) return;
  firedEvents.add(key);
  emit(name, params);
}

function setupScrollDepth(): void {
  let ticking = false;

  const measure = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const pct = Math.round(((doc.scrollTop + window.innerHeight) / doc.scrollHeight) * 100);
    for (const m of SCROLL_THRESHOLDS) {
      if (pct >= m) fireOnce(`scroll_${m}`, `scroll_${m}`, { depth: m });
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      measure();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  measure();

  cleanupFns.push(() => window.removeEventListener("scroll", onScroll));
}

function setupDwellTime(): void {
  const timers: number[] = [];
  for (const s of TIME_THRESHOLDS_SECONDS) {
    const id = window.setTimeout(() => {
      if (document.visibilityState === "hidden") return;
      fireOnce(`time_${s}s`, `time_${s}s`, { seconds: s });
    }, s * 1000);
    timers.push(id);
  }
  cleanupFns.push(() => timers.forEach((id) => window.clearTimeout(id)));
}

function setupActiveUser(): void {
  let interactions = 0;

  const bump = () => {
    interactions += 1;
    if (interactions >= ACTIVE_USER_INTERACTION_COUNT) {
      fireOnce("active_user", "active_user", { interactions });
      detach();
    }
  };

  const events: Array<keyof WindowEventMap> = ["click", "keydown", "pointerdown"];
  events.forEach((e) => window.addEventListener(e, bump, { passive: true }));

  const detach = () => {
    events.forEach((e) => window.removeEventListener(e, bump));
  };
  cleanupFns.push(detach);
}

function setupOutboundClicks(): void {
  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
    if (!anchor || !anchor.href) return;

    let url: URL;
    try {
      url = new URL(anchor.href, window.location.href);
    } catch {
      return;
    }

    if (url.host && url.host !== window.location.host) {
      emit("outbound_click", {
        url: url.href,
        host: url.host,
        link_text: (anchor.textContent || "").trim().slice(0, 80),
      });
    }
  };

  document.addEventListener("click", handler, { capture: true });
  cleanupFns.push(() => document.removeEventListener("click", handler, { capture: true } as EventListenerOptions));
}

function setupRageClicks(): void {
  let buffer: Array<{ t: number; el: Element }> = [];

  const handler = (e: MouseEvent) => {
    const el = e.target as Element | null;
    if (!el) return;
    const now = performance.now();
    buffer = buffer.filter((entry) => now - entry.t < RAGE_CLICK_WINDOW_MS && entry.el === el);
    buffer.push({ t: now, el });
    if (buffer.length >= RAGE_CLICK_COUNT) {
      emit("rage_click", {
        tag: el.tagName,
        id: (el as HTMLElement).id || "",
        class: ((el as HTMLElement).className || "").toString().slice(0, 120),
      });
      buffer = [];
    }
  };

  document.addEventListener("click", handler);
  cleanupFns.push(() => document.removeEventListener("click", handler));
}

function setupVisibilityFlush(): void {
  const handler = () => {
    if (document.visibilityState === "hidden") {
      emit("page_hidden");
    }
  };
  document.addEventListener("visibilitychange", handler);
  cleanupFns.push(() => document.removeEventListener("visibilitychange", handler));
}

/**
 * Initialise engagement signal tracking. Idempotent and safe to call multiple
 * times — only the first call wires listeners.
 */
export function initEngagementSignals(): void {
  if (started || typeof window === "undefined" || env.disableAnalytics) return;
  started = true;

  setupScrollDepth();
  setupDwellTime();
  setupActiveUser();
  setupOutboundClicks();
  setupRageClicks();
  setupVisibilityFlush();
}

/**
 * Reset per-page state. Call this on SPA route changes so scroll/time events
 * fire again for the new page.
 */
export function resetEngagementSignals(): void {
  cleanupFns.splice(0).forEach((fn) => {
    try {
      fn();
    } catch {
      /* noop */
    }
  });
  firedEvents = new Set<string>();
  started = false;
}
