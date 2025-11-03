import HvacCfmCalculator from "@/components/resourcehub/pages/calculators/HvacCfmCalculator";
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
    `resources?filters[slug][$eq]=/resources/cost-calculator/hvac-cfm-calculator&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/hvac-cfm-calculator",
  });
}
const HvacCfmCalculatorPage = () => {
  return <HvacCfmCalculator />;
};

export default HvacCfmCalculatorPage;
