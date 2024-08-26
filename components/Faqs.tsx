"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface faqItemsProps {
  value: string;
  question: string;
  answer: string;
}

const Faqs = ({
  faqItems,
  className,
  activeFaq,
  setActiveFaq,
}: {
  faqItems: faqItemsProps[];
  className?: string;
  activeFaq?: string | null;
  setActiveFaq?: (value: string) => void;
}) => {
  return (
    <section
      className={cn("pb-8 md:py-8 lg:p-8 w-full lg:max-w-[700px]", className)}
    >
      <strong className="text-custom-purple-300 font-tommy font-normal">
        Faqs
      </strong>
      <h2 className="font-tommy text-4xl uppercase max-w-xs">
        Read Most Frequent <span className="font-bold">Questions</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue={activeFaq || faqItems[0].value}
        onValueChange={
          setActiveFaq ? (value) => setActiveFaq(value) : undefined
        }
        value={activeFaq !== null ? activeFaq : ""}
        className="w-full space-y-4 pt-4"
      >
        {faqItems.map((faq) => (
          <div key={faq.value}>
            <AccordionItem
              value={faq.value}
              className="px-4 border-none border-b-0"
            >
              <AccordionTrigger className="text-lg text-left font-bold hover:text-custom-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            <Separator className="bg-custom-purple-300 h-0.5 rounded-full" />
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default Faqs;
