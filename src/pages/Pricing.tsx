import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { CANONICAL } from "@/seo/canonical-paths";

const PRICING_HEADSET_IMAGE = "/pricing-headset.webp";

const PLANS = [
  {
    name: "Silver",
    tier: "silver" as const,
    description: "Core HR for small teams getting started",
    highlights: [
      "Core HR & employee records",
      "Attendance & leave",
      "Payroll",
      "Employee self-service",
      "Mobile app",
    ],
    popular: false,
  },
  {
    name: "Gold",
    tier: "gold" as const,
    description: "HR for small and medium teams scaling operations",
    highlights: [
      "All features in Silver",
      "Multi-company",
      "Claims & reimbursements",
      "Performance management",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    tier: "platinum" as const,
    description: "HR for organizations with complete automations",
    highlights: [
      "All features in Gold",
      "Travel management",
      "Training management",
      "Grievance management",
    ],
    popular: false,
  },
] as const;

const TIER_STYLES = {
  silver: {
    border: "border-slate-300",
    badge: "bg-slate-100 text-slate-700",
    accent: "text-slate-600",
    button: "bg-slate-800 hover:bg-slate-900",
  },
  gold: {
    border: "border-amber-400 shadow-lg shadow-amber-500/10",
    badge: "bg-amber-100 text-amber-800",
    accent: "text-amber-700",
    button: "bg-[#0055ff] hover:bg-[#0044cc]",
  },
  platinum: {
    border: "border-violet-300",
    badge: "bg-violet-100 text-violet-800",
    accent: "text-violet-700",
    button: "bg-violet-700 hover:bg-violet-800",
  },
} as const;

const MODULES = [
  "Recruitment & onboarding",
  "Attendance & Face-Kit",
  "Payroll (India & GCC)",
  "Performance & OKRs",
  "Employee self-service",
  "AI Pilot automation",
] as const;

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-4 bg-white font-normal py-2 text-[#3f5ffc] border border-[#ededed] hover:bg-transparent">
            Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Flexible HRMS pricing for{" "}
            <span className="gradient-text">India &amp; GCC</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Modular per-user plans — pay only for the HR, payroll, and compliance
            modules you need. Get a tailored quote for your team size and region.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#0055ff] hover:bg-[#0044cc] h-12 px-8"
            >
              <Link to="/contact">
                Book a free demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-12 px-8"
            >
              <a href="tel:+918137932991">
                <Phone className="mr-2 h-4 w-4" />
                +91-8137932991
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Plans that scale with you
            </h2>
            <p className="text-muted-foreground">
              Every plan is modular. Contact us for a quote based on headcount,
              countries, and enabled modules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => {
              const style = TIER_STYLES[plan.tier];
              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border-2 bg-card p-6 lg:p-8 ${style.border}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0055ff] px-4 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${style.badge}`}
                  >
                    {plan.name}
                  </span>
                  <p className="text-sm text-muted-foreground mt-4 mb-6 min-h-[2.5rem]">
                    {plan.description}
                  </p>
                  <p className="text-2xl font-semibold text-foreground mb-6">
                    Custom quote
                    <span className="block text-sm font-normal text-muted-foreground mt-1">
                      Per user / month · modular
                    </span>
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${style.accent}`}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-full h-11 text-white ${style.button}`}
                  >
                    <Link to="/contact">Book a demo</Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modular modules */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Pay only for what you use
          </h2>
          <p className="text-muted-foreground mb-10">
            Enable modules as you grow — from attendance-only to full India + GCC
            payroll on one platform.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-10">
            {MODULES.map((mod) => (
              <li
                key={mod}
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm"
              >
                <Check className="h-4 w-4 shrink-0 text-[#0055ff]" aria-hidden />
                {mod}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to={CANONICAL.hrmsIndia}>HRMS India</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to={CANONICAL.payrollUae}>Payroll UAE</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#0055ff] hover:bg-[#0044cc]">
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sales CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0055ff] via-[#0058ff] to-[#0046d9] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,85,255,0.35)]">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1 text-white">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Need a tailored quote?
                </h2>
                <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed">
                  Tell us your headcount, countries, and modules. Our team will
                  share pricing for India, UAE, KSA, Kuwait, and multi-entity
                  setups.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-white text-[#0055ff] hover:bg-white/95 h-11"
                  >
                    <Link to="/contact">Book a demo</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 h-11"
                  >
                    <a href="mailto:hello@officekithr.com">hello@officekithr.com</a>
                  </Button>
                </div>
              </div>
              <img
                src={PRICING_HEADSET_IMAGE}
                alt=""
                width={200}
                height={190}
                className="hidden md:block w-44 lg:w-52 shrink-0 object-contain"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
