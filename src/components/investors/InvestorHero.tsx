"use client";
import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import gsap from "gsap";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { InvestorHeroIcon } from "../common/Icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const InvestorHero = () => {
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
    gsap.set("#left-mobile", {
      x: "50%",
      rotate: -10,
      opacity: 0,
    });
    gsap.set("#right-mobile", {
      y: 10,
      x: "-50%",
      scale: 0.7,
      rotate: -370,
      opacity: 0,
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

      const section3Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#mobile-cards-wrapper",
          start: "top 40%",
          once: true,
        },
      });

      section3Timeline.to("#left-mobile", {
        y: 0,
        x: 0,
        rotate: 0,
        opacity: 1,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    }, 1000);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-estimatic-ai", {
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
    }, 700);
  }, []);
  return (
    <section ref={wrapperRef} className="relative overflow-hidden">
      <img
        className="absolute -top-9 left-0 z-[-2] block object-cover md:hidden"
        src="/images/webp/invester-mobile-bg2.png"
        alt="mobile bg"
      />
      <img
        className="absolute top-0 left-0 z-[-2] hidden h-full w-full object-cover md:block"
        src="/images/webp/Grid-layers.png"
        alt="grid layers"
      />
      <img
        className="absolute top-0 left-0 hidden h-full w-full object-cover md:block"
        src="/images/webp/invers-hero-bg.webp"
        alt="invers hero bg"
      />
      <div className="relative mx-auto max-w-[958px] pt-[100px] pb-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[240px]">
        <span
          ref={redBgRef}
          className="absolute top-[5%] left-1/2 z-[-1] hidden -translate-x-1/2 scale-[0.9] transform will-change-transform md:block"
        >
          <InvestorHeroIcon />
        </span>
        <div className="flex flex-col items-center justify-center px-2">
          <Copy delay={0.1}>
            <p className="text-darkGray w-full rounded-[6px] bg-[rgba(63,70,75,0.10)] py-1 text-center text-sm font-bold md:bg-transparent">
              Investment Opportunity{" "}
            </p>
          </Copy>
          <Copy delay={0.2}>
            <h2 className="invester-gradient-text main-heading pt-2 text-center sm:pt-4 md:pt-6">
              The first Operating System for build & service contractors
            </h2>
          </Copy>
          <Copy delay={0.3}>
            <p className="text-darkGray pt-2 text-center text-xs font-medium sm:pt-4 sm:text-base md:pt-6 md:text-lg">
              Contractor+ is the category disruptor the $1T field service market
              has needed. We’ve built what Jobber, Housecall Pro, and
              ServiceTitan couldn’t: a platform contractors actually love.{" "}
            </p>
          </Copy>
          <Copy delay={0.5}>
            <p className="text-darkGray pt-2 pb-4 text-center text-xs font-extrabold sm:pt-4 sm:text-base md:py-6 md:text-lg">
              And we’ve done it without a cent from VC’s.
            </p>
          </Copy>
          <CardReveal delay={0.6}>
            <Button className="w-full sm:max-w-[204px]">
              Book investor call
            </Button>
          </CardReveal>
        </div>
        <div
          id="mobile-cards-wrapper"
          className="relative mx-auto flex w-full max-w-[768px] items-center justify-between pt-[93px] md:pt-[180px] xl:max-w-[1013px]"
        >
          <div id="left-mobile" className="relative z-0 origin-bottom sm:ml-14">
            <img
              className="relative w-full max-w-[329px] -rotate-[15deg]"
              src="/images/webp/mobile-card-1.webp"
              alt="iphone"
            />
            <div className="invester-image-gradient absolute bottom-[-2%] left-[-15%] z-10 h-[150%] w-[102%] -rotate-[15deg]"></div>
          </div>
          <div className="relative z-10">
            <img
              className="z-20 -mt-[30%] h-full w-full max-w-[329px]"
              src="/images/webp/mobile-card-2.webp"
              alt="iphone"
            />
            <div className="invester-image-gradient absolute bottom-[-2%] h-[150%] w-[105%]"></div>
          </div>

          <div id="right-mobile" className="relative -z-0 sm:mr-14">
            <img
              className="relative top-[20%] z-[-1] w-full max-w-[329px] rotate-[15deg]"
              src="/images/webp/mobile-card-3.webp"
              alt="iphone"
            />
            <div className="invester-image-gradient absolute bottom-[-2%] left-[10%] h-[150%] w-[102%] rotate-[15deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
