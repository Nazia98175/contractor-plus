import React from "react";
import ConferenceCard from "./ConferenceCard";
import Copy from "../common/Copy";
import { allEventSections } from "../common/Helper";

const AllEventCard = () => {
  return (
    <section className="main-container">
      <div className="mt-8 flex flex-col gap-8 md:mt-10 md:gap-10 lg:mt-16 lg:gap-16 xl:mt-[85px] xl:gap-[87px]">
        {allEventSections.map((section) => (
          <ConferenceCard
            key={section.sectionId}
            swiperId={section.sectionId}
            sectionHeading={section.sectionHeading}
            EventCardItem={section.events}
          />
        ))}
      </div>
      <Copy delay={0.2}>
        <p className="text-flintstone mx-auto mt-8 w-full text-center text-xs font-normal sm:max-w-[65%] md:mt-10 lg:mt-12 xl:mt-16">
          *Many of the images and graphics on this page are property of the
          event and Contractor+ is not affiliated with event in any way. If you
          are the copyright owner of any materials on this page and wish to have
          these removed, please contact us.
        </p>
      </Copy>
    </section>
  );
};

export default AllEventCard;
