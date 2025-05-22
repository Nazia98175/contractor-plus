"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { leftIcons, rightIcons } from "../common/Helper";
import { OnIcon, OnIconw } from "../common/Icons";
import LogoWithStars from "../common/LogoWithStars";
import TextAnimation from "../common/TextAnimation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  const t = useTranslations();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf([
        ...leftIconsRef.current,
        ...rightIconsRef.current,
        centerRef.current,
      ]);
      const getInitial = (val: number) => {
        if (window.innerWidth < 768) return val * 0.6;
        if (window.innerWidth < 1024) return val * 0.8;
        return val;
      };
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      };
      [...leftIconsRef.current].forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          position: "absolute",
          left: leftIcons[i].finalX,
          top: leftIcons[i].finalY,
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.2,
          filter: "blur(8px)",
          x: getInitial(leftIcons[i].initialX),
          y: getInitial(leftIcons[i].initialY),
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
      });
      [...rightIconsRef.current].forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          position: "absolute",
          left: rightIcons[i].finalX,
          top: rightIcons[i].finalY,
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 0.2,
          filter: "blur(8px)",
          x: getInitial(rightIcons[i].initialX),
          y: getInitial(rightIcons[i].initialY),
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
            force3D: true,
          });
        }, 1000);
      });
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
      <picture className="hidden lg:block">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/webp/Whatever-right-bg.webp"
          type="image/webp"
        />
        <Image
          className="object-cover -top-[42%] right-0 absolute z-10 pointer-events-none max-w-[700px]"
          src="/images/webp/Whatever-right-bg.webp"
          width={700}
          height={300}
          alt="gradient background"
          priority
        />
      </picture>
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
        {/* Right mobile gradient */}
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
        <TextAnimation animateOnScroll delay={0.3}>
          <h3 className="section-heading gradient-text text-center md:mb-8 mb-[21px]">
            {t("whatever")}
          </h3>
        </TextAnimation>

        <div ref={containerRef} className="max-w-[1002px] mx-auto px-2 lg:px-0">
          <div className="flex md:flex-row flex-col justify-center md:justify-between lg:gap-5 md:pt-5 items-center bg-center">
            {/* Left Section */}
            <div className="left-section max-w-[409px] lg:py-[59px] md:py-8 w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center relative md:h-[300px] h-[190px]">
              {leftIcons.map((icon, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    leftIconsRef.current[i] = el;
                  }}
                  className={`${icon.size} absolute flex items-center justify-center p-2 will-change-transform`}
                >
                  <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                  <Image
                    className={`object-cover relative z-20 ${icon.imgSize}`}
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt="contractor"
                    loading="lazy"
                  />
                </div>
              ))}
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
              {rightIcons.map((icon, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    rightIconsRef.current[i] = el;
                  }}
                  className={`${icon.size} absolute flex items-center justify-center p-2 will-change-transform`}
                >
                  <OnIcon className="absolute w-full h-full -z-1 pointer-events-none" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none" />
                  <Image
                    className={`object-cover relative z-20 ${icon.imgSize}`}
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt="contractor"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <TextAnimation animateOnScroll delay={0.3}>
          <p className="text-lg capitalize text-granite opacity-90 text-center">
            <span className="!text-white sm:!text-heatherGrey pr-2">5000+</span>
            {t("potentialIntegrations")}
          </p>
        </TextAnimation>
      </div>
    </section>
  );
};

export default Whatever;
