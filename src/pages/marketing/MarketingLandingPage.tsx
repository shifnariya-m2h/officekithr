import { useLocation, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { StickyDemoCta } from "@/components/seo/StickyDemoCta";
import { getMarketingPage } from "@/data/marketing-pages";
import { SEO_ASSETS } from "@/lib/seo/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import { productSchema, comparisonWebPageSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";

const MarketingLandingPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").split("/")[0];
  const page = slug ? getMarketingPage(slug) : undefined;

  if (!page) return <Navigate to="/404" replace />;

  const url = canonicalUrl(page.path);
  const schemaNodes = page.comparison
    ? [
        comparisonWebPageSchema({
          url,
          name: page.title,
          description: page.metaDescription,
          aboutProduct: "OfficeKit HR",
          competitorName: page.comparison.competitorName,
        }),
      ]
    : [
        productSchema({
          name: page.h1,
          description: page.metaDescription,
          url,
        }),
      ];

  return (
    <PageShell
      title={page.title}
      description={page.metaDescription}
      path={page.path}
      faqs={page.faqs}
      schemaNodes={schemaNodes}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow="OfficeKit HR"
          title={page.h1}
          subtitle={page.subtitle}
          backgroundImage={page.heroImage ?? SEO_ASSETS.sectionBg}
        >
          <Button asChild size="lg" className="btn-cta h-11 group">
            <Link to="/contact">
              Book free demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </SeoHeroBanner>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <SeoBreadcrumb items={page.breadcrumb} className="mb-10" />

          <div className="mb-12">
            <DirectAnswerBlock answer={page.directAnswer} definition={page.definition} />
          </div>

          {page.highlights.length > 0 && (
            <section className="mb-12" aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="text-2xl font-semibold mb-6 text-center">
                Why teams choose OfficeKit HR
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {page.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border p-4 bg-card"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {page.features.length > 0 && (
            <section className="mb-12" aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-2xl font-semibold mb-6">
                Key capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {page.features.map((f) => (
                  <div key={f.title} className="rounded-xl border p-6 bg-card">
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {page.compliancePoints && page.compliancePoints.length > 0 && (
            <section className="mb-12" aria-labelledby="compliance-heading">
              <h2 id="compliance-heading" className="text-2xl font-semibold mb-4">
                Compliance & payroll
              </h2>
              <ul className="flex flex-wrap gap-2">
                {page.compliancePoints.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {page.comparison && (
            <section className="mb-12 overflow-x-auto" aria-labelledby="compare-heading">
              <h2 id="compare-heading" className="text-2xl font-semibold mb-6">
                OfficeKit HR vs {page.comparison.competitorName}
              </h2>
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 pr-4 font-semibold">Feature</th>
                    <th className="py-3 pr-4 font-semibold">OfficeKit HR</th>
                    <th className="py-3 font-semibold">{page.comparison.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-border/60">
                      <td className="py-3 pr-4">{row.feature}</td>
                      <td className="py-3 pr-4 text-primary font-medium">{row.officekit}</td>
                      <td className="py-3 text-muted-foreground">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {page.faqs.length > 0 && (
            <section className="mb-12" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-semibold mb-6">
                Frequently asked questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {page.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {page.relatedLinks.length > 0 && (
            <nav className="mb-8" aria-label="Related pages">
              <h2 className="text-lg font-semibold mb-4">Related resources</h2>
              <ul className="flex flex-wrap gap-3">
                {page.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
        <Footer />
        <StickyDemoCta />
      </div>
    </PageShell>
  );
};

export default MarketingLandingPage;
