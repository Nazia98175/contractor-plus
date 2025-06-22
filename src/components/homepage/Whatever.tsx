"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { OnIcon, OnIconw } from "../common/Icons";
import LogoWithStars from "../common/LogoWithStars";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";

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

  // Media queries for responsive behavior
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const left1Ref = useRef<HTMLDivElement | null>(null);
  const left2Ref = useRef<HTMLDivElement | null>(null);
  const left3Ref = useRef<HTMLDivElement | null>(null);

  const right1Ref = useRef<HTMLDivElement | null>(null);
  const right2Ref = useRef<HTMLDivElement | null>(null);
  const right3Ref = useRef<HTMLDivElement | null>(null);
  const waitUntilFullyLoaded = (): Promise<void> => {
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        requestAnimationFrame(() => resolve());
      } else {
        window.addEventListener("load", () => {
          requestAnimationFrame(() => resolve());
        });
      }
    });
  };
  useGSAP(
    () => {
      waitUntilFullyLoaded().then(() => {
        if (!sectionRef.current || !containerRef.current) return;

        // Clear previous triggers and tweens
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
          if (isMobile) return val * 0.6;
          if (isTablet) return val * 0.8;
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
          initialY: number,
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
          }, 300);
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
          }, 300);
        }
      });
    },
    { scope: sectionRef, dependencies: [isMobile, isTablet, isDesktop] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full overflow-hidden px-2"
    >
      {/* Desktop Background */}
      {isDesktop && (
        <Image
          className="pointer-events-none absolute -top-[42%] right-0 z-10 max-w-[700px] object-cover"
          src="/images/webp/Whatever-right-bg.webp"
          width={700}
          height={300}
          alt="gradient background"
        />
      )}

      {!isDesktop && (
        <div>
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/webp/whatever-gredient-bg-mobile-left.webp"
              type="image/webp"
            />
            <Image
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-full object-cover"
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
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-full object-center"
              src="/images/webp/whatever-gredient-bg-mobile-right.webp"
              width={500}
              height={1000}
              alt="gradient background right"
              priority
            />
          </picture>
        </div>
      )}

      <div className="relative z-20 w-full overflow-visible pt-12 pb-[53px] will-change-transform">
        <PrimaryAnimatedText delay={3000}>
          <h3 className="section-heading gradient-text mb-[21px] text-center md:mb-8">
            <span>{whateverOperation?.[0]?.title}</span>
          </h3>
        </PrimaryAnimatedText>

        <div ref={containerRef} className="mx-auto max-w-[1002px] px-2 lg:px-0">
          <div
            style={{ backgroundSize: "100% 100%" }}
            className="no-repeat flex flex-col items-center justify-center bg-[url('/images/svg/red-line_animated.svg')] md:flex-row md:justify-between md:bg-none md:pt-5 lg:gap-5"
          >
            {/* Left Section */}
            <div className="left-section relative h-[190px] w-full max-w-[409px] bg-cover bg-center bg-no-repeat md:h-[300px] md:bg-[url('/images/svg/left-red-lines_animated.svg')] md:py-8 lg:py-[59px]">
              <div
                ref={left1Ref}
                className="flex h-[55px] w-[55px] items-center justify-center p-2 will-change-transform lg:h-20 lg:w-20"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[30px] object-cover lg:max-w-[40px]"
                  src="/images/webp/outlook.webp"
                  width={40}
                  height={40}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={left2Ref}
                className="flex h-[58px] w-[58px] items-center justify-center p-2 will-change-transform lg:h-[85px] lg:w-[85px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[26px] object-cover lg:max-w-[38px]"
                  src="/images/png/contractor-1.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={left3Ref}
                className="flex h-[62px] w-[62px] items-center justify-center p-2 will-change-transform lg:h-[85px] lg:w-[85px] xl:h-[93px] xl:w-[93px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[45px] object-cover lg:max-w-[66px]"
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
              className="relative z-30 m-auto w-fit max-w-[270px] p-3 will-change-transform xl:p-5"
            >
              <LogoWithStars />
            </div>

            {/* Right Section */}
            <div className="right-section relative h-[190px] w-full max-w-[409px] bg-cover bg-no-repeat py-8 md:h-[300px] md:bg-[url('/images/svg/right-red-line_animated.svg')] lg:py-[59px]">
              <div
                ref={right1Ref}
                className="flex h-[55px] w-[55px] items-center justify-center p-2 will-change-transform lg:h-[85px] lg:w-[85px] xl:h-[93px] xl:w-[93px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[29px] object-cover lg:max-w-[38px]"
                  src="/images/png/contractor-4.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={right2Ref}
                className="flex h-[46px] w-[46px] items-center justify-center p-2 will-change-transform lg:h-[72px] lg:w-[72px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[25px] object-cover lg:max-w-[38px]"
                  src="/images/png/contractor-5.png"
                  width={38}
                  height={38}
                  alt="contractor"
                  loading="lazy"
                />
              </div>
              <div
                ref={right3Ref}
                className="flex h-10 w-10 items-center justify-center p-2 will-change-transform lg:h-[61px] lg:w-[61px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="relative z-20 max-w-[21px] object-cover lg:max-w-[33px]"
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

        <PrimaryAnimatedText delay={3000}>
          <p className="text-granite text-center text-lg capitalize opacity-90">
            <span className="sm:!text-heatherGrey pr-2 !text-white">5000+</span>
            {whateverOperation?.[0]?.sub_title?.split("5000+")?.[1]}
          </p>
        </PrimaryAnimatedText>
      </div>
    </section>
  );
};

export default Whatever;
