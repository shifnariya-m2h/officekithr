import { prefersReducedMotion } from "@/lib/performance/media";
import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";
import { cn } from "@/lib/utils";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type TestimonialMarqueeProps = {
  children: ReactNode;
  className?: string;
  groupClassName?: string;
  /** Duration in seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  /**
   * Inline duplicate inside one flex row — keeps spacing even at the loop seam.
   * Use for logo strips; default two-group mode suits testimonial cards.
   */
  seamless?: boolean;
  /** When true, animates on mobile too (still respects prefers-reduced-motion). */
  animateOnMobile?: boolean;
};

/**
 * Slow horizontal marquee — pure CSS transform (GPU), no JS animation loop.
 * Pauses when prefers-reduced-motion or mobile performance mode is active.
 */
export function TestimonialMarquee({
  children,
  className = "",
  groupClassName = "",
  duration = 55,
  reverse = false,
  seamless = false,
  animateOnMobile = false,
}: TestimonialMarqueeProps) {
  const desktopAnimate = useShouldAnimate();
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const shouldAnimate = animateOnMobile ? !reduced : desktopAnimate;

  const trackClass = cn(
    shouldAnimate ? "marquee-track" : "marquee-track-static",
    reverse && shouldAnimate && "marquee-track-reverse",
    seamless && shouldAnimate && "marquee-track-seamless"
  );

  const trackStyle = shouldAnimate
    ? ({ "--marquee-duration": `${duration}s` } as CSSProperties)
    : undefined;

  return (
    <div
      className={cn("marquee-root overflow-hidden", className)}
      aria-hidden={false}
    >
      <div className={trackClass} style={trackStyle}>
        {seamless && shouldAnimate ? (
          <div className={cn("marquee-group", groupClassName)}>
            {children}
            <div aria-hidden="true" className="contents">
              {children}
            </div>
          </div>
        ) : (
          <>
            <div className={cn("marquee-group", groupClassName)}>{children}</div>
            {shouldAnimate ? (
              <div className={cn("marquee-group", groupClassName)} aria-hidden="true">
                {children}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
