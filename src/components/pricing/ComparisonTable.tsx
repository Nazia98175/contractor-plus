"use client";
import React, { useState } from "react";
import PlanButton from "./PlanButton"; // Ensure this component is defined
import AnimateHeight from "react-animate-height";
import {
  CheckIcon,
  CloseIcon,
  DownArrowIcon,
  UpArrowIcon,
} from "../common/Icons";
import {
  ArrowDown01,
  ArrowDownCircle,
  ArrowDownNarrowWide,
  ChevronDown,
} from "lucide-react";

interface Feature {
  name: string;
  description: string;
  available: boolean[];
}

interface Plan {
  name: string;
  cta: string;
  variant: "default" | "pro" | "proTeam";
}

const ComparisonTable: React.FC = () => {
  const plans: Plan[] = [
    { name: "Freedom", cta: "Start for free", variant: "default" },
    { name: "PRO", cta: "Get started", variant: "pro" },
    { name: "PRO Team", cta: "Get started", variant: "proTeam" },
  ];

  const features: Feature[] = [
    {
      name: "Track Your Leads & Clients",
      description:
        "Track leads, clients, subs, vendors, tenants, and over 50+ 'contact types' so you maintain a comprehensive communication history with every point of contact that's relevant to your business.",
      available: [true, true, false],
    },
    {
      name: "Opportunities Kanban",
      description:
        "Can track your deal flow using the Opportunities Kanban. This gives you a clear view of how your business is performing, and how much value each pipeline stage. Never let an opportunity slip through the cracks again.",
      available: [false, true, true],
    },
  ];

  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>(
    features.reduce((acc, _, index) => ({ ...acc, [index]: true }), {}),
  );

  const toggleCollapse = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="font-myriad mx-auto mt-[106px] w-full max-w-[1092px]">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="text-wallStreet w-1/4 px-8 py-5 text-center text-2xl font-bold">
              Compare plans
            </th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className="group border-decemberSky w-1/4 border-l px-8 py-5 text-center"
              >
                <span className="text-winterWay text-2xl text-[28px] font-semibold">
                  {plan.name}
                </span>
                <PlanButton
                  cta={plan.cta}
                  variant={plan.variant}
                  className="mt-3.5"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={4}
              className="text-winter bg-superSilver border-secondary border-b px-3.5 py-3 text-start text-base leading-[115%] font-bold"
            >
              Lead & Client Management
            </td>
          </tr>
          {features.map((feature, index) => (
            <tr
              key={index}
              className={`${index === features.length - 1 ? "" : "border-b"} border-decemberSky`}
            >
              <td className="border-r border-gray-300">
                <div
                  className={`flex h-full cursor-pointer items-center justify-between gap-3 px-5 pt-3 pb-3`}
                  onClick={() => toggleCollapse(index)}
                >
                  <span className="text-winterWay text-base">
                    {feature.name}
                  </span>
                  <span
                    className={`transform ${
                      openStates[index] ? "rotate-0" : "rotate-180"
                    } transition-transform`}
                  >
                    <ChevronDown width={20} color="#656C73" />
                  </span>
                </div>

                <AnimateHeight
                  id="example-panel"
                  duration={500}
                  height={openStates[index] ? "auto" : 0}
                >
                  <p className="text-wallStreet max-w-[223px] pb-3 pl-5 text-xs">
                    {feature.description}
                  </p>
                </AnimateHeight>
              </td>
              {feature.available.map((avail, idx) => (
                <td
                  key={idx}
                  className="border-r border-gray-300 px-5 py-3 text-center"
                >
                  {avail && (
                    <span className="flex items-center justify-center">
                      <CheckIcon width={24} height={24} />
                    </span>
                  )}
                  {!avail && (
                    <span className="flex items-center justify-center">
                      <CloseIcon width={24} height={24} />
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;
