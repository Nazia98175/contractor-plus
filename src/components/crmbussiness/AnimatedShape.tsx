import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface AnimatedShapeProps {
  className?: string;
}

const AnimatedShape: React.FC<AnimatedShapeProps> = ({ className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const startRotation = isMobile ? -5 : -20;
    const endRotation = isMobile ? -20 : 10;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut", duration: 20 },
    });

    tl.fromTo(
      containerRef.current,
      { rotation: startRotation },
      { rotation: endRotation },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute top-[-7%] -left-[25%] h-[130%] w-[150%] ${className}`}
    >
      <div className="rectangle-shape absolute bottom-[-15%] h-full w-full object-cover sm:-bottom-0"></div>
    </div>
  );
};

export default AnimatedShape;
