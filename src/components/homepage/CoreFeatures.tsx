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
        <PrimaryAnimatedText
          className="sub-heading text-lightBlack w-full font-semibold md:w-fit"
          delay={3000}
        >
          {coreFeatures?.title}
        </PrimaryAnimatedText>
        <PrimaryAnimatedText className="mt-3 leading-[130%]" delay={4000}>
          {coreFeatures?.sub_title}
          {/* When the tools actually work together, you move like a company twice
          your size. */}
        </PrimaryAnimatedText>
        <CoreFeaturesCard featuresList={coreFeatures?.cardsDetail} />
      </div>
    </section>
  );
};

export default CoreFeatures;
