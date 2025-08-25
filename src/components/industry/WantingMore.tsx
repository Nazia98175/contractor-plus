"use client";
import ScrollOverlapCards from "@/components/common/ScrollOverlapCards";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AdaptiveHeroTitle from "./AdaptiveHeroTitle";
import Copy from "../common/Copy";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface WantingMoreProps {
  fieldServiceData: any;
  slug: string;
}

const WantingMore: React.FC<WantingMoreProps> = ({
  fieldServiceData,
  slug,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [headingHeight, setHeadingHeight] = useState<number>(0);

  const updateMaxHeight = () => {
    setTimeout(() => {
      const cards = document.querySelectorAll(".crm-cards .crm-cards-inner");
      let currentMaxHeight = 0;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardHeight = cardElement.getBoundingClientRect().height;
        if (cardHeight > currentMaxHeight) {
          currentMaxHeight = cardHeight;
        }
      });
      setMaxHeight(currentMaxHeight);
    }, 1000);
  };

  const updateHeadingHeight = () => {
    if (headingRef.current) {
      const height = headingRef.current.getBoundingClientRect().height;
      setHeadingHeight(height);
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    updateMaxHeight();
    updateHeadingHeight();
  }, [sectionRef.current, headingRef.current]);

  // Update heading height on window resize
  useEffect(() => {
    const handleResize = () => {
      updateHeadingHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (maxHeight && headingHeight) {
      const isSticky =
        window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight;
      const headingFromTop = window.innerHeight / 2 - maxHeight / 2 - 90;
      const bottomVal =
        100 - (headingFromTop + headingHeight) / (window.innerHeight / 100);
      if (!isSticky) return;
      setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom",
            end: `bottom ${bottomVal}%`,
            scrub: 2,
            markers: false,
            id: "field-service-heading",
            invalidateOnRefresh: true,
          },
        });

        tl.to(headingRef.current, {
          y: -(headingFromTop + headingHeight),
          ease: "none",
        });
      }, 2000);
    }
  }, [headingHeight, maxHeight]);

  return (
    <section ref={sectionRef} className="relative px-2 pb-16">
      <div
        ref={headingRef}
        style={{
          top:
            window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight
              ? window.innerHeight / 2 - maxHeight / 2 - 90 + "px"
              : "unset",
          position:
            window.innerHeight / 2 - maxHeight / 2 - 90 > headingHeight
              ? "sticky"
              : "relative",
        }}
        className="w-full justify-center"
      >
        <Copy animateOnScroll={true} delay={0.1}>
          <AdaptiveHeroTitle
            title={fieldServiceData?.title}
            className="section-heading-2 gradient-text-2 relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold"
            minFontSize={24}
            maxLines={2}
            maxFontSize={42}
          />
        </Copy>
      </div>

      <ScrollOverlapCards
        theme="light"
        fieldService={fieldServiceData}
        slug={slug}
      />
    </section>
  );
};

export default WantingMore;
