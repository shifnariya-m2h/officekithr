import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { GUIDE_PAGES } from "@/data/guide-pages";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { breadcrumbSchema, howToSchema } from "@/seo/schema";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? GUIDE_PAGES[slug as keyof typeof GUIDE_PAGES] : undefined;
  if (!page) return <NotFound />;

  const howTo = page.sections.length >= 3
    ? howToSchema({
        name: page.h1,
        description: page.directAnswer,
        steps: page.sections.map((s) => ({ name: s.heading, text: s.body })),
      })
    : null;

  return (
    <PageShell
      title={page.title}
      description={page.metaDescription}
      path={page.path}
      faqs={page.faqs}
      schemaNodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: page.h1, path: page.path },
        ]),
        ...(howTo ? [howTo] : []),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-36 pb-8 md:pt-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm text-[#0055ff] font-medium mb-3">OfficeKit HR Guide</p>
            <h1 className="text-4xl font-bold text-foreground mb-3">{page.h1}</h1>
            <p className="text-lg text-muted-foreground mb-8">{page.subtitle}</p>
            <DirectAnswerBlock answer={page.directAnswer} />
          </div>
        </section>
        <section className="pb-12">
          <div className="container mx-auto px-4 max-w-3xl space-y-10">
            {page.sections.map((s) => (
              <article key={s.heading}>
                <h2 className="text-2xl font-semibold text-foreground mb-3">{s.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="pb-12 text-center">
          <Button asChild className="rounded-full bg-[#0055ff]">
            <Link to="/contact">
              Talk to our team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        {page.faqs.length > 0 && <GeoFaqSection faqs={page.faqs} />}
        <RelatedLinks links={page.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default GuidePage;
