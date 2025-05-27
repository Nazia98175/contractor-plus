"use client";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import CoreFeaturesCard from "./CoreFeaturesCard";

const CoreFeatures = () => {
  const t = useTranslations("corefeature");

  return (
    <section className="relative z-20 bg-white">
      <div className="mx-auto max-w-[950px] px-2 pt-12 text-center md:text-start">
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <h3 className="sub-heading text-lightBlack w-full font-semibold md:w-fit">
            Contractor+ operates like your business really runs
          </h3>
        </CardReveal>
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <p className="mt-3 leading-[130%]">
            When the tools actually work together, you move like a company twice
            your size.
          </p>
        </CardReveal>
        <CoreFeaturesCard />
      </div>
    </section>
  );
};

export default CoreFeatures;
