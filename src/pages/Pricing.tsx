import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

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
  const faqs = [
    {
      question: "Can I customize OfficeKit HR to fit my company’s needs?",
      answer: "Yes, OfficeKit HR is fully configurable. You can select modules and features that best match your HR requirements."
    },
    {
      question: "Do you offer both cloud and on-premise deployment?",
      answer: "Absolutely. We support cloud, on-premise, and hybrid models depending on your organization’s preference."
    },
    {
      question: "Is pricing based on the number of employees?",
      answer: "Yes, pricing is flexible and typically based on user count and selected modules, ensuring you pay only for what you use."
    },
    {
      question: "Do you provide support and training?",
      answer: "Yes, we provide onboarding support, training sessions, and ongoing customer assistance to ensure smooth adoption."
    },
    {
      question: "Is there a free trial or demo available?",
      answer: "Yes, you can schedule a free demo to experience how OfficeKit HR can work for your business."
    }
  ];


  return (
    <div className="min-h-screen bg-background"

    >
      <Navigation />

      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.png')",
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

          {/* Right Image with button on top */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Box Image */}
              <img
                src="/Box 01.png"
                alt="Pricing Illustration"
                className=" rounded-2xl  "  
              />



              <a href="tel:7994154069">
                <button
                  className="absolute bottom-8 right-9 h-[44px] w-[200px] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundImage: "url('/button x .png')" }}
                >
                  {/* Optional: text inside button if needed */}
                </button>
              </a>




            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-semibold text-foreground mb-6">Pricing <span className="gradient-text" >FAQ</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;