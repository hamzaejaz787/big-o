import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import cloudHeader from "@/public/cloud-header.png";
import FiveCardsSection from "@/components/FiveCardsSection";
import VideoCta from "@/components/VideoCta";
import ServicesCardsSection from "@/components/ServicesCardsSection";
import BeyondSection from "@/components/BeyondSection";
import Faqs from "@/components/Faqs";
import GetInTouch from "@/components/GetInTouch";
import ScrollCards from "@/components/ScrollCards";

const CloudService = () => {
  const fiveCardsSectionCotent = {
    title: "Unfolding the Potential of Our Cloud Services",
    description:
      "As a prominent software solutions provider with a focus on cloud services, we mitigate organizational risks and foster confidence in the public transition. By extending our expertise and resources, we emerge as your dependable partner and offer continuous guidance throughout your modernization process.",
  };

  const fiveCardsData = [
    {
      title: "Assessment",
      description:
        "We meticulously evaluate your system's preparedness for cloud integration, examine related costs, and provide recommendations to reduce any risks.",
    },
    {
      title: "Architecture Design",
      description:
        "We craft a well-structured cloud infrastructure model encompassing robust designs for security, access, networking, and seamless migration procedures.",
    },
    {
      title: "Deployment",
      description:
        "In the deployment phase, the solution is implemented, thoroughly tested, and delivered to our clients or partners.",
    },
    {
      title: "Ongoing Assistance",
      description:
        "Post-approval, we commit to continuous management, monitoring, and support to uphold a consistently high quality of service.",
    },
    {
      title: "Optimization",
      description:
        "Regular discussions during monthly service delivery management calls focus on practical improvements, ensuring an optimal cloud experience.",
    },
  ];

  const videoCtaOneData = {
    title: "From Concept to Cloud: a Strategic Path for Your Business Growth",
    description:
      "With Our Cutting-Edge Cloud Services that Leverage Accuracy, Efficiency, Security, Speed, and Agility in One Place",
    height: "h-screen md:h-[500px]",
    videoSrc: "/cloud-cta-1.mp4",
  };
  const videoCtaTwoData = {
    title: "Free Up IT Resources and Drive Innovation",
    description:
      "Our Cloud Service Comes with a Network of Experts to Assist You in Creating Significant Business Value Affordably!",
    height: "h-screen md:h-[500px]",
    videoSrc: "/cloud-cta-2.mp4",
  };

  const serviceCardContent = {
    title:
      "Reimage the Full Potential of Your Business with Our Cloud Services",
    description:
      "Our certified experts ensure seamless implementation to assist small, medium-sized, and large enterprises to scale cloud services per their requirements. Optimize costs, pay-as-you-go, and stay innovative while we handle the technical complexities without draining your resources.",
  };

  const serviceCardsData = [
    {
      title: "Adaptability",
      description:
        "Our customizable products are capable of growing along with your business. Whether you're a startup or a large enterprise, our cloud services can scale to meet your evolving needs.",
    },
    {
      title: "Reliability",
      description:
        "Benefit from high availability and reliability with our robust cloud infrastructure. Experience minimal downtime and ensure continuity in your operations.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize your IT costs with our cloud solutions. Pay only for the resources you use, eliminating the need for large upfront investments in hardware.",
    },
    {
      title: "Innovation",
      description:
        "Excel in the competitive landscape with access to the latest advancements in cloud technology. Leverage innovative solutions to drive your business forward.",
    },
  ];

  const beyondSectionData = {
    title: "Go Beyond Cloud Services to Revamping Your Digital Presence",
    description:
      "We are aware of the challenges that digitization and building an online presence can bring in this fast-paced time of tech-driven competition. As a joint venture, BigO, in collaboration with CyberX Studio, is committed to addressing its clients' digital visibility needs in addition to cloud services. From strategic planning to execution, CyberX Studio empowers your enterprise to thrive in the digital landscape by refining your online presence and amplifying customer engagement. Get in touch and benefit from the following suite of services:",
    image: "/beyond-cloud.png",
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

  const scrollCardsSection = {
    title:
      "Capitalize on Efficiency with Our Comprehensive Cloud Service Offerings",
    description:
      "From tailored strategies enhancing performance and driving innovation to seamless transitions with Cloud Migration Services, we offer unparalleled flexibility, security, and efficiency. Experience the future of business, where our cloud service facilitates expansion and shows you how to embark on the life-changing process of realizing the whole potential of your operations.",
  };

  const scrollCardsData = [
    {
      title: "Cloud Consultation and Strategy",
      description:
        "In order to maximize efficiency, cut expenses, and spur creativity, our team of cloud specialists will assess current infrastructure, comprehend your company's requirements, and create a customized cloud plan.",
    },
    {
      title: "Cloud Migration Services",
      description:
        "Transition your existing operations, systems, and infrastructure seamlessly to the cloud with our customized solution. Minimize downtime, reduce costs, and revolutionize your business without disrupting your daily operations.",
    },
    {
      title: "Data Management and Analytics",
      description:
        "Virtualize, automate, and streamline data with the help of our cloud-based data management and analytics services. We help you extract valuable insights accurately and swiftly to make informed decisions and stand out as an advanced data handler.",
    },
    {
      title: "Cloud Security and Compliance",
      description:
        "Rest assured, knowing that your data is protected, you can lay off additional security maintenance burdens. We implement robust cloud security measures to build a shield around your cloud infrastructure in order to guarantee compliance and foster confidence.",
    },
    {
      title: "Infrastructure as a Service (IaaS)",
      description:
        "Experience unparalleled flexibility and scalability with our IaaS solutions. We assist you in hosting your applications, databases, and virtual machines in the cloud, eradicating any requirement for physical hardware altogether.",
    },
    {
      title: "Platform as a Service (PaaS)",
      description:
        "Simplify application development and deployment with our PaaS service. Focus on coding while we manage the underlying infrastructure, ensuring a faster time-to-market for your applications.",
    },
    {
      title: "Software as a Service (SaaS)",
      description:
        "We help you ignite the full potential of your software applications without the hassle of installation and maintenance. Our SaaS solutions provide access to powerful tools and applications from any device, promoting collaboration and productivity.",
    },
  ];

  return (
    <>
      <section className="h-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-700 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20 overflow-hidden">
        <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
          <h1 className="text-white font-tommy uppercase text-5xl lg:text-[3.5rem]">
            Cloud <span className="font-bold">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            Where Agility and Efficiency Meets Innovation to Propel Your
            Business Beyond Boundaries for Success
          </p>

          <Button
            asChild
            variant="outline"
            className="bg-transparent text-white text-lg p-6"
          >
            <Link href="/">Learn More</Link>
          </Button>
        </div>

        <Image src={cloudHeader} alt="" className="mix-blend-overlay" />
      </section>
      <section className="h-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 justify-between items-center w-full px-8 sm:px-14 lg:px-20 2xl:px-28 py-12 container">
        <Image src="/cloud-intro.png" alt="" width={550} height={550} />

        <div className="space-y-4 text-center lg:text-left max-w-3xl">
          <h2 className="text-custom-purple-300 font-bold text-3xl uppercase">
            From Concept to Cloud: a Strategic Path for Your Business Growth{" "}
          </h2>

          <p>
            Businesses are evolving their models for enhanced agility,
            necessitating the need for the cloud as a must-have rather than a
            choice. For complete automation, streamlining workloads, and secure
            data storage and transmission, integrating advanced technologies is
            no longer reliable. Hence, enterprises are on the lookout for a
            trusted partner to facilitate effective cloud integration that
            seamlessly integrates with their existing legacy systems.
          </p>
          <p>
            We take charge of the intricacies involved in cloud integration,
            such as automation, maintenance, and innovation. Now that the
            intricacy of technology has been addressed, you can focus on
            expanding your company. We provide end-to-end cloud infrastructure
            setup and management using AWS, Terraform, and Docker, along with
            DevOps integration through Jenkins and GIT. In addition, our service
            includes big data analytics and processing, unlocking the full
            potential of the cloud.
          </p>

          <Button
            asChild
            className="bg-custom-purple-400 hover:bg-custom-purple-500 px-10 py-6 text-lg"
          >
            <Link href="/get-a-quote">Get A Quote</Link>
          </Button>
        </div>
      </section>

      <FiveCardsSection
        fiveCardsData={fiveCardsData}
        fiveCardsSectionCotent={fiveCardsSectionCotent}
      />
      <VideoCta videoCtaData={videoCtaOneData} />
      <ScrollCards
        scrollCardsSection={scrollCardsSection}
        scrollCardsData={scrollCardsData}
      />
      <VideoCta videoCtaData={videoCtaTwoData} />
      <ServicesCardsSection
        content={serviceCardContent}
        serviceCards={serviceCardsData}
      />
      <BeyondSection data={beyondSectionData} servicesList={servicesList} />
      <section className="container px-6 sm:px-8 mb-8 flex items-center justify-between gap-4">
        <Image
          src="/faq-illustration.png"
          alt="faq-illustration"
          width={550}
          height={550}
          className="hidden md:block"
        />

        <Faqs faqItems={faqItems} />
      </section>
      <GetInTouch />
    </>
  );
};

export default CloudService;
