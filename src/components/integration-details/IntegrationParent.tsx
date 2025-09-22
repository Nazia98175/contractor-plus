import React from "react";
import IntegrationDetailHero from "./IntegrationDetailHero";
import IntegrationDetail from "./IntegrationDetail";

type IntegrationParentProps = {
  integrationData: any; // Replace 'any' with the correct type if known
  integrationDetails: any; // Replace 'any' with the correct type if known
};

const IntegrationParent: React.FC<IntegrationParentProps> = ({
  integrationData,
  integrationDetails,
}) => {
  return (
    <>
      <div
        id="home-page-view-port-screen-fetures"
        className="relative bg-[url('/images/webp/integration-detail-bg.webp')] bg-contain bg-no-repeat sm:bg-cover"
      >
        <IntegrationDetailHero integration={integrationData} />
      </div>
      <IntegrationDetail
        integration={integrationData}
        integrationDetail={integrationDetails}
      />
    </>
  );
};

export default IntegrationParent;
