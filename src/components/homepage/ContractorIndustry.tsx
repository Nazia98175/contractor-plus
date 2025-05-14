import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";

const ContractorIndustry = () => {
  const industryItems = [
    {
      image: "/images/png/circular-slide-1.png",
    },
    {
      image: "/images/png/circular-slide-1.png",
    },
    {
      image: "/images/png/circular-slide-1.png",
    },
    {
      image: "/images/png/circular-slide-1.png",
    },
    {
      image: "/images/png/circular-slide-1.png",
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
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading text-center text-white">
            {t("heading")}
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
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
    </section>
  );
};

export default ContractorIndustry;
