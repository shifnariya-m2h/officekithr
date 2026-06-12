import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { KNOWLEDGE_PAGES } from "@/data/knowledge-pages";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { breadcrumbSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";

const KnowledgePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? KNOWLEDGE_PAGES[slug] : undefined;
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
          { name: "Knowledge", path: "/knowledge" },
          { name: page.h1, path: page.path },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-36 pb-8 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {page.h1}
            </h1>
            <DirectAnswerBlock answer={page.directAnswer} />
          </div>
        </section>
        <section className="pb-12">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            {page.sections.map((s) => (
              <article key={s.heading}>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="pb-12 text-center">
          <Button asChild className="rounded-full bg-[#0055ff]">
            <Link to="/contact">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <GeoFaqSection faqs={page.faqs} />
        <RelatedLinks links={page.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default KnowledgePage;
