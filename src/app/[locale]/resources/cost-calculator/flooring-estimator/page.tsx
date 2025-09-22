import FlooringEstimatorCalculator from "@/components/resourcehub/pages/calculators/FlooringEstimatorCalculator";
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
    filters[slug][$eq]=/resources/cost-calculator/flooring-estimator&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/flooring-estimator",
  });
}
const FlooringEstimatorCalculatorPage = () => {
  return <FlooringEstimatorCalculator />;
};

export default FlooringEstimatorCalculatorPage;
