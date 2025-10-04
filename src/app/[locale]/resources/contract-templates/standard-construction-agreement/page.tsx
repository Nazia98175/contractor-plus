import StandardConstructionAgreement from "@/components/resourcehub/pages/contract-templates/StandardConstructionAgreement";
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
    `resources?filters[slug][$eq]=/resources/contract-templates/standard-construction-agreement&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/contract-templates/standard-construction-agreement",
  });
}
const StandardConstructionAgreementPage = () => {
  return <StandardConstructionAgreement />;
};

export default StandardConstructionAgreementPage;
