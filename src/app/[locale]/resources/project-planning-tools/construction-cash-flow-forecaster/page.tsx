import ConstructionCashFlowForecaster from "@/components/resourcehub/pages/project-planning/ConstructionCashFlowForecaster";
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
    filters[slug][$eq]=/resources/project-planning-tools/construction-cash-flow-forecaster&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/project-planning-tools/construction-cash-flow-forecaster",
  });
}
const ConstructionCashFlowForecasterPage = () => {
  return <ConstructionCashFlowForecaster />;
};

export default ConstructionCashFlowForecasterPage;
