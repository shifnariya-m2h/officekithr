import { Helmet } from "react-helmet-async";
import { SITE } from "@/seo/site-config";
import {
  faqPageSchema,
  videoObjectSchema,
  speakableSchema,
} from "@/seo/schema";
import { HOME_ALL_FAQS, homeFaqToSchemaAnswer } from "@/data/home-faqs";

/** Homepage JSON-LD: FAQ + VideoObject for rich results & AI citation. */
export function HomePageSchema() {
  const faq = faqPageSchema(
    HOME_ALL_FAQS.map((item) => ({
      question: item.question,
      answer: homeFaqToSchemaAnswer(item),
    }))
  );
  const video = videoObjectSchema({
    name: "OfficeKit HR Platform Overview",
    description:
      "See how OfficeKit HR unifies recruitment, attendance, payroll, and compliance for India and GCC.",
    thumbnailUrl: SITE.ogImage,
    uploadDate: "2025-06-01",
    contentUrl: "https://www.youtube.com/watch?v=Tposa0O5s_k",
    embedUrl: "https://www.youtube.com/embed/Tposa0O5s_k",
  });

  const speakable = speakableSchema({
    url: SITE.url,
    cssSelectors: ["#faq-heading", ".home-faq-answer", ".direct-answer"],
  });

  const graph = [faq, video, speakable].filter(Boolean);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </script>
    </Helmet>
  );
}
