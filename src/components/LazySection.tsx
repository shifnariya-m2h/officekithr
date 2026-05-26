import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

type LazySectionProps = {
  loader: () => Promise<{ default: ComponentType }>;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
};

function SectionPlaceholder({ minHeight }: { minHeight?: string }) {
  return (
    <div
      className="w-full"
      style={{ minHeight: minHeight ?? "12rem" }}
      aria-hidden
    />
  );
}

/**
 * Mounts a section only when it nears the viewport (below-the-fold code splitting).
 */
export function LazySection({
  loader,
  fallback,
  rootMargin = "280px 0px",
  minHeight,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const LazyComponent = lazy(loader);
  const placeholder = fallback ?? (
    <SectionPlaceholder minHeight={minHeight} />
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const show = () => setVisible(true);

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={placeholder}>
          <LazyComponent />
        </Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
}
