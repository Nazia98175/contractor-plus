import AtAGlance from "@/components/affiliates/AtAGlance";
import { platforms, supplietFaq } from "@/components/common/Helper";
import { FooterRedLineIcon } from "@/components/common/Icons";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import MakeOrder from "@/components/investors/MakeOrder";
import IntegrationModels from "@/components/suppliers/IntegrationModels";
import PartnerContractor from "@/components/suppliers/PartnerContractor";
import SupliersMarquee from "@/components/suppliers/SupliersMarquee";
import SupplierBenefit from "@/components/suppliers/SupplierBenefit";
import SuppliersHero from "@/components/suppliers/SuppliersHero";
import WhatAsk from "@/components/suppliers/WhatAsk";
import WorkToday from "@/components/suppliers/WorkToday";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getSuppliersData } from "@/services/suppliers/getSuppliersData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `supplier?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}
interface SuppliersPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SuppliersPage({ params }: SuppliersPageProps) {
  const { locale } = await params;
  const {
    hero,
    marqueeLTR,
    marqueeRTL,
    whyPartner,
    atGlance,
    integrationModel,
    supplierBenefit,
    whoWeWork,
    howItWorks,
    whatWeAsk,
    whatMakeContractor,
    faqs,
  } = await getSuppliersData(locale);

  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] pt-[115px]">
        <SuppliersHero
          heroTitle={hero?.title}
          heroDescription={hero?.heroDescription}
          heroSubTitle={hero?.heroSubTitle}
        />
        <SupliersMarquee marqueeLTR={marqueeLTR} marqueeRTL={marqueeRTL} />
      </div>
      <PartnerContractor
        title={whyPartner?.title}
        desc1={whyPartner?.desc1}
        desc2={whyPartner?.desc2}
      />
      <AtAGlance
        glanceCards={atGlance?.arrayItems}
        title={atGlance?.atGlanceRes}
      />
      <IntegrationModels integrationData={integrationModel} />
      <SupplierBenefit
        title={supplierBenefit?.title}
        cardsData={supplierBenefit?.listTextDesc}
      />
      <WorkToday
        listTextDesc={whoWeWork?.arrayItems}
        title={whoWeWork?.title}
      />
      <SupplierBenefit
        title={howItWorks?.title}
        cardsData={howItWorks?.listTextDesc}
      />
      <WhatAsk title={whatWeAsk?.title} desc={whatWeAsk?.dec} />
      <AtAGlance
        glanceCards={whatMakeContractor?.arrayItems}
        title={whatMakeContractor?.title}
      />
      <div className="relative pt-[40px] pb-16 md:pt-[70px] md:pb-24 lg:pt-[94px]">
        <Faq
          faq={faqs}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[80px] lg:pb-[120px] pb-0"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="light"
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
}
