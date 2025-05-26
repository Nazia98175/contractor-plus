"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import LogoWithStars from "../common/LogoWithStars";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Whatever {
  title: string;
  sub_title: string;
}
interface TheWhateverProps {
  whateverOperation: Whatever[];
}

const Whatever: React.FC<TheWhateverProps> = ({ whateverOperation }) => {
  const t = useTranslations();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const left1Ref = useRef<HTMLDivElement | null>(null);
  const left2Ref = useRef<HTMLDivElement | null>(null);
  const left3Ref = useRef<HTMLDivElement | null>(null);

  const right1Ref = useRef<HTMLDivElement | null>(null);
  const right2Ref = useRef<HTMLDivElement | null>(null);
  const right3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf([
        left1Ref.current,
        left2Ref.current,
        left3Ref.current,
        right1Ref.current,
        right2Ref.current,
        right3Ref.current,
        centerRef.current,
      ]);

      const getInitial = (val: number) => {
        if (window.innerWidth < 768) return val * 0.6;
        if (window.innerWidth < 1024) return val * 0.8;
        return val;
      };

      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      };

      const animate = (
        el: HTMLDivElement | null,
        finalX: string,
        finalY: string,
        initialX: number,
        initialY: number
      ) => {
        if (!el) return;
        gsap.set(el, {
          position: "absolute",
          left: finalX,
          top: finalY,
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.2,
          filter: "blur(8px)",
          x: getInitial(initialX),
          y: getInitial(initialY),
        });
        setTimeout(() => {
          gsap.to(el, {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger,
          });
        }, 1000);
      };

      animate(left1Ref.current, "47%", "25%", -150, -80);
      animate(left2Ref.current, "18%", "70%", -150, 80);
      animate(left3Ref.current, "81%", "75%", -150, 80);

      animate(right1Ref.current, "26%", "30%", 150, -80);
      animate(right2Ref.current, "79%", "70%", 150, 80);
      animate(right3Ref.current, "28%", "75%", 150, 80);

      if (centerRef.current) {
        gsap.set(centerRef.current, {
          y: 80,
          scale: 0.3,
          opacity: 0,
          filter: "blur(8px)",
        });
        setTimeout(() => {
          gsap.to(centerRef.current, {
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger,
          });
        }, 1000);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className="relative w-full z-10">
      {/* Desktop Background */}
      <Image
        className="object-cover -top-[42%] right-0 absolute z-10 pointer-events-none max-w-[700px] hidden lg:block"
        src="/images/webp/Whatever-right-bg.webp"
        width={700}
        height={300}
        alt="gradient background"
      />

      {/* Mobile Backgrounds */}
      <div className="block lg:hidden">
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/images/webp/whatever-gredient-bg-mobile-left.webp"
            type="image/webp"
          />
          <Image
            className="object-cover top-0 right-0 w-full absolute z-10 pointer-events-none h-full hidden lg:flex"
            src="/images/webp/whatever-gredient-bg-mobile-left.webp"
            width={500}
            height={1000}
            alt="gradient background left"
            priority
          />
        </picture>
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/images/webp/whatever-gredient-bg-mobile-right.webp"
            type="image/webp"
          />
          <Image
            className="object-center right-0 top-0 w-full absolute z-10 pointer-events-none h-full"
            src="/images/webp/whatever-gredient-bg-mobile-right.webp"
            width={500}
            height={1000}
            alt="gradient background right"
            priority
          />
        </picture>
      </div>

      <div
        ref={sectionRef}
        className="pt-12 pb-[53px] overflow-visible will-change-transform w-full relative z-20"
      >
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <h3 className="section-heading gradient-text text-center md:mb-8 mb-[21px]">
            {whateverOperation?.[0]?.title}
          </h3>
        </CardReveal>

        <div ref={containerRef} className="max-w-[1002px] mx-auto px-2 lg:px-0">
          <div className="flex md:flex-row flex-col justify-center md:justify-between lg:gap-5 md:pt-5 items-center bg-center">
            {/* Left Section */}
            <div className="left-section max-w-[409px] lg:py-[59px] md:py-8 w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center relative md:h-[300px] h-[190px]">
              <div
                ref={left1Ref}
                className="lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[40px] max-w-[30px]"
                  src="/images/webp/outlook.webp"
                  width={40}
                  height={40}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={left2Ref}
                className="lg:w-[85px] w-[58px] lg:h-[85px] h-[58px]  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[38px] max-w-[26px]"
                  src="/images/png/contractor-1.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={left3Ref}
                className="lg:w-[85px] w-[62px] lg:h-[85px] h-[62px]  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[66px] max-w-[45px]"
                  src="/images/png/contractor-3.png"
                  width={66}
                  height={17}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Center Logo */}
            <div
              ref={centerRef}
              className="max-w-[270px] w-fit xl:p-5 p-3 m-auto relative z-30 will-change-transform"
            >
              <LogoWithStars />
            </div>

            {/* Right Section */}
            <div className="right-section max-w-[409px] lg:py-[59px] py-8 w-full md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center relative md:h-[300px] h-[190px]">
              <div
                ref={right1Ref}
                className="lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[38px] max-w-[29px]"
                  src="/images/png/contractor-4.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={right2Ref}
                className="lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[38px] max-w-[25px]"
                  src="/images/png/contractor-5.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={right3Ref}
                className="lg:w-[61px] w-10 lg:h-[61px] h-10  flex items-center justify-center p-2 will-change-transform"
              >
                <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                <Image
                  className="object-cover relative z-20 lg:max-w-[33px] max-w-[21px]"
                  src="/images/png/contractor-6.png"
                  width={33}
                  height={33}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <p className="text-lg capitalize text-granite opacity-90 text-center">
            <span className="!text-white sm:!text-heatherGrey pr-2">5000+</span>
            {whateverOperation?.[0]?.sub_title?.split("5000+")?.[1]}
          </p>
        </CardReveal>
      </div>
    </section>
  );
};

export default Whatever;
