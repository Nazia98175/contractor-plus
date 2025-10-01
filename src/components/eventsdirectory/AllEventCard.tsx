import { formatDateRange } from "@/lib/date";
import Copy from "../common/Copy";
import ConferenceCard from "./ConferenceCard";

const AllEventCard = ({ eventList, events }: any) => {
  const allEventSections = [
    {
      sectionId: "conference-events",
      sectionHeading: `${eventList?.mostAttendTitle ?? ""}`,
      events: events
        ? events
            .map((itm: any) => {
              return {
                id: itm.id,
                imgPath: itm?.eventImages
                  ? itm?.eventImages[0].url
                  : "/images/webp/snow.webp",
                role: `${formatDateRange(itm?.startDate, itm?.endDate) + " • " + itm?.location}`,
                heading: `${itm?.eventName ?? ""}`,
                description: `${itm?.shortDescription ?? ""}`,
                linkPath: `${itm?.eventBtn ?? ""}`,
                slug: `${itm?.eventUrl ?? ""}`,
                isFeatured: itm?.isFeatured ?? false,
              };
            })
            .filter((event: any) => event.isFeatured === true)
        : [],
    },
    {
      sectionId: "upcoming-events",
      sectionHeading: `${eventList?.upcomingEventTitle ?? ""}`,
      events: events
        ? events
            .map((itm: any) => {
              return {
                id: itm.id,
                imgPath: itm?.eventImages
                  ? itm?.eventImages[0].url
                  : "/images/webp/snow.webp",
                role: `${formatDateRange(itm?.startDate, itm?.endDate) + " • " + itm?.location}`,
                heading: `${itm?.eventName ?? ""}`,
                description: `${itm?.shortDescription ?? ""}`,
                linkPath: `${itm?.eventBtn ?? ""}`,
                slug: `${itm?.eventUrl ?? ""}`,
                sDate: `${itm?.startDate ?? ""}`,
              };
            })
            .filter((event: any) => new Date(event?.sDate) > new Date())
        : [],
    },
    {
      sectionId: "past-events",
      sectionHeading: `${eventList?.pastEventTitle ?? ""}`,
      events: events
        ? events
            .map((itm: any) => {
              return {
                id: itm.id,
                imgPath: itm?.eventImages
                  ? itm?.eventImages[0].url
                  : "/images/webp/snow.webp",
                role: `${formatDateRange(itm?.startDate, itm?.endDate) + " • " + itm?.location}`,
                heading: `${itm?.eventName ?? ""}`,
                description: `${itm?.shortDescription ?? ""}`,
                linkPath: `${itm?.eventBtn ?? ""}`,
                slug: `${itm?.eventUrl ?? ""}`,
                sDate: `${itm?.startDate ?? ""}`,
              };
            })
            .filter((event: any) => new Date(event?.sDate) < new Date())
        : [],
    },
  ];

  return (
    <section className="main-container opacity-0" id="home-page-view-port-screen-events-list">
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
          {eventList?.eventNote ?? ""}
        </p>
      </Copy>
    </section>
  );
};

export default AllEventCard;
