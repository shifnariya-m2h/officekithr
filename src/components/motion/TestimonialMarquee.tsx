import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";
import type { ReactNode } from "react";

type TestimonialMarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Duration in seconds for one full loop. */
  duration?: number;
};

/**
 * Slow horizontal marquee — pure CSS transform (GPU), no JS animation loop.
 * Pauses when prefers-reduced-motion or mobile performance mode is active.
 */
export function TestimonialMarquee({
  children,
  className = "",
  duration = 55,
}: TestimonialMarqueeProps) {
  const shouldAnimate = useShouldAnimate();

  return (
    <div
      className={`marquee-root overflow-hidden ${className}`}
      aria-hidden={false}
    >
      <div
        className={shouldAnimate ? "marquee-track" : "marquee-track-static"}
        style={
          shouldAnimate
            ? ({ "--marquee-duration": `${duration}s` } as React.CSSProperties)
            : undefined
        }
      >
        <div className="marquee-group">{children}</div>
        {shouldAnimate ? (
          <div className="marquee-group" aria-hidden="true">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
