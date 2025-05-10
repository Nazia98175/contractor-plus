import React from "react";
import CircularSlider from "./CircularSlider";
import CircularSliderCardItems from "./CircularSliderCardItems";
import { useTranslations } from "next-intl";

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
      <img
        className="absolute top-0 w-full h-full z-[-1]"
        src="/images/webp/contractor-industry-bg.webp"
        alt="webp bg"
      />
      <div>
        <h3 className="section-heading text-center text-white">
          {t("heading")}
        </h3>
        <p className="text-base font-medium sm:font-normal text-center text-superSilver font-jakarta py-4">
          {t("desc")}
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-red-linear h-10 primary-btn">{t("cta")}</button>
        </div>
      </div>
      <img
        className="max-w-[1227px] w-full mx-auto h-full"
        src="/images/webp/contractor.webp"
        alt=""
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
