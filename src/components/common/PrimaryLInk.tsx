import Link from "next/link";
import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "text";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  href: string; // href is required for a Link
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "primary-btn bg-red-linear",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  text: "border border-gray-300 text-gray-800 hover:bg-gray-100",
};

const PrimaryLink: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  href,
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all";
  const combinedClasses =
    `${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
};

export default PrimaryLink;
