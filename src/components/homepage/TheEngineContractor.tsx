import { useTranslations } from "next-intl";
import React from "react";

const TheEngineContractor = () => {
  const t = useTranslations("engine");
  return (
    <section className="xl:bg-[url('/images/webp/engine-bg.webp')] py-8 w-full bg-[100%_100%] overflow-hidden bg-contain bg-no-repeat max-w-[98%] min-[1440px]:max-w-[1364px] mx-auto  bg-none rounded-[22px] mt-8 md:mt-9">
      <div className="main-container flex md:justify-between flex-col items-center md:flex-row justify-center gap-8 md:py-8 md:!px-12">
        <div className="flex flex-col gap-1.5 md:max-w-[515px] w-full">
          <h2 className="section-heading text-white text-center md:text-left">
            {t("heading")}
          </h2>
          <p className="text-base font-medium text-decemberSky text-center md:text-left">
            {t("desc")}
          </p>
        </div>
        <div className="flex flex-col max-w-[356px] w-full -space-y-2  items-center">
          <img
            src="/images/webp/engine.webp"
            className="sm:max-w-[322px] w-full max-w-[90%] object-contain"
            alt="The engine 57,163 contractors run on"
          />

          <div className="p-6 w-full bg-black-red-linear backdrop-blur-sm rounded-[14px] overflow-hidden font-grotesk text-sm font-bold text-darkGrey space-y-1">
            <h3 className="text-2xl font-medium  text-doctor">
              Super Easy Estimates
            </h3>
            <p className="text-xs sm:text-sm">
              <span className="text-monstrousGreen">+11</span> Hours Average
              Time Saved Per Week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEngineContractor;
