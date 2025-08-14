import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  Users,
  BarChart3,
  ArrowRight,
  Check,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const AttendanceAndLeave = () => {
  const features = [
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Monitor employee work hours,shifts, and overtime with precision."
    },
    {
      icon: Calendar,
      title: "Multiple Capture Methods",
      description: "Support for biometric devices,geo‑fencing, web check‑ins, and mobile apps."
    },
    {
      icon: MapPin,
      title: "Automated Leave Requests",
      description: "Employees can apply for leave online with instant notifications to managers."
    },
    {
      icon: CheckCircle,
      title: "Leave Balance Management",
      description: "Real‑time tracking of accruals, carry‑overs, and policy-based entitlements."
    },
    {
      icon: Users,
      title: "Customizable Leave Policies",
      description: "Configure rules for different locations, departments, or roles."
    },
    {
      icon: BarChart3,
      title: "Integrated Reports",
      description: "Generate detailed reports on attendance, leave trends, and compliance."
    }
  ];

  const benefits = [
    "Real-time attendance tracking",
    "Automated leave calculations",
    "Compliance with labor laws",
    "Mobile app integration",
    "Overtime management",
    "Holiday calendar sync"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-40 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.png')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground leading-tight mb-3">
              Attendance & Leave
            </h3>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ lineHeight: 1.2 }}>
              Accurate Tracking, Effortless Approvals

            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Simplify time tracking and leave management for employees and HR. OfficeKit HR automates records, approvals, and reporting — ensuring accuracy and compliance.
            </p>




            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button className="btn-cta h-[44px] py-[22px] group">
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
              Complete Attendance Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track time, manage leaves, and maintain compliance.
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
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Streamline Time Tracking?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies managing attendance effortlessly with OfficeKit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-[#094ace] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to Streamline Time Tracking?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies managing attendance effortlessly with OfficeKit.
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

export default AttendanceAndLeave;