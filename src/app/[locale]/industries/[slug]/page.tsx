import CloudsAnimation from "@/components/common/CloudsAnimation";
import CommonFormField from "@/components/common/CommonFormField";
import {
  blackPlatforms,
  integrationLogos,
  platforms,
} from "@/components/common/Helper";
import Faq from "@/components/crmbussiness/Faq";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import AwardBadges from "@/components/industry/AwardBadge";
import EraOfSoftware from "@/components/industry/EraOfSoftware";
import IndustryHero from "@/components/industry/IndustryHero";
import SecondaryReview from "@/components/industry/SecondaryReview";
import TrustBatBuildContractor from "@/components/industry/TrustBatBuildContractor";
import WantingMore from "@/components/industry/WantingMore";
import TrustBar from "@/components/common/TrustBar";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import OverlapCardMobileViewChild from "@/components/industry/IndustryOverlapCardMobileViewChild";
import MovingSoftware from "@/components/industry/MovingSoftware";
import { getSeoData } from "@/services/common/seoMeta";
import { getIndustryPageData } from "@/services/industries/getIndustryPageData";
import { generateSeoMetadata } from "@/utils/getSeoMeta";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const page = await getSeoData(
    "industries-pages",
    resolvedParams.locale,
    resolvedParams.slug,
  );

  if (!page) notFound();

  return generateSeoMetadata({ page, slug: resolvedParams.slug });
}
type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
const IndustryPage = async ({ params }: PageProps) => {
  const useParams = await params;

  if (!useParams?.slug) {
    return notFound();
  }

  const {
    pageContentRes,
    heroImg,
    homeCards,
    trustedCompanies,
    switchingTool,
    fieldServiceData,
    trackProperties,
    teamsUsingContractor,
    faqs,
    thousandReviews,
    commonData,
    integrationList,
    blogsByCategory,
  } = await getIndustryPageData(useParams?.slug, useParams?.locale);

  return (
    <main className="home-page-wrapper-2">
      <div id="home-page-view-port-screen-hvac" className="relative opacity-0">
        <div className="relative bg-white">
          <div className="relative">
            <div className="relative">
              <IndustryHero
                hero={pageContentRes?.hero}
                homeCard={homeCards}
                heroImg={heroImg}
                commonData={commonData}
              />
              <div className="absolute bottom-[-2px] z-20 h-1 w-full bg-white"></div>
            </div>
            <TrustBatBuildContractor
              trustedCompanies={trustedCompanies}
              platforms={blackPlatforms}
              trustBarImages={commonData?.trustedCompaniesBlackBG}
              showTrustedSection={true}
              className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col px-2 pt-[43px] pb-14 md:pt-[13px] xl:pt-5"
            />
          </div>
          <MovingSoftware switchingTool={switchingTool} />
          <div className="relative hidden md:block">
            <WantingMore
              fieldServiceData={fieldServiceData}
              slug={pageContentRes?.pageName}
            />
          </div>
          <div className="relative mb-12 block md:hidden">
            <OverlapCardMobileViewChild
              fieldServiceData={fieldServiceData}
              slug={pageContentRes?.pageName}
              theme={"light"}
            />
          </div>
          <EraOfSoftware
            trackProperties={trackProperties}
            slug={pageContentRes?.pageName}
          />
        </div>
        <AwardBadges
          teamsUsingContractor={teamsUsingContractor}
          buttonInfo={commonData}
          customIconsMap={teamsUsingContractor}
        />
      </div>

      <SecondaryReview
        data={{ title: thousandReviews?.title }}
        reviews={thousandReviews?.reviews}
        variant="secondary"
      />
      <div className="relative overflow-x-hidden">
        <Image
          fill
          className="pointer-events-none absolute top-[10%] left-0 z-10 block h-full w-full object-fill sm:hidden"
          src="/images/webp/large-comet-hvac.webp"
          alt="large-comet-hvac"
        />
        <div className="px-2 pt-[57px] pb-12 lg:pt-[90px] lg:pb-[65px] xl:pt-[113px]">
          <CommonFormField
            variant="tertiary"
            title={pageContentRes?.emailSignupSection?.title}
            subTitle={pageContentRes?.emailSignupSection?.subTitle}
            placeholder={pageContentRes?.emailSignupSection?.placeholder}
            createBtn={commonData?.getStartedFreeBtn}
            mobileBtn={commonData?.mobileBtn}
            ncc={commonData?.nccTxt}
            variantBtn="dark"
          />
        </div>
        <TrustBar
          platforms={platforms}
          // trustBarImages={commonData?.trustedCompaniesWhiteBG}
          className="pb-[148px] xl:pb-20"
        />
      </div>
      <WhatEverClient
        data={commonData?.contractorConnects}
        issection={false}
        images={
          integrationList?.images
            ? integrationList?.images?.map((item: any) => item?.url)
            : integrationLogos
        }
      />
      <div className="relative">
        <Faq
          mainContainerclassName="pt-9 pb-36 z-20 px-2"
          faq={faqs?.faqs}
          classNameAnswer="pt-1"
          TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
        />
        <CloudsAnimation
          imageClassMobile="hidden"
          imageClass="hidden"
          cloud1Class="md:!bottom-[53px] sm:!bottom-[32px] !bottom-[24px]"
          cloud2Class="sm:!bottom-[55px] !bottom-[29px] sm:hidden"
          className="bottom-[0%] w-screen overflow-hidden sm:bottom-[-4%]"
        />
        <div className="cloud-layer-bottom absolute bottom-[-1%] z-50 h-[68px] w-full sm:bottom-[-2%] sm:h-[64px] md:-bottom-[2%]"></div>
      </div>
      <div className="relative">
        <BlogPosts
          data={blogsByCategory || []}
          blogs={pageContentRes?.blogs}
          className="relative z-20 bg-white pb-8"
          variant="secondary"
          headingVariant="tertiary"
        />
      </div>
    </main>
  );
};

export default IndustryPage;
