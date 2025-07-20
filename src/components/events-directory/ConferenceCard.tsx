import React from "react";
import EventsCard from "../common/EventsCard";

interface ConferenceCardProps {
  sectionHeading: string;
}

const ConferenceCard = ({ sectionHeading }: ConferenceCardProps) => {
  const EventCardItem = [
    {
      id: 1,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
  ];
  return (
    <section className="main-container">
      <div className="mb-[33px] flex items-center justify-between gap-4">
        <h4 className="event-card-tittle">{sectionHeading}</h4>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {EventCardItem.map((Item, index) => (
          <EventsCard Item={Item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ConferenceCard;
