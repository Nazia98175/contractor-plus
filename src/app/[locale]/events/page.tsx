import CommonFormField from "@/components/common/CommonFormField";
import AllEventCard from "@/components/eventsdirectory/AllEventCard";
import EventsDirectoryHero from "@/components/eventsdirectory/EventsDirectoryHero";
import { getCommonData } from "@/services/common/commonData";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import { getAllEvents, getEventList } from "@/services/events/getEventData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `event-list?locale=${resolvedParams.locale}&populate[SeoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

const EventsDirectoryPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const [events, eventList, commonData] = await Promise.all([
    getAllEvents(locale),
    getEventList(locale),
    getCommonData(locale),
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
          createBtn={commonData?.getStartedFreeBtn}
          mobileBtn={commonData?.mobileBtn}
          ncc={commonData?.nccTxt}
          showTitle={true}
          variant="tertiary"
        />
      </div>
    </main>
  );
};

export default EventsDirectoryPage;
