import ButtonLoader from "./ButtonLoader";
import { SideIcon } from "./Icons";
interface FreeAccountButtonProps {
  onClick?: any;
  className?: string;
  text: string;
  showIcon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}
const FreeAccountButton: React.FC<FreeAccountButtonProps> = ({
  onClick,
  text = "",
  className,
  showIcon = true,
  disabled,
  type,
  loading = false,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`secondary-btn bg-red-linear h-[40px] gap-2 ${className}`}
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

export default FreeAccountButton;
