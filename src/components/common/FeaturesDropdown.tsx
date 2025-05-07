import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowIcon,
  AssetIcon,
  BigChiefAIIcon,
  BookkeepingIcon,
  ClientIcon,
  EstimatesIcon,
  EstimaticIcon,
  FieldServiceIcon,
  InvoicingIcon,
  LeadGenerationIcon,
  PaymentsIcon,
  PROIcon,
  ProjectIcon,
  PropertyIcon,
  ReportingIcon,
  SchedulingIcon,
  ServiceIcon,
  TelephoneIcon,
  TimeIcon,
  TrackingIcon,
  TrophyIcon,
} from "./Icons";

const FeaturesDropdown = () => {
  const links = [
    {
      label: "CRM",
      description: "Manage Leads & Clients Effortlessly",
      href: "/",
      icon: <ServiceIcon />,
    },
    {
      label: "Estimates & Quotes",
      description: "Organize Jobs, Teams & Real-Time Updates",
      href: "/",
      icon: <EstimatesIcon />,
    },
    {
      label: "Mileage Tracking",
      description: "Simplify Projects, Timelines & Tasks Easily",
      href: "/",
      icon: <TrackingIcon />,
    },
    {
      label: "Field Service Management",
      description: "Smart & Accurate, Winning Project Estimations",
      href: "/",
      icon: <FieldServiceIcon />,
    },
    {
      label: "Deal Flow Tracking",
      description: "Real-Time Insights for Smarter Decisions",
      href: "/",
      icon: <TrophyIcon />,
    },
    {
      label: "Asset Tracking",
      description: "Find More Customers To Grow Your Business",
      href: "/",
      icon: <AssetIcon />,
    },
    {
      label: "Project Management",
      description: "Organize Finances, Simplify Your Accounting",
      href: "/",
      icon: <ProjectIcon />,
    },
    {
      label: "Scheduling",
      description: "Organize Finances, Simplify Your Accounting",
      icon: <SchedulingIcon />,
      href: "/",
    },
    {
      label: "Reporting",
      description: "Fast, Accurate, Winning Bids Made Easy",
      href: "/",
      icon: <ReportingIcon />,
    },
    {
      label: "Estimatic AI",
      description: "Visualize Your Sales Sales Pipeline",
      href: "/",
      icon: <EstimaticIcon />,
    },
    {
      label: "Client Portal",
      description: "Optimize Team Efficiency & Job Assignments",
      href: "/",
      icon: <ClientIcon />,
    },
    {
      label: "PRO Website",
      description: "Simple, Secure Project Access for Clients",
      href: "/",
      icon: <PROIcon />,
    },
    {
      label: "Big Chief AI",
      description: "Automate Invoicing & Get Paid Faster",
      href: "/",
      icon: <BigChiefAIIcon />,
    },
    {
      label: "Invoicing & Collections",
      description: "Centralized Team & Client Conversations",
      href: "/",
      icon: <InvoicingIcon />,
    },
    {
      label: "Payments",
      description: "GPS Verified Time Tracking For The Whole Team",
      href: "/",
      icon: <PaymentsIcon />,
    },
    {
      label: "Lead Generation",
      description: "Automatically Track & Maximize Mileage Deductions",
      href: "/",
      icon: <LeadGenerationIcon />,
    },
    {
      label: "Two-Way Communication",
      description: "Monitor Equipment, Prevent Costly Losses",
      href: "/",
      icon: <TelephoneIcon />,
    },
    {
      label: "Property Profiles",
      description: "Insights to Boost Efficiency & Profits",
      href: "/",
      icon: <PropertyIcon />,
    },
    {
      label: "Bookkeeping",
      description: "Showcase Your Business & Attract Customers",
      href: "/",
      icon: <BookkeepingIcon />,
    },
    {
      label: "Time Clock",
      description: "Online, In-person, QR & ACH + Instant payouts!",
      href: "/",
      icon: <TimeIcon />,
    },
  ];

  return (
    <article className="flex flex-col justify-between p-2 gap-6 grow ">
      <div className="grid grid-cols-3 gap-6  text-sm italic font-semibold  text-lightBlack font-inter">
        <h3 className="px-5">Solutions</h3>
        <h3 className="px-5 ">Features</h3>
      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-3 w-full overflow-auto">
        {links.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-300 ease-linear p-[6px]"
            key={index}
          >
            <Link
              href={link.href}
              className="group group-hover:bg-lightBlack group-hover:!text-white"
            >
              <div className="flex gap-2.5 items-center">
                <span>{link.icon}</span>
                <span className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white">
                  {link.label}
                </span>
              </div>
              <p className="text-sm font-inter text-lightBlack mt-2.5">
                {link.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-6 p-[6px]">
        <Link
          className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
          href={"/"}
        >
          See All Features
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
            href={"/"}
          >
            Integrations
            <ArrowIcon />
          </Link>
          <Link
            className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
            href={"/"}
          >
            Product Updates
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturesDropdown;
