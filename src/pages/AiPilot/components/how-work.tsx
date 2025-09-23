import { useEffect, useRef } from "react";
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

              <h3 className="text-3xl font-semibold text-hr-text-primary">
                Meet AI Pilot
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                Say Hello to a New Way of Working with HRMS
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-10 h-4 text-white" />
                  </div>
                  <span>
                    AI Pilot is a built-in, intelligent assistant that understands voice and text
                    commands.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-10 h-4 text-white" />
                  </div>
                  <span>
                    From checking your leave balance to applying leave, it simplifies
                    everyday HR tasks using AI-powered automation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-10 h-4 text-white" />
                  </div>
                  <span>
                    No menus. No waiting. Just say what you need.
                  </span>
                </li>

              </ul>
            </div>

            {/* Image Right */}
            <div className="flex justify-center order-2">
              <img
                className="rounded-2xl h-[25rem] object-cover"
                src="/Ai-pilot-chatbot.png"
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
                src="/AI-pilot-voice.png"
                alt="Register Employees via Face Scan"
              />
            </div>

            {/* Content Right */}
            <div className="space-y-6 order-1 lg:order-2">

              <h3 className="text-3xl font-semibold text-hr-text-primary">
                What AI Pilot Can Do
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                AI Pilot listens, understands, and responds—turning conversations into actions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Check Leave Balance
                    Ask about your remaining leaves and get instant answers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    View Upcoming Holidays
                    Know your company’s next holidays—just ask.

                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Download Payslips
                    Request and receive your payslips within the chat.

                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Access Company Policies
                    Ask for any HR policy and get it displayed immediately.

                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Apply for Leave
                    Say your leave dates—AI Pilot will handle the request.

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

              <h3 className="text-3xl font-semibold text-hr-text-primary">
                How It Works
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed text-justify max-w-prose">
                AI Pilot is powered by advanced natural language processing and keyword detection, working inside the OfficeKit HR platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Voice & Text Commands – Talk or type, your choice.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    AI-Driven Understanding – Detects intent and executes tasks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Real-Time Actions – Instant responses, no manual steps.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2463EB]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Fully Integrated – No external tools. No separate app.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="flex justify-center order-2">
              <img
                className="rounded-2xl h-[25rem] object-cover"
                src="/chastbot-pilot.png"
                alt="Employee Management"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
