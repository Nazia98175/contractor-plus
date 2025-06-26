import React from "react";
import { CheckIcon } from "./Icons";
import { variantStylesCardButton } from "@/utils/getVariants";

type VariantType = "default" | "primary" | "light" | "dark" | "muted";

interface CardRequiredButtonProps {
  className?: string;
  text: string;
  showIcon?: boolean;
  variant?: VariantType;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  className = "",
  text = "",
  showIcon = false,
  variant = "default",
}) => {
  const variantStyles = variantStylesCardButton[variant];
  return (
    <button
      className={`${className} font-myriad hidden cursor-pointer items-center gap-1.5 text-sm font-semibold sm:flex ${variantStyles}`}
    >
      {showIcon && <CheckIcon />}
      {text}
    </button>
  );
};

export default CardRequiredButton;
