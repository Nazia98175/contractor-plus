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
  title: string;
  desc: string;
  title2: string;
  desc2: string;
  items: ProofItem[];
}
interface ProofItem {
  title: string;
  desc: string;
}

const ProofWorking: React.FC<ProofWorkingProps> = ({
  title,
  desc,
  title2,
  desc2,
  items,
}) => {
  const icons = [
    ProofIcon1,
    ProofIcon2,
    ProofIcon3,
    ProofIcon4,
    ProofIcon5,
    ProofIcon6,
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  // Add missing refs
  const logoMobileRef = useRef<HTMLImageElement>(null);
  const logoDesktopRef = useRef<HTMLImageElement>(null);
  const leftStatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightStatsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const logoDesktop = logoDesktopRef.current;

    // Set initial state for desktop logo
    if (logoDesktop) {
      gsap.set(logoDesktop, {
        y: "50vh",
        scale: 1.4,
        opacity: 0,
      });
    }

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        invalidateOnRefresh: true,
        // Uncomment below for debugging
        // markers: true,
        onUpdate: (self) => {
          console.log("Proof Working scroll progress:", self.progress);
        },
      },
    });

    // Desktop logo animation
    if (logoDesktop) {
      tl.to(
        logoDesktop,
        {
          y: "-50%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      ); // Start at the beginning of the timeline
    }

    // Optional: Add stagger animations for left stats
    leftStatsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.set(stat, {
          y: 150,
          opacity: 0,
        });

        tl.to(
          stat,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0.1 + index * 0.1,
        ).to(
          logoDesktop,
          {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0.1 + index * 0.1,
        ); // Stagger the animations
      }
    });

    // Optional: Add stagger animations for right stats
    rightStatsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.set(stat, {
          y: 150,
          opacity: 0,
        });

        tl.to(
          stat,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0.15 + index * 0.1,
        ); // Stagger the animations
      }
    });

    // Store timeline reference for external access
    timelineRef.current = tl;

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const chunkArray = (arr: ProofItem[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(items, 2);

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-20">
      <div className="pt-5 pb-[57px] md:py-10">
        <Copy animateOnScroll={true}>
          <h2 className="text-mana text-center text-2xl font-semibold sm:text-3xl md:text-[40px] lg:text-[52px]">
            {title || "Why Contractor+?"}
          </h2>
        </Copy>
        <Copy animateOnScroll={true}>
          <p className="text-ironFixture pt-3 text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
            {desc ||
              "We're the first and only OS for contractors. A connected system that moves as one cohesive engine to run the entire business. Contractor+ removes every point of friction in the operation by automating the tasks, handoffs, and updates that usually slip through the cracks. It's not a collection of point solutions, but one solution synced between each module."}
          </p>
        </Copy>
      </div>
      <div
        ref={containerRef}
        className="proof-working-animtion-wrapper relative h-[300vh]"
      >
        <div
          style={{ willChange: "position" }}
          className="sticky top-[100px] h-dvh w-full"
        >
          <Copy animateOnScroll={true}>
            <h3 className="text-mana pb-3 text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
              {title2 || "Proof it's working"}
            </h3>
          </Copy>
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture pt-3 pb-[71px] text-center text-lg font-bold">
              {desc2 ||
                "This isn't another FSM software. We built something contractors use, love, and stick with."}
            </p>
          </Copy>

          <div className="flex items-center justify-center pb-8">
            <img
              ref={logoMobileRef}
              className="block w-full max-w-[180px] lg:hidden xl:max-w-[231px]"
              src="/images/svg/Proof-working-logo.svg"
              alt="proof"
              style={{ willChange: "transform, opacity" }}
            />
          </div>
          <img
            ref={logoDesktopRef}
            className="absolute top-1/2 left-1/2 hidden w-full max-w-[180px] -translate-x-1/2 -translate-y-1/2 transform lg:block xl:max-w-[231px]"
            src="/images/svg/Proof-working-logo.svg"
            alt="proof"
            style={{ willChange: "transform, opacity" }}
          />
          {/* desktop-view  */}
          {rows.map((pair, rowIndex) => {
            const [left, right] = pair;

            return (
              <div
                key={rowIndex}
                className="mb-8 flex flex-col-reverse items-center justify-between gap-10 sm:gap-4 lg:flex-row"
              >
                {/* Left */}
                {left && (
                  <div
                    ref={(el) => {
                      leftStatsRef.current[rowIndex] = el;
                    }}
                    className="w-full max-w-[228px] sm:max-w-[320px]"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="relative pr-[61px] sm:pr-0">
                      <span className="absolute -right-[9%] bottom-0 sm:-right-20">
                        {icons[rowIndex * 2] &&
                          React.createElement(icons[rowIndex * 2])}
                      </span>
                      <h3 className="py-1 text-end text-base font-semibold text-white">
                        {left.title}
                      </h3>
                    </div>
                    <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold sm:text-end">
                      {left.desc}
                    </p>
                  </div>
                )}

                {/* Right */}
                {right && (
                  <div
                    ref={(el) => {
                      rightStatsRef.current[rowIndex] = el;
                    }}
                    className="w-full max-w-[228px] sm:max-w-[320px]"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="relative pl-[32px] sm:pl-0">
                      <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                        {icons[rowIndex * 2 + 1] &&
                          React.createElement(icons[rowIndex * 2 + 1])}
                      </span>
                      <h3 className="py-1 text-start text-base font-semibold text-white">
                        {right.title}
                      </h3>
                    </div>
                    <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
                      {right.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* mobile view */}
      <div className="block sm:hidden">
        {items.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-center pt-[42px]"
          >
            <div className="lg:mix-w-[320px] w-full max-w-[228px] sm:max-w-[320px]">
              <div className="relative pl-[32px] sm:pl-0">
                <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                  {/* {React.createElement(stat.icon)} */}
                </span>
                <h3 className="py-1 text-start text-base font-semibold text-white">
                  {stat.title}
                </h3>
              </div>
              <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofWorking;
