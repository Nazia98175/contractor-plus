import FinallyMakesInvoicing from "@/components/billing/FinallyMakesInvoicing";
import OneClearInvoice from "@/components/billing/OneClearInvoice";
import {
  billingformData,
  billingNeverLookBackData,
  blogList,
  dealflowhero,
  dealReviews,
  dealReviews2,
  platforms,
  simpleWayToBill,
} from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import {
  billingBlogPost,
  billingFaqData,
  billingSliderData,
  billingVsthWayYouCouldData,
} from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import WhatEverClient from "@/components/homepage/WhatEverClient";

export const metadata = {
  title: "Living invoices that instantly reflect every change",
  description:
    "Contractor+ automatically captures uninvoiced billables and updates your invoice with time stamped change orders.",
};
const BillingPage = () => {
  return (
    <main className="relative z-10">
      <CrmHero
        hero={{
          featureTag: "Contractor Invoicing Software",
          heroTitle: "Living invoices that instantly reflect every change",
          heroDescription: (
            <>
              Contractor+ automatically captures uninvoiced billables and <br />
              updates your invoice with time stamped change orders.
            </>
          ),
        }}
        heroImg="/images/webp/invoicing-billing.webp"
        slug="crm"
        commonData={dealflowhero}
      />
      <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
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
        <NeverLookBack data={billingNeverLookBackData} />
      </div>
      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2.reviews}
        variant="secondary"
        apiData={false}
      />
      <CrmSercive
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
