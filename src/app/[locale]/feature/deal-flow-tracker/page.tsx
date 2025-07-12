import {
  blogList,
  dealFlowBlogHeadingData,
  dealflowFaq,
  dealflowhero,
  dealReviews,
  dealReviews2,
  estimaticBlogHeadingData,
  fieldcarddetail,
  formData,
  neverLookBackData,
  platforms,
  realTimeServiceSliderData,
  reviews,
  runWithContractorData,
} from "@/components/common/Helper";
import BlogPosts from "@/components/crmbussiness/BlogPosts";
import CrmHero from "@/components/crmbussiness/CrmHero";
import CrmSercive from "@/components/crmbussiness/CrmSercive";
import Faq from "@/components/crmbussiness/Faq";

import ThousandsReviews from "@/components/crmbussiness/ThousandsReviews";
import TrustedService from "@/components/crmbussiness/TrustedService";
import GoingFieldSevices from "@/components/field-services/GoingFieldSevices";
import NeverLookBack from "@/components/field-services/NeverLookBack";
import RealTimeServiceConnector from "@/components/field-services/RealTimeServiceConnector";
import RunWithContractor from "@/components/field-services/RunWithContractor";
import TimmingEffect from "@/components/field-services/TimmingEffect";
import WhatEverClient from "@/components/homepage/WhatEverClient";
import TrustBarHvca from "@/components/industry/hvca/TrustBarHvca";
import { Subtitles } from "lucide-react";
import { title } from "process";
import React from "react";
const page = () => {
  const performanceData = {
    title: "Teams that switch to Contractor+ never look back",
    sub_title: "We help you get ahead, not just get by.",
    cards: [
      {
        id: 1,
        title: null,
        subTitle: "Boost in revenue with visual pipeline tracking",
        start: 0,
        end: 4,
        suffix: "x",
        prefix: null,
        value: null,
        lottieJson: null,
        cardImage: {
          url: "/images/svg/PipleLine-Track.svg", // Assuming you're storing local assets
        },
      },
      {
        id: 2,
        title: null,
        subTitle: "Contractors see higher sales productivity",
        start: 0,
        end: 28,
        suffix: "%",
        prefix: null,
        value: null,
        lottieJson: null,
        cardImage: {
          url: "/images/svg/trend-down.svg",
        },
      },
      {
        id: 3,
        title: null,
        subTitle: "Of leads weren’t fully tracked before using Contractor+",
        start: 0,
        end: 38,
        suffix: "%",
        prefix: null,
        value: null,
        lottieJson: null,
        cardImage: {
          url: "/images/svg/truck-fast.svg",
        },
      },
    ],
  };

  const Reviewsitem = {
    data: [
      {
        reviews: {
          title: "Trusted by over 50,000 build and service contractors",
          subTitle: null,
          reviews: [
            {
              id: 1,
              userName: "Brandon Geiger",
              profileImg: { url: "/images/webp/rushville.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `Since I started sending all my estimates using Contractor+, I have
  stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
              userRole: "Co-Owner, Rushville Restorations",
            },
            {
              id: 2,
              userName: "Juan Garcia",
              profileImg: { url: "/images/webp/juan-gracia.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
              userRole: "Owner, Nailed It Miami",
            },
            {
              id: 3,
              userName: "Scott Azure",
              profileImg: { url: "/images/webp/rands.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
              userRole: "CEO at Rands Mechanical",
            },
            {
              id: 4,
              userName: "Brandon Geiger",
              profileImg: { url: "/images/webp/rushville.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `Since I started sending all my estimates using Contractor+, I have
  stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
              userRole: "Co-Owner, Rushville Restorations",
            },
            {
              id: 5,
              userName: "Juan Garcia",
              profileImg: { url: "/images/webp/juan-gracia.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
              userRole: "Owner, Nailed It Miami",
            },
            {
              id: 6,
              userName: "Scott Azure",
              profileImg: { url: "/images/webp/rands.webp" },
              rating: 5,
              videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
              isModal: true,
              companyLogo: "/images/svg/randsIcon.svg",
              review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
              userRole: "CEO at Rands Mechanical",
            },
          ],
        },
      },
    ],
  };
  return (
    <div>
      <CrmHero
        hero={dealflowhero}
        slug="crm"
        heroImg="/images/webp/deal-flow-hero.webp"
      />
      <TrustedService reviews={Reviewsitem} slug="crm" />
      <div className="overflow-hidden bg-white">
        <GoingFieldSevices
          switchingTool={{
            title: "There’s no easy way to see what’s going on in the field",
            cardsDetail: fieldcarddetail,
          }}
        />
        <RealTimeServiceConnector
          theme="estimateTheme"
          fieldService={{
            title:
              "The only pipeline built to follow the flow of actual contracting work",
            cardsDetail: realTimeServiceSliderData, // ← imported from helper
          }}
        />
        <RunWithContractor kindAdorable={runWithContractorData} />
        <TimmingEffect />
        <NeverLookBack data={neverLookBackData} />
      </div>
      <ThousandsReviews
        data={dealReviews2}
        reviews={dealReviews2.reviews} // Optional; only needed if used elsewhere
        variant="secondary"
        apiData={false}
      />
      <CrmSercive
        createBtn={"Get started FREE"}
        mobileBtn={"Download FREE App"}
        ncc={"No credit card required"}
        data={formData}
        showClouds={false}
        className="xs:max-w-[88%] max-w-[87%] sm:max-w-[780px]"
        variantBtn="dark"
      />
      <TrustBarHvca
        platforms={platforms}
        className="mx-auto w-full max-w-[889px]"
      />
      <Faq
        faq={dealflowFaq}
        classNameAnswer="pt-1"
        mainContainerclassName="px-2 md:pt-[76px] pt-[66px] md:pb-[83px] pb-0"
        TittleClassName="max-w-[82%] xs:max-w-[81%] sm:max-w-full mx-auto"
      />
      <WhatEverClient
        data={{
          title: "Whatever you use, Contractor+ connects",
          subTitle: "5000+ Potential Integrations",
        }}
        issection={false}
      />

      <BlogPosts
        data={blogList}
        blogs={dealFlowBlogHeadingData}
        className="pb-8 sm:pb-12 md:mt-9 md:pb-16 lg:pb-20 xl:pb-[99px]"
      />
    </div>
  );
};

export default page;
