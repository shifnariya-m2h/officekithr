type LoadScriptOptions = {
  id: string;
  src: string;
  defer?: boolean;
  async?: boolean;
  /** Skip loading entirely (e.g. mobile perf mode until interaction). */
  disabled?: boolean;
};

/**
 * Injects a third-party script once. Returns a promise that resolves on load.
 */
export function loadScriptOnce({
  id,
  src,
  defer = true,
  async: asyncAttr,
  disabled = false,
}: LoadScriptOptions): Promise<void> {
  if (disabled || typeof document === "undefined") {
    return Promise.resolve();
  }

  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing?.dataset.loaded === "true") {
    return Promise.resolve();
  }
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    if (defer) script.defer = true;
    if (asyncAttr) script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

type IdleScheduleOptions = {
  timeout?: number;
  /** On mobile, wait for first user gesture before running. */
  mobileInteractionOnly?: boolean;
};

/**
 * Runs callback after idle, or after first interaction on mobile when requested.
 */
export function scheduleAfterIdle(
  callback: () => void,
  { timeout = 8_000, mobileInteractionOnly = false }: IdleScheduleOptions = {}
): () => void {
  if (typeof window === "undefined") return () => undefined;

  const isMobile =
    window.matchMedia("(max-width: 767px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  let ran = false;
  const run = () => {
    if (ran) return;
    ran = true;
    callback();
  };

  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const scheduleIdle = () => {
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run, { timeout });
    } else {
      timeoutId = setTimeout(run, Math.min(timeout, 4_000));
    }
  };

  const interactionEvents = ["pointerdown", "keydown", "touchstart"] as const;
  const onInteraction = () => {
    for (const event of interactionEvents) {
      window.removeEventListener(event, onInteraction);
    }
    run();
  };

  if (isMobile && mobileInteractionOnly) {
    for (const event of interactionEvents) {
      window.addEventListener(event, onInteraction, { once: true, passive: true });
    }
    timeoutId = setTimeout(run, timeout);
  } else {
    scheduleIdle();
  }

  return () => {
    if (idleId !== undefined && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) clearTimeout(timeoutId);
    for (const event of interactionEvents) {
      window.removeEventListener(event, onInteraction);
    }
  };
}
