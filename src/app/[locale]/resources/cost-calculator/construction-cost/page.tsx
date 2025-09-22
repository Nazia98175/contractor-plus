import ConstructionCostCalculator from "@/components/resourcehub/pages/calculators/ConstructionCostCalculator";
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
    `resources?
    filters[slug][$eq]=/resources/cost-calculator/construction-cost&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/construction-cost",
  });
}
const ConstructionCostCalculatorPage = () => {
  return <ConstructionCostCalculator />;
};

export default ConstructionCostCalculatorPage;
