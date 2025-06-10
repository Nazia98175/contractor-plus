import React from "react";
import { CheckIcon } from "./Icons";

interface CardRequiredButtonProps {
  textColor?: string;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  textColor = "text-secondary",
}) => {
  return (
    <button
      className={`${textColor} font-myriad flex cursor-pointer items-center gap-1.5 text-sm font-semibold`}
    >
      <CheckIcon />
      No Credit Card Required
    </button>
  );
};

export default CardRequiredButton;
