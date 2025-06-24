import React from "react";
import { CheckIcon } from "./Icons";

interface CardRequiredButtonProps {
  className?: string;
  text: string;
  showIcon?: boolean;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  className = "",
  text = "",
  showIcon = false,
}) => {
  return (
    <button
      className={`${className} font-myriad text-secondary hidden cursor-pointer items-center gap-1.5 text-sm font-semibold sm:flex`}
    >
      {showIcon && <CheckIcon />}
      {text}
    </button>
  );
};

export default CardRequiredButton;
