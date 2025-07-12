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
  BookPingIcon,
  ClientIcon,
  EstimatesAiIcon,
  EstimatesIcon,
  EstimaticIcon,
  FieldServiceIcon,
  FinancingIcon,
  InvoicingIcon,
  LeadGenerationIcon,
  MilageIcon,
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
import { CrmIcon } from "./MainIcon";
interface Props {
  headerSubList: any;
  isVisible: boolean;
}

const FeaturesDropdown: React.FC<Props> = ({
  isVisible = true,
  headerSubList,
}) => {
  const t = useTranslations("features");

  const featureIcons: Record<string, React.ReactNode> = {
    crm: <CrmIcon />,
    estimates: <EstimatesIcon />,
    mileage: <MilageIcon />,
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
    BookPing: <BookPingIcon />,
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex grow flex-col overflow-hidden">
      <div className="no-scrollbar grid grid-cols-3 overflow-auto">
        {headerSubList
          ?.slice(0, headerSubList?.length - 1)
          .map((section: any) => (
            <div key={section.id}>
              <i className="text-lightBlack mb-2.5 flex h-[15px] text-sm font-semibold">
                {section?.title}
              </i>
              <ul className="w-full space-y-3 space-x-6 pb-8">
                {section?.links.map((featureId: any) => (
                  <li
                    className="group hover:bg-superSilver p-[6px] duration-200 ease-linear"
                    key={featureId?.id}
                  >
                    <Link href={featureId?.linkUrl ?? "/"} className="group">
                      <div className="flex items-start gap-2.5">
                        <span>{featureIcons?.[featureId.icon]}</span>
                        <div className="header-li-dropdown group-hover:bg-lightBlack flex items-center gap-2.5 group-hover:!text-white">
                          {featureId?.linkTxt}
                          {featureId?.new && (
                            <div className="border-dancingJewel bg-softMint font-myriad text-dancingJewel flex h-5 items-center justify-center rounded-full border px-2 text-xs font-semibold tracking-[0.4px]">
                              {"New"}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="font-inter text-lightBlack text-sm">
                        {featureId?.subTitle}
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
          {headerSubList[headerSubList?.length - 1]?.links?.[0]?.linkTxt}
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link className="all-features-button group" href="/">
            {headerSubList[headerSubList?.length - 1]?.links?.[1]?.linkTxt}
            <ArrowIcon />
          </Link>
          <Link className="all-features-button group" href="/">
            {headerSubList[headerSubList?.length - 1]?.links?.[2]?.linkTxt}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
