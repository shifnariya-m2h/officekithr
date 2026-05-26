import { lazy, Suspense, useEffect, useState } from "react";

const ChatModal = lazy(() => import("@/AiAgent"));

const IDLE_MS = 8000;

/**
 * Loads the AI chat widget only after idle or first user interaction.
 * Keeps lottie + iframe off the critical path for LCP/TBT.
 */
export function DeferredChatWidget() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) return;

    const enable = () => setEnabled(true);

    const onInteraction = () => {
      enable();
      cleanupListeners();
    };

    const events = ["pointerdown", "keydown", "touchstart"] as const;
    const cleanupListeners = () => {
      events.forEach((e) =>
        window.removeEventListener(e, onInteraction, { capture: true })
      );
    };

    events.forEach((e) =>
      window.addEventListener(e, onInteraction, {
        once: true,
        passive: true,
        capture: true,
      })
    );

    let idleId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: IDLE_MS });
    } else {
      idleId = window.setTimeout(enable, IDLE_MS);
    }

    return () => {
      cleanupListeners();
      if (idleId !== undefined) {
        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        } else {
          clearTimeout(idleId);
        }
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <ChatModal />
    </Suspense>
  );
}
