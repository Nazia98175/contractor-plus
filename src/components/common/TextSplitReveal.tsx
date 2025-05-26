"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { JSX } from "react/jsx-runtime";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const TextSplitReveal: React.FC<Props> = ({
  text,
  className = "",
  tag = "h2",
}) => {
  console.log(text);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !text) return;

    const split = new SplitText(textRef.current, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
    });

    gsap.set(split.lines, { y: "100%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.to(split.lines, {
      y: "0%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.out",
    });

    return () => {
      split.revert();
    };
  }, [text]); // runs only when `text` becomes available

  if (!text) return null;

  return React.createElement(
    tag,
    {
      ref: textRef,
      className,
    },
    text
  );
};

export default TextSplitReveal;
