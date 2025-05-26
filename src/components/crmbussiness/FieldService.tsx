"use client";
import React, { useRef } from "react";
import FieldServiceCard from "./FieldServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { fieldServiceData } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FieldService: React.FC = () => {
  const t = useTranslations();

  useGSAP(() => {
    if (typeof window === "undefined") return;
<<<<<<< HEAD

    setTimeout(() => {
      const cards = document.querySelectorAll(".crm-cards");
      const totalCards = cards.length;
=======
    const stackOffset = -8;
    // Improved height calculation - only multiply by 1 instead of 3
    const totalHeight = `${
      50 + (fieldServiceData.length - 1) * Math.abs(stackOffset)
    }vh`;
>>>>>>> 9c360b5c059112a245e3e8bab5e2f3be22ab2111

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
          start: "top 10%",
          end: `+=${(window.innerHeight / 100) * 90 * (totalCards - 1)}`,
          pin: true,
          scrub: 1,
          markers: false,
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
          position
        );

        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position
        );
      }
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fieldServiceData]);

  return (
    <section className="relative bg-kuroiBlack z-20 pt-14 sm:pt-20 lg:pt-2 px-2">
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="text-xl font-semibold text-secondary md:hidden text-center max-w-[813px] mx-auto pb-6">
          There’s finally a CRM for field service that does more than just store
          your contacts
        </h2>
      </TextAnimation>{" "}
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="section-heading hidden md:block text-center max-w-[813px] mx-auto gradient-text pb-6">
          There’s finally a CRM for field service that does more than just store
          your contacts
        </h2>{" "}
      </TextAnimation>
      <div className="absolute bg-bottom w-full h-[25%] z-20 left-0 -bottom-1 rotate-180" />
<<<<<<< HEAD
      <div>
        <div
          id="crm-cards-wrapper"
          className="relative overflow-hidden px-2 h-[90vh]"
        >
          {fieldServiceData.map((service, index) => (
            <div
              key={index}
              className={`z-${
                index + 1
              } h-[90vh] crm-cards absolute left-[50%] top-0  translate-x-[-50%] w-full flex justify-center items-center`}
            >
              <div
                className={`w-full max-w-[1272px] h-fit overflow-auto no-scrollbar  p-2.5 lg:p-8 no-scrollbar field-service-card rounded-[14px] xl:rounded-[40px]  ${
                  index === fieldServiceData.length - 1 ? "pb-0" : ""
                }`}
              >
                <FieldServiceCard service={service} />
              </div>
            </div>
          ))}
        </div>
=======
      <div ref={sectionRef} className="relative px-2 h-fit">
        {fieldServiceData.map((service, index) => (
          <div
            key={index}
            className={`absolute top-0 max-w-[1272px]  mx-auto z-20 left-1/2 -translate-x-1/2  w-full max-h-[882px] h-fit overflow-auto no-scrollbar p-2.5 lg:p-8 no-scrollbar field-service-card rounded-[14px] xl:rounded-[40px]  ${
              index === fieldServiceData.length - 1 ? "pb-0" : ""
            }`}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            <FieldServiceCard service={service} />
          </div>
        ))}
>>>>>>> 9c360b5c059112a245e3e8bab5e2f3be22ab2111
      </div>
    </section>
  );
};

export default FieldService;
