import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { HOME_PRODUCT_FAQS, HOME_SEO_FAQS } from "@/data/home-faqs";

const FAQSection = () => {
  const [selected, setSelected] = useState("product-0");
  const productFaqs = HOME_PRODUCT_FAQS;

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
                    onMouseEnter={() => {
                      setTimeout(() => setSelected(`product-${index}`), 50);
                    }}
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
              <div className="w-[84%] rounded-2xl h-auto bg-gradient-card shadow-medium flex items-center justify-center">
                <img
                  key={selected}
                  className="rounded-2xl"
                  src={
                    productFaqs.find((_, i) => `product-${i}` === selected)
                      ?.image || "/hrb0.webp"
                  }
                  alt="OfficeKit HR product feature illustration"
                  loading="lazy"
                  width={640}
                  height={480}
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
