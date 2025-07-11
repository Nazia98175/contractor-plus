"use client";
import ScrollOverlapCards from "@/components/common/ScrollOverlapCards";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;
    const cards = document.querySelectorAll(".crm-cards");
    const totalCards = cards.length;
    // Create the pinning animation
    const pinTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 90px", // Start pinning when section top reaches 90px from viewport top
      end: `+=${(window.innerHeight / 100) * 90 * 4.2}`,
      pin: headingRef.current,
      pinSpacing: false, // Prevents extra spacing
      scrub: false,
      markers: false,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Optional: Add any additional animations during scroll
        const progress = self.progress;
        // Example: Fade out heading as it approaches the end
        gsap.to(headingRef.current, {
          opacity: 1 - progress * 0.3, // Subtle fade effect
          duration: 0.1,
        });
      },
    });

    // Cleanup function
    return () => {
      pinTrigger.kill();
    };
  }, []);
  return (
    <section ref={sectionRef} className="relative overflow-hidden px-2 pb-16">
      {/* <TextAnimation animateOnScroll={true} delay={0.1}> */}

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
          <h2 className="section-heading-2 heading-text-2 3xl:hidden relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
            {fieldServiceData?.title}
          </h2>
        ) : (
          <h2 className="section-heading-2 gradient-text-2 3xl:hidden relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
            {fieldServiceData?.title}
          </h2>
        )}
      </div>
      {/* </TextAnimation> */}

      <ScrollOverlapCards
        theme="light"
        fieldService={fieldServiceData}
        apiData={false}
        slug={slug}
      />
    </section>
  );
};

export default WantingMore;
