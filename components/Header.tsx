import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FaFacebook } from "react-icons/fa";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import Navbar, { NavItemTypes } from "./Navbar";
import { bebas } from "@/app/fonts";
import Sidebar from "./Sidebar";
import { getSubServicePage } from "@/data/loaders";

interface SocialIconProps {
  id: number;
  icon: JSX.Element;
  url: string;
}

interface ServiceItem {
  navtitle: string;
  servicetype: string;
  slug: string;
}

const socialIcons: SocialIconProps[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=61559667573420",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/big0.dev/",
  },
  {
    id: 3,
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCdFdgYjRGC53PPmE2XTlPhw",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/big0-dev/",
  },
];

export async function Header() {
  const serviceItems = await getSubServicePage();
  const navItems: NavItemTypes[] = [
    { title: "Home", href: "/", children: [] },
    { title: "Who we are", href: "/about", children: [] },
    { title: "What we think", href: "/insights", children: [] },
    {
      title: "What we do",
      href: "",
      children: [],
    },
    { title: "Get in touch", href: "/contact", children: [] },
  ];
  //Append subservice pages to the navitems
  serviceItems.data.forEach((item: ServiceItem) => {
    const href = `/services/${item.slug}`;
    navItems[3].children.push({
      title: item.navtitle,
      href: href,
      children: [],
    });
  });

  return (
    <header className="relative">
      <div className="hidden sm:flex items-center flex-wrap lg:flex-nowrap justify-center md:justify-between gap-4 md:gap-8 px-10 lg:px-20 py-4 md:py-1 bg-custom-purple-500">
        <div className="flex items-center gap-6 text-white">
          {socialIcons.map((icon) => (
            <Link
              key={icon.id}
              href={icon.url}
              target="_blank"
              className="text-white hover:text-custom-purple-100 text-xl"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap md:flex-nowrap">
          <Link
            href="tel:+1-437-365-9377"
            className="flex items-center gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaPhone size={20} />
            +1-437-365-9377
          </Link>
          <Link
            href="https://maps.app.goo.gl/3MQpn7aqJ6H7wCrG8"
            target="_blank"
            className="flex items-center text-center md:text-left gap-2 text-white hover:text-custom-purple-100 transition-all duration-300"
          >
            <FaLocationDot size={20} />
            1054, East Avenue, Mississauga, Ontario L5E 1W9
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between px-10 lg:px-20 py-2 bg-custom-purple-600">
        <Logo />
        <Navbar navItems={navItems} />
        <Sidebar navItems={navItems} />
      </div>
    </header>
  );
}
