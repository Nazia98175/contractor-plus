import GeneralConstructionContract from "@/components/resourcehub/pages/contract-templates/GeneralConstructionContract";
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
    filters[slug][$eq]=/resources/contract-templates/general-construction-contract&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/contract-templates/general-construction-contract",
  });
}
const GeneralConstructionContractPage = () => {
  return <GeneralConstructionContract />;
};

export default GeneralConstructionContractPage;
