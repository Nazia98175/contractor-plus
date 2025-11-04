import USConstructionLaborRates from "@/components/resourcehub/pages/USConstructionLaborRates";
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
    `resources?filters[slug][$eq]=/resources/usa-labor-rates&
    locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({
    page,
    slug: "/resources/usa-labor-rates",
  });
}
const UsaLaborRatePage = () => {
  return <USConstructionLaborRates />;
};

export default UsaLaborRatePage;
