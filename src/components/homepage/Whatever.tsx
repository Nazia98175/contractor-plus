"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { leftIcons, rightIcons } from "../common/Helper";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import LogoWithStars from "../common/LogoWithStars";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Track screen size
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
        start: "bottom bottom",
        end: "bottom 70%",
        scrub: 2,
        markers: true,
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

  useLayoutEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
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
        start: "top 90%",
        end: "center 10%",
        scrub: 0.6,
        invalidateOnRefresh: true,
        id: "icons-animation",
      };

      leftIconsRef.current.forEach((el, i) => {
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
      });

      rightIconsRef.current.forEach((el, i) => {
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
      });

      if (centerRef.current) {
        gsap.set(centerRef.current, {
          y: getInitial(80),
          scale: 0.3,
          opacity: 0,
          filter: "blur(8px)",
        });

        gsap.to(centerRef.current, {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger,
          force3D: true,
        });
      }

      // Hover/pulse animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 50%",
        onEnter: () => {
          if (!isMobile) {
            leftIconsRef.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                y: `+=${i % 2 === 0 ? 4 : -4}`,
                duration: 5 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            });
            rightIconsRef.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                y: `+=${i % 2 === 0 ? -4 : 4}`,
                duration: 5 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            });
            if (centerRef.current) {
              gsap.to(centerRef.current, {
                scale: 1.03,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            }
          }
        },
        onLeaveBack: () => {
          leftIconsRef.current.forEach(
            (el) => el && gsap.killTweensOf(el, { y: true })
          );
          rightIconsRef.current.forEach(
            (el) => el && gsap.killTweensOf(el, { y: true })
          );
          if (centerRef.current)
            gsap.killTweensOf(centerRef.current, { scale: true });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className="relative w-full z-10">
      {/* Background images (desktop + mobile) */}
      {/* ... background picture code omitted for brevity ... */}

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
            <div className="left-section relative md:h-[300px] h-[190px] w-full">
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
            <div className="right-section relative md:h-[300px] h-[190px] w-full">
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
