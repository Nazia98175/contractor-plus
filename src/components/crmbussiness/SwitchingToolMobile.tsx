"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SwitchingToolMobileProps {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
}

const SwitchingToolMobile = ({ sectionRef }: SwitchingToolMobileProps) => {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial positioning
      gsap.set(cardRef1.current, {
        x: "0%",
        y: "12%",
        rotation: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(2.5px)",
      });
      gsap.set(cardRef2.current, {
        x: "0%",
        y: "-78%",
        rotation: 0,
        scale: 0.97,
        opacity: 0.95,
        filter: "blur(2.5px)",
      });
      gsap.set(cardRef3.current, {
        x: "0%",
        y: "-150%",
        rotation: 0,
        scale: 0.94,
        opacity: 0.9,
        filter: "blur(2.5px)",
      });

      // Scroll animation timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      scrollTl.to(
        cardRef1.current,
        {
          x: "0%",
          y: "15%",
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        0
      );
      scrollTl.to(
        cardRef2.current,
        {
          x: "0%",
          y: "22%",
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
          y: "25%",
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        0
      );
    },
    { dependencies: [sectionRef], scope: sectionRef }
  );

  return (
    <div className="px-2 relative pt-9 md:pt-11" ref={sectionRef}>
      <div className="relative flex lg:flex-row flex-col justify-center items-center pb-16 max-w-[1180px] mx-auto">
        <article
          ref={cardRef1}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-4.webp"
              width={370}
              height={99}
              alt="card 1"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            It takes forever to look up pricing, and it’s easy for errors to
            slip through
          </h4>
        </article>

        <article
          ref={cardRef2}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-5.webp"
              width={370}
              height={99}
              alt="card 2"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            There’s no easy way to upsell or present multiple package options
          </h4>
        </article>

        <article
          ref={cardRef3}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-6.webp"
              width={370}
              height={99}
              alt="card 3"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            You lose jobs because your quote didn’t stand out, or someone else
            convinced them first
          </h4>
        </article>
      </div>
    </div>
  );
};

export default SwitchingToolMobile;
