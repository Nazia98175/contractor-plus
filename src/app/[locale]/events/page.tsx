import CommonFormField from "@/components/common/CommonFormField";
import AllEventCard from "@/components/eventsdirectory/AllEventCard";
import EventsDirectoryHero from "@/components/eventsdirectory/EventsDirectoryHero";
import {
  getAllEvents,
  getEventList
} from "@/services/events/getEventData";

const EventsDirectoryPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const [events, eventList] = await Promise.all([
    getAllEvents(locale),
    getEventList(locale),
  ]);

  return (
    <main id="home-page-wrapper-2">
      <EventsDirectoryHero events={events} />
      <AllEventCard eventList={eventList} events={events} />
      <div className="mx-auto w-full max-w-[898px]">
        <CommonFormField
          className="mt-[79px]"
          title={`${eventList?.emailSignupSection?.title ?? ""}`}
          subTitle={`${eventList?.emailSignupSection?.subTitle ?? ""}`}
          placeholder={`${eventList?.emailSignupSection?.placeholder ?? ""}`}
          createBtn="Get started FREE"
          ncc="No credit card required"
          showTitle={true}
          variant="tertiary"
        />
      </div>
    </main>
  );
};

export default EventsDirectoryPage;
