import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { COMPARISONS } from "@/data/comparisons";
import { GeoFaqSection } from "@/components/geo/GeoFaqSection";
import { RelatedLinks } from "@/components/geo/RelatedLinks";
import { AiContentBlock } from "@/components/geo/AiContentBlock";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { comparisonWebPageSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl } from "@/seo/site-config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/NotFound";

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? COMPARISONS[slug] : undefined;

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
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th scope="col" className="p-4 font-semibold text-foreground">
                    Aspect
                  </th>
                  <th scope="col" className="p-4 font-semibold text-foreground">
                    OfficeKit HR
                  </th>
                  <th scope="col" className="p-4 font-semibold text-foreground">
                    {page.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.aspect} className="border-t border-border">
                    <th scope="row" className="p-4 font-medium text-foreground align-top">
                      {row.aspect}
                    </th>
                    <td className="p-4 text-muted-foreground align-top">{row.officekit}</td>
                    <td className="p-4 text-muted-foreground align-top">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
