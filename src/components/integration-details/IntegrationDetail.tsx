"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AdvertisementCard from "../blogdetails/AdvertisementCard";
import IntegrationContent from "./IntegrationContent";

gsap.registerPlugin(ScrollTrigger);

const IntegrationDetail = () => {
  const tableLinks = [
    {
      link: "",
      label: "Faster payments",
    },
    {
      link: "",
      label: "Safer payments ",
    },
  ];
  return (
    <section className="main-container 1xl:space-y-20 space-y-12 pt-8 pb-20 sm:pb-24 md:space-y-12 lg:space-y-14 xl:pb-[114px]">
      <div className="flex flex-col justify-between gap-4 md:flex-row xl:gap-[30px]">
        <div className="grow">
          <IntegrationContent />
        </div>
        {/* RIGHT SIDE CONTENT  */}
        <div className="relative top-18 mb-12 w-full min-w-[300px] md:sticky md:mb-0 md:h-fit lg:top-24 lg:min-w-[336px]">
          <div className="w-full space-y-8">
            <div className="flex flex-col justify-between gap-8">
              <div className="basis-[40%] space-y-2.5 xl:space-y-3.5">
                <h4 className="mb-2 text-xl font-bold text-white">
                  PayPal Key Benefits
                </h4>
                <ul className="list-disc space-y-2 pl-6 xl:pl-10">
                  {tableLinks.map((obj, index) => (
                    <li
                      key={index}
                      className="xs-heading text-coldGrey font-semibold italic duration-300"
                    >
                      {obj.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="top-0 basis-[60%] md:sticky">
                <AdvertisementCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDetail;
