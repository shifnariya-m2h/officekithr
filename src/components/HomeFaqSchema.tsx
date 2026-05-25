import { Helmet } from "react-helmet-async";
import { faqPageSchema } from "@/seo/schema";
import { HOME_SEO_FAQS } from "@/data/home-faqs";

/** FAQPage JSON-LD — matches visible SEO FAQ accordion on homepage. */
export function HomeFaqSchema() {
  const faq = faqPageSchema(HOME_SEO_FAQS);
  if (!faq) return null;
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", ...faq })}
      </script>
    </Helmet>
  );
}
