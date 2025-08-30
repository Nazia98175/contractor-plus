import {
  automatedCardData,
  platforms,
  supplietFaq,
} from "@/components/common/Helper";
import {
  FooterRedLineIcon,
  FooterRedLineMobileIcon,
} from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import AtGlance from "@/components/suppliers/AtGlance";
import HowItWork from "@/components/suppliers/HowItWork";
import IntegrationModels from "@/components/suppliers/IntegrationModels";
import MakeDifferent from "@/components/suppliers/MakeDifferent";
import PartnerContractor from "@/components/suppliers/PartnerContractor";
import SupplierBenefit from "@/components/suppliers/SupplierBenefit";
import SuppliersHero from "@/components/suppliers/SuppliersHero";
import WhatAsk from "@/components/suppliers/WhatAsk";
import WorkToday from "@/components/suppliers/WorkToday";
import Image from "next/image";
import React from "react";
import MakeOrder from "@/components/investors/MakeOrder";

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
      <WorkToday />
      <HowItWork cardsData={automatedCardData.cardsDetail} />
      <WhatAsk />
      <MakeDifferent />

      <div className="relative pt-[40px] pb-16 md:pt-[70px] md:pb-24 lg:pt-[94px]">
        <Faq
          faq={supplietFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[80px] lg:pb-[120px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
        />
        <FooterRedLineIcon className="pointer-events-none absolute top-[33%] left-[-2%] max-h-[762px] w-full max-w-[803px]" />
        <div className="relative">
          <MakeOrder />
        </div>
        <TrustBar
          platforms={platforms}
          className="mx-auto w-full max-w-[889px]"
        />
      </div>
    </div>
  );
};

export default Supplierspage;
