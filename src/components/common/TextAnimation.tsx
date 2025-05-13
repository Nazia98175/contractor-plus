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
  staggerDelay?: number;
  smoothReverse?: boolean;
  clipEffect?: boolean;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  staggerDelay = 0.1,
  smoothReverse = true,
  clipEffect = true,
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

  // Add CSS classes dynamically on mount
  useEffect(() => {
    if (typeof window !== "undefined" && isMounted) {
      // Add CSS for animation classes if not already present
      if (!document.getElementById("text-animation-styles")) {
        const styleEl = document.createElement("style");
        styleEl.id = "text-animation-styles";
        styleEl.innerHTML = `
          .line-wrapper {
            overflow: hidden;
            display: block;
            position: relative;
          }
          .line-container {
            position: relative;
            display: block;
          }
          .split-line {
            display: block;
          }
        `;
        document.head.appendChild(styleEl);
      }
    }
  }, [isMounted]);

  // Animation effect
  useLayoutEffect(() => {
    // Skip if not mounted or no container
    if (!isMounted || !containerRef.current || typeof window === "undefined")
      return;

    let ctx = gsap.context(() => {
      // Store refs
      const splitInstances: SplitText[] = [];
      const lineWrappers: HTMLElement[] = [];
      const timelines: gsap.core.Timeline[] = [];

      // Determine elements to animate
      const elements: HTMLElement[] = [];
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

          // Create animation timeline
          const tl = gsap.timeline({
            paused: true,
            defaults: {
              ease: "power2.out",
            },
          });

          if (clipEffect) {
            // For each line, create a wrapper to handle the clipping effect
            (split.lines as HTMLElement[]).forEach((line) => {
              // Create a wrapper div with classes instead of inline styles
              const wrapper = document.createElement("div");
              wrapper.className = "line-wrapper";

              // Clone line to preserve original content but with a new container
              const lineContainer = document.createElement("div");
              lineContainer.className = "line-container";
              lineContainer.innerHTML = line.innerHTML;

              // Add to the DOM
              wrapper.appendChild(lineContainer);
              if (line.parentNode) {
                line.parentNode.insertBefore(wrapper, line);
                line.parentNode.removeChild(line);
              }

              // Store for animation
              lineWrappers.push(lineContainer);
            });

            // Set initial state for the clipping effect
            gsap.set(lineWrappers, {
              yPercent: 120, // Start completely below
              opacity: 1,
            });

            // Add animation to timeline
            tl.to(lineWrappers, {
              yPercent: 0,
              duration: 0.8,
              stagger: staggerDelay,
              delay: delay,
            });
          } else {
            // Setup initial state for standard animation
            gsap.set(split.lines, { opacity: 0, y: 50 });

            // Add animation to timeline
            tl.to(split.lines, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: staggerDelay,
              delay: delay,
            });
          }

          // Store the timeline
          timelines.push(tl);

          // Create better ScrollTrigger for smooth reverse animations
          if (animateOnScroll) {
            const animationTargets = clipEffect ? lineWrappers : split.lines;

            // Different ScrollTrigger setup based on smoothReverse option
            if (smoothReverse) {
              // Smooth scrubbed animation for reverse scrolling
              ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                end: "top 35%",
                scrub: 0.5, // Smooth scrubbing
                animation: tl,
              });
            } else {
              // Simple play/reset animation
              ScrollTrigger.create({
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reset",
                animation: tl,
              });
            }
          } else {
            // If not scroll triggered, just play the animation
            tl.play();
          }
        } catch (err) {
          console.warn("Error setting up text animation:", err);
        }
      });

      // Return cleanup function for this context
      return () => {
        splitInstances.forEach((split) => safeSplitRevert(split));
        timelines.forEach((tl) => tl.kill());
      };
    }, containerRef); // Scope GSAP context to container

    // Cleanup function
    return () => {
      ctx.revert(); // This handles all animations, ScrollTriggers, etc.
    };
  }, [
    animateOnScroll,
    delay,
    children,
    isMounted,
    staggerDelay,
    smoothReverse,
    clipEffect,
  ]); // Include all dependencies

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
