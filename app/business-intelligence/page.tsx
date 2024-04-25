import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import biHeader from "@/public/bi-intro.png";
import BeyondSection from "@/components/BeyondSection";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import ImageScrollCards from "@/components/ImageScrollCards";

interface biSolutionsDataProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BusinessIntelligence = () => {
  const biSolutionsData: biSolutionsDataProps[] = [
    {
      title: "Interactive Dashboards with Data Visualization",
      description:
        "We craft visually appealing and interactive dashboards with integrated data in one location to facilitate clear decision-making. This entails designing intuitive user interfaces, implementing responsive data visualizations, and tailoring dashboards to meet specific business needs.",
      imageSrc: "/dashboard.png",
    },
    {
      title: "Data Warehousing",
      description:
        "At BigO, our Data warehousing solution as part of our Business Intelligence Services involves holistic services to maximize data management, operations efficiency, and precise analytics. We specialize in collecting, integrating, and migrating data from diverse sources, ensuring the working of a well-structured and centralized warehouse.",
      imageSrc: "/data-warehouse.png",
    },
    {
      title: "Predictive Analytics for Effectiveness",
      description:
        "We execute robust Extract, Transform, Load (ETL) procedures for workflow automation, insightful visualization, and maintaining data models for analytical efficiency.",
      imageSrc: "/predictive-analysis.png",
    },
    {
      title: "Business Automation and Optimization",
      description:
        "Our target is to refine overall business by automating and optimizing operations. This leads to minimized manual efforts, and facilitates quicker yet meticulous decision-making based on the stored data.",
      imageSrc: "/business-automation.png",
    },
    {
      title: "Data Quality Handling",
      description:
        "Our experts are adept at guaranteeing the accuracy, consistency, and reliability of data stored in the warehouse. The quality of data is managed constructively through processes such as data profiling, cleansing, and validation, to determine, and resolve discrepancies.",
      imageSrc: "/quality-handling.png",
    },
  ];
  const beyondSectionData = {
    title: "Explore Comprehensive Digital Solutions Beyond BI Services",
    description:
      "In today's dynamic landscape, sourcing top-notch services can be demanding. Recognizing this need, we are cooperating with CyberX Studio to address the diverse digital marketing needs of its clientele. If your quest extends beyond business intelligence solutions, your search ends here! Choose CyberX Studio as your digital marketing partner and upgrade your business's digital presence. Enhance your brand`s visibility in the digital realm by taking advantage of the following holistic services:",
    image: "/beyond-iot.png",
    serviceHeading: "Benefit from the following holistic services suite:",
  };

  const servicesList = [
    "All-Inclusive Digital Marketing Strategy",
    "UI/UX Designing",
    "Website Design and Development",
    "SEO Mastery",
    "PPC and Ad Campaigns",
    "Social Media Management",
    "Email Marketing",
    "Content Marketing",
    "Graphics and Animations",
  ];
  const faqItems = [
    {
      value: "question-1",
      question: "What is IoT and how can it help businesses?",
      answer:
        "The Internet of Things, or IoT, refers to the interconnectedness of devices and systems. IoT provides businesses with increased output, real-time data insights, and decision-making skills through linking and automating multiple operations.",
    },
    {
      value: "question-2",
      question:
        "Can BigO's IoT services be tailored to cater to the needs of diverse industries?",
      answer:
        "BigO recognizes the different needs of industries. We provide customized IoT solutions, collaborating closely with clients to tailor our services to specific industry needs, whether in manufacturing, healthcare, logistics, or other.",
    },
    {
      value: "question-3",
      question: "How does BigO safeguard the confidentiality of IoT data?",
      answer:
        "Privacy is our top priority. BigO uses strong encryption, authentication, and compliance methods to protect IoT data. We follow industry guidelines and regulations to maintain the integrity and security of your information.",
    },
    {
      value: "question-4",
      question: "What makes BigO stand out in the IoT service industry?",
      answer:
        "BigO distinguishes itself with its experience, collaborative approach, and dedication to technological advances. We render our years of knowledge, cooperate closely with clients, and are always exploring emerging technologies to keep our IoT services at the forefront of industry innovations.",
    },
  ];

  const partnerLogos = [
    "/matplot-logo",
    "/pandas-logo",
    "/python-logo",
    "/sql-logo",
    "/numpy-logo",
  ];

  const imageScrollCardsData = [
    {
      cardTitle: "Enterprise Intelligence",
      cardDescription:
        "Integrate and maintain company-wide data, monitor and assess performance, and support both managerial and strategic planning.",
      imageSrc: "/enterprise-intelligence.png",
    },
    {
      cardTitle: "Operational Intelligence",
      cardDescription:
        "Keep track of and evaluate operational processes, pinpoint challenges, and forecast working efficiency.",
      imageSrc: "/operational-intelligence.png",
    },
    {
      cardTitle: "Customer Intelligence",
      cardDescription:
        "Generate an extensive 360-degree customer view, monitor and model customer behavior, and oversee customer relationships.",
      imageSrc: "/customer-intelligence.png",
    },
    {
      cardTitle: "Financial Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/financial-intelligence.png",
    },
    {
      cardTitle: "Brand and Product Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim ",
      imageSrc: "/brand-and-product-intelligence.png",
    },
    {
      cardTitle: "Supply Chain Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/supply-chain-intelligence.png",
    },
    {
      cardTitle: "Transportation and Logistics Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/transportation-and-logistics-intelligence.png",
    },
    {
      cardTitle: "Production Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/production-intelligence.png",
    },
    {
      cardTitle: "HR Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/hr-intelligence.png",
    },
    {
      cardTitle: "E-commerce Intelligence",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.Lorem ipsum dolor",
      imageSrc: "/e-commerce-intelligence.png",
    },
  ];

  const visualCards = [
    { heading: "Symbol Map", imageSrc: "/symbol-map.png" },
    {
      heading: "Line Chart",
      imageSrc: "/line-chart.png",
    },
    {
      heading: "Bar Charts",
      imageSrc: "/bar-chart.png",
    },
    {
      heading: "Pie Charts",
      imageSrc: "/pie-chart.png",
    },
    {
      heading: "Donut Charts",
      imageSrc: "/donut-chart.png",
    },
    {
      heading: "Heatmaps",
      imageSrc: "/heat-map.png",
    },
    {
      heading: "Funnel Charts",
      imageSrc: "/funnel-chart.png",
    },
    {
      heading: "Connectivity Charts",
      imageSrc: "/connectivity-chart.png",
    },
    {
      heading: "Scatterplots",
      imageSrc: "/scatterplot.png",
    },
    {
      heading: "Sparklines",
      imageSrc: "/sparkline.png",
    },
    {
      heading: "Matrices",
      imageSrc: "/matrix.png",
    },
    {
      heading: "Pivot Tables",
      imageSrc: "/pivot-table.png",
    },
    {
      heading: "Guage Charts",
      imageSrc: "/gauge-chart.png",
    },
    {
      heading: "Waterfall Charts",
      imageSrc: "/waterfall-chart.png",
    },
    {
      heading: "Card Charts",
      imageSrc: "/card-chart.png",
    },
    {
      heading: "Custom Charts",
      imageSrc: "/thermometer-chart.png",
    },
  ];

  return (
    <>
      <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
        <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
          <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
            <span className="font-bold">Make Precise Decisions</span> with
            Business Intelligence Services
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            We help transform your decentralized operations into a cohesive,
            cutting-edge data visualization system that enhances everyday
            operations, KPI implementation, and goal accomplishment. Customize
            your BI systems as per your specific requirements.
          </p>

          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white text-lg p-6"
          >
            <Link href="/">Learn More</Link>
          </Button>
        </div>

        <Image src={biHeader} alt="" className="mix-blend-soft-light" />
      </section>

      <section className="py-8 sm:py-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
          Crafting Business Success with Our BI Solutions
        </h2>

        <div className="pt-8 flex flex-wrap justify-center gap-10 lg:gap-20 w-full">
          {biSolutionsData.map((solution) => (
            <div
              key={solution.title}
              className="flex items-start flex-wrap lg:flex-nowrap gap-6 w-full md:max-w-[350px] xl:max-w-[500px]"
            >
              <Image
                src={solution.imageSrc}
                alt={solution.title}
                width={100}
                height={100}
                className="w-[100px] h-[100px]"
              />

              <div className="space-y-3">
                <h3 className="font-bold uppercase text-xl">
                  {solution.title}
                </h3>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-200">
        <section className="py-8 sm:py-12 px-8 sm:px-10 lg:px-20 space-y-4 container">
          <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
            Innovative Analytical Technologies for BI{" "}
          </h2>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-10 lg:gap-20 w-full">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="w-full  max-w-max xl:max-w-[275px]">
                <Image
                  src={`${logo}.png`}
                  alt=""
                  width={250}
                  height={100}
                  className="mix-blend-luminosity w-full"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy mx-auto max-w-2xl text-center">
          Navigating Insights with Business Intelligence Dashboards
        </h2>

        <ImageScrollCards imageScrollCardsData={imageScrollCardsData} />
      </section>

      <section className="py-8 sm:py-12 px-8 sm:px-10 md:px-20 space-y-4 container">
        <h2 className="text-custom-purple-300 uppercase text-4xl font-tommy text-center">
          Convert Raw Data into Interactive BI Visuals{" "}
        </h2>
        <p className="mx-auto max-w-2xl text-center">
          Dispersed and disorganized data can bring a lot of confusion and
          frustration. Our BI dashboards are designed to be systematically and
          visually engaging to analyze the performance trajectory of the
          business and strengthen data management.
        </p>

        <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
          {visualCards.map((card) => (
            <div
              className="flex flex-col items-center text-center justify-center gap-2 cursor-pointer"
              key={card.heading}
            >
              <Image
                src={card.imageSrc}
                alt={card.heading}
                width={150}
                height={150}
              />

              <h2 className="font-bold">{card.heading}</h2>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-200">
        <BeyondSection data={beyondSectionData} servicesList={servicesList} />
        <section className="container px-6 sm:px-8 flex items-center justify-between gap-4">
          <Faqs faqItems={faqItems} />
          <Image
            src="/faq-illustration.png"
            alt="faq-illustration"
            width={550}
            height={550}
            className="hidden md:block"
          />
        </section>
      </div>
      <GetInTouch />
    </>
  );
};

export default BusinessIntelligence;