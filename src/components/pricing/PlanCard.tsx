import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import { usePathname } from "next/navigation";
import React from "react";
import { LineIcon, ListIcon } from "../common/Icons";
import PlanButton from "./PlanButton";

interface PlanData {
  title: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice?: number;
  lifetimePrice?: number;
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
  lifetimeFeatures?: {
    id: Number;
    label: string;
  }[];
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
  activeTab: string;
  index?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, activeTab, index }) => {
  let priceValue2 = 0;

  if (activeTab === "annual") {
    console.log(plan.annualPrice, "Annual tab is active");
    priceValue2 = Number(plan.annualPrice);
  } else if (activeTab === "monthly") {
    console.log(plan.monthlyPrice, "Monthly tab is active");
    priceValue2 = Number(plan.monthlyPrice);
  } else if (activeTab === "lifetime") {
    console.log(plan.lifetimePrice, "Lifetime tab is active");
    priceValue2 = Number(plan.lifetimePrice);
  }

  const formattedPrice2 = `$${priceValue2.toLocaleString("en-US")}`;
  const pathname = usePathname();
  const { handleRedirect } = useOneLinkRedirect();
  return (
    <article
      className={`font-myriad group xs:max-w-[317px] w-full cursor-pointer rounded-lg bg-white pb-6 shadow-xl duration-100 hover:-translate-y-2 ${plan.cardClass ?? ""} relative`}
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
          {plan?.ctaStyle === "proTeam" && (
            <span className="font-myriad bg-luchGray absolute top-0 right-0 rounded-[8px] px-2 py-1 text-[10px] font-semibold text-white">
              Most Popular!
            </span>
          )}
        </div>

        <h3
          className={`${index === 2 ? "text-blueGreen" : "text-winterWay"} md:mt-8" mt-5 text-[38px] !leading-[122%] font-bold`}
        >
          {formattedPrice2}
          <span className="text-secondary text-lg font-semibold">
            {activeTab === "lifetime" ? "/Lifetime" : "/mo"}
          </span>
        </h3>

        <div className="py-1.5">
          <LineIcon />
          <p
            className={`${index === 2 ? "pb-0" : ""} text-wallStreet font-inter pt-2 text-xs font-medium`}
          >
            {plan?.description && plan?.description}
          </p>
        </div>

        <PlanButton
          cta={`${plan?.ctaText && plan?.ctaText}`}
          onClick={() => handleRedirect({ pathname })}
          className="my-6"
          variant={
            plan?.ctaStyle === "pro"
              ? "pro"
              : plan?.ctaStyle === "proTeam"
                ? "lifetime"
                : "default"
          }
        />

        <h5 className="text-secondary mb-3.5 text-base leading-[130%] font-bold">
          {plan?.featuresTitle && plan?.featuresTitle}
        </h5>
        <ul className="space-y-4">
          {activeTab === "monthly" &&
            (plan?.monthlyFeatures ?? []).map((feature: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="text-wallStreet flex items-center gap-3 text-sm"
                >
                  <ListIcon />
                  {feature.label}
                </li>
              );
            })}
          {activeTab === "annual" &&
            (plan?.annualFeatures ?? []).map((feature: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="text-wallStreet flex items-center gap-3 text-sm"
                >
                  <ListIcon />
                  {feature.label}
                </li>
              );
            })}
          {activeTab === "lifetime" &&
            (plan?.lifetimeFeatures ?? []).map((feature: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="text-wallStreet flex items-center gap-3 text-sm"
                >
                  <ListIcon />
                  {feature.label}
                </li>
              );
            })}
          {/* {index === 2 && (
            <div>
              <h4 className="font-myriad text-roboMaster text-center text-lg font-semibold">
                <span className="text-customgreen">$53,400</span> more revenue
              </h4>
              <p className="font-myriad text-wallStreet text-center text-xs">
                (and this is just a conservative estimate)
              </p>
            </div>
          )} */}
        </ul>
      </div>
    </article>
  );
};

export default PlanCard;
