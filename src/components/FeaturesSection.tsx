import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUpOnce } from "@/components/motion/FadeUpOnce";
import { StaggerReveal, StaggerItem } from "@/components/motion/StaggerReveal";

const SEO_LINK =
  "text-[#2463EB] font-medium hover:underline underline-offset-2 transition-colors";

export default function FeaturesSection() {
  const hiringFeatures = [
    { title: "Recruitment Management", link: "/features/recruitment-management" },
    { title: "Employee Management", link: "/features/employee-management" },
    { title: "Exit Management", link: "/features/exit-management" },
  ];

  const workFeatures = [
    { title: "Attendance and Leave", link: "/features/attendance-and-leave" },
    { title: "Payroll and Compliance", link: "/features/payroll-and-compliance" },
    { title: "India Payroll Compliance", link: "/compliance/india-payroll-compliance" },
    { title: "Payroll Software UAE", link: "/payroll-software-uae" },
    { title: "Face Recognition Attendance", link: "/longtail/face-recognition-attendance-india" },
  ];

  const payrollFeatures = [
    { title: "Performance Appraisal", link: "/features/performance-appraisal" },
    { title: "Self Service Portal", link: "/features/self-service-portal" },
    { title: "AI Pilot for HR Workflows", link: "/features/ai-pilot" },
  ];

  return (
    <section className="bg-background mb-[110px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUpOnce className="text-center mb-mb-secondory">
          <Badge className="bg-white font-normal py-2 text-[#1d4ed8] mb-4 border border-[#ededed] hover:bg-transparent">
            Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-6">
            Everything You Need <br /> for{" "}
            <span className="leading-snug gradient-text">Better HR</span>
          </h2>
          <p className="text-hr-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
            Recruitment, time tracking, statutory payroll, and employee
            self-service on one platform — built for mid-market teams in{" "}
            <Link to="/hrms-software-india" className={SEO_LINK}>
              India
            </Link>
            , the{" "}
            <Link to="/payroll-software-uae" className={SEO_LINK}>
              UAE
            </Link>
            , and the wider GCC. Explore each module below.
          </p>
        </FadeUpOnce>

        <StaggerReveal className="space-y-0">
          <StaggerItem>
            <div className="grid mb-mb-tursioury lg:grid-cols-2 gap-12 lg:gap-16 items-center p-4 sm:p-6 rounded-2xl bg-[#f4f7fa] max-w-full overflow-hidden">
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Hiring & Onboarding
                </h3>
                <p className="text-hr-text-secondary text-lg leading-relaxed mb-8 text-justify max-w-prose">
                  Run hiring and onboarding from one place: job postings, offer
                  letters, document collection, and day-one setup. Keep employee
                  records, org charts, and policy documents in a single HRMS —
                  then close out exits with clearance checklists and full-and-final
                  settlement. Works for teams scaling past spreadsheets and
                  email-based approvals.
                </p>
                <div className="space-y-4">
                  {hiringFeatures.map((feature, index) => (
                    <Link
                      key={index}
                      to={feature.link}
                      className="group flex items-center gap-3 text-[18px] text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{feature.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative max-w-full overflow-hidden">
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
          </StaggerItem>

          <StaggerItem>
            <div className="grid mb-mb-tursioury lg:grid-cols-2 gap-12 lg:gap-16 items-center p-4 sm:p-6 rounded-2xl bg-[#f4f7fa] max-w-full overflow-hidden">
              <div className="relative order-2 lg:order-1 max-w-full overflow-hidden">
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
              <div className="space-y-4 order-1 lg:order-4">
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Time & Payroll
                </h3>
                <p className="text-hr-text-secondary text-[18px] leading-normal mb-8 text-justify max-w-prose">
                  Capture attendance through biometric devices, mobile check-in, or{" "}
                  <Link
                    to="/longtail/face-recognition-attendance-india"
                    className={SEO_LINK}
                  >
                    face recognition
                  </Link>
                  . Apply shift rules, overtime, and leave policies automatically.
                  Payroll runs with{" "}
                  <Link
                    to="/compliance/india-payroll-compliance"
                    className={SEO_LINK}
                  >
                    PF, ESI, PT, and TDS
                  </Link>{" "}
                  for India and{" "}
                  <Link to="/compliance/uae-payroll-compliance" className={SEO_LINK}>
                    WPS and gratuity
                  </Link>{" "}
                  for UAE entities — salary slips, bank files, and statutory
                  returns included.
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
          </StaggerItem>

          <StaggerItem>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-6 rounded-2xl bg-[#f4f7fa]">
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Performance & Self-Service
                </h3>
                <p className="text-hr-text-secondary text-[18px] leading-normal mb-8 text-justify max-w-prose">
                  Set appraisal cycles, KPIs, and review templates that managers
                  can run without chasing spreadsheets. Employees update goals,
                  submit self-assessments, and view feedback in one place. The{" "}
                  <Link to="/features/self-service-portal" className={SEO_LINK}>
                    self-service portal
                  </Link>{" "}
                  lets staff download payslips, apply for leave, and track
                  approvals from web or mobile — less back-and-forth for HR teams.
                </p>
                <div className="space-y-4">
                  {payrollFeatures.map((feature, index) => (
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
              <div className="relative max-w-full overflow-hidden">
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
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
