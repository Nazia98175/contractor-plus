import React from "react";
import TiltedCardEffect from "../common/TiltedCardEffect";
import Image from "next/image";

const ContractorIndustrySliderCard = ({ show }: { show: any }) => {
  return (
    <TiltedCardEffect
      maxTilt={10}
      speed={0.4}
      easeType="expo.out"
      throttleSpeed={15}
      className="w-full h-full"
    >
      <div className="relative ease-in-out w-full bg-lightBlack border border-winterWay shadow-c3 p-2.5 rounded-xl">
        <h2 className="text-white text-sm sm:text-xl font-bold text-center mb-2.5">
          {show.title}
        </h2>
        <Image
          width={205}
          height={205}
          src={show.image}
          alt={show.title}
          className="object-cover w-full relative"
        />
      </div>
    </TiltedCardEffect>
  );
};

export default ContractorIndustrySliderCard;
