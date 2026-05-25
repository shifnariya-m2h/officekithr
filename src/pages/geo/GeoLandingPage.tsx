import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { GEO_LANDINGS } from "@/data/geo-landings";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { AiFactGrid } from "@/components/geo/AiContentBlock";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { breadcrumbSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";

const GeoLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? GEO_LANDINGS[slug] : undefined;

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
          { name: "Solutions", path: "/solutions" },
          { name: page.h1, path: page.path },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <header className="pt-36 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-primary mb-3">OfficeKit HR Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
              {page.h1}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {page.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="btn-cta h-11 group">
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="h-11">
                  View pricing
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <section className="py-16 bg-background" aria-labelledby="facts-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="facts-heading" className="sr-only">
              Key facts
            </h2>
            <AiFactGrid facts={page.facts} />
          </div>
        </section>

        <section className="py-16 bg-muted/20" aria-labelledby="capabilities-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2
              id="capabilities-heading"
              className="text-2xl font-semibold text-foreground mb-8"
            >
              Capabilities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
              {page.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start text-muted-foreground"
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

export default GeoLandingPage;
