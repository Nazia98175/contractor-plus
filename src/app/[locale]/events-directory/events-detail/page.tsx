import Copy from "@/components/common/Copy";
import { eventFAQs, pricingfaqitems } from "@/components/common/Helper";
import Faq from "@/components/crmbussiness/Faq";
import EventDetailHero from "@/components/eventdetail/EventDetailHero";
import EventPricing from "@/components/eventdetail/EventPricing";
import SpeakersEvents from "@/components/eventdetail/SpeakersEvents";
import Sponsors from "@/components/eventdetail/Sponsors";
import React from "react";

const EventsDetailPage = () => {
  return (
    <main id="home-page-wrapper-2">
      <EventDetailHero />
      <SpeakersEvents />
      <Sponsors />
      <EventPricing />
      <div className="overflow-hidden">
        <Faq
          faq={{
            title: "What contractors want to know ",
            faq: eventFAQs,
          }}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 pt-[52px] sm:pt-[66px]"
          TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
        />
        <div>
          <Copy delay={0.2}>
            <p className="text-flintstone mx-auto mt-8 w-full px-2 text-center text-xs font-normal sm:max-w-[65%] md:mt-10 lg:mt-12 xl:mt-16">
              *Many of the images and graphics on this page are property of the
              event and Contractor+ is not affiliated with event in any way. If
              you are the copyright owner of any materials on this page and wish
              to have these removed, please contact us.
            </p>
          </Copy>
        </div>
      </div>
    </main>
  );
};

export default EventsDetailPage;
