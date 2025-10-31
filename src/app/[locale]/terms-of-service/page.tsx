import TermsOfService from "@/components/terms-of-service/TermsOfService";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getTermsOfServiceData } from "@/services/terms-of-service/getData";
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
    `terms-of-service?locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

const TermsOfServicePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const pageData = await getTermsOfServiceData(locale);
  if (!pageData) {
    return notFound();
  }
  return <TermsOfService data={pageData} />;
};

export default TermsOfServicePage;
