import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Badge } from "./ui/badge";
import { useMemo, useState } from "react";
import { HOME_PRODUCT_FAQS, HOME_SEO_FAQS } from "@/data/home-faqs";

const FAQ_FALLBACK_IMAGE = "/Performance-selfservice-min.webp";

const FAQSection = () => {
  const [selected, setSelected] = useState("product-0");
  const productFaqs = HOME_PRODUCT_FAQS;

  const activeFaq = useMemo(() => {
    const index = Number.parseInt(selected.replace("product-", ""), 10);
    return productFaqs[Number.isNaN(index) ? 0 : index] ?? productFaqs[0];
  }, [selected, productFaqs]);

  return (
    <section className="mb-mb-common bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-white mb-2 font-normal py-2 text-[#1d4ed8] border border-[#ededed] hover:bg-transparent">
            FAQs
          </Badge>
          <h2
            id="faq-heading"
            className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-3"
          >
            How we make <span className="leading-snug gradient-text">HR Better</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All your HR needs in one smart, streamlined system
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Common questions
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {HOME_SEO_FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`seo-${index}`}
                className="border border-border rounded-xl px-6"
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

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Accordion
              value={selected}
              onValueChange={(value) => {
                if (value) setSelected(value);
              }}
              type="single"
              collapsible
              className="space-y-4"
            >
              {productFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`product-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger
                    onMouseEnter={() => setSelected(`product-${index}`)}
                    onFocus={() => setSelected(`product-${index}`)}
                    className="text-left font-semibold text-black hover:text-black hover:no-underline transition-colors text-lg md:text-xl py-6"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="relative">
              <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl bg-gradient-card shadow-medium flex items-center justify-center p-2 min-h-[280px]">
                <OptimizedImage
                  key={activeFaq.image ?? activeFaq.question}
                  src={activeFaq.image ?? FAQ_FALLBACK_IMAGE}
                  alt={`${activeFaq.question} — OfficeKit HR`}
                  className="rounded-2xl w-full h-auto object-contain"
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
