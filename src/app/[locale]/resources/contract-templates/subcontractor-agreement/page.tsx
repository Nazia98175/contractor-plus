import SubcontractorAgreement from "@/components/resourcehub/pages/contract-templates/SubcontractorAgreement";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `resources?filters[slug][$eq]=/resources/contract-templates/subcontractor-agreement&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/contract-templates/subcontractor-agreement",
  });
}
const SubcontractorAgreementPage = () => {
  return <SubcontractorAgreement />;
};

export default SubcontractorAgreementPage;
