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
    </main>
  );
};

export default EventsDetailPage;
