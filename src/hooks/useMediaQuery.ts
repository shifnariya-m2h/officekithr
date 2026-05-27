import { useSyncExternalStore } from "react";

function subscribe(query: string, onStoreChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

/** SSR-safe matchMedia hook (defaults to `defaultValue` on server). */
export function useMediaQuery(
  query: string,
  defaultValue = false
): boolean {
  return useSyncExternalStore(
    (onStoreChange) => subscribe(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => defaultValue
  );
}

/** lg breakpoint — desktop nav with dropdowns. */
export function useIsDesktopNav(): boolean {
  return useMediaQuery("(min-width: 1024px)", false);
}
