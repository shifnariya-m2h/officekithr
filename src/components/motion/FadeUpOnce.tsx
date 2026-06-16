import type { ReactNode } from "react";
import { m } from "@/lib/performance/motion";
import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";
import { useMotionEnabled } from "./LazyMotionBoundary";
import { fadeUpOnce } from "./variants";

type FadeUpOnceProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

/** Single fade-up on enter — transform + opacity only. */
export function FadeUpOnce({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeUpOnceProps) {
  const motionEnabled = useMotionEnabled();
  const shouldAnimate = useShouldAnimate();

  if (!motionEnabled || !shouldAnimate) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Tag = m[as];

  return (
    <Tag
      className={className}
      variants={fadeUpOnce}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Tag>
  );
}
