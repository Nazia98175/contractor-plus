"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CardRevealProps {
  children: ReactNode;
  staggerDelay?: number;
  animationDuration?: number;
  className?: string;
  distance?: number;
  easing?: string;
  debug?: boolean;
  once?: boolean;
  animateOnScroll?: boolean;
  delay?: number;
}

const CardReveal: React.FC<CardRevealProps> = ({
  children,
  staggerDelay = 0.15,
  animationDuration = 0.8,
  className = "",
  delay = 0,
  distance = 50,
  easing = "power2.out",
  debug = false,
  once = false,
  animateOnScroll = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    // Initial state
    gsap.set(cards, {
      y: distance,
      opacity: 0,
    });

    if (animateOnScroll) {
      // Animate on scroll
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: "top 75%",
        end: "bottom 25%",
        markers: debug,
        toggleActions: "play none none none",
        once,
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
    } else {
      // Auto animate on mount
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        stagger: staggerDelay,
        ease: easing,
        overwrite: true,
        delay,
      });
    }

    const handleResize = () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
      gsap.killTweensOf(cards);
    };
  }, [
    distance,
    staggerDelay,
    animationDuration,
    easing,
    debug,
    once,
    animateOnScroll,
  ]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CardReveal;
