// LeadGeneration.tsx (page component)
import CommonFormField from "@/components/common/CommonFormField";
import CommonLogos from "@/components/common/CommonLogos";
import {
  blackPlatforms,
  competitordoes,
  dealReviews2,
} from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import {
  leadGenerationData,
  leadHGenerationFaqData,
} from "@/components/common/Utils";
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
import { getMaxMindLocation } from "@/services/map";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `local-seo-of-contractor?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

interface Params {
  params: Promise<{ locale: string }>;
}

const LeadGeneration = async ({ params }: Params) => {
  const useParams = await params;

  // Get IP from cookies and fetch geolocation on the server
  const ip = (await cookies()).get("user-ip")?.value;
  let geoLocation = null;

  geoLocation = await getMaxMindLocation(ip);

  // Process location data on the server
  const processedLocation = geoLocation
    ? {
        city:
          geoLocation?.city?.names?.[useParams?.locale || "en"] ||
          geoLocation?.city?.names?.["en"] ||
          "New York",
        country: geoLocation?.country?.iso_code?.toUpperCase() || "US",
      }
    : {
        city: "New York",
        country: "US",
      };

  return (
    <>
      <div className="shadow-c5 relative z-20 pb-[35px]">
        <LeadGenerationHero
          tag="Local SEO for Contractors"
          heading="Crush local search for less than the cost of one bad lead"
          description="Contractor+ Local manages your online reputation, reviews, photos, citations, and Google posts—so you get more local leads while staying focused on the job"
          getStartedFreeBtn="Get Free Audit"
          mobileBtn="Download FREE App"
          nccTxt="No credit card required"
          imgUrl="/images/png/lead-generation-hero.png"
          location={processedLocation} // Pass processed location directly
        />
        <LottieStat className="mt-8 gap-[55px]" />
      </div>
      <div className="bg-white pt-8 sm:pt-12 sm:pb-[50px] md:pt-[76px] lg:pb-[85px]">
        <GoingFieldSevices
          isImageshow={false}
          switchingTool={{
            title:
              "Every search you don't show up for means your competitor does",
            cardsDetail: competitordoes,
          }}
        />
      </div>
      <RunWithContractor kindAdorable={leadGenerationData} />
      <div className="overflow-hidden bg-white">
        <CombinesPowerfulAi />
        <DragAnimaiton />
        {/* <PossibleWithContractor /> */}
        <AlwaysTransparentAccessible
          imgPath="/images/webp/always-transparent.webp"
          headingPrimary="Always transparent,"
          headingSecondary="Always accessible"
          description="See what's going on 24/7 and access reports in your own personal local SEO portal. You'll never wonder what's been done or how your rankings look. Access your dashboard anytime. "
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
              "This is what local SEO for contractors should have been all along"
            }
            subTitle={
              "Start using Contractor+ free. Upgrade to get the full operating system."
            }
            placeholder={"Your Email"}
            createBtn={"Get free audit"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
          />
        </div>
        <TrustBar
          platforms={blackPlatforms}
          className="pt-6 pb-8 md:pb-10 lg:pb-12 xl:pb-[66px]"
        />
        <Faq
          headingVariant="primary"
          faq={leadHGenerationFaqData}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="muted"
        />
      </div>
    </>
  );
};

export default LeadGeneration;
