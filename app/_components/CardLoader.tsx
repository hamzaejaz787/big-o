"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { getStrapiURL } from "@/lib/utils";

interface Industry {
  id: number;
  navTitle: string;
  slug: string;
  cardicon: {
    url: string;
    alternativeText: string;
  };
  cardtext: string;
}

interface CardLoaderProps {
  industriesData: Industry[];
}

const CardLoader = ({ industriesData }: CardLoaderProps) => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + 4);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const baseurl = getStrapiURL();
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
      >
        {industriesData.slice(0, visibleCards).map((industry) => (
          <motion.div key={industry.id} variants={cardVariants}>
            <Link href={`/industry/${industry.slug}`} className="group">
              <Card className="h-full bg-white flex flex-col items-center justify-center gap-4 overflow-hidden border-0 border-b-4 rounded-sm p-8 border-b-transparent group-hover:border-b-custom-purple-300 transition-all duration-300 group-hover:shadow-xl">
                <Image
                  src={baseurl + industry.cardicon.url}
                  alt={industry.cardicon?.alternativeText}
                  width={75}
                  height={75}
                  className="object-cover"
                />
                <CardTitle className="text-xl text-center text-custom-purple-300">
                  {industry.navTitle}
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {industry.cardtext !== null ? industry.cardtext : ""}
                </CardDescription>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {visibleCards < industriesData.length && (
        <Button
          onClick={handleLoadMore}
          className="mt-8 font-bold text-lg flex mx-auto px-4 py-2 bg-custom-purple-400 hover:bg-custom-purple-300 text-white rounded"
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default CardLoader;
