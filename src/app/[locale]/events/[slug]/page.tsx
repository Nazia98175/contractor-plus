import Copy from "@/components/common/Copy";
import Faq from "@/components/crmbussiness/Faq";
import EventDetailHero from "@/components/eventdetail/EventDetailHero";
import EventPricing from "@/components/eventdetail/EventPricing";
import SpeakersEvents from "@/components/eventdetail/SpeakersEvents";
import Sponsors from "@/components/eventdetail/Sponsors";
import { getSeoDataEvent } from "@/services/common/seoMeta";
import {
  getEventDetails,
  getSingleEvent,
} from "@/services/events/getEventData";
import { PromiseParams } from "@/types";
import {
  generateSeoMetaData
} from "@/utils/getSeoMeta";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const page = await getSeoDataEvent(
    "events-directories",
    resolvedParams.locale,
    resolvedParams.slug,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: resolvedParams.slug });
}

const EventsDetailPage = async ({ params }: { params: PromiseParams }) => {
  const { locale, slug } = await params;
  if (!slug) redirect("/events-directory");

  const [eventDetail, eventList] = await Promise.all([
    getSingleEvent(locale, slug),
    getEventDetails(locale),
  ]);

  if (!eventDetail) redirect("/events-directory");

  return (
    <main id="home-page-wrapper-2">
      <EventDetailHero eventDetail={eventDetail} />
      <SpeakersEvents eventDetail={eventDetail} eventList={eventList} />
      <Sponsors eventDetail={eventDetail} eventList={eventList} />
      <EventPricing eventDetail={eventDetail} eventList={eventList} />
      {eventDetail?.Faqs && (
        <div className="overflow-hidden">
          <Faq
            faq={{
              title: `${eventDetail?.Faqs[0]?.title ?? ""}`,
              faq: eventDetail?.Faqs[0]?.faq ?? [],
            }}
            classNameAnswer="pt-1"
            mainContainerclassName="px-2 pt-[52px] sm:pt-[66px]"
            TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
          />
          <div>
            {eventDetail?.eventNote && (
              <Copy delay={0.2}>
                <p className="text-flintstone mx-auto mt-8 w-full px-2 text-center text-xs font-normal sm:max-w-[65%] md:mt-10 lg:mt-12 xl:mt-16">
                  {eventDetail?.eventNote ?? ""}
                </p>
              </Copy>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default EventsDetailPage;
