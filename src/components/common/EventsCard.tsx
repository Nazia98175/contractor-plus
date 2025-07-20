import Image from "next/image";
import React from "react";
import { CardArrowIcon, EventDetailIcon } from "./Icons";

interface EventsCardItem {
  role: string;
  heading: string;
  description: string;
  linkPath: string;
  imgPath: string;
}

interface EventsCardProps {
  Item: EventsCardItem;
}

const EventsCard: React.FC<EventsCardProps> = ({ Item }) => {
  return (
    <article>
      <Image
        className="h-[240px] w-full rounded-lg object-cover"
        src={Item.imgPath}
        alt={Item.heading}
        width={384}
        height={240}
      />
      <p className="text-secondary mt-8 text-sm font-semibold">{Item.role}</p>
      <div className="my-3 flex items-center justify-between gap-4">
        <h2 className="event-card-tittle">{Item.heading}</h2>
        <CardArrowIcon />
      </div>
      <h3 className="text-flintstone text-base">{Item.description}</h3>
      <i className="font-montserrat mt-6 flex items-center gap-1 px-3 py-1.5 text-sm leading-[142.857%] font-extrabold tracking-[0.1px] text-white">
        {Item.linkPath}
        <EventDetailIcon />
      </i>
    </article>
  );
};

export default EventsCard;
