"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../common/Copy";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface StoryItem {
  icon: any;
  title: string;
  desc: string;
}

interface StorySectionProps {
  title?: string;
  sections: StoryItem[];
}

const StorySection: React.FC<StorySectionProps> = ({
  title = "What you get",
  sections,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const sectionEls = sectionsRef.current;

    if (!container || !sectionEls.length) return;

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

    // Hide all except first
    gsap.set(sectionEls.slice(1), { opacity: 0, y: 100, scale: 0.97 });

    sectionEls.forEach((section, index) => {
      if (!section) return;

      if (index === 0) {
        // First section fade out
        tl.to(
          section,
          { opacity: 0, y: -100, scale: 0.97, duration: 1 },
          index * 1.2,
        );
      } else {
        // Fade in
        tl.fromTo(
          section,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          index * 1.2,
        );

        // Fade out except last
        if (index < sectionEls.length - 1) {
          tl.to(
            section,
            { opacity: 0, y: -100, scale: 0.97, duration: 1 },
            (index + 1) * 1.2,
          );
        }
      }
    });

    timelineRef.current = tl;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sections]);

  return (
    <section className="mx-auto max-w-[1088px] px-2 lg:px-0">
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div
              ref={(el) => {
                sectionsRef.current[0] = el;
              }}
              className="absolute mx-auto w-full max-w-[560px] py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]"
            >
              <Copy animateOnScroll={true}>
                <h3 className="text-mana text-center text-2xl leading-[125%] font-semibold sm:text-4xl lg:text-5xl xl:text-[52px]">
                  {title || "What you get"}
                </h3>
              </Copy>
            </div>

            {sections.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  sectionsRef.current[i + 1] = el;
                }}
                style={{ willChange: "transform, opacity" }}
                className="absolute mx-auto flex w-full flex-col items-center justify-center"
              >
                <Image
                  className="ios-image h-8 w-8 object-cover"
                  src={item.icon.url}
                  alt={item.title || "icon"}
                  width={32}
                  height={32}
                  priority
                  sizes="(max-width: 640px) 24px, (max-width: 1024px) 28px, 32px"
                />
                <h3 className="story-section font-myriad my-2.5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <Copy animateOnScroll={true}>
                  <p className="text-fuscous text-center text-base font-semibold">
                    {item.desc}
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

export default StorySection;
