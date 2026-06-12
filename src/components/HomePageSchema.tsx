import { Helmet } from "react-helmet-async";
import { SITE } from "@/seo/site-config";
import {
  faqPageSchema,
  reviewSchema,
  videoObjectSchema,
  speakableSchema,
} from "@/seo/schema";
import { HOME_ALL_FAQS, homeFaqToSchemaAnswer } from "@/data/home-faqs";
import { TESTIMONIALS, AGGREGATE_RATING } from "@/data/testimonials-data";

/** Homepage JSON-LD: FAQ + Review + VideoObject for rich results & AI citation. */
export function HomePageSchema() {
  const faq = faqPageSchema(
    HOME_ALL_FAQS.map((item) => ({
      question: item.question,
      answer: homeFaqToSchemaAnswer(item),
    }))
  );
  const review = reviewSchema({
    aggregateRating: AGGREGATE_RATING,
    reviews: TESTIMONIALS.slice(0, 3).map((t) => ({
      author: t.name,
      reviewBody: t.quote,
      ratingValue: String(t.rating),
      publisher: t.company,
    })),
  });
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

  const graph = [faq, review, video, speakable].filter(Boolean);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </script>
    </Helmet>
  );
}
