"use client";
import { useTranslations } from "next-intl";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import CoreFeaturesCard from "./CoreFeaturesCard";

interface CoreFeaturesData {
  title: string;
  sub_title: string;
  cardsDetail?: any; // Replace `any` with actual card structure if known
}

interface CoreFeaturesProps {
  coreFeatures: CoreFeaturesData;
}

const CoreFeatures: React.FC<CoreFeaturesProps> = ({ coreFeatures }) => {
  const t = useTranslations("corefeature");

  return (
    <section className="relative z-20 bg-white">
      <div className="mx-auto w-full max-w-[985px] pt-12 text-center md:text-start">
        <h4 className="sub-heading text-lightBlack w-full font-semibold md:w-fit">
          {coreFeatures?.title}
        </h4>
        <h5 className="mt-3 leading-[130%]">{coreFeatures?.sub_title}</h5>
        <CoreFeaturesCard featuresList={coreFeatures?.cardsDetail} />
      </div>
    </section>
  );
};

export default CoreFeatures;
