import React from "react";
import { ActivationIcon, LineIcon, ListIcon } from "../common/Icons";

const planData = [
  {
    title: "Freedom",
    subtitle: "Free forever",
    price: "$0",
    note: "Just Starting",
    cta: "Start for free",
    featuresHeading: "Features Included :",
    features: [
      "Manage leads & clients",
      "Unlimited estimates & invoices",
      "Custom logo",
      "National average material pricing",
      "Multiple workspaces",
      "Available on web, mobile & tablet",
    ],
    buttonClass: "",
    cardClass: "",
  },
  {
    title: "PRO",
    subtitle: "1 user",
    price: "$29",
    note: "For Solopreneurs",
    cta: "Get started",
    featuresHeading: "Everything in FREEDOM +",
    features: [
      "Optional line items & add-ons",
      "Requests & scheduling",
      "Client portal",
      "Live local cost data",
      "Email, SMS, and voice",
      "PRO website included",
    ],
    isPro: true,
    cardClass: "",
  },
  {
    title: "PRO Team",
    subtitle: "Up to 5 users",
    price: "$95",
    note: "For Teams",
    cta: "Get started",
    featuresHeading: "Everything in PRO +",
    features: [
      "$29/month per additional user",
      "Manage team / employees",
      "Personal, group & client chats",
      "Custom URL & branding",
      "Connect Quickbooks Online",
    ],
    isProTeam: true,
    cardClass: "",
  },
];

const PlanCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {planData.map((plan, index) => (
        <article
          key={index}
          className={`font-myriad rounded-lg bg-white pb-6 shadow-[0px_17px_33px_-2px_rgba(28,39,49,0.08)] ${plan.cardClass}`}
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
              {plan.price}{" "}
              <span className="text-secondary text-lg font-semibold">/mo</span>
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
      ))}
    </div>
  );
};

export default PlanCard;
