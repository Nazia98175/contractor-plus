import { automatedCardData } from "@/components/common/Helper";
import AtGlance from "@/components/suppliers/AtGlance";
import IntegrationModels from "@/components/suppliers/IntegrationModels";
import PartnerContractor from "@/components/suppliers/PartnerContractor";
import SupplierBenefit from "@/components/suppliers/SupplierBenefit";
import SuppliersHero from "@/components/suppliers/SuppliersHero";
import React from "react";

export const metadata = {
  title: "Suppliers: Connect with Thousands of Contractors",
  description:
    "List your products or services and reach verified contractors using the Contractor+ network.",
};

const Supplierspage = () => {
  return (
    <div className="overflow-hidden">
      <SuppliersHero />
      <PartnerContractor />
      <AtGlance />
      <IntegrationModels />
      <SupplierBenefit cardsData={automatedCardData.cardsDetail} />
    </div>
  );
};

export default Supplierspage;
