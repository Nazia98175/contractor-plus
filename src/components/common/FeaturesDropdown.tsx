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
    <div className="flex grow flex-col overflow-hidden">
      <div className="no-scrollbar grid grid-cols-3 overflow-auto">
        {sections.map((section) => (
          <div key={section.key}>
            <i className="text-lightBlack mb-2.5 flex h-[15px] text-sm font-semibold">
              {t(section.headingKey)}
            </i>
            <ul className="w-full space-y-3 space-x-6 pb-8">
              {section.items.map((featureId) => (
                <li
                  className="group hover:bg-superSilver p-[6px] duration-200 ease-linear"
                  key={featureId}
                >
                  <Link href="/" className="group">
                    <div className="flex items-start gap-2.5">
                      <span>
                        {featureIcons[featureId as keyof typeof featureIcons]}
                      </span>
                      <div className="header-li-dropdown group-hover:bg-lightBlack flex items-center gap-2.5 group-hover:!text-white">
                        {t(`${section.key}.${featureId}.label`)}
                        {newFeatures[featureId as keyof typeof newFeatures] && (
                          <div className="border-dancingJewel bg-softMint font-myriad text-dancingJewel flex h-5 items-center justify-center rounded-full border px-2 text-xs font-semibold tracking-[0.4px]">
                            {t("newBadge")}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="font-inter text-lightBlack text-sm">
                      {t(`${section.key}.${featureId}.description`)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="font-inter bg-doctor2 sticky bottom-0 left-0 flex w-full items-center justify-between gap-6">
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
