import React from "react";
import { Cross2Icon } from "../common/Icons";

interface IndustryCardProps {
  obj: {
    text: string;
    iconAtStart: boolean;
  };
}

const IndustryCard: React.FC<IndustryCardProps> = ({ obj }) => {
  const { text, iconAtStart } = obj;

  return (
    <article className="text-wallStreet flex max-w-[350px] gap-2.5 px-4 py-2.5 text-sm font-semibold -tracking-[0.28px]">
      {iconAtStart && (
        <span className="mt-2 shrink-0">
          <Cross2Icon />
        </span>
      )}
      <span>{text}</span>
      {!iconAtStart && (
        <span className="mt-2 shrink-0">
          <Cross2Icon />
        </span>
      )}
    </article>
  );
};

export default IndustryCard;
