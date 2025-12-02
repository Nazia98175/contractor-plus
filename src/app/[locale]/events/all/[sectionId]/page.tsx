import SectionEvents from "@/components/eventsdirectory/SectionEvents";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import {
  getFeaturedEvents,
  getPastsEvents,
  getUpcomingEvents,
} from "@/services/events/getEventData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; sectionId: string }>;
}) {
  const { locale, sectionId } = await params;
  const page = await getSeoDataCommon(
    `event-list?locale=${locale}&populate[SeoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: `/events/all/${sectionId}` });
}
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

  const [featuredEvents, pastEvents, upcomingEvents] = await Promise.all([
    getFeaturedEvents(locale),
    getPastsEvents(locale),
    getUpcomingEvents(locale),
  ]);

  return (
    <SectionEvents
      params={sectionId}
      featuredEvents={featuredEvents}
      pastEvents={pastEvents}
      upcomingEvents={upcomingEvents}
    />
  );
};

export default page;
