import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

const FAQSection = () => {
  const [selected, setSelected] = useState('item-0');
  const faqs = [
    {
      question: "Recruitment & Onboarding",
      answer: "Slow hiring and messy onboarding lose great talent. OfficeKit HR streamlines recruitment and onboarding, helping you hire faster and get employees productive from day one.",
      image: "/recruitment-onboarding.webp"

    },
    {
      question: "Core HR",
      answer: "Managing employee data manually is time-consuming and error-prone. OfficeKit HR centralizes records and automates tasks—so HR runs smoothly and accurately.",
      image: "/corehr.webp"
    },
    {
      question: "Payroll & Compliance",
      answer: "Payroll mistakes and compliance risks drain trust and time. OfficeKit HR ensures accurate salaries, timely payments, and full compliance—without the stress.",
      image: "/payroll-comp.webp"
    },
    {
      question: "Performance & Growth",
      answer: "Unclear goals and vague reviews limit growth. OfficeKit HR streamlines performance tracking and feedback, helping teams achieve more with clarity.",
      image: "/perfo-growth.webp"
    },
    {
      question: "Operations & Support",
      answer: "Scattered processes and delayed support frustrate employees. OfficeKit HR simplifies operations and provides instant support—keeping your workforce engaged and productive.",
      image: "/operation-support.webp"
    }
  ];


  // useEffect(() => {
  //   let index = 0;
  //   const intervel = setInterval(() => {
  //     setSelected(`item-${index}`)
  //     index++;
  //   }, 2000);

  //   return () => clearInterval(intervel);
  // }, [])

  return (
    <section className="mb-mb-common bg-background">
      <div className="container  mx-auto px-4">
        <div className="text-center mb-[64px]">
          {/* <Badge className="bg-white mb-2 text-[#3f5ffc] border border-[#ededed] hover:bg-white"  >
            Essential HR Stacks
          </Badge> */}
          <Badge className="bg-white mb-2 font-normal py-2 text-[#3f5ffc]  border border-[#ededed] hover:bg-transparent"  >
            Essential HR Stacks
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-3">
            How we make <span className="leading-snug gradient-text"  >HR Better </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All your HR needs in one smart, streamlined system
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Accordion
              value={selected}
              type="single"
              collapsible
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger
                    onMouseEnter={() => {
                      setTimeout(() => {
                        setSelected(`item-${index}`)
                      }, 50)
                    }}
                    className="text-left font-semibold text-black hover:text-black hover:border-none hover:no-underline transition-colors text-lg md:text-xl py-6"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black leading-relaxed text-base   pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>


            <div className="relative">
              {/* <div className="w-full h-96 bg-gradient-card rounded-2xl shadow-medium flex items-center justify-center">
                <div className="w-16 h-16 bg-hr-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-hr-primary/20 rounded-full"></div>
                </div>
              </div> */}
              <div className="w-[84%] rounded-2xl h-auto bg-gradient-card shadow-medium flex items-center justify-center">
                {/* <img className="rounded-2xl" src="/img01.webp" alt="" /> */}
                <img
                  key={selected}
                  className="rounded-2xl  "
                  src={faqs.find((_, i) => `item-${i}` === selected)?.image || "//hrb0.webp"}
                  alt="FAQ Visual"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default FAQSection;