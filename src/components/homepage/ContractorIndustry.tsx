import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import CircularGallery from "./CircularGallery";
import CircuartItem, { getGalleryItems } from "./CircuartItem";

const ContractorIndustry = () => {
  const galleryItems = getGalleryItems();

  const t = useTranslations("industry");

  return (
    <section className="relative pt-10">
      <Image
        className="absolute top-0 w-full left-0 h-full z-0 max-w-[500px] object-center lg:block hidden"
        src="/images/webp/contractor-left-bg.webp"
        alt="webp bg"
        width={500}
        height={700}
      />
      <Image
        className="absolute top-0 w-full h-full z-0 right-0 object-center max-w-[700px] lg:block hidden"
        src="/images/webp/contractor-right-bg.webp"
        alt="webp bg"
        width={300}
        height={300}
      />
      <Image
        className="absolute top-0 w-full h-full z-0 left-0 object-center max-w-[320px] block lg:hidden"
        src="/images/webp/contractor-bg-mobile.webp"
        alt="webp bg"
        width={300}
        height={300}
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
      {/* <div style={{ height: "600px", position: "relative" }} className="mt-10">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          textPosition="top"
        />
      </div> */}
    </section>
  );
};

export default ContractorIndustry;
