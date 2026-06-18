import {
  ProductStepsSection,
  type ProductStep,
} from "@/components/product/ProductMotion";

const STEPS: ProductStep[] = [
  {
    title: "Meet AI Pilot",
    description:
      "A built-in HR assistant that understands voice and text — no extra apps or setup.",
    bullets: [
      "Voice and chat in one place",
      "Handles everyday HR tasks instantly",
      "No menus — just ask what you need",
    ],
    image: "/Ai-pilot-chatbot.webp",
    imageAlt: "AI Pilot chat interface",
  },
  {
    title: "What AI Pilot can do",
    description:
      "Turn conversations into HR actions — leave, payslips, policies, and more.",
    bullets: [
      "Check leave balance and apply for leave",
      "Download payslips on demand",
      "View holidays and company policies",
    ],
    image: "/chatbot.webp",
    imageAlt: "AI Pilot voice and text commands",
    imageFirst: true,
  },
  {
    title: "How it works",
    description:
      "Natural language processing inside OfficeKit HR — real-time answers, fully integrated.",
    bullets: [
      "Voice or text — your choice",
      "Detects intent and runs tasks",
      "No external tools required",
    ],
    image: "/Ai-pilot-chatbot.webp",
    imageAlt: "AI Pilot integrated in OfficeKit HR",
  },
];

export default function HowItWorks() {
  return (
    <ProductStepsSection
      subtitle="Ask, act, and automate HR workflows in seconds."
      steps={STEPS}
    />
  );
}
