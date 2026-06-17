import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./ui/badge";
import {
  HOME_FAQ_CATEGORIES,
  FAQ_PAGE_ALL_FAQS,
  type HomeFaq,
  type HomeFaqCategory,
} from "@/data/home-faqs";
import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";

function FaqAnswer({ faq }: { faq: HomeFaq }) {
  if (!faq.bullets?.length) {
    return <p>{faq.answer}</p>;
  }

  const ListTag = faq.ordered ? "ol" : "ul";
  const listClass = faq.ordered
    ? "list-decimal list-inside space-y-2 mt-3"
    : "list-disc list-inside space-y-2 mt-3";

  return (
    <>
      <p>{faq.answer}</p>
      <ListTag className={listClass}>
        {faq.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </>
  );
}

function FaqAccordion({ faqs, idPrefix }: { faqs: HomeFaq[]; idPrefix: string }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`${idPrefix}-${index}`}
          className="border border-border rounded-xl px-6 bg-background"
        >
          <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="home-faq-answer text-muted-foreground pb-5 leading-relaxed">
            <FaqAnswer faq={faq} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

type FAQSectionProps = {
  variant?: "home" | "page";
  categories?: HomeFaqCategory[];
};

const FAQSection = ({ variant = "home", categories }: FAQSectionProps) => {
  const isPage = variant === "page";
  const faqCategories = categories ?? HOME_FAQ_CATEGORIES;
  const defaultTab = faqCategories[0]?.id ?? "general";

  return (
    <section
      className="mb-mb-common bg-background"
      aria-labelledby={isPage ? undefined : "faq-heading"}
    >
      <div className="container mx-auto px-4">
        {!isPage && (
          <div className="text-center mb-12">
            <Badge className="bg-white mb-2 font-normal py-2 text-[#1d4ed8] border border-[#ededed] hover:bg-transparent">
              FAQs
            </Badge>
            <h2
              id="faq-heading"
              className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-3"
            >
              Frequently Asked <span className="leading-snug gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about OfficeKit HR
            </p>
          </div>
        )}

        <div className={`max-w-4xl mx-auto ${isPage ? "pt-4 md:pt-8" : ""}`}>
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 rounded-2xl border border-border/50 bg-muted/30 p-2 mb-8 shadow-none">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full border border-transparent px-3.5 py-2 text-xs sm:text-sm font-medium text-muted-foreground shadow-none transition-all duration-200 hover:text-foreground data-[state=active]:border-[#0055ff] data-[state=active]:bg-[#0055ff] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:shadow-[#0055ff]/20 focus-visible:ring-[#0055ff]/30"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <FaqAccordion faqs={category.faqs} idPrefix={category.id} />
              </TabsContent>
            ))}
          </Tabs>

          {!isPage && (
            <div className="mt-10 rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 via-background to-blue-50/40 p-6 sm:p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0055ff]/10 text-[#0055ff]">
                <CircleHelp className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Need more detail?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
                Browse all {FAQ_PAGE_ALL_FAQS.length} answers on India &amp; GCC payroll, WPS, pricing, modules, and security.
              </p>
              <Button
                asChild
                className="rounded-full bg-[#0055ff] hover:bg-[#0044cc] h-11 px-6 group"
              >
                <Link to="/faq">
                  View all FAQs
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
