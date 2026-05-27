import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadScriptOnce, scheduleAfterIdle } from "@/lib/performance/third-party";
import { isMobileViewport } from "@/lib/performance/media";

const WIDGET_SRC =
  "https://www.askmybot.ai/p/officekit-hr-qa84/widget.js";
const SCRIPT_ID = "askmybot-widget";
const DESKTOP_IDLE_MS = 30_000;
const MOBILE_IDLE_MS = 60_000;

/**
 * Loads AskMyBot after idle (desktop) or first interaction (mobile) so it does not
 * compete with LCP / main-thread work.
 */
export function AskMyBotLoader() {
  const { pathname } = useLocation();
  const isUaeLanding = pathname === "/ae" || pathname.startsWith("/ae/");

  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const isMobile = isMobileViewport();
    const timeout = isUaeLanding
      ? 90_000
      : isMobile
        ? MOBILE_IDLE_MS
        : DESKTOP_IDLE_MS;

    const cancel = scheduleAfterIdle(
      () => {
        void loadScriptOnce({
          id: SCRIPT_ID,
          src: WIDGET_SRC,
          defer: true,
        }).catch(() => {
          /* non-critical */
        });
      },
      {
        timeout,
        mobileInteractionOnly: isMobile,
      }
    );

    return cancel;
  }, [isUaeLanding]);

  return null;
}
