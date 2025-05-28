import React from "react";
import TextAnimation from "../common/TextAnimation";
import { RedCurveLine } from "../common/Icons";

const curvePositions = [0, 50, 100];

const WantingMore = () => {
  return (
    <section>
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="section-heading gradient-text-2 z-30 mx-auto w-fit max-w-[1004px] text-center !font-black lg:!font-semibold">
          Contractor+ is the only HVAC software that doesn’t leave you still
          wanting more
        </h2>
      </TextAnimation>

      <div className="relative mt-24 flex h-screen flex-col items-center justify-center bg-[url('/images/webp/blur-bg.webp')] bg-cover bg-no-repeat">
        {curvePositions.map((topOffset, index) => (
          <span
            key={index}
            className="absolute -left-[2%] z-30 block w-[108%]"
            style={{ top: `${topOffset}px` }}
          >
            <RedCurveLine />
          </span>
        ))}

        <div className="wanting-more-bg h-96 w-full max-w-[1232px]"></div>
      </div>
    </section>
  );
};

export default WantingMore;
