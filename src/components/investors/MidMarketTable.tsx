import React from "react";
import MidMarketDesktopCard from "./MidMarketDesktopCard";
import MidMarketMobileCard from "./MidMarketMobileCard";
import {
  CheckIcon,
  CloseIcon,
  GreenCrossIcon,
  Red2CrossIcon,
} from "../common/Icons";

export type IconType = "available" | "cross";

export interface FeatureItem {
  contractor: {
    icon: IconType;
    title: string;
    desc: string;
  };
  midMarket: {
    icon: IconType;
    desc: string;
  };
  enterprise: {
    icon: IconType;
    desc: string;
  };
}

const MidMarketTable: React.FC = () => {
  const features: FeatureItem[] = [
    {
      contractor: {
        icon: "available",
        title: "One connected platform",
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
        icon: "available",
        title: "Built mobile-first",
        desc: "Field teams actually use it.",
      },
      midMarket: {
        icon: "cross",
        desc: "Basic mobile apps that field teams don’t want to use.",
      },
      enterprise: {
        icon: "cross",
        desc: "Overbuilt for desktop, clunky in the field. Not intuitive for techs or crews.",
      },
    },
    {
      contractor: {
        icon: "available",
        title: "Onboard quickly",
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
        icon: "available",
        title: "Instant Sync",
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
        icon: "available",
        title: "Full access is $98/month",
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
  ];

  // ✅ Shared icon renderer
  const renderIcon = (type: IconType): React.ReactElement => {
    if (type === "available") {
      return (
        <span className="w-full max-w-[23px] sm:max-w-[14px]">
          <GreenCrossIcon />
        </span>
      );
    }

    return (
      <div>
        <span className="hidden sm:block">
          <Red2CrossIcon />
        </span>
        <span className="block sm:hidden">
          <CloseIcon width={24} height={24} />
        </span>
      </div>
    );
  };

  return (
    <div className="px-4 py-10">
      {/* Mobile View */}
      <div className="shadow-3xl border-winterWay relative z-40 mt-2 block overflow-hidden rounded-[6px] border md:hidden">
        <div className="grid grid-cols-3 pb-3">
          <div className="flex items-center justify-center p-2 font-semibold text-white">
            Contractor+
          </div>
          <div className="border-winterWay text-wallStreet border-x p-2 text-xs font-semibold">
            <h3 className="pb-1">Mid-Market</h3>
            <p>(Jobber, HCP, Joist)</p>
          </div>
          <div className="text-wallStreet p-2 text-xs font-semibold">
            <h3 className="pb-1">Enterprise</h3>
            <p>ServiceTitan, Procore, etc.</p>
          </div>
        </div>
        {features.map((item) => (
          <MidMarketMobileCard
            key={item.contractor.title}
            item={item}
            renderIcon={renderIcon}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="border-winterWay relative z-40 mx-auto mt-12 hidden max-w-[1029px] overflow-x-auto rounded-xl border md:block lg:mt-[51px]">
        <table className="min-w-full text-left">
          <thead>
            <tr className="font-myriad divide-winterWay divide-x text-white md:text-lg lg:text-xl">
              <th className="text-decemberSky w-1/3 p-5 text-center text-[28px] font-semibold">
                Contractor+
              </th>
              <th className="text-wallStreet w-1/3 p-5 text-center text-[28px] font-bold">
                <span>Mid-Market</span>
                <p className="pt-3 text-base font-semibold">
                  (Jobber, HCP, Joist)
                </p>
              </th>
              <th className="text-wallStreet w-1/3 p-5 text-center text-[28px] font-bold">
                <span>Enterprise</span>
                <p className="pt-3 text-base font-semibold">
                  ServiceTitan, Procore, etc.
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item) => (
              <MidMarketDesktopCard
                key={item.contractor.title}
                item={item}
                renderIcon={renderIcon}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MidMarketTable;
