import React from "react";
import { CheckIcon } from "./Icons";
import { variantStylesCardButton } from "@/utils/getVariants";

type VariantType = "default" | "primary" | "light" | "dark" | "muted";

interface CardRequiredButtonProps {
  className?: string;
  text: string;
  showIcon?: boolean;
  variantBtn?: VariantType;
}

const CardRequiredButton: React.FC<CardRequiredButtonProps> = ({
  className = "",
  text = "",
  showIcon = false,
  variantBtn = "default",
}) => {
  const variantStyles = variantStylesCardButton[variantBtn];
  return (
    <p
      className={`${className} font-myriad hidden items-center gap-1.5 text-sm font-semibold sm:flex ${variantStyles}`}
    >
      {showIcon && <CheckIcon />}
      {text}
    </p>
  );
};

export default CardRequiredButton;
