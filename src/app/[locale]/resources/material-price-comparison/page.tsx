import ComparePage from "@/components/resourcehub/pages/ComparePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Material Price Comparison for Contractor",
  description:
    "Review and compare the latest prices for key construction materials across major suppliers and regions.",
};
const MaterialComparePage = () => {
  return (
    <>
      <ComparePage />
    </>
  );
};

export default MaterialComparePage;
