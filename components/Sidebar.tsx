"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontProps, NavItemProps } from "./Navbar";
import { MdOutlineMenu } from "react-icons/md";
import { Logo } from "./Logo";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";

const Sidebar = ({
  fonts,
  navItems,
}: {
  fonts: FontProps;
  navItems: NavItemProps[];
}) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <div className="flex  md:hidden">
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

          <nav className="py-8 px-2">
            <ul className={`flex gap-4 flex-col justify-between`}>
              {navItems.map((navLink, index) => (
                <li
                  key={index}
                  className={`text-white hover:text-gray-200 transition-all duration-300 uppercase text-xl ${fonts.className}`}
                >
                  {navLink.subItems ? (
                    <DropdownMenu
                      subItems={navLink.subItems}
                      title={navLink.title}
                      onClose={() => setSheetOpen(false)}
                    />
                  ) : (
                    <Link
                      href={navLink.href}
                      onClick={() => setSheetOpen(false)}
                    >
                      {navLink.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;