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

    // Check if mobile
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

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

    // Set initial state for background (desktop only)
    if (!isMobile && bgImageRef.current) {
      gsap.set(bgImageRef.current, {
        scale: startScale,
        opacity: 1,
      });
    }

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
          filter: isMobile ? "none" : "blur(0px)",
        });
      } else if (index === 1) {
        // Second section starts below, slightly visible with blur
        gsap.set(section, {
          opacity: isMobile ? 0.2 : 0.3,
          y: isMobile ? 100 : 200,
          scale: isMobile ? 0.9 : 0.85,
          filter: isMobile ? "none" : "blur(15px)",
        });
      } else {
        // All other sections start hidden below
        gsap.set(section, {
          opacity: 0,
          y: isMobile ? 150 : 300,
          scale: isMobile ? 0.85 : 0.8,
          filter: isMobile ? "none" : "blur(20px)",
        });
      }
    });

    // Background circle animation (desktop only)
    if (!isMobile && bgImageRef.current) {
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
    }

    // Text section animations - ladder style with consistent timing
    const sectionDuration = isMobile ? 0.8 : 1.2; // Faster on mobile
    const spacing = isMobile ? 80 : 150; // Less spacing on mobile

    sections.forEach((section, index) => {
      const startTime = index * sectionDuration;

      if (index === 0) {
        // First section moves up uniformly
        tl.to(
          section,
          {
            y: -spacing,
            opacity: isMobile ? 0.2 : 0.4,
            scale: isMobile ? 0.9 : 0.9,
            filter: isMobile ? "none" : "blur(12px)",
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
            filter: isMobile ? "none" : "blur(18px)",
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
            filter: isMobile ? "none" : "blur(0px)",
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
              opacity: isMobile ? 0.2 : 0.4,
              scale: 0.9,
              filter: isMobile ? "none" : "blur(12px)",
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
              filter: isMobile ? "none" : "blur(18px)",
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
              scale: isMobile ? 0.9 : 0.85,
              filter: isMobile ? "none" : "blur(18px)",
            },
            {
              y: spacing,
              opacity: isMobile ? 0.3 : 0.4,
              scale: isMobile ? 0.95 : 0.9,
              filter: isMobile ? "none" : "blur(12px)",
              duration: sectionDuration * 0.5,
              ease: "none", // Linear movement
            },
            startTime,
          );
        }
      }

      // Handle last section - fade out circle at the right time (desktop only)
      if (!isMobile && index === sections.length - 1 && bgImageRef.current) {
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

  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <div ref={containerRef} className="relative h-[400vh] lg:h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background circle image - hidden on mobile */}
          <div className="absolute inset-0 hidden items-center justify-center lg:flex">
            <img
              ref={bgImageRef}
              src="/images/webp/rounded.webp"
              alt="now bg"
              className="h-full max-h-[90vh] w-full max-w-[min(90vw,90vh)] origin-center object-contain"
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
                  index === 0
                    ? "max-w-[300px] lg:max-w-[500px]"
                    : "max-w-[350px] lg:max-w-[550px]"
                } w-full px-6`}
                style={{
                  willChange: "transform, opacity, filter",
                  zIndex: 20 - index,
                }}
              >
                {section?.title && (
                  <Copy animateOnScroll={false}>
                    <h3 className="text-center text-xl font-semibold text-white sm:text-2xl lg:text-4xl xl:text-[52px]">
                      {section.title}
                    </h3>
                  </Copy>
                )}
                {section?.image && (
                  <div className="my-3 lg:my-4">
                    <Image
                      className="ios-image h-6 w-6 lg:h-8 lg:w-8"
                      src={section?.image.url}
                      alt={"icon"}
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                <Copy animateOnScroll={false}>
                  <p className="text-center text-sm font-medium text-gray-300 lg:text-xl">
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
