"use client";
import React, { useEffect, useRef } from "react";
import { AlertIcon } from "../../common/Icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const SoftwareCard = ({ card }: { card: any }) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      cardRef.current,
      {
        filter: "blur(5px)",
      },
      {
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
      },
    ).to(cardRef.current, {
      filter: "blur(5px)",
      duration: 1,
      ease: "power2.in",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <article
      ref={cardRef}
      style={{ willChange: "filter" }}
      className="software-bg card-shine relative flex w-full max-w-[390px] cursor-pointer flex-col items-center gap-2.5 overflow-hidden rounded-lg p-2.5"
    >
      <AlertIcon />
      <h4 className="text-winterWay relative mx-auto w-full text-center text-base leading-[130%] font-medium text-ellipsis text-shadow-[0px_0px_20px_rgba(255,255,255,0.50)] sm:text-lg xl:text-[22px]">
        {card.text}
      </h4>
    </article>
  );
};

export default SoftwareCard;
