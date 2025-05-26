"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedGlowBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ellipseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Make sure GSAP is available
    if (!gsap) return;

    // Create a timeline for smoother animations
    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      repeatDelay: 0.5,
    });

    // Create timeline for each ellipse with different animations
    if (ellipseRefs.current.length > 0) {
      // First lightBlack ellipse
      tl.to(ellipseRefs.current[0], {
        scale: 1.2,
        opacity: 0.7,
        duration: 8,
        ease: "power1.inOut",
      });

      // First red ellipse
      tl.to(
        ellipseRefs.current[1],
        {
          scale: 1.1,
          x: "+=50",
          opacity: 0.8,
          duration: 12,
          ease: "sine.inOut",
        },
        "<"
      );

      // Second red ellipse
      tl.to(
        ellipseRefs.current[2],
        {
          scale: 1.15,
          x: "-=70",
          opacity: 0.85,
          duration: 10,
          ease: "power2.inOut",
        },
        "<"
      );

      // Second lightBlack ellipse
      tl.to(
        ellipseRefs.current[3],
        {
          scale: 0.9,
          y: "+=30",
          opacity: 0.75,
          duration: 15,
          ease: "power1.inOut",
        },
        "<"
      );

      // Third lightBlack ellipse
      tl.to(
        ellipseRefs.current[4],
        {
          scale: 0.95,
          y: "-=40",
          opacity: 0.8,
          duration: 12,
          ease: "sine.inOut",
        },
        "<"
      );

      // Second part of animation (return to original state with variations)
      tl.to(ellipseRefs.current[0], {
        scale: 1,
        opacity: 0.9,
        duration: 8,
        ease: "power1.inOut",
      });

      tl.to(
        ellipseRefs.current[1],
        {
          scale: 1,
          x: "-=50",
          opacity: 0.9,
          duration: 12,
          ease: "sine.inOut",
        },
        "<"
      );

      tl.to(
        ellipseRefs.current[2],
        {
          scale: 1,
          x: "+=70",
          opacity: 0.9,
          duration: 10,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        ellipseRefs.current[3],
        {
          scale: 1,
          y: "-=30",
          opacity: 0.9,
          duration: 15,
          ease: "power1.inOut",
        },
        "<"
      );

      tl.to(
        ellipseRefs.current[4],
        {
          scale: 1,
          y: "+=40",
          opacity: 0.9,
          duration: 12,
          ease: "sine.inOut",
        },
        "<"
      );
    }

    // Add hover effect on the container for additional interactivity
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth) * 100 - 50; // -50 to 50
        const yPos = (clientY / window.innerHeight) * 100 - 50; // -50 to 50

        // Subtle movement of ellipses based on mouse position
        ellipseRefs.current.forEach((ellipse, index) => {
          if (ellipse) {
            const intensity = (index + 1) * 0.2; // Different intensity for each ellipse
            gsap.to(ellipse, {
              x: xPos * intensity,
              y: yPos * intensity,
              duration: 1,
              ease: "power1.out",
              overwrite: "auto",
            });
          }
        });
      });
    }

    // Cleanup function
    return () => {
      tl.kill();
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", () => {});
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[140%] h-full absolute -top-[44%] -left-[23%] z-20 md:block hidden blur-[100px] overflow-hidden"
    >
      <div
        ref={(el) => {
          ellipseRefs.current[0] = el;
        }}
        className="glow-ellipse bg-lightBlack-desktop"
      ></div>
      <div
        ref={(el) => {
          ellipseRefs.current[1] = el;
        }}
        className="glow-ellipse bg-red-desktop"
      ></div>
      <div
        ref={(el) => {
          ellipseRefs.current[2] = el;
        }}
        className="glow-ellipse bg-red-desktop"
      ></div>
      <div
        ref={(el) => {
          ellipseRefs.current[3] = el;
        }}
        className="glow-ellipse bg-lightBlack-desktop"
      ></div>
      <div
        ref={(el) => {
          ellipseRefs.current[4] = el;
        }}
        className="glow-ellipse bg-lightBlack-desktop"
      ></div>
    </div>
  );
};

export default AnimatedGlowBackground;
