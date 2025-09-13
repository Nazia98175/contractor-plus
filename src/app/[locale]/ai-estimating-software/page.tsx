import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import CommonFormField from "@/components/common/CommonFormField";
import { estimaticReviewsAi, platforms } from "@/components/common/Helper";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import EstimaticHero from "@/components/estimaticAi/EstimaticHero";
import OneGetsSet from "@/components/estimaticAi/OneGetsSet";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getEstimaticPageData } from "@/services/estimatic-ai/getestimaticData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `estimatic-ai?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

const EstimaticAiPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const useParams = await params;

  const {
    pageContent,
    reviews,
    comparisonList,
    problemSolution,
    commonProblem,
    industriesData,
    thousandReviews,
    emailSignupSection,
    faqs,
    commonData,
    blogs,
  } = await getEstimaticPageData(useParams?.locale);
  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-estimatic-ai"
        className="relative opacity-0"
      >
        <EstimaticHero
          hero={pageContent}
          createBtn={commonData?.getStartedFreeBtn}
          createMobileBtn={commonData?.mobileBtn}
          nccTxt={commonData?.nccTxt}
          estimateHeroData={pageContent?.resultStatsEstimatic || []}
        />
        <TrustedService
          reviews={reviews?.reviews || []}
          className="pb-6 lg:pt-6 lg:pb-3.5"
        />
        <RunWithContractor
          kindAdorable={comparisonList}
          variant="dark"
          icon={true}
          issubHeadingShow={true}
        />
      </div>
      <OneGetsSet content={comparisonList?.comparison} />
      <div className="relative hidden md:block">
        <FieldService
          fieldService={problemSolution}
          theme="dark"
          mainClassName="text-center "
        />
      </div>
      <div className="mb-12 block md:hidden">
        <OverlapCardMobileViewChild
          fieldService={problemSolution}
          theme="dark"
          apiData={true}
          mainClassName="text-center "
        />
      </div>
      <div className="relative overflow-hidden">
        <SwitchingTool className="pb-[113px]" switchingTool={commonProblem} />
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
        data={thousandReviews}
        reviews={thousandReviews?.reviews}
        variant="secondary"
      />
      <div className="pt-20 pb-10 sm:pb-[75px] lg:pt-[110px] xl:pt-[120px]">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={
            emailSignupSection?.title ||
            "The AI estimate generator that will change your business forever"
          }
          subTitle={
            emailSignupSection?.subTitle ||
            "Get started with Estimatic AI in Contractor+ today."
          }
          placeholder={emailSignupSection?.placeholder || "Your Email"}
          createBtn={"Get Started Free"}
          mobileBtn={"Download FREE App"}
          ncc={"No credit card required"}
        />
      </div>

      <TrustBar
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <div className="relative overflow-hidden">
        <Faq
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-5 sm:pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>
      <BlogPosts
        data={blogs?.data || []}
        blogs={pageContent?.blogs}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </main>
  );
};

export default EstimaticAiPage;
