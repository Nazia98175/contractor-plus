import React from "react";
import ContractorCard from "./ContractorCard";
import Image from "next/image";

const BuildBusinessOnBlood = () => {
  const builtYourBusiness = [
    {
      id: 2,
      text: "Hard work and hustle have never been the problem. When a challenge showed up, you found a way to solve it with a new process, a software, a new workaround.",
      iconAtStart: true,
      pt: "md:pt-[60px] ml-auto",
    },
    {
      id: 2,
      text: "Photos are scattered across phones, Google Drive, and group chats",
      iconAtStart: false,
    },
    {
      id: 3,
      text: "You use one software for estimates & invoices and another for contracts",
      iconAtStart: true,
      pt: " ml-auto",
    },
    {
      id: 4,
      text: "Customer notes are logged in a CRM and manually pasted into a PM tool",
      iconAtStart: false,
    },
    {
      id: 5,
      text: "You’re using tools like Zapier to force everything to “work together”",
      iconAtStart: true,
      pt: " ml-auto",
    },
  ];
  return (
    <section className="relative z-10 mt-14 flex flex-col">
      <Image
        src="/images/svg/spider.svg"
        alt="Sanke"
        width={405}
        height={306}
        className="absolute top-10 right-0 z-[1] max-w-36 md:top-0 xl:max-w-[305px]"
      />
      <Image
        src="/images/svg/snake-2.svg"
        alt="Sanke"
        width={177}
        height={306}
        className="absolute -bottom-10 left-0 z-[1] max-w-20 xl:max-w-[250px]"
      />
      <h3 className="text-secondary small-heading relative z-10 px-3">
        You’ve built your business on blood, sweat, and tears
      </h3>

      <div className="relative mx-auto flex h-full w-full max-w-[900px] flex-col gap-5 pt-10 sm:justify-between sm:pt-14 md:py-0 lg:gap-8">
        <div className="pointer-events-none absolute top-[4%] left-1/2 z-0 mx-auto h-full max-h-[500px] min-h-[500px] w-full max-w-[500px] -translate-x-1/2 rounded-full bg-[url('/images/webp/spiders-web.webp')] bg-contain bg-center bg-no-repeat opacity-50 sm:min-h-[500px] md:top-0 md:opacity-100"></div>

        {builtYourBusiness.map((obj, index) => (
          <ContractorCard key={index} obj={obj} />
        ))}
      </div>
      <h4 className="xs-heading text-cyberspace relative z-10 mt-10 px-3 text-center font-semibold -tracking-[0.44px]">
        All that friction adds up. And it’s keeping your business stuck.
      </h4>
    </section>
  );
};

export default BuildBusinessOnBlood;
