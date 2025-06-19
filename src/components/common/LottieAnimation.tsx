"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface LottieProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({
  className,
  animationData,
  loop = true,
}: LottieProps) => {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Single useEffect to handle animation
  useEffect(() => {
    if (lottieRef.current) {
      if (isVisible && !hasPlayed) {
        // Play only if visible AND hasn't played before
        lottieRef.current.goToAndPlay(0, true);
        setHasPlayed(true);
      } else if (!isVisible && !hasPlayed) {
        // Pause only if not visible and hasn't played yet
        lottieRef.current.pause();
      }
      // If hasPlayed is true, do nothing (keep it in its final state)
    }
  }, [isVisible, hasPlayed]);

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false} // Always false to control manually
        loop={loop}
      />
    </div>
  );
};

export default LottieAnimation;
