import GetInTouch from "@/components/GetInTouch";
import HeaderCarousel from "./_components/HeaderCarousel";
import AboutSection from "./_components/AboutSection";
import SliderSection from "./_components/SliderSection";
import Cta from "@/components/Cta";
import WhyUsSection from "./_components/WhyUsSection";
import FaqControl from "./_components/FaqControl";

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
      <FaqControl />
      <GetInTouch />
    </main>
  );
};

export default Home;
