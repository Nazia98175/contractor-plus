"use client";
import Lottie from "lottie-react";
import React from "react";
import internal_job_chat from "../../../public/lotties/8.json";

const CustomLottie = () => {
  return (
    <div className="relative mx-auto h-[230px] w-full max-w-[400px] overflow-hidden rounded-lg p-3 lg:h-[245px]">
      <Lottie
        animationData={internal_job_chat}
        autoplay={true} // Always false to control manually
      />
    </div>
  );
};

export default CustomLottie;
