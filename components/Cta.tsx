import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="container px-4 sm:px-10 py-14">
      <div className="bg-gradient-to-r from-custom-purple-600 from-35% to-[#431A5C] to-95% rounded-md p-10 flex items-center justify-between flex-wrap gap-4 max-w-6xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl text-custom-purple-300 font-tommy">
            Amplify Your Business Success
          </h2>
          <p className="text-white md:max-w-md">
            Request a Personalized, Responsible AI, BI, IoT, or Cloud Service to
            Find Out Best-Suited Solution for Your Business
          </p>
        </div>

        <Button
          asChild
          className="text-custom-purple-700 bg-white rounded-full font-bold px-8 border border-transparent hover:bg-transparent hover:text-white hover:border-white"
        >
          <Link href="/get-a-quote">Discover Your Solution Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Cta;
