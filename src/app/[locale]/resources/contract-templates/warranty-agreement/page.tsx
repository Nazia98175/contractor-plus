import WarrantyAgreement from "@/components/resourcehub/pages/contract-templates/WarrantyAgreement";
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
    filters[slug][$eq]=/resources/contract-templates/warranty-agreement&
    locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/contract-templates/warranty-agreement",
  });
}
const WarrantyAgreementPage = () => {
  return <WarrantyAgreement />;
};

export default WarrantyAgreementPage;
