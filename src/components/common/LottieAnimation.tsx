"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface LottieProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  playOnce?: boolean;
  useSyncedPlayZone?: boolean;
}

const LottieAnimation = ({
  className,
  animationData,
  loop = false,
  autoplay = true,
  playOnce = false,
  useSyncedPlayZone = false,
}: LottieProps) => {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [wasCompletelyOutOfView, setWasCompletelyOutOfView] = useState(false);

  // Debug logging

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;

        // Check if element is completely out of view
        const isCompletelyAboveView = rect.bottom < 0;
        const isCompletelyBelowView = rect.top > windowHeight;
        const isCompletelyOutOfView =
          isCompletelyAboveView || isCompletelyBelowView;

        // Track if element was completely out of view
        if (isCompletelyOutOfView && !wasCompletelyOutOfView) {
          console.log("📍 Element went completely out of view");
          setWasCompletelyOutOfView(true);
        }

        // Reset hasPlayed when element re-enters viewport after being completely out
        if (!isCompletelyOutOfView && wasCompletelyOutOfView && hasPlayed) {
          console.log("🔄 Element re-entered viewport - resetting hasPlayed");
          setHasPlayed(false);
          setWasCompletelyOutOfView(false);
        }

        // Reset wasCompletelyOutOfView when element is back in viewport
        if (!isCompletelyOutOfView && wasCompletelyOutOfView) {
          setWasCompletelyOutOfView(false);
        }

        if (useSyncedPlayZone) {
          // Special behavior for CoreFeatures - synced with sidebar (more lenient play zone)
          const elementCenter = rect.top + rect.height / 2;
          const playZoneStart = windowHeight * 0.1; // 10% from top (more lenient)
          const playZoneEnd = windowHeight * 0.9; // 90% from top (more lenient)

          // Primary method: element center in play zone
          const isInPlayZone =
            elementCenter >= playZoneStart && elementCenter <= playZoneEnd;

          // Fallback method: element is partially visible and close to center
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const isPartiallyVisible =
            elementTop < windowHeight && elementBottom > 0;
          const isNearCenter =
            elementTop < windowHeight * 0.6 &&
            elementBottom > windowHeight * 0.4;

          // Use primary method, with fallback for edge cases
          const shouldPlay =
            isInPlayZone || (isPartiallyVisible && isNearCenter);

          console.log("🎯 Enhanced Synced Play Zone:", {
            elementCenter,
            elementTop,
            elementBottom,
            playZoneStart,
            playZoneEnd,
            isInPlayZone,
            isPartiallyVisible,
            isNearCenter,
            shouldPlay,
            previousIsVisible: isVisible,
          });

          setIsVisible(shouldPlay);
        } else {
          // Original behavior for all other components - simple intersection

          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: useSyncedPlayZone
          ? [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
          : playOnce
            ? 0.3
            : 0.1,
        rootMargin: useSyncedPlayZone
          ? "0px"
          : playOnce
            ? "-20% 0px -20% 0px"
            : "0px",
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [
    playOnce,
    useSyncedPlayZone,
    isVisible,
    wasCompletelyOutOfView,
    hasPlayed,
  ]);

  useEffect(() => {
    const lottieInstance = lottieRef.current;

    if (lottieInstance && typeof lottieInstance.play === "function") {
      if (playOnce) {
        // Play-once behavior
        if (isVisible) {
          if (!hasPlayed) {
            console.log("▶️ Playing animation (first time)");

            // Only manage other animations if this is synced (CoreFeatures)
            if (useSyncedPlayZone) {
              // Stop other synced animations
              const allSyncedElements = document.querySelectorAll(
                '[data-lottie-synced="true"]',
              );
              console.log(
                "📊 Found synced elements:",
                allSyncedElements.length,
              );

              allSyncedElements.forEach((el: any, index) => {
                if (
                  el.__lottieInstance &&
                  el.__lottieInstance !== lottieInstance
                ) {
                  console.log(`⏸️ Pusing synced animation ${index}`);
                  el.__lottieInstance.pause();
                  el.setAttribute("data-lottie-synced", "false");
                }
              });

              // Mark this as the active synced animation
              if (containerRef.current) {
                containerRef.current.setAttribute("data-lottie-synced", "true");
                (containerRef.current as any).__lottieInstance = lottieInstance;
              }
            }

            // Play animation
            try {
              lottieInstance.goToAndStop(0, true);
              lottieInstance.play();
              setHasPlayed(true);
            } catch (error) {}
          } else {
          }
        } else {
          lottieInstance.pause();
          if (containerRef.current) {
            containerRef.current.setAttribute("data-lottie-synced", "false");
          }
        }
      } else {
        // Regular loop behavior
        if (isVisible) {
          // Only manage other animations if this is synced (CoreFeatures)
          if (useSyncedPlayZone) {
            // Stop other synced animations
            const allSyncedElements = document.querySelectorAll(
              '[data-lottie-synced="true"]',
            );
            console.log("📊 Found synced elements:", allSyncedElements.length);

            allSyncedElements.forEach((el: any, index) => {
              if (
                el.__lottieInstance &&
                el.__lottieInstance !== lottieInstance
              ) {
                console.log(`⏸️ Pausing synced animation ${index} (loop mode)`);
                el.__lottieInstance.pause();
                el.setAttribute("data-lottie-synced", "false");
              }
            });

            // Mark this as the active synced animation
            if (containerRef.current) {
              containerRef.current.setAttribute("data-lottie-synced", "true");
              (containerRef.current as any).__lottieInstance = lottieInstance;
            }
          }

          try {
            lottieInstance.play();
          } catch (error) {
            console.error("❌ Error playing looping animation:", error);
          }
        } else {
          lottieInstance.pause();
          if (containerRef.current) {
            containerRef.current.setAttribute("data-lottie-synced", "false");
          }
        }
      }
    } else {
    }
  }, [isVisible, hasPlayed, playOnce, useSyncedPlayZone]);

  // Handle animation complete
  const handleComplete = () => {
    if (playOnce && !loop) {
      const lottieInstance = lottieRef.current;
      if (lottieInstance) {
        lottieInstance.pause();
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={playOnce ? false : autoplay}
        loop={loop}
        onComplete={playOnce ? handleComplete : undefined}
      />
    </div>
  );
};

export default LottieAnimation;
