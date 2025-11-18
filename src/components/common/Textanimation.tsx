"use client";
import React, { useRef, ReactNode, ReactElement } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextAnimationProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
  ariaLabel?: string;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  className,
  ariaLabel,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitInstances = useRef<SplitText[]>([]);
  const lineElements = useRef<HTMLElement[]>([]);

  const waitForPaint = () =>
    new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const runSplit = async () => {
        await document.fonts.ready;
        await waitForPaint();

        splitInstances.current = [];
        lineElements.current = [];

        const target = containerRef.current;

        const split = new SplitText(target, {
          type: "lines",
          linesClass: "ta-line",
          reduceWhiteSpace: false,
        });

        splitInstances.current.push(split);
        lineElements.current.push(...(split.lines as HTMLElement[]));

        gsap.set(split.lines, { y: "100%", opacity: 1 });

        const animation = {
          y: "0%",
          stagger: 0.1,
          ease: "power3.out",
          duration: 1.4,
          delay,
        };

        if (animateOnScroll) {
          gsap.to(split.lines, {
            ...animation,
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              once: true,
            },
          });
        } else {
          gsap.to(split.lines, animation);
        }
      };

      runSplit();

      return () => {
        splitInstances.current.forEach((s) => s.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as ReactElement, {
      ref: containerRef,
      className: `${(children as ReactElement).props.className || ""} ${className || ""}`,
      "aria-label": ariaLabel,
    });
  }

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label={ariaLabel}
      data-text-animation="wrapper"
    >
      {children}
    </div>
  );
}
