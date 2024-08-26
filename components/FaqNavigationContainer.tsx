"use client";

import React from "react";

type NavigationItemTypes = {
  text: string;
  value: string;
};

const FaqNavigationContainer = ({
  navigationItems,
  activeFaq,
  setActiveFaq,
}: {
  navigationItems: NavigationItemTypes[];
  activeFaq: string | null;
  setActiveFaq: (value: string) => void;
}) => {
  return (
    <div className="bg-white px-6 py-8 absolute top-[calc(50%-115px)] left-[calc(50%-90px)] space-y-4">
      <h6 className="font-tommy text-lg">Quick Navigation</h6>

      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li
            key={item.value}
            className={`cursor-pointer hover:text-custom-purple-300 hover:underline transition-all text-lg ${
              activeFaq === item.value
                ? "text-custom-purple-400 font-bold underline"
                : ""
            }`}
            onClick={() => setActiveFaq(item.value)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqNavigationContainer;
