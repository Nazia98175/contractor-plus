"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

interface HowItWorkCardProps {
  cardsData: {
    text: string;
    desc: string;
  }[];
}

const HowItWorkCard = ({ cardsData }: HowItWorkCardProps) => {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!cardsData || cardsData.length === 0) return;

    refs.current.forEach((ref) => {
      if (!ref) return;

      ScrollTrigger.create({
        trigger: ref,
        start: `-200px 40%`,
        end: `bottom center`,
        scrub: 2,
        markers: false,
        onEnter: () => {
          ref.classList.add("scroll-active");
        },
        onLeaveBack: () => {
          if (window.innerWidth >= 768) {
            ref.classList.remove("scroll-active");
          }
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cardsData]);

  return (
    <section className="relative flex flex-col gap-20 overflow-hidden pt-[67px] sm:gap-[100px] sm:pt-[94px] md:gap-[154px]">
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) refs.current[index] = el;
          }}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[.52px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">{card.text}</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">{card.desc}</p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
      ))}
    </section>
  );
};

export default HowItWorkCard;
