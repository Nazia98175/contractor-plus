import CloudsAnimation from "@/components/common/CloudsAnimation";
import {
  blackPlatforms,
  makeOperationList,
  platforms,
} from "@/components/common/Helper";
import SoftwareUsed from "@/components/common/SoftwareUsed";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacHero from "@/components/hvca/HvacHero";
import HvacReview from "@/components/hvca/HvacReview";
import HvacSoftware from "@/components/hvca/HvacSoftware";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import WantingMore from "@/components/hvca/WantingMore";

export const metadata = {
  title: "Contractor + - HVAC Software",
  description: "Not just HVAC software. Meet your operating system.",
};

const page = () => {
  return (
    <>
      <div className="bg-white">
        <HvacHero />
        <TrustBar
          platforms={blackPlatforms}
          showTrustedSection={true}
          className="1xl:gap-13 relative z-20 mx-auto flex w-full max-w-[1050px] flex-col gap-4 px-2 pt-1 pb-13 sm:gap-6 sm:pt-[13px] md:gap-7 xl:gap-9"
        />
        <HvacSoftware />
        <WantingMore />
        <EraOfSoftware />
      </div>
      <div className="relative overflow-hidden">
        <AwardBadges />
        {/* <ThousandsReviews
          data={crmPageContent?.data?.[0]?.thousandReviews}
          reviews={reviews?.data?.[0]?.reviews?.reviews}
        /> */}
      </div>
      <HvacSoftwareService />
      <TrustBarHvca platforms={platforms} />
      {/* <WhatEverClient data={homePageContent?.data?.whateverOperation} /> */}
      <HvacFaq faq={[]} />
      <BlogPosts className="relative z-20 bg-white" variant="secondary" />
    </>
  );
};

export default page;
