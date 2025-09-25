import {
  automatedCardData,
  constructionBookkeepingServices,
  platforms,
  propertyaddressContractorData,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CommonHero from "@/components/crmbussiness/CommonHero";
import ConstructionBookkeepingCard from "@/components/constructionbookkeeping/ConstructionBookkeepingCard";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import HowContractorWork from "@/components/crmbussiness/HowContractorWork";
import CrmService from "@/components/crmbussiness/IndustryService";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import LikeYouDoContacts from "@/components/crmbussiness/LikeYouDoContacts";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import { getSeoData } from "@/services/common/seoMeta";
import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import Image from "next/image";
import { notFound } from "next/navigation";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import CalculateImpact from "@/components/crmbussiness/CalculateImpact";
import ManageEveryMile from "@/components/toolandequipment/ManageEveryMile";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const page = await getSeoData(
    "features-pages",
    resolvedParams.locale,
    resolvedParams.slug,
  );

  if (!page) notFound();

  return generateSeoMetadata({ page, slug: resolvedParams.slug });
}

const CrmBussinessPage = async ({ params }: CrmBussinessPageProps) => {
  const useParams = await params;
  if (!useParams?.slug) {
    return notFound();
  }

  const {
    crmPageContent,
    heroImg,
    reviews,
    switchingTool,
    fieldServiceData,
    trackProperties,
    comparison,
    teamsUsingContractor,
    faqs,
    blogsList,
    thousandReviews,
    commonData,
  } = await getFeaturesPageData(useParams?.slug, useParams?.locale);

  const theme = useParams?.slug === "estimate" ? "estimateTheme" : "dark";
  const page = crmPageContent?.data?.[0];

  if (!crmPageContent?.data?.length) {
    return notFound();
  }

  const pageData = {
    slug: useParams?.slug,
    theme,
    hero: page?.hero,
    featureTag: page?.featureTag,
    reviews,
    switchingTool: switchingTool?.commonProblems,
    fieldServiceData: fieldServiceData,
    trackProperties: trackProperties,
    comparison: comparison,
    teamsUsingContractor: teamsUsingContractor,
    crmService: page?.emailSignupSection,
    thousandReviews: thousandReviews,
    reviewsData: reviews?.data?.[0]?.reviews?.reviews,
    faq: faqs?.faqs,
    blogsList,
    blogs: page?.blogs,
    createBtn: commonData?.getStartedFreeBtn,
    mobileBtn: commonData?.mobileBtn,
    ncc: commonData?.nccTxt,
  };
  const FEATURES = [
    {
      id: 1,
      text: "Start Trip",
      desc: "One tap to begin tracking on mobile",
    },
    {
      id: 2,
      text: "End Trip",
      desc: "Stop with a tap; auto‑logged in your history",
    },
    {
      id: 3,
      text: "Review & Edit",
      desc: "Fix a missed start/stop or add a note",
    },
    {
      id: 4,
      text: "Generate Report",
      desc: "Choose a date range, get totals by person/team",
    },
    {
      id: 5,
      text: "Export & Reimburse",
      desc: "CSV/PDF out, multiply by IRS rate, reimburse with confidence",
    },
  ];

  const ManageEvery = [
    {
      id: 1,
      text: "Creation",
      desc: "Intelligent, customizable templates that dynamically pull data from estimates",
    },
    {
      id: 2,
      text: "Approval",
      desc: "A clear, professional, client-facing portal for review and acceptance",
    },
    {
      id: 3,
      text: "Signature",
      desc: "Secure, legally-binding electronic signatures",
    },
    {
      id: 4,
      text: "Storage & Retrieval",
      desc: "A centralized, searchable database of all past and present agreements",
    },
    {
      id: 5,
      text: "Amendment",
      desc: "A dedicated, integrated workflow for creating and signing change orders",
    },
    {
      id: 6,
      text: "Renewal",
      desc: "Automation and tracking for recurring service agreements and memberships",
    },
  ];

  const ToolEquipment = [
    {
      id: 1,
      text: "Assign",
      desc: "Send a tool to a person, job, or truck—instantly logged",
    },
    {
      id: 2,
      text: "Pick Up / Checkout",
      desc: "Scan QR or detect via Bluetooth; capture timestamp",
    },
    {
      id: 3,
      text: "On-Site Use",
      desc: "See who has it while it’s in the field",
    },
    {
      id: 4,
      text: "Transfer",
      desc: "Hand off mid-job with a clean chain of custody",
    },
    {
      id: 5,
      text: "Return / Check-In",
      desc: "Scan once—done (and fully logged)",
    },
    {
      id: 6,
      text: "Audit & Billing",
      desc: "Run a truck scan, reconcile discrepancies, bill for equipment usage",
    },
  ];
  let cardsData = null;

  if (useParams.slug === "mileage-tracking") {
    cardsData = FEATURES;
  } else if (useParams.slug === "contractor-client-agreement") {
    cardsData = ManageEvery;
  } else if (useParams.slug === "tool-inventory-software") {
    cardsData = ToolEquipment;
  }
  return (
    <>
      <div id="common-homepage-wrapper">
        <div id="home-page-view-port-screen" className="relative opacity-0">
          <CommonHero
            commonData={commonData}
            hero={pageData?.hero}
            slug={useParams?.slug}
            heroImg={heroImg}
            featureTag={pageData?.featureTag}
          />

          {useParams.slug === "construction-bookkeeping-services" ? (
            <>
              <ConstructionBookkeepingCard
                constructionBookkeepingServices={
                  constructionBookkeepingServices
                }
              />
            </>
          ) : (
            <TrustedService reviews={reviews} slug={useParams?.slug} />
          )}

          <SwitchingTool switchingTool={pageData?.switchingTool} />
          <div className="hidden md:block">
            <FieldService
              slug={pageData.slug}
              fieldService={pageData.fieldServiceData}
              theme={pageData.theme as "light" | "dark" | "estimateTheme"}
              apiData={true}
              mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
            />
          </div>
          <div className="mb-12 block md:hidden">
            <OverlapCardMobileViewChild
              slug={pageData.slug}
              fieldService={pageData.fieldServiceData}
              theme={pageData.theme as "light" | "dark" | "estimateTheme"}
              apiData={true}
              mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
            />
          </div>
        </div>
        {/* Direct component rendering without lazy loading */}
        <div className="bg-white">
          {Boolean(trackProperties?.featureHighlightSectionVisible) && (
            <>
              <TrackProperties
                ncc={pageData.ncc}
                trackProperties={trackProperties}
                slug={useParams.slug}
              />

              {useParams.slug !== "property-profiles" && (
                <LikeYouDoContacts
                  trackProperties={pageData.trackProperties}
                  slug={useParams.slug}
                />
              )}
              {useParams.slug !== "mileage-tracking" &&
                useParams.slug !== "contractor-client-agreemenat" &&
                useParams.slug !== "tool-inventory-software" && (
                  <HowContractorWork
                    ncc={pageData.ncc}
                    trackProperties={pageData.trackProperties}
                    slug={useParams.slug}
                  />
                )}
            </>
          )}
          {(useParams.slug === "mileage-tracking" ||
            useParams.slug === "contractor-client-agreement" ||
            useParams.slug === "tool-inventory-software") && (
            <ManageEveryMile
              title={"We manage every mile from drive to reimbursement"}
              cardsData={cardsData ?? []}
            />
          )}
          {useParams.slug === "property-profiles" && (
            <RunWithContractor kindAdorable={propertyaddressContractorData} />
          )}
          <KindAdorable
            slug={pageData.slug}
            kindAdorable={pageData.comparison}
          />
          {useParams.slug === "ai-call-answering-software" && (
            <CalculateImpact />
          )}
          <TeamsUsingContractor
            data={pageData.teamsUsingContractor}
            slug={pageData.slug}
          />
          <ThousandsReviews
            data={pageData.thousandReviews}
            reviews={pageData.reviewsData}
          />
        </div>
        <div className="relative overflow-hidden">
          {/* Background Icons */}
          <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
          <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
          <div className="relative">
            <Image
              width={800}
              height={1000}
              // sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              className="absolute top-[10px] left-0 z-10 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
              src={"/images/webp/hero-red-line.webp"}
              alt="hero-red-line"
            />

            <CrmService
              createBtn={pageData.createBtn}
              mobileBtn={pageData.mobileBtn}
              ncc={pageData.ncc}
              data={pageData.crmService}
              variant="primary"
              className={`${
                pageData.slug === "crm"
                  ? "xs:max-w-[89%] max-w-[83%] pt-10 sm:max-w-[1120px] sm:pt-0"
                  : "xs:max-w-[81%] max-w-[76%] pt-10 sm:max-w-[662px] sm:pt-0"
              }`}
              variantBtn="light"
            />
          </div>

          <TrustBar
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />

          <Faq
            faq={pageData.faq}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 pt-[66px] pb-0 md:pt-[76px] md:pb-[83px]"
            TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
          />
        </div>
        <BlogPosts
          data={pageData.blogsList || []}
          blogs={pageData.blogs}
          className="mt-7 mb-20 md:mt-9"
          classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
        />
      </div>
    </>
  );
};

export default CrmBussinessPage;
