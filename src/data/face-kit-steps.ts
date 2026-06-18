import type { ProductStep } from "@/components/product";

/** Bump when replacing images in `public/` so browsers pick up the new file. */
const FACE_KIT_ASSET_VERSION = "1";

function faceKitAsset(path: string): string {
  return `${path}?v=${FACE_KIT_ASSET_VERSION}`;
}

/** Top-of-page hero mockup — separate from step images so each can be swapped independently. */
export const FACE_KIT_HERO_IMAGE = faceKitAsset("/okai-lens.png");

/** How-it-works step images for /features/face-kit — keep in sync with `public/`. */
export const FACE_KIT_STEP_IMAGES = {
  setup: faceKitAsset("/hero-mains.webp"),
  faceScan: faceKitAsset("/facescans02.webp"),
} as const;

export const FACE_KIT_STEPS: ProductStep[] = [
  {
    badge: "Step 01",
    title: "Set up your workspace",
    description:
      "Connect Face Kit to OfficeKit HR in minutes — no hardware or IT project.",
    bullets: [
      "Works with your existing HRMS",
      "Face scan ready in minutes",
    ],
    image: FACE_KIT_STEP_IMAGES.setup,
    imageAlt: "Face Kit workspace setup in OfficeKit HR",
  },
  {
    badge: "Step 02",
    title: "Register faces",
    description:
      "Each employee scans once. Their face links securely to their HR profile.",
    bullets: [
      "Accurate face matching",
      "Encrypted, profile-linked data",
    ],
    image: FACE_KIT_STEP_IMAGES.faceScan,
    imageAlt: "Register employees via face scan",
    imageFirst: true,
  },
  {
    badge: "Step 03",
    title: "Mark attendance",
    description:
      "Employees glance at the screen — attendance records instantly for payroll.",
    bullets: ["Touch-free check-in", "Real-time, error-free logs"],
    image: FACE_KIT_STEP_IMAGES.faceScan,
    imageAlt: "Mark attendance with AI face scan",
  },
];
