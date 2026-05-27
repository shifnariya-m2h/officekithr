import { useEffect } from "react";
import { setBodyScrollLocked } from "@/lib/performance/body-scroll-lock";

/** Scroll lock + Escape to close mobile nav drawer. */
export function useMobileNavLock(
  isOpen: boolean,
  onClose: () => void
): void {
  useEffect(() => {
    if (!isOpen) return;

    setBodyScrollLocked(true);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      setBodyScrollLocked(false);
    };
  }, [isOpen, onClose]);
}
