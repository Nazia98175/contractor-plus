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
export const metadata = {
  title: "Contractor+ Affiliates: Earn for Every Referral",
  description:
    "Join our affiliate program and earn commission by referring new users to Contractor+.",
  keywords: ["Affiliate Program"],
  openGraph: {
    images: [
      {
        url: "/images/webp/affiliates-page-og.webp",
        width: 1920,
        height: 630,
        alt: "affiliates-page-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/affiliates",
  },
};
interface AffiliatesPageProps {
  params: Promise<{
    locale: string;
  }>;
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
      <TrustedService reviews={reviews?.reviews || []} />
      <WhyPartner title={whyContractor?.title} desc={whyContractor?.desc} />
      <AtAGlance
        glanceCards={atGlance?.arrayItems}
        title={atGlance?.atGlanceRes}
      />
      <SupplierBenefit
        title={howItWorks?.title}
        cardsData={howItWorks?.listTextDesc}
      />
      <WaysYouEarn
        title={waysYouEarn?.title}
        sections={
          waysYouEarn?.waysYouEarnItems?.map((item: any) => ({
            title: item?.title || "",
            items: item?.items || [{ subTitle: item?.title, desc: item?.desc }],
          })) || []
        }
      />
      <StorySection
        title={whatYouGet?.title}
        sections={whatYouGet?.arrayItems}
      />
      <WhoThisPerfect
        title={whoPerfect?.title}
        buildCards={whoPerfect?.arrayItems}
      />
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

      <div className="relative overflow-hidden">
        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
        <Faq
          headingVariant="default"
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="light"
        />
      </div>
    </main>
  );
}
