import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import {
  FAQ_PAGE_ALL_FAQS,
  FAQ_PAGE_CATEGORIES,
  homeFaqToSchemaAnswer,
} from "@/data/home-faqs";
import { breadcrumbSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";

const FAQ_PATH = "/faq";

const Faq = () => {
  const schemaFaqs = FAQ_PAGE_ALL_FAQS.map((item) => ({
    question: item.question,
    answer: homeFaqToSchemaAnswer(item),
  }));

  return (
    <PageShell
      title="FAQs | OfficeKit HR"
      description="60+ answers about OfficeKit HR — HRMS for India & GCC. WPS payroll UAE, PF/ESI India, statutory compliance, pricing, modules, AI features, and implementation."
      path={FAQ_PATH}
      faqs={schemaFaqs}
      schemaNodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQs", path: FAQ_PATH },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow="Resources"
          titleId="page-faq-heading"
          title={
            <>
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </>
          }
          subtitle="Comprehensive answers on payroll, compliance, HR modules, pricing, AI automation, security, and implementation — for teams in India and the GCC."
        >
          <Button asChild size="lg" className="btn-cta h-11 group">
            <Link to="/contact">
              Book free demo
              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden
              />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </SeoHeroBanner>

        <FAQSection variant="page" categories={FAQ_PAGE_CATEGORIES} />

        <section className="pb-20 text-center">
          <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
            Didn&apos;t find what you&apos;re looking for? Our team can walk you through payroll, compliance, and rollout for your specific setup.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Typical go-live in 2–6 weeks with guided migration and training.
          </p>
          <Button asChild className="rounded-full bg-[#0055ff] hover:bg-[#0044cc]">
            <Link to="/contact">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <Footer />
      </div>
    </PageShell>
  );
};

export default Faq;
