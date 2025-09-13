import React from "react";
import { GreenCrossIcon, Red2CrossIcon } from "../common/Icons";

const MidMarketTable = () => {
  const tableData = {
    headers: [
      {
        title: "Contractor+",
      },
      {
        title: "Mid-market tools",
        subText: "Our approach",
      },
      {
        title: "Enterprise tools",
        subText: "Our approach",
      },
    ],
    features: [
      {
        contractor: {
          title: "One connected platform",
          icon: "available",
          desc: "CRM, estimates, payments, project management, business phone, job costing, agreements & more",
        },
        midMarket: {
          icon: "cross",
          desc: "Partial tools cobbled together. Still need 3–5 other apps connected by middleware or time consuming integrations to run your business.",
        },
        enterprise: {
          icon: "cross",
          desc: "Partial tools cobbled together. Still need 3–5 other apps connected by middleware or time consuming integrations to run your business.",
        },
      },
      {
        contractor: {
          title: "Built mobile-first",
          icon: "available",
          desc: "Field teams actually use it.",
        },
        midMarket: {
          icon: "cross",
          desc: "Basic mobile apps that field teams don't want to use.",
        },
        enterprise: {
          icon: "cross",
          desc: "Overbuilt for desktop, clunky in the field. Not intuitive for techs or crews.",
        },
      },
      {
        contractor: {
          title: "Onboard quickly",
          icon: "available",
          desc: "No learning curve. Crews and office up and running on Day 1.",
        },
        midMarket: {
          icon: "cross",
          desc: "Easy to start, but hits a ceiling fast. Growth means switching later.",
        },
        enterprise: {
          icon: "cross",
          desc: "Months-long onboarding, training required. Complex setups kill momentum.",
        },
      },
      {
        contractor: {
          title: "Instant Sync",
          icon: "available",
          desc: "Between office, field, and customer. True command center.",
        },
        midMarket: {
          icon: "cross",
          desc: "Data lives in silos. No real-time visibility or job-level margin tracking.",
        },
        enterprise: {
          icon: "cross",
          desc: "Data lives in silos. No real-time visibility or job-level margin tracking.",
        },
      },
      {
        contractor: {
          title: "Full access is $98/month",
          icon: "available",
          desc: "Which includes 2 users. Low additional fee per added user. No gatekeeping features.",
        },
        midMarket: {
          icon: "cross",
          desc: "Best features are hidden behind expensive plans. Less expensive team plans are very basic.",
        },
        enterprise: {
          icon: "cross",
          desc: "Sticker shock. High per-user fees, contracts, surprise add-ons. Cost prohibitive for the lower and middle market.",
        },
      },
    ],
  };

  return (
    <div className="border-winterWay relative z-40 mx-auto mt-12 hidden max-w-[1029px] overflow-x-auto rounded-xl border md:block lg:mt-[51px]">
      <table className="min-w-full text-left">
        <thead>
          <tr className="font-myriad divide-winterWay divide-x md:text-lg lg:text-xl">
            {tableData.headers.map((header, index) => (
              <th
                key={index}
                className={`p-2.5 text-center lg:px-5 lg:py-3 ${
                  index === 0
                    ? "font-semibold text-white"
                    : index === 1
                      ? "text-wallStreet font-bold"
                      : index === 2
                        ? "text-wallStreet font-bold"
                        : "text-white"
                }`}
              >
                <span>{header.title}</span>
                {header.subText && (
                  <p className="pt-3 text-base !font-semibold">
                    {header.subText}
                  </p>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.features.map((item, index) => (
            <tr
              key={index}
              className="text-winterWay font-jakarta divide-winterWay border-winterWay divide-x border-t text-xs font-semibold sm:text-sm lg:text-base"
            >
              {/* Contractor+ */}
              <td className="p-2.5 text-center lg:px-5 lg:py-3">
                {item.contractor.icon === "available" && (
                  <div className="mx-auto mb-1 flex w-fit items-center gap-2">
                    <p className="mx-auto flex w-3">
                      <GreenCrossIcon />
                    </p>
                    <h3 className="text-decemberSky text-lg font-semibold">
                      {item.contractor.title}
                    </h3>
                  </div>
                )}
                <p className="text-wallStreet text-center text-xs font-medium">
                  {item.contractor.desc}
                </p>
              </td>

              {/* Mid-Market */}
              <td className="p-2.5 lg:px-5 lg:py-3">
                <div className="flex flex-col items-center">
                  {item.midMarket.icon === "cross" && (
                    <span className="mb-2 hidden w-fit sm:block">
                      <Red2CrossIcon />
                    </span>
                  )}
                  <p className="text-wallStreet text-center text-xs font-medium">
                    {item.midMarket.desc}
                  </p>
                </div>
              </td>

              {/* Enterprise */}
              <td className="p-2.5 lg:px-5 lg:py-3">
                <div className="flex flex-col items-center">
                  {item.enterprise.icon === "cross" && (
                    <span className="mb-2 hidden w-fit sm:block">
                      <Red2CrossIcon />
                    </span>
                  )}
                  <p className="text-wallStreet text-center text-xs font-medium">
                    {item.enterprise.desc}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MidMarketTable;
