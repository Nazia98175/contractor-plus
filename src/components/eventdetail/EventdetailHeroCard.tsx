import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../common/Button";
import CommonModalLayout from "../common/CommonModalLayout";
import { EventBackArrowIcon, EventDetailIcon } from "../common/Icons";
import { isValidLink } from "@/lib/helpers";
import { useRouter } from "next/navigation";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleRedirect = (item: EventdetailHeroCard) => {
    if (!item) return;
    if (isValidLink(item.button)) {
      const formattedLink = item.button.startsWith("http")
        ? item.button
        : `http://${item.button}`;
      window.open(formattedLink, "_blank");
    } else {
      router.push(`/#`);
    }
  };
  console.log(item, "item in hero card");
  return (
    <>
      <div className="mx-auto flex max-w-[1309px] items-center justify-start gap-4 px-4 py-5 xl:px-0">
        <Link
          href={"/events"}
          className="font-montserrat flex items-center justify-center gap-2 text-sm leading-[142.857%] font-medium tracking-[0.1px] whitespace-nowrap text-[#8D8D8D]"
        >
          <EventBackArrowIcon />
          All Events /
        </Link>
        <h2 className="line-clamp-1 max-w-[600px] text-center text-sm leading-[120%] font-extrabold text-white">
          {item.heading}
        </h2>
      </div>
      <div className="img-overlay relative mx-auto flex max-h-[600px] w-full max-w-[811px] flex-col items-center justify-center overflow-hidden">
        <div className="bg-kuroiBlack pointer-events-none absolute right-[-22%] bottom-[-6%] h-[110%] w-[115px] blur-[9px] sm:right-[-13%] sm:block sm:blur-[15px] md:w-[130px]"></div>
        <div className="bg-kuroiBlack pointer-events-none absolute bottom-[-6%] left-[-22%] h-[110%] w-[115px] blur-[9px] sm:left-[-13%] sm:block sm:blur-[15px] md:w-[130px]"></div>
        <div className="bg-kuroiBlack xs:bottom-[-15%] pointer-events-none absolute right-0 bottom-[-22%] h-[77px] w-[110%] blur-[9px] sm:bottom-[-13%] sm:block sm:blur-[15px] md:h-[90px]"></div>
        <div className="bg-kuroiBlack xs:top-[-15%] pointer-events-none absolute top-[-22%] right-0 h-[77px] w-[110%] blur-[9px] sm:top-[-13%] sm:block sm:blur-[15px] md:h-[90px]"></div>
        <Image
          onClick={openModal}
          className="h-full max-h-[449px] w-full cursor-pointer rounded-lg object-cover"
          src={item.imgUrl}
          alt={item.heading}
          width={811}
          height={449}
        />
        {/* Overlay for better text visibility */}
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-[#00000075]"></div>
        <div className="absolute bottom-[0px] z-30 flex w-full flex-col items-center justify-center">
          <b className="text-decemberSky line-clamp-1 text-center text-sm sm:text-base lg:text-lg">
            {item.place}
          </b>
          <h2 className="mt-1 line-clamp-1 text-center text-2xl leading-[120%] font-extrabold text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            {item.heading}
          </h2>
          <p className="text-decemberSky my-3 line-clamp-1 text-center text-sm sm:text-base lg:text-lg">
            {item.description}
          </p>
          <Button
            onClick={() => handleRedirect(item)}
            className="relative z-20 w-full max-w-[189px]"
          >
            Event Details <EventDetailIcon />
          </Button>
        </div>
      </div>
      <CommonModalLayout
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-h-[400px] w-full max-w-[600px] rounded-lg sm:p-3 md:p-4"
      >
        <Image
          className="h-auto w-full rounded-lg object-cover"
          src={item.imgUrl}
          alt={item.heading}
          width={811}
          height={449}
        />
      </CommonModalLayout>
    </>
  );
};

export default EventdetailHeroCard;
