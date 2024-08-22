import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavItemTypes } from "./Navbar";
import Link from "next/link";

export const NavDropDownMenu = ({ item }: { item: NavItemTypes }) => {
  const navitems = item.children;
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl p-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:text-white md:focus:text-gray-400 data-[state=open]:bg-transparent text-white md:text-gray-400 md:hover:text-white h-0">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <h2 className="inline-block mt-4 ml-4 text-3xl text-custom-purple-400 relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:left-0 after:animate-line-width">
              Capabilities
            </h2>
            <div className="grid w-[400px] gap-3 p-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-[650px] xl:w-[950px]">
              {navitems.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-lg hover:text-custom-purple-400 focus-within:text-custom-purple-400 transition-all duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuViewport />
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
