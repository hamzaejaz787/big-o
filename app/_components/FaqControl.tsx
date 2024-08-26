"use client";

import React from "react";
import FaqNavigationContainer from "@/components/FaqNavigationContainer";
import Faqs from "@/components/Faqs";

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

const navigationItems = [
  { text: "AI Practices", value: "question-1" },
  { text: "BI Solutions", value: "question-2" },
  { text: "BI Data Usage", value: "question-3" },
  { text: "Cloud Services", value: "question-4" },
];
const FaqControl = () => {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(
    faqItems[0].value
  );

  return (
    <section className="container px-6 sm:px-8 md:pl-0 flex justify-between gap-4 flex-wrap md:flex-nowrap">
      <div className="hidden md:block relative h-auto w-full">
        <div className=" bg-custom-purple-700 w-1/2 h-full -z-10" />
        <FaqNavigationContainer
          navigationItems={navigationItems}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
        />
      </div>

      <Faqs
        faqItems={faqItems}
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
      />
    </section>
  );
};

export default FaqControl;
