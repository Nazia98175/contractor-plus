import React from "react";
import { ActivationIcon, LineIcon, ListIcon } from "../common/Icons";
import PlanButton from "./PlanButton";

interface PlanData {
  title: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice?: number;
  note: string;
  cta: string;
  cardClass?: string;
  isPro?: boolean;
  annuallyPrice?: number;
  isProTeam?: boolean;
  featuresHeading: string;
  features: string[];
  userLimit?: string;
  ctaStyle?: string;
  ctaText?: string;
  description?: string;
  featuresTitle?: string;
  monthlyFeatures?: {
    id: Number;
    label: string;
  }[];
  annualFeatures?: {
    id: Number;
    label: string;
  }[];
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
  activeTab: string;
}

const PlanCard2: React.FC<PlanCardProps> = ({ plan, isAnnual, activeTab }) => {
  console.log(plan, "plan details in plan card 2");

  const priceValue =
    isAnnual && plan.annualPrice !== undefined
      ? Number(plan.annualPrice)
      : Number(plan.monthlyPrice);
  const formattedPrice = `$${priceValue.toFixed(0)}`;
  console.log(plan, "plan details");

  let priceValue2 = 0;

  if (activeTab === "annual") {
    console.log(plan.annualPrice, "Annual tab is active");
    priceValue2 = Number(plan.annualPrice ?? 0);
  } else if (activeTab === "monthly") {
    console.log(plan.monthlyPrice, "Monthly tab is active");
    priceValue2 = Number(plan.monthlyPrice ?? 0);
  } else if (activeTab === "lifetime") {
    console.log(plan.annualPrice, "Lifetime tab is active");
    priceValue2 = Number(plan.annualPrice ?? 0);
  }

  const formattedPrice2 = `$${priceValue2.toFixed(0)}`;

  return (
    <article
      className={`font-myriad group xs:max-w-[317px] w-full cursor-pointer rounded-lg bg-white pb-6 shadow-xl duration-100 hover:-translate-y-2 ${plan.cardClass ?? ""}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-wallStreet text-[22px] leading-[120%] !font-bold">
              {plan.title}
            </h4>
            <p className="text-secondary text-sm leading-[125%]">
              {plan?.userLimit ?? ""}
            </p>
          </div>
          <span className="rounded-[0 8px] font-myriad bg-[#252525] px-2 py-1 text-lg font-semibold text-[#CD3E3F]">
            Only 500 licenses available!
          </span>
        </div>

        <h3 className="text-winterWay mt-5 text-[38px] !leading-[122%] font-bold md:mt-8">
          {formattedPrice2}
          <span className="text-secondary text-lg font-semibold">
            {activeTab === "lifetime" ? "/Lifetime" : "/mo"}
          </span>
        </h3>

        <div className="py-1.5">
          <LineIcon />
          <p className="text-wallStreet font-inter pt-2 text-xs font-medium">
            {plan?.description && plan?.description}
          </p>
        </div>

        <PlanButton
          cta={`${plan?.ctaText && plan?.ctaText}`}
          className="my-6"
          variant={
            plan?.ctaStyle === "pro"
              ? "pro"
              : plan?.ctaStyle === "proTeam"
                ? "proTeam"
                : "default"
          }
        />

        <h5 className="text-secondary mb-3.5 text-base leading-[130%] font-bold">
          {plan?.featuresTitle && plan?.featuresTitle}
        </h5>
        <ul className="space-y-4">
          {!isAnnual &&
            plan?.monthlyFeatures &&
            plan?.monthlyFeatures.map((feature: any, idx: number) => {
              // const isAdditionalUser = feature === "additionalUser";
              // const userPrice = isAnnual ? plan.annuallyPrice : plan.monthlyPrice;

              return (
                <li
                  key={idx}
                  className="text-wallStreet flex items-center gap-3 text-sm"
                >
                  <ListIcon />
                  {feature.label}
                  {/* {isAdditionalUser
                    ? `$${userPrice}/month per additional user`
                    : feature} */}
                </li>
              );
            })}
          {isAnnual &&
            plan?.annualFeatures &&
            plan?.annualFeatures.map((feature: any, idx: number) => {
              // const isAdditionalUser = feature === "additionalUser";
              // const userPrice = isAnnual ? plan.annuallyPrice : plan.monthlyPrice;

              return (
                <li
                  key={idx}
                  className="text-wallStreet flex items-center gap-3 text-sm"
                >
                  <ListIcon />
                  {feature.label}
                  {/* {isAdditionalUser
                    ? `$${userPrice}/month per additional user`
                    : feature} */}
                </li>
              );
            })}
        </ul>
      </div>
    </article>
  );
};

export default PlanCard2;
