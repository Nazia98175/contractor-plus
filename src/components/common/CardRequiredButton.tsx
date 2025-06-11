import React from "react";
import { CheckIcon } from "./Icons";

interface CardRequiredButtonProps {
  className?: string;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  className = "text-secondary",
}) => {
  return (
    <button
      className={`${className} font-myriad flex cursor-pointer items-center gap-1.5 text-sm font-semibold`}
    >
      <CheckIcon />
      No Credit Card Required
    </button>
  );
};

export default CardRequiredButton;
