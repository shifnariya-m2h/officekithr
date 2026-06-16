import type { ReactNode } from "react";
import { m } from "@/lib/performance/motion";
import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";
import { useMotionEnabled } from "./LazyMotionBoundary";
import { ctaLift } from "./variants";

type CtaHoverLiftProps = {
  children: ReactNode;
  className?: string;
};

/** CTA hover lift — translateY only, no layout shift. */
export function CtaHoverLift({ children, className }: CtaHoverLiftProps) {
  const motionEnabled = useMotionEnabled();
  const shouldAnimate = useShouldAnimate();

  if (!motionEnabled || !shouldAnimate) {
    return <div className={`cta-lift ${className ?? ""}`}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      variants={ctaLift}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{ willChange: "transform" }}
    >
      {children}
    </m.div>
  );
}
