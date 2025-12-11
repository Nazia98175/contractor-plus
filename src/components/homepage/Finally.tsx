"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import Copy from "../common/Copy";
import { CheckIcon } from "../common/Icons";

gsap.registerPlugin(ScrollTrigger);

interface TheFinallyProps {
  finallyC: any;
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
        once: true,
      },
    });
  }, []);

  return (
    <section className="no-scrollbar 1xl:pt-[238px] relative overflow-visible bg-white pt-9 sm:pt-16 md:pt-20 lg:overflow-hidden xl:pt-[186px]">
      <>
        {/* Background Images - Lazy loaded */}
        <Image
          className="absolute -top-[24%] left-0 z-20 hidden h-full w-full md:block"
          src="/images/webp/finally-desktop-optimized-bg.webp"
          alt="finally bg"
          loading="lazy"
          height={700}
          width={3000}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 3000px"
          quality={75}
          aria-hidden="true"
        />
        <Image
          fill
          className="absolute top-0 left-0 z-20 block h-full w-full md:hidden"
          src="/images/webp/finally-mobile-bg.webp"
          alt="finally bg"
          loading="lazy"
          sizes="(max-width: 640px) 390px, (max-width: 1024px) 768px, 3000px"
          quality={75}
        />

        <div className="relative z-30 space-y-4">
          <Copy animateOnScroll={true}>
            <h2 className="section-heading gradient-text relative z-40 mx-auto w-full max-w-[304px] px-2 text-center sm:max-w-full">
              <span>{finallyC?.title ?? ""}</span>
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
                  <span>{feature?.text}</span>
                </Copy>
              </div>
            ))}
          </div>

          <div className="relative mt-[45px] flex w-full flex-col-reverse justify-center gap-3 px-3 pb-8 sm:mt-16 md:mt-[83px] lg:flex-row lg:gap-8 lg:px-0 lg:pb-0">
            <div className="absolute bottom-[-10%] left-0 z-20 hidden h-40 w-full bg-white blur-md lg:block"></div>
            <div className="pointer-events-none absolute -bottom-8 left-0 z-20 hidden h-40 w-full lg:block"></div>

            <div
              data-lag="0.8"
              id="finally-icon-wrapper"
              className="flex flex-row items-center gap-4 lg:flex-col"
            >
              {/* Mobile view */}
              <div className="flex w-[58px] max-w-[58px] duration-300 ease-in-out hover:scale-105! hover:rotate-6! sm:w-12 sm:max-w-16 md:hidden md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/software-advice.webp"
                  alt="Software Advice"
                  className="finally-custom-drop-img w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 58px, 96px"
                  quality={80}
                />
              </div>
              <div className="flex w-[58px] max-w-[58px] duration-300 ease-in-out hover:scale-105! hover:rotate-6! sm:w-12 sm:max-w-16 md:hidden md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/leader.webp"
                  alt="Leader"
                  className="finally-custom-drop-img w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 58px, 96px"
                  quality={80}
                />
              </div>
              <div className="flex w-full max-w-[73px] duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 sm:max-w-[60px] md:hidden md:max-w-24 lg:max-w-[88px]">
                <Image
                  width={100}
                  height={104}
                  src="/images/webp/get-app-homepage.webp"
                  alt="Get App"
                  className="finally-custom-drop-img h-full w-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 73px, 100px"
                  quality={80}
                />
              </div>

              {/* Desktop view */}
              <div className="hidden w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/software-advice.webp"
                  alt="Software Advice"
                  className="w-full object-cover drop-shadow-2xl md:drop-shadow-none"
                  loading="lazy"
                  sizes="(min-width: 768px) 96px"
                  quality={80}
                />
              </div>
              <div className="hidden w-12 max-w-16 duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:w-full md:max-w-20 lg:max-w-[88px]">
                <Image
                  width={96}
                  height={104}
                  src="/images/webp/leader.webp"
                  alt="Leader"
                  className="w-full object-cover drop-shadow-2xl md:drop-shadow-none"
                  loading="lazy"
                  sizes="(min-width: 768px) 96px"
                  quality={80}
                />
              </div>
              <div className="hidden w-full max-w-[60px] duration-300 ease-in-out hover:!scale-105 hover:!rotate-6 md:flex md:max-w-24 lg:max-w-[88px]">
                <Image
                  width={100}
                  height={104}
                  src="/images/webp/get-app-homepage.webp"
                  alt="Get App"
                  className="h-full w-full object-cover drop-shadow-2xl md:drop-shadow-none"
                  loading="lazy"
                  sizes="(min-width: 768px) 100px"
                  quality={80}
                />
              </div>
            </div>

            <div
              id="ipad-mobile-wrapper"
              className="relative drop-shadow-2xl md:pr-20 lg:overflow-hidden lg:pr-32 xl:pr-40"
            >
              <Image
                height={600}
                width={715}
                src="/images/webp/ipad.webp"
                alt="Ipad Design"
                className="hidden max-h-full w-full object-center md:block lg:max-w-[715px]"
                loading="lazy"
                sizes="(min-width: 768px) 715px"
                quality={80}
              />
              <Image
                height={300}
                width={300}
                src="/images/webp/mobile.webp"
                alt="Mobile Design"
                className="absolute top-[20%] right-0 hidden max-w-[35%] object-contain md:top-[8%] md:block lg:max-w-[280px] xl:max-w-[300px]"
                loading="lazy"
                sizes="(min-width: 768px) 300px"
                quality={80}
              />
              <Image
                height={600}
                width={715}
                src="/images/webp/ipad-mobile-view.webp"
                alt="Ipad Design"
                className="block max-h-full w-full object-center md:hidden lg:max-w-[715px]"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 715px"
                quality={80}
              />
              <Image
                height={300}
                width={300}
                src="/images/webp/mobile-view.webp"
                alt="Mobile Design"
                className="absolute top-[20%] right-0 block max-w-[37%] object-contain md:top-[8%] md:hidden lg:max-w-[280px] xl:max-w-[300px]"
                loading="lazy"
                sizes="(max-width: 767px) 37vw, 300px"
                quality={80}
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Finally;
