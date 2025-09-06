import CommonFormField from "@/components/common/CommonFormField";
import { dealflowhero, platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import CommonHero from "@/components/crmbussiness/CommonHero";
import YouNeedFeatures from "@/components/seeallfeatures/YouNeedFeatures";

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
const SeeAllFeaturesPage = () => {
  return (
    <main className="relative">
      <CommonHero
        hero={{
          featureTag: "The Field Service OS",
          heroTitle: "Everything you need, in a single operating system.",

          heroDescription:
            "We believe you shouldn’t have to pay for 10 different softwares and connect them together. We also don’t believe in “gate keeping” our best features for Enterprise level customers.",
        }}
        heroImg={null}
        isShowHeroImg={false}
        slug="crm"
        apiData={false}
        commonData={dealflowhero}
      />
      <YouNeedFeatures />
      <div className="main-container relative z-50 -mt-[70px] md:-mt-[133px] lg:-mt-[193px]">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={"This is what a field service management software"}
          subTitle={
            "Start using Contractor+ free. Upgrade for the full operating system."
          }
          placeholder={"Your Email"}
          createBtn={"Get Started Free"}
          mobileBtn={"Download FREE App"}
          ncc={"No credit card required"}
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
};

export default SeeAllFeaturesPage;
