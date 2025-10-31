"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AdvertisementCard from "../blogdetails/AdvertisementCard";
import IntegrationContent from "./IntegrationContent";
import KeyBenefits from "./KeyBenefits";

gsap.registerPlugin(ScrollTrigger);

interface IntegrationDetailProps {
  integrationData: any;
  appfeatures: {
    features?: {
      id: number;
      text: string;
    }[];
  };
}

const IntegrationDetail: React.FC<IntegrationDetailProps> = ({
  integrationData,
  appfeatures,
}) => {

  return (
    <section className="main-container 1xl:space-y-30 space-y-12 pt-8 pb-20 sm:pb-24 md:space-y-12 lg:space-y-14 xl:pb-[114px]">
      <div className="flex flex-col justify-between gap-4 md:flex-row xl:gap-[30px]">
        <div className="grow">
          <IntegrationContent integration={integrationData} />
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="relative top-18 mb-12 w-full min-w-[300px] md:sticky md:mb-0 md:h-fit lg:top-24 lg:max-w-[336px] lg:min-w-[336px]">
          <div className="w-full space-y-8">
            <div className="flex flex-col justify-between gap-8">
              <KeyBenefits integrationData={integrationData.keyBenefits} />
              <div className="top-0 basis-[60%] md:sticky">
                {/* Pass the features array directly */}
                <AdvertisementCard
                  appfeatures={appfeatures?.features}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDetail;