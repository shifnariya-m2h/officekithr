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
  type HomeFaq,
} from "@/data/home-faqs";

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

const FAQSection = () => {
  return (
    <section className="mb-mb-common bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
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
            Everything you need to know about OfficeKit HR
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-1 bg-muted/50 p-1.5 mb-8">
              {HOME_FAQ_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-background"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {HOME_FAQ_CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <FaqAccordion faqs={category.faqs} idPrefix={category.id} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
