import Link from "next/link";
import React from "react";
import CardReveal from "../common/CardReveal";
interface Props {
  features: {
    path?: string;
    icon?: React.ReactNode;
    description?: string;
  };
  delay?: number;
}
const YouNeedFeaturesCard: React.FC<Props> = ({ features, delay }) => {
  return (
    <CardReveal delay={delay}>
      <Link
        className="text-decemberSky bg-charcoalBlue hover:text-charcoalBlue group flex items-center gap-2.5 px-1.5 py-1 text-sm font-extrabold transition duration-300 ease-in-out hover:bg-white md:text-base lg:text-lg"
        href={features.path ?? "#"}
      >
        {features.icon}
        {features.description}
      </Link>
    </CardReveal>
  );
};

export default YouNeedFeaturesCard;
