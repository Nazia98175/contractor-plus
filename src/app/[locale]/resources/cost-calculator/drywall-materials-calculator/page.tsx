import DrywallCalculator from "@/components/resourcehub/pages/calculators/DrywallCalculator";
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
    `resources?filters[slug][$eq]=/resources/cost-calculator/drywall-materials-calculator&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/drywall-materials-calculator",
  });
}
const DrywallCalculatorPage = () => {
  return <DrywallCalculator />;
};

export default DrywallCalculatorPage;
