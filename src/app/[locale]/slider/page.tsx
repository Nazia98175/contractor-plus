"use client";
import CircularGallery from "@/components/homepage/CircularGallery";
import Slider from "@/components/homepage/Slider";
import ThirdSlider from "@/components/homepage/ThirdSlider";
import React from "react";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <div className="relative flex flex-col md:flex-row items-start justify-center md:justify-between p-4 md:p-6 lg:px-8 flex-1">
        <div className="relative flex justify-start items-center w-full p-4 z-10">
          <Slider />
        </div>
      </div>
      <ThirdSlider />
    </div>
  );
};

export default page;
