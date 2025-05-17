import React from "react";
import { CheckIcon } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

const Finally = () => {
  const t = useTranslations("finally");
  const features: string[] = t.raw("features") || [];
  return (
    <section className="relative no-scrollbar overflow-x-hidden pt-16 md:pt-20 xl:pt-[186px] bg-white">
      <div className="absolute bottom-14 left-[5%] max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[150px] opacity-50 z-10 hidden md:block"></div>
      <div className="absolute bottom-14 right-[10%] max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[150px] opacity-50 z-10 hidden md:block"></div>
      <div className="space-y-4 z-10 relative">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="section-heading text-center text-white">
            {t("heading")}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="text-base font-medium text-superSilver text-center font-jakarta max-w-[700px] mx-auto">
            {t("desc")}
          </p>
        </TextAnimation>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="flex gap-3 md:gap-[22px] relative z-10 items-center justify-center pt-2 flex-wrap"
        >
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex font-medium text-sm sm:text-base sm:font-semibold font-myriad gap-1.5 sm:gap-2 items-center text-superSilver"
            >
              <CheckIcon />
              {feature}
            </div>
          ))}
        </CardReveal>
        <div className="flex w-full lg:flex-row flex-col-reverse justify-center gap-3 lg:gap-8 mt-14 sm:mt-16 relative px-3 lg:px-0 pb-8 lg:pb-0">
          {/* <div className="w-[120%] h-[70px] bg-white blur-[8px] absolute -left-[2%] md:block hidden -bottom-[6%] z-10"></div> */}

          {/* Cloud Layer 1 */}
          <div className="absolute bottom-0 left-0 hidden lg:flex w-full h-[160px] z-20 pointer-events-none">
            <div className="absolute w-full h-full animate-cloud-layer-1 opacity-100">
              <img
                src="/images/webp/claud.webp"
                alt="Cloud Layer 1"
                className="h-full object-cover w-full"
              />
            </div>

            {/* Cloud Layer 2 */}
            <div className="absolute w-full h-full animate-cloud-layer-2 opacity-100">
              <img
                src="/images/webp/claud.webp"
                alt="Cloud Layer 2"
                className="h-full object-cover w-full"
              />
            </div>
          </div>

          {/* <FogGenerator /> */}
          <CardReveal
            staggerDelay={0.4}
            animationDuration={0.8}
            distance={50}
            className="flex flex-row lg:flex-col gap-4"
          >
            <img
              style={{
                filter: `
                drop-shadow(-111.494px 100.345px 143px 0px rgba(0, 0, 0, 0.04))
                `,
              }}
              src="/images/webp/software-advice.webp"
              alt="Software Advice"
              className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
            />

            <img
              src="/images/webp/leader.webp"
              alt="Leader"
              className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
            />
            <img
              src="/images/webp/get-app.webp"
              alt="Get App"
              className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
            />
          </CardReveal>
          <CardReveal staggerDelay={0.4} animationDuration={0.8} distance={50}>
            <div className="relative md:pr-20 lg:pr-32 xl:pr-40 lg:overflow-hidden">
              <img
                src="/images/webp/ipad.webp"
                alt="Ipad Design"
                className="lg:max-w-[715px] w-full object-center"
              />
              <img
                src="/images/webp/mobile.webp"
                alt="Mobile Design"
                className="max-w-[35%] lg:max-w-[280px] xl:max-w-[300px] object-contain absolute right-0 top-[20%] md:top-[8%]"
              />
            </div>
          </CardReveal>
        </div>
      </div>
    </section>
  );
};

export default Finally;
