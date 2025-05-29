import React from "react";
import { softwareCardData } from "../common/Helper";
import { AlertIcon } from "../common/Icons";

const HvcaSoftware = () => {
  return (
    <section className="relative z-30 h-full min-h-[445px] bg-cover bg-center bg-no-repeat pb-16 lg:max-h-[445px] lg:bg-[url('/images/webp/software-bg.webp')]">
      <h3 className="heading text-winterWay mx-auto max-w-[90%] pt-7 text-center">
        Every HVAC software has the same story
      </h3>

      <div className="main-container mt-5 flex flex-wrap gap-5 md:gap-8 xl:mt-[103px] xl:gap-12">
        {softwareCardData.map((card, index) => (
          <article
            key={index}
            className="software-bg flex w-full max-w-[390px] flex-col items-center justify-center gap-2.5 rounded-lg p-2.5"
          >
            <AlertIcon />
            <h4 className="text-winterWay mx-auto w-full max-w-[355px] text-center text-base font-medium text-ellipsis text-shadow-[0px_0px_20px_rgba(255,255,255,0.50)] sm:text-lg xl:text-[22px]">
              {card.text}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HvcaSoftware;
