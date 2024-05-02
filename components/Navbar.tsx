"use client";

import React from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useActivePath } from "@/app/helper";
import { MdClose, MdOutlineMenu } from "react-icons/md";

export interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

export interface FontProps {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  variable: string;
}

const Navbar = ({
  fonts,
  navItems,
}: {
  fonts: FontProps;
  navItems: NavItemProps[];
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleOpen: () => void = () => {
    setIsOpen(!isOpen);
  };
  const closeNav: () => void = () => setIsOpen(false);
  const activepath = useActivePath();

  return (
    <>
      <nav
        className={`absolute w-full min-h-full md:w-auto md:min-h-auto md:block md:static top-full left-0 bg-custom-purple-600 md:bg-none z-50 px-10 md:p-0 py-8 ${
          isOpen
            ? "flex items-center justify-start text-left animate-nav-slide md:animate-none"
            : "animate-nav-slide-reverse hidden md:animate-none"
        }`}
      >
        <ul
          className={`flex ${
            isOpen && "items-start"
          } gap-4 flex-col md:flex-row`}
        >
          {navItems.map((navLink, index) => (
            <li
              key={index}
              className={`${
                activepath(navLink.href) ? "text-white" : "text-gray-400"
              } hover:text-gray-200 transition-all duration-300 uppercase text-xl ${
                fonts.className
              }`}
            >
              {navLink.subItems ? (
                <DropdownMenu
                  subItems={navLink.subItems}
                  closeNav={closeNav}
                  title={navLink.title}
                />
              ) : (
                <Link href={navLink.href} onClick={closeNav}>
                  {navLink.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isOpen ? (
        <MdClose
          onClick={toggleOpen}
          className="text-2xl text-white block md:hidden z-50 cursor-pointer"
        />
      ) : (
        <MdOutlineMenu
          onClick={toggleOpen}
          className="text-2xl text-white block md:hidden z-50 cursor-pointer"
        />
      )}
    </>
  );
};

export default Navbar;
