import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getInsights } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface cardProps {
  title: string;
  category: string;
  subtitle: string;
  image: string;
  alternativeText: string;
  href: string;
}

interface InsightItemProps {
  CardTitle: string;
  InsightType: string;
  CardText: string;
  CardImage: {
    url: string;
    alternativeText: string;
  };
  slug: string;
}

const ResourceSection = async () => {
  const data = await getInsights();
  const baseUrl = getStrapiURL();
  const cardItems: cardProps[] = data.data.map((item: InsightItemProps) => {
    return {
      title: item.CardTitle,
      category: item.InsightType,
      subtitle: item.CardText,
      image: item.CardImage.url,
      href: `/insights/${item.InsightType.toLowerCase().replace(/\s+/g, "-")}/${
        item.slug
      }`,
      alternativeText: item.CardImage.alternativeText,
    };
  });

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 sm:px-12 md:px-20">
      {cardItems.map((item) => (
        <Link href={item.href} key={item.title} className="group">
          <Card className="relative h-[450px] flex flex-col justify-between items-center rounded-lg border-slate-700 overflow-hidden md:group-hover:scale-105 transition-transform">
            <Image
              src={baseUrl + item.image}
              alt={item.alternativeText}
              fill={true}
              className="group-hover:scale-110 transition-transform ease-in-out duration-300 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
            />
            <CardHeader className="z-20 h-full w-full bg-black/50 p-8 group-hover:bg-black/85 transition-all duration-300">
              <strong className="capitalize text-white">{item.category}</strong>
              <CardTitle className="text-white text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 text-white text-base">
                {item.subtitle}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default ResourceSection;
