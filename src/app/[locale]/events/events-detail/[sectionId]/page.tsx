import SectionEvents from "@/components/eventsdirectory/SectionEvents";
import { getAllEvents } from "@/services/events/getEventData";
import { redirect } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{ sectionId: string; locale: string }>;
}) => {
  const { sectionId, locale } = await params;

  const arr = ["conference-events", "upcoming-events", "past-events"];
  if (!arr.includes(sectionId)) {
    redirect("/events-directory");
  }
  const events = await getAllEvents(locale);

  return (
    <>
      <SectionEvents params={sectionId} events={events} />
    </>
  );
};

export default page;
