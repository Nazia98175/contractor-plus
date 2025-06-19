import CloudsAnimation from "@/components/common/CloudsAnimation";
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
import EntireBusiness from "@/components/homepage/EntireBusiness";
import HvacFaq from "@/components/hvca/HvacFaq";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "@/services/crm";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
export const metadata: Metadata = {
  title:
    "Contractor+ A field service CRM that runs your business, not just stores contacts",
  description:
    "Built-in phone and SMS. AI receptionist. Property profiles. Full communication history. You no longer need 6 separate tools to do what Contractor+ CRM does in one.",
};
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
  const [
    crmPageContent,
    reviews,
    section3,
    section4,
    section5,
    section6,
    section7,
    faq,
    blogs,
  ] = await Promise.all([
    getCrmPage(useParams?.slug, useParams.locale, "&populate=*"),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[reviews][populate]=reviews",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[switchingTool][populate]=cardsDetail",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[fieldService][populate][cardsDetail][populate]=*",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[trackProperties][populate][cardDetails][populate]=*",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[comparison][populate][centerLogo]=true&populate[comparison][populate][features]=true",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[teamsUsingContractor][populate][cards]=*",
    ),
    getCrmPage(
      useParams?.slug,
      useParams.locale,
      "&populate[faqs][populate]=faq",
    ),
    getBlogs(useParams?.locale, "&sort=publishedAt:desc&pagination[limit]=3"),
  ]);
  const theme = useParams.slug === "estimate" ? "estimateTheme" : "dark";
  return (
    <>
      {crmPageContent?.data?.length > 0 && (
        <>
          <CrmHero hero={crmPageContent?.data?.[0]?.hero} />
          <TrustedService reviews={reviews} />
          <SwitchingTool switchingTool={section3?.data?.[0]?.switchingTool} />
          <FieldService
            slug={useParams?.slug}
            fieldService={section4?.data?.[0]?.fieldService}
            theme={theme}
          />

          <div className="bg-white">
            {useParams?.slug === "crm" && (
              <>
                <TrackProperties
                  ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
                  trackProperties={section5?.data?.[0]?.trackProperties}
                />

                <LikeYouDoContacts
                  data={section5?.data?.[0]?.trackProperties?.cardDetails?.[0]}
                />
                <HowContractorWork
                  ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
                  trackProperties={section5?.data?.[0]?.trackProperties}
                  data={section5?.data?.[0]?.trackProperties?.cardDetails?.[1]}
                />
              </>
            )}
            <KindAdorable
              slug={useParams?.slug}
              kindAdorable={section6?.data?.[0]?.comparison}
            />

            <TeamsUsingContractor
              data={section7?.data?.[0]?.teamsUsingContractor}
            />
            <ThousandsReviews
              data={crmPageContent?.data?.[0]?.thousandReviews}
              reviews={reviews?.data?.[0]?.reviews?.reviews}
            />
          </div>
          <div className="relative overflow-hidden">
            <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
            <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
            <CrmSercive
              createBtn={crmPageContent?.data?.[0]?.hero?.createBtn}
              mobileBtn={crmPageContent?.data?.[0]?.hero?.mobileBtn}
              ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
              data={crmPageContent?.data?.[0]?.crmService}
            />

            <TrustBarHvca
              platforms={platforms}
              className="mx-auto w-full max-w-[889px]"
            />
            <Faq
              faq={faq?.data?.[0]?.faqs}
              classNameAnswer="pt-1"
              mainContainerclassName="md:pt-[76px] pt-[66px] md:pb-[83px] pb-0 px-2"
            />
          </div>
          <BlogPosts
            data={crmPageContent?.data?.[0]?.blogs}
            blogs={blogs}
            className="mt-7 md:mt-9"
          />
        </>
      )}
    </>
  );
};

export default CrmBussinessPage;
