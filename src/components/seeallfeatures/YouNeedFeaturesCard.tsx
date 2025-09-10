import Link from "next/link";
import React, { FC } from "react";
import CardReveal from "../common/CardReveal";
import Image from "next/image";

type Props = {
  features: {
    slug?: string;
    icon?: {
      url?: string;
    };
    text?: string;
  };
  delay?: number;
};
const YouNeedFeaturesCard: FC<Props> = ({ features, delay }) => {
  return (
    <CardReveal delay={delay}>
      <Link
        className="text-decemberSky bg-charcoalBlue hover:text-charcoalBlue group flex items-center gap-2.5 px-1.5 py-1 text-sm font-extrabold transition duration-300 ease-in-out hover:bg-white md:text-base lg:text-lg"
        href={`/${features.slug || "#"}`}
      >
        {features?.icon && (
          <Image
            src={`${features?.icon?.url}`}
            alt="icon"
            width={24}
            height={24}
            className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
            loading="lazy"
          />
        )}
        {features?.text}
      </Link>
    </CardReveal>
  );
};

export default YouNeedFeaturesCard;
