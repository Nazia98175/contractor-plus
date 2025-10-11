import React from "react";

interface PlanButtonProps {
  cta: string;
  variant?: "pro" | "proTeam" | "proTeamSeconadry" | "lifetime" | "default";
  size?: "small" | "default";
  className?: string;
}

const PlanButton: React.FC<PlanButtonProps> = ({
  cta,
  variant = "default",
  size = "default",
  className = "",
}) => {
  const baseStyles: string =
    "w-full rounded-lg font-semibold tracking-[0.1px] duration-300 flex items-center justify-center";

  const sizeStyles: Record<string, string> = {
    default: "h-10 text-base",
    small: "h-[30px] text-[12px] xs:text-sm xs:h-8",
  };

  const variantStyles: Record<string, string> = {
    pro: "bg-offWhite border-winterWay text-winterWay border group-hover:bg-wallStreet group-hover:border-transparent group-hover:text-offWhite",
    proTeam:
      "bg-softBlush text-thickRed group-hover:bg-thickRed group-hover:text-softBlush",
    proTeamSeconadry: "text-thickRed border border-thickRed",
    lifetime:
      "text-[#008418]  bg-[#D7FFEB] group-hover:border-[#008418] border-transparent border",
    default:
      "border-winterWay border text-wallStreet group-hover:bg-wallStreet group-hover:border-transparent group-hover:text-offWhite",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {cta}
    </button>
  );
};

export default PlanButton;
