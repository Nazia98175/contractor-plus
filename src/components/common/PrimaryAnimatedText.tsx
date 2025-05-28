// components/common/PrimaryAnimatedText.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
}

interface PrimaryAnimatedTextProps {
  children: any;
  className?: string;
  id?: string;
  delay?: number;
}

const PrimaryAnimatedText = ({
  children,
  className = "",
  id = "text-animation",
  delay = 0,
}: PrimaryAnimatedTextProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const el = textRef.current;
      if (!el) return;

      const split = new SplitText(el, {
        type: "lines",
        linesClass: "primary-split-line",
      });

      // Wrap each line in overflow-hidden div
      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "block";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.set(split.lines, { y: "100%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: false,
        },
      });

      tl.to(split.lines, {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      return () => {
        split.revert();
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div ref={textRef} id={id} className={className}>
      {children}
    </div>
  );
};

export default PrimaryAnimatedText;
