import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0)" : getTransform(),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
