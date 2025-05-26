"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TextAnimation from "../common/TextAnimation";
import SwitchingToolMobile from "./SwitchingToolMobile";
import SwitchingToolDesktop from "./SwitchingToolDekstop";

gsap.registerPlugin(ScrollTrigger);

const SwitchingTool = () => {
  const sectionRef = useRef(null);

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
          If you're switching between tools outside of your field service CRM,
          it's not good enough
        </h3>
      </TextAnimation>
      <div className="block lg:hidden">
        <SwitchingToolMobile sectionRef={sectionRef} />
      </div>
      <div className="hidden lg:block">
        <SwitchingToolDesktop sectionRef={sectionRef} />
      </div>

      {/* <div className="max-w-[1180px] mx-auto mt-10">
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p className="text-center text-lg md:text-xl font-jakarta text-secondary">
            Switch to a field service CRM that has everything you need in one
            place.
          </p>
        </TextAnimation>
      </div> */}
    </section>
  );
};

export default SwitchingTool;
