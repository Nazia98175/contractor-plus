"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";

gsap.registerPlugin(ScrollTrigger);
interface TheSwitchingToolProps{
switchingTool: any
}

const SwitchingTool: React.FC<TheSwitchingToolProps> = ({switchingTool}) => {
  const sectionRef = useRef(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        if (cardRef1.current) {
          gsap.set(cardRef1.current, {
            x: "0%",
            y: "-10%",
            opacity: 1,
            scale: 1,
            rotation: 0,
            filter: "blur(2.5px)",
          });
        }
        if (cardRef2.current) {
          gsap.set(cardRef2.current, {
            x: "0%",
            y: "-100%",
            opacity: 1,
            scale: 1,
            rotation: 0,
            filter: "blur(2.5px)",
          });
        }
        if (cardRef3.current) {
          gsap.set(cardRef3.current, {
            x: "0%",
            y: "-167%",
            opacity: 1,
            scale: 1,
            rotation: 0,
            filter: "blur(2.5px)",
          });
        }
      } else {
        gsap.set(cardRef1.current, {
          x: "110%",
          y: "12%",
          rotation: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(2.5px)",
        });
        gsap.set(cardRef2.current, {
          x: "3%",
          y: "3%",
          rotation: 0,
          scale: 0.97,
          opacity: 0.95,
          filter: "blur(2.5px)",
        });
        gsap.set(cardRef3.current, {
          x: "-104%",
          y: "-6%",
          rotation: 0,
          scale: 0.94,
          opacity: 0.9,
          filter: "blur(2.5px)",
        });
      }

      // Scroll animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 60%" : "top 65%",
          end: isMobile ? "bottom bottom" : "bottom 70%",
          scrub: 1,
        },
      });

      if (isMobile) {
        if (cardRef1.current) {
          scrollTl.to(cardRef1.current, {
            y: "-20%",
            scale: 0.96,
            filter: "blur(0px)",
          });
        }
        if (cardRef2.current) {
          scrollTl.to(cardRef2.current, {
            y: "-10%",
            scale: 1,
            filter: "blur(0px)",
          });
        }
        if (cardRef3.current) {
          scrollTl.to(cardRef3.current, {
            y: "0%",
            scale: 0.96,
            filter: "blur(0px)",
          });
        }
      } else {
        scrollTl.to(
          cardRef1.current,
          {
            x: "0%",
            y: "15%",
            rotation: -15,
            scale: 0.9,
            filter: "blur(0px)",
          },
          0
        );
        scrollTl.to(
          cardRef2.current,
          {
            x: "0%",
            y: "-5%",
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          },
          0
        );
        scrollTl.to(
          cardRef3.current,
          {
            x: "0%",
            y: "15%",
            rotation: 15,
            scale: 0.9,
            filter: "blur(0px)",
          },
          0
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className="px-2 relative pt-9 md:pt-11" ref={sectionRef}>
      <div className="bg-reverse-black h-[296px] w-full hidden md:block top-0 left-0 absolute z-[-5]" />
      <img
        className="absolute top-0 left-0 w-full h-full z-[-7] object-contain hidden md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt="switch-tool-bg"
      />
      <img
        className="top-0 left-0 w-full h-full z-[-10] object-center block md:hidden absolute"
        src="/images/png/switch-tool-mobile-bg.png"
        alt="switch-tool-bg"
      />
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <h3 className="max-w-[818px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold font-jakarta text-center text-secondary">
          {/* If you're switching between tools outside of your field service CRM,
          it's not good enough */}
          {switchingTool?.title}
        </h3>
      </TextAnimation>

      <div className="relative flex lg:flex-row flex-col justify-center items-center pb-16 max-w-[1180px] mx-auto mt-10">
        <article
          ref={cardRef1}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-1.webp"
              width={370}
              height={99}
              alt="card 1"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            {switchingTool?.cardsDetail?.[0]?.text}
          </h4>
        </article>

        <article
          ref={cardRef2}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-2.webp"
              width={370}
              height={99}
              alt="card 2"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            {/* There’s no easy way to upsell or present multiple package options */}
            {switchingTool?.cardsDetail?.[1]?.text}
          </h4>
        </article>

        <article
          ref={cardRef3}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-1.webp"
              width={370}
              height={99}
              alt="card 3"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            {/* You lose jobs because your quote didn’t stand out, or someone else
            convinced them first */}
            {switchingTool?.cardsDetail?.[2]?.text}
          </h4>
        </article>
      </div>
    </section>
  );
};

export default SwitchingTool;
