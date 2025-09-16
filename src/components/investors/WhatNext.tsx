"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RoadMapCenterLine,
  RoadMapCircleIcon,
  RoadMapIcon,
} from "../common/Icons";
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
    const element = horizontalScrollRef.current;
    const wrapper = sectionWrapperRef.current;

    if (element && wrapper) {
      // Create ScrollTrigger animation
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
            pin: true, // Pin the section
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
    <section ref={sectionWrapperRef} className="relative min-h-screen">
      {/* Fixed Header - positioned like MarketOpportunity */}
      <div className="absolute top-0 left-0 right-0 z-40 px-4 pt-[120px] pb-[40px]">
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
          {/* Desktop View */}
          <div className="hidden xl:block">
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
                          ? "top-[13%] right-[-20%]"
                          : index === 1
                            ? "top-[12%] right-[-10%]"
                            : "top-[18%] right-[-14%]"
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
                      className={`absolute -top-[60%] rotate-180 ${
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

          {/* Mobile View */}
          <div className="block w-full max-w-[700px] mx-auto xl:hidden pt-[180px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-5 pl-[26px] sm:pl-[40px] md:pl-[64px]"
              >
                <span
                  className={`gradient-line absolute top-[31%] left-[15px] h-full w-[1px]`}
                ></span>
                <span className="absolute top-[10px] left-0 rotate-180">
                  <RoadMapCircleIcon />
                </span>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sealGrey font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Bottom text for mobile */}
            <p className="text-ironFixture mt-8 text-center text-sm font-semibold px-4 pb-8">
              {bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNext;