"use client";
import dynamic from "next/dynamic";
// Do this dynamically:
const platforms = await import("@/components/common/Helper").then((mod) => mod.platforms);
const TrackProperties = dynamic(
  () => import("../crmbussiness/TrackProperties"),
  { ssr: false },
);
const LikeYouDoContacts = dynamic(
  () => import("../crmbussiness/LikeYouDoContacts"),
  { ssr: false },
);
const HowContractorWork = dynamic(
  () => import("../crmbussiness/HowContractorWork"),
  { ssr: false },
);
const KindAdorable = dynamic(() => import("../crmbussiness/KindAdorable"), {
  ssr: false,
});
const TeamsUsingContractor = dynamic(
  () => import("../crmbussiness/TeamsUsingContractor"),
  { ssr: false },
);
const ThousandsReviews = dynamic(
  () => import("../crmbussiness/ThousandsReviews"),
  { ssr: false },
);
const BlogPosts = dynamic(() => import("../crmbussiness/BlogPosts"), {
  ssr: false,
});
const Faq = dynamic(() => import("../crmbussiness/Faq"), { ssr: false });
const TrustBarHvca = dynamic(() => import("../industry/hvca/TrustBarHvca"), {
  ssr: false,
});
const  CrmSercive  = dynamic(() => import("../crmbussiness/CrmSercive"), {
  ssr: false,
});
// Dynamic import named exports from Icons
const FooterRedLineIcon = dynamic(() =>
  import("../common/Icons").then((mod) => mod.FooterRedLineIcon), { ssr: false }
);

const FooterRedLineMobileIcon = dynamic(() =>
  import("../common/Icons").then((mod) => mod.FooterRedLineMobileIcon), { ssr: false }
);
const SlugPageClient = ({
  slug,
  ncc,
  trackProperties,
  likeYouDo,
  howContractorWork,
  kindAdorable,
  teamUsingContractor,
  thousandReviews,
  reviews,
  blogs,
  blogsList,
  faq,
  crmService,
  createBtn,
  mobileBtn,
}: any) => {
  return (
    <>
      <div className="bg-white">
        {slug === "crm" && (
          <>
            <TrackProperties ncc={ncc} trackProperties={trackProperties} />

            <LikeYouDoContacts data={likeYouDo} />
            <HowContractorWork
              ncc={ncc}
              trackProperties={trackProperties}
              data={howContractorWork}
            />
          </>
        )}
        <KindAdorable slug={slug} kindAdorable={kindAdorable} />
        <TeamsUsingContractor data={teamUsingContractor} slug={slug} />
        <ThousandsReviews data={thousandReviews} reviews={reviews} />
      </div>
      <div className="relative overflow-hidden">
        <FooterRedLineIcon className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block" />
        <FooterRedLineMobileIcon className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden" />
        <CrmSercive
          createBtn={createBtn}
          mobileBtn={mobileBtn}
          ncc={ncc}
          data={crmService}
          variant="primary"
          className={` ${slug === "crm" ? "xs:max-w-[89%] max-w-[83%] pt-10 sm:max-w-[1120px] sm:pt-0" : "xs:max-w-[81%] max-w-[76%] pt-10 sm:max-w-[780px] sm:pt-0"}`}
          variantBtn="light"
        />
        <TrustBarHvca
          platforms={platforms}
          className="mx-auto w-full max-w-[889px]"
        />
        <Faq
          faq={faq}
          classNameAnswer="pt-1"
          mainContainerclassName="px-2 pt-[66px] pb-0 md:pt-[76px] md:pb-[83px]"
          TittleClassName="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
        />
      </div>
      <BlogPosts
        data={blogsList}
        blogs={blogs}
        className="mt-7 md:mt-9"
        classMaxwidth="max-w-[90%] xs:max-w-[98%] sm:max-w-full"
      />
    </>
  );
};

export default SlugPageClient;
