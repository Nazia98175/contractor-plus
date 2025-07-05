import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "text"
  | "ghost";
type ButtonSize = "sm" | "default" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "primary-btn bg-red-linear",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  text: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "py-1.5 px-4  text-sm",
  default: "py-2.5 px-6 text-base h-10",
  lg: "py-3 px-8 text-lg",
  icon: "h-10 w-10",
};
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      className = "",
      variant = "primary",
      size = "default",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const baseClasses = "flex items-center justify-center gap-2  rounded-lg";
    const combinedClasses =
      `${baseClasses} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
