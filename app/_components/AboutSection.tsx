import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const servicesList = [
  {
    id: 1,
    title: "Artificial Intelligence (AI)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare sed mi fermentum vestibulum viverra mauris fames. Pellentesque",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare sed mi fermentum vestibulum viverra mauris fames. Pellentesque lorem porttitor amet egestas.",
  },
  {
    id: 3,
    title: "Machine Learning (ML)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare sed mi fermentum vestibulum viverra mauris fames. Pellentesque",
  },
];

const AboutSection = () => {
  return (
    <section
      className="container px-4 py-6 mx-auto sm:px-6 lg:pr-0 lg:px-14 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-8 w-full"
      id="what-can-we-do"
    >
      <article className="space-y-2 md:max-w-xl">
        <strong className="text-custom-purple-400 font-tommy font-normal">
          About Company
        </strong>
        <h2 className="text-4xl font-tommy uppercase">
          BigO Comprehensive Services:{" "}
          <span className="font-bold">Transforming Data into Insights</span>
        </h2>
        <p>
          The business sector depends heavily on applying cutting-edge
          technology, such as
        </p>

        <ul className="pt-4 mt-0 ">
          {servicesList.map((item) => (
            <li className="flex items-start gap-8 relative" key={item.id}>
              <Image
                src="/ai-icon.svg"
                alt=""
                width={40}
                height={40}
                className="bg-gray-200 p-2 rounded-full"
              />

              <Separator
                orientation="vertical"
                className="absolute top-0 left-12 bg-gray-200"
              />

              <div className="space-y-2 pb-4">
                <h6 className="font-bold">{item.title}</h6>
                <p>{item.description} </p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <div className="h-full p-8 relative">
        <div className="bg-custom-purple-600 w-1/4 min-h-2 h-full absolute top-0 right-0 -z-10" />
        <Image
          src="/about-img.png"
          alt=""
          width={500}
          height={400}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
