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

    if (element) {
      // Create ScrollTrigger animation
      gsap.fromTo(
        element,
        {
          x: "60vw", // Starting position (matches the translate-x-[50vw] class)
        },
        {
          x: 0, // End position
          ease: "none",
          scrollTrigger: {
            trigger: sectionWrapperRef.current,
            start: "top 100px", // Animation starts when top of element hits 80% of viewport
            end: "bottom 100%", // Animation ends when bottom of element hits 20% of viewport
            scrub: 2, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
          },
        },
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Split items for desktop layout (3 top, 3 bottom)
  const topRowItems = items.slice(0, 3);
  const bottomRowItems = items.slice(3, 6);

  return (
    <section ref={sectionWrapperRef} className="relative w-full xl:h-[170vh]">
      <div className="xl:will-change-position overflow-hidden xl:sticky xl:top-[100px]">
        <div className="mx-auto max-w-[1400px] px-4 pb-14">
          <Copy animateOnScroll={true}>
            <h3 className="text-mana text-center text-2xl font-semibold sm:text-[28px] md:text-[38px]">
              {title}
            </h3>
          </Copy>
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture pt-3 pb-[59px] text-center text-sm font-bold sm:text-base md:pb-[60px] md:text-lg lg:pb-[72px]">
              {desc}
            </p>
          </Copy>

          {/* Desktop View */}
          <div
            ref={horizontalScrollRef}
            id="horizontal-scroll"
            className="relative mx-auto hidden w-full will-change-transform xl:block"
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
          </div>

          {/* Mobile View */}
          <div className="block w-full max-w-[700px] xl:hidden">
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
          </div>
          <p className="text-ironFixture hidden pt-[55px] text-center text-sm font-semibold xl:block">
            {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatNext;
