import React from "react";
import { CheckIcon, FinallyDesktopBg, FinallyMobileBg } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
import Image from "next/image";

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
    <section className="relative no-scrollbar pt-9 sm:pt-16 md:pt-20 xl:pt-[186px] 1xl:pt-[238px] px-2 bg-white  overflow-hidden">
      <>
        <div className="w-[140%] h-[150%] absolute -top-[75%] -left-[23%] z-20 md:block hidden blur-[100px]">
          <div className="glow-ellipse bg-dark-desktop"></div>
          <div className="glow-ellipse bg-red-desktop"></div>
          <div className="glow-ellipse bg-red-desktop"></div>
          <div className="glow-ellipse bg-dark-desktop"></div>
          <div className="glow-ellipse bg-dark-desktop"></div>
        </div>

        <div className="w-[250%] h-full absolute -top-[145%] -left-[75%] z-20 block md:hidden blur-[23px]">
          <div className="absolute top-[623px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1115px] bg-[#EE1E25] rounded-full blur-[32px] opacity-90"></div>
          <div className="absolute top-[621px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[983px] bg-[#C01A06] rounded-full blur-[29.6px] opacity-90"></div>
          <div className="absolute top-[668px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[732px] bg-[#0C0D11] rounded-full blur-[81px] opacity-90"></div>
          <div className="absolute top-[667px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[499px] bg-[#0C0D11] rounded-full blur-[15px] opacity-90"></div>
        </div>
        <div className="absolute bottom-14 left-[5%] max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[150px] opacity-50 z-10 hidden md:block"></div>
        <div className="absolute bottom-14 right-[10%] max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[150px] opacity-50 z-10 hidden md:block"></div>
        <div className="space-y-4 z-30 relative ">
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <h2 className="section-heading text-center gradient-text z-40 relative">
              {finallyC?.[0]?.title ?? ""}
            </h2>
          </TextAnimation>
          <TextAnimation animateOnScroll={true} delay={0.2}>
            <p className="text-base font-medium text-superSilver text-center font-jakarta max-w-[700px] mx-auto">
              {finallyC?.[0]?.sub_title ?? ""}
            </p>
          </TextAnimation>

          <CardReveal
            staggerDelay={0.15}
            animationDuration={0.8}
            distance={50}
            className="flex gap-3 md:gap-[22px] relative z-10 items-center justify-center pt-2 flex-wrap"
          >
            {finallyC?.[1]?.txt?.split(",")?.map((feature, index) => (
              <div
                key={index}
                className="flex font-medium text-sm sm:text-base sm:font-semibold font-myriad gap-1.5 sm:gap-2 items-center text-superSilver"
              >
                <CheckIcon />
                {feature}
              </div>
            ))}
          </CardReveal>
          <div className="flex w-full lg:flex-row flex-col-reverse justify-center gap-3 lg:gap-8 mt-[45px] sm:mt-16 md:mt-[83px] relative px-3 lg:px-0 pb-8 lg:pb-0">
            {/* Cloud Layer 1 */}
            <div className="absolute bottom-0 left-0 hidden lg:flex w-full h-[160px] z-20 pointer-events-none">
              <div className="absolute w-full h-full animate-cloud-layer-1 opacity-100">
                <Image
                  fill={true}
                  src="/images/webp/claud.webp"
                  alt="Cloud Layer 1"
                  className="h-full object-cover w-full"
                />
              </div>

              {/* Cloud Layer 2 */}
              <div className="absolute w-full h-full animate-cloud-layer-2 opacity-100">
                <Image
                  fill={true}
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
                className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              />

              <Image
                width={96}
                height={104}
                src="/images/webp/leader.webp"
                alt="Leader"
                className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              />
              <Image
                width={96}
                height={91}
                src="/images/webp/get-app.webp"
                alt="Get App"
                className="max-w-12 drop-shadow-xl/25 sm:max-w-16 md:max-w-20 object-cover w-full lg:max-w-24 hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              />
            </CardReveal>
            <CardReveal
              staggerDelay={0.4}
              animationDuration={0.8}
              distance={50}
            >
              <div className="relative md:pr-20 lg:pr-32 xl:pr-40 lg:overflow-hidden">
                <Image
                  height={600}
                  width={715}
                  src="/images/webp/ipad.webp"
                  alt="Ipad Design"
                  className="lg:max-w-[715px] w-full object-center"
                />
                <Image
                  height={300}
                  width={300}
                  src="/images/webp/mobile.webp"
                  alt="Mobile Design"
                  className="max-w-[35%] lg:max-w-[280px] xl:max-w-[300px] object-contain absolute right-0 top-[20%] md:top-[8%]"
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
