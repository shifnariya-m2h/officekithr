import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { PAYROLL_COMPLIANCE } from "@/data/payroll-compliance";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { AiContentBlock } from "@/components/geo/AiContentBlock";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { breadcrumbSchema } from "@/seo/schema";
import { CheckCircle } from "lucide-react";
import NotFound from "@/pages/NotFound";

const CompliancePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? PAYROLL_COMPLIANCE[slug] : undefined;

  if (!page) return <NotFound />;

  return (
    <PageShell
      title={page.title}
      description={page.metaDescription}
      path={page.path}
      faqs={page.faqs}
      schemaNodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compliance", path: "/compliance" },
          { name: page.country, path: page.path },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow={`${page.country} Payroll Compliance`}
          title={page.h1}
          subtitle={page.subtitle}
        >
          <Link
            to="/contact"
            className="btn-cta group h-11 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 font-medium hover:bg-primary/90 transition-colors"
          >
            Ensure compliance with OfficeKit HR
          </Link>
        </SeoHeroBanner>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          <DirectAnswerBlock answer={page.directAnswer} />
        </div>

        <section
          className="py-12 bg-muted/20"
          aria-labelledby="regulations-heading"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              id="regulations-heading"
              className="text-2xl font-semibold text-foreground mb-8"
            >
              Key regulations in {page.country}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.regulations.map((reg) => (
                <article
                  key={reg.name}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {reg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reg.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12" aria-labelledby="steps-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              id="steps-heading"
              className="text-2xl font-semibold text-foreground mb-8"
            >
              Compliance checklist for {page.country}
            </h2>
            <ul className="space-y-3 list-none p-0 m-0">
              {page.complianceSteps.map((step) => (
                <li
                  key={step}
                  className="flex gap-3 items-start text-muted-foreground rounded-lg border bg-card p-4"
                >
                  <CheckCircle
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <AiContentBlock heading={`How OfficeKit HR helps with ${page.country} compliance`}>
              <p>
                OfficeKit HR centralises employee records, attendance, leave, and
                payroll in one system — reducing manual data transfer and
                compliance errors. Payroll rules for {page.country} are configured
                within the platform, and statutory filings are generated from
                the same data used for pay runs.
              </p>
              <p className="mt-4">
                Multi-country groups running entities in India and the GCC can
                manage all payroll compliance from a single HRMS, with
                region-specific rules applied per entity.
              </p>
            </AiContentBlock>
          </div>
        </section>

        <GeoFaqSection faqs={page.faqs} />
        <RelatedLinks links={page.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default CompliancePage;
