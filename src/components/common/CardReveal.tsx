"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { ReactNode, useLayoutEffect, useRef } from "react";

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
  debug?: boolean;
}

const CardReveal: React.FC<CardRevealProps> = ({
  children,
  staggerDelay = 0.15,
  animationDuration = 0.8,
  className = "",
  distance = 50,
  easing = "power2.out",
  debug = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationSetupRef = useRef<boolean>(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

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

    // Function to set up the animation
    const setupAnimation = () => {
      // Clear existing ScrollTrigger if any
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      // Kill any existing tweens
      gsap.killTweensOf(cards);

      // Set initial state for all cards - hidden and translated down
      gsap.set(cards, {
        y: distance,
        opacity: 0,
      });

      // Create a new ScrollTrigger for the container
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: "top 70%",
        end: "bottom 25%",
        markers: debug,
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: animationDuration,
            stagger: staggerDelay,
            ease: easing,
            overwrite: true,
          });
        },
      });

      animationSetupRef.current = true;
    };

    // Set up animation
    setupAnimation();

    // Add event listeners for scroll position changes
    const handleResize = () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
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
