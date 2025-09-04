import USConstructionLaborRates from "@/components/resourcehub/pages/USConstructionLaborRates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA Labor Rates: Up-To-Date Contractor Pay Guide",
  description:
    "Compare average contractor labor rates across states and job types to make informed hiring decisions.",
};
const UsaLaborRatePage = () => {
  return (
    <>
      <USConstructionLaborRates />
    </>
  );
};

export default UsaLaborRatePage;
