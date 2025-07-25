import {
  dealflowhero,
  dealReviews,
  estimaticCardData,
  estimaticControlData,
  property_profiles_ControlData,
  propertyaddressContractorData,
  propertyCardData,
  propertyFeatureData,
  runWithContractorData,
} from "@/components/common/Helper";
import CrmHero from "@/components/crmbussiness/CrmHero";
import FieldService from "@/components/crmbussiness/FieldService";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import TrackProfiles from "@/components/property-profiles/TrackProfiles";
import React from "react";

const page = () => {
  return (
    <div>
      <CrmHero
        hero={{
          heroTitle:
            "Know the full story on every property you manage or service — instantly.",
          heroDescription:
            "Contractor+ is the first to offer a living, breathing history for each property that self-updates with every job, document, & email.",
        }}
        featureTag="Property Management CRM"
        heroImg="/images/webp/property-profiles.webp"
        slug="crm"
        commonData={dealflowhero}
      />
      <div className="pb-6">
        <TrustedService reviews={dealReviews} slug="crm" apiData={false} />
      </div>
      <SwitchingTool switchingTool={property_profiles_ControlData} />
      <FieldService
        fieldService={propertyCardData}
        theme="dark"
        slug="estimateTheme"
        apiData={false}
        mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto "
      />
      <div className="bg-white">
        <TrackProfiles ncc="" trackProperties={propertyFeatureData} />
        <RunWithContractor kindAdorable={propertyaddressContractorData} />
      </div>
    </div>
  );
};

export default page;
