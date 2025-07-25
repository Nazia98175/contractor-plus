import React from "react";
import Copy from "../common/Copy";
import { YouTubeIcon } from "../common/AppIcons";
import Image from "next/image";

const PodcastHero = () => {
  type Guest = {
    name: string;
    role: string;
    company?: string;
    image: string;
    blurred?: boolean;
  };

  const guests: Guest[] = [
    {
      name: "You could be our next guest!",
      role: "",
      image: "/guests/guest1.png",
      blurred: true,
    },
    {
      name: "Gerritt Bake",
      role: "Founder, American Contractor Network",
      image: "/guests/gerritt.png",
    },
    {
      name: "Justin Smith",
      role: "CEO, Contractor+",
      image: "/guests/justin.png",
    },
    {
      name: "Roshan Sethia",
      role: "CTO, Contractor+",
      image: "/guests/roshan.png",
    },
    {
      name: "You could be our next guest!",
      role: "",
      image: "/guests/guest2.png",
      blurred: true,
    },
  ];

  return (
    <section className="pt-[194px]">
      <Copy delay={0.2}>
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Contractor+ Podcasts
        </h4>
        <h2 className="main-heading gradient-white mb-4 text-center !font-medium text-transparent">
          Voices of the Trade
        </h2>
      </Copy>
      <Copy delay={0.3}>
        <p className="hero-description !text-trolleyGrey my-[26px] text-center">
          Unfiltered. Unapologetic. Unmissable.
        </p>
      </Copy>
      <button
        className="bg-red-linear primary-btn mx-auto flex h-10 !w-full max-w-[265px] items-center gap-1.5"
        type="button"
      >
        Subscribe on YouTube <YouTubeIcon />
      </button>

      <div className="flex flex-wrap justify-center gap-8">
        {guests.map((guest, index) => (
          <div key={index} className="w-40 text-center">
            <div className="relative mx-auto mb-3 h-40 w-40">
              <Image
                src={guest.image}
                alt={guest.name}
                fill
                className={`rounded-full object-cover ${guest.blurred ? "opacity-70 blur-sm" : ""}`}
              />
            </div>
            <p className="text-sm font-semibold">{guest.name}</p>
            {guest.role && (
              <p className="mt-1 text-xs text-gray-400">{guest.role}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastHero;
