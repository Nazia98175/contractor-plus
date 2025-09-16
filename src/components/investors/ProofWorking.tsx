"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ProofIcon1,
  ProofIcon2,
  ProofIcon3,
  ProofIcon4,
  ProofIcon5,
  ProofIcon6,
} from "../common/Icons";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ProofWorkingProps {
  title?: string;
  desc?: string;
  buttomText?: string;
}

const ProofWorking: React.FC<ProofWorkingProps> = ({ title, desc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const logoDesktopRef = useRef<HTMLImageElement>(null);
  const leftStatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightStatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animations on desktop (lg and above)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    
    if (!isDesktop) return; // Skip animations on mobile/tablet
    
    const container = containerRef.current;
    const logoDesktop = logoDesktopRef.current;
    const stickyContainer = stickyContainerRef.current;

    if (!container || !logoDesktop || !stickyContainer) return;

    // Set initial states
    gsap.set(logoDesktop, {
      y: "100vh", // Start from bottom of viewport
      scale: 2.5, // Start larger
      opacity: 0,
    });

    // Hide all stats initially
    [...leftStatsRef.current, ...rightStatsRef.current].forEach((stat) => {
      if (stat) {
        gsap.set(stat, {
          opacity: 0,
          x: 0,
          y: 30,
        });
      }
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Phase 1: Logo rises from bottom (0-30% of scroll)
    tl.to(
      logoDesktop,
      {
        y: 0,
        opacity: 1,
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      },
      0,
    );

    // Phase 2: Logo shrinks to final size (30-50% of scroll)
    tl.to(
      logoDesktop,
      {
        scale: 1,
        duration: 0.2,
        ease: "power2.inOut",
      },
      0.3,
    );

    // Phase 3: Animate stats appearing (50-100% of scroll)
    // Animate left stats from left
    leftStatsRef.current.forEach((stat, index) => {
      if (stat) {
        tl.fromTo(
          stat,
          {
            opacity: 0,
            x: -60,
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          0.5 + index * 0.08,
        );
      }
    });

    // Animate right stats from right
    rightStatsRef.current.forEach((stat, index) => {
      if (stat) {
        tl.fromTo(
          stat,
          {
            opacity: 0,
            x: 60,
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          0.52 + index * 0.08,
        );
      }
    });

    // Store timeline reference
    timelineRef.current = tl;

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Stats data for easier mobile rendering
  const statsData = [
    {
      icon: ProofIcon1,
      value: "$1M+ ARR",
      description: "With zero institutional capital",
    },
    {
      icon: ProofIcon2,
      value: "~6%",
      description: "of freemium users organically convert to a paid plan",
    },
    {
      icon: ProofIcon3,
      value: "4.7★",
      description: "Avg rating across Capterra, G2, Apple, and Google Play",
    },
    {
      icon: ProofIcon4,
      value: "94%",
      description: "Gross retention",
    },
    {
      icon: ProofIcon5,
      value: "~150%",
      description: "YoY growth",
    },
    {
      icon: ProofIcon6,
      value: "$700K",
      description: "All built with just $700K from angels and Reg CF",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pt-20 md:py-20">
      {/* Static Header - Always visible at top */}
      <div className="pt-5 pb-[57px] md:py-10">
        <Copy animateOnScroll={true}>
          <h2 className="text-mana text-center text-2xl font-semibold sm:text-3xl md:text-[40px] lg:text-[52px]">
            {title || "Why Contractor+?"}
          </h2>
        </Copy>
        <Copy animateOnScroll={true}>
          <p className="text-ironFixture pt-3 text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
            {desc ||
              "We're the first and only OS for contractors. A connected system that moves as one cohesive engine to run the entire business."}
          </p>
        </Copy>
      </div>

      {/* Mobile Layout - Static, no animations */}
      <div className="block lg:hidden">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h3 className="text-mana pb-3 text-2xl font-bold sm:text-[28px]">
            Proof it's working
          </h3>
          <p className="text-ironFixture text-base font-bold px-4">
            This isn't another FSM software. We built something contractors use, love, and stick with.
          </p>
        </div>

        {/* Logo - Static at top */}
        <div className="flex items-center justify-center pb-8">
          <img
            className="w-full max-w-[160px] sm:max-w-[180px]"
            src="/images/svg/Proof-working-logo.svg"
            alt="proof"
          />
        </div>

        {/* Stats List - Centered layout matching design */}
        <div className="space-y-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="px-4">
              <h3 className="text-white text-xl font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-lightBlackGrey text-xs font-medium max-w-[280px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text - Mobile */}
        <div className="pt-10 pb-8">
          <p className="text-center text-base font-semibold tracking-[-0.32px] px-4 text-white">
            Now imagine what we'll do with{" "}
            <span className="text-white">real capital</span>.
          </p>
        </div>
      </div>

      {/* Desktop Layout with animations */}
      <div className="hidden lg:block">
        {/* Animation Container */}
        <div
          ref={containerRef}
          className="proof-working-animation-wrapper relative h-[300vh]"
        >
          <div
            ref={stickyContainerRef}
            className="sticky top-[10vh] flex h-[80vh] w-full items-center justify-center"
          >
            {/* Bottom Gradient Overlay */}
            <div
              className="pointer-events-none absolute right-0 -bottom-[10vh] left-0 z-20 h-[500px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(12, 13, 17, 0) 0%, #0C0D11 100%)",
              }}
            />

            <div className="relative w-full max-w-[1100px]">
              {/* Section Title - Always visible */}
              <div className="mb-12 text-center">
                <Copy animateOnScroll={false}>
                  <h3 className="text-mana pb-3 text-2xl font-bold sm:text-[28px] md:text-[38px]">
                    Proof it's working
                  </h3>
                </Copy>
                <Copy animateOnScroll={false}>
                  <p className="text-ironFixture text-lg font-bold">
                    This isn't another FSM software. We built something
                    contractors use, love, and stick with.
                  </p>
                </Copy>
              </div>

              {/* Desktop Layout with Logo in Center and Stats on Sides */}
              <div className="relative">
                {/* Center Logo */}
                <div className="relative flex items-center justify-center py-12">
                  <img
                    ref={logoDesktopRef}
                    className="relative z-10 w-full max-w-[200px] xl:max-w-[240px]"
                    src="/images/svg/Proof-working-logo.svg"
                    alt="proof"
                    style={{ willChange: "transform, opacity" }}
                  />
                </div>

                {/* Stats Container - Positioned around the logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full">
                    {/* Left Stats Column */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 space-y-12">
                      <div
                        ref={(el) => {
                          leftStatsRef.current[0] = el;
                        }}
                        className="w-[320px] pl-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -right-20 bottom-0">
                            <ProofIcon1 />
                          </span>
                          <h3 className="py-1 text-end text-xl font-semibold text-white">
                            $1M+ ARR
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pr-2 text-end text-xs font-semibold">
                          With zero institutional capital
                        </p>
                      </div>

                      <div
                        ref={(el) => {
                          leftStatsRef.current[1] = el;
                        }}
                        className="w-[320px] pl-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -right-20 bottom-0">
                            <ProofIcon3 />
                          </span>
                          <h3 className="py-1 text-end text-xl font-semibold text-white">
                            4.7★
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pr-2 text-end text-xs font-semibold">
                          Avg rating across Capterra, G2, Apple, and Google Play
                        </p>
                      </div>

                      <div
                        ref={(el) => {
                          leftStatsRef.current[2] = el;
                        }}
                        className="w-[320px] pl-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -right-20 -bottom-4">
                            <ProofIcon5 />
                          </span>
                          <h3 className="py-1 text-end text-xl font-semibold text-white">
                            ~150%
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pr-2 text-end text-xs font-semibold">
                          YoY growth
                        </p>
                      </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 space-y-12">
                      <div
                        ref={(el) => {
                          rightStatsRef.current[0] = el;
                        }}
                        className="w-[320px] pr-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -bottom-[2px] -left-20">
                            <ProofIcon2 />
                          </span>
                          <h3 className="py-1 text-start text-xl font-semibold text-white">
                            ~6%
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pl-2 text-start text-xs font-semibold">
                          of freemium users organically convert to a paid plan
                        </p>
                      </div>

                      <div
                        ref={(el) => {
                          rightStatsRef.current[1] = el;
                        }}
                        className="w-[320px] pr-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -bottom-[2px] -left-20">
                            <ProofIcon4 />
                          </span>
                          <h3 className="py-1 text-start text-xl font-semibold text-white">
                            94%
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pl-2 text-start text-xs font-semibold">
                          Gross retention
                        </p>
                      </div>

                      <div
                        ref={(el) => {
                          rightStatsRef.current[2] = el;
                        }}
                        className="w-[320px] pr-4"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="relative">
                          <span className="absolute -bottom-4.5 -left-20">
                            <ProofIcon6 />
                          </span>
                          <h3 className="py-1 text-start text-xl font-semibold text-white">
                            $700K
                          </h3>
                        </div>
                        <p className="text-lightBlackGrey pt-2 pl-2 text-start text-xs font-semibold">
                          All built with just $700K from angels and Reg CF
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text - Desktop */}
        <div className="pt-8 pb-20 relative">
          <p className="proof-working mx-auto w-fit text-center text-base font-semibold tracking-[-0.32px]">
            Now imagine what we'll do with{" "}
            <span className="text-red-500">real capital</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofWorking;