"use client";
import React from "react";
import { featureData } from "../common/Helper";
import FeatureCard from "./FeatureCard";
import CustomSlider from "../common/CustomSlider";

const Features = () => {
  return (
    <section className="pt-12 pb-10 main-container">
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
  );
};

export default Features;
