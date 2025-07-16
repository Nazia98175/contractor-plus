import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export interface LottieAnimationRef {
  play: () => void;
  stop: () => void;
  pause: () => void;
  setSpeed: (speed: number) => void;
  destroy: () => void;
}

const LottieAnimation = forwardRef<LottieAnimationRef, LottieAnimationProps>(
  ({ animationData, loop = true, autoplay = true, className = "" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (animationRef.current) {
          animationRef.current.goToAndPlay(0, true);
        }
      },
      stop: () => {
        if (animationRef.current) {
          animationRef.current.stop();
        }
      },
      pause: () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
      },
      setSpeed: (speed: number) => {
        if (animationRef.current) {
          animationRef.current.setSpeed(speed);
        }
      },
      destroy: () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      },
    }));

    useEffect(() => {
      if (containerRef.current && animationData) {
        // Clean up previous animation
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // Create new animation
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData,
        });
      }

      // Cleanup function
      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }, [animationData, loop, autoplay]);

    return <div ref={containerRef} className={className} />;
  },
);

LottieAnimation.displayName = "LottieAnimation";

export default LottieAnimation;
