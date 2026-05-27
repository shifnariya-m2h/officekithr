import { useEffect, useState } from "react";
import { m } from "@/lib/performance/motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PRICING_HEADSET_IMAGE = "/pricing-headset.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Pricing = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);
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
            <m.h1
              className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Invest Less, Achieve More <br /> with{" "}
              <span className="gradient-text">OfficeKit HR </span>
            </m.h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
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
          </m.div>

          {/* Sales expert CTA */}
          <m.div
            className="flex w-full justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, x: 32, scale: 0.97 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <m.div
              className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0055ff] via-[#0058ff] to-[#0046d9] p-6 shadow-[0_20px_50px_-12px_rgba(0,85,255,0.4)] md:p-8 animate-pricing-cta-glow"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl"
                aria-hidden
              />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-6">
                <m.div
                  className="flex-1 text-white"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold leading-tight tracking-tight md:text-[28px]">
                    Talk to our Sales Expert
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-[15px]">
                    Connect with our specialists who understand real HR
                    challenges. We&apos;ll listen to your needs, guide you
                    through the best-fit modules, and suggest the right pricing
                    plan for your business.
                  </p>
                </m.div>

                <m.div
                  className="flex w-full shrink-0 flex-col items-center rounded-2xl bg-[#001a4d] px-5 pb-5 pt-4 md:w-[220px]"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <m.img
                    src={PRICING_HEADSET_IMAGE}
                    alt="Sales expert ready to help"
                    className={`h-auto w-44 object-contain md:w-52 lg:w-56 ${reduceMotion ? "" : "animate-pricing-headset-float"}`}
                    width={224}
                    height={212}
                    loading="lazy"
                    decoding="async"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  />
                  <m.div
                    className="mt-3 w-full max-w-[200px]"
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <Button
                      asChild
                      className="h-11 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-[#0055ff] shadow-md transition-colors hover:bg-white/95 hover:text-[#0044cc]"
                    >
                      <Link to="/contact">Contact Sales</Link>
                    </Button>
                  </m.div>
                </m.div>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Pricing;