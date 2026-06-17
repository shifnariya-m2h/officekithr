import { useEffect } from "react";

export const HR_POPUP_SENTINEL_ID = "hr-popup-scroll-sentinel";
const POPUP_SCROLL_MIN_PX = 280;

/** In-memory only — avoids sessionStorage (blocked in some preview/iframe contexts). */
let hrPopupShown = false;

export function markHrPopupShown(): void {
  hrPopupShown = true;
}

function getScrollTop(): number {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function hasScrolledEnough(): boolean {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return false;
  const threshold = Math.min(POPUP_SCROLL_MIN_PX, scrollable * 0.2);
  return getScrollTop() >= threshold;
}

/**
 * Opens the HR popup after the user scrolls past the hero (sentinel) or ~280px fallback.
 */
export function useHrPopupTrigger(
  enabled: boolean,
  isOpen: boolean,
  onOpen: () => void
) {
  useEffect(() => {
    if (!enabled || isOpen || typeof window === "undefined" || hrPopupShown) {
      return;
    }

    let opened = false;
    let sentinelSeen = false;
    let observer: IntersectionObserver | null = null;
    let detachScroll: (() => void) | null = null;
    let mutationObserver: MutationObserver | null = null;
    let attachTimer = 0;

    const open = () => {
      if (opened || hrPopupShown) return;
      opened = true;
      hrPopupShown = true;
      observer?.disconnect();
      mutationObserver?.disconnect();
      window.clearInterval(attachTimer);
      detachScroll?.();
      onOpen();
    };

    const attachScrollFallback = () => {
      if (detachScroll) return;

      const check = () => {
        if (hasScrolledEnough()) open();
      };

      window.addEventListener("scroll", check, { passive: true });
      const resizeObserver = new ResizeObserver(check);
      resizeObserver.observe(document.documentElement);
      check();

      detachScroll = () => {
        window.removeEventListener("scroll", check);
        resizeObserver.disconnect();
      };
    };

    const attachSentinel = (el: HTMLElement) => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          if (entry.isIntersecting) {
            sentinelSeen = true;
            return;
          }
          if (sentinelSeen && entry.boundingClientRect.top < 0) {
            open();
          }
        },
        { threshold: 0 }
      );
      observer.observe(el);
    };

    const tryAttachSentinel = () => {
      const el = document.getElementById(HR_POPUP_SENTINEL_ID);
      if (!el) return false;
      attachSentinel(el);
      detachScroll?.();
      detachScroll = null;
      return true;
    };

    const setup = () => {
      if (opened) return;
      if (tryAttachSentinel()) return;
      attachScrollFallback();
    };

    setup();

    if (!document.getElementById(HR_POPUP_SENTINEL_ID)) {
      mutationObserver = new MutationObserver(setup);
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      attachTimer = window.setInterval(() => {
        if (tryAttachSentinel()) {
          window.clearInterval(attachTimer);
          mutationObserver?.disconnect();
        }
      }, 250);
    }

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
      window.clearInterval(attachTimer);
      detachScroll?.();
    };
  }, [enabled, isOpen, onOpen]);
}
