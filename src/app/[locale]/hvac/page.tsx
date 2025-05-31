import Header from "@/components/common/Header";
import { blackPlatforms, platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Finally from "@/components/homepage/Finally";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import AwardBadges from "@/components/hvca/AwardBadge";
import EraOfSoftware from "@/components/hvca/EraOfSoftware";
import HvcaFaq from "@/components/hvca/HvcaFaq";
import HvcaHero from "@/components/hvca/HvcaHero";
import HvcaSoftware from "@/components/hvca/HvcaSoftware";
import HvcaSoftwareService from "@/components/hvca/HvcaSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import WantingMore from "@/components/hvca/WantingMore";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <HvcaHero />
        <TrustBar
          platforms={blackPlatforms}
          showTrustedSection={true}
          className="relative z-20 mx-auto flex w-full max-w-[1050px] flex-col gap-4 px-2 pt-1 pb-14 sm:gap-6 sm:pt-[13px] md:gap-7 xl:gap-9"
        />
        <HvcaSoftware />
        <WantingMore />
        <EraOfSoftware />
        {/* <Whatever
            whateverOperation={homePageContent?.data?.whateverOperation}
          /> */}
      </div>
      <AwardBadges />
      <HvcaSoftwareService />
      <TrustBarHvca platforms={platforms} />
      {/* <Whatever/> */}
      <HvcaFaq faq={[]} />
      {/* <BlogPosts /> */}
    </>
  );
};

export default page;
