import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const LottiePlayer = lazy(() => import("lottie-react"));

type LazyLottieProps = {
  loadAnimation: () => Promise<{ default: Record<string, unknown> }>;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
};

/**
 * Defers lottie-web until the animation enters (or nears) the viewport.
 */
export function LazyLottie({
  loadAnimation,
  className,
  style,
  loop = true,
}: LazyLottieProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(
    null
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    loadAnimation().then((mod) => {
      if (!cancelled) setAnimationData(mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [visible, loadAnimation]);

  if (reducedMotion) {
    return <div ref={ref} className={className} style={style} aria-hidden />;
  }

  return (
    <div ref={ref} className={className} style={style}>
      {visible && animationData ? (
        <Suspense fallback={null}>
          <LottiePlayer animationData={animationData} loop={loop} className="h-full w-full" />
        </Suspense>
      ) : null}
    </div>
  );
}
