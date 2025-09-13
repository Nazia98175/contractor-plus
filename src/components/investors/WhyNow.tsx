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
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface SectionItem {
  isTitle?: boolean;
  title?: string;
  text?: string;
  description: string;
  image?: any;
}
interface WhyNowProps {
  items: SectionItem[];
}
const WhyNow: React.FC<WhyNowProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    // Get viewport dimensions
    const vw = window.innerWidth;

    // Calculate optimal scales based on viewport
    const startScale = vw <= 1440 ? 1.2 : 1.5;
    let maxScale;
    if (vw <= 1440) {
      maxScale = 2.2;
    } else if (vw <= 1920) {
      maxScale = 2.5;
    } else {
      maxScale = 2.8;
    }

    // Set initial state for background
    gsap.set(bgImageRef.current, {
      scale: startScale,
      opacity: 1,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Tighter scrub for pixel-perfect scroll
        pin: false,
        invalidateOnRefresh: true,
      },
    });

    // Set initial states for all sections
    sections.forEach((section, index) => {
      if (index === 0) {
        // First section starts visible and centered
        gsap.set(section, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
      } else if (index === 1) {
        // Second section starts below, slightly visible with blur
        gsap.set(section, {
          opacity: 0.3,
          y: 200,
          scale: 0.85,
          filter: "blur(15px)",
        });
      } else {
        // All other sections start hidden below
        gsap.set(section, {
          opacity: 0,
          y: 300,
          scale: 0.8,
          filter: "blur(20px)",
        });
      }
    });

    // Background circle animation
    tl.fromTo(
      bgImageRef.current,
      {
        scale: startScale,
        rotation: 0,
        opacity: 1,
      },
      {
        scale: maxScale,
        rotation: 720,
        opacity: 0.2, // Fade gradually
        duration: sections.length - 1, // Adjusted to match actual content
        ease: "none",
      },
      0,
    );

    // Text section animations - ladder style with consistent timing
    const sectionDuration = 1.2; // Adjusted for better pacing
    const spacing = 150; // Consistent spacing between elements

    sections.forEach((section, index) => {
      const startTime = index * sectionDuration;

      if (index === 0) {
        // First section moves up uniformly
        tl.to(
          section,
          {
            y: -spacing,
            opacity: 0.4,
            scale: 0.9,
            filter: "blur(12px)",
            duration: sectionDuration * 0.5,
            ease: "none", // Linear for consistent speed
          },
          startTime,
        );

        tl.to(
          section,
          {
            y: -spacing * 1.5,
            opacity: 0,
            scale: 0.85,
            filter: "blur(18px)",
            duration: sectionDuration * 0.5,
            ease: "none",
          },
          startTime + sectionDuration * 0.5,
        );
      } else {
        // Uniform movement from bottom to center
        tl.to(
          section,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: sectionDuration * 0.5,
            ease: "none", // Linear movement
          },
          startTime - sectionDuration * 0.5,
        );

        // Then move to top position uniformly (except last)
        if (index < sections.length - 1) {
          tl.to(
            section,
            {
              y: -spacing,
              opacity: 0.4,
              scale: 0.9,
              filter: "blur(12px)",
              duration: sectionDuration * 0.5,
              ease: "none",
            },
            startTime + sectionDuration * 0.5,
          );

          // Finally fade out completely
          tl.to(
            section,
            {
              y: -spacing * 1.5,
              opacity: 0,
              filter: "blur(18px)",
              duration: sectionDuration * 0.5,
              ease: "none",
            },
            startTime + sectionDuration,
          );
        }

        // Show next section preview uniformly
        if (index < sections.length - 1 && sections[index + 1]) {
          // Next section starts appearing from bottom
          tl.fromTo(
            sections[index + 1],
            {
              y: spacing * 1.5,
              opacity: 0,
              scale: 0.85,
              filter: "blur(18px)",
            },
            {
              y: spacing,
              opacity: 0.4,
              scale: 0.9,
              filter: "blur(12px)",
              duration: sectionDuration * 0.5,
              ease: "none", // Linear movement
            },
            startTime,
          );
        }
      }

      // Handle last section - fade out circle at the right time
      if (index === sections.length - 1) {
        tl.to(
          bgImageRef.current,
          {
            opacity: 0,
            scale: maxScale * 1.1,
            duration: sectionDuration,
            ease: "power1.out",
          },
          startTime - sectionDuration * 0.5,
        );
      }
    });

    // Store timeline reference
    timelineRef.current = tl;

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // const sectionData = [
  //   {
  //     icon: null,
  //     title: "Why now?",
  //     description:
  //       "Field service is in the middle of a generational software shift.",
  //     isTitle: true,
  //   },
  //   {
  //     icon: <UpArrowRedIcon />,
  //     description:
  //       "Labor and material costs are rising, businesses need to run as efficiently and effectively as possible",
  //   },
  //   {
  //     icon: <RedClockIcon />,
  //     description:
  //       "Customers demand speed in work and communication from contractors",
  //   },
  //   {
  //     icon: <CommunicateRedIcon />,
  //     description:
  //       "AI is changing how contractors communicate, quote, schedule, and manage jobs",
  //   },
  //   {
  //     icon: <SmartPhoneIcon />,
  //     description:
  //       "Smartphone-first crews are demanding tools that actually work in the field",
  //   },
  //   {
  //     icon: <KeepUpIcon />,
  //     description:
  //       "The industry's dominant players have gotten too big, slow, and expensive to keep up.",
  //   },
  // ];

  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <div ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background circle image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              ref={bgImageRef}
              className="h-full w-full object-contain lg:block"
              src="/images/webp/vector.webp"
              alt="now bg"
              style={{
                transformOrigin: "center center",
                maxWidth: "min(90vw, 90vh)",
                maxHeight: "90vh",
              }}
            />
          </div>

          {/* Content sections */}
          <div className="relative flex h-full w-full items-center justify-center">
            {items.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionsRef.current[index] = el;
                }}
                className={`absolute flex flex-col items-center justify-center ${
                  index === 0 ? "max-w-[500px]" : "max-w-[550px]"
                } w-full px-6`}
                style={{
                  willChange: "transform, opacity, filter",
                  zIndex: 20 - index,
                }}
              >
                <Copy animateOnScroll={false}>
                  <h3 className="text-center text-2xl font-semibold text-white sm:text-4xl lg:text-5xl xl:text-[52px]">
                    {section.title}
                  </h3>
                </Copy>
                <div className="my-4">
                  <Image
                    className="h-8 w-8"
                    src={section?.image.url}
                    alt={"edsx"}
                    width={24}
                    height={24}
                  />
                </div>
                <Copy animateOnScroll={false}>
                  <p className="text-center text-sm font-medium text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
                    {section.text}
                  </p>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
