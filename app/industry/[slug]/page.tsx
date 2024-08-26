import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ServiceTabs from "@/components/ServiceTabs";
import Faqs, { faqItemsProps } from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import { getIndustryBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { getStrapiURL } from "@/lib/utils";
import { PageProps } from "@/lib/definitions";
import { Metadata } from "next";
import VideoCta from "@/components/VideoCta";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getIndustryBySlug(slug);
  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    keywords: data?.metakeywords,
    alternates: {
      canonical: data?.canonical,
    },
  };
}

const Industry = async ({ params }: { params: { slug: string } }) => {
  const data = await getIndustryBySlug(params.slug);
  if (data.error?.status === 404) {
    notFound();
  }

  const baseUrl = getStrapiURL();

  //Parse faqs
  const faqItems = data.cardsdata
    .filter(
      (item: { __component: string }) => item.__component === "layout.faq"
    )
    .map((item: { faqitem: faqItemsProps }) => item.faqitem);

  const videoCtaData = {
    title: data.ctaTitle ? data.ctaTitle : "Scale AI for Business Responsibly",
    description: data.ctaDescription
      ? data.ctaDescription
      : "Gain the Competitive Edge For Your Business with Our Responsible AI Services",
    height: "h-screen md:h-[500px]",
    videoSrc: "/subservice-cta.mp4",
  };

  return (
    <>
      <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 py-10 sm:py-20 overflow-hidden">
        <div className="space-y-4 container text-center lg:text-left min-w-min">
          <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
            {data.introTitle}
          </h1>
          <p className="text-lg md:text-xl text-secondary">{data.introText}</p>

          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white text-lg p-6"
          >
            <Link href="/get-a-quote">Request A Demo</Link>
          </Button>
        </div>

        <Image
          src={baseUrl + data.introImage.url}
          width={720}
          height={600}
          sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={data.introImage.alternativeText}
          className=""
        />
      </section>

      <section className="py-8 sm:py-12 px-8 sm:px-10 lg:px-20 md:space-y-4 container">
        {data.TabSectionTitle && (
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            {data.TabSectionTitle}
          </h2>
        )}

        {data.TabSectionDescription && (
          <p className="text-lg md:text-xl text-secondary-foreground text-center">
            {data?.TabSectionDescription}
          </p>
        )}

        <ServiceTabs tabsData={data.cardsdata} />
      </section>

      <VideoCta videoCtaData={videoCtaData} />

      <section className="container px-6 py-8 sm:px-8 flex items-center justify-center gap-4">
        <Faqs faqItems={faqItems[0]} />
      </section>
      <GetInTouch />
    </>
  );
};

export default Industry;
