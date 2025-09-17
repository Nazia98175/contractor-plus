"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoadMapCenterLine, RoadMapIcon } from "../common/Icons";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface WhatNextItem {
  title: string;
  desc: string;
}

interface WhatNextProps {
  title?: string;
  desc?: string;
  items?: WhatNextItem[];
  bottomText?: string;
}

const WhatNext: React.FC<WhatNextProps> = ({
  title = "What's next (GTM + fund use)",
  desc = "We've proven product-market fit. Now it's time to dominate. We're raising $10M+ to launch a go-to-market blitz that floods the category",
  items = [],
  bottomText = "Our operational model makes the most of every dollar. But we need the firepower to break through.",
}) => {
  const horizontalScrollRef = useRef(null);
  const sectionWrapperRef = useRef(null);

  useEffect(() => {
    // Only run animations on desktop (xl and above)
    const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

    if (!isDesktop) return; // Skip animations on mobile/tablet

    const element = horizontalScrollRef.current;
    const wrapper = sectionWrapperRef.current;

    if (element && wrapper) {
      // Create ScrollTrigger animation for desktop only (with pinning)
      gsap.fromTo(
        element,
        {
          x: "60vw", // Starting position (off-screen right)
        },
        {
          x: 0, // End position (centered)
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top", // Start when section hits top
            end: "bottom top", // End when section bottom hits viewport top
            scrub: 1, // Smooth scrubbing
            pin: true, // Pin the section on desktop
            pinSpacing: true,
            markers: false,
          },
        },
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [items]);

  // Split items for desktop layout (3 top, 3 bottom)
  const topRowItems = items.slice(0, 3);
  const bottomRowItems = items.slice(3, 6);

  return (
    <>
      {/* Mobile Layout - Static, no animations */}
      <section className="block px-4 py-12 xl:hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="mx-auto max-w-[600px]">
            <Copy animateOnScroll={true}>
              <h3 className="text-mana text-center text-xl font-semibold sm:text-2xl">
                {title}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture pt-3 text-center text-xs font-bold sm:text-sm">
                {desc}
              </p>
            </Copy>
          </div>
        </div>

        {/* Static vertical timeline */}
        <div className="mx-auto mb-8 w-full max-w-[600px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-4 pl-[20px]"
            >
              {/* Vertical line */}
              {index < items.length - 1 && (
                <span className="absolute top-[16px] left-[7px] h-[calc(100%+8px)] w-[1px] bg-gradient-to-b from-green-500 to-green-500/50" />
              )}
              {/* Green dot */}
              <span className="absolute top-[10px] left-0 h-3.5 w-3.5 rounded-full bg-green-500" />

              {/* Content */}
              <div className="pb-6 pl-2">
                <h3 className="mb-2 text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sealGrey text-xs font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-ironFixture text-center text-xs font-semibold">
          {bottomText}
        </p>
      </section>

      {/* Desktop Layout - With animations and pinning */}
      <section
        ref={sectionWrapperRef}
        className="relative hidden min-h-screen xl:block"
      >
        {/* Fixed Header - positioned like MarketOpportunity */}
        <div className="absolute top-0 right-0 left-0 z-40 px-4 pt-[120px] pb-[40px]">
          <div className="mx-auto max-w-[1200px]">
            <Copy animateOnScroll={false}>
              <h3 className="text-mana text-center text-2xl font-semibold sm:text-[28px] md:text-[38px]">
                {title}
              </h3>
            </Copy>
            <Copy animateOnScroll={false}>
              <p className="text-ironFixture pt-3 text-center text-sm font-bold sm:text-base md:text-lg">
                {desc}
              </p>
            </Copy>
          </div>
        </div>

        {/* Content Container - Centered vertically */}
        <div className="flex h-screen items-center justify-center overflow-hidden px-4">
          <div className="w-full max-w-[1400px]">
            {/* Desktop View with animation */}
            <div
              ref={horizontalScrollRef}
              id="horizontal-scroll"
              className="relative mx-auto w-full will-change-transform"
            >
              <span className="absolute top-1/2 bottom-0 -left-1/2 w-full translate-x-1/2 -translate-y-1/2 transform">
                <RoadMapCenterLine />
              </span>

              {/* Top Row */}
              <div className="flex items-start gap-20 2xl:gap-29">
                {topRowItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative w-full ${
                      index === 0
                        ? "max-w-[300px]"
                        : index === 1
                          ? "max-w-[347px]"
                          : "max-w-[369px]"
                    }`}
                  >
                    <span
                      className={`absolute ${
                        index === 0
                          ? "top-[55%] right-[-20%]"
                          : index === 1
                            ? "top-[55%] right-[-10%]"
                            : "top-[80%] right-[-14%]"
                      }`}
                    >
                      <RoadMapIcon />
                    </span>
                    <h3
                      className={`text-lightBlackGrey text-lg font-bold ${
                        index === 1 ? "" : "text-end"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sealGrey pt-2 text-end text-base font-semibold">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="flex items-start justify-end gap-20 pt-[72px] 2xl:gap-29">
                {bottomRowItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative w-full ${
                      index === 0
                        ? "max-w-[350px]"
                        : index === 1
                          ? "max-w-[347px]"
                          : "max-w-[369px] pr-[20px]"
                    }`}
                  >
                    <span
                      className={`absolute -top-[15%] rotate-180 ${
                        index === 0
                          ? "right-[-20%]"
                          : index === 1
                            ? "right-[-10%]"
                            : "right-[-5%]"
                      }`}
                    >
                      <RoadMapIcon />
                    </span>
                    <h3 className="text-lightBlackGrey text-end text-lg font-bold">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sealGrey text-end text-base font-semibold ${
                        index === 0 ? "pt-3" : "pt-2"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Text */}
              <p className="text-ironFixture mt-[55px] text-center text-sm font-semibold">
                {bottomText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatNext;
