import FinallyMakesInvoicing from "@/components/billing/FinallyMakesInvoicing";
import OneClearInvoice from "@/components/billing/OneClearInvoice";
import {
  billingformData,
  invoicingSoftware,
  blogList,
  dealflowhero,
  dealReviews,
  dealReviews2,
  platforms,
  simpleWayToBill,
  integrationLogos,
} from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import {
  billingBlogPost,
  billingFaqData,
  billingSliderData,
  billingVsthWayYouCouldData,
} from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CommonHero from "@/components/crmbussiness/CommonHero";
import Faq from "@/components/crmbussiness/Faq";
import IndustryService from "@/components/crmbussiness/IndustryService";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import GoingFieldSevices from "@/components/fieldservices/GoingFieldSevices";
import NeverLookBack from "@/components/fieldservices/NeverLookBack";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import { getIntegrationList } from "@/services/integation/getIntegrationData";
import { getSolutionPageData } from "@/services/solutions/getSolutionPageData";

export const metadata = {
  title: "Auto-Update Contractor Invoicing Software | Contractor+",
  description:
    "Living invoices that reflect every signed, time-stamped change order. Capture uninvoiced billables automatically for more revenue.",
  keywords: ["contractor invoicing software"],
  openGraph: {
    images: [
      {
        url: "/images/webp/contractor-invoicing-software.webp",
        width: 1920,
        height: 630,
        alt: "contractor-invoicing-software",
      },
    ],
  },
  alternates: {
    canonical:
      "https://v2site.contractorplus.app/contractor-invoicing-software",
  },
};
interface Params {
  params: Promise<{ locale: string }>;
}
const BillingPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const useParams = await params;
  const {
    solutionPageContent,
    reviews,
    commonProblems,
    fieldServiceData,
    trackProperties,
    comparisonList,
    teamsUsingContractor,
    faqs,
    blogs,
    thousandReviews,
    commonData,
    integrationList,
    hero,
  } = await getSolutionPageData(
    "contractor-invoicing-software",
    useParams?.locale,
  );

  return (
    <main className="relative z-10 overflow-hidden">
      <CommonHero
        commonData={commonData}
        hero={hero}
        heroImg={hero?.heroImg}
        solutionTag="Opportunity Tracker"
      />
      <TrustedService
        reviews={reviews}
        slug="crm"
        apiData={false}
        className="shadow-c5 pb-6"
      />
      <div className="overflow-hidden bg-white">
        <div className="pt-8 sm:pt-12">
          <GoingFieldSevices
            cardsDetail={commonProblems?.cardsDetail}
            title={commonProblems?.title}
          />
        </div>

        <OneClearInvoice
          theme="estimateTheme"
          fieldService={billingSliderData}
        />
        <RunWithContractor kindAdorable={comparisonList} />
        <FinallyMakesInvoicing
          steps={trackProperties?.cards}
          subTitle={trackProperties?.subTitle}
          title={trackProperties?.title}
        />
        <NeverLookBack data={teamsUsingContractor} />
      </div>
      <ThousandsReviews
        data={solutionPageContent?.data?.[0]?.reviewTrustSection}
        reviews={thousandReviews?.reviews}
        variant="secondary"
      />
      <IndustryService
        createBtn={commonData?.getStartedFreeBtn}
        mobileBtn={commonData?.mobileBtn}
        ncc={commonData?.nccTxt}
        data={solutionPageContent?.data?.[0]?.emailSignupSection}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar
        platforms={platforms}
        trustBarImages={commonData?.trustedCompaniesWhiteBG}
        className="pb-[148px] xl:pb-20"
      />
      <Faq
        faq={faqs?.faqs}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={commonData?.contractorConnects}
        issection={false}
        images={
          integrationList?.hero
            ? integrationList?.hero?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
      />
      <BlogPosts
        data={blogs}
        blogs={solutionPageContent?.data?.[0]?.blogs}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default BillingPage;
