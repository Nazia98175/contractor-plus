import Image from "next/image";
import React from "react";
import { CardArrowIcon, EventDetailIcon } from "./Icons";
import Copy from "./Copy";
import CardReveal from "./CardReveal";
import { formatDateRange } from "@/lib/date";

interface EventsCardItem {
  role: string;
  heading: string;
  description: string;
  linkPath: string;
  imgPath: string;
  eventName: string;
  shortDescription: string;
  eventUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  eventBtn: string;
  eventImages: { url: string }[];
  onClick?: () => void;
}

interface EventsCardProps {
  Item: EventsCardItem;
  onClick?: any;
}

const EventsCard: React.FC<EventsCardProps> = ({ Item, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="card-shine-2 group flex h-full cursor-pointer flex-col justify-between"
    >
      <div>
        {Item?.eventImages ? (
          <CardReveal delay={0.1} distance={50}>
            <Image
              className="ios-image h-full max-h-[240px] min-h-[240px] w-full rounded-lg object-cover"
              src={`${Item?.eventImages?.[0]?.url}`}
              alt={Item?.eventName}
              width={384}
              height={240}
            />
          </CardReveal>
        ) : Item?.imgPath ? (
          <CardReveal delay={0.1} distance={50}>
            <Image
              className="ios-image h-full max-h-[240px] min-h-[240px] w-full rounded-lg object-cover"
              src={`${Item?.imgPath}`}
              alt={Item.heading}
              width={384}
              height={240}
            />
          </CardReveal>
        ) : null}
        <Copy delay={0.2}>
          <p className="text-secondary mt-4 line-clamp-1 px-3 text-xs font-semibold duration-200 ease-in-out lg:mt-6 lg:text-sm xl:mt-8">
            {Item?.role ??
              formatDateRange(Item?.startDate, Item?.endDate) +
                " • " +
                Item?.location}
          </p>
        </Copy>
        <CardReveal delay={0.3} distance={50}>
          <div className="my-3 flex items-center justify-between gap-4 px-3">
            <h2 className="event-card-tittle line-clamp-2 duration-200 ease-in-out">
              {Item?.heading ?? Item?.eventName}
            </h2>
            <CardArrowIcon />
          </div>
        </CardReveal>
        <Copy delay={0.4}>
          <h3 className="text-flintstone line-clamp-2 px-3 text-sm duration-200 ease-in-out lg:text-base">
            {Item?.description ?? Item?.shortDescription}
          </h3>
        </Copy>
      </div>
      <Copy delay={0.5}>
        <div className="font-montserrat mt-4 px-2 py-1.5 text-xs leading-[142.857%] font-extrabold tracking-[0.1px] text-white lg:text-sm xl:my-4 xl:px-3">
          <i className="!flex items-center gap-1">
            {"Event Details"}
            <EventDetailIcon />
          </i>
        </div>
      </Copy>
    </article>
  );
};

export default EventsCard;
