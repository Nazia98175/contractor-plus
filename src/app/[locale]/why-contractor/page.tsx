import WhyContractorMain from "@/components/whycontractor/WhyContractorMain";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getWhyContractorData } from "@/services/whyContractor/getWhyContractorData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export const metadata = {
//   title: "Why Contractor+ | The Only Contractor Operating System",
//   description:
//     "FSM software helps you keep up. An operating system helps you scale up. Contractor+ is affordable & powerful. No complexity. Start free.",
//   keywords: ["Why Contractor Plus?+"],
//   openGraph: {
//     images: [
//       {
//         url: "/images/webp/why-contractor-og.webp",
//         width: 1920,
//         height: 630,
//         alt: "why-contractor-og",
//       },
//     ],
//   },
//   alternates: {
//     canonical: "https://v2site.contractorplus.app/why-contractor",
//   },
// };
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
