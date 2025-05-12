// FeaturesDropdown.tsx
"use client";
import Link from "next/link";
import {
  ArrowIcon,
  ServiceIcon,
  EstimatesIcon,
  TrackingIcon,
  FieldServiceIcon,
  TrophyIcon,
  ProjectIcon,
  SchedulingIcon,
  EstimaticIcon,
  ClientIcon,
  PROIcon,
  BigChiefAIIcon,
  InvoicingIcon,
  PaymentsIcon,
  TelephoneIcon,
  PropertyIcon,
  BookkeepingIcon,
  TimeIcon,
} from "./Icons";
import { useTranslations } from "next-intl";

const FeaturesDropdown = ({ isVisible = true }) => {
  const t = useTranslations("features");

  const featureIds: (keyof typeof featureIcons)[] = [
    "crm",
    "estimates",
    "mileage",
    "fieldService",
    "dealFlow",
    "timeClock",
    "projectManagement",
    "scheduling",
    "leadGeneration", // Repurposed for Mileage Tracking in translations
    "payments",
    "clientPortal",
    "proWebsite",
    "estimaticAI",
    "invoicing",
    "propertyProfiles",
    "bigChiefAI",
    "communication",
    "bookkeeping", // Repurposed for Service Requests in translations
  ];

  const featureIcons = {
    crm: <ServiceIcon />,
    estimates: <EstimatesIcon />,
    mileage: <TrackingIcon />,
    fieldService: <FieldServiceIcon />,
    dealFlow: <TrophyIcon />,
    timeClock: <TimeIcon />,
    projectManagement: <ProjectIcon />,
    scheduling: <SchedulingIcon />,
    leadGeneration: <TrackingIcon />,
    payments: <PaymentsIcon />,
    clientPortal: <ClientIcon />,
    proWebsite: <PROIcon />,
    estimaticAI: <EstimaticIcon />,
    invoicing: <InvoicingIcon />,
    propertyProfiles: <PropertyIcon />,
    bigChiefAI: <BigChiefAIIcon />,
    communication: <TelephoneIcon />,
    bookkeeping: <BookkeepingIcon />,
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
    leadGeneration: false,
    payments: false,
    clientPortal: false,
    proWebsite: false,
    estimaticAI: true,
    invoicing: false,
    propertyProfiles: true,
    bigChiefAI: true,
    communication: true,
    bookkeeping: false,
  };

  if (!isVisible) {
    return null;
  }

  return (
    <article className="flex flex-col justify-between p-2 gap-3">
      <div className="grid grid-cols-3 gap-3 dropdown-heading">
        <h3 className="px-4">{t("solutionsHeading")}</h3>
        <h4 className="px-4">{t("featuresHeading")}</h4>
      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-3 w-full pb-10">
        {featureIds.map((featureId) => (
          <li
            className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
            key={featureId}
          >
            <Link
              href="/"
              className="group group-hover:bg-lightBlack group-hover:!text-white"
            >
              <div className="flex gap-2.5 items-center">
                <span>{featureIcons[featureId]}</span>
                <div className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white flex items-center gap-2.5">
                  {/* Use translation for label based on feature ID */}
                  {t(`${featureId}.label`)}
                  {newFeatures[featureId] && (
                    <div className="px-2.5 h-[21px] flex items-center justify-center border border-dancingJewel bg-softMint rounded-full text-sm font-semibold font-myriad tracking-[0.4px] text-dancingJewel">
                      {t("newBadge")}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm font-inter text-lightBlack mt-2.5">
                {t(`${featureId}.description`)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-6 p-[6px] px-8 left-0 font-inter absolute bottom-0 w-full bg-white">
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
    </article>
  );
};

export default FeaturesDropdown;
