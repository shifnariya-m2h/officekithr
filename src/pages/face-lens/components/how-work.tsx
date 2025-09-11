import { useEffect, useRef } from "react";
import { Badge } from "../../../components/ui/badge";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionsRef = useRef([]);

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground pt-6">
            How it works
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">

          {/* Step 01 */}
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 rounded-2xl bg-[#F3F5FF]"
          >
            {/* Content Left */}
            <div className="space-y-6 order-1">
              <Badge className="bg-white font-normal py-2 text-[#3f5ffc] text-[16px] border border-[#ededed]">
                Step 01
              </Badge>
              <h3 className="text-3xl font-semibold text-hr-text-primary">
                Quick Workspace Setup
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                Get your workspace ready in minutes. No IT headaches, no heavy
                installation—just a smooth, AI-powered start to smarter
                attendance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Seamless Integration – Works easily with your existing
                    OfficeKit HR system.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    AI-Ready in Minutes – Activate face-recognition attendance
                    instantly.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="flex justify-center order-2">
              <img
                className="rounded-2xl h-[25rem] object-cover"
                src="/QWorkspace.png"
                alt="Quick Workspace Setup"
              />
            </div>
          </div>

          {/* Step 02 */}
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 rounded-2xl bg-[#F3F5FF]"
          >
            {/* Image Left on desktop */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                className="rounded-2xl h-[25rem] object-cover"
                src="/facescans02.png"
                alt="Register Employees via Face Scan"
              />
            </div>

            {/* Content Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <Badge className="bg-white font-normal py-2 text-[16px] text-[#3f5ffc] border border-[#ededed]">
                Step 02
              </Badge>
              <h3 className="text-3xl font-semibold text-hr-text-primary">
                Register Employees via Face Scan
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                Adding employees is quick and secure. Each person’s unique
                facial data is captured and safely linked to their profile for
                effortless identification.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    <span className="font-semibold">Accurate Identification</span> – Captures every employee’s unique
                    facial markers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    <span className="font-semibold">Secure Linking</span> – Encrypted data is tied directly to their HR
                    profile.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 03 */}
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 rounded-2xl bg-[#F3F5FF]"
          >
            {/* Content Left */}
            <div className="space-y-6 order-1">
              <Badge className="bg-white font-normal py-2 text-[16px] text-[#3f5ffc] border border-[#ededed]">
                Step 03
              </Badge>
              <h3 className="text-3xl font-semibold text-hr-text-primary">
                Employee Management
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                Attendance is now as easy as looking at the screen. Employees
                just glance, the system records instantly, and HR gets accurate,
                error-free data.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    <span className="font-semibold">Touch-Free & Hygienic</span> – No cards, fingerprints, or manual
                    entries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    <span className="font-semibold">Real-Time Accuracy</span> – Automated records with zero human
                    errors.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="flex justify-center order-2">
              <img
                className="rounded-2xl h-[25rem] object-cover"
                src="/QWorkspace.png"
                alt="Employee Management"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
