import Image from "next/image";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import { Separator } from "@/components/ui/separator";
import HeaderCarousel from "./_components/HeaderCarousel";
import AboutSection from "./_components/AboutSection";
import SliderSection from "./_components/SliderSection";
import Cta from "@/components/Cta";
import WhyUsSection from "./_components/WhyUsSection";

const faqItems = [
  {
    value: "question-1",
    question: "How Can Businesses Ensure Responsible AI Practices?",
    answer:
      "Responsible AI, in the simplest sense, is the ethical and fair deployment of artificial intelligence and its derivants, such as machine learning, deep learning, and other technologies. Businesses can ensure this by implementing ethical guidelines, conducting regular audits, and prioritizing transparency and accountability. Furthermore, responsible AI service providers can be their go-to place for streamlining the ethical and fair use of artificial intelligence technologies.",
  },
  {
    value: "question-2",
    question:
      "What Challenges Are Faced by Businesses in Integrating BI Solutions?",
    answer:
      "Organizations face several challenges while implementing BI solutions independently and without external help. These include understanding algorithms, integration complexities, data privacy issues, user adoption, and system monitoring.",
  },
  {
    value: "question-3",
    question: "How Does Business Intelligence (BI) Support Data Usage?",
    answer:
      "BI helps businesses integrate and manage responsible data usage by implementing data privacy policies, promoting ethical practices, and ensuring compliance with regulatory standards. Hence, organizations need to choose wisely for their BI service providers that fall on both ethical and legal criteria.",
  },
  {
    value: "question-4",
    question:
      "What are the Key Considerations for Choosing a Cloud Service Provider?",
    answer:
      "Businesses should consider before selecting a cloud service provider including security measures, compliance status, pricing models, reputation in the market, scalability, types of services, and the provider's track record in service reliability. If enterprises trust any service provider, they will more likely fall prey to an illicit moneymaker or con company.",
  },
];

const carouselData = [
  {
    id: 1,
    Image: {
      url: "/header-image.png",
      alternativeText: "",
    },
    Title: "Elevating the Future of Tech",
    Description:
      "Enabling Businesses Smart Decision-Making by Integrating Endless Automation Possibilities Powered by Our Responsible AI",
  },
  {
    id: 2,
    Image: {
      url: "/header-image.png",
      alternativeText: "",
    },
    Title: "Elevating the Future of Tech",
    Description:
      "Enabling Businesses Smart Decision-Making by Integrating Endless Automation Possibilities Powered by Our Responsible AI",
  },
  {
    id: 3,
    Image: {
      url: "/header-image.png",
      alternativeText: "",
    },
    Title: "Elevating the Future of Tech",
    Description:
      "Enabling Businesses Smart Decision-Making by Integrating Endless Automation Possibilities Powered by Our Responsible AI",
  },
];

const Home = async () => {
  return (
    <main>
      <HeaderCarousel carouselData={carouselData} />
      <AboutSection />
      <SliderSection />
      <Cta />
      <WhyUsSection />
      <section className="container px-6 sm:px-8 lg:h-screen 2xl:max-h-[800px] my-8 flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={800}
          height={720}
          className="hidden md:block"
        />
        <Separator
          className="bg-custom-purple-300 hidden md:block h-[1px] w-full lg:h-full lg:w-[1.5px]"
          orientation="vertical"
        />
        <Faqs faqItems={faqItems} />
      </section>

      <GetInTouch />
    </main>
  );
};

export default Home;
