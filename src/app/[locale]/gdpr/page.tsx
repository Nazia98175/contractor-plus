import Gdpr from "@/components/gdpr/Gdpr";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getGDRPData } from "@/services/gdrp/getData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `gdrp?locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}
const GdprPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const pageData = await getGDRPData(locale);
  if (!pageData) return notFound();
  return <Gdpr data={pageData} />;
};

export default GdprPage;
