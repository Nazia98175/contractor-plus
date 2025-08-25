import Image from "next/image";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import {
  AssetTrackingIcon,
  BigChiefGrayIcon,
  ClientIcon,
  EstimateGrayIcon,
  EstimatesIcon,
  FieldServiceIcon,
  InvoicingIcon,
  KeepBookingIcon2,
  LeadGenerationIcon,
  MilageIcon,
  PROIcon,
  ProjectIcon,
  ReportIcon,
  SchedulingIcon,
  TelephoneIcon,
  TimeIcon,
  TrophyIcon,
} from "../common/Icons";
import { CrmIcon } from "../common/MainIcon";
import YouNeedFeaturesCard from "./YouNeedFeaturesCard";

const YouNeedFeatures = () => {
  const featuresItems = [
    {
      id: 1,
      icon: <CrmIcon />,
      path: "/field-service-crm",
      description: "CRM",
    },
    {
      id: 2,
      icon: <FieldServiceIcon />,
      path: "/field-service-requests-management-software",
      description: "Field Service Management",
    },
    {
      id: 3,
      icon: <ProjectIcon />,
      path: "/project-management-software-for-contractors",
      description: "Project Management",
    },
    {
      id: 4,
      icon: <LeadGenerationIcon />,
      path: "/local-seo-for-contractors",
      description: "Lead Generation",
    },
    {
      id: 5,
      icon: <KeepBookingIcon2 />,
      path: "/construction-bookkeeping-services",
      description: "Bookkeeping",
    },
    {
      id: 6,
      icon: <EstimatesIcon />,
      path: "/contractor-estimate-software",
      description: "Estimates & Quotes",
    },
    {
      id: 7,
      icon: <TrophyIcon />,
      path: "/opportunity-tracker",
      description: "Deal Flow Tracking",
    },
    {
      id: 8,
      icon: <SchedulingIcon />,
      path: "/field-service-scheduling-software",
      description: "Scheduling",
    },
    {
      id: 9,
      icon: <ClientIcon />,
      path: "/field-service-client-portal",
      description: "Client Portal",
    },
    {
      id: 10,
      icon: <InvoicingIcon />,
      path: "/contractor-invoicing-software",
      description: "Invoicing & Collections",
    },
    {
      id: 12,
      icon: <TelephoneIcon />,
      path: "/field-communication-software",
      description: "Two-Way Communication",
    },
    {
      id: 13,
      icon: <TimeIcon />,
      path: "/contractor-time-tracking-software",
      description: "Time Clock",
    },
    {
      id: 14,
      icon: <MilageIcon />,
      path: "/",
      description: "Mileage Tracking",
    },
    {
      id: 15,
      icon: <AssetTrackingIcon />,
      path: "/",
      description: "Asset Tracking",
    },
    { id: 16, icon: <ReportIcon />, path: "/", description: "Reporting" },
    { id: 17, icon: <PROIcon />, path: "/", description: "PRO Website" },
    {
      id: 1,
      icon: <EstimateGrayIcon />,
      path: "/ai-estimating-software",
      description: "Estimatic AI",
    },
    {
      id: 1,
      icon: <BigChiefGrayIcon />,
      path: "/",
      description: "Big Chief AI",
    },
  ];
  const industriesItem = [
    {
      id: 1,
      path: "/industries/general-contractor-software",
      description: "General Contractor",
    },
    {
      id: 2,
      path: "/industries/drywall-contractor-software",
      description: "Drywall",
    },
    {
      id: 3,
      path: "/industries/landscaping-management-software",
      description: "Landscaping",
    },
    {
      id: 4,
      path: "/industries/carpenter-business-software",
      description: "Carpentry",
    },
    {
      id: 5,
      path: "/industries/plumbing-business-software",
      description: "Plumbing",
    },
    {
      id: 6,
      path: "/industries/mechanical-contractor-software",
      description: "Mechanical",
    },
    {
      id: 7,
      path: "/industries/snow-removal-software",
      description: "Snow Removal",
    },
    {
      id: 8,
      path: "/industries/carpet-cleaning-software",
      description: "Carpet Cleaning",
    },
    {
      id: 9,
      path: "/industries/construction-management-software",
      description: "Construction",
    },
    {
      id: 10,
      path: "",
      description: "Invoicing & Cleaning",
    },
    {
      id: 11,
      path: "/industries/lawn-care-software",
      description: "Lawn Care",
    },
    {
      id: 12,
      path: "/industries/chimney-sweep-business-software",
      description: "Chimney Sweeping",
    },
    {
      id: 13,
      path: "/industries/hvac-contractor-software",
      description: "HVAC",
    },
    {
      id: 14,
      path: "/industries/restoration-contractor-software",
      description: "Restoration",
    },
    { id: 15, path: "/industries/paving-software", description: "Paving" },
    {
      id: 16,
      path: "/industries/elevator-service-software",
      description: "Elevator",
    },
    {
      id: 17,
      path: "/industries/remodeling-contractor-software",
      description: "Remodeling",
    },
    {
      id: 18,
      path: "/industries/electrician-software",
      description: "Electrician",
    },
    {
      id: 19,
      path: "/industries/solar-business-management-software",
      description: "Solar",
    },
    {
      id: 20,
      path: "/industries/excavation-software",
      description: "Excavation",
    },
    {
      id: 21,
      path: "/industries/painting-contractor-software",
      description: "Painting",
    },
    { id: 22, path: "/industries/fence-software", description: "Fence" },
    {
      id: 23,
      path: "/industries/janitorial-software",
      description: "Janitorial",
    },
    {
      id: 24,
      path: "/industries/garage-door-software",
      description: "Garage Door",
    },
    {
      id: 25,
      path: "/industries/roofing-contractor-software",
      description: "Roofing",
    },
    {
      id: 26,
      path: "/industries/flooring-business-software",
      description: "Flooring",
    },
    {
      id: 27,
      path: "/industries/irrigation-business-software",
      description: "Irrigation",
    },
    { id: 28, path: "/industries/handyman-software", description: "Handyman" },
    {
      id: 29,
      path: "/industries/junk-removal-business-software",
      description: "Junk Removal",
    },
    {
      id: 30,
      path: "/industries/pest-control-software",
      description: "Pest Control",
    },
    {
      id: 31,
      path: "/industries/crm-for-pressure-washing",
      description: "Pressure Washing",
    },
    {
      id: 32,
      path: "/industries/septic-pumping-software",
      description: "Septic & Pump",
    },
    {
      id: 33,
      path: "/industries/locksmith-software",
      description: "Locksmith",
    },
    {
      id: 34,
      path: "/industries/pool-builder-software",
      description: "Pool & Spa",
    },
    {
      id: 35,
      path: "",
      description: "Property Maintenance",
    },
    {
      id: 36,
      path: "/industries/property-maintenance-software",
      description: "Small Engine Repair",
    },
    {
      id: 38,
      path: "/industries/tile-estimating-software",
      description: "Tiling",
    },
    {
      id: 39,
      path: "/industries/tree-care-software",
      description: "Tree Care",
    },
    {
      id: 40,
      path: "/industries/window-cleaning-business-software",
      description: "Window Cleaning",
    },
  ];

  return (
    <section className="relative z-30 mx-auto mt-8 w-full max-w-[1920px] overflow-hidden sm:mt-16 md:mt-[98px]">
      <div className="main-container">
        <Copy delay={0.2}>
          <h4 className="text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
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
          <h4 className="text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
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
