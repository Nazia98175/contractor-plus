import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, pricingfaqitems } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import GroupOfComponets from "@/components/pricing/GroupOfComponets";
import { getPricingData } from "@/services/pricing/getPricingData";

export const metadata = {
  title: "Plans & Pricing | Start With Contractor+ Free",
  description:
    "Pricing our competitors hate, but our contractors love. $0 forever for free plan. $29/month solopreneur. $19/person for team of 5. Start here.",
  keywords: ["Contractor Plus Pricing"],
  openGraph: {
    images: [
      {
        url: "/images/webp/pricing-og.webp",
        width: 1920,
        height: 630,
        alt: "pricing-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/pricing",
  },
};
const PricingPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const useParams = await params;

  const {
    commonData,
    pageContent,
    reviews,
    pricingPlans,
    pricingComparison,
    faqs,
    emailSign,
  } = await getPricingData(useParams?.locale);
  console.log("frdsxz", pricingComparison);

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
        <Faq
          mainContainerclassName="pb-16 lg:pb-24 xl:pb-[134px] z-20 px-2"
          faq={faqs}
          classNameAnswer="pt-1"
          TittleClassName="w-fit mx-auto opacity-90 sm:opacity-100  !leading-[130%]"
          variant="muted"
          headingVariant="primary"
        />
        <div className="relative overflow-x-hidden">
          <div className="px-2 pb-12 lg:pb-9 xl:pb-12">
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
          </div>
          <TrustBar platforms={blackPlatforms} className="pb-[91px] sm:pb-10" />
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
