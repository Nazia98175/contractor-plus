import ElevatorMaintenanceCostCalculator from "@/components/resourcehub/pages/calculators/ElevatorMaintenanceCostCalculator";
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
    filters[slug][$eq]=/resources/cost-calculator/elevator-maintenance-cost&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/cost-calculator/elevator-maintenance-cost",
  });
}
const ElevatorMaintenanceCostCalculatorPage = () => {
  return <ElevatorMaintenanceCostCalculator />;
};

export default ElevatorMaintenanceCostCalculatorPage;
