import CloudsAnimation from "@/components/common/CloudsAnimation";
import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, platforms } from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import Faq from "@/components/crmbussiness/Faq";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import AwardBadges from "@/components/industry/AwardBadge";
import EraOfSoftware from "@/components/industry/EraOfSoftware";
import SecondaryReview from "@/components/industry/SecondaryReview";
import IndustryHero from "@/components/industry/IndustryHero";
import TrustBarHvca from "@/components/industry/TrustBarHvca";
import TrustBatBuildContractor from "@/components/industry/TrustBatBuildContractor";
import WantingMore from "@/components/industry/WantingMore";

import {
  FasterIcon1,
  FasterIcon2,
  FasterIcon3,
  FasterIcon4,
  FasterIcon5,
  FasterIcon6,
} from "@/components/common/Icons";
import { getIndustryPageData } from "@/services/industries/getIndustryPageData";
import Image from "next/image";
import { notFound } from "next/navigation";
import MovingSoftware from "@/components/industry/MovingSoftware";

export const metadata = {
  title: "Not just HVAC software Meet your operating system",
  description:
    "Contractor+ connects every function of your business so it finally all works in sync.",
};
type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
const page = async ({ params }: PageProps) => {
  const useParams = await params;

  if (!useParams?.slug) {
    return notFound();
  }

  const {
    crmPageContent,
    heroImg,
    homeCards,
    trustedCompanies,
    switchingTool,
    fieldServiceData,
    trackProperties,
    teamsUsingContractor,
    faqs,
    blogsList,
    thousandReviews,
    commonData,
    trustBarImages,
  } = await getIndustryPageData(useParams?.slug, useParams?.locale);
  console.log(crmPageContent?.emailSignupSection, "email section");
  const customIconsMap: Record<number, React.ReactNode> = {
    0: <FasterIcon1 />,
    1: <FasterIcon2 />,
    2: <FasterIcon3 />,
  };
  const customIconsMap2: Record<number, React.ReactNode> = {
    0: <FasterIcon4 />,
    1: <FasterIcon5 />,
    2: <FasterIcon6 />,
  };
  return (
    <main className="overflow-hidden">
      <div className="relative bg-white">
        <div className="relative">
          <IndustryHero
            hero={crmPageContent?.hero}
            homeCard={homeCards}
            heroImg={heroImg}
            commonData={commonData}
          />
          <TrustBatBuildContractor
            trustedCompanies={trustedCompanies}
            platforms={blackPlatforms}
            trustBarImages={trustBarImages}
            showTrustedSection={true}
            className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col px-2 pt-[43px] pb-14 md:pt-[13px] xl:pt-5"
          />
        </div>
        <MovingSoftware switchingTool={switchingTool} />
        <WantingMore
          fieldServiceData={fieldServiceData}
          slug={crmPageContent?.pageName}
        />
        <EraOfSoftware
          trackProperties={trackProperties}
          slug={crmPageContent?.pageName}
        />
      </div>
      <AwardBadges
        teamsUsingContractor={teamsUsingContractor}
        buttonInfo={commonData}
        customIconsMap={
          useParams.slug === "hvac" ? customIconsMap : customIconsMap2
        }
      />
      {/* <ThousandsReviews
        data={{ title: "4.7 ★ across thousands of reviews" }}
        reviews={reviews}
        variant="secondary"
      /> */}
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
            title={crmPageContent?.emailSignupSection?.title}
            subTitle={crmPageContent?.emailSignupSection?.subTitle}
            placeholder={crmPageContent?.emailSignupSection?.placeholder}
            createBtn={commonData?.getStartedFreeBtn}
            mobileBtn={commonData?.mobileBtn}
            ncc={commonData?.nccTxt}
            variantBtn="dark"
          />
        </div>
        <TrustBarHvca
          platforms={platforms}
          trustBarImages={trustBarImages}
          className="pb-[148px] xl:pb-20"
        />
      </div>
      <WhatEverClient data={commonData?.contractorConnects} issection={false} />
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
      <BlogPosts
        data={blogsList}
        blogs={crmPageContent?.blogs}
        className="relative z-20 bg-white pb-8"
        variant="secondary"
        headingVariant="tertiary"
      />
    </main>
  );
};

export default page;
