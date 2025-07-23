import React from "react";
import ConferenceCard from "./ConferenceCard";
import Copy from "../common/Copy";

const AllEventCard = () => {
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
    {
      id: 2,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 3,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 4,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 5,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 6,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 7,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 8,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
  ];
  const upcommingEvents = [
    {
      id: 100,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 101,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 102,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 103,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 104,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 106,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 107,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 108,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
  ];
  const allEvents = [
    {
      id: 201,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 202,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 203,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 204,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 205,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 206,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 207,
      imgPath: "/images/webp/snow.webp",
      role: "September 15 – 18, 2025 • Nashville, TN",
      heading: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      linkPath: "Event Details",
    },
    {
      id: 208,
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
      <div className="mt-8 flex flex-col gap-8 md:mt-10 md:gap-10 lg:mt-16 lg:gap-16 xl:mt-[85px] xl:gap-[87px]">
        <ConferenceCard
          swiperId="conference-events"
          EventCardItem={EventCardItem}
          sectionHeading="Must-Attend Conference & Expo’s"
        />
        <ConferenceCard
          swiperId="upcoming-events"
          EventCardItem={upcommingEvents}
          sectionHeading="All Upcoming Events"
        />
        <ConferenceCard
          swiperId="all-events"
          EventCardItem={allEvents}
          sectionHeading="All Past Events"
        />
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
