import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FeaturePageLayout } from "@/components/seo/FeaturePageLayout";
import { FeatureSeoIntro } from "@/components/seo/FeatureSeoIntro";
import { Button } from "@/components/ui/button";
import {
  User,
  FileText,
  Download,
  Settings,
  MessageSquare,
  Shield,
  ArrowRight,
  Check,
  Play,
  CalendarCheck,
  ClipboardList,
  Bell,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import { loadSyncoraBot } from "@/components/syncoraBot";

const PAGE_PATH = "/features/self-service-portal";

const SelfServicePortal = () => {
  const features = [
    {
      icon: User,
      title: "Profile Management",
      description: "Employees can view and update their personal and professional information."
    },

    {
      icon: Settings,
      title: "Leave & Attendance View",
      description: "Real-time visibility into leave balances, attendance records, and upcoming holidays."
    },

    {
      icon: CalendarCheck,
      title: "Leave & Attendance Requests",
      description: "Apply for leave, regularize attendance, and check balances in real time."
    },
    {
      icon: FileText,
      title: "Payslip & Document Access",
      description: "Download payslips, tax forms, and HR letters instantly."
    },

    {
      icon: Bell,
      title: "Company Announcements",
      description: "Stay informed with news, updates, and policy changes in one place."
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Access all features from anywhere via the mobile app."
    }
  ];


  const benefits = [
    "24/7 self-service access",
    "Reduced HR workload",
    "Real-time information",
    "Mobile-friendly interface",
    "Secure data handling",
    "Instant request processing"
  ];

  return (
    <FeaturePageLayout
      path={PAGE_PATH}
      productName="Employee Self-Service — OfficeKit HR"
      breadcrumbLabel="Employee Self-Service"
    >
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-40 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.jpg')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground leading-tight mb-3">
              Employee Self Service


            </h3>
              

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-snug mb-6" style={{ lineHeight: 1.2 }}>
              Power to Your People,<br></br> Relief for Your HR

              {/* <span className="gradient-text"> HR Workload</span> */}

            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your employees to manage their own profiles, leave requests, and attendance, while reducing HR’s administrative workload. OfficeKit HR’s Employee Self Service gives your team control and your HR team relief.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* <Link to="/contact"> */}
              <Link to="/contact">
              <Button className="btn-cta h-[44px] py-[22px] group"  >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              {/* </Link> */}
              <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
                <Button
                  variant="outline"
                  className="btn-outline group h-[44px] px-6 group"
                >                  <Play className="mr-2 h-4 w-4" />
                  Watch Overview
                </Button>
              </Link>
            </div>


          </div>
        </div>
      </section>

      <FeatureSeoIntro path={PAGE_PATH} />

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Complete Self-Service Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower your employees with tools to manage their HR needs independently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card text-center group">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}



      <section className="py-20 bg-[#094ace] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to Empower Your Employees?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies improving employee satisfaction with self-service HR.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 ">
              <Link to="/contact">
                <Button className="btn-cta hover:bg-white bg-white text-primary h-[44px] py-[22px] group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="btn-outline h-[44px] px-6 group bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </FeaturePageLayout>
  );
};

export default SelfServicePortal;