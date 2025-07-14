import {
  billingVsthWayYouCouldData,
  dealflowhero,
  dealReviews,
  fieldcarddetail,
  neverLookBackData,
  realTimeServiceSliderData,
  runWithContractorData,
} from "@/components/common/Helper";
import CrmHero from "@/components/crmbussiness/CrmHero";
import TrustedService from "@/components/crmbussiness/TrustedService";
import FinallyConnectsField from "@/components/dealflowtracker/FinallyConnectsField";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import TimmingEffect from "@/components/field-services/TimmingEffect";

const BillingPage = () => {
  return (
    <main className="relative z-10">
      <CrmHero
        hero={{
          featureTag: "Contractor Invoicing Software",
          heroTitle: "Living invoices that instantly reflect every change",
          heroDescription: (
            <>
              Contractor+ automatically captures uninvoiced billables and <br />
              updates your invoice with time stamped change orders.
            </>
          ),
        }}
        heroImg="/images/webp/invoicing-billing.webp"
        slug="crm"
        commonData={dealflowhero}
      />
      <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
      <div className="overflow-hidden bg-white">
        <GoingFieldSevices
          switchingTool={{
            title:
              "There’s no simple way to bill a job that doesn’t go exactly to plan",
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
        <RunWithContractor kindAdorable={billingVsthWayYouCouldData} />
        <TimmingEffect />
        <FinallyConnectsField />
        <NeverLookBack data={neverLookBackData} />
      </div>
    </main>
  );
};

export default BillingPage;
