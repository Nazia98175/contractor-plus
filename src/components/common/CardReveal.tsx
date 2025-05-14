import React, { useLayoutEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Make sure to register ScrollTrigger once at the app level if possible
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardRevealProps {
  children: ReactNode;
  staggerDelay?: number;
  animationDuration?: number;
  className?: string;
  distance?: number;
  easing?: string;
  debug?: boolean; // Add markers for debugging
}

const CardReveal: React.FC<CardRevealProps> = ({
  children,
  staggerDelay = 0.15,
  animationDuration = 0.8,
  className = "",
  distance = 50, // AOS-like distance
  easing = "power2.out", // AOS-like easing
  debug = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useLayoutEffect for DOM manipulations to avoid flicker
  useLayoutEffect(() => {
    // Safety check for window/document
    if (typeof window === "undefined") return;

    // Re-register plugin to be safe
    gsap.registerPlugin(ScrollTrigger);

    // Get container element
    const container = containerRef.current;
    if (!container) return;

    // Get all cards as direct children of the container
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    // Clear any existing ScrollTriggers for these elements
    ScrollTrigger.getAll().forEach((st) => {
      if (cards.includes(st.vars.trigger as HTMLElement)) {
        st.kill();
      }
    });

    // Set initial state for all cards - hidden and translated down
    cards.forEach((card) => {
      gsap.set(card, {
        y: distance,
        opacity: 0,
      });
    });

    // Create a single ScrollTrigger for the container
    const containerTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top 85%", // When container starts entering viewport
      end: "bottom 25%", // When container is leaving viewport
      markers: debug,
      // Using toggleActions to make animation behavior more predictable
      // play when entering, keep state when leaving,
      // resume when entering back, reset when leaving back
      toggleActions: "play none resume reset",
      onEnter: () => {
        // Animate cards into view with stagger
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          stagger: staggerDelay,
          ease: easing,
          overwrite: true,
        });
      },
      onLeaveBack: () => {
        // When scrolling back above container, animate cards out
        // Use reverse stagger so first cards hide first
        gsap.to(cards, {
          y: distance,
          opacity: 0,
          duration: animationDuration,
          stagger: {
            each: staggerDelay,
            from: "start", // Start from the first element (top)
          },
          ease: easing,
          overwrite: true,
        });
      },
    });

    // Cleanup function
    return () => {
      if (containerTrigger) {
        containerTrigger.kill();
      }
      gsap.killTweensOf(cards);
    };
  }, [children, distance, staggerDelay, animationDuration, easing, debug]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CardReveal;
