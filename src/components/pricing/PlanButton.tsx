import React from "react";

interface PlanButtonProps {
  cta: string;
  variant?: "pro" | "proTeam" | "default";
  className?: string;
}

const PlanButton: React.FC<PlanButtonProps> = ({
  cta,
  variant = "default",
  className = "",
}) => {
  const baseStyles: string =
    "my-4 h-10 w-full rounded-lg font-semibold tracking-[0.1px] duration-300 lg:my-6 flex items-center justify-center";

  const variantStyles: Record<string, string> = {
    pro: "bg-offWhite group-hover:bg-wallStreet group-hover:border-transparent group-hover:text-offWhite",
    proTeam:
      "bg-softBlush text-thickRed group-hover:bg-thickRed group-hover:text-softBlush",
    default:
      "border-winterWay text-wallStreet group-hover:bg-wallStreet group-hover:border-transparent group-hover:text-offWhite",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {cta}
    </button>
  );
};

export default PlanButton;
