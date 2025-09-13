import WhyContractorMain from "@/components/whycontractor/WhyContractorMain";
import { getWhyContractorData } from "@/services/whyContractor/getWhyContractorData";

export const metadata = {
  title: "Why Contractor+ | The Only Contractor Operating System",
  description:
    "FSM software helps you keep up. An operating system helps you scale up. Contractor+ is affordable & powerful. No complexity. Start free.",
  keywords: ["Why Contractor Plus?+"],
  openGraph: {
    images: [
      {
        url: "/images/webp/why-contractor-og.webp",
        width: 1920,
        height: 630,
        alt: "why-contractor-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/why-contractor",
  },
};
const WhyContractorPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
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
};

export default WhyContractorPage;
