"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TextAnimation from "../common/TextAnimation";
import SwitchingToolMobile from "./SwitchingToolMobile";
import SwitchingToolDesktop from "./SwitchingToolDekstop";

gsap.registerPlugin(ScrollTrigger);
export interface TheSwitchingToolProps {
  switchingTool: any;
}

const SwitchingTool: React.FC<TheSwitchingToolProps> = ({ switchingTool }) => {
  const sectionRef = useRef(null);

  return (
    <section className="relative z-10 px-2 pt-9 md:pt-11" ref={sectionRef}>
      <div className="bg-reverse-black absolute top-0 left-0 z-[-5] block h-[160px] w-full md:h-[296px]" />
      <img
        className="absolute top-0 left-0 z-[-7] hidden h-full w-full object-contain md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt="switch-tool-bg"
      />

      {/* <TextAnimation animateOnScroll={true} delay={0.2}> */}
      <h3 className="font-jakarta text-secondary xs:max-w-[75%] mx-auto max-w-[96%] text-center text-xl font-semibold sm:max-w-[850px] sm:text-2xl md:text-3xl lg:text-[36px]">
        {switchingTool?.title}
      </h3>
      {/* </TextAnimation> */}
      <div className="block lg:hidden">
        <SwitchingToolMobile
          sectionRef={sectionRef}
          switchingTool={switchingTool}
        />
      </div>
      <div className="hidden lg:block">
        <SwitchingToolDesktop
          sectionRef={sectionRef}
          switchingTool={switchingTool}
        />
      </div>
    </section>
  );
};

export default SwitchingTool;
