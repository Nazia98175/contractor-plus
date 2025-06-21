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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 1.0, // Entire element must be fully in view
        rootMargin: "-100px 0px -100px 0px", // top | right | bottom | left
      },
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

  // Handle animation play/pause
  useEffect(() => {
    if (lottieRef.current) {
      if (isVisible) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={loop}
      />
    </div>
  );
};

export default LottieAnimation;
