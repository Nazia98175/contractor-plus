"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { InvestorHeroIcon } from "../common/Icons";
import Image from "next/image";
import PrimaryLink from "../common/PrimaryLInk";

gsap.registerPlugin(ScrollTrigger);
interface InvestorHeroProps {
  heroSubTitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroSubDesc?: string;
  btnText?: string;
}
const InvestorHero: React.FC<InvestorHeroProps> = ({
  heroSubTitle,
  heroTitle,
  heroDescription,
  heroSubDesc,
  btnText,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const redBgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      ease: "elastic.in",
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial state for left mobile card - starts at center
    gsap.set("#left-mobile", {
      x: "50%",
      rotate: 0,
      opacity: 0,
    });

    // Initial state for right mobile card - starts at center
    gsap.set("#right-mobile", {
      x: "-50%",
      rotate: 0,
      opacity: 0,
    });

    // Initial state for center mobile card
    gsap.set("#center-mobile", {
      scale: 0.95,
    });

    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });

      if (redBgRef.current) {
        gsap.to(redBgRef.current, {
          scale: 1,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Create scroll-triggered animation for mobile cards
      // This will play forward on scroll down and reverse on scroll up
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#mobile-cards-wrapper",
          start: "top 80%",
          end: "top 20%",
          scrub: 1, // Smooth scrubbing tied to scroll
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
        },
      });

      // Animate left card spreading to left with rotation
      tl.to(
        "#left-mobile",
        {
          x: 0,
          rotate: -15,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0,
      );

      // Animate right card spreading to right with rotation
      tl.to(
        "#right-mobile",
        {
          x: 0,
          rotate: 15,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0,
      );

      // Animate center card - fade in and scale
      tl.to(
        "#center-mobile",
        {
          scale: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      );
    }, 1000);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={wrapperRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-[-2] hidden h-full w-full md:block">
        <Image
          src="/images/webp/Grid-layers.png"
          alt="Grid layers"
          fill
          sizes="100vw"
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="/images/webp/Grid-layers.png"
          className="object-cover"
        />
      </div>

      {/* Invers hero background */}
      <div className="absolute top-0 left-0 hidden h-full w-full md:block">
        <Image
          src="/images/webp/invers-hero-bg-2.webp"
          alt="Invers hero bg"
          fill
          sizes="100vw"
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="/images/webp/invers-hero-bg-2.webp"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[958px] pt-[100px] pb-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[240px] xl:pt-[280px]">
        <span
          ref={redBgRef}
          className="absolute top-[6%] left-1/2 z-[-1] -translate-x-1/2 scale-[0.9] transform will-change-transform md:block"
        >
          <InvestorHeroIcon />
        </span>
        <div className="flex flex-col items-center justify-center px-2">
          <Copy delay={0.1}>
            <p
              aria-label="Investment Opportunity"
              className="text-darkGray mx-auto w-fit rounded-[6px] bg-[rgba(16,27,37,0.30)] px-2 py-1 text-center text-sm font-bold backdrop-blur-[16px]"
            >
              {heroSubTitle || "Investment Opportunity"}
            </p>
          </Copy>
          <Copy delay={0.2}>
            <h2 className="invester-gradient-text main-heading max-w-[324px] pt-2 text-center sm:w-full sm:max-w-full sm:pt-4 md:pt-6">
              {heroTitle ||
                "The first Operating System for build & service contractors"}
            </h2>
          </Copy>
          <Copy delay={0.3}>
            <p
              aria-label="Contractor+ is the category disruptor the $1T field service"
              className="text-darkGray pt-2 text-center text-xs font-medium sm:pt-4 sm:text-base md:pt-6 md:text-lg"
            >
              {heroDescription ||
                "Contractor+ is the category disruptor the $1T field service market has needed. We've built what Jobber, Housecall Pro, and ServiceTitan couldn't: a platform contractors actually love."}
            </p>
          </Copy>
          <Copy delay={0.5}>
            <p
              aria-label="And we've done it without a cent from VC's."
              className="text-darkGray pt-2 pb-4 text-center text-xs font-extrabold sm:pt-4 sm:text-base md:py-6 md:text-lg"
            >
              {heroSubDesc}
            </p>
          </Copy>
          <CardReveal className="w-full sm:w-fit" delay={0.6}>
            <PrimaryLink
              href="https://calendly.com/justinonsuccess/investor-relations?month=2025-10"
              className="w-full max-w-full sm:max-w-[204px]"
            >
              {btnText || "Book investor call"}
            </PrimaryLink>
          </CardReveal>
        </div>
        <div
          id="mobile-cards-wrapper"
          className="relative mx-auto flex w-full max-w-[768px] items-center justify-between pt-[93px] md:pt-[180px] xl:max-w-[1013px]"
        >
          {/* Left Mobile Card */}
          <div id="left-mobile" className="relative z-0 sm:ml-14">
            <Image
              src="/images/webp/mobile-card-1-1.webp"
              alt="iPhone"
              width={329}
              height={329}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 329px"
              className="w-full max-w-[329px] rounded-lg object-cover"
            />
            <div className="invester-image-gradient pointer-events-none absolute bottom-[-2%] left-0 z-10 h-[150%] w-full"></div>
          </div>

          {/* Center Mobile Card */}
          <div id="center-mobile" className="relative z-10">
            <Image
              width={329}
              height={329}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 329px"
              className="z-20 -mt-[30%] h-full w-full max-w-[329px]"
              src="/images/webp/mobile-card-2.webp"
              alt="iphone"
            />
            <div className="invester-image-gradient pointer-events-none absolute bottom-[-2%] h-[150%] w-full"></div>
          </div>

          {/* Right Mobile Card */}
          <div id="right-mobile" className="relative z-0 sm:mr-14">
            <Image
              width={329}
              height={329}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 329px"
              className="relative top-[20%] w-full max-w-[329px]"
              src="/images/webp/mobile-card-3-3.webp"
              alt="iphone"
            />
            <div className="invester-image-gradient pointer-events-none absolute bottom-[-2%] left-0 h-[150%] w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
