import Copy from "../common/Copy";
import ConferenceCard from "./ConferenceCard";

const AllEventCard = ({ eventList }: any) => {
  const allEventSections = [
    {
      sectionId: "conference-events",
      sectionHeading: `${eventList?.mostAttendTitle ?? ""}`,
      events: [
        {
          id: 1,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "Bill Walsh leadership lessons",
          description:
            "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
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
          heading: "What is Wireframing?",
          description:
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
          linkPath: "Event Details",
        },
        {
          id: 4,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "What is Wireframing?",
          description:
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
          linkPath: "Event Details",
        },
      ],
    },
    {
      sectionId: "upcoming-events",
      sectionHeading: `${eventList?.upcomingEventTitle ?? ""}`,
      events: [
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
          heading: "What is Wireframing?",
          description:
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
          linkPath: "Event Details",
        },
        {
          id: 7,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "Bill Walsh leadership lessons",
          description:
            "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
          linkPath: "Event Details",
        },
        {
          id: 8,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "Bill Walsh leadership lessons",
          description:
            "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
          linkPath: "Event Details",
        },
      ],
    },
    {
      sectionId: "all-events",
      sectionHeading: `${eventList?.pastEventTitle ?? ""}`,
      events: [
        {
          id: 9,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "PM mental models",
          description:
            "Mental models are simple expressions of complex processes or relationships.",
          linkPath: "Event Details",
        },
        {
          id: 10,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "What is Wireframing?",
          description:
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
          linkPath: "Event Details",
        },
        {
          id: 11,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "Bill Walsh leadership lessons",
          description:
            "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
          linkPath: "Event Details",
        },
        {
          id: 12,
          imgPath: "/images/webp/snow.webp",
          role: "September 15 – 18, 2025 • Nashville, TN",
          heading: "Bill Walsh leadership lessons",
          description:
            "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
          linkPath: "Event Details",
        },
      ],
    },
  ];
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
          {eventList?.eventNote ?? ""}
        </p>
      </Copy>
    </section>
  );
};

export default AllEventCard;
