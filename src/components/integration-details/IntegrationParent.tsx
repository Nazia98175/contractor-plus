import React from "react";
import IntegrationDetailHero from "./IntegrationDetailHero";
import IntegrationDetail from "./IntegrationDetail";

type IntegrationParentProps = {
  integrationData: any; 
  appfeatures: any; 
};

const IntegrationParent: React.FC<IntegrationParentProps> = ({
  integrationData,
  appfeatures,
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
        integrationData={integrationData}
        appfeatures={appfeatures}
      />
    </>
  );
};

export default IntegrationParent;
