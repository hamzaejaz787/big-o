import Image from "next/image";
import iotHeader from "@/public/iot-header.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import ChallengesSection from "./ChallengesSection";
import IotServicesSection from "./IotServicesSection";
import BeyondSection from "@/components/BeyondSection";
import GetInTouch from "@/components/GetInTouch";
import Faqs from "@/components/Faqs";

export const metadata: Metadata = {
  title: "Outcome-Driven Internet of Things (IoT) Services",
  description:
    "Facilitate your business operations through BigO’s IoT services. Strengthen the speed and reduce error frequency with a substantial cost. Learn more!",
};

const page = () => {
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

  const beyondSectionData = {
    title: "Discover Full-Scale Digital Services Beyond IoT Solutions",
    description:
      "We understand the ever evolving demands of businesses, and finding the finest services has become a challenge for business owners. BigO in collaboration with CyberX Studio fulfills the holistic digital marketing requirements of its clients. If you are looking for services other than the Internet of Things (IoT), then look no further! Let CyberX Studio be your digital marketing partner and upscale your business's online visibility.",
    image: "/beyond-iot.png",
    serviceHeading: "Benefit from the following holistic services suite:",
  };

  const servicesList = [
    "Comprehensive Digital Marketing Strategy",
    "UI/UX Designing",
    "Website Design and Development",
    "SEO Mastery",
    "PPC and Ad Campaigns",
    "Social Media Management",
    "Email Marketing",
    "Content Marketing",
    "Graphics and Animations",
  ];

  return (
    <>
      <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20">
        <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
          <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
            <span className="font-bold">Outcome-Driven</span> Internet of Things
            (IoT) Services
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            At BigO, the core motive of our IoT services is to reveal analytical
            insights about operations, streamline work processes, minimize
            potential challenges, and empower businesses to make informed,
            data-driven decisions.
          </p>

          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white text-lg p-6"
          >
            <Link href="/get-a-quote">Request IoT Services</Link>
          </Button>
        </div>

        <Image
          src={iotHeader}
          alt=""
          className="h-full w-full mix-blend-multiply"
        />
      </section>

      <ChallengesSection />
      <IotServicesSection />
      <BeyondSection data={beyondSectionData} servicesList={servicesList} />

      <section className="container px-6 sm:px-8 mb-8 flex items-center justify-between gap-4 ">
        <Faqs faqItems={faqItems} />

        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={550}
          height={550}
          className="hidden md:block"
        />
      </section>

      <GetInTouch />
    </>
  );
};

export default page;
