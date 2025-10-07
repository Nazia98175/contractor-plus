"use client";
import { usePathname } from "next/navigation";
import ButtonLoader from "./ButtonLoader";
import { SideIcon } from "./Icons";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
interface FreeAccountButtonProps {
  className?: string;
  text?: any;
  showIcon?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}
const FreeTrialButton: React.FC<FreeAccountButtonProps> = ({
  text = "",
  className,
  showIcon = true,
  type,
  ariaLabel,
}) => {
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();
  return (
    <>
      <button
        type={type}
        onClick={() => handleRedirect({ pathname })}
        aria-label={ariaLabel}
        disabled={loading}
        className={`secondary-btn bg-red-linear h-10 gap-2 ${className}`}
      >
        {loading ? (
          <ButtonLoader />
        ) : (
          <>
            {text}
            {showIcon && <SideIcon />}
          </>
        )}
      </button>
    </>
  );
};

export default FreeTrialButton;
