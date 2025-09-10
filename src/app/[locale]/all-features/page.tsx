import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import CommonHero from "@/components/crmbussiness/CommonHero";
import YouNeedFeatures from "@/components/seeallfeatures/YouNeedFeatures";
import { getAllFeaturesData } from "@/services/all-features/getAllFeaturesData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Everything you need, in a single operating system.",
  description:
    "We believe you shouldn’t have to pay for 10 different softwares and connect them together. We also don’t believe in “gate keeping” our best features for Enterprise level customers.",
  keywords: ["The Field Service OS"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/contractor-invoicing-software.webp",
  //       width: 1920,
  //       height: 630,
  //       alt: "contractor-invoicing-software",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/all-features",
  },
};
export default async function SeeAllFeaturesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { hero, commonData, pageContent, featuresSection } =
    await getAllFeaturesData(params.locale);

  if (!pageContent) return notFound();
  console.log("featuresSection", featuresSection);

  return (
    <main className="relative">
      <CommonHero hero={hero} isShowHeroImg={false} commonData={commonData} />
      <div className="relative z-30 mx-auto mt-8 w-full max-w-[1920px] overflow-hidden sm:mt-16 md:mt-[98px]">
        {/* <YouNeedFeatures  featuresItems={featuresSection} /> */}
        <YouNeedFeatures />
      </div>
      <div className="main-container relative z-50">
        <CommonFormField
          variant="default"
          title={pageContent?.emailSignUpSection?.title}
          subTitle={pageContent?.emailSignUpSection?.subTitle}
          placeholder={pageContent?.emailSignUpSection?.placeholder}
          createBtn={commonData?.getStartedFreeBtn}
          mobileBtn={commonData?.mobileBtn}
          ncc={commonData?.nccTxt}
          variantBtn="primary"
        />
        <div className="mt-12 md:mb-[50px]">
          <TrustBar
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />
        </div>
      </div>
    </main>
  );
}
