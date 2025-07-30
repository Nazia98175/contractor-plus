import CommonFormField from "@/components/common/CommonFormField";
import AllEventCard from "@/components/eventsdirectory/AllEventCard";
import EventsDirectoryHero from "@/components/eventsdirectory/EventsDirectoryHero";
import React from "react";

const EventsDirectoryPage = () => {
  return (
    <main id="home-page-wrapper-2">
      <EventsDirectoryHero />
      <AllEventCard />
      <div className="mx-auto w-full max-w-[898px]">
        <CommonFormField
          className="mt-[79px]"
          title="Are you looking for a better way to operate your contracting business?"
          subTitle="Start using Contractor+ free. You won’t look back."
          placeholder="Your Email"
          createBtn="Get started FREE"
          ncc="No credit card required"
          showTitle={true}
          variant="tertiary"
        />
      </div>
    </main>
  );
};

export default EventsDirectoryPage;
