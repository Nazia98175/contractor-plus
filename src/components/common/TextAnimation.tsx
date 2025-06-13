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
  animateOnScroll = true,
  delay = 0,
  preserveClasses = true, // New option to preserve all classes
}: TextRevealAnimationsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

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

        // Store the original classnames before splitting
        const originalClasses = element.className;

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });
        splitRefs.current.push(split);

        // Apply original classes to inner elements
        if (preserveClasses && originalClasses) {
          const classesToPreserve = originalClasses.split(" ").filter(
            (cls) =>
              // Preserve gradient classes and other special styling classes
              cls.includes("gradient") ||
              cls.includes("text-") ||
              cls.includes("font-") ||
              cls.includes("bg-"),
          );

          split.lines.forEach((line) => {
            // For each line find both the line element and its inner div
            // Add classes to both to ensure styles are properly applied

            // Add classes to line element
            classesToPreserve.forEach((cls) => {
              line.classList.add(cls);
            });

            // Find and add classes to inner div element (which contains the text)
            const innerDiv = line.querySelector("div");
            if (innerDiv) {
              classesToPreserve.forEach((cls) => {
                innerDiv.classList.add(cls);
              });

              // Special handling for gradients - need to set the background-clip
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
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
            toggleActions: "play none none reset",
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
