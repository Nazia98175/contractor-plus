"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TiltedCardEffectProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  maxTilt?: number;
  scale?: number;
  speed?: number;
  axis?: "both" | "x" | "y";
  reset?: boolean;
  easeType?: string;
  throttleSpeed?: number;
}

const TiltedCardEffect: React.FC<TiltedCardEffectProps> = ({
  children,
  className = "",
  perspective = 1000,
  maxTilt = 15,
  scale = 1.05,
  speed = 0.3,
  axis = "both",
  reset = true,
  easeType = "power2.out",
  throttleSpeed = 10,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const lastUpdate = useRef<number>(0);
  const requestRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const boundsRef = useRef<{
    rect: DOMRect;
    centerX: number;
    centerY: number;
  } | null>(null);

  // Update bounds function that can be called whenever needed
  const updateBounds = () => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    boundsRef.current = {
      rect,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
    };
  };

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    // Initial bounds calculation
    updateBounds();

    // Animate function using requestAnimationFrame for smoother updates
    const animate = (time: number) => {
      if (time - lastUpdate.current > throttleSpeed) {
        lastUpdate.current = time;

        // Make sure bounds are updated
        if (!boundsRef.current) {
          updateBounds();
          if (!boundsRef.current) return;
        }

        const { centerX, centerY } = boundsRef.current;

        const percentX =
          (mousePosition.current.x - centerX) /
          (boundsRef.current.rect.width / 2);
        const percentY =
          (mousePosition.current.y - centerY) /
          (boundsRef.current.rect.height / 2);

        // Apply smoothing/damping to the percentages
        const smoothX = Math.min(Math.max(percentX, -1), 1);
        const smoothY = Math.min(Math.max(percentY, -1), 1);

        // Calculate tilt based on axis setting with smoothed values
        const tiltX = axis === "both" || axis === "y" ? smoothY * maxTilt : 0;
        const tiltY = axis === "both" || axis === "x" ? smoothX * -maxTilt : 0;

        gsap.to(element, {
          duration: speed,
          transformPerspective: perspective,
          rotationX: tiltX,
          rotationY: tiltY,
          scale: scale,
          ease: easeType,
          overwrite: "auto",
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Update bounds on every mouse move to ensure accuracy
      updateBounds();

      // Start animation loop if not already running
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseEnter = () => {
      // Update bounds when mouse enters
      updateBounds();
    };

    const handleMouseLeave = () => {
      // Cancel animation frame
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }

      if (reset) {
        gsap.to(element, {
          duration: speed * 1.5,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          overwrite: "auto",
        });
      }
    };

    const handleResize = () => {
      updateBounds();
    };

    const handleScroll = () => {
      updateBounds();
    };

    // Add event listeners
    element.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    element.addEventListener("mousemove", handleMouseMove, { passive: true });
    element.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    maxTilt,
    perspective,
    reset,
    scale,
    speed,
    axis,
    easeType,
    throttleSpeed,
  ]);

  return (
    <div
      ref={tiltRef}
      className={`tilt-effect ${className}`}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default TiltedCardEffect;
