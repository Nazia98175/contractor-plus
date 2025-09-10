import Link from "next/link";
import React from "react";
import CardReveal from "../common/CardReveal";
interface Props {
  features: {
    slug?: string;
    icon?: React.ReactNode;
    text?: string;
  };
  delay?: number;
}
const YouNeedFeaturesCard: React.FC<Props> = ({ features, delay }) => {
  return (
    <CardReveal delay={delay}>
      <Link
        className="text-decemberSky bg-charcoalBlue hover:text-charcoalBlue group flex items-center gap-2.5 px-1.5 py-1 text-sm font-extrabold transition duration-300 ease-in-out hover:bg-white md:text-base lg:text-lg"
        href={features.slug ?? "#"}
      >
        {features.icon}
        {features.text}
      </Link>
    </CardReveal>
  );
};

export default YouNeedFeaturesCard;
