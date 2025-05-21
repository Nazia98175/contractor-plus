"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const SwitchingTool = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    cardRefs.current = cardRefs.current.slice(0, 3);
    // Default layout before scroll (initial stacked layout)
    const initCards = () => {
      gsap.set(cardRefs.current[0], {
        x: "110%",
        y: "12%",
        rotation: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(cardRefs.current[1], {
        x: "3%",
        y: "3%",
        rotation: 0,
        scale: 0.97,
        opacity: 0.95,
      });

      gsap.set(cardRefs.current[2], {
        x: "-104%",
        y: "-6%",
        rotation: 0,
        scale: 0.94,
        opacity: 0.9,
      });
    };

    initCards();

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 20%", // means 15% from top of screen
        end: "bottom 85%",
        scrub: 1,
      },
    });

    // Animation to final spread layout
    scrollTl.to(
      cardRefs.current[0],
      {
        x: "0%",
        y: "15%",
        rotation: -15,
        scale: 0.9,
        duration: 1,
        immediateRender: false,
      },
      0
    );

    scrollTl.to(
      cardRefs.current[1],
      {
        x: "0%",
        y: "-5%",
        scale: 1,
        opacity: 1,
        zIndex: 3,
        duration: 1,
        immediateRender: false,
      },
      0
    );

    scrollTl.to(
      cardRefs.current[2],
      {
        x: "0%",
        y: "15%",
        rotation: 15,
        scale: 0.9,
        duration: 1,
        immediateRender: false,
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="px-2 relative pt-11" ref={sectionRef}>
      {/* Backgrounds */}
      <div className="bg-reverse-black h-[296px] w-full hidden md:block top-0 left-0 absolute z-[-5]" />
      <img
        className="absolute top-0 left-0 w-full h-full z-[-7] object-contain hidden md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt=""
      />
      <img
        className="top-0 left-0 w-full h-full z-[-10] object-center block md:hidden absolute"
        src="/images/png/switch-tool-mobile-bg.png"
        alt=""
      />

      {/* Heading */}
      <h3 className="max-w-[818px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold font-jakarta text-center text-secondary">
        If you're switching between tools outside of your field service CRM,
        it's not good enough
      </h3>

      {/* Card Container */}
      <div className="relative flex justify-center items-center h-[400px] max-w-[1180px] mx-auto">
        {/* Left Card */}
        <article
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] h-[265px] w-full "
        >
          <div className="flex justify-center w-full">
            <Image
              width={370}
              height={99}
              src="/images/webp/switch-card-1.webp"
              alt="switch card"
              className="w--full"
            />
          </div>

          <h4 className="switch-tool-text pt-6">
            It takes forever to look up pricing, and it’s easy for errors to
            slip through
          </h4>
        </article>

        {/* Center Card */}
        <article
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] h-[265px] w-full "
        >
          <div className="flex justify-center w-full">
            <Image
              width={370}
              height={99}
              src="/images/webp/switch-card-2.webp"
              alt="switch card"
              className="w-full"
            />
          </div>
          <p className="switch-tool-text pt-6">
            There’s no easy way to upsell or present multiple package options
          </p>
        </article>

        {/* Right Card */}
        <article
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] h-[265px] w-full "
        >
          <div className="flex justify-center w-full">
            <Image
              width={370}
              height={99}
              src="/images/webp/switch-card-1.webp"
              alt="switch card"
              className="w-full"
            />
          </div>
          <h4 className="switch-tool-text pt-6">
            You lose jobs because your quote didn’t stand out, or someone else
            convinced them first
          </h4>
        </article>
      </div>
    </section>
  );
};

export default SwitchingTool;
