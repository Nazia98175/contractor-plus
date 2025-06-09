import React from "react";
import { Cross2Icon } from "../common/Icons";

interface ContractorCardProps {
  obj: {
    text: string;
    iconAtStart: boolean;
    pt?: string;
  };
}

const ContractorCard: React.FC<ContractorCardProps> = ({ obj }) => {
  return (
    <article
      className={`text-wallStreet relative z-10 flex max-w-[350px] gap-2.5 px-4 py-2.5 text-sm font-semibold -tracking-[0.28px] ${obj.pt || ""}`}
    >
      {obj.iconAtStart && (
        <span className="mt-2 shrink-0">
          <Cross2Icon />
        </span>
      )}
      <span>{obj.text}</span>
      {!obj.iconAtStart && (
        <span className="mt-2 shrink-0">
          <Cross2Icon />
        </span>
      )}
    </article>
  );
};

export default ContractorCard;
