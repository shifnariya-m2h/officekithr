import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PRICING_HEADSET_IMAGE = "/pricing-headset.png";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹299",
      period: "per user/month",
      description: "Perfect for small teams getting started with HR automation",
      maxUsers: "Up to 25 employees",
      popular: false,
      features: [
        "Core HR Management",
        "Attendance & Leave Tracking",
        "Employee Self-Service Portal",
        "Basic Reporting",
        "Email Support",
        "Mobile App Access"
      ],
      notIncluded: [
        "Payroll Processing",
        "Performance Management",
        "Advanced Analytics",
        "API Access",
        "Priority Support"
      ]
    },
    {
      name: "Growth",
      price: "₹599",
      period: "per user/month",
      description: "Comprehensive HR solution for growing businesses",
      maxUsers: "25-100 employees",
      popular: true,
      features: [
        "Everything in Starter",
        "Payroll Processing & Compliance",
        "Performance Management",
        "Advanced Reporting & Analytics",
        "Document Management",
        "API Integration",
        "Phone & Chat Support",
        "Custom Workflows"
      ],
      notIncluded: [
        "Dedicated Account Manager",
        "Custom Integrations",
        "Advanced Security Features"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Advanced HR platform for large organizations",
      maxUsers: "100+ employees",
      popular: false,
      features: [
        "Everything in Growth",
        "Advanced Security & Compliance",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Priority Support (24/7)",
        "Advanced Analytics & BI",
        "Multi-location Support",
        "SSO Integration",
        "Custom Training",
        "SLA Guarantee"
      ],
      notIncluded: []
    }
  ];
  return (
    <div className="min-h-screen bg-background"

    >
      <Navigation />

      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.jpg')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight  mb-6">
              Invest Less, Achieve More <br /> with  <span className="gradient-text" >OfficeKit HR </span>
            </h1>

          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <Badge className=" bg-white font-normal py-2  text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent"  >
              Pricing
            </Badge>
            <h2 className="text-[44px] font-semibold  mb-6">Flexible & Scalable <span className="gradient-text" >Pricing</span></h2>
            <p className="text-[16px] text-muted-foreground mb-8 ">
              At OfficeKit HR, we understand that no two organizations are alike.
              That’s <br /> why our pricing is designed to be flexible and scalable—so you
              only pay for <br /> what you need, when you need it.
              <br />
              <br />
              Whether you’re a startup setting up HR for the first time, a growing
              company<br /> scaling operations, or a large enterprise needing a compliant
              solution,<br /> we have a plan tailored for you.
            </p>
          </div>

          {/* Sales expert CTA */}
          <div className="flex w-full justify-center md:justify-end">
            <div className="w-full max-w-[560px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0055ff] via-[#0058ff] to-[#0046d9] p-6 shadow-[0_20px_50px_-12px_rgba(0,85,255,0.4)] md:p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-6">
                <div className="flex-1 text-white">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight md:text-[28px]">
                    Talk to our Sales Expert
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-[15px]">
                    Connect with our specialists who understand real HR
                    challenges. We&apos;ll listen to your needs, guide you
                    through the best-fit modules, and suggest the right pricing
                    plan for your business.
                  </p>
                </div>

                <div className="flex w-full shrink-0 flex-col items-center rounded-2xl bg-[#001a4d] px-5 pb-5 pt-4 md:w-[220px]">
                  <img
                    src={PRICING_HEADSET_IMAGE}
                    alt=""
                    className="h-auto w-44 object-contain md:w-52 lg:w-56"
                    width={224}
                    height={212}
                    loading="lazy"
                    decoding="async"
                  />
                  <Button
                    asChild
                    className="mt-3 h-11 w-full max-w-[200px] rounded-full bg-white px-6 text-[15px] font-semibold text-[#0055ff] shadow-md transition-colors hover:bg-white/95 hover:text-[#0044cc]"
                  >
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Pricing;