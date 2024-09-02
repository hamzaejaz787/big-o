"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useActivePath } from "@/app/helper";
import { NavItemTypes } from "./Header";
import { cn } from "@/lib/utils";
import NavMenuDropdownTabs from "./NavMenuDropdownTabs";

const Navbar = ({ navItems }: { navItems: NavItemTypes[] }) => {
  const activepath = useActivePath();
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="space-x-4">
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="font-bebas text-xl p-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:text-white md:focus:text-gray-400 data-[state=open]:bg-transparent text-white md:text-gray-400 md:hover:text-white h-0">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavMenuDropdownTabs dropdownItems={item.children} />
                </NavigationMenuContent>{" "}
              </>
            ) : (
              <ListItem
                href={item.href}
                title={item.title}
                isActive={activepath(item.href)}
              />
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  {
    title: string;
    href: string;
    isActive?: boolean;
    className?: string;
  }
>(({ title, href, isActive, className }, ref) => {
  return (
    <NavigationMenuLink
      asChild
      className={cn(
        `${
          isActive ? "text-white" : "text-gray-400"
        } hover:text-gray-100 focus-within:text-gray-100 transition-all duration-300 uppercase text-xl font-bebas`,
        className
      )}
    >
      <Link href={href}>{title}</Link>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
