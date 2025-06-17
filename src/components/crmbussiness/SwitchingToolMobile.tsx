"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SwitchingToolMobileProps {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
  switchingTool: any;
}

const SwitchingToolMobile = ({
  sectionRef,
  switchingTool,
}: SwitchingToolMobileProps) => {
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
        0,
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
        0,
      );
      scrollTl.to(
        cardRef3.current,
        {
          x: "0%",
          y: "26%",
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        0,
      );
    },
    { dependencies: [sectionRef], scope: sectionRef },
  );

  return (
    <div className="px-2 pt-5" ref={sectionRef}>
      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center justify-center pb-16 lg:flex-row">
        <article
          ref={cardRef1}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-4.webp"
              width={370}
              height={99}
              alt="card 1"
              className="h-full w-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text 1xl:text-[22px] font-jakarta pt-[18px] text-center text-lg font-medium xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[0]?.text}
          </h4>
        </article>

        <article
          ref={cardRef2}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-5.webp"
              width={370}
              height={99}
              alt="card 2"
              className="h-full w-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text 1xl:text-[22px] font-jakarta pt-[18px] text-center text-lg font-medium xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[1]?.text}
          </h4>
        </article>

        <article
          ref={cardRef3}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-6.webp"
              width={370}
              height={99}
              alt="card 3"
              className="h-full w-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text 1xl:text-[22px] font-jakarta pt-[18px] text-center text-lg font-medium xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[2]?.text}
          </h4>
        </article>
      </div>
    </div>
  );
};

export default SwitchingToolMobile;
