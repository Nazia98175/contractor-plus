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

const ProofWorking: React.FC<ProofWorkingProps> = ({
  title,
  desc,
  buttomText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const logoDesktopRef = useRef<HTMLImageElement>(null);
  const logoMobileRef = useRef<HTMLImageElement>(null);
  const leftStatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightStatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const connectingLinesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const logoDesktop = logoDesktopRef.current;
    const stickyContainer = stickyContainerRef.current;
    const connectingLines = connectingLinesRef.current;

    if (!container || !logoDesktop || !stickyContainer) return;

    // Set initial states
    gsap.set(logoDesktop, {
      y: "100vh", // Start from bottom of viewport
      scale: 2.5, // Start larger
      opacity: 0,
    });

    // Hide connecting lines initially
    if (connectingLines) {
      gsap.set(connectingLines, {
        opacity: 0,
      });
    }

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
        scrub: 1, // Smoother scrub value
        invalidateOnRefresh: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // Phase 1: Logo rises from bottom (0-30% of scroll)
    tl.to(
      logoDesktop,
      {
        y: 0, // Move to center position
        opacity: 1,
        scale: 1.5, // Intermediate scale
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

    // Phase 2: Logo shrinks to final size (30-50% of scroll)
    tl.to(
      logoDesktop,
      {
        scale: 1, // Final scale
        duration: 0.2,
        ease: "power2.inOut",
      },
      0.3
    );

    // Phase 3: Show connecting lines
    if (connectingLines) {
      tl.to(
        connectingLines,
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        0.4
      );
    }

    // Phase 4: Animate stats appearing (50-100% of scroll)
    // Animate left stats from left
    leftStatsRef.current.forEach((stat, index) => {
      if (stat) {
        tl.fromTo(
          stat,
          {
            opacity: 0,
            x: -60, // Start from left
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          0.5 + index * 0.08 // Stagger timing
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
            x: 60, // Start from right
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          0.52 + index * 0.08 // Slightly offset from left stats
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

      {/* Animation Container */}
      <div
        ref={containerRef}
        className="proof-working-animation-wrapper relative h-[250vh] md:h-[300vh]"
      >
        <div
          ref={stickyContainerRef}
          className="sticky top-[10vh] flex h-[80vh] w-full items-center justify-center"
        >
          {/* Bottom Gradient Overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(180deg, rgba(12, 13, 17, 0) 0%, #0C0D11 100%)'
            }}
          />
          
          <div className="relative w-full max-w-[1100px]">
            {/* Section Title - Always visible */}
            <div className="mb-12 text-center">
              <Copy animateOnScroll={true}>
                <h3 className="text-mana pb-3 text-2xl font-bold sm:text-[28px] md:text-[38px]">
                  Proof it's working
                </h3>
              </Copy>
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-lg font-bold">
                  This isn't another FSM software. We built something contractors
                  use, love, and stick with.
                </p>
              </Copy>
            </div>

            {/* Desktop Layout with Logo in Center and Stats on Sides */}
            <div className="relative hidden lg:block">
              {/* SVG for connecting lines */}
              <svg
                ref={connectingLinesRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{ willChange: "opacity" }}
                viewBox="0 0 1100 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left side lines */}
                <path
                  d="M 320 100 L 480 140"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <path
                  d="M 320 200 L 480 180"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <path
                  d="M 320 300 L 480 220"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                
                {/* Right side lines */}
                <path
                  d="M 620 140 L 780 100"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <path
                  d="M 620 180 L 780 200"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <path
                  d="M 620 220 L 780 300"
                  stroke="#0066FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>

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
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-12">
                    <div
                      ref={(el) => { leftStatsRef.current[0] = el; }}
                      className="w-[320px] pl-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute -right-16 bottom-0">
                          <ProofIcon1 />
                        </span>
                        <h3 className="py-1 text-end text-xl font-semibold text-white">
                          $1M+ ARR
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-end text-xs font-semibold pr-2">
                        With zero institutional capital
                      </p>
                    </div>

                    <div
                      ref={(el) => { leftStatsRef.current[1] = el; }}
                      className="w-[320px] pl-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute -right-16 bottom-0">
                          <ProofIcon3 />
                        </span>
                        <h3 className="py-1 text-end text-xl font-semibold text-white">
                          4.7★
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-end text-xs font-semibold pr-2">
                        Avg rating across Capterra, G2, Apple, and Google Play
                      </p>
                    </div>

                    <div
                      ref={(el) => { leftStatsRef.current[2] = el; }}
                      className="w-[320px] pl-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute -right-16 -bottom-4">
                          <ProofIcon5 />
                        </span>
                        <h3 className="py-1 text-end text-xl font-semibold text-white">
                          ~150%
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-end text-xs font-semibold pr-2">
                        YoY growth
                      </p>
                    </div>
                  </div>

                  {/* Right Stats Column */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-12">
                    <div
                      ref={(el) => { rightStatsRef.current[0] = el; }}
                      className="w-[320px] pr-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute bottom-0 -left-16">
                          <ProofIcon2 />
                        </span>
                        <h3 className="py-1 text-start text-xl font-semibold text-white">
                          ~6%
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold pl-2">
                        of freemium users organically convert to a paid plan
                      </p>
                    </div>

                    <div
                      ref={(el) => { rightStatsRef.current[1] = el; }}
                      className="w-[320px] pr-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute bottom-0 -left-16">
                          <ProofIcon4 />
                        </span>
                        <h3 className="py-1 text-start text-xl font-semibold text-white">
                          94%
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold pl-2">
                        Gross retention
                      </p>
                    </div>

                    <div
                      ref={(el) => { rightStatsRef.current[2] = el; }}
                      className="w-[320px] pr-4"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="relative">
                        <span className="absolute -bottom-4 -left-16">
                          <ProofIcon6 />
                        </span>
                        <h3 className="py-1 text-start text-xl font-semibold text-white">
                          $700K
                        </h3>
                      </div>
                      <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold pl-2">
                        All built with just $700K from angels and Reg CF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="flex items-center justify-center pb-8">
                <img
                  ref={logoMobileRef}
                  className="w-full max-w-[180px]"
                  src="/images/svg/Proof-working-logo.svg"
                  alt="proof"
                />
              </div>
              
              {/* Mobile stats - keeping your original layout */}
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-full max-w-[228px] sm:max-w-[320px]">
                    <div className="relative pr-[61px] sm:pr-0">
                      <span className="absolute -right-[9%] bottom-0 sm:-right-20">
                        <ProofIcon1 />
                      </span>
                      <h3 className="py-1 text-end text-base font-semibold text-white">
                        $1M+ ARR
                      </h3>
                    </div>
                    <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold sm:text-end">
                      With zero institutional capital
                    </p>
                  </div>

                  <div className="w-full max-w-[228px] sm:max-w-[320px]">
                    <div className="relative pl-[32px] sm:pl-0">
                      <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                        <ProofIcon2 />
                      </span>
                      <h3 className="py-1 text-start text-base font-semibold text-white">
                        ~6%
                      </h3>
                    </div>
                    <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
                      of freemium users organically convert to a paid plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text with proper spacing - closer to animation */}
      <div className="pt-8 pb-20">
        <p className="proof-working mx-auto w-fit text-center text-base font-semibold tracking-[-0.32px]">
          Now imagine what we'll do with <span className="text-red-500">real capital</span>.
        </p>
      </div>
    </div>
  );
};

export default ProofWorking;