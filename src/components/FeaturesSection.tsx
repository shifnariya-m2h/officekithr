import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesSection() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const hiringFeatures = [
    { title: "Recruitment Management", link: "/features/recruitment-management" },
    { title: "Employee Management", link: "/features/employee-management" },
    { title: "Exit Management", link: "/features/exit-management" },
  ];

  const workFeatures = [
    { title: "Attendance and Leave", link: "/features/attendance-and-leave" },
    { title: "Payroll and Compliance", link: "/features/payroll-and-compliance" },
  ];

  const payrollFeatures = [
    { title: "Performance Appraisal", link: "/features/performance-appraisal" },
    { title: "Self Service Portal", link: "/features/self-service-portal" },
  ];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (!section) return;
      if (reducedMotion) {
        section.classList.add("in-view");
        return;
      }
      section.classList.add("section-fade-in");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background mb-[110px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-mb-secondory">
          <Badge className="bg-white font-normal py-2 text-[#1d4ed8] mb-4 border border-[#ededed] hover:bg-transparent">
            Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-6">
            Everything You Need <br /> for{" "}
            <span className="leading-snug gradient-text">Better HR</span>
          </h2>
        </div>

        <div>
          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            className="grid mb-mb-tursioury lg:grid-cols-2 gap-12 lg:gap-16 items-center p-4 sm:p-6 rounded-2xl bg-[#f4f7fa] max-w-full overflow-hidden"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                Hiring & Onboarding
              </h3>
              <p className="text-hr-text-secondary text-lg leading-relaxed mb-8 text-justify max-w-prose">
                Streamline the entire employee lifecycle — from hiring top talent
                to smooth exits. Manage recruitment, centralize records, and
                handle resignations and clearances effortlessly, all from one
                connected system ensuring compliance and a great employee
                experience.
              </p>
              <div className="space-y-4">
                {hiringFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center gap-3 text-[18px]  text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1  " />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative max-w-full overflow-hidden">
              <div className="w-full flex items-center justify-center">
                <img
                  className="rounded-2xl w-full h-auto max-w-full"
                  src="/HiringOnboardings.webp"
                  alt="Hiring and onboarding feature - OfficeKit HR"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            className="grid mb-mb-tursioury lg:grid-cols-2 gap-12 lg:gap-16 items-center p-4 sm:p-6 rounded-2xl bg-[#f4f7fa] max-w-full overflow-hidden"
          >
            <div className="relative order-2 lg:order-1 max-w-full overflow-hidden">
              <div className="w-full flex items-center justify-center">
                <img
                  className="rounded-2xl w-full h-auto max-w-full"
                  src="/TimePayroll-min.webp"
                  alt="Time and payroll feature - OfficeKit HR"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-4">
              <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                Time & Payroll
              </h3>
              <p className="text-hr-text-secondary text-[18px] leading-normal mb-8 text-justify max-w-prose">
                Automate time tracking, leave requests, and payroll processing
                with precision. Track attendance in real-time, simplify
                approvals, and ensure accurate, on-time salary disbursement all
                while staying fully compliant with labor laws and tax regulations.
                No spreadsheets, no manual errors — just seamless operations.
              </p>
              <div className="space-y-4">
                {workFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center text-[18px] gap-3 text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              sectionsRef.current[2] = el;
            }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center   p-6 rounded-2xl bg-[#f4f7fa]"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                Performance & Self-Service
              </h3>
              <p className="text-hr-text-secondary text-[18px] leading-normal mb-8 text-justify max-w-prose">
                Empower your workforce with tools that drive growth and
                independence. Set clear performance goals, monitor progress, and
                deliver fair, timely feedback. Give employees the ability to
                manage their own HR tasks like accessing payslips or applying for
                leave through an intuitive self service portal, boosting
                transparency and reducing admin work.
              </p>
              <div className="space-y-4">
                {payrollFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center text-[18px] gap-3 text-hr-text-secondary hover:text-[#2463EB] transition-colors "
                  >
                    <ArrowRight className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative max-w-full overflow-hidden">
              <div className="w-full flex items-center justify-center">
                <img
                  className="rounded-2xl w-full h-auto max-w-full"
                  src="/Performance-selfservice-min.webp"
                  alt="Performance and self-service feature - OfficeKit HR"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
