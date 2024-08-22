"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItemTypes } from "./Navbar";
import { MdOutlineMenu } from "react-icons/md";
import { Logo } from "./Logo";
import Link from "next/link";

import { FaChevronDown } from "react-icons/fa6";

const Sidebar = ({ navItems }: { navItems: NavItemTypes[] }) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <div className="flex md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <MdOutlineMenu className="text-2xl text-white block cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="bg-custom-purple-500 border-none">
          <SheetHeader>
            <SheetTitle className="max-w-36">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="py-8 px-2 h-full overflow-y-scroll">
            {navItems.map((item, index) => (
              <SheetClose asChild key={item.href}>
                <NavMenu
                  item={item}
                  open={sheetOpen}
                  setSheetOpen={setSheetOpen}
                ></NavMenu>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const NavMenu = ({
  item,
  open,
  setSheetOpen,
}: {
  item: NavItemTypes;
  open: boolean;
  setSheetOpen: (value: boolean) => void;
}) => {
  const [showChildren, setShowChildren] = React.useState(false);

  const handleToggleChildren = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link
          href={item.href}
          onClick={() => setSheetOpen(false)}
          className={`flex w-full items-center gap-2 rounded-md p-2 text-white hover:text-gray-400 focus:text-gray-400 transition-all duration-300 uppercase text-xl font-bold font-bebas`}
        >
          {item.title}
        </Link>

        {item.children.length > 0 && (
          <FaChevronDown
            className={`text-sm text-white transition-transform duration-300 ${
              showChildren ? "rotate-180" : ""
            }`}
            onClick={handleToggleChildren}
          />
        )}
      </div>
      <div
        className={`${
          showChildren ? "animate-sidebar-dropdown" : "h-0 opacity-0"
        }`}
      >
        {showChildren &&
          item.children.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setSheetOpen(false)}
              className={`text-white hover:text-gray-400 focus:text-gray-400 transition-all duration-300 uppercase text-xl font-bebas translate-x-4 flex w-full items-center rounded-md p-2 `}
            >
              {item.title}
              {item.children.map((child, index) => (
                <SheetClose asChild key={index}>
                  <NavMenu
                    item={child}
                    open={open}
                    setSheetOpen={setSheetOpen}
                  ></NavMenu>
                </SheetClose>
              ))}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
