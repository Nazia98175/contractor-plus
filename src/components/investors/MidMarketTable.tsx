import React from "react";
import MidMarketDesktopCard from "./MidMarketDesktopCard";
import MidMarketMobile from "./MidMarketMobileCard";
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
      <MidMarketMobile features={features} renderIcon={renderIcon} />

      {/* Desktop View */}
      <MidMarketDesktopCard />
    </div>
  );
};

export default MidMarketTable;
