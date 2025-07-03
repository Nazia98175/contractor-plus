import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "primary-btn bg-red-linear",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  text: "border border-gray-300 text-gray-800 hover:bg-gray-100",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      className = "",
      variant = "primary",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "flex items-center justify-center gap-2 w-full py-2 px-6 sm:py-2.5 rounded-lg";
    const combinedClasses =
      `${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`.trim();

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
