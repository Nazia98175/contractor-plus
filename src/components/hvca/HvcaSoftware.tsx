import React from "react";
import { AlertIcon } from "../common/Icons";
import { softwareCardData } from "../common/Helper";



const HvcaSoftware = () => {


  return (
    <section className="lg:bg-[url('/images/webp/software-bg.webp')] bg-cover bg-center bg-no-repeat min-h-[445px] lg:max-h-[445px] h-full z-30 relative pb-16">
      <h3 className="heading text-winterWay pt-7 text-center max-w-[90%] mx-auto">
        Every HVAC software has the same story
      </h3>

      <div className="main-container flex flex-wrap gap-5 md:gap-8 xl:gap-12  mt-5 xl:mt-[103px]">
        {softwareCardData.map((card, index) => (
          <article
            key={index}
            className="software-bg flex rounded-lg flex-col gap-2.5 justify-center items-center p-2.5 max-w-[390px] w-full "
          >
           <AlertIcon/>
            <h4 className="text-base sm:text-lg xl:text-[22px] text-ellipsis max-w-[355px] w-full text-center mx-auto text-winterWay font-medium text-shadow-[0px_0px_20px_rgba(255,255,255,0.50)]">
              {card.text}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HvcaSoftware;
