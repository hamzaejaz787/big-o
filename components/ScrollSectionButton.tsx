"use client";

import React from "react";
import { MdOutlineExpandCircleDown } from "react-icons/md";

type ScrollSectionButtonTypes = {
  sectionId: string;
};

const ScrollSectionButton: React.FC<ScrollSectionButtonTypes> = ({
  sectionId,
}) => {
  const scrollToSection = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div onClick={scrollToSection} className="mx-auto animate-bounce pt-8">
      <MdOutlineExpandCircleDown
        size={25}
        className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200"
      />
    </div>
  );
};

export default ScrollSectionButton;
