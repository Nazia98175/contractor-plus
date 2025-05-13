"use client";

import React, { useRef, ReactElement, ReactNode, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useEffect } from "react";

// Register GSAP plugins - safely handle SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Safe cleanup function for SplitText
  const safeSplitRevert = (split: SplitText | null) => {
    if (!split) return;

    try {
      // Try the normal revert
      split.revert();
    } catch (err) {
      console.warn("Error during SplitText revert, using manual cleanup", err);

      // Manual cleanup as a fallback
      if (split.chars) {
        split.chars.forEach((char) => {
          try {
            if (char && char.parentNode) {
              char.parentNode.removeChild(char);
            }
          } catch (e) {
            /* Ignore errors during manual cleanup */
          }
        });
      }

      if (split.lines) {
        split.lines.forEach((line) => {
          try {
            if (line && line.parentNode) {
              line.parentNode.removeChild(line);
            }
          } catch (e) {
            /* Ignore errors during manual cleanup */
          }
        });
      }
    }
  };

  // Component mount tracking
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Animation effect
  useLayoutEffect(() => {
    // Skip if not mounted or no container
    if (!isMounted || !containerRef.current || typeof window === "undefined")
      return;

    let ctx = gsap.context(() => {
      // Store refs
      const splitInstances: SplitText[] = [];
      const elements: HTMLElement[] = [];

      // Determine elements to animate
      if (containerRef.current?.hasAttribute("data-copy-wrapper")) {
        elements.push(
          ...(Array.from(containerRef.current.children) as HTMLElement[])
        );
      } else {
        elements.push(containerRef.current as HTMLElement);
      }

      // Process each element safely
      elements.forEach((element) => {
        try {
          // Create SplitText instance with safer options
          const split = new SplitText(element, {
            type: "lines",
            linesClass: "split-line",
          });
          splitInstances.push(split);

          // Setup initial state
          gsap.set(split.lines, { opacity: 0, y: 50 });

          // Create animation
          const tl = gsap.timeline({
            paused: !animateOnScroll,
            scrollTrigger: animateOnScroll
              ? {
                  trigger: element,
                  start: "top 75%",
                  toggleActions: "play none none reset",
                }
              : null,
          });

          // Add animation to timeline
          tl.to(split.lines, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: delay,
          });
        } catch (err) {
          console.warn("Error setting up text animation:", err);
        }
      });

      // Return cleanup function for this context
      return () => {
        splitInstances.forEach((split) => safeSplitRevert(split));
      };
    }, containerRef); // Scope GSAP context to container

    // Cleanup function
    return () => {
      ctx.revert(); // This handles all animations, ScrollTriggers, etc.
    };
  }, [animateOnScroll, delay, children, isMounted]); // Include all dependencies

  // Render component
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref: containerRef,
    } as React.RefAttributes<HTMLElement>);
  }

  return (
    <div
      className="overflow-hidden"
      ref={containerRef}
      data-copy-wrapper="true"
    >
      {children}
    </div>
  );
}
