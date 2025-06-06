import { platforms } from "@/components/common/Helper";
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
import TrustBar from "@/components/homepage/TrustBar";
import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "@/services/crm";
import { notFound } from "next/navigation";

type CrmBussinessPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
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
      "&populate[fieldService][populate][cardsDetail][populate]=content",
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

  return (
    <main>
      {crmPageContent?.data?.length > 0 && (
        <>
          <div className="black-bg">
            <CrmHero hero={crmPageContent?.data?.[0]?.hero} />
            <TrustedService reviews={reviews} />
            <SwitchingTool switchingTool={section3?.data?.[0]?.switchingTool} />
          </div>
          <FieldService
            slug={useParams?.slug}
            fieldService={section4?.data?.[0]?.fieldService}
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
          <div className="relative w-full">
            <CrmSercive
              createBtn={crmPageContent?.data?.[0]?.hero?.createBtn}
              ncc={crmPageContent?.data?.[0]?.hero?.ncc_txt}
              data={crmPageContent?.data?.[0]?.crmService}
            />
            {/* Cloud Layer 1 */}
          </div>

          <TrustBar platforms={platforms} />
          <Faq faq={faq?.data?.[0]?.faqs} />
          <BlogPosts data={crmPageContent?.data?.[0]?.blogs} blogs={blogs} />
        </>
      )}
    </main>
  );
};

export default CrmBussinessPage;
