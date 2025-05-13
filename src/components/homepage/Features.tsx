"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import CustomSlider from "../common/CustomSlider";
import { useTranslations } from "next-intl";
import { section } from "framer-motion/client";

const Features = () => {
  const t = useTranslations("feature");
  const featureData = [
    {
      title: t("card1.heading"),
      desc: t("card1.desc"),
      img: "/images/webp/user-friendly.webp",
    },
    {
      title: t("card2.heading"),
      desc: t("card2.desc"),
      img: "/images/webp/communication-box.webp",
    },
    {
      title: t("card3.heading"),
      desc: t("card3.desc"),
      img: "/images/webp/workspace.webp",
    },
  ];
  return (
    <section className="bg-white">
      <section className="pt-12 pb-10 main-container bg-doctor">
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {featureData.map((obj, index) => (
            <FeatureCard obj={obj} key={index} />
          ))}
        </div>
        <div className="lg:hidden">
          <CustomSlider
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 14 },
              768: { slidesPerView: 2.6, spaceBetween: 16 },
            }}
          >
            {featureData.map((obj, index) => (
              <FeatureCard obj={obj} key={index} />
            ))}
          </CustomSlider>
        </div>
      </section>
    </section>
  );
};

export default Features;
