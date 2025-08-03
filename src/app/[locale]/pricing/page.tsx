
import CommonFormField from "@/components/common/CommonFormField";
import { blackPlatforms, pricingfaqitems } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import GroupOfComponets from "@/components/pricing/GroupOfComponets";

const PricingPage = () => {
  return (
    <main className="font-myriad overflow-hidden">
      <GroupOfComponets />
      <div className="bg-white">
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
