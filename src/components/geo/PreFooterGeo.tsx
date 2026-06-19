import { useLocation } from "react-router-dom";
import { PageJsonLd } from "@/components/PageJsonLd";
import { getPageGeo } from "@/data/page-faqs";
import { faqPageSchema } from "@/seo/schema";
import { GeoFaqSection } from "./GeoFaqSection";
import { RelatedLinks } from "./RelatedLinks";
import { AiContentBlock } from "./AiContentBlock";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";

/** Injects route-specific FAQ + internal links above the site footer. */
export function PreFooterGeo() {
  const { pathname } = useLocation();
  const geo = getPageGeo(pathname);
  if (!geo) return null;

  const faqSchema = faqPageSchema(geo.faqs);

  return (
    <>
      {faqSchema && <PageJsonLd nodes={[faqSchema]} />}
      {geo.directAnswer && !geo.summary && (
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <DirectAnswerBlock answer={geo.directAnswer} definition={geo.definition} />
          </div>
        </section>
      )}
      {geo.summary && (
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <AiContentBlock heading="About this page">
              <p>{geo.summary}</p>
            </AiContentBlock>
          </div>
        </section>
      )}
      <GeoFaqSection faqs={geo.faqs} />
      {geo.relatedLinks && (
        <RelatedLinks
          links={geo.relatedLinks}
          heading="Related guides & solutions"
        />
      )}
    </>
  );
}
