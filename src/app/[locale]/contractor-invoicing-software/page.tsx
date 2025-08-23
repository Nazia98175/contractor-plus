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

export const metadata = {
  title: "Auto-Update Contractor Invoicing Software | Contractor+",
  description:
    "Living invoices that reflect every signed, time-stamped change order. Capture uninvoiced billables automatically for more revenue.",
};
const BillingPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const [integrationList] = await Promise.all([getIntegrationList(locale)]);

  return (
    <main className="relative z-10 overflow-hidden">
      <CommonHero
        hero={{
          featureTag: "Contractor Invoicing Software",
          heroTitle: "Living invoices that instantly reflect every change",
          heroDescription:
            "Contractor+ automatically captures uninvoiced billables and updates your invoice with time stamped change orders.",
          border: true,
          overlay: true,
          imageMaxWidth: 900,
        }}
        heroImg="/images/webp/invoicing-billing.webp"
        slug="crm"
        apiData={false}
        commonData={dealflowhero}
      />
      <TrustedService
        reviews={dealReviews}
        slug="crm"
        apiData={false}
        className="shadow-c5 pb-10"
      />
      <div className="overflow-hidden bg-white">
        <div className="pt-8 sm:pt-12">
          <GoingFieldSevices
            isImageshow={false}
            switchingTool={{
              title:
                "There’s no simple way to bill a job that doesn’t go exactly to plan",
              cardsDetail: simpleWayToBill,
            }}
          />
        </div>

        <OneClearInvoice
          theme="estimateTheme"
          fieldService={billingSliderData}
        />
        <RunWithContractor kindAdorable={billingVsthWayYouCouldData} />
        <FinallyMakesInvoicing />
        <NeverLookBack data={invoicingSoftware} />
      </div>
      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2.reviews}
        variant="secondary"
        apiData={false}
      />
      <IndustryService
        createBtn={"Get started FREE"}
        mobileBtn={"Download FREE App"}
        ncc={"No credit card required"}
        data={billingformData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar platforms={platforms} className="pb-[148px] xl:pb-20" />
      <Faq
        faq={billingFaqData}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={{
          title: "Whatever you use, Contractor+ connects",
          subTitle: "5000+ Potential Integrations",
        }}
        issection={false}
        images={
          integrationList?.hero
            ? integrationList?.hero?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
      />

      <BlogPosts
        data={blogList}
        blogs={billingBlogPost}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default BillingPage;
