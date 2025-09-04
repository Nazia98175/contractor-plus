import CalculatorsPage from "@/components/resourcehub/pages/CalculatorsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor plus - Calculator cost",
  description:
    "Free calculators for contractors and construction professionals.",
};
const CostCalculatorPage = () => {
  return (
    <>
      <CalculatorsPage />
    </>
  );
};

export default CostCalculatorPage;
