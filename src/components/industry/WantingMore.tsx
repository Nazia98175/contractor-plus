"use client";
import ScrollOverlapCards from "@/components/common/ScrollOverlapCards";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      const cards = document.querySelectorAll(".crm-cards .wanting-more-bg");
      console.log(cards, "cards===========>");
      let currentMaxHeight = 0;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardHeight = cardElement.getBoundingClientRect().height;
        if (cardHeight > currentMaxHeight) {
          currentMaxHeight = cardHeight;
        }
      });
      console.log(currentMaxHeight);
      setMaxHeight(currentMaxHeight);
    }, 1000);
  };

  const updateHeadingHeight = () => {
    if (headingRef.current) {
      const height = headingRef.current.getBoundingClientRect().height;
      setHeadingHeight(height);
      console.log("Heading height:", height);
    }
  };

  console.log(maxHeight);
  console.log("Current heading height:", headingHeight);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    updateMaxHeight();
    updateHeadingHeight();

    const cards = document.querySelectorAll(".crm-cards");
    const totalCards = cards.length;

    if (maxHeight > 0 && headingHeight > 0) {
      const startScreen = (window.innerHeight - maxHeight) / 2 - 60 + "px";
      const isVisible =
        (window.innerHeight - maxHeight) / 2 - 60 > headingHeight;
      console.log((window.innerHeight - maxHeight) / 2 - 70);
      console.log(isVisible, "isVisible=================>");
      if (!isVisible) return;
      // ScrollTrigger.getAll().forEach((st) => st.kill());
      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top ${startScreen}`, // Start pinning when section top reaches 90px from viewport top
        end: `+=${(window.innerHeight / 100) * 90 * 4.2}`,
        pin: headingRef.current,
        pinSpacing: false, // Prevents extra spacing
        scrub: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(headingRef.current, {
            opacity: 1 - progress * 0.3,
            duration: 0.1,
          });
        },
      });

      // Cleanup function
      return () => {
        pinTrigger.kill();
      };
    }
  }, [maxHeight, headingHeight]);

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-2 pb-16">
      {/* <Copy animateOnScroll={true} delay={0.1}> */}

      <div
        ref={headingRef}
        className="sticky-heading-wrapper"
        style={{
          position: "relative",
          zIndex: 20,
          top: 0,
        }}
      >
        {slug === "general-contractor" ? (
          <h2 className="section-heading-2 heading-text-2 relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
            {fieldServiceData?.title}
          </h2>
        ) : (
          <h2 className="section-heading-2 gradient-text-2 relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
            {fieldServiceData?.title}
          </h2>
        )}
      </div>
      {/* </Copy> */}

      <ScrollOverlapCards
        theme="light"
        fieldService={fieldServiceData}
        slug={slug}
      />
    </section>
  );
};

export default WantingMore;
