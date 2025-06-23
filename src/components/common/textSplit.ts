"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
export const textSplit = (id: string) => {
  SplitText.create(id, {
    type: "lines",
    mask: "lines",
    linesClass: "line",
    lineThreshold: 0.1,
  });
  gsap.set(`${id} .line`, { y: "100%" });
  const animationProps = {
    y: "0%",
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    delay: 0.2,
  };
  gsap.to(`${id} .line`, {
    ...animationProps,
    scrollTrigger: {
      trigger: id,
      start: "top 75%",
      once: true,
      markers: true,
      toggleActions: "play none none none",
    },
  });
};
