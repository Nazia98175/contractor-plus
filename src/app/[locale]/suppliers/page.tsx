import AtAGlance from "@/components/affiliates/AtAGlance";
import { platforms } from "@/components/common/Helper";
import { FooterRedLineIcon } from "@/components/common/Icons";
import LoadingFallback from "@/components/common/LoadingFallback";
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
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `supplier?locale=${resolvedParams.locale}&populate[seoData][populate]=*`,
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
    <div
      id="home-page-view-port-screen"
      className="relative overflow-hidden opacity-0"
    >
      <div className="relative mx-auto max-w-[1920px] pt-[115px]">
        <SuppliersHero
          heroTitle={hero?.title}
          heroDescription={hero?.heroDescription}
          heroSubTitle={hero?.heroSubTitle}
        />
        <Suspense fallback={<LoadingFallback />}>
          <SupliersMarquee marqueeLTR={marqueeLTR} marqueeRTL={marqueeRTL} />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <PartnerContractor
          title={whyPartner?.title}
          desc1={whyPartner?.desc1}
          desc2={whyPartner?.desc2}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AtAGlance
          glanceCards={atGlance?.arrayItems}
          title={atGlance?.atGlanceRes}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <IntegrationModels integrationData={integrationModel} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SupplierBenefit
          title={supplierBenefit?.title}
          cardsData={supplierBenefit?.listTextDesc}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WorkToday
          listTextDesc={whoWeWork?.arrayItems}
          title={whoWeWork?.title}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <SupplierBenefit
          title={howItWorks?.title}
          cardsData={howItWorks?.listTextDesc}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WhatAsk title={whatWeAsk?.title} desc={whatWeAsk?.dec} />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AtAGlance
          glanceCards={whatMakeContractor?.arrayItems}
          title={whatMakeContractor?.title}
        />
      </Suspense>
      <div className="relative pt-[40px] pb-16 md:pt-[70px] md:pb-24 lg:pt-[94px]">
        <Suspense fallback={<LoadingFallback />}>
          <Faq
            faq={faqs}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 md:pb-[80px] lg:pb-[120px] pb-0"
            TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
            variant="light"
          />
        </Suspense>
        <FooterRedLineIcon className="pointer-events-none absolute top-[33%] left-[-2%] max-h-[762px] w-full max-w-[803px]" />
        <Suspense fallback={<LoadingFallback />}>
          <div className="relative">
            <MakeOrder />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TrustBar
            platforms={platforms}
            className="mx-auto w-full max-w-[889px]"
          />
        </Suspense>
      </div>
    </div>
  );
}
