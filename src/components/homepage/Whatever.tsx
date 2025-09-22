"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { integrationLogos } from "../common/Helper";
import { OnIcon, OnIconw, WhatEverIcon } from "../common/Icons";
import LogoWithStars from "../common/LogoWithStars";
import WhateverBackground from "./WhateverBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Whatever {
  title: string;
  subTitle: string;
}
interface TheWhateverProps {
  whateverOperation: Whatever;
  images?: string[];
}

const Whatever: React.FC<TheWhateverProps> = ({
  whateverOperation,
  images,
}) => {
  const logosArray = images ? images : integrationLogos;
  const t = useTranslations();

  // State for individual logo positions
  const [currentLogos, setCurrentLogos] = useState<string[]>([]);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);
  const [lastChangedIndex, setLastChangedIndex] = useState<number | null>(null);

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

  // Initialize with first 6 unique logos
  useEffect(() => {
    if (logosArray.length >= 6) {
      setCurrentLogos(logosArray.slice(0, 6));
    }
  }, [logosArray]);

  // Get a random logo that's not currently being used
  const getRandomUnusedLogo = (excludeLogos: string[]) => {
    const availableLogos = logosArray.filter(
      (logo) => !excludeLogos.includes(logo),
    );
    if (availableLogos.length === 0) return logosArray[0]; // Fallback
    return availableLogos[Math.floor(Math.random() * availableLogos.length)];
  };

  // Random logo rotation effect
  useEffect(() => {
    if (currentLogos.length !== 6) return;

    const interval = setInterval(() => {
      // Get available positions (exclude the last changed one)
      const availablePositions = [0, 1, 2, 3, 4, 5].filter(
        (index) => index !== lastChangedIndex,
      );

      // Pick a random position from available ones
      const randomIndex =
        availablePositions[
          Math.floor(Math.random() * availablePositions.length)
        ];

      // Start fade out for this position
      setFadingIndex(randomIndex);

      // After fade completes, change the logo and fade in
      setTimeout(() => {
        setCurrentLogos((prev) => {
          const newLogos = [...prev];
          const otherLogos = prev.filter((_, index) => index !== randomIndex);
          newLogos[randomIndex] = getRandomUnusedLogo(otherLogos);
          return newLogos;
        });
        setFadingIndex(null);
        setLastChangedIndex(randomIndex); // Remember this position
      }, 450); // 300ms fade duration
    }, 3500); // Every 5 seconds

    return () => clearInterval(interval);
  }, [currentLogos, logosArray, lastChangedIndex]);

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

  useEffect(() => {
    const setupAnimation = () => {
      if (
        !sectionRef.current ||
        !containerRef.current ||
        !left1Ref.current ||
        !left2Ref.current ||
        !left3Ref.current ||
        !right1Ref.current ||
        !right2Ref.current ||
        !right3Ref.current ||
        !centerRef.current
      ) {
        return;
      }

      // Optional: Only kill triggers created by this component, not global ones
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });

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
        start: "top 80%",
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

          x: getInitial(initialX),
          y: getInitial(initialY),
        });

        gsap.to(el, {
          x: 0,
          y: 0,
          opacity: 1, // Always fade to full opacity for boxes
          scale: 1,
          ease: "power2.out",
          scrollTrigger,
        });
      };

      animate(left1Ref.current, "47%", "25%", -150, -80);
      animate(left2Ref.current, "18%", "70%", -150, 80);
      animate(left3Ref.current, "81%", "75%", -150, 80);
      animate(right1Ref.current, "26%", "30%", 150, -80);
      animate(right2Ref.current, "79%", "70%", 150, 80);
      animate(right3Ref.current, "28%", "75%", 150, 80);

      gsap.set(centerRef.current, {
        y: 80,
        scale: 0.3,
        opacity: 0,
      });
      gsap.to(centerRef.current, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger,
      });
    };

    waitUntilFullyLoaded().then(setupAnimation);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, [isMobile, isTablet, isDesktop]);

  // Helper function to get image opacity
  const getImageOpacity = (index: number) => {
    return fadingIndex === index ? 0 : 1;
  };

  return (
    <section ref={sectionRef} className="relative z-10 w-full px-2">
      <WhateverBackground isDesktop />
      <div className="relative z-20 w-full overflow-visible pt-12 pb-[53px] will-change-transform">
        <Copy animateOnScroll={true}>
          <h3 className="section-heading gradient-text mb-[21px] text-center md:mb-8">
            {whateverOperation?.title}
          </h3>
        </Copy>

        <div ref={containerRef} className="mx-auto max-w-[1002px] px-2 lg:px-0">
          <div
            style={{ backgroundSize: "100% 100%" }}
            className="no-repeat flex flex-col items-center justify-center bg-[url('/images/svg/red-line_animated.svg')] md:flex-row md:justify-between md:bg-none lg:gap-5"
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
                  className="ios-image relative z-20 max-w-[30px] object-cover lg:max-w-[40px]"
                  src={currentLogos[0] || "/images/webp/outlook.webp"}
                  width={40}
                  height={40}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 40px, 30px"
                  style={{
                    opacity: getImageOpacity(0),
                    transition: "opacity 0.45s ease-in-out",
                  }}
                />
              </div>
              <div
                ref={left2Ref}
                className="flex h-[58px] w-[58px] items-center justify-center p-2 will-change-transform lg:h-[85px] lg:w-[85px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="ios-image relative z-20 max-w-[26px] object-cover lg:max-w-[38px]"
                  src={currentLogos[1] || "/images/png/contractor-1.png"}
                  width={38}
                  height={38}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 38px, 26px"
                  style={{
                    opacity: getImageOpacity(1),
                    transition: "opacity 0.45s ease-in-out",
                  }}
                />
              </div>
              <div
                ref={left3Ref}
                className="flex h-[62px] w-[62px] items-center justify-center p-2 will-change-transform lg:h-[85px] lg:w-[85px] xl:h-[93px] xl:w-[93px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="ios-image relative z-20 max-w-[45px] object-cover lg:max-w-[66px]"
                  src={currentLogos[2] || "/images/svg/contractor-3.svg"}
                  width={66}
                  height={17}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 66px, 45px"
                  style={{
                    opacity: getImageOpacity(2),
                    transition: "opacity 0.45s ease-in-out",
                  }}
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
                  className="ios-image relative z-20 max-w-[29px] object-cover lg:max-w-[38px]"
                  src={currentLogos[3] || "/images/png/contractor-4.png"}
                  width={38}
                  height={38}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 38px, 29px"
                  style={{
                    opacity: getImageOpacity(3),
                    transition: "opacity 0.45s ease-in-out",
                  }}
                />
              </div>
              <div
                ref={right2Ref}
                className="flex h-[46px] w-[46px] items-center justify-center p-2 will-change-transform lg:h-[72px] lg:w-[72px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="ios-image relative z-20 max-w-[25px] object-cover lg:max-w-[38px]"
                  src={currentLogos[4] || "/images/png/contractor-5.png"}
                  width={38}
                  height={38}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 38px, 29px"
                  style={{
                    opacity: getImageOpacity(4),
                    transition: "opacity 0.45s ease-in-out",
                  }}
                />
              </div>
              <div
                ref={right3Ref}
                className="flex h-10 w-10 items-center justify-center p-2 will-change-transform lg:h-[61px] lg:w-[61px]"
              >
                <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
                <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
                <Image
                  className="ios-image relative z-20 max-w-[21px] object-cover lg:max-w-[33px]"
                  src={currentLogos[5] || "/images/png/contractor-6.png"}
                  width={33}
                  height={33}
                  alt="contractor"
                  priority
                  // sizes="(min-width: 1024px) 33px, 21px"
                  style={{
                    opacity: getImageOpacity(5),
                    transition: "opacity 0.45s ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <CardReveal distance={50}>
          <Link
            href={"/integrations"}
            className="text-granite mx-auto flex w-fit items-center gap-2 text-center text-lg capitalize opacity-90"
          >
            <span className="pr-2 !text-white">5000+</span>
            <span> {whateverOperation?.subTitle?.split("5000+")?.[1]}</span>
            <WhatEverIcon className="h-5 w-5" />{" "}
          </Link>
        </CardReveal>
      </div>
    </section>
  );
};

export default Whatever;
