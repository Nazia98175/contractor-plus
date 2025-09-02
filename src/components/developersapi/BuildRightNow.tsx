import React from "react";
import BuildRightNowCard from "./BuildRightNowCard";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import {
  BuildLocationIcon,
  CommunicationsIcon,
  ContactIcon,
  EstimatesQuotesIcon,
  ExpensesIcon,
  GradientLineIcon,
  InvoiceIcon,
  JobIcon,
  OpportunitiesIcon,
  RequestsIcon,
  WorkOrderIcon,
} from "../common/Icons";

const BuildRightNow = () => {
  const buildCards = [
    {
      icon: <ContactIcon />,
      title: "Contacts",
      features: [
        "List contacts (Leads, Clients, etc.)",
        "Import/Export your CRM data",
        "Attach files & documents to notes",
        "Update contact information",
      ],
    },
    {
      icon: <BuildLocationIcon />,
      title: "Properties / Service Addresses",
      features: [
        "List properties",
        "Add, edit, remove properties",
        "Manage tenant/occupant",
        "Add notes",
        "Attach files & documents",
        "Assign contacts",
      ],
      rightLine: true,
      leftLine: true,
    },
    {
      icon: <JobIcon />,
      title: "Jobs / Projects",
      features: [
        "List jobs",
        "Add, edit, remove jobs",
        "Add visits",
        "Manage phases, tasks & subtasks",
        "Add documents",
        "Add notes",
        "Add job contacts",
      ],
    },
    {
      icon: <WorkOrderIcon />,
      title: "Work Orders",
      features: [
        "List work orders",
        "Add, edit, remove work orders",
        "Add notes",
        "Add documents",
        "Assign / delegate / schedule work orders",
      ],
    },
    {
      icon: <EstimatesQuotesIcon />,
      title: "Estimates / Quotes",
      features: [
        "List estimates",
        "Add, edit, delete estimates",
        "Create AI Estimate",
        "Add documents",
        "Add photos",
      ],
      rightLine: true,
      leftLine: true,
    },
    {
      icon: <InvoiceIcon />,
      title: "Invoices",
      features: ["List invoices", "Add, edit, delete invoices"],
    },
    {
      icon: <ExpensesIcon />,
      title: "Expenses",
      features: ["List expenses", "Add, edit, delete expenses"],
    },
    {
      icon: <RequestsIcon />,
      title: "Requests",
      features: ["List requests", "Add, edit, delete requests"],
      rightLine: true,
      leftLine: true,
    },
    {
      icon: <OpportunitiesIcon />,
      title: "Opportunities",
      features: [
        "List opportunities",
        "Add, edit, delete opportunities",
        "Move opportunities between pipeline stages",
      ],
    },
    {
      icon: <CommunicationsIcon />,
      title: "Communications (Coming Soon)",
      features: ["Send email", "Send SMS"],
    },
  ];

  return (
    <section className="mx-auto mt-20 w-full max-w-[1222px] px-2 sm:mt-[120px] md:mt-[150px] lg:mt-[197px]">
      <AdaptiveHeroTitle
        title="What you can build right now"
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
        {buildCards.map((card, index) => {
          const isLastSingle =
            index === buildCards.length - 1 && buildCards.length % 3 === 1;

          return (
            <div
              key={index}
              className={`flex w-full justify-between ${
                isLastSingle ? "justify-center lg:col-span-3" : ""
              }`}
            >
              {card?.leftLine && (
                <div className="hidden lg:block">
                  <GradientLineIcon />
                </div>
              )}
              <BuildRightNowCard
                title={card.title}
                icon={card.icon}
                features={card.features}
              />
              {card?.rightLine && (
                <div className="hidden lg:block">
                  <GradientLineIcon />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BuildRightNow;
