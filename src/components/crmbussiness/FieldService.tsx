"use client";
import React, { useRef } from "react";
import FieldServiceCard from "./FieldServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { fieldServiceData } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";

interface TheServiceProps {
  fieldService: any;
  slug: string;
}

gsap.registerPlugin(ScrollTrigger);

const FieldService: React.FC<TheServiceProps> = ({ fieldService, slug }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations();

  useGSAP(() => {
    if (typeof window === "undefined") return;

    // Reduced multiplier for better spacing
    const stackOffset = -8;
    // Improved height calculation - only multiply by 1 instead of 3
    const totalHeight = `${
      50 + (fieldServiceData.length - 1) * Math.abs(stackOffset)
    }vh`;

    if (sectionRef.current) {
      sectionRef.current.style.height = totalHeight;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          // Changed end position to better match content
          end: "bottom center",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.set(card, {
          y: index === 0 ? 0 : window.innerHeight,
          zIndex: 10 + index,
        });
      });

      const positions = Array(cardRefs.current.length).fill(0);

      for (let i = 1; i < cardRefs.current.length; i++) {
        const currentCard = cardRefs.current[i];
        if (!currentCard) continue;

        timeline.addLabel(`card${i}`, (i - 1) * 0.5);

        for (let j = 0; j < i; j++) {
          const prevCard = cardRefs.current[j];
          if (!prevCard) continue;

          positions[j] += stackOffset;

          timeline.to(
            prevCard,
            {
              y: `${positions[j]}vh`,
              opacity: 0.9 - j * 0.05,
              ease: "power1.inOut",
              duration: 0.3,
            },
            `card${i}`
          );
        }

        timeline.to(
          currentCard,
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.5,
          },
          `card${i}`
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fieldServiceData]);

  return (
    <section
      className="relative bg-kuroiBlack z-20 pt-14 sm:pt-20 lg:pt-2 px-2"
      ref={containerRef}
    >
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="text-xl font-semibold text-secondary md:hidden text-center max-w-[813px] mx-auto pb-6">
          {/* There's finally a CRM for field service that does more than just store
          your contacts */}
          {fieldService?.title}
        </h2>
      </TextAnimation>{" "}
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="section-heading hidden md:block text-center max-w-[813px] mx-auto gradient-text pb-6">
          {fieldService?.title}
        </h2>{" "}
      </TextAnimation>
      <div className="absolute bg-bottom w-full h-[25%] z-20 left-0 -bottom-1 rotate-180" />
      <div ref={sectionRef} className="relative px-2 h-fit">
        {fieldService?.cardsDetail.map((service: any, index: any) => (
          <div
            key={index}
            className={`absolute top-0 max-w-[1272px]  mx-auto z-20 left-1/2 -translate-x-1/2  w-full max-h-[882px] h-fit overflow-auto no-scrollbar  p-2.5 lg:p-8 no-scrollbar field-service-card rounded-[14px] xl:rounded-[40px]  ${
              index === fieldServiceData.length - 1 ? "pb-0" : ""
            }`}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            <FieldServiceCard slug={slug} idx={index} service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FieldService;
