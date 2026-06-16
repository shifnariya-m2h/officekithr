/** Shared Framer Motion tokens — transform + opacity only (GPU-friendly). */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeUpOnce = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
} as const;

export const ctaLift = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: 0.2, ease: EASE_OUT } },
  tap: { y: 0, transition: { duration: 0.1 } },
} as const;
