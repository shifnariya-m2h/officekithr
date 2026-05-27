import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { INDUSTRY_PAGES } from "@/data/industry-verticals";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { AiFactGrid } from "@/components/geo/AiContentBlock";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { breadcrumbSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import NotFound from "@/pages/NotFound";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? INDUSTRY_PAGES[slug] : undefined;

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
          { name: "Industries", path: "/industries" },
          { name: page.h1, path: page.path },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow="OfficeKit HR Industry Solutions"
          title={page.h1}
          subtitle={page.subtitle}
        >
          <Button asChild className="btn-cta h-11 group">
            <Link to="/contact">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </SeoHeroBanner>

        <div className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
          <DirectAnswerBlock answer={page.directAnswer} definition={page.definition} />
        </div>

        <section className="py-16 bg-muted/20" aria-labelledby="challenges-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              id="challenges-heading"
              className="text-2xl font-semibold text-foreground mb-8 text-center"
            >
              Industry challenges
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
              {page.challenges.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start text-muted-foreground rounded-lg border bg-card p-4"
                >
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 bg-background" aria-labelledby="facts-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="facts-heading" className="sr-only">Key facts</h2>
            <AiFactGrid facts={page.facts} />
          </div>
        </section>

        <section className="py-16 bg-muted/20" aria-labelledby="capabilities-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              id="capabilities-heading"
              className="text-2xl font-semibold text-foreground mb-8 text-center"
            >
              How OfficeKit HR helps
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
              {page.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start text-muted-foreground rounded-lg border bg-card p-4"
                >
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GeoFaqSection faqs={page.faqs} />
        <RelatedLinks links={page.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default IndustryPage;
