"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import CloudsAnimation from "../common/CloudsAnimation";
import Copy from "../common/Copy";
import { CheckIcon } from "../common/Icons";
gsap.registerPlugin(ScrollTrigger);

interface Finally {
  title: string;
  subTitle: string;
  solutionsList: any;
}
interface TheFinallyProps {
  finallyC: Finally;
}
const Finally: React.FC<TheFinallyProps> = ({ finallyC }) => {
  useEffect(() => {
    gsap.set("#finally-icon-wrapper img", {
      y: 200,
      opacity: 0,
      scale: 0.97,
    });

    gsap.to("#finally-icon-wrapper img", {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.06,
      duration: 2.5,
      ease: "elastic.out(1,0.5)",
      scrollTrigger: {
        trigger: "#finally-icon-wrapper",
        start: "top 90%",
        markers: false,
        once: true,
      },
    });

    gsap.set("#ipad-mobile-wrapper img", {
      y: 200,
      opacity: 0,
      scale: 0.97,
    });

    gsap.to("#ipad-mobile-wrapper img", {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.13,
      duration: 2.5,
      ease: "elastic.out(1,0.5)",
      scrollTrigger: {
        trigger: "#ipad-mobile-wrapper",
        start: "top 90%",
        markers: false,
        once: true,
      },
    });
  }, []);
  return (
    <section className="no-scrollbar 1xl:pt-[238px] relative overflow-visible bg-white pt-9 sm:pt-16 md:pt-20 lg:overflow-hidden xl:pt-[186px]">
      <>
        <Image
          className="absolute -top-[24%] left-0 z-20 hidden h-full w-full md:block"
          src="/images/webp/finally-desktop-bg.webp"
          alt="finally bg"
          priority
          height={700}
          width={3000}
          sizes="(100vw)"
        />
        <Image
          fill
          className="absolute top-[0px] left-0 z-20 block h-full w-full md:hidden"
          src="/images/webp/finally-mobile-bg.webp"
          alt="finally bg"
          priority
          sizes="(100vw)"
        />
        {/* <FinallyBackground /> */}
        <div className="absolute bottom-14 left-[5%] z-10 hidden h-[300px] w-full max-w-[400px] rounded-full bg-gray-600 opacity-50 blur-[150px] md:block"></div>
        <div className="absolute right-[10%] bottom-14 z-10 hidden h-[300px] w-full max-w-[400px] rounded-full bg-gray-600 opacity-50 blur-[150px] md:block"></div>
        <div className="relative z-30 space-y-4">
          <Copy animateOnScroll={true}>
            <h2 className="section-heading gradient-text relative z-40 mx-auto w-full max-w-[304px] px-2 text-center sm:max-w-full">
              <span> {finallyC?.title ?? ""}</span>
            </h2>
          </Copy>

          <Copy animateOnScroll={true}>
            <h3 className="text-superSilver mx-auto max-w-[750px] px-2 text-center text-sm font-medium sm:text-base">
              {finallyC?.subTitle ?? ""}
            </h3>
          </Copy>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2 md:gap-[22px]">
            {finallyC?.solutionsList?.map((feature: any, index: number) => (
              <div
                key={index}
                className="font-myriad text-superSilver flex items-center gap-1.5 text-base font-medium sm:gap-2 sm:font-semibold"
              >
                <Copy animateOnScroll={true} delay={0.08 * index}>
                  <span>
                    <CheckIcon />
                  </span>
                </Copy>

                <Copy animateOnScroll={true} delay={0.09 * index}>
                  <span className="">{feature?.text}</span>
                </Copy>
              </div>
            ))}
          </div>
          <div className="relative mt-[45px] flex w-full flex-col-reverse justify-center gap-3 px-3 pb-8 sm:mt-16 md:mt-[83px] lg:flex-row lg:gap-8 lg:px-0 lg:pb-0">
            <div className="absolute bottom-0 left-0 z-20 hidden h-[71px] w-full bg-white blur-[12px] lg:block"></div>
            <div className="pointer-events-none absolute -bottom-8 left-0 z-20 hidden h-[160px] w-full lg:block">
              <CloudsAnimation
                cloud1Class="bottom-[61px] sm:bottom-[50px] md:bottom-[53px] lg:bottom-0"
                cloud2Class="bottom-[57px] sm:bottom-[50px] md:bottom-[55px] lg:bottom-0"
              />
            </div>
            {/* <FogGenerator /> */}
            <div
              data-lag="0.8"
              id="finally-icon-wrapper"
              className="flex flex-row items-center gap-4 lg:flex-col"
            >
              {/* mobile view  */}
              <div className="flex w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:hidden md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/software-advice.webp"
                  alt="Software Advice"
                  className="finally-custom-drop-img w-full object-cover"
                  sizes="(min-width: 1024px) 88px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
              <div className="flex w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:hidden md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/leader.webp"
                  alt="Leader"
                  className="finally-custom-drop-img w-full object-cover"
                  sizes="(min-width: 1024px) 86px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
              <div className="flex w-full max-w-[60px] duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:hidden md:max-w-24 lg:max-w-[88px]">
                <Image
                  width={100}
                  height={104}
                  src="/images/png/get-app-homepage.png"
                  alt="Get App"
                  className="finally-custom-drop-img h-full w-full object-cover"
                  sizes="(min-width: 1024px) 110px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
              {/* desktop  */}
              <div className="hidden w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/software-advice.webp"
                  alt="Software Advice"
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 88px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
              <div className="hidden w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/leader.webp"
                  alt="Leader"
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 86px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
              <div className="hidden w-full max-w-[60px] duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:max-w-24 lg:max-w-[88px]">
                <Image
                  width={100}
                  height={104}
                  src="/images/png/get-app-homepage.png"
                  alt="Get App"
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 110px, (min-width: 768px) 80px, (min-width: 640px) 64px, 48px"
                />
              </div>
            </div>
            <div
              id="ipad-mobile-wrapper"
              className="relative md:pr-20 lg:overflow-hidden lg:pr-32 xl:pr-40"
            >
              <Image
                height={600}
                width={715}
                src="/images/webp/ipad.webp"
                alt="Ipad Design"
                className="finaly-shadow hidden max-h-full w-full object-center md:block lg:max-w-[715px]"
                priority
                sizes="(min-width: 1024px) 715px, 100vw"
              />
              <Image
                height={300}
                width={300}
                src="/images/webp/mobile.webp"
                alt="Mobile Design"
                className="absolute top-[20%] right-0 hidden max-w-[35%] object-contain md:top-[8%] md:block lg:max-w-[280px] xl:max-w-[300px]"
                sizes="(min-width: 1280px) 300px, (min-width: 1024px) 280px, 35vw"
                priority
              />
              <Image
                height={600}
                width={715}
                src="/images/png/ipad-mobile-view.png"
                alt="Ipad Design"
                className="finaly-shadow finally-custom-box-shadow block max-h-full w-full object-center md:hidden lg:max-w-[715px]"
                unoptimized
                sizes="(min-width: 1024px) 715px, 100vw"
              />
              <Image
                height={300}
                width={300}
                src="/images/png/mobile-view.png"
                alt="Mobile Design"
                className="finally-custom-box-shadow absolute top-[20%] right-0 block max-w-[37%] object-contain md:top-[8%] md:hidden lg:max-w-[280px] xl:max-w-[300px]"
                sizes="(min-width: 1280px) 300px, (min-width: 1024px) 280px, 35vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};
export default Finally;
