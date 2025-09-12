import Accessibility from "@/components/accessibility/Accessibility";
import { getAccessibilityData } from "@/services/accessibility/getData";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `accessibility?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}
const AccessibilityPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const pagedata = await getAccessibilityData(locale);
  if (!pagedata) return notFound();
  return <Accessibility data={pagedata} />;
};

export default AccessibilityPage;
