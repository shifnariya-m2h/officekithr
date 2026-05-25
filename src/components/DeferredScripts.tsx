import { useEffect } from "react";

import { COOKIE_CONSENT_EVENT, getConsent } from "@/lib/consent";
import { env, isTawkEnabled } from "@/lib/env";

const LOAD_DELAY_MS = 3500;

function injectTawk(): void {
  if (!isTawkEnabled() || document.getElementById("tawk-script")) return;

  const s = document.createElement("script");
  s.id = "tawk-script";
  s.async = true;
  s.src = `https://embed.tawk.to/${env.tawkPropertyId}/${env.tawkWidgetId}`;
  s.charset = "UTF-8";
  s.setAttribute("crossorigin", "*");
  document.body.appendChild(s);
}

function tryLoadTawk(): void {
  if (getConsent() === "accepted") injectTawk();
}

/**
 * Loads non-critical third-party scripts after idle / delay to protect LCP & INP.
 */
export function DeferredScripts() {
  useEffect(() => {
    if (!isTawkEnabled()) return;

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        return window.requestIdleCallback(tryLoadTawk, {
          timeout: LOAD_DELAY_MS,
        });
      }
      return window.setTimeout(tryLoadTawk, LOAD_DELAY_MS);
    };

    const id = schedule();
    window.addEventListener(COOKIE_CONSENT_EVENT, tryLoadTawk);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, tryLoadTawk);
      if (typeof id === "number") clearTimeout(id);
      else window.cancelIdleCallback?.(id);
    };
  }, []);

  return null;
}
