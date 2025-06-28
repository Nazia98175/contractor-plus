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
        // console.log("Is intersecting:", entry.isIntersecting);
        // console.log("Intersection Ratio:", entry.intersectionRatio);
        // console.log("Bounding Client Rect:", entry.boundingClientRect);
        // console.log("Viewport (Root) Bounds:", entry.rootBounds);
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
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
        lottieInstance.play();
      } else {
        lottieInstance.pause();
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
