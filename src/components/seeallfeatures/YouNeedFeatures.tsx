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
      slug: "/field-service-crm",
      text: "CRM",
    },
    {
      id: 2,
      icon: <FieldServiceIcon />,
      slug: "/field-service-requests-management-software",
      text: "Field Service Management",
    },
    {
      id: 3,
      icon: <ProjectIcon />,
      slug: "/project-management-software-for-contractors",
      text: "Project Management",
    },
    {
      id: 4,
      icon: <LeadGenerationIcon />,
      slug: "/local-seo-for-contractors",
      text: "Lead Generation",
    },
    {
      id: 5,
      icon: <KeepBookingIcon2 />,
      slug: "/construction-bookkeeping-services",
      text: "Bookkeeping",
    },
    {
      id: 6,
      icon: <EstimatesIcon />,
      slug: "/contractor-estimate-software",
      text: "Estimates & Quotes",
    },
    {
      id: 7,
      icon: <TrophyIcon />,
      slug: "/opportunity-tracker",
      text: "Deal Flow Tracking",
    },
    {
      id: 8,
      icon: <SchedulingIcon />,
      slug: "/field-service-scheduling-software",
      text: "Scheduling",
    },
    {
      id: 9,
      icon: <ClientIcon />,
      slug: "/field-service-client-portal",
      text: "Client Portal",
    },
    {
      id: 10,
      icon: <InvoicingIcon />,
      slug: "/contractor-invoicing-software",
      text: "Invoicing & Collections",
    },
    {
      id: 12,
      icon: <TelephoneIcon />,
      slug: "/field-communication-software",
      text: "Two-Way Communication",
    },
    {
      id: 13,
      icon: <TimeIcon />,
      slug: "/contractor-time-tracking-software",
      text: "Time Clock",
    },
    {
      id: 14,
      icon: <MilageIcon />,
      slug: "/",
      text: "Mileage Tracking",
    },
    {
      id: 15,
      icon: <AssetTrackingIcon />,
      slug: "/",
      text: "Asset Tracking",
    },
    { id: 16, icon: <ReportIcon />, slug: "/", text: "Reporting" },
    { id: 17, icon: <PROIcon />, slug: "/", text: "PRO Website" },
    {
      id: 1,
      icon: <EstimateGrayIcon />,
      slug: "/ai-estimating-software",
      text: "Estimatic AI",
    },
    {
      id: 1,
      icon: <BigChiefGrayIcon />,
      slug: "/",
      text: "Big Chief AI",
    },
  ];
  const industriesItem = [
    {
      id: 1,
      slug: "/industries/general-contractor-software",
      text: "General Contractor",
    },
    {
      id: 2,
      slug: "/industries/drywall-contractor-software",
      text: "Drywall",
    },
    {
      id: 3,
      slug: "/industries/landscaping-management-software",
      text: "Landscaping",
    },
    {
      id: 4,
      slug: "/industries/carpenter-business-software",
      text: "Carpentry",
    },
    {
      id: 5,
      slug: "/industries/plumbing-business-software",
      text: "Plumbing",
    },
    {
      id: 6,
      slug: "/industries/mechanical-contractor-software",
      text: "Mechanical",
    },
    {
      id: 7,
      slug: "/industries/snow-removal-software",
      text: "Snow Removal",
    },
    {
      id: 8,
      slug: "/industries/carpet-cleaning-software",
      text: "Carpet Cleaning",
    },
    {
      id: 9,
      slug: "/industries/construction-management-software",
      text: "Construction",
    },
    {
      id: 10,
      slug: "",
      text: "Invoicing & Cleaning",
    },
    {
      id: 11,
      slug: "/industries/lawn-care-software",
      text: "Lawn Care",
    },
    {
      id: 12,
      slug: "/industries/chimney-sweep-business-software",
      text: "Chimney Sweeping",
    },
    {
      id: 13,
      slug: "/industries/hvac-contractor-software",
      text: "HVAC",
    },
    {
      id: 14,
      slug: "/industries/restoration-contractor-software",
      text: "Restoration",
    },
    { id: 15, slug: "/industries/paving-software", text: "Paving" },
    {
      id: 16,
      slug: "/industries/elevator-service-software",
      text: "Elevator",
    },
    {
      id: 17,
      slug: "/industries/remodeling-contractor-software",
      text: "Remodeling",
    },
    {
      id: 18,
      path: "/industries/electrician-software",
      text: "Electrician",
    },
    {
      id: 19,
      path: "/industries/solar-business-management-software",
      text: "Solar",
    },
    {
      id: 20,
      path: "/industries/excavation-software",
      text: "Excavation",
    },
    {
      id: 21,
      path: "/industries/painting-contractor-software",
      text: "Painting",
    },
    { id: 22, path: "/industries/fence-software", text: "Fence" },
    {
      id: 23,
      path: "/industries/janitorial-software",
      text: "Janitorial",
    },
    {
      id: 24,
      path: "/industries/garage-door-software",
      text: "Garage Door",
    },
    {
      id: 25,
      path: "/industries/roofing-contractor-software",
      text: "Roofing",
    },
    {
      id: 26,
      path: "/industries/flooring-business-software",
      text: "Flooring",
    },
    {
      id: 27,
      path: "/industries/irrigation-business-software",
      text: "Irrigation",
    },
    { id: 28, path: "/industries/handyman-software", text: "Handyman" },
    {
      id: 29,
      path: "/industries/junk-removal-business-software",
      text: "Junk Removal",
    },
    {
      id: 30,
      path: "/industries/pest-control-software",
      text: "Pest Control",
    },
    {
      id: 31,
      path: "/industries/crm-for-pressure-washing",
      text: "Pressure Washing",
    },
    {
      id: 32,
      path: "/industries/septic-pumping-software",
      text: "Septic & Pump",
    },
    {
      id: 33,
      path: "/industries/locksmith-software",
      text: "Locksmith",
    },
    {
      id: 34,
      path: "/industries/pool-builder-software",
      text: "Pool & Spa",
    },
    {
      id: 35,
      path: "",
      text: "Property Maintenance",
    },
    {
      id: 36,
      path: "/industries/property-maintenance-software",
      text: "Small Engine Repair",
    },
    {
      id: 38,
      path: "/industries/tile-estimating-software",
      text: "Tiling",
    },
    {
      id: 39,
      path: "/industries/tree-care-software",
      text: "Tree Care",
    },
    {
      id: 40,
      path: "/industries/window-cleaning-business-software",
      text: "Window Cleaning",
    },
  ];

  return (
    <section className="relative z-30 mx-auto mt-8 w-full max-w-[1920px] overflow-hidden sm:mt-16 md:mt-[98px]">
      <div className="main-container">
        <Copy delay={0.2}>
          <h4 className="text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
            {/* {title || "The features you need"} */}
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
            {/* {title || "The industries we serve"} */}
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
