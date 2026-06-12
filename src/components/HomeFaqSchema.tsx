import { Helmet } from "react-helmet-async";
import { faqPageSchema } from "@/seo/schema";
import { HOME_ALL_FAQS, homeFaqToSchemaAnswer } from "@/data/home-faqs";

/** FAQPage JSON-LD — matches visible FAQ accordion on homepage. */
export function HomeFaqSchema() {
  const faq = faqPageSchema(
    HOME_ALL_FAQS.map((item) => ({
      question: item.question,
      answer: homeFaqToSchemaAnswer(item),
    }))
  );
  if (!faq) return null;
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", ...faq })}
      </script>
    </Helmet>
  );
}
