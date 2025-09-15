// LeadGeneration.tsx (page component)
import CommonFormField from "@/components/common/CommonFormField";
import CommonLogos from "@/components/common/CommonLogos";
import { blackPlatforms, dealReviews2 } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import GoingFieldSevices from "@/components/fieldservices/GoingFieldSevices";
import RunWithContractor from "@/components/fieldservices/RunWithContractor";
import AlwaysTransparentAccessible from "@/components/leadgeneration/AlwaysTransparentAccessible";
import CombinesPowerfulAi from "@/components/leadgeneration/CombinesPowerfulAi";
import DragAnimaiton from "@/components/leadgeneration/DragAnimaiton";
import LeadGenerationHero from "@/components/leadgeneration/LeadGenerationHero";
import LottieStat from "@/components/leadgeneration/LottieStat";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getLocalSeoForContractorsData } from "@/services/local-seo-for-contractors/getLocalSeoForContractorsData";
import { getMaxMindLocation } from "@/services/map";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata | undefined> {
  const page = await getSeoDataCommon(
    `local-seo-of-contractor?locale=${params.locale}&populate=*`,
  );
  if (!page) notFound();

  return generateSeoMetaData({ page, slug: params.slug });
}
interface Params {
  params: { locale: string };
}

export default async function LeadGeneration({ params }: Params) {
  const { locale } = params;

  // Get IP from cookies and fetch geolocation on the server
  const ip = (await cookies()).get("user-ip")?.value;
  let geoLocation = null;

  geoLocation = await getMaxMindLocation(ip);

  // Process location data on the server
  const processedLocation = geoLocation
    ? {
        city:
          geoLocation?.city?.names?.[locale || "en"] ||
          geoLocation?.city?.names?.["en"] ||
          "New York",
        country: geoLocation?.country?.iso_code?.toUpperCase() || "US",
      }
    : {
        city: "New York",
        country: "US",
      };
  const useParams = await params;

  const {
    pageContent,
    hero,
    cardsWithLottie,
    commonProblems,
    comparisonList,
    problemSolutionSection,
    seeWhatPossible,
    alwaysTransparentAccessible,
    thousandReviews,
    emailSignupSection,
    faqs,
    commonData,
  } = await getLocalSeoForContractorsData(useParams?.locale);
  console.log("edsxzcsxz0", thousandReviews);

  return (
    <>
      <div className="shadow-c5 relative z-20 pb-[35px]">
        <LeadGenerationHero
          tag={hero?.heroSubTitle}
          heading={hero?.heroTitle}
          description={hero?.heroDescription}
          getStartedFreeBtn={hero.btnText}
          nccTxt={hero?.heroSubDesc}
          location={processedLocation}
        />
        <LottieStat className="mt-8 gap-[55px]" />
      </div>
      <div className="bg-white pt-8 sm:pt-12 sm:pb-[50px] md:pt-[76px] lg:pb-[85px]">
        <GoingFieldSevices
          isImageshow={false}
          cardsDetail={commonProblems?.cardsDetail}
          title={commonProblems?.title}
        />
      </div>
      <RunWithContractor kindAdorable={comparisonList} />
      <div className="overflow-hidden bg-white">
        <CombinesPowerfulAi
          title={problemSolutionSection?.title}
          subTitle={problemSolutionSection?.subTitle}
        />
        <DragAnimaiton title={seeWhatPossible.title} />
        <AlwaysTransparentAccessible
          image={alwaysTransparentAccessible?.image}
          title={
            alwaysTransparentAccessible?.title ||
            "Always transparent, Always accessible"
          }
          desc={
            alwaysTransparentAccessible?.desc ||
            "See what's going on 24/7 and access reports in your own personal local SEO portal. You'll never wonder what's been done or how your rankings look. Access your dashboard anytime. "
          }
        />
        <div className="pt-9 pb-[84px]">
          <CommonLogos />
        </div>
        <ThousandsReviews
          data={dealReviews2}
          reviews={dealReviews2.reviews}
          variant="primary"
          apiData={false}
        />
        <div className="px-2">
          <CommonFormField
            className="pt-12 sm:pt-16"
            variantBtn="light"
            variant="white"
            title={
              emailSignupSection?.title ||
              "This is what local SEO for contractors should have been all along"
            }
            subTitle={
              emailSignupSection?.subTitle ||
              "Start using Contractor+ free. Upgrade to get the full operating system"
            }
            placeholder={emailSignupSection?.placeholder || "Your Email"}
            createBtn={"Get free audit"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
          />
        </div>
        <TrustBar
          platforms={blackPlatforms}
          className="py-6 pb-8 md:pb-10 lg:pb-12 xl:pb-[66px]"
        />
        <Faq
          headingVariant="primary"
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="muted"
        />
      </div>
    </>
  );
}
