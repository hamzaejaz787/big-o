"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

interface AccordionItemTypes {
  category: string;
  list: string[];
}

const FilterAccordion = () => {
  const [selected, setSelected] = useState<{ [category: string]: string[] }>(
    {}
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const accordionItems: AccordionItemTypes[] = [
    {
      category: "Topic",
      list: [
        "Business Intelligence",
        "Cloud",
        "Cybersecurity",
        "Dev Ops",
        "Responsible AI",
        "IOT",
      ],
    },
    {
      category: "Industry",
      list: [
        "Aerospace & Defence",
        "Cybersecurity",
        "Banking",
        "Hitech",
        "Healthcare",
        "Insurance",
        "Retail",
        "Software & Platforms",
        "Travel",
      ],
    },
    {
      category: "Content Type",
      list: ["Blog", "Case Study", "News"],
    },
  ];

  const handleSelect = (category: string, item: string) => {
    setSelected((prevItems) => {
      if (prevItems[category] && prevItems[category].includes(item)) {
        return {
          ...prevItems,
          [category]: prevItems[category].filter(
            (existingItem) => existingItem !== item
          ),
        };
      } else {
        return {
          ...prevItems,
          [category]: [...(prevItems[category] || []), item],
        };
      }
    });

    const params = new URLSearchParams(searchParams);

    if (item) {
      params.set("query", item);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Accordion
      type="single"
      collapsible
      className="grid grid-cols-1 sm:grid-cols-3 relative"
    >
      {accordionItems.map((item, index) => (
        <AccordionItem value={item.category} className="px-8" key={index}>
          <AccordionTrigger
            icon={
              <FaPlus className="h-4 w-4 shrink-0 transition-transform duration-200" />
            }
          >
            {item.category}
          </AccordionTrigger>
          <AccordionContent className="flex gap-2 flex-wrap items-center">
            {item.list.map((list, index) => (
              <Button
                key={index}
                className={`rounded-sm capitalize bg-transparent text-primary hover:bg-gray-700 hover:text-primary-foreground border-gray-800 border-2 ${
                  selected[item.category] &&
                  selected[item.category].includes(list)
                    ? "bg-gray-900 text-primary-foreground"
                    : ""
                }`}
                onClick={() => handleSelect(item.category, list)}
              >
                {list}
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FilterAccordion;
