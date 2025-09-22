"use client";
import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: any;
  distance?: number;
  animateOnMount?: boolean; // New prop to force animation on mount
}

const CardReveal: React.FC<Props> = ({
  children,
  className = "",
  delay = 0,
  distance = 50,
  animateOnMount = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    // If animateOnMount is true, trigger animation immediately
    if (animateOnMount && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasAnimated(true);
      }, 100); // Small delay to ensure CSS transition works

      return () => clearTimeout(timer);
    }

    // Otherwise use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Trigger slightly before element is visible
      },
    );

    if (ref.current) {
      // Check if element is already in viewport on mount
      const rect = ref.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport && !hasAnimated) {
        // Element is already visible, trigger animation
        setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, 100);
      } else {
        // Element is not visible, use observer
        observer.observe(ref.current);
      }
    }

    return () => observer.disconnect();
  }, [hasAnimated, animateOnMount]);

  return (
    <div
      ref={ref}
      className={`translate-z-0 transition-all duration-700 ease-out will-change-transform backface-hidden ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        opacity: isVisible ? 1 : 0,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default CardReveal;
