import {
  dealflowhero,
  dealReviews,
  fieldcarddetail,
  neverLookBackData,
  realTimeServiceSliderData,
  reviews,
  runWithContractorData,
} from "@/components/common/Helper";
import CrmHero from "@/components/crmbussiness/CrmHero";
import TrustedService from "@/components/crmbussiness/TrustedService";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import { title } from "process";
import React from "react";

const page = () => {
  return (
    <div>
      <CrmHero
        hero={dealflowhero}
        slug="crm"
        heroImg="/images/webp/deal-flow-hero.webp"
      />
      <TrustedService reviews={dealReviews} slug="crm" />
      <div className="bg-white">
        <GoingFieldSevices
          switchingTool={{
            title: "There’s no easy way to see what’s going on in the field",
            cardsDetail: fieldcarddetail,
          }}
        />
        <RealTimeServiceConnector
          theme="estimateTheme"
          fieldService={{
            title:
              "The only pipeline built to follow the flow of actual contracting work",
            cardsDetail: realTimeServiceSliderData, // ← imported from helper
          }}
        />
        <RunWithContractor kindAdorable={runWithContractorData} />
        <TimmingEffect />
        <NeverLookBack data={neverLookBackData} />
      </div>
    </div>
  );
};

export default page;
