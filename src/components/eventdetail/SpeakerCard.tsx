import React from "react";
import CardReveal from "../common/CardReveal";
import Image from "next/image";

const SpeakerCard = ({ member }: { member: any }) => {
  return (
    <>
      <CardReveal delay={0.1} distance={50}>
        <article className="group relative h-full max-h-[400px] min-h-[400px] w-full cursor-pointer overflow-hidden rounded-lg transition-colors duration-300 md:max-h-[445px] md:min-h-[445px]">
          {member?.avatar && (
            <Image
              height={500}
              width={500}
              className="h-full max-h-[400px] min-h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105 md:max-h-[445px] md:min-h-[445px]"
              src={member.avatar.url}
              alt={member.name}
            />
          )}

          <div className="bg-rgba14 absolute bottom-0 left-0 z-10 w-full p-3 backdrop-blur-[16px]">
            <p className="font-sm text-secondary font-semibold">
              {member?.jobTitle ?? ""}
            </p>
            <div className="flex items-center justify-between gap-3 pt-3">
              <h4 className="text-xl font-semibold text-white md:text-2xl">
                {member?.name ?? ""}
              </h4>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </CardReveal>
    </>
  );
};

export default SpeakerCard;
