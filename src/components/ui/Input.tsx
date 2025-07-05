import { cn } from "@/app/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-background ring-offset-background file:text-foreground flex h-10 w-full rounded-md border border-[#E5E6EBE6] px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#71717a] focus-visible:ring-2 focus-visible:ring-[#DB2424E6] focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
