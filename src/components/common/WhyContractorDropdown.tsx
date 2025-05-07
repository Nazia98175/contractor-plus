import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowIcon } from "./Icons";

const WhyContractorDropdown = () => {
  const links = [
    {
      label: "CRM",
      description: "Manage Leads & Clients Effortlessly",
      href: "/",
    },
    {
      label: "Field Service Management",
      description: "Organize Jobs, Teams & Real-Time Updates",
      href: "/",
    },
    {
      label: "Project Management",
      description: "Simplify Projects, Timelines & Tasks Easily",
      href: "/",
    },
    {
      label: "Estimate AI",
      description: "Smart & Accurate, Winning Project Estimations",
      href: "/",
    },
    {
      label: "Bid Cloud AI",
      description: "Real-Time Insights for Smarter Decisions",
      href: "/",
    },
    {
      label: "Lead Generation",
      description: "Find More Customers To Grow Your Business",
      href: "/",
    },
    {
      label: "Bookkeeping",
      description: "Organize Finances, Simplify Your Accounting",
      href: "/",
    },
    { label: "Features", description: "", href: "/" },
    {
      label: "Estimates & Quotes",
      description: "Fast, Accurate, Winning Bids Made Easy",
      href: "/",
    },
    {
      label: "Deal Flow Tracking",
      description: "Visualize Your Sales Sales Pipeline",
      href: "/",
    },
    {
      label: "Scheduling",
      description: "Optimize Team Efficiency & Job Assignments",
      href: "/",
    },
    {
      label: "Client Portal",
      description: "Simple, Secure Project Access for Clients",
      href: "/",
    },
    {
      label: "Invoicing & Collections",
      description: "Automate Invoicing & Get Paid Faster",
      href: "/",
    },
    {
      label: "Two-Way Communications",
      description: "Centralized Team & Client Conversations",
      href: "/",
    },
    {
      label: "Time Clock",
      description: "GPS Verified Time Tracking For The Whole Team",
      href: "/",
    },
    {
      label: "Mileage Tracking",
      description: "Automatically Track & Maximize Mileage Deductions",
      href: "/",
    },
    {
      label: "Asset Tracking",
      description: "Monitor Equipment, Prevent Costly Losses",
      href: "/",
    },
    {
      label: "Reporting",
      description: "Insights to Boost Efficiency & Profits",
      href: "/",
    },
    {
      label: "PRO Website",
      description: "Showcase Your Business & Attract Customers",
      href: "/",
    },
    {
      label: "Payments",
      description: "Online, In-person, QR & ACH + Instant payouts!",
      href: "/",
    },
    {
      label: "Property Profiles",
      description: "Remember Your Property Maintenance",
      href: "/",
    },
  ];

  return (
    <article className="flex flex-col justify-between p-2 gap-6 grow ">
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
              <span className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white">
                {link.label}
              </span>
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

export default WhyContractorDropdown;
