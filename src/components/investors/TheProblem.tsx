"use client";

import Copy from "../common/Copy";
import {
  HighCostIcon,
  PoorCommunicationIcon,
  WastedIcon,
} from "../common/Icons";

const problems = [
  {
    id: 1,
    title: "Wasted Time",
    icon: <WastedIcon />,
    hasDivider: true,
  },
  {
    id: 2,
    title: "Poor Communication",
    icon: <PoorCommunicationIcon />,
    hasDivider: true,
  },
  {
    id: 3,
    title: "High Costs",
    icon: <HighCostIcon />,
    hasDivider: false,
  },
];

const TheProblem = () => {
  return (
    <section className="relative z-20 mx-auto -mt-[230px] max-w-[1234px] px-4 sm:-mt-[393px]">
      <Copy animateOnScroll={true}>
        <h4 className="main-heading text-mana text-center">The problem</h4>
      </Copy>
      <Copy className="w-full" animateOnScroll={true}>
        <p className="text-ironFixture py-3 text-center text-sm font-semibold md:text-2xl">
          Contractors are still running modern businesses on outdated,
          overpriced, and fragmented software stacks. They’re duct-taping
          together 5–10 tools just to manage jobs, crews, scheduling, payments,
          and communication.
        </p>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-center text-sm font-semibold text-white md:text-2xl">
          The result?
        </p>
      </Copy>
      <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <article
            key={problem.id}
            className="relative flex flex-col items-center justify-center gap-3 p-5"
          >
            <span>{problem.icon}</span>
            <div className="investor-text-shadow">
              <p className="problem-text text-base leading-normal font-medium md:text-[22px]">
                {problem.title}
              </p>
            </div>

            {problem.hasDivider && (
              <span className="absolute top-[46%] right-[50%] rotate-90 lg:top-0 lg:right-0 lg:rotate-none">
                <svg
                  width="1"
                  height="122"
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
      <Copy animateOnScroll={true}>
        <p className="text-ironFixture pt-4 text-center text-lg font-medium">
          *The industry incumbents aren’t fixing it{" "}
          <span className="font-semibold text-white">
            {" "}
            — they ARE the problem.
          </span>
        </p>
      </Copy>
    </section>
  );
};

export default TheProblem;
