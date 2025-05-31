"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import React from "react";
import { fieldServiceData } from "../common/Helper";
import FieldServiceCard from "../crmbussiness/FieldServiceCard";
interface ScrollOverlapCardsProps {
  fieldService: any;
  slug: string;
  theme: "light" | "dark";
}

const ScrollOverlapCards: React.FC<ScrollOverlapCardsProps> = ({
  fieldService,
  slug,
  theme,
}) => {
  const t = useTranslations();
  useGSAP(() => {
    if (typeof window === "undefined") return;
    setTimeout(() => {
      const cards = document.querySelectorAll(".crm-cards");
      const totalCards = cards.length;
      gsap.set(cards[0], { y: "0%", scale: 1, rotate: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], {
          y: "100%",
          scale: 1,
          rotation: 0,
        });
      }
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#crm-cards-wrapper",
          start: "top 5%",
          end: `+=${(window.innerHeight / 100) * 90 * (totalCards - 1)}`,
          pin: true,
          scrub: 1,
        },
      });
      for (let i = 0; i < totalCards; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];
        const position = i;
        const rotation = i % 2 ? -5 : 5;
        scrollTimeline.to(
          currentCard,
          {
            scale: 0.8,
            rotation: rotation,
            duration: 1,
            ease: "none",
          },
          position,
        );
        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }
    }, 2000);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fieldServiceData]);
  const className = theme === "dark" ? "field-service-card" : "wanting-more-bg";
  return (
    <div
      id="crm-cards-wrapper"
      className="relative z-10 min-h-screen overflow-hidden px-2 xl:h-[90vh]"
    >
      {fieldService?.cardsDetail.map((service: any, index: any) => (
        <div
          key={index}
          className={`z-${
            index + 1
          } crm-cards absolute top-10 left-[50%] flex w-full translate-x-[-50%] items-center justify-center sm:top-20 sm:h-[90vh] xl:top-0 xl:h-screen`}
        >
          <div
            className={`no-scrollbar ${className} h-fit w-full max-w-[1272px] overflow-auto rounded-[14px] p-2.5 lg:p-8 xl:rounded-[40px] ${index === fieldServiceData.length - 1 ? "pb-0" : ""}`}
          >
            <FieldServiceCard
              slug={slug}
              idx={index}
              service={service}
              theme={theme}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollOverlapCards;
