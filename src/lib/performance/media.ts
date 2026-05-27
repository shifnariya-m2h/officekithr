/** Viewport helpers for mobile-first performance mode. */

export const MOBILE_MAX_WIDTH_PX = 767;
export const TABLET_MAX_WIDTH_PX = 1023;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH_PX}px)`).matches;
}

export function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

/** True when we should skip heavy animation / blur / autoplay. */
export function shouldUseMobilePerformanceMode(): boolean {
  return isMobileViewport() || (isCoarsePointer() && !window.matchMedia("(min-width: 1024px)").matches);
}
