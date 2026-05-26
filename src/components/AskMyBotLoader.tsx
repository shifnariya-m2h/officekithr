import { useEffect } from "react";

const WIDGET_SRC =
  "https://www.askmybot.ai/p/officekit-hr-qa84/widget.js";
const SCRIPT_ID = "askmybot-widget";
const IDLE_DELAY_MS = 8_000;

/**
 * Loads AskMyBot after idle or first user interaction so it does not compete
 * with LCP / main-thread work on mobile.
 */
export function AskMyBotLoader() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    let loaded = false;
    const load = () => {
      if (loaded || document.getElementById(SCRIPT_ID)) return;
      loaded = true;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = WIDGET_SRC;
      script.defer = true;
      document.body.appendChild(script);
    };

    const onInteraction = () => load();

    const events = ["pointerdown", "keydown", "touchstart"] as const;
    for (const event of events) {
      window.addEventListener(event, onInteraction, {
        once: true,
        passive: true,
      });
    }

    let idleId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => load(), {
        timeout: IDLE_DELAY_MS,
      });
    } else {
      idleId = window.setTimeout(load, IDLE_DELAY_MS) as unknown as number;
    }

    return () => {
      for (const event of events) {
        window.removeEventListener(event, onInteraction);
      }
      if ("cancelIdleCallback" in window && idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      } else if (idleId !== undefined) {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return null;
}
