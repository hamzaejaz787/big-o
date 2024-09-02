"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListItem } from "./Navbar";
import { motion } from "framer-motion";

type NavChild = {
  title: string;
  href: string;
  type: "service" | "industry";
};
type NavMenuDropdownTabsProps = {
  dropdownItems: NavChild[];
};
type NavMenuTabTriggerProps = {
  value: string;
  label: string;
};
type MotionListProps = {
  items: { title: string; href: string }[];
};

const NavMenuDropdownTabs = ({ dropdownItems }: NavMenuDropdownTabsProps) => {
  const serviceItems = dropdownItems.filter((item) => item.type === "service");
  const industryItems = dropdownItems.filter(
    (item) => item.type === "industry"
  );

  return (
    <Tabs defaultValue="service" className="w-full space-y-4">
      <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 gap-6 bg-white">
        <NavMenuTabTrigger value="service" label="Capabilities" />
        <NavMenuTabTrigger value="industry" label="Industries" />
      </TabsList>

      <TabsContent value="service" className="p-4">
        <MotionList items={serviceItems} />
      </TabsContent>
      <TabsContent value="industry" className="p-4">
        <MotionList items={industryItems} />
      </TabsContent>
    </Tabs>
  );
};

const NavMenuTabTrigger = ({ value, label }: NavMenuTabTriggerProps) => (
  <TabsTrigger
    className="font-bebas text-3xl text-custom-purple-400 data-[state=active]:text-custom-purple-500 relative data-[state=active]:after:absolute data-[state=active]:after:content-[''] data-[state=active]:after:h-1 data-[state=active]:after:block data-[state=active]:after:bg-custom-purple-400 data-[state=active]:after:top-full data-[state=active]:after:right-0 data-[state=active]:after:left-0 data-[state=active]:after:animate-line-width data-[state=active]:shadow-none"
    value={value}
  >
    {label}
  </TabsTrigger>
);

const MotionList = ({ items }: MotionListProps) => (
  <motion.ul
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
    className="grid w-[400px] gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-[650px] xl:w-[950px]"
  >
    {items.map((item, index) => (
      <ListItem
        key={index}
        title={item.title}
        href={item.href}
        className="text-lg text-gray-800 hover:text-custom-purple-400 focus-within:text-custom-purple-400 transition-all duration-200"
      />
    ))}
  </motion.ul>
);

export default NavMenuDropdownTabs;
