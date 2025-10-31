import AffiliatesHero from "@/components/affiliates/AffiliatesHero";
import StorySection from "@/components/affiliates/StorySection";
import WhyPartner from "@/components/affiliates/WhyPartner";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import TrustedService from "@/components/crmbussiness/TrustedService";
import PublicEndPoints from "@/components/developersapi/PublicEndPoints";
import SupplierBenefit from "@/components/suppliers/SupplierBenefit";
import { getAffiliatesData } from "@/services/affiliates/getAffiliatesData";
import AtAGlance from "../../../components/affiliates/AtAGlance";
import WaysYouEarn from "../../../components/affiliates/WaysYouEarn";
import WhoThisPerfect from "../../../components/affiliates/WhoThisPerfect";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Suspense } from "react";
import LoadingFallback from "@/components/common/LoadingFallback";

interface AffiliatesPageProps {
  params: Promise<{ locale: string; slug?: string }>;
}

export async function generateMetadata({
  params,
}: AffiliatesPageProps): Promise<Metadata | undefined> {
  const resolvedParams = await params;

  const page = await getSeoDataCommon(
    `affiliate?locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "/affiliates" });
}
export default async function AffiliatesPage({ params }: AffiliatesPageProps) {
  const { locale } = await params;
  const {
    hero,
    reviews,
    whyContractor,
    atGlance,
    howItWorks,
    waysYouEarn,
    whatYouGet,
    whoPerfect,
    applyJoin,
    faqs,
  } = await getAffiliatesData(locale);

  return (
    <main id="common-homepage-wrapper" className="relative">
      <AffiliatesHero
        heroTitle={hero?.heroTitle || ""}
        heroDescription={hero?.heroDescription || ""}
        heroImg={hero?.heroImg}
        ctaButton={hero?.ctaButton}
      />
      <Suspense fallback={<LoadingFallback />}>
        <TrustedService reviews={reviews || []} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WhyPartner title={whyContractor?.title} desc={whyContractor?.desc} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AtAGlance
          glanceCards={atGlance?.arrayItems}
          title={atGlance?.atGlanceRes}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SupplierBenefit
          title={howItWorks?.title}
          cardsData={howItWorks?.listTextDesc}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WaysYouEarn
          title={waysYouEarn?.title}
          sections={
            waysYouEarn?.waysYouEarnItems?.map((item: any) => ({
              title: item?.title || "",
              items: item?.items || [
                { subTitle: item?.title, desc: item?.desc },
              ],
            })) || []
          }
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <StorySection
          title={whatYouGet?.title}
          sections={whatYouGet?.arrayItems}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WhoThisPerfect
          title={whoPerfect?.title}
          buildCards={whoPerfect?.arrayItems}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Faq
          headingVariant="default"
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pt-[100px] pt-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="light"
        />
      </Suspense>

      <div className="relative overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          <PublicEndPoints
            title={applyJoin?.title || "Apply to join"}
            description={
              applyJoin?.desc ||
              "Have a big audience or unique distribution? Let’s talk campaign co‑funding and rev‑share accelerators."
            }
            freeTrialButtonText={applyJoin?.btnText || "Apply to join"}
            slackLinkHref={applyJoin?.btnUrl || applyJoin?.btnUrl}
            slack={false}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
        </Suspense>
      </div>
    </main>
  );
}
