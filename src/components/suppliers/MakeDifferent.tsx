import React from "react";
import { BuildFieldIcon, OneSystemIcon, SingleFlowIcon } from "../common/Icons";
import { meke_Different } from "../common/Helper";
import Copy from "../common/Copy";

const MakeDifferent = () => {
  return (
    <section className="mx-auto max-w-[1224px] px-2 pb-6 md:py-8">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">
          What makes Contractor+ different
        </h3>
      </Copy>
      <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {meke_Different.map((problem) => (
          <article
            key={problem.id}
            className="relative flex flex-col items-center justify-center gap-3 p-2 md:p-5 lg:justify-start"
          >
            <span>{problem.icon}</span>
            <h3 className="problem-text text-center text-base leading-normal font-bold md:text-[22px] lg:text-3xl">
              {problem.title}
            </h3>

            <p className="text-stratoSphere text-center text-base font-semibold">
              {problem.description}
            </p>
            {problem.hasDivider && (
              <span className="absolute top-[46%] right-[50%] hidden h-full rotate-90 lg:top-0 lg:right-0 lg:block lg:rotate-none">
                <svg
                  width="1"
                  height="100%"
                  viewBox="0 0 1 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="122"
                    stroke="url(#paint0_radial_6727_9878)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_6727_9878"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-0.499998 61) scale(80.5 61)"
                    >
                      <stop stopColor="#999999" />
                      <stop offset="1" stopColor="#0C0D11" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default MakeDifferent;
