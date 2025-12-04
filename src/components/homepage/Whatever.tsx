"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { integrationLogos } from "../common/Helper";
import { WhatEverIcon } from "../common/Icons";
import LogoWithStars from "../common/LogoWithStars";
import WhateverBackground from "./WhateverBackground";
import LogoBox from "./LogoBox";
import { LEFT_LOGOS_CONFIG, RIGHT_LOGOS_CONFIG } from "./logoConfig";
import { useLogoRotation } from "@/hooks/useLogoRotation";
import { useScrollAnimationWhatEver } from "@/hooks/useScrollAnimationWhatEver";


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

  // Custom hooks
  const { currentLogos, getImageOpacity } = useLogoRotation({ logosArray });

  useScrollAnimationWhatEver({
    sectionRef,
    containerRef,
    centerRef,
    left1Ref,
    left2Ref,
    left3Ref,
    right1Ref,
    right2Ref,
    right3Ref,
    isMobile,
    isTablet,
    isDesktop,
  });

  return (
    <section ref={sectionRef} className="relative z-10 w-full px-2">
      <WhateverBackground isDesktop />
      <div className="relative z-20 w-full overflow-visible pt-12 pb-[53px] will-change-transform">
        <Copy animateOnScroll={true}>
          <h3 className="section-heading gradient-text mb-[21px] text-center md:mb-8">
            {whateverOperation?.title}
          </h3>
        </Copy>

        <div
          ref={containerRef}
          className="mx-auto max-w-[1002px] px-2 lg:px-0"
        >
          <div
            style={{ backgroundSize: "100% 100%" }}
            className="no-repeat flex flex-col items-center justify-center bg-[url('/images/svg/red-line_animated.svg')] md:flex-row md:justify-between md:bg-none lg:gap-5"
          >
            {/* Left Section */}
            <div className="left-section relative h-[190px] w-full max-w-[409px] bg-cover bg-center bg-no-repeat md:h-[300px] md:bg-[url('/images/svg/left-red-lines_animated.svg')] md:py-8 lg:py-[59px]">
              <LogoBox
                refProp={left1Ref}
                logoSrc={currentLogos[0] || LEFT_LOGOS_CONFIG[0].defaultSrc}
                alt={LEFT_LOGOS_CONFIG[0].alt}
                opacity={getImageOpacity(0)}
                boxSize={LEFT_LOGOS_CONFIG[0].boxSize}
                imageSize={LEFT_LOGOS_CONFIG[0].imageSize}
                imageWidth={LEFT_LOGOS_CONFIG[0].imageWidth}
                imageHeight={LEFT_LOGOS_CONFIG[0].imageHeight}
              />
              <LogoBox
                refProp={left2Ref}
                logoSrc={currentLogos[1] || LEFT_LOGOS_CONFIG[1].defaultSrc}
                alt={LEFT_LOGOS_CONFIG[1].alt}
                opacity={getImageOpacity(1)}
                boxSize={LEFT_LOGOS_CONFIG[1].boxSize}
                imageSize={LEFT_LOGOS_CONFIG[1].imageSize}
                imageWidth={LEFT_LOGOS_CONFIG[1].imageWidth}
                imageHeight={LEFT_LOGOS_CONFIG[1].imageHeight}
              />
              <LogoBox
                refProp={left3Ref}
                logoSrc={currentLogos[2] || LEFT_LOGOS_CONFIG[2].defaultSrc}
                alt={LEFT_LOGOS_CONFIG[2].alt}
                opacity={getImageOpacity(2)}
                boxSize={LEFT_LOGOS_CONFIG[2].boxSize}
                imageSize={LEFT_LOGOS_CONFIG[2].imageSize}
                imageWidth={LEFT_LOGOS_CONFIG[2].imageWidth}
                imageHeight={LEFT_LOGOS_CONFIG[2].imageHeight}
              />
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
              <LogoBox
                refProp={right1Ref}
                logoSrc={currentLogos[3] || RIGHT_LOGOS_CONFIG[0].defaultSrc}
                alt={RIGHT_LOGOS_CONFIG[0].alt}
                opacity={getImageOpacity(3)}
                boxSize={RIGHT_LOGOS_CONFIG[0].boxSize}
                imageSize={RIGHT_LOGOS_CONFIG[0].imageSize}
                imageWidth={RIGHT_LOGOS_CONFIG[0].imageWidth}
                imageHeight={RIGHT_LOGOS_CONFIG[0].imageHeight}
              />
              <LogoBox
                refProp={right2Ref}
                logoSrc={currentLogos[4] || RIGHT_LOGOS_CONFIG[1].defaultSrc}
                alt={RIGHT_LOGOS_CONFIG[1].alt}
                opacity={getImageOpacity(4)}
                boxSize={RIGHT_LOGOS_CONFIG[1].boxSize}
                imageSize={RIGHT_LOGOS_CONFIG[1].imageSize}
                imageWidth={RIGHT_LOGOS_CONFIG[1].imageWidth}
                imageHeight={RIGHT_LOGOS_CONFIG[1].imageHeight}
              />
              <LogoBox
                refProp={right3Ref}
                logoSrc={currentLogos[5] || RIGHT_LOGOS_CONFIG[2].defaultSrc}
                alt={RIGHT_LOGOS_CONFIG[2].alt}
                opacity={getImageOpacity(5)}
                boxSize={RIGHT_LOGOS_CONFIG[2].boxSize}
                imageSize={RIGHT_LOGOS_CONFIG[2].imageSize}
                imageWidth={RIGHT_LOGOS_CONFIG[2].imageWidth}
                imageHeight={RIGHT_LOGOS_CONFIG[2].imageHeight}
              />
            </div>
          </div>
        </div>

        <CardReveal distance={50}>
          <Link
            href={"/integrations"}
            className="text-granite mx-auto flex w-fit items-center gap-2 text-center text-lg capitalize opacity-90"
          >
            <span className="pr-2 !text-white">5000+</span>
            <span>{whateverOperation?.subTitle?.split("5000+")?.[1]}</span>
            <WhatEverIcon className="h-5 w-5" />
          </Link>
        </CardReveal>
      </div>
    </section>
  );
};

export default Whatever;