import {
  createContext,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const MotionProvider = lazy(() =>
  import("@/lib/performance/motion").then((m) => ({
    default: m.MotionProvider,
  }))
);

const MotionEnabledContext = createContext(false);

export function useMotionEnabled(): boolean {
  return useContext(MotionEnabledContext);
}

type LazyMotionBoundaryProps = {
  children: ReactNode;
};

/**
 * Defers Framer Motion runtime until after first paint.
 * Children render immediately (static); motion activates once the chunk loads.
 */
export function LazyMotionBoundary({ children }: LazyMotionBoundaryProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setEnabled(true);
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 1500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const t = window.setTimeout(enable, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <MotionEnabledContext.Provider value={enabled}>
      {enabled ? (
        <Suspense fallback={children}>
          <MotionProvider>{children}</MotionProvider>
        </Suspense>
      ) : (
        children
      )}
    </MotionEnabledContext.Provider>
  );
}
