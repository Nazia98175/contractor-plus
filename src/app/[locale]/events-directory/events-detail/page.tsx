import EventPricing from "@/components/eventdetail/EventPricing";
import SpeakersEvents from "@/components/eventdetail/SpeakersEvents";
import React from "react";

const EventsDetailPage = () => {
  return (
    <div>
      <SpeakersEvents />
      <EventPricing />
    </div>
  );
};

export default EventsDetailPage;
