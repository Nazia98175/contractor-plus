"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoadMapCenterLine, RoadMapIcon } from "../common/Icons";
import Copy from "../common/Copy";

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

const WhatNextClient: React.FC<WhatNextProps> = ({
  title,
  desc,
  items = [],
  bottomText,
}) => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const sectionWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1280px)").matches;
    if (!isDesktop) return;

    const element = horizontalScrollRef.current;
    const wrapper = sectionWrapperRef.current;

    if (element && wrapper) {
      gsap.fromTo(
        element,
        { x: "60vw" },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [items]);

  const topRowItems = items.slice(0, 3);
  const bottomRowItems = items.slice(3, 6);

  return (
    <section
      ref={sectionWrapperRef}
      className="relative hidden min-h-screen xl:block"
    >
      {/* Header */}
      <div className="absolute top-0 right-0 left-0 z-40 px-4 pt-[120px] pb-[40px]">
        <div className="mx-auto max-w-[1200px]">
          <Copy animateOnScroll={false}>
            <h3 className="text-mana text-center text-2xl font-semibold sm:text-[28px] md:text-[38px]">
              {title || "What's next (GTM + fund use)"}
            </h3>
          </Copy>
          <Copy animateOnScroll={false}>
            <p className="text-ironFixture pt-3 text-center text-sm font-bold sm:text-base md:text-lg">
              {desc ||
                "We've proven product-market fit. Now it's time to dominate. We're raising $10M+ to launch a go-to-market blitz that floods the category"}
            </p>
          </Copy>
        </div>
      </div>

      {/* Horizontal scroll content */}
      <div className="flex h-screen items-center justify-center overflow-hidden px-4">
        <div className="w-full max-w-[1400px]">
          <div
            ref={horizontalScrollRef}
            id="horizontal-scroll"
            className="relative mx-auto w-full will-change-transform"
          >
            <span className="absolute top-1/2 bottom-0 -left-1/2 w-full translate-x-1/2 -translate-y-1/2 transform">
              <RoadMapCenterLine />
            </span>

            {/* Top row */}
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
                        ? "top-[80%] right-[-20%]"
                        : index === 1
                          ? "top-[80%] right-[-10%]"
                          : "top-[110%] right-[-14%]"
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

            {/* Bottom row */}
            <div className="flex items-start justify-end gap-20 pt-[72px] 2xl:gap-29">
              {bottomRowItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-full pt-[37px] ${
                    index === 0
                      ? "max-w-[350px]"
                      : index === 1
                        ? "max-w-[347px]"
                        : "max-w-[369px] pr-[20px]"
                  }`}
                >
                  <span
                    className={`absolute top-[3%] rotate-180 ${
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

            <p className="text-ironFixture mt-[55px] text-center text-sm font-semibold">
              {bottomText ||
                "Our operational model makes the most of every dollar. But we need the firepower to break through."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNextClient;
