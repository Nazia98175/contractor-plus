"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BulbIconIcon,
  CommunicateRedIcon,
  KeepUpIcon,
  RedClockIcon,
  SmartPhoneIcon,
  UpArrowRed2Icon,
  UpArrowRedIcon,
} from "../common/Icons";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
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
    <section className="mx-auto max-w-[1088px] px-2 lg:px-0">
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div
              ref={(el) => {
                sectionsRef.current[0] = el;
              }}
              className="absolute mx-auto w-full max-w-[560px] pt-[26px] pb-[32px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <Copy animateOnScroll={true}>
                <h3 className="text-mana text-center text-2xl leading-[125%] font-semibold sm:text-4xl lg:text-5xl xl:text-[52px]">
                  What you get
                </h3>
              </Copy>
            </div>

            {/* Section 1 - Labor costs */}
            <div
              ref={(el) => {
                sectionsRef.current[1] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full flex-col items-center justify-center"
            >
              <UpArrowRed2Icon />
              <h3 className="story-section font-myriad my-2.5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Simple story that sells
              </h3>
              <Copy animateOnScroll={true}>
                <p className="text-fuscous text-center text-base font-semibold">
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
              className="absolute mx-auto flex w-full flex-col items-center justify-center"
            >
              <BulbIconIcon />
              <h3 className="story-section font-myriad my-2.5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Simple story that sells
              </h3>
              <Copy animateOnScroll={true}>
                <p className="text-fuscous text-center text-base font-semibold">
                  “Run your whole contracting business in one OS. Everyone else
                  claims to be a complete system but you still have to pay for a
                  CRM, a project management solution, a contract solution, a
                  phone system, etc. At Contractor+ it’s truly all in one
                  place.” Easy to pitch.
                </p>
              </Copy>
            </div>

            {/* Section 3 - AI changes */}
            <div
              ref={(el) => {
                sectionsRef.current[3] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute mx-auto flex w-full flex-col items-center justify-center"
            >
              <BulbIconIcon />
              <h3 className="story-section font-myriad my-2.5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Simple story that sells
              </h3>
              <Copy animateOnScroll={true}>
                <p className="text-fuscous text-center text-base font-semibold">
                  AI is changing how contractors communicate, quote, schedule,
                  and manage jobs
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
