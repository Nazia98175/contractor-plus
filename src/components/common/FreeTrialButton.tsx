import { usePathname } from "next/navigation";
import ButtonLoader from "./ButtonLoader";
import { SideIcon } from "./Icons";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
interface FreeAccountButtonProps {
  className?: string;
  text: string;
  showIcon?: boolean;
  type?: "button" | "submit" | "reset";
}
const FreeTrialButton: React.FC<FreeAccountButtonProps> = ({
  text = "",
  className,
  showIcon = true,
  type,
}) => {
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();
  return (
    <>
      <button
        type={type}
        onClick={() => handleRedirect({ pathname })}
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
