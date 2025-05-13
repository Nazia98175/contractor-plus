import React from "react";
import CircularSlider from "./CircularSlider";
import CircularSliderCardItems from "./CircularSliderCardItems";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";

const ContractorIndustry = () => {
  const industryItems = [
    {
      image: "https://picsum.photos/seed/construction/800/600?grayscale",
    },
    {
      image: "https://picsum.photos/seed/remodeling/800/600?grayscale",
    },
    {
      image: "https://picsum.photos/seed/contractor/800/600?grayscale",
    },
    {
      image: "https://picsum.photos/seed/hvac/800/600?grayscale",
    },
    {
      image: "https://picsum.photos/seed/plumbing/800/600?grayscale",
    },
  ];

  const t = useTranslations("industry");

  return (
    <section className="relative pt-10">
      <Image
        className="absolute top-0 w-full h-full z-0"
        src="/images/webp/contractor-industry-bg.webp"
        alt="webp bg"
        fill
      />
      <div className="px-2 relative z-20">
        <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading text-center text-white">
            {t("heading")}
          </h3>
        </TextAnimation>
        <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
          <p className="text-base font-medium sm:font-normal text-center text-superSilver font-jakarta py-4">
            {t("desc")}
          </p>
        </TextAnimation>
        <div className="flex justify-center items-center">
          <button className="bg-red-linear h-10 primary-btn">{t("cta")}</button>
        </div>
      </div>

      {/* here is slider so img tag not changed */}
      <img
        className="max-w-[1227px] w-full mx-auto relative z-10"
        src="/images/webp/contractor.webp"
        alt="Contractor"
      />
      {/* <div style={{ height: "400px", position: "relative", margin: "0 auto" }}>
        <CircularSlider
          items={industryItems}
          bend={5}
          borderRadius={0.1}
          className="mx-auto max-w-6xl"
        />
        <div className="hidden">
          <CircularSliderCardItems items={industryItems} />
        </div>
      </div> */}
    </section>
  );
};

export default ContractorIndustry;
