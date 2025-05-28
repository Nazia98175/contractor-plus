"use client";
import { useTranslations } from "next-intl";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import CoreFeaturesCard from "./CoreFeaturesCard";

const CoreFeatures = () => {
  const t = useTranslations("corefeature");

  return (
    <section className="relative z-20 bg-white">
      <div className="mx-auto max-w-[950px] px-2 pt-12 text-center md:text-start">
        <PrimaryAnimatedText
          className="sub-heading text-lightBlack w-full font-semibold md:w-fit"
          delay={3000}
        >
          Contractor+ operates like your business really runs
        </PrimaryAnimatedText>
        <PrimaryAnimatedText className="mt-3 leading-[130%]" delay={4000}>
          When the tools actually work together, you move like a company twice
          your size.
        </PrimaryAnimatedText>
        <CoreFeaturesCard />
      </div>
    </section>
  );
};

export default CoreFeatures;
