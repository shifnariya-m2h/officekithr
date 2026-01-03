import { useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface InteractiveScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export const InteractiveScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: InteractiveScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      case "left":
        return "translateX(50px)";
      case "right":
        return "translateX(-50px)";
      case "fade":
        return "translateY(0)";
      default:
        return "translateY(50px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : getTransform(),
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

