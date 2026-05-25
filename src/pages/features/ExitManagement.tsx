import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  UserMinus,
  ClipboardList,
  MessageCircle,
  Calculator,
  BarChart3,
  Shield,
  ArrowRight,
  Check,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import { loadSyncoraBot } from "@/components/syncoraBot";

const ExitManagement = () => {
  const features = [
    {
      icon: UserMinus,
      title: "Digital Resignation & Approvals",
      description: "Employees can submit resignations online with policy-based multi-level approvals for smooth, compliant exits."
    },
    {
      icon: ClipboardList,
      title: "Asset Handover & Clearance",
      description: "Track and confirm return of company assets with department-wise clearances before final release."
    },
    {
      icon: Shield,
      title: "Structured Exit Process",
      description: "Automated checklists ensure no step is missed from handovers to final approvals."
    },
    {
      icon: MessageCircle,
      title: "Feedback & Insights",
      description: "Conduct exit interviews and surveys to understand reasons for leaving and improve retention."
    },
    {
      icon: Calculator,
      title: "Full & Final Settlement Automation",
      description: "Automatically calculate dues, leave encashment, and settlements with accuracy."
    },
    {
      icon: BarChart3,
      title: "Instant Documentation & Analytics",
      description: "Generate relieving/experience letters instantly and track exit trends with detailed reports."
    }
  ];

  const benefits = [
    "Streamlined exit process",
    "Complete asset tracking",
    "Automated settlements",
    "Compliance documentation",
    "Knowledge preservation",
    "Analytics-driven insights"
  ];

  return (
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
              Exit & Asset Management
            </h3>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-snug mb-6" style={{ lineHeight: 1.2 }}>
              Offboard Employees Smoothly Protect <span className="gradient-text"> Assets, <br/> Data, and Compliance  </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
Streamline resignations, clearances, and settlements with automated workflows. This ensures timely asset recovery and smooth, compliant exits. OfficeKit HR makes offboarding efficient, secure, and easy for both HR teams and departing employees.            </p>




            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
              <Button className="btn-cta h-[44px] py-[22px] group"  >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
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

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Complete Exit Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From resignation to final settlement, manage the entire exit journey professionally.
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
              Ready to Improve Your Exit Process?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies managing smooth, professional exits with OfficeKit.
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
  );
};

export default ExitManagement;