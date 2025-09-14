import { cn } from "@/app/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-prediction file:text-alice placeholder:text-decemberSky focus:border-glowing relative flex h-10 w-full rounded-md border px-3 py-2 text-base file:text-sm file:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
