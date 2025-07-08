import { dealflowhero, reviews } from "@/components/common/Helper";
import CrmHero from "@/components/crmbussiness/CrmHero";
import TrustedService from "@/components/crmbussiness/TrustedService";
import React from "react";

const page = () => {
  return (
    <div>
      <CrmHero
        hero={dealflowhero}
        slug="crm"
        heroImg="/images/webp/deal-flow-hero.webp"
      />
      <TrustedService reviews={reviews} slug="crm" />
    </div>
  );
};

export default page;
