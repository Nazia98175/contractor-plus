import SnowRemovalCalculator from "@/components/resourcehub/pages/calculators/SnowRemovalCalculator";
import { Metadata } from "next";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `resources?filters[slug][$eq]=/resources/cost-calculator/snow-removal&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/snow-removal",
  });
}
const SnowRemovalCalculatorPage = () => {
  return <SnowRemovalCalculator />;
};

export default SnowRemovalCalculatorPage;
