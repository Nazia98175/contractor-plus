import React from "react";
import Copy from "../common/Copy";
import YouNeedFeaturesCard from "./YouNeedFeaturesCard";

const YouNeedIndustries = ({ industriesItem, title }: any) => {
  // const industriesItem = [
  //   {
  //     id: 1,
  //     slug: "/industries/general-contractor-software",
  //     text: "General Contractor",
  //   },
  //   {
  //     id: 2,
  //     slug: "/industries/drywall-contractor-software",
  //     text: "Drywall",
  //   },
  //   {
  //     id: 3,
  //     slug: "/industries/landscaping-management-software",
  //     text: "Landscaping",
  //   },
  //   {
  //     id: 4,
  //     slug: "/industries/carpenter-business-software",
  //     text: "Carpentry",
  //   },
  //   {
  //     id: 5,
  //     slug: "/industries/plumbing-business-software",
  //     text: "Plumbing",
  //   },
  //   {
  //     id: 6,
  //     slug: "/industries/mechanical-contractor-software",
  //     text: "Mechanical",
  //   },
  //   {
  //     id: 7,
  //     slug: "/industries/snow-removal-software",
  //     text: "Snow Removal",
  //   },
  //   {
  //     id: 8,
  //     slug: "/industries/carpet-cleaning-software",
  //     text: "Carpet Cleaning",
  //   },
  //   {
  //     id: 9,
  //     slug: "/industries/construction-management-software",
  //     text: "Construction",
  //   },
  //   {
  //     id: 10,
  //     slug: "",
  //     text: "Invoicing & Cleaning",
  //   },
  //   {
  //     id: 11,
  //     slug: "/industries/lawn-care-software",
  //     text: "Lawn Care",
  //   },
  //   {
  //     id: 12,
  //     slug: "/industries/chimney-sweep-business-software",
  //     text: "Chimney Sweeping",
  //   },
  //   {
  //     id: 13,
  //     slug: "/industries/hvac-contractor-software",
  //     text: "HVAC",
  //   },
  //   {
  //     id: 14,
  //     slug: "/industries/restoration-contractor-software",
  //     text: "Restoration",
  //   },
  //   { id: 15, slug: "/industries/paving-software", text: "Paving" },
  //   {
  //     id: 16,
  //     slug: "/industries/elevator-service-software",
  //     text: "Elevator",
  //   },
  //   {
  //     id: 17,
  //     slug: "/industries/remodeling-contractor-software",
  //     text: "Remodeling",
  //   },
  //   {
  //     id: 18,
  //     slug: "/industries/electrician-software",
  //     text: "Electrician",
  //   },
  //   {
  //     id: 19,
  //     slug: "/industries/solar-business-management-software",
  //     text: "Solar",
  //   },
  //   {
  //     id: 20,
  //     slug: "/industries/excavation-software",
  //     text: "Excavation",
  //   },
  //   {
  //     id: 21,
  //     slug: "/industries/painting-contractor-software",
  //     text: "Painting",
  //   },
  //   { id: 22, slug: "/industries/fence-software", text: "Fence" },
  //   {
  //     id: 23,
  //     slug: "/industries/janitorial-software",
  //     text: "Janitorial",
  //   },
  //   {
  //     id: 24,
  //     slug: "/industries/garage-door-software",
  //     text: "Garage Door",
  //   },
  //   {
  //     id: 25,
  //     slug: "/industries/roofing-contractor-software",
  //     text: "Roofing",
  //   },
  //   {
  //     id: 26,
  //     slug: "/industries/flooring-business-software",
  //     text: "Flooring",
  //   },
  //   {
  //     id: 27,
  //     slug: "/industries/irrigation-business-software",
  //     text: "Irrigation",
  //   },
  //   { id: 28, slug: "/industries/handyman-software", text: "Handyman" },
  //   {
  //     id: 29,
  //     slug: "/industries/junk-removal-business-software",
  //     text: "Junk Removal",
  //   },
  //   {
  //     id: 30,
  //     slug: "/industries/pest-control-software",
  //     text: "Pest Control",
  //   },
  //   {
  //     id: 31,
  //     slug: "/industries/crm-for-pressure-washing",
  //     text: "Pressure Washing",
  //   },
  //   {
  //     id: 32,
  //     slug: "/industries/septic-pumping-software",
  //     text: "Septic & Pump",
  //   },
  //   {
  //     id: 33,
  //     slug: "/industries/locksmith-software",
  //     text: "Locksmith",
  //   },
  //   {
  //     id: 34,
  //     slug: "/industries/pool-builder-software",
  //     text: "Pool & Spa",
  //   },
  //   {
  //     id: 35,
  //     slug: "",
  //     text: "Property Maintenance",
  //   },
  //   {
  //     id: 36,
  //     slug: "/industries/property-maintenance-software",
  //     text: "Small Engine Repair",
  //   },
  //   {
  //     id: 38,
  //     slug: "/industries/tile-estimating-software",
  //     text: "Tiling",
  //   },
  //   {
  //     id: 39,
  //     slug: "/industries/tree-care-software",
  //     text: "Tree Care",
  //   },
  //   {
  //     id: 40,
  //     slug: "/industries/window-cleaning-business-software",
  //     text: "Window Cleaning",
  //   },
  // ];
  return (
    <div>
      <Copy delay={0.2}>
        <h4 className="text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
          {title || "The industries we serve"}
        </h4>
      </Copy>
      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-[22px] md:mt-8">
        {industriesItem.map((featuresItems: any, index: number) => (
          <YouNeedFeaturesCard
            features={featuresItems}
            key={index}
            delay={index * 0.05}
          />
        ))}
      </div>
    </div>
  );
};

export default YouNeedIndustries;
