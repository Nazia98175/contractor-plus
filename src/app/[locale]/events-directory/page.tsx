import AllEventCard from "@/components/events-directory/AllEventCard";
import EventsDirectoryHero from "@/components/events-directory/EventsDirectoryHero";
import React from "react";

const EventsDirectoryPage = () => {
  return (
    <main id="home-page-wrapper-2">
      <EventsDirectoryHero />
      <AllEventCard />
    </main>
  );
};

export default EventsDirectoryPage;
