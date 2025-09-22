import CostPlusContract from "@/components/resourcehub/pages/contract-templates/CostPlusContract";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `resources?
    filters[slug][$eq]=/resources/contract-templates/cost-plus-contract&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/contract-templates/cost-plus-contract",
  });
}
const CostPlusContractPage = () => {
  return (
    <>
      <CostPlusContract />
    </>
  );
};

export default CostPlusContractPage;
