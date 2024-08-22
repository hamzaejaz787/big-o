"use client";

import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Industry {
  id: number;
  title: string;
  description: string;
  href: string;
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

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8"
      >
        {industriesData.slice(0, visibleCards).map((industry) => (
          <motion.div key={industry.id} variants={cardVariants}>
            <Link href={industry.href} className="group">
              <Card className="h-full bg-white flex flex-col items-center justify-center gap-4 overflow-hidden border-0 border-b-4 rounded-sm p-8 border-b-transparent group-hover:border-b-custom-purple-300 transition-all duration-300 group-hover:shadow-xl">
                <Image
                  src={"/industry-icon-1.svg"}
                  alt={industry.title}
                  width={75}
                  height={75}
                  className="object-cover"
                />
                <CardTitle className="text-xl text-center text-custom-purple-300">
                  {industry.title}
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {industry.description}
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
