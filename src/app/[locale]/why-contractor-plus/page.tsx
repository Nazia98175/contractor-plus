import WhyContractorMain from "@/components/whycontractor/WhyContractorMain";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getWhyContractorData } from "@/services/whyContractor/getWhyContractorData";
import { PagePromise } from "@/types";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PagePromise): Promise<Metadata | undefined> {
  const { locale } = await params;

  const page = await getSeoDataCommon(
    `why-contractor?locale=${locale}&populate[seoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "/why-contractor-plus" });
}
export default async function WhyContractorPage({ params }: PagePromise) {
  const { locale } = await params;

  const {
    commonData,
    pageContent,
    industryShiftHighlights,
    narrativeFlow,
    seperateSolution,
    connectedSystem,
    featuresPlatform,
    emailSign,
  } = await getWhyContractorData(locale);

  const data = {
    commonData,
    pageContent,
    industryShiftHighlights,
    narrativeFlow,
    seperateSolution,
    connectedSystem,
    featuresPlatform,
    emailSign,
  };
  return (
    <>
      <WhyContractorMain data={data} />
    </>
  );
}
