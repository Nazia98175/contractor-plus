"use client";
import React, { useState } from "react";
import PlanButton from "./PlanButton"; // Ensure this component is defined

interface Feature {
  name: string;
  description: string;
  available: boolean[];
}

interface Plan {
  name: string;
  cta: string;
  variant: string;
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
      available: [true, true, true],
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
            <tr key={index}>
              <td
                className="border border-gray-300 p-4"
                style={{
                  width: "25%",
                  transition: "max-height 0.3s ease-in-out",
                  overflow: "hidden",
                  maxHeight: openStates[index] ? "200px" : "50px",
                }}
              >
                <div
                  className="flex cursor-pointer items-center"
                  onClick={() => toggleCollapse(index)}
                >
                  <span
                    className={`text-winter text-base font-bold ${
                      !openStates[index] && "hidden"
                    }`}
                  >
                    {feature.name}
                  </span>
                  <span
                    className={`ml-2 transform ${
                      openStates[index] ? "rotate-0" : "rotate-180"
                    } transition-transform`}
                  >
                    ▼
                  </span>
                  {!openStates[index] && (
                    <div className="w-full text-center text-green-500">✔</div>
                  )}
                </div>
                {openStates[index] && (
                  <p className="mt-2 text-sm text-gray-600">
                    {feature.description}
                  </p>
                )}
              </td>
              {feature.available.map((avail, idx) => (
                <td
                  key={idx}
                  className="border border-gray-300 p-4 text-center"
                >
                  {avail && <span className="text-green-500">✔</span>}
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
