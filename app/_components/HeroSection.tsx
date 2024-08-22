import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollSectionButton from "./ScrollSectionButton";
import Image from "next/image";
import { HeroSectionTypes } from "@/lib/definitions";

interface HeroSectionProps {
  carouselData: HeroSectionTypes;
}

const HeroSection: React.FC<HeroSectionProps> = ({ carouselData }) => {
  return (
    <section className="relative h-dvh overflow-hidden z-0">
      <Image
        src={carouselData.Image.url}
        alt={carouselData.Image.alternativeText}
        fill={true}
        className="object-cover"
      />
      <div className="absolute top-0 bottom-0 w-full bg-custom-purple-700/50">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h1 className="text-white font-tommy text-6xl max-w-[530px] pl-10 lg:pl-20">
            {carouselData.Title}
          </h1>
          <p className="text-white max-w-[530px] pl-10 lg:pl-20">
            {carouselData.Description}
          </p>

          <Button
            asChild
            className="ml-10 lg:ml-20 w-fit bg-custom-purple-600 text-white text-lg hover:bg-custom-purple-500"
          >
            <Link href="/contact">Learn More</Link>
          </Button>
          <ScrollSectionButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
