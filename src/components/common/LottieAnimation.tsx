"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface LottieProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  playOnce?: boolean; 
}

const LottieAnimation = ({
  className,
  animationData,
  loop = true,
  autoplay = true,
  playOnce = false, 
}: LottieProps) => {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        if (playOnce) {
          // New play-once behavior
          if (isIntersecting) {
            // Animation is in viewport
            if (!hasPlayed) {
              // Play only if it hasn't been played yet
              setShouldPlay(true);
              setHasPlayed(true);
            }
          } else {
            // Animation is out of viewport
            const rect = entry.target.getBoundingClientRect();
            const isCompletelyOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
            
            if (isCompletelyOutOfView) {
              // Reset when completely out of view to allow replay
              setHasPlayed(false);
              setShouldPlay(false);
            }
          }
        }
      },
      {
        threshold: playOnce ? 0.3 : 0.1, // Higher threshold for play-once to trigger when more centered
        rootMargin: playOnce ? '-20% 0px -20% 0px' : '0px' // Start playing when 10% from top/bottom
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasPlayed, playOnce]);

  useEffect(() => {
    const lottieInstance = lottieRef.current;
    if (lottieInstance && typeof lottieInstance.play === "function") {
      if (playOnce) {
        // New play-once behavior
        if (shouldPlay && isVisible) {
          // Reset to beginning and play
          lottieInstance.goToAndStop(0, true);
          lottieInstance.play();
        } else if (!isVisible) {
          // Pause when not visible
          lottieInstance.pause();
        }
      } else {
        // Original behavior - play/pause based on visibility
        if (isVisible) {
          lottieInstance.play();
        } else {
          lottieInstance.pause();
        }
      }
    }
  }, [shouldPlay, isVisible, playOnce]);

  // Handle animation complete - using onComplete prop instead of addEventListener
  const handleComplete = () => {
    if (playOnce && !loop) {
      setShouldPlay(false);
    }
  };

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={playOnce ? false : autoplay} // Disable autoplay for play-once mode
        loop={loop}
        onComplete={playOnce ? handleComplete : undefined} // Use onComplete prop instead of addEventListener
      />
    </div>
  );
};

export default LottieAnimation;