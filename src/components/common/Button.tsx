import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "text";
type ButtonSize = "sm" | "default" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "primary-btn bg-red-linear",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline:
    "border border-gray-300 text-ruined hover:bg-lightRed hover:border-transparent hover:text-netherworld",
  text: "border border-gray-300 text-gray-800 hover:bg-gray-100",
};
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "py-1.5 px-4 text-sm",
  default: "py-2.5 px-6 text-base",
  icon: "h-10 !w-10 text-base",
  lg: "py-3 px-8 text-lg",
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
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "flex items-center justify-center gap-2 w-full rounded-lg px-3";
    const combinedClasses =
      `${baseClasses} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`.trim();

    return (
      <button
        ref={ref}
        aria-label={
          ariaLabel || (typeof children === "string" ? children : "button")
        }
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
