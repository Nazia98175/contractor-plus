import AffiliatesHero from "@/components/affiliates/AffiliatesHero";
import WhyPartner from "@/components/affiliates/WhyPartner";
import React from "react";
import AtAGlance from "./AtAGlance";
import WaysYouEarn from "./WaysYouEarn";
import WhoThisPerfect from "./WhoThisPerfect";
import Faq from "@/components/crmbussiness/Faq";
import { leadHGenerationFaqData } from "@/components/common/Utils";
import PublicEndPoints from "@/components/developersapi/PublicEndPoints";
import TrustBar from "@/components/common/TrustBar";
import { afflitatesClientReviews, platforms } from "@/components/common/Helper";
import TrustedService from "@/components/crmbussiness/TrustedService";

const AffiliatesPage = () => {
  const affiliatesFaq = {
    title: "What contractors want to know",
    subTitle: "Frequently asked questions",
    faq: [
      {
        id: 1,
        question: "How much do I earn and for how long?",
        answer:
          "50% recurring on the base subscription for the life of the account, plus 20% recurring on Books and 20% on Local add-ons, which our onboarding team will always recommend to every customer, when it makes sense for them.",
      },
      {
        id: 2,
        question: "When do I get paid?",
        answer:
          "Monthly. Commissions are tallied each period and paid the following month.",
      },
      {
        id: 3,
        question: "What promotions work best?",
        answer:
          'Educational content + a clear CTA. Demos, side-by-side comparisons, and "how we run jobs in Contractor+" style content convert well.',
      },
      {
        id: 4,
        question: "What support do you provide?",
        answer:
          "Creative, messaging, product enablement, and co-marketing opportunities. We handle the demo, onboarding, and success.",
      },
      {
        id: 5,
        question: "Any limits or exclusions?",
        answer:
          "Standard stuff: commissions apply to eligible, active, paid subscriptions tied to your referral; refunds/chargebacks are netted out. Full terms in the partner agreement.",
      },
    ],
  };

  return (
    <main className="relative">
      <AffiliatesHero />
      <TrustedService reviews={afflitatesClientReviews} apiData={false} />
      <WhyPartner />
      <AtAGlance />
      <WaysYouEarn />
      <WhoThisPerfect />
      <PublicEndPoints
        title="Apply to join "
        description="Have a big audience or unique distribution? Let’s talk campaign co‑funding and rev‑share accelerators."
        freeTrialButtonText="Apply to join"
        slackLinkHref="/"
        slack={false}
      />
      <div className="relative overflow-hidden">
        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
        <Faq
          headingVariant="default"
          faq={affiliatesFaq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 md:pb-[76px]  md:pb-[83px] pb-10"
          TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
          variant="light"
        />
      </div>
    </main>
  );
};

export default AffiliatesPage;
