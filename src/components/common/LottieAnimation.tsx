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
  autoplay = true,
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
        threshold: 0.1,
        rootMargin: "0px",
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

  useEffect(() => {
    const lottieInstance = lottieRef.current;

    if (lottieInstance && typeof lottieInstance.play === "function") {
      if (isVisible) {
        console.log("Lottie: IN viewport - goToAndPlay(0, true)");
        lottieInstance.goToAndPlay(0, true);
      } else {
        console.log("Lottie: OUT of viewport - stop()");
        lottieInstance.stop();
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
