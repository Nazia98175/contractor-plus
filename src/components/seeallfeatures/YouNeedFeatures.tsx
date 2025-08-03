import Image from "next/image";
import { CrmIcon } from "../common/MainIcon";
import YouNeedFeaturesCard from "./YouNeedFeaturesCard";
import {
  BookPingIcon,
  FieldServiceIcon,
  LeadGenerationIcon,
} from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";

const YouNeedFeatures = () => {
  const featuresItems = [
    { id: 1, icon: <CrmIcon />, path: "/crm", description: "CRM" },
    {
      id: 2,
      icon: <FieldServiceIcon />,
      path: "/field-service",
      description: "Field Service Management",
    },
    {
      id: 3,
      icon: <FieldServiceIcon />,
      path: "/project-management",
      description: "Management",
    },
    {
      id: 4,
      icon: <LeadGenerationIcon />,
      path: "/lead-generation",
      description: "Lead Generation",
    },
    { id: 5, icon: <BookPingIcon />, path: "/", description: "Bookkeeping" },
    {
      id: 6,
      icon: <CrmIcon />,
      path: "/estimate",
      description: "Estimates & Quotes",
    },
    {
      id: 7,
      icon: <CrmIcon />,
      path: "/deal-flow-tracker",
      description: "Deal Flow Tracking",
    },
    { id: 8, icon: <CrmIcon />, path: "/schedule", description: "Scheduling" },
    {
      id: 9,
      icon: <CrmIcon />,
      path: "/client-portal",
      description: "Client Portal",
    },
    {
      id: 10,
      icon: <CrmIcon />,
      path: "/invoice-and-billing",
      description: "Invoicing & Collections",
    },
    {
      id: 12,
      icon: <CrmIcon />,
      path: "/crm",
      description: "Two-Way Communication",
    },
    { id: 13, icon: <CrmIcon />, path: "/", description: "Time Clock" },
    { id: 14, icon: <CrmIcon />, path: "/", description: "Mileage Tracking" },
    { id: 15, icon: <CrmIcon />, path: "/", description: "Asset Tracking" },
    { id: 16, icon: <CrmIcon />, path: "/", description: "Reporting" },
    { id: 17, icon: <CrmIcon />, path: "/", description: "PRO Website" },
    {
      id: 1,
      icon: <CrmIcon />,
      path: "/estimatic-ai",
      description: "Estimatic AI",
    },
    { id: 1, icon: <CrmIcon />, path: "/", description: "Big Chief AI" },
  ];
  const industriesItem = [
    { id: 1, path: "", description: "General Contractor" },
    { id: 2, path: "", description: "Drywall" },
    { id: 3, path: "", description: "Landscaping" },
    { id: 4, path: "", description: "Carpentry" },
    { id: 5, path: "", description: "Plumbing" },
    { id: 6, path: "", description: "Mechanical" },
    { id: 7, path: "", description: "Snow Removal" },
    { id: 8, path: "", description: "Carpet Cleaning" },
    { id: 9, path: "", description: "Construction" },
    {
      id: 10,
      path: "",
      description: "Invoicing & Cleaning",
    },
    { id: 11, path: "", description: "Lawn Care" },
    { id: 12, path: "", description: "Chimney Sweeping" },
    { id: 13, path: "", description: "HVAC" },
    { id: 14, path: "", description: "Restoration" },
    { id: 15, path: "", description: "Paving" },
    { id: 16, path: "", description: "Elevator" },
    { id: 17, path: "", description: "Remodeling" },
    { id: 18, path: "", description: "Electrician" },
    { id: 19, path: "", description: "Solar" },
    { id: 20, path: "", description: "Excavation" },
    { id: 21, path: "", description: "Painting" },
    { id: 22, path: "", description: "Fence" },
    { id: 23, path: "", description: "Janitorial" },
    { id: 24, path: "", description: "Garage Door" },
    { id: 25, path: "", description: "Roofing" },
    { id: 26, path: "", description: "Flooring" },
    { id: 27, path: "", description: "Irrigation" },
    { id: 28, path: "", description: "Handyman" },
    { id: 29, path: "", description: "Junk Removal" },
    { id: 30, path: "", description: "Pest Control" },
    { id: 31, path: "", description: "Pressure Washing" },
    { id: 32, path: "", description: "Septic & Pump" },
    { id: 33, path: "", description: "Locksmith" },
    { id: 34, path: "", description: "Pool & Spa" },
    {
      id: 35,
      path: "",
      description: "Property Maintenance",
    },
    { id: 36, path: "", description: "Small Engine Repair" },
    { id: 38, path: "", description: "Tiling" },
    { id: 39, path: "", description: "Tree Care" },
    { id: 40, path: "", description: "Window Cleaning" },
  ];

  return (
    <section className="relative z-30 mx-auto mt-8 w-full max-w-[1920px] overflow-hidden sm:mt-16 md:mt-[98px]">
      <div className="main-container">
        <Copy delay={0.2}>
          <h4 className="shadow-c6 text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
            The features you need
          </h4>
        </Copy>
        <div className="mt-6 mb-10 flex w-full flex-wrap items-center justify-center gap-[22px] sm:mb-14 md:mt-8 md:mb-16 lg:mb-20">
          {featuresItems.map((featuresItems, index) => (
            <YouNeedFeaturesCard
              features={featuresItems}
              key={index}
              delay={index * 0.05}
            />
          ))}
        </div>
        <Copy delay={0.2}>
          <h4 className="shadow-c6 text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
            The industries we serve
          </h4>
        </Copy>
        <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-[22px] md:mt-8">
          {industriesItem.map((featuresItems, index) => (
            <YouNeedFeaturesCard
              features={featuresItems}
              key={index}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        <CardReveal delay={0.2} distance={50}>
          <div className="bg-kuroiBlack 3xl:block absolute top-[-5%] left-[-8%] hidden h-[110%] w-full max-w-[10%] blur-[15px]"></div>
          <div className="bg-kuroiBlack 3xl:block absolute top-[-5%] right-[-8%] hidden h-[110%] w-full max-w-[10%] blur-[15px]"></div>
          <Image
            className="w-full object-cover"
            src="/images/webp/half-triangle.webp"
            alt="half-triangle"
            width={2500}
            height={500}
            unoptimized
          />
        </CardReveal>
      </div>
    </section>
  );
};

export default YouNeedFeatures;
