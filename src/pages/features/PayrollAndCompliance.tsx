import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FeaturePageLayout } from "@/components/seo/FeaturePageLayout";
import { FeatureSeoIntro } from "@/components/seo/FeatureSeoIntro";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Shield,
  CreditCard,
  FileText,
  TrendingUp,
  Clock,
  ArrowRight,
  Check,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const PAGE_PATH = "/features/payroll-and-compliance";

const PayrollAndCompliance = () => {
  const features = [
    {
      icon: Shield,
      title: "Global Payroll & Compliance",
      description: "Manage payroll seamlessly across different countries with built-in compliance to local regulations."
    },
    {
      icon: Calculator,
      title: "Accurate Payroll Calculations",
      description: "Automate salary computations, deductions, and benefits for error-free pay runs."
    },
    {
      icon: FileText,
      title: "Audit-Ready Reports",
      description: "Generate detailed payroll reports for transparency and effortless audits."
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Connects smoothly with other HR modules for unified workforce management."
    },
    // {
    //   icon: TrendingUp,
    //   title: "Payroll Analytics",
    //   description: "Comprehensive reporting on salary trends, cost analysis, and budget planning insights."
    // },
    // {
    //   icon: Clock,
    //   title: "Time-based Processing",
    //   description: "Automated processing based on attendance, overtime, and leave data integration."
    // }
  ];

  const benefits = [
    "100% accurate calculations",
    "Statutory compliance assured",
    "Instant salary transfers",
    "Digital payslip generation",
    "Tax optimization support",
    "Multi-location payroll"
  ];

  return (
    <FeaturePageLayout
      path={PAGE_PATH}
      productName="Payroll & Compliance — OfficeKit HR"
      breadcrumbLabel="Payroll & Compliance"
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
            <p className="text-sm font-medium text-primary mb-3">
              Payroll & Compliance
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-snug mb-6" style={{ lineHeight: 1.2 }}>
              Eliminate Payroll Errors <br/>
              <span className="gradient-text">Before They Happen</span>

            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Managing payroll can be stressful. Missed deadlines, calculation errors, and compliance issues can slow your business. With OfficeKit HR, you can pay your employees accurately and on time, from anywhere, while staying fully compliant. Focus on growing your team instead of fixing payroll.            </p>




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

      <FeatureSeoIntro path={PAGE_PATH} />

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Complete Payroll Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From salary calculations to statutory compliance, handle  <br></br> all aspects of payroll effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Ready to Automate Your Payroll?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies processing accurate, compliant payroll with OfficeKit.
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

export default PayrollAndCompliance;