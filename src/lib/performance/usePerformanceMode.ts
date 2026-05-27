import { useEffect, useState } from "react";
import {
  prefersReducedMotion,
  shouldUseMobilePerformanceMode,
} from "@/lib/performance/media";

export type PerformanceMode = "mobile" | "desktop";

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>(() =>
    typeof window !== "undefined" && shouldUseMobilePerformanceMode()
      ? "mobile"
      : "desktop"
  );

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const coarseMq = window.matchMedia("(pointer: coarse)");

    const sync = () => {
      const next = shouldUseMobilePerformanceMode() ? "mobile" : "desktop";
      setMode(next);
      document.documentElement.dataset.perfMode = next;
    };

    sync();
    mobileMq.addEventListener("change", sync);
    coarseMq.addEventListener("change", sync);
    return () => {
      mobileMq.removeEventListener("change", sync);
      coarseMq.removeEventListener("change", sync);
    };
  }, []);

  return mode;
}

/** Animations allowed only on desktop without reduced-motion preference. */
export function useShouldAnimate(): boolean {
  const mode = usePerformanceMode();
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return mode === "desktop" && !reduced;
}
