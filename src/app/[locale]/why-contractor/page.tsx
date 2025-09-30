import WhyContractorMain from "@/components/whycontractor/WhyContractorMain";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getWhyContractorData } from "@/services/whyContractor/getWhyContractorData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";
interface WhyContractorPageProps {
  params: Promise<{ locale: string; slug?: string }>;
}

export async function generateMetadata({
  params,
}: WhyContractorPageProps): Promise<Metadata | undefined> {
  const resolvedParams = await params;

  const page = await getSeoDataCommon(
    `affiliate?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "affiliates" });
}
export default async function WhyContractorPage({
  params,
}: WhyContractorPageProps) {
  const { locale } = await params;
  const useParams = await params;

  const {
    commonData,
    pageContent,
    industryShiftHighlights,
    narrativeFlow,
    seperateSolution,
    connectedSystem,
    featuresPlatform,
    emailSign,
  } = await getWhyContractorData(useParams?.locale);

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
