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
  autoplay = false,
  loop = false,
}: LottieProps) => {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (lottieRef.current) {
      if (isVisible) {
        lottieRef.current.goToAndPlay(0, true);
        console.log("start animation");
      } else {
        lottieRef.current.pause();
        console.log("Paused animation");
      }
    }
  }, [isVisible]);

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={autoplay}
        loop={loop}
      />
    </div>
  );
};

export default LottieAnimation;
