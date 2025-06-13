import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedShape = () => {
  const containerRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current, { rotation: -20 });

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut", duration: 4 },
    });

    tl.to(containerRef.current, {
      rotation: 10,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-[-7%] -left-[25%] h-[130%] w-[150%]"
    >
      <div
        ref={shape1Ref}
        className="rectangle-shape absolute -bottom-0 h-full w-full object-cover"
      ></div>
    </div>
  );
};

export default AnimatedShape;
