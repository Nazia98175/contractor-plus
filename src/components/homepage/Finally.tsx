"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import CardReveal from "../common/CardReveal";
import CloudsAnimation from "../common/CloudsAnimation";
import { CheckIcon } from "../common/Icons";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
interface Finally {
  title: string;
  sub_title: string;
  txt: string;
}
interface TheFinallyProps {
  finallyC: Finally[];
}
const Finally: React.FC<TheFinallyProps> = ({ finallyC }) => {
  const t = useTranslations("finally");
  const features: string[] = t.raw("features") || [];

  return (
    <section className="no-scrollbar 1xl:pt-[238px] relative overflow-hidden bg-white pt-9 sm:pt-16 md:pt-20 xl:pt-[186px]">
      <>
        <img
          className="absolute top-[-152px] left-0 z-20 hidden h-full w-full md:block"
          src="/images/webp/finally-desktop-bg.webp"
          alt="finally bg"
        />
        <img
          className="absolute top-[0px] left-0 z-20 block h-full w-full md:hidden"
          src="/images/webp/finally-mobile-bg.webp"
          alt="finally bg"
        />
        {/* <FinallyBackground /> */}
        <div className="absolute bottom-14 left-[5%] z-10 hidden h-[300px] w-full max-w-[400px] rounded-full bg-gray-600 opacity-50 blur-[150px] md:block"></div>
        <div className="absolute right-[10%] bottom-14 z-10 hidden h-[300px] w-full max-w-[400px] rounded-full bg-gray-600 opacity-50 blur-[150px] md:block"></div>
        <div className="relative z-30 space-y-4">
          {/* <PrimaryAnimatedText delay={3000}> */}
          <h2 className="section-heading gradient-text relative z-40 mx-auto w-full max-w-[304px] px-2 text-center sm:max-w-full">
            <span> {finallyC?.[0]?.title ?? ""}</span>
          </h2>
          {/* </PrimaryAnimatedText> */}
          <CardReveal distance={50}>
            <h3 className="text-superSilver mx-auto max-w-[755px] px-2 text-center text-sm font-medium sm:text-base">
              {finallyC?.[0]?.sub_title ?? ""}
            </h3>
          </CardReveal>
          <CardReveal
            distance={50}
            className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2 md:gap-[22px]"
          >
            {finallyC?.[1]?.txt?.split(",")?.map((feature, index) => (
              <div
                key={index}
                className="font-myriad text-superSilver flex items-center gap-1.5 text-base font-medium sm:gap-2 sm:font-semibold"
              >
                <CheckIcon />
                {feature}
              </div>
            ))}
          </CardReveal>
          <div className="relative mt-[45px] flex w-full flex-col-reverse justify-center gap-3 px-3 pb-8 sm:mt-16 md:mt-[83px] lg:flex-row lg:gap-8 lg:px-0 lg:pb-0">
            <div className="absolute bottom-0 left-0 z-20 hidden h-[71px] w-full bg-white blur-[12px] lg:block"></div>
            <div className="pointer-events-none absolute -bottom-8 left-0 z-20 hidden h-[160px] w-full lg:flex">
              <CloudsAnimation
                cloud1Class="bottom-[61px] sm:bottom-[50px] md:bottom-[53px] lg:bottom-0"
                cloud2Class="bottom-[57px] sm:bottom-[50px] md:bottom-[55px] lg:bottom-0"
              />
            </div>
            {/* <FogGenerator /> */}
            <CardReveal
              distance={50}
              className="flex flex-row items-center gap-4 lg:flex-col"
            >
              <Image
                width={96}
                height={104}
                style={{
                  filter: `
                drop-shadow(-111.494px 100.345px 143px 0px rgba(0, 0, 0, 0.04))
                `,
                }}
                src="/images/webp/software-advice.webp"
                alt="Software Advice"
                className="w-full max-w-12 cursor-pointer object-cover drop-shadow-xl/25 duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-16 md:max-w-20 lg:max-w-[88px]"
              />
              <Image
                width={96}
                height={104}
                src="/images/webp/leader.webp"
                alt="Leader"
                className="w-full max-w-12 cursor-pointer object-cover drop-shadow-xl/25 duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-16 md:max-w-20 lg:max-w-[86px]"
              />
              <Image
                width={96}
                height={91}
                src="/images/webp/get-app.webp"
                alt="Get App"
                className="w-full max-w-12 cursor-pointer object-cover drop-shadow-xl/25 duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-16 md:max-w-20 lg:max-w-[110px]"
              />
            </CardReveal>
            <CardReveal distance={50}>
              <div className="relative md:pr-20 lg:overflow-hidden lg:pr-32 xl:pr-40">
                <Image
                  height={600}
                  width={715}
                  src="/images/webp/ipad.webp"
                  alt="Ipad Design"
                  className="max-h-full w-full object-center lg:max-w-[715px]"
                />
                <Image
                  height={300}
                  width={300}
                  src="/images/webp/mobile.webp"
                  alt="Mobile Design"
                  className="absolute top-[20%] right-0 max-w-[35%] object-contain md:top-[8%] lg:max-w-[280px] xl:max-w-[300px]"
                />
              </div>
            </CardReveal>
          </div>
        </div>
      </>
    </section>
  );
};
export default Finally;
