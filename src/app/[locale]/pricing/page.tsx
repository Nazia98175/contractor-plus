import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms } from "@/components/common/Helper";
import LoadingFallback from "@/components/common/LoadingFallback";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import GroupOfComponets from "@/components/pricing/GroupOfComponets";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getPricingData } from "@/services/pricing/getPricingData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PricongParams {
  params: Promise<{ locale: string; slug?: string }>;
}

export async function generateMetadata({
  params,
}: PricongParams): Promise<Metadata | undefined> {
  const resolvedParams = await params;

  const page = await getSeoDataCommon(
    `pricing?locale=${resolvedParams.locale}&populate[SeoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "pricing" });
}
export default async function PricingPage({ params }: PricongParams) {
  const { locale } = await params;
  const {
    commonData,
    pageContent,
    reviews,
    pricingPlans,
    pricingComparison,
    faqs,
    emailSign,
  } = await getPricingData(locale);

  return (
    <main className="font-myriad overflow-hidden">
      <GroupOfComponets
        pageContent={pageContent}
        commonData={commonData}
        pricingPlans={pricingPlans}
        pricingComparison={pricingComparison}
        reviews={reviews}
      />
      <div className="bg-white">
        <Suspense fallback={<LoadingFallback />}>
          <Faq
            mainContainerclassName="pb-16 lg:pb-24 xl:pb-[134px] z-20 px-2"
            faq={faqs}
            classNameAnswer="pt-1"
            TittleClassName="w-fit mx-auto opacity-90 sm:opacity-100  !leading-[130%]"
            variant="muted"
            headingVariant="primary"
          />
        </Suspense>
        <div className="relative overflow-x-hidden">
          <div className="px-2 pb-12 lg:pb-9 xl:pb-12">
            <Suspense fallback={<LoadingFallback />}>
              <CommonFormField
                variantBtn="primary"
                variant="white"
                title={emailSign?.title || "Start using Contractor+ for free"}
                subTitle={
                  emailSign?.subTitle ||
                  "Try it out now. Upgrade when you're ready."
                }
                placeholder={emailSign?.emailSign || "Your Email"}
                createBtn={commonData?.getStartedFreeBtn}
                mobileBtn={commonData?.mobileBtn}
                ncc={commonData?.nccTxt}
              />
            </Suspense>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <TrustBar
              platforms={blackPlatforms}
              className="pb-[91px] sm:pb-10"
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
