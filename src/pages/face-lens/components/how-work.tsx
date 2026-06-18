import { useEffect, useRef } from "react";
import { Badge } from "../../../components/ui/badge";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    badge: "Step 01",
    title: "Set up your workspace",
    description:
      "Connect Face Kit to OfficeKit HR in minutes — no hardware or IT project.",
    bullets: [
      "Works with your existing HRMS",
      "Face scan ready in minutes",
    ],
    image: "/dashboardok.webp",
    imageAlt: "OfficeKit HR workspace setup",
    imageFirst: false,
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
    image: "/facescans02.webp",
    imageAlt: "Employee face registration",
    imageFirst: true,
  },
  {
    badge: "Step 03",
    title: "Mark attendance",
    description:
      "Employees glance at the screen — attendance records instantly for payroll.",
    bullets: [
      "Touch-free check-in",
      "Real-time, error-free logs",
    ],
    image: "/mobile-mockup.webp",
    imageAlt: "Touchless attendance on mobile",
    imageFirst: false,
  },
] as const;

export default function HowItWorks() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-background mb-[110px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground pt-6">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Three steps from setup to live face scan attendance.
          </p>
        </div>

        <div className="space-y-16">
          {STEPS.map((step, index) => (
            <div
              key={step.badge}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 rounded-2xl bg-[#F3F5FF]"
            >
              <div
                className={`space-y-6 order-1 ${
                  step.imageFirst ? "lg:order-2" : ""
                }`}
              >
                <Badge className="bg-white font-normal py-2 text-[#3f5ffc] text-[16px] border border-[#ededed]">
                  {step.badge}
                </Badge>
                <h3 className="text-3xl font-semibold text-hr-text-primary">
                  {step.title}
                </h3>
                <p className="text-hr-text-secondary text-lg leading-relaxed max-w-prose">
                  {step.description}
                </p>
                <ul className="space-y-4">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB] shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex justify-center order-2 ${
                  step.imageFirst ? "lg:order-1" : ""
                }`}
              >
                <img
                  className="rounded-2xl h-[25rem] object-cover"
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
