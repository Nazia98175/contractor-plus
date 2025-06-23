"use client";
import React, { useRef, ReactNode, ReactElement } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextRevealAnimationsProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  preserveClasses?: boolean;
}

export default function TextAnimation({
  children,
  animateOnScroll = false,
  delay = 0,
  preserveClasses = true,
}: TextRevealAnimationsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const hasAnimated = useRef<boolean>(false);

  useGSAP(
    () => {
      if (!containerRef.current || hasAnimated.current) return;

      splitRefs.current = [];
      lines.current = [];
      elementRefs.current = [];

      let elements: HTMLElement[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current as HTMLElement];
      }

      elements.forEach((element) => {
        elementRefs.current.push(element);

        const originalClasses = element.className;

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });
        splitRefs.current.push(split);

        if (preserveClasses && originalClasses) {
          const classesToPreserve = originalClasses
            .split(" ")
            .filter(
              (cls) =>
                cls.includes("gradient") ||
                cls.includes("text-") ||
                cls.includes("font-") ||
                cls.includes("bg-"),
            );

          split.lines.forEach((line) => {
            classesToPreserve.forEach((cls) => {
              line.classList.add(cls);
            });

            const innerDiv = line.querySelector("div");
            if (innerDiv) {
              classesToPreserve.forEach((cls) => {
                innerDiv.classList.add(cls);
              });

              if (classesToPreserve.some((cls) => cls.includes("gradient"))) {
                innerDiv.style.webkitBackgroundClip = "text";
                innerDiv.style.backgroundClip = "text";
                innerDiv.style.webkitTextFillColor = "transparent";
              }
            }
          });
        }

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;
        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 0.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        onComplete: () => {
          hasAnimated.current = true;
        },
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
            toggleActions: "play none none none",
            onToggle: (self) => {
              if (self.isActive && !hasAnimated.current) {
                hasAnimated.current = true;
              }
            },
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
        hasAnimated.current = false;
      };
    },
    {
      scope: containerRef,
      dependencies: [
        containerRef.current?.children,
        animateOnScroll,
        delay,
        preserveClasses,
      ],
    },
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(
      children as ReactElement,
      { ref: containerRef } as { ref: React.RefObject<HTMLDivElement> },
    );
  }

  return (
    <div className="w-full" ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
