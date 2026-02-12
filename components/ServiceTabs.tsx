"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";

interface DescriptionItemProps {
  heading: string;
  text: string;
}

export interface TabDataProps {
  title: string;
  subtitle: string;
  description: DescriptionItemProps[];
  __component: string;
}

const ServiceTabs = ({ tabsData }: { tabsData: TabDataProps[] }) => {
  return (
    <>
      <Tabs
        defaultValue={tabsData[0].title}
        className="hidden md:block w-full md:space-y-8"
      >
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-full bg-custom-purple-400/5">
          {tabsData.map(
            (tab) =>
              tab.__component !== "layout.faq" && (
                <TabsTrigger
                  key={tab.title}
                  value={tab.title}
                  className="transition-all duration-300 ease-in whitespace-pre-wrap data-[state=active]:bg-custom-purple-300 data-[state=active]:text-white data-[state=active]:shadow-lg hover:shadow-md h-full"
                >
                  <CardHeader className="w-full space-y-4">
                    <CardTitle className="uppercase">{tab.title}</CardTitle>
                    <CardDescription className="whitespace-pre-wrap capitalize">
                      {tab.subtitle}
                    </CardDescription>
                  </CardHeader>
                </TabsTrigger>
              )
          )}
        </TabsList>
        {tabsData.map((tab, index) => (
          <TabsContent key={index} value={tab.title}>
            <motion.div
              initial={{ translateX: 0 }}
              animate={{
                transform: ["translateX(-200px)", "translateX(0px)"],
                opacity: [0, 1],
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.1,
                at: "-0.1",
                duration: 0.9,
                type: "spring",
              }}
            >
              <Card className="p-8 space-y-4">
                {tab.description?.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <CardTitle className="inline-block data-[state=active]:text-red-400 relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:mt-1 after:left-0 after:animate-line-width">
                      {item.heading}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base">
                      {item.text}
                    </CardDescription>
                  </div>
                ))}
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <Accordion type="single" collapsible className="w-full md:hidden">
        {tabsData.map((item, index) => {
          if (item.__component !== "layout.faq") {
            return (
              <div key={index}>
                <AccordionItem value={index.toString()} className="px-4">
                  <AccordionTrigger>
                    <CardHeader className="p-0 text-left">
                      <CardTitle className="text-lg text-left font-bold text-custom-purple-400 hover:text-custom-purple-500 focus-within:text-custom-purple-500 transition-all duration-200">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 text-base">
                        {item.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="text-black text-base">
                    <Card className="p-4 space-y-4 shadow-none">
                      {item.description?.map((descItem, descIndex) => (
                        <div key={descIndex} className="space-y-4">
                          <CardTitle className="inline-block data-[state=active]:text-red-400 relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:mt-1 after:left-0 after:animate-line-width">
                            {descItem.heading}
                          </CardTitle>
                          <CardDescription className="text-gray-700 text-base">
                            {descItem.text}
                          </CardDescription>
                        </div>
                      ))}
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                <Separator className="bg-custom-purple-300 h-[1.5px]" />
              </div>
            );
          } else {
            return null;
          }
        })}
      </Accordion>
    </>
  );
};

export default ServiceTabs;
