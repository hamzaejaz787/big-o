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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { Logo } from "./Logo";
import { NavItemTypes } from "./Header";
import { useActivePath } from "@/app/helper";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

type NavChild = {
  title: string;
  href: string;
  type: "service" | "industry";
};
type NavMenuAccordionProps = {
  navItems: NavChild[];
  onLinkClick: () => void;
};

const Sidebar = ({ navItems }: { navItems: NavItemTypes[] }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const activepath = useActivePath();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex md:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger>
          <MdOutlineMenu className="text-2xl text-white block cursor-pointer" />
        </SheetTrigger>

        <SheetContent className="bg-custom-purple-500 border-none">
          <div className="h-full overflow-y-scroll">
            <SheetHeader className="space-y-0 px-0 py-2 flex-row justify-between items-center">
              <SheetTitle
                className="max-w-36"
                onClick={() => setMenuOpen(false)}
              >
                <Logo />
              </SheetTitle>

              <SheetClose>
                <MdClose className="text-3xl text-white cursor-pointer" />
              </SheetClose>
            </SheetHeader>

            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="p-4">
                  {item.children ? (
                    <NavDropdown
                      navItems={item.children}
                      onLinkClick={handleLinkClick}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className="text-xl font-bebas text-white"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const NavDropdown = ({ navItems, onLinkClick }: NavMenuAccordionProps) => {
  const groupedItems = navItems.reduce(
    (acc, item) => {
      acc[item.type].push(item);
      return acc;
    },
    { service: [], industry: [] } as {
      service: NavChild[];
      industry: NavChild[];
    }
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {/* Accordion for Types */}
      <AccordionItem value="types" className="border-none">
        <AccordionTrigger className="hover:no-underline p-0 text-white font-bebas text-xl">
          What we offer
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <ul className="pt-4">
            {Object.entries(groupedItems).map(([type, items]) => (
              <li className="p-2" key={type}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={type} className="border-none">
                    <AccordionTrigger
                      icon={<FaPlus size={18} />}
                      className="hover:no-underline p-0 text-white font-bebas text-xl"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </AccordionTrigger>
                    <AccordionContent asChild className="p-0">
                      <ul className="space-y-4 p-4">
                        {items.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              className="text-white font-bebas"
                              onClick={onLinkClick}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Sidebar;
