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
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isAnnual }) => {
  const priceValue =
    isAnnual && plan.annualPrice !== undefined
      ? Number(plan.annualPrice)
      : Number(plan.monthlyPrice);
  const formattedPrice = `$${priceValue.toFixed(0)}`;

  return (
    <article
      className={`font-myriad group xs:max-w-[317px] w-full cursor-pointer rounded-lg bg-white pb-6 shadow-[0px_17px_33px_-2px_rgba(28,39,49,0.08)] duration-300 hover:-translate-y-2 ${plan.cardClass ?? ""}`}
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
          {plan?.ctaStyle === "proTeam" && <ActivationIcon />}
        </div>

        <h3 className="text-winterWay mt-5 text-[38px] !leading-[122%] font-bold md:mt-8">
          {formattedPrice}
          <span className="text-secondary text-lg font-semibold">/mo</span>
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
          {plan?.monthlyFeatures &&
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
        </ul>
      </div>
    </article>
  );
};

export default PlanCard;
