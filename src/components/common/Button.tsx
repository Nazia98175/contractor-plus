import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "text";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "primary-btn",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 ",
  text: "border border-gray-300 text-gray-800 hover:bg-gray-100 ",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2";

  // Combine base + variant + any custom classes passed in
  const combinedClasses =
    `${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
