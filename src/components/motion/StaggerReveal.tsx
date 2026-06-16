import type { ReactNode } from "react";
import { m } from "@/lib/performance/motion";
import { useShouldAnimate } from "@/lib/performance/usePerformanceMode";
import { useMotionEnabled } from "./LazyMotionBoundary";
import { staggerContainer, staggerItem } from "./variants";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

/** Stagger children reveal — each child must be a direct `StaggerItem`. */
export function StaggerReveal({
  children,
  className,
  as = "div",
}: StaggerRevealProps) {
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
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
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
      variants={staggerItem}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Tag>
  );
}
