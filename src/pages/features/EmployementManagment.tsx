import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  Search,
  Calendar,
  FileText,
  UserPlus,
  BarChart3,
  ArrowRight,
  Check,
  Play,
  Briefcase,
  Target,
  Cog,
  Heart,
  ShieldCheck,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";
import imf from 'public/RecruitmentManagement-Bg.png'

const RecruitmentManagement = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Talent Acquisition",
      description: "Manage job postings, recruitment, and onboarding."
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Set goals, track progress, and conduct appraisals."
    },
    {
      icon: Cog,
      title: "HR Process Automation",
      description: "Automate payroll, attendance, leave, and shift management."
    },
    {
      icon: Heart,
      title: "Employee Engagement",
      description: "Boost morale through recognition and communication."
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Policies",
      description: "Ensure adherence to legal requirements and company policies."
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Leverage AI-powered reports for data-driven HR decisions."
    }
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
              Employee Management

            </h3>
            {/* <h1 className="text-5xl font-semibold text-foreground leading-tight mb-4">
              Streamline Your Hiring Process with OfficeKit HR
            </h1> */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ lineHeight: 1.2 }}>
              Maximizing Workforce Performance for Sustained Growth and Success
              {/* <span className="gradient-text"> OfficeKit HR</span> */}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Manage recruitment efficiently with a centralized platform that streamlines job postings, candidate tracking, and communication — helping you hire top talent faster and smarter.
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
              Complete Recruitment Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every tool you need to streamline your hiring process from start to finish.
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
              Ready to Transform Your Employee Management

            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies that have streamlined their recruitment with OfficeKit.
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

export default RecruitmentManagement;