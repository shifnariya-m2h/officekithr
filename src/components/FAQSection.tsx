import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { useState } from "react";

const FAQSection = () => {
  const [selected, setSelected] = useState('item-0');
  const faqs = [
    {
      question: "Recruitment & Onboarding",
      answer: "Simplify recruitment with smart tracking, structured interviews, and smooth onboarding — all in one flow."
    },
    {
      question: "Core HR",
      answer: "Manage employee data, leaves, attendance, documents, and exits — all via a secure self-service portal."
    },
    {
      question: "Payroll & Compliance",
      answer: "Handle global payroll effortlessly with built-in compliance support — accurate, timely, and always on point."
    },
    {
      question: "Performance & Growth",
      answer: "Set goals, run evaluations, gather 360° feedback, and guide employees with personalized development plans."
    },
    {
      question: "Operations & Support",
      answer: "Centralize services with a smart help desk, manage travel, training, tasks, claims, and secure feedback."
    }
  ];

  return (
    <section className="py-20  bg-background">
      <div className="container  mx-auto px-4">
        <div className="text-center  mb-32">
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

        <div className="max-w-7xl mb-20 mt-32 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Accordion value={selected} type="single" collapsible className="space-y-4">
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
                    className="text-left font-semibold text-foreground hover:text-black hover:border-none hover:no-underline transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
                <img className="rounded-2xl" src="/public/img01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default FAQSection;