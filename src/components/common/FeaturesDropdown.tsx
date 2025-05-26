// FeaturesDropdown.tsx
"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  AgreementIcon,
  ArrowIcon,
  BellIcon,
  BigChiefAIIcon,
  BigChiefIcon,
  ClientIcon,
  EstimatesAiIcon,
  EstimatesIcon,
  EstimaticIcon,
  FieldServiceIcon,
  FinancingIcon,
  InvoicingIcon,
  LeadGenerationIcon,
  MileageIcon,
  PaymentsIcon,
  PROIcon,
  ProjectIcon,
  PropertyIcon,
  PropertyProfilesIcon,
  SchedulingIcon,
  ServiceIcon,
  ServiceRequestsIcon,
  TelephoneIcon,
  TimeIcon,
  TrackingIcon,
  TrophyIcon,
  WebsiteIncludedIcon,
} from "./Icons";

const FeaturesDropdown = ({ isVisible = true }) => {
  const t = useTranslations("features");

  const featureIcons = {
    crm: <ServiceIcon />,
    estimates: <EstimatesIcon />,
    mileage: <TrackingIcon />,
    fieldService: <FieldServiceIcon />,
    dealFlow: <TrophyIcon />,
    timeClock: <TimeIcon />,
    projectManagement: <ProjectIcon />,
    scheduling: <SchedulingIcon />,
    LeadGeneration: <LeadGenerationIcon />,
    payments: <PaymentsIcon />,
    clientPortal: <ClientIcon />,
    proWebsite: <PROIcon />,
    estimaticAI: <EstimaticIcon />,
    invoicing: <InvoicingIcon />,
    propertyProfiles: <PropertyIcon />,
    communication: <TelephoneIcon />,
    service: <BellIcon />,
    bigChiefAI: <BigChiefAIIcon />,
    OfferClientFinancing: <FinancingIcon />,
    Agreements: <AgreementIcon />,
    Tracking: <TrackingIcon />,
    EstimaticAI: <EstimatesAiIcon />,
    MileageTracking: <MileageIcon />,
    ProWebsite: <WebsiteIncludedIcon />,
    PropertyProfiles: <PropertyProfilesIcon />,
    ServiceRequests: <ServiceRequestsIcon />,
    BigChief: <BigChiefIcon />,
  };

  const newFeatures = {
    crm: false,
    estimates: false,
    mileage: false,
    fieldService: false,
    dealFlow: true,
    timeClock: false,
    projectManagement: false,
    scheduling: false,
    LeadGeneration: false,
    payments: false,
    clientPortal: false,
    proWebsite: false,
    estimaticAI: true,
    invoicing: false,
    Tracking: false,
    Agreements: false,
    propertyProfiles: true,
    bigChiefAI: false,
    OfferClientFinancing: false,
    EstimaticAI2: true,
    communication: true,
    service: false,
    MileageTracking: false,
    ProWebsite: false,
    PropertyProfiles: true,
    ServiceRequests: false,
    BigChief: true,
  };

  const sections = [
    {
      key: "solutions",
      headingKey: "solutionsHeading",
      items: [
        "crm",
        "projectManagement",
        "fieldService",
        "payments",
        "LeadGeneration",
        "bigChiefAI",
        "OfferClientFinancing",
      ],
    },
    {
      key: "Features",
      headingKey: "featuresHeading",
      items: [
        "estimates",
        "dealFlow",
        "scheduling",
        "clientPortal",
        "invoicing",
        "communication",
        "EstimaticAI2",
      ],
    },
    {
      key: "Features2",
      headingKey: "featuresHeading2",
      items: [
        "Agreements",
        "Tracking",
        "MileageTracking",
        "ProWebsite",
        "PropertyProfiles",
        "ServiceRequests",
        "BigChief",
      ],
    },
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="overflow-hidden grow flex flex-col">
      <div className="grid grid-cols-3 overflow-auto no-scrollbar">
        {sections.map((section) => (
          <div key={section.key}>
            <i className="text-sm font-semibold text-lightBlack h-5 mb-2.5">
              {t(section.headingKey)}
            </i>
            <ul className="space-x-6 space-y-3 w-full pb-8">
              {section.items.map((featureId) => (
                <li
                  className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
                  key={featureId}
                >
                  <Link href="/" className="group">
                    <div className="flex gap-2.5 items-start">
                      <span>
                        {featureIcons[featureId as keyof typeof featureIcons]}
                      </span>
                      <div className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white flex items-center gap-2.5">
                        {t(`${section.key}.${featureId}.label`)}
                        {newFeatures[featureId as keyof typeof newFeatures] && (
                          <div className="px-2 h-5 flex items-center justify-center border border-dancingJewel bg-softMint rounded-full text-xs font-semibold font-myriad tracking-[0.4px] text-dancingJewel">
                            {t("newBadge")}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm font-inter text-lightBlack">
                      {t(`${section.key}.${featureId}.description`)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-6 left-0 font-inter sticky bottom-0 w-full bg-doctor2">
        <Link className="all-features-button group" href="/">
          {t("seeAllFeatures")}
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link className="all-features-button group" href="/">
            {t("integrations")}
            <ArrowIcon />
          </Link>
          <Link className="all-features-button group" href="/">
            {t("productUpdates")}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
