import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import OverlapCardMobileViewChild from "@/components/common/OverlapCardMobileViewChild";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import AppOpratingSytem from "@/components/lp/generalfsm/AppOpratingSytem";
import GeneralFsmHero from "@/components/lp/generalfsm/GeneralFsmHero";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getAllLpPages, getLpPageData } from "@/services/lp/getLpData";
import { PromiseParams } from "@/types";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const revalidate = 300;

export const generateStaticParams = async () => {
  try {
    const data = await getAllLpPages("en");
    // const locales = ["en", "fr", "es"];
    const locales = ["en"];
    const params = [];

    if (!data) {
      return [];
    }

    if (Array.isArray(data) && data.length > 0) {
      for (const locale of locales) {
        for (const page of data) {
          params.push({
            locale,
            slug: page.slug.toString(),
          });
        }
      }
    }

    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const { slug, locale } = await params;
  const page = await getSeoDataCommon(
    `/lp-pages?locale=${locale}&filters[slug][$eq]=${slug}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: `/lp/${slug}` });
}

const GeneralFsmPage = async ({ params }: { params: PromiseParams }) => {
  const { slug, locale } = await params;

  const [data] = await Promise.all([getLpPageData(locale, slug!)]);

  //If no page found
  if (!data) {
    return notFound();
  }

  return (
    <main id="common-homepage-wrapper">
      <div
        id="home-page-view-port-screen"
        className="relative overflow-hidden opacity-0"
      >
        <GeneralFsmHero data={data} />
        <TrustedService
          reviews={data?.reviews || []}
          className="pb-6 lg:pt-6 lg:pb-3.5"
        />
        <RunWithContractor
          kindAdorable={data?.comparisonTable}
          variant="dark"
          icon={true}
          issubHeadingShow={true}
        />
      </div>
      <AppOpratingSytem data={data} />
      <div className="relative hidden md:block">
        <FieldService
          fieldService={data?.problemSolutionSection}
          theme="dark"
          mainClassName="text-center"
        />
      </div>
      <div className="mb-12 block md:hidden">
        <OverlapCardMobileViewChild
          fieldService={data?.problemSolutionSection}
          theme="dark"
          mainClassName="text-center "
        />
      </div>
      <div className="relative overflow-hidden">
        <SwitchingTool
          className="pb-[113px]"
          switchingTool={data?.commonProblems}
        />
        <ContractorIndustry contractorIndustry={data?.industries} />
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

      <div className="pb-10">
        <CommonFormField
          variantBtn="primary"
          variant="default"
          title={data?.emailSignupSection?.title ?? ""}
          subTitle={data?.emailSignupSection?.subTitle ?? ""}
          placeholder={data?.emailSignupSection?.placeHolder ?? ""}
          createBtn={data?.emailSignupSection?.btnText ?? "Get Started Free"}
          mobileBtn={data?.emailSignupSection?.btnMobile ?? "Download FREE App"}
          ncc={"No credit card required"}
        />
      </div>
      <TrustBar
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <div className="relative overflow-hidden">
        <Faq
          faq={data?.faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-5 sm:pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
      </div>
    </main>
  );
};

export default GeneralFsmPage;
