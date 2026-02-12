import GetInTouch from "@/components/GetInTouch";
import ParseRichText from "@/components/ParseRichText";
import VideoCta from "@/components/VideoCta";
import { getInsightsBySlug } from "@/data/loaders";
import { PageProps } from "@/lib/definitions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const data = await getInsightsBySlug(slug);
  return {
    title: data.MetaTitle,
    description: data.MetaDescription,
    keywords: data.metakeywords,
    alternates: {
      canonical: data.metacanonical,
    },
  };
}

const ResearchReport = async ({ params }: { params: { slug: string } }) => {
  const data = await getInsightsBySlug(params.slug);
  if (data.error?.status === 404) {
    notFound();
  }

  const videoCtaData = {
    title: data.ctaTitle ? data.ctaTitle : "Scale AI for Business Responsibly",
    description: data.ctaDescription
      ? data.ctaDescription
      : "Gain the Competitive Edge For Your Business with Our Responsible AI Services",
    height: "h-screen md:h-[500px]",
  };

  return (
    <>
      <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
        <h1 className="text-4xl text-center font-bold">{data?.Title}</h1>
        <div className="space-y-4">
          <ParseRichText content={data.insightContent} />
        </div>
      </section>
      <VideoCta videoCtaData={videoCtaData} />
      <GetInTouch />
    </>
  );
};

export default ResearchReport;
