import { cn } from "@/app/lib/utils";
import React from "react";

interface ToggleButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const ToggleButton = ({
  isActive,
  onClick,
  icon,
  label,
  color,
}: ToggleButtonProps) => {
  let colorClasses = "";

  switch (color) {
    case "blue":
      colorClasses = isActive
        ? "bg-blue-500/10 text-blue-500 border-blue-500 hover:bg-blue-500/20"
        : "hover:bg-blue-500/5 hover:text-blue-500 hover:border-blue-300";
      break;
    case "amber":
      colorClasses = isActive
        ? "bg-amber-500/10 text-amber-500 border-amber-500 hover:bg-amber-500/20"
        : "hover:bg-amber-500/5 hover:text-amber-700 hover:border-amber-300";
      break;
    case "green":
      colorClasses = isActive
        ? "bg-green-500/10 text-green-500 border-green-500 hover:bg-green-500/20"
        : "hover:bg-green-500/5 hover:text-green-500 hover:border-green-300";
      break;
    default:
      colorClasses = isActive
        ? "bg-primary/10 text-primary border-primary hover:bg-primary/20"
        : "hover:bg-primary/5 hover:text-primary hover:border-primary";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium",
        "ease-apple-ease border transition-all duration-200",
        isActive ? "border" : "border-transparent",
        colorClasses,
      )}
    >
      {icon}
      {label}
    </button>
  );
};

export default ToggleButton;
