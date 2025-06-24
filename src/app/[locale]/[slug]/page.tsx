import { platforms } from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";
import FieldService from "@/components/crmbussiness/FieldService";
import HowContractorWork from "@/components/crmbussiness/HowContractorWork";
import KindAdorable from "@/components/crmbussiness/KindAdorable";
import LikeYouDoContacts from "@/components/crmbussiness/LikeYouDoContacts";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TeamsUsingContractor from "@/components/crmbussiness/TeamsUsingContractor";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrackProperties from "@/components/crmbussiness/TrackProperties";
import TrustedService from "@/components/crmbussiness/TrustedService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import { getSeoData } from "@/services/common/seoMeta";

import { getFeaturesPageData } from "@/services/features/getCrmPageData";
import { getSeoMeta } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;

  const page = await getSeoData(
    "services-pages",
    resolvedParams.locale,
    resolvedParams.slug,
    "&populate[seoMeta]=true&populate[hero]=true",
  );
  if (!page) return;

  return {
    title:
      page.seoMeta?.metaTitle ||
      page.hero?.heroTitle ||
      `Contractor+ ${resolvedParams.slug}`,
    description: page.seoMeta?.metaDescription || page.hero?.subtitle || "",
    keywords: page.seoMeta?.keywords || "",
    alternates: {
      canonical:
        page.seoMeta?.canonicalUrl ??
        `${process.env.NEXT_PUBLIC_DOMAIN}/${resolvedParams.slug}`,
    },
  };
}
interface Props {
  slug: string;
  fieldService: any;
  theme: "light" | "dark" | "estimateTheme";
}
const CrmBussinessPage = async ({ params }: CrmBussinessPageProps) => {
  const useParams = await params;
  if (!useParams?.slug) {
    return notFound();
  }
  const {
    crmPageContent,
    heroImg,
    reviews,
    switchingTool,
    fieldServiceData,
    trackProperties,
    comparison,
    teamsUsingContractor,
    faqs,
    blogs,
  } = await getFeaturesPageData(useParams?.slug, useParams?.locale);
  const theme = useParams?.slug === "estimate" ? "estimateTheme" : "dark";
  const page = crmPageContent?.data?.[0];
  return (
    <>
      {crmPageContent?.data?.length > 0 && (
        <>
          <CrmHero hero={page?.hero} slug={useParams?.slug} heroImg={heroImg} />
          <TrustedService reviews={reviews} />
          <SwitchingTool switchingTool={switchingTool?.switchingTool} />
          <FieldService
            slug={useParams?.slug}
            fieldService={fieldServiceData?.fieldService}
            theme={theme}
            apiData={true}
          />

          <div className="bg-white">
            {useParams?.slug === "crm" && (
              <>
                <TrackProperties
                  ncc={page?.hero?.ncc_txt}
                  trackProperties={trackProperties?.trackProperties}
                />

                <LikeYouDoContacts
                  data={trackProperties?.trackProperties?.cardDetails?.[0]}
                />
                <HowContractorWork
                  ncc={page?.hero?.ncc_txt}
                  trackProperties={trackProperties?.trackProperties}
                  data={trackProperties?.trackProperties?.cardDetails?.[1]}
                />
              </>
            )}
            <KindAdorable
              slug={useParams?.slug}
              kindAdorable={comparison?.comparison}
            />
            <TeamsUsingContractor
              data={teamsUsingContractor?.teamsUsingContractor}
              slug={useParams?.slug}
            />
            <ThousandsReviews
              data={page?.thousandReviews}
              reviews={reviews?.data?.[0]?.reviews?.reviews}
            />
          </div>
          <div className="relative overflow-hidden">
            <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
            <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
            <CrmSercive
              createBtn={page?.hero?.createBtn}
              mobileBtn={page?.hero?.mobileBtn}
              ncc={page?.hero?.ncc_txt}
              data={page?.crmService}
              variant="primary"
              className={` ${useParams?.slug === "crm" ? "xs:max-w-[89%] max-w-[83%] pt-10 sm:max-w-[1120px] sm:pt-0" : "xs:max-w-[81%] max-w-[76%] pt-10 sm:max-w-[780px] sm:pt-0"}`}
            />
            <TrustBarHvca
              platforms={platforms}
              className="mx-auto w-full max-w-[889px]"
            />
            <Faq
              faq={faqs?.faqs}
              classNameAnswer="pt-1"
              mainContainerclassName="md:pt-[76px] pt-[66px] md:pb-[83px] pb-0 px-2"
            />
          </div>
          <BlogPosts
            data={page?.blogs}
            blogs={blogs}
            className="mt-7 md:mt-9"
          />
        </>
      )}
    </>
  );
};

export default CrmBussinessPage;
