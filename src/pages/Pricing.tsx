import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const PRICING_BOX_IMAGE = encodeURI("/Box 01.webp");
const PRICING_CTA_IMAGE = encodeURI("/button x .png");
const PRICING_PHONE = "7994154069";

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

          {/* Right Image with call CTA overlay */}
          <div className="flex justify-center">
            <div className="relative inline-block max-w-full">
              <img
                src={PRICING_BOX_IMAGE}
                alt="Pricing illustration"
                className="rounded-2xl max-w-full h-auto"
                width={560}
                height={560}
                loading="lazy"
                decoding="async"
              />
              <a
                href={`tel:+91${PRICING_PHONE}`}
                className="absolute bottom-8 right-9 block h-11 w-[200px] rounded-lg shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055ff] focus-visible:ring-offset-2"
                aria-label={`Call us at +91 ${PRICING_PHONE}`}
              >
                <img
                  src={PRICING_CTA_IMAGE}
                  alt=""
                  width={200}
                  height={44}
                  className="h-11 w-[200px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Pricing;