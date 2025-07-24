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
    <article className="card-shine-2 cursor-pointer">
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
        <p className="text-secondary mt-4 text-xs font-semibold duration-200 ease-in-out group-hover:!text-white lg:mt-6 lg:text-sm xl:mt-8">
          {Item.role}
        </p>
      </Copy>
      <CardReveal delay={0.3} distance={50}>
        <div className="my-3 flex items-center justify-between gap-4">
          <h2 className="event-card-tittle duration-200 ease-in-out group-hover:!text-white">
            {Item.heading}
          </h2>
          <CardArrowIcon />
        </div>
      </CardReveal>
      <Copy delay={0.4}>
        <h3 className="text-flintstone text-sm duration-200 ease-in-out group-hover:!text-white lg:text-base">
          {Item.description}
        </h3>
      </Copy>
      <Copy delay={0.5}>
        <div className="font-montserrat mt-4 px-2 py-1.5 text-xs leading-[142.857%] font-extrabold tracking-[0.1px] text-white lg:text-sm xl:mt-6 xl:px-3">
          <i className="!flex items-center gap-1">
            {Item.linkPath}
            <EventDetailIcon />
          </i>
        </div>
      </Copy>
    </article>
  );
};

export default EventsCard;
