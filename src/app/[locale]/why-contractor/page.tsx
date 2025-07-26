import WhyContractorMain from "@/components/why-contractor/WhyContractorMain";
import { getWhyContractorData } from "@/services/whyContractor/getWhyContractorData";

export const metadata = {
  title: "You can't scale a contracting business built on bottlenecks",
  description:
    "Hard work got you here. But it's not enough to get you where you want to go.",
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
