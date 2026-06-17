import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { COMPARISONS } from "@/data/comparisons";
import { COMPARISONS_NEW } from "@/data/comparisons-new";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { AiContentBlock } from "@/components/geo/AiContentBlock";
import { ComparisonTable, normalizeComparisonRows } from "@/components/seo/ComparisonTable";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { comparisonWebPageSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl } from "@/seo/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug
    ? (COMPARISONS[slug] ?? COMPARISONS_NEW[slug])
    : undefined;

  if (!page) return <NotFound />;

  const canonicalPath = page.path;

  return (
    <PageShell
      title={page.title}
      description={page.metaDescription}
      path={canonicalPath}
      faqs={page.faqs}
      schemaNodes={[
        comparisonWebPageSchema({
          url: absoluteUrl(canonicalPath),
          name: page.title,
          description: page.metaDescription,
          aboutProduct: "OfficeKit HR",
          competitorName: page.competitorName,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: page.competitorName, path: canonicalPath },
        ]),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow="Software comparison"
          title={page.h1}
          subtitle={page.intro}
        >
          <Button asChild className="btn-cta group h-11">
            <Link to="/contact">
              Schedule comparison demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11">
            <Link to="/compare">All comparisons</Link>
          </Button>
        </SeoHeroBanner>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          <DirectAnswerBlock answer={page.directAnswer} definition={page.definition} />
        </div>

        <section
          className="pb-12 container mx-auto px-4 max-w-4xl"
          aria-labelledby="compare-table"
        >
          <h2 id="compare-table" className="text-2xl font-semibold mb-6">
            Feature comparison
          </h2>
          <ComparisonTable
            competitorName={page.competitorName}
            rows={normalizeComparisonRows(page.rows)}
          />
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <AiContentBlock heading="When teams choose OfficeKit HR">
              <ul className="list-disc pl-5 space-y-2 mt-2">
                {page.whenOfficeKit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </AiContentBlock>
            {page.whenCompetitor && page.whenCompetitor.length > 0 && (
              <div className="mt-8">
                <AiContentBlock heading={`When ${page.competitorName} may be a better fit`}>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    {page.whenCompetitor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AiContentBlock>
              </div>
            )}
          </div>
        </section>

        <GeoFaqSection faqs={page.faqs} />
        <RelatedLinks links={page.relatedLinks} />
        <Footer />
      </div>
    </PageShell>
  );
};

export default ComparisonPage;
