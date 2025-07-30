import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import {
  blogList,
  contractorIndustry,
  dealReviews2,
  estimateFaq,
  estimateFormData,
  estimaticBlogHeadingData,
  estimaticCardData,
  estimaticControlData,
  estimaticReviews,
  platforms,
} from "@/components/common/Helper";
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
  title: "Contractor Plus - The first AI estimator worth trusting",
  description:
    "Estimatic references your costbook, live supplier pricing, and local labor rates to build estimates the same way you do. Just 100x faster.",
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
    industry,
    thousandReviews,
    faqs,
    commonData,
  } = await getEstimaticPageData(useParams?.locale);
  console.log(thousandReviews, "aiiii");
  return (
    <main id="home-page-wrapper-2" className="overflow-hidden">
      <div
        id="home-page-view-port-screen-estimatic-ai"
        className="relative opacity-0"
      >
        <EstimaticHero />
        <TrustedService
          reviews={estimaticReviews}
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
      <FieldService
        fieldService={estimaticCardData}
        theme="dark"
        slug="estimateTheme"
        apiData={false}
        mainClassName="text-center "
      />
      <div className="relative overflow-hidden">
        <SwitchingTool
          className="pb-[113px]"
          switchingTool={estimaticControlData}
        />

        <ContractorIndustry
          contractorIndustry={{
            ...contractorIndustry,
            url: contractorIndustry.url ?? "",
            btnText: contractorIndustry.btnText ?? "",
          }}
        />
        <Image
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-[90%] w-full max-w-[900px] object-center md:block"
          src="/images/webp/josh-lesson-left-background.webp"
          alt="webp bg"
          width={900}
          height={700}
          sizes="900px"
        />
        <Image
          className="svgTwinkle absolute right-0 bottom-0 z-0 hidden h-[50%] w-full max-w-[700px] object-center lg:block"
          src="/images/webp/josh-lesson-right-background.webp"
          alt="webp bg"
          width={700}
          height={300}
          sizes="700px"
        />
      </div>

      <AwardsTagsImg className="sm:mt-24 xl:mt-[133px]" />
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
