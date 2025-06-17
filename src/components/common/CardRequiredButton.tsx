import React from "react";
import { CheckIcon } from "./Icons";

interface CardRequiredButtonProps {
  className?: string;
  text: string;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  className = "text-secondary",
  text = "",
}) => {
  return (
    <button
      className={`${className} font-myriad hidden cursor-pointer items-center gap-1.5 text-sm font-semibold sm:flex`}
    >
      <CheckIcon />
      {text}
    </button>
  );
};

export default CardRequiredButton;
