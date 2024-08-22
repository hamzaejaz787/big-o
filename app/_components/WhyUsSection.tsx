import React from "react";
import CardLoader from "./CardLoader";

const industriesData = [
  {
    id: 1,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 2,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 3,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 4,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 5,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 6,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 7,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 8,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 9,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 10,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 11,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 12,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
  {
    id: 12,
    title: "Finance and Assurance",
    description:
      "Finance and insurance companies are identifying fraud risks efficiently while improving their decision-making through real-time insights.",
    href: "/",
  },
];

const WhyUsSection = () => {
  return (
    <section className="container px-4 sm:px-8 py-14 bg-custom-purple-25">
      <strong className="text-custom-purple-300 font-tommy font-normal">
        Why Choose Us
      </strong>
      <h2 className="text-4xl font-tommy">
        Catering to
        <span className="font-bold"> Diverse global </span>
        industries
      </h2>

      <CardLoader industriesData={industriesData} />
    </section>
  );
};

export default WhyUsSection;
