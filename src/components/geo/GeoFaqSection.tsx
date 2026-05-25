import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/seo/schema";

type GeoFaqSectionProps = {
  faqs: FaqItem[];
  heading?: string;
  id?: string;
};

/** Visible FAQ block — pairs with FAQPage JSON-LD from PageJsonLd / PageShell. */
export function GeoFaqSection({
  faqs,
  heading = "Frequently asked questions",
  id = "page-faq",
}: GeoFaqSectionProps) {
  if (!faqs.length) return null;

  return (
    <section
      className="py-16 bg-muted/30 border-t border-border"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2
          id={`${id}-heading`}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-8"
        >
          {heading}
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border border-border rounded-xl px-6 bg-background"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
