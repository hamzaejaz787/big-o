import { getSubServicePage } from "@/data/loaders";
import StackedCarousel from "./StackedCarousel";
import { notFound } from "next/navigation";

const SliderSection = async () => {
  const data = await getSubServicePage();

  if (data.error?.status === 404) {
    notFound();
  }
  return (
    <section className="container px-4 sm:px-8 py-14 bg-custom-purple-700 space-y-4">
      <article className="space-y-2 md:max-w-md text-center mx-auto">
        <strong className="text-custom-purple-300 font-tommy font-normal">
          Our Services
        </strong>
        <h2 className="text-4xl font-tommy uppercase text-white">
          Make Big Impact:{" "}
          <span className="font-bold">no compromise on trust</span>
        </h2>
      </article>

      <StackedCarousel carouselItems={data.data} />
    </section>
  );
};

export default SliderSection;
