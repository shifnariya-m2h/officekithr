import { lazy, Suspense, useRef, type ReactNode } from "react";
import { m, useScroll, useTransform } from "@/lib/performance/motion";
import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";

const MotionProvider = lazy(() =>
  import("@/lib/performance/motion").then((mod) => ({
    default: mod.MotionProvider,
  }))
);

type HeroProductParallaxProps = {
  children: ReactNode;
  className?: string;
};

function HeroProductParallaxInner({
  children,
  className,
}: HeroProductParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ y, willChange: "transform" }}
    >
      {children}
    </m.div>
  );
}

/**
 * Subtle product-image parallax — desktop only, transform-only.
 * Self-contained MotionProvider so the hero stays outside the below-fold boundary.
 */
export function HeroProductParallax({
  children,
  className,
}: HeroProductParallaxProps) {
  const shouldAnimate = useShouldAnimate();

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionProvider>
        <HeroProductParallaxInner className={className}>
          {children}
        </HeroProductParallaxInner>
      </MotionProvider>
    </Suspense>
  );
}
