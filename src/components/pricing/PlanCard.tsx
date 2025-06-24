import React from "react";
import { ActivationIcon, LineIcon, ListIcon } from "../common/Icons";

interface PlanData {
  title: string;
  subtitle: string;
  monthlyPrice: number;
  note: string;
  cta: string;
  cardClass?: string;
  isPro?: boolean;
  isProTeam?: boolean;
  featuresHeading: string;
  features: string[];
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isAnnual }) => {
  const rawAnnualPrice = plan.monthlyPrice * 12;
  const discountedAnnualPrice = rawAnnualPrice * 0.6;

  const priceValue = isAnnual ? discountedAnnualPrice : plan.monthlyPrice;
  const formattedPrice = `$${priceValue.toFixed(0)}`;

  const suffix = isAnnual ? "/yr" : "/mo";
  return (
    <article
      className={`font-myriad rounded-lg bg-white pb-6 shadow-[0px_17px_33px_-2px_rgba(28,39,49,0.08)] ${plan.cardClass ?? ""}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="xs-heading text-wallStreet !font-bold">
              {plan.title}
            </h4>
            <p className="text-secondary text-sm">{plan.subtitle}</p>
          </div>
          {plan.isProTeam && <ActivationIcon />}
        </div>

        <h3 className="text-winterWay mt-8 text-[38px] leading-[122%] font-bold">
          {formattedPrice}
          <span className="text-secondary text-lg font-semibold">{suffix}</span>
        </h3>

        <div className="py-1.5">
          <LineIcon />
          <p className="text-wallStreet pt-2 text-xs font-medium">
            {plan.note}
          </p>
        </div>

        <button
          className={`my-6 flex h-10 w-full items-center justify-center rounded-lg font-semibold tracking-[0.1px] ${
            plan.isPro
              ? "border-winterWay text-wallStreet border bg-[#F5F5F5]"
              : plan.isProTeam
                ? "bg-[#FEE7E8] text-[#AC0D0E]"
                : "border-winterWay text-wallStreet border"
          }`}
        >
          {plan.cta}
        </button>

        <h5 className="text-secondary mb-3.5 text-base font-bold">
          {plan.featuresHeading}
        </h5>
        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="text-wallStreet flex items-center gap-3 text-sm"
            >
              <ListIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PlanCard;
