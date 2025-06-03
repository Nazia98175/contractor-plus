import { platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvacFaq from "@/components/hvca/HvacFaq";
import HvacHero from "@/components/hvca/HvacHero";
import HvacReview from "@/components/hvca/HvacReview";
import HvacSoftware from "@/components/hvca/HvacSoftware";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import WantingMore from "@/components/hvca/WantingMore";

export const metadata = {
  title: "Contractor + - HVAC Software",
  description: "Not just HVAC software. Meet your operating system.",
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-white">
        <HvacHero />
        {/* <TrustBar
          platforms={blackPlatforms}
          showTrustedSection={true}
          className="1xl:gap-13 relative z-20 mx-auto flex w-full max-w-[1050px] flex-col gap-4 px-2 pt-1 pb-13 sm:gap-6 sm:pt-[13px] md:gap-7 xl:gap-9"
        /> */}
        <HvacSoftware />
        <WantingMore />
        <EraOfSoftware />
      </div>
      <div className="relative overflow-hidden">
        <AwardBadges />
        <HvacReview />
      </div>
      {/* <HvacSoftwareService /> */}
      <TrustBarHvca platforms={platforms} />
      {/* <Whatever whateverOperation={homePageContent?.data?.whateverOperation} /> */}
      <HvacFaq faq={[]} />
      <BlogPosts className="relative z-20 bg-white" variant="secondary" />
    </>
  );
};

export default page;
