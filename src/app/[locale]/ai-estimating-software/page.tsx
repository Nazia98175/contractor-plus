import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import {
  blogList,
  dealReviews2,
  estimateFaq,
  estimateFormData,
  estimaticBlogHeadingData,
  estimaticCardData,
  estimaticControlData,
  estimaticReviewsAi,
  platforms,
} from "@/components/common/Helper";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import TrustBar from "@/components/common/TrustBar";
import { estimateSoftwareData } from "@/components/common/Utils";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import IndustryService from "@/components/crmbussiness/IndustryService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import { getEstimaticPageData } from "@/services/estimatic-ai/getestimaticData";
import Image from "next/image";

export const metadata = {
  title: "Estimatic AI Estimating Software | Contractor+",
  description:
    "Create accurate estimates in minutes with Estimatic AI. Automate material takeoffs, pricing, and proposals with AI estimating that wins jobs.",
  keywords: ["ai estimating software"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/local-seo-og.webp",
  //       width: 1200,
  //       height: 630,
  //       alt: "Local SEO for Contractors",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/ai-estimating-software",
  },
};

const EstimaticAiPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const useParams = await params;

  const {
    pageContent,
    heroImg,
    reviews,
    comaprisonList,
    problemSolution,
    commonProblem,
    industriesData,
    thousandReviews,
    faqs,
    commonData,
  } = await getEstimaticPageData(useParams?.locale);
  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-estimatic-ai"
        className="relative opacity-0"
      >
        <EstimaticHero />
        <TrustedService
          reviews={estimaticReviewsAi}
          slug="crm"
          className="pb-6 lg:pt-6 lg:pb-3.5"
          apiData={false}
        />
        <RunWithContractor
          kindAdorable={estimateSoftwareData}
          variant="dark"
          icon={true}
          issubHeadingShow={true}
        />
      </div>
      <OneGetsSet />
      <div className="relative hidden md:block">
        <FieldService
          fieldService={estimaticCardData}
          theme="dark"
          mainClassName="text-center "
        />
      </div>
      <div className="mb-12 block md:hidden">
        <OverlapCardMobileViewChild
          fieldService={estimaticCardData}
          theme="dark"
          apiData={true}
          mainClassName="text-center "
        />
      </div>
      <div className="relative overflow-hidden">
        <SwitchingTool
          className="pb-[113px]"
          switchingTool={estimaticControlData}
        />
        <ContractorIndustry
          contractorIndustry={industriesData?.data?.Industries}
        />
        <Image
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-[90%] w-full max-w-[900px] object-center md:block"
          src="/images/webp/josh-lesson-left-background.webp"
          alt="webp bg"
          width={900}
          height={700}
        />
        <Image
          className="svgTwinkle absolute right-0 bottom-0 z-0 hidden h-[50%] w-full max-w-[700px] object-center lg:block"
          src="/images/webp/josh-lesson-right-background.webp"
          alt="webp bg"
          width={700}
          height={300}
        />
      </div>
      <AwardsTagsImg className="sm:mt-14" />
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
        data={estimateFormData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBar
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <Faq
        faq={estimateFaq}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-5 sm:pb-10"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <BlogPosts
        data={blogList}
        blogs={estimaticBlogHeadingData}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default EstimaticAiPage;
