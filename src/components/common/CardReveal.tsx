import React, { useLayoutEffect, useRef, useEffect, ReactNode } from "react";
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
  const animationSetupRef = useRef<boolean>(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Setup and refresh animation whenever children change
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
        start: "top 70%", // When container starts entering viewport
        end: "bottom 25%", // When container is leaving viewport
        markers: debug,
        // Using "play none none none" for one-time animation
        // This means: play on enter, then do nothing for all other actions
        toggleActions: "play none none none",
        onEnter: () => {
          // Animate cards into view with stagger - this happens only once
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

    // Force refresh on certain events
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

  // Add route change handler for SPA navigation
  useEffect(() => {
    const handleRouteChange = () => {
      // Force refresh ScrollTrigger on route change
      ScrollTrigger.refresh();

      // If animation was already set up, refresh it
      if (animationSetupRef.current && containerRef.current) {
        const cards = Array.from(
          containerRef.current.children
        ) as HTMLElement[];
        if (cards.length) {
          // We don't reset the state here since we want the cards to stay visible after first animation
          // Only refresh the trigger
          if (scrollTriggerRef.current) {
            scrollTriggerRef.current.refresh();
          }
        }
      }
    };

    // For SPA navigation - can be adapted to your router (Next.js example below)
    // If using Next.js:
    // Router.events.on('routeChangeComplete', handleRouteChange);

    // For demonstration, we'll use scroll events to periodically check
    const scrollHandler = () => {
      // Check if we need to refresh (for example, after page transitions or DOM changes)
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    // Add scroll listener with throttle
    let scrollTimeout: NodeJS.Timeout;
    const throttledScrollHandler = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollHandler();
          scrollTimeout = undefined as unknown as NodeJS.Timeout;
        }, 200); // Throttle to 200ms
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      // If using Next.js:
      // Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [distance]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CardReveal;
