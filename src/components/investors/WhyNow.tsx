"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CommunicateRedIcon,
  KeepUpIcon,
  RedClockIcon,
  SmartPhoneIcon,
  UpArrowRedIcon,
} from "../common/Icons";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyNow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });

    // Initial setup - hide all sections except the first one
    gsap.set(sections.slice(1), { opacity: 0, y: 100, scale: 0.97 });
    tl.to(
      bgImageRef.current,
      {
        scale: 4.5, // Scale up to 450%
        rotation: 720, // Full rotation
        duration: 6, // Total duration (matches your 6 sections * 1.2 timing)
        ease: "none", // Linear animation for smooth scroll
      },
      0,
    );
    // Create animations for each section
    sections.forEach((section, index) => {
      if (index === 0) {
        // First section starts visible, then fades out
        tl.to(
          section,
          {
            opacity: 0,
            y: -100,
            scale: 0.97,
            duration: 1,
          },
          index * 1.2,
        );
      } else if (index < sections.length) {
        // Other sections animate in from bottom, then fade out (except last one)
        tl.fromTo(
          section,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          index * 1.2,
        );

        // Fade out (except for the last section)
        if (index < sections.length - 1) {
          tl.to(
            section,
            {
              opacity: 0,
              y: -100,
              scale: 0.97,
              duration: 1,
            },
            (index + 1) * 1.2,
          );
        }
      }
    });

    // Store timeline reference for external access
    timelineRef.current = tl;

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            ref={bgImageRef}
            className="absolute top-0 left-0 hidden h-full w-full object-contain lg:block"
            src="/images/webp/vector.webp"
            alt="now bg"
          />
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            {/* Initial Section - Why now? */}
            <div
              ref={(el) => {
                sectionsRef.current[0] = el;
              }}
              className="absolute mx-auto w-full max-w-[560px] pt-[26px] pb-[32px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <Copy animateOnScroll={true}>
                <h3 className="text-mana text-center text-2xl font-semibold sm:text-4xl lg:text-5xl xl:text-[52px]">
                  Why now?
                </h3>
              </Copy>
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture pt-3 text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  Field service is in the middle of a generational software
                  shift.
                </p>
              </Copy>
            </div>

            {/* Section 1 - Labor costs */}
            <div
              ref={(el) => {
                sectionsRef.current[1] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <UpArrowRedIcon />
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  Labor and material costs are rising, businesses need to run as
                  efficiently and effectively as possible
                </p>
              </Copy>
            </div>

            {/* Section 2 - Customer demands */}
            <div
              ref={(el) => {
                sectionsRef.current[2] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <RedClockIcon />
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  Customers demand speed in work and communication from
                  contractors
                </p>
              </Copy>
            </div>

            {/* Section 3 - AI changes */}
            <div
              ref={(el) => {
                sectionsRef.current[3] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <CommunicateRedIcon />
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  AI is changing how contractors communicate, quote, schedule,
                  and manage jobs
                </p>
              </Copy>
            </div>

            {/* Section 4 - Smartphone crews */}
            <div
              ref={(el) => {
                sectionsRef.current[4] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <SmartPhoneIcon />
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  Smartphone-first crews are demanding tools that actually work
                  in the field
                </p>
              </Copy>
            </div>

            {/* Section 5 - Industry players */}
            <div
              ref={(el) => {
                sectionsRef.current[5] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <KeepUpIcon />
              <Copy animateOnScroll={true}>
                <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  The industry's dominant players have gotten too big, slow, and
                  expensive to keep up.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
