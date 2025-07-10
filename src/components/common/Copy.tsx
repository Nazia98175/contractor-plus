"use client";
import React, { useRef, ReactNode, ReactElement } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  const waitForFonts = async (): Promise<boolean> => {
    try {
      await document.fonts.ready;
      const customFonts = ["Plus Jakarta Sans", "Myriad Pro"];
      const fontCheckPromises = customFonts.map((fontFamily: string) => {
        return document.fonts.check(`16px ${fontFamily}`);
      });
      await Promise.all(fontCheckPromises);
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log("all fonts loaded");
      return true;
    } catch (error) {
      console.warn("Font loading check failed, proceeding anyway:", error);
      await new Promise((resolve) => setTimeout(resolve, 200));
      return true;
    }
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;
      //   if (window.innerWidth < 600) return;

      const initializeSplitText = async () => {
        await waitForFonts();
        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];

        let elements: HTMLElement[] = [];
        if (containerRef.current!.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(
            containerRef.current!.children,
          ) as HTMLElement[];
        } else {
          elements = [containerRef.current!];
        }

        elements.forEach((element: HTMLElement) => {
          elementRefs.current.push(element);
          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line",
            lineThreshold: 0.1,
          }) as SplitText;
          splitRefs.current.push(split);

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;
          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
            }
            (element as HTMLElement).style.textIndent = "0";
          }
          lines.current.push(...(split.lines as HTMLElement[]));
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
          duration: 1.8,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              markers: false,
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      };

      initializeSplitText();

      return () => {
        splitRefs.current.forEach((split: SplitText) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as ReactElement<any>, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
