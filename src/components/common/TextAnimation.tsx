"use client";

import React, { useRef, ReactElement, ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Use the useLayoutEffect hook as a replacement for useGSAP
import { useLayoutEffect, useEffect } from "react";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

// Define the props interface
interface TextAnimationProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimationProps): ReactElement {
  const containerRef = useRef<HTMLElement | HTMLDivElement | null>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  // Use useLayoutEffect instead of useGSAP
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Reset refs
    splitRefs.current = [];
    lines.current = [];
    elementRefs.current = [];

    // Determine elements to animate
    let elements: HTMLElement[] = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children) as HTMLElement[];
    } else {
      elements = [containerRef.current as HTMLElement];
    }

    // Process each element
    elements.forEach((element) => {
      elementRefs.current.push(element);

      // Create SplitText instance
      const split = new SplitText(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
        lineThreshold: 0.1,
      });
      splitRefs.current.push(split);

      // Handle text indentation
      const computedStyle = window.getComputedStyle(element);
      const textIndent = computedStyle.textIndent;
      if (textIndent && textIndent !== "0px") {
        if (split.lines && split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0";
      }

      // Add lines to our lines ref
      if (split.lines) {
        lines.current.push(...(split.lines as HTMLElement[]));
      }
    });

    // Set initial state
    gsap.set(lines.current, { y: "100%" });

    // Animation properties
    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: delay,
    };

    // Create animation with or without scroll trigger
    if (animateOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: false,
        },
      });
    } else {
      gsap.to(lines.current, animationProps);
    }

    // Cleanup function
    return () => {
      splitRefs.current.forEach((split) => {
        if (split) {
          split.revert();
        }
      });
    };
  }, [animateOnScroll, delay]);

  // Render component
  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as ReactElement, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
