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
  curved?: boolean;
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
            duration: 1,
            rotation: rotation,
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
    }, 5000);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fieldServiceData]);
  const className = theme === "dark" ? "field-service-card" : "wanting-more-bg";
  return (
    <>
      <div
        id="crm-cards-wrapper"
        className="relative z-10 min-h-screen overflow-hidden lg:px-2 xl:h-fit"
      >
        <h2 className="gradient-text 3xl:block mx-auto mt-[60px] hidden max-w-[813px] pb-10 text-center text-4xl font-semibold -tracking-[0.72px]">
          {fieldService?.title}
        </h2>
        {fieldService?.cardsDetail.map((service: any, index: any) => (
          <div
            key={index}
            className={`z-${
              index + 1
            } crm-cards absolute top-10 left-[50%] flex w-full translate-x-[-50%] items-center justify-center sm:top-10 sm:h-[90vh] xl:top-0 xl:h-screen`}
          >
            <div
              className={` ${className} h-fit w-full max-w-[1272px] rounded-[14px] p-2.5 lg:p-6 xl:rounded-[40px] xl:p-8 ${index === fieldServiceData.length - 1 ? "" : ""}`}
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
    </>
  );
};

export default ScrollOverlapCards;
