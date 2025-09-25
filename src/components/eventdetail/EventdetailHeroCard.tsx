import Image from "next/image";
import React from "react";
import { EventDetailIcon } from "../common/Icons";
import Button from "../common/Button";

interface EventdetailHeroCard {
  imgUrl: string;
  heading: string;
  place: string;
  description: string;
  button: string;
  logoUrl: string;
  tag: string;
  label: string;
}

interface DirectoryProps {
  item: EventdetailHeroCard;
}

const EventdetailHeroCard: React.FC<DirectoryProps> = ({ item }) => {
  console.log(item, "item");

  return (
    <div className="img-overlay relative mx-auto flex w-full max-w-[811px] flex-col items-center justify-center overflow-hidden">
      <div className="bg-kuroiBlack pointer-events-none absolute right-[-22%] bottom-[-6%] h-[110%] w-[115px] blur-[9px] sm:right-[-13%] sm:block sm:blur-[15px] md:w-[130px]" />
      <div className="bg-kuroiBlack pointer-events-none absolute bottom-[-6%] left-[-22%] h-[110%] w-[115px] blur-[9px] sm:left-[-13%] sm:block sm:blur-[15px] md:w-[130px]" />
      <div className="bg-kuroiBlack xs:bottom-[-15%] pointer-events-none absolute right-0 bottom-[-22%] h-[77px] w-[110%] blur-[9px] sm:bottom-[-13%] sm:block sm:blur-[15px] md:h-[90px]" />
      <div className="bg-kuroiBlack xs:top-[-15%] pointer-events-none absolute top-[-22%] right-0 h-[77px] w-[110%] blur-[9px] sm:top-[-13%] sm:block sm:blur-[15px] md:h-[90px]" />

      {item?.imgUrl && (
        <Image
          className="min-h-[300px] w-full rounded-lg object-cover"
          src={item.imgUrl}
          alt={item.heading}
          width={811}
          height={449}
        />
      )}
      <div className="absolute inset-0 rounded-lg bg-[#00000075]"></div>
      <div className="absolute -bottom-[0px] z-30 flex w-full flex-col items-center justify-center">
        {item?.logoUrl && (
          <Image
            className="mb-2 w-full max-w-[73px] rounded-lg object-cover md:mb-4 md:max-w-[150px]"
            src={item.logoUrl}
            alt={item.heading}
            width={150}
            height={150}
          />
        )}

        <b className="text-decemberSky text-center text-sm font-normal sm:text-base">
          {item.label}
          {item.tag && (
            <span className="bg-ravenBlackColor text-decemberSky ml-2 rounded-3xl px-2 py-1">
              {item.tag}
            </span>
          )}
        </b>
        <h2 className="mt-1 text-center text-2xl leading-[120%] font-extrabold text-white sm:text-3xl lg:text-4xl xl:text-5xl">
          {item.heading}
        </h2>
        <p className="text-decemberSky my-3 text-center text-sm sm:text-base lg:text-lg">
          {item.description}
        </p>
        <Button className="relative z-20 w-full max-w-[189px]">
          {item.button} <EventDetailIcon />
        </Button>
      </div>
    </div>
  );
};

export default EventdetailHeroCard;
