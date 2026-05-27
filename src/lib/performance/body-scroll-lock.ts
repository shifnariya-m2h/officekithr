let lockCount = 0;

/** Lock document scroll without inline body styles (avoids layout thrash). */
export function setBodyScrollLocked(locked: boolean): void {
  if (typeof document === "undefined") return;

  if (locked) {
    lockCount += 1;
    if (lockCount === 1) {
      document.documentElement.classList.add("nav-scroll-lock");
    }
    return;
  }

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.documentElement.classList.remove("nav-scroll-lock");
  }
}
