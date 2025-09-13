"use client";

import Copy from "../common/Copy";
import TheProblemCard from "./TheProblemCard";

// const problems = [
//   {
//     id: 1,
//     title: "Wasted Time",
//     icon: <WastedIcon />,
//     hasDivider: true,
//   },
//   {
//     id: 2,
//     title: "Poor Communication",
//     icon: <PoorCommunicationIcon />,
//     hasDivider: true,
//   },
//   {
//     id: 3,
//     title: "High Costs",
//     icon: <HighCostIcon />,
//     hasDivider: false,
//   },
// ];
interface ProblemItem {
  text: string;
  icon?: any;
}

interface TheProblemProps {
  title?: string | null;
  desc?: string | null;
  subBoldTitle?: string | null;
  subBoldDesc?: string | null;
  subDesc?: string | null;
  items: ProblemItem[];
}
const TheProblem: React.FC<TheProblemProps> = ({
  items,
  title,
  desc,
  subBoldTitle,
  subBoldDesc,
  subDesc,
}) => {
  return (
    <section className="relative z-20 mx-auto -mt-[230px] max-w-[1234px] px-4 sm:-mt-[393px]">
      <Copy animateOnScroll={true}>
        <h4 className="main-heading text-mana text-center">
          {title || "The problem"}
        </h4>
      </Copy>
      <Copy className="w-full" animateOnScroll={true}>
        <p className="text-ironFixture py-3 text-center text-sm font-semibold md:text-2xl">
          {desc ||
            "Contractors are still running modern businesses on outdated, overpriced, and fragmented software stacks.They’re duct-taping together 5–10 tools just to manage jobs, crews, scheduling, payments, and communication."}
        </p>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-center text-sm font-semibold text-white md:text-2xl">
          {subBoldTitle || "The result?"}
        </p>
      </Copy>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6">
        {items.map((problem, index) => {
          const isLast = index === items.length - 1;
          const isRowLast = (index + 1) % 3 === 0;
          return (
            <article
              key={index}
              className={`900:w-[32%] 900:border-r 900:border-[#6a6a6c] flex w-full justify-between sm:w-[48%] ${isLast || isRowLast ? "900:border-r-0" : ""}`}
            >
              <TheProblemCard text={problem.text} icon={problem.icon} />
            </article>
          );
        })}
      </div>
      <Copy animateOnScroll={true}>
        <p className="text-ironFixture pt-4 text-center text-lg font-medium">
          {subBoldDesc || "*The industry incumbents aren’t fixing it"}{" "}
          <span className="font-semibold text-white">
            {subDesc || " — they ARE the problem."}
          </span>
        </p>
      </Copy>
    </section>
  );
};

export default TheProblem;
