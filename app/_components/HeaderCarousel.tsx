"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroSection from "./HeroSection";
import { HeroSectionTypes } from "@/lib/definitions";

interface HeroSectionProps {
  carouselData: HeroSectionTypes[];
}

const HeaderCarousel: React.FC<HeroSectionProps> = ({ carouselData }) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="ml-0">
        {carouselData.map((item) => (
          <CarouselItem key={item.id} className="pl-0">
            <HeroSection carouselData={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeaderCarousel;
