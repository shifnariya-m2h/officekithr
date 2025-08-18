import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default () => {

  const hiringFeatures = [
    { title: "Recruitment Management", link: "/features/recruitment-management" },
    { title: "Employee Management", link: "/features/employee-management" },
    { title: "Exit Management", link: "/features/exit-management" }
  ];

  const workFeatures = [
    { title: "Attendance and Leave", link: "/features/attendance-and-leave" },
    { title: "Payroll and Compliance", link: "/features/payroll-and-compliance" }
  ];

  const payrollFeatures = [
    { title: "Performance Appraisal", link: "/features/performance-appraisal" },
    { title: "Self Service Portal", link: "/features/self-service-portal" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          {/* <Badge className="bg-white mb-4 text-[#3f5ffc] border border-[#ededed] hover:bg-white"  >
            Features
          </Badge> */}
          <Badge className="bg-white font-normal py-2  text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent"  >
            Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-6">
            Everything You Need <br /> for <span className="leading-snug gradient-text"  >Better HR</span>
          </h2>
        </div>
        {/* Features Grid */}
        <div className="space-y-40">
          {/* Hiring & Onboarding */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Hiring & Onboarding
                </h3>
                <p className="text-hr-text-secondary text-[16px] leading-normal mb-8">
                  Streamline the entire employee lifecycle — from hiring top talent to<br></br> smooth exits. Manage recruitment, centralize records, and handle<br></br> resignations and clearances effortlessly, all from one connected<br></br> system ensuring compliance and a great employee experience.
                </p>
              </div>

              <div className="space-y-4">
                {hiringFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center gap-3 text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                  >
                    <ArrowRight
                      className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>


            </div>

            <div className="relative">
              <div className="w-[100%]   flex items-center justify-center">
                <img className="rounded-2xl h-[25rem]" src="/public/00.png" alt="" />
              </div>
            </div>
          </div>

          {/* Work Management */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="w-[100%]     flex items-center justify-center">
                <img className="rounded-2xl h-[25rem]" src="/public/33.png" alt="" />
              </div>
            </div>

            <div className="space-y-4 order-1 lg:order-4 ">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6 !gap-10">
                  Time & Payroll
                </h3>
                <p className="text-hr-text-secondary text-[16px]  leading-normal mb-8 ">
                  Automate time tracking, leave requests, and payroll processing with precision. Track attendance in real-time, simplify approvals, and ensure accurate, on-time salary disbursement all while staying fully compliant <br></br>  withlabor laws and tax regulations. No spreadsheets, no manual errors <br></br>just seamless operations.
                </p>
              </div>

              <div className="space-y-4">
                {workFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center gap-3 text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                  >
                    <ArrowRight
                      className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-hr-text-primary mb-6">
                  Performance & Self-Service
                </h3>
                <p className="text-hr-text-secondary text-[16px]  leading-normal mb-8">
                  Empower your workforce with tools that drive growth and independence. Set clear performance goals, monitor progress, and deliver fair, timely feedback. Give employees the ability to manage their own HR tasks like accessing payslips or applying for leave—through an intuitive self service portal, boosting transparency and reducing admin work.                </p>
              </div>

              <div className="space-y-4">
                {payrollFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group flex items-center gap-3 text-hr-text-secondary hover:text-[#2463EB] transition-colors"
                  >
                    <ArrowRight
                      className="w-4 h-4 text-[#2463EB] transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-[110%] flex items-center justify-center">
                <img className="rounded-2xl h-[25rem]" src="/public/34.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

