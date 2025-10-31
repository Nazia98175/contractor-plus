import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import CommonHero from "@/components/crmbussiness/CommonHero";
import YouNeedFeatures from "@/components/seeallfeatures/YouNeedFeatures";
import { getAllFeaturesData } from "@/services/all-features/getAllFeaturesData";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `all-feature?locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}
export default async function SeeAllFeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { hero, commonData, pageContent, featuresSection } =
    await getAllFeaturesData(locale);

  if (!pageContent) return notFound();

  return (
    <main className="relative">
      <CommonHero hero={hero} isShowHeroImg={false} commonData={commonData} />
      <YouNeedFeatures featuresItems={featuresSection} />
      <div className="main-container relative z-50">
        <CommonFormField
          variant="default"
          title={pageContent?.emailSignUpSection?.title}
          subTitle={pageContent?.emailSignUpSection?.subTitle}
          placeholder={pageContent?.emailSignUpSection?.placeholder}
          createBtn={commonData?.getStartedFreeBtn}
          mobileBtn={commonData?.mobileBtn}
          ncc={commonData?.nccTxt}
          variantBtn="primary"
        />
        <div className="mt-12 md:mb-[50px]">
          <TrustBar
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />
        </div>
      </div>
    </main>
  );
}
