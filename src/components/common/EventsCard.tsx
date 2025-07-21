import Image from "next/image";
import React from "react";
import { CardArrowIcon, EventDetailIcon } from "./Icons";
import Copy from "./Copy";
import CardReveal from "./CardReveal";

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
      <CardReveal delay={0.1} distance={50}>
        <Image
          className="h-full max-h-[240px] w-full rounded-lg object-cover"
          src={Item.imgPath}
          alt={Item.heading}
          width={384}
          height={240}
        />
      </CardReveal>
      <Copy delay={0.2}>
        <p className="text-secondary mt-4 text-xs font-semibold lg:mt-6 lg:text-sm xl:mt-8">
          {Item.role}
        </p>
      </Copy>
      <CardReveal delay={0.3} distance={50}>
        <div className="my-3 flex items-center justify-between gap-4">
          <h2 className="event-card-tittle">{Item.heading}</h2>
          <CardArrowIcon />
        </div>
      </CardReveal>
      <Copy delay={0.4}>
        <h3 className="text-flintstone text-sm lg:text-base">
          {Item.description}
        </h3>
      </Copy>
      <CardReveal delay={0.4} distance={50}>
        <i className="font-montserrat mt-4 flex items-center gap-1 px-2 py-1.5 text-xs leading-[142.857%] font-extrabold tracking-[0.1px] text-white lg:text-sm xl:mt-6 xl:px-3">
          {Item.linkPath}
          <EventDetailIcon />
        </i>
      </CardReveal>
    </article>
  );
};

export default EventsCard;
