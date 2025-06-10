import React from "react";
import { softwareCardData } from "../common/Helper";
import { AlertIcon } from "../common/Icons";

const HvacSoftware = () => {
  return (
    <section className="1xl:pb-[151px] hvac-software-bg relative z-30 mx-auto w-full max-w-[1354px] overflow-hidden px-2 pb-12 md:pb-20 lg:pb-[100px] xl:pb-[120px]">
      <h3 className="heading text-winterWay mx-auto hidden max-w-[90%] text-center !font-bold sm:block md:!font-semibold">
        Every HVAC software has the same story
      </h3>
      <h3 className="heading crm-gradient mx-auto block max-w-[90%] text-center !font-bold sm:hidden">
        Every HVAC software has the same story
      </h3>
      <div className="1xl:mt-[91px] mt-5 flex flex-wrap justify-center gap-5 px-2 sm:mt-8 md:mt-12 md:px-6 lg:mt-16 xl:mt-20 xl:gap-8 2xl:gap-12">
        {softwareCardData.map((card, index) => (
          <article
            key={index}
            className="software-bg card-shine relative flex w-full max-w-[390px] cursor-pointer flex-col items-center justify-center gap-2.5 overflow-hidden rounded-lg p-2.5"
          >
            <AlertIcon />
            <h4 className="text-winterWay relative mx-auto w-full text-center text-base leading-[130%] font-medium text-ellipsis text-shadow-[0px_0px_20px_rgba(255,255,255,0.50)] sm:text-lg xl:text-[22px]">
              {card.text}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HvacSoftware;
