"use client";
import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, pricingfaqitems } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import CompleteFeatureList from "@/components/pricing/CompleteFeatureList";
import Plans from "@/components/pricing/Plans";
import PricingHero from "@/components/pricing/PricingHero";
import { getPricingData } from "@/services/pricing/getPricingData";
import { useRef } from "react";

const PricingPage =  ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const compariosnTableRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const scrollToTable = () => {
    if (!compariosnTableRef.current) return;
    compariosnTableRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //  const useParams = await params;
   console.log("pricing rendering")
   
    //  const {
    //    commonData,
    //    pageContent,
    //   //  industryShiftHighlights,
    //   //  narrativeFlow,
    //   //  seperateSolution,
    //   //  connectedSystem,
    //   //  featuresPlatform,
    //   //  emailSign,
    //  } = await getPricingData(useParams?.locale);
  return (
    <main className="font-myriad overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PricingHero onScroll={scrollToPlans} />
      </div>
      <div className="bg-white">
        <div ref={plansRef}>
          <Plans onScroll={scrollToTable} />
        </div>
        <CompleteFeatureList onScroll={scrollToTable} />
        <ComparisonTable ref={compariosnTableRef} />
        <Faq
          mainContainerclassName="pb-16 lg:pb-24 xl:pb-[134px] z-20 px-2"
          faq={{
            title: "What contractors want to know ",
            subTitle: "Frequently asked questions",
            faq: pricingfaqitems,
          }}
          classNameAnswer="pt-1"
          TittleClassName="w-fit mx-auto opacity-90 sm:opacity-100  !leading-[130%]"
          variant="muted"
          headingVariant="primary"
        />
        <div className="relative overflow-x-hidden">
          <div className="px-2 pb-12 lg:pb-9 xl:pb-12">
            <CommonFormField
              variantBtn="primary"
              variant="white"
              title={"Start using Contractor+ for free"}
              subTitle={"Try it out now. Upgrade when you're ready."}
              placeholder={"Your Email"}
              createBtn={"Get Started Free"}
              mobileBtn={"Download FREE App"}
              ncc={"No credit card required"}
            />
          </div>
          <TrustBar platforms={blackPlatforms} className="pb-[91px] sm:pb-10" />
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
