import Button from "./Button";
import { SideIcon } from "./Icons";
interface FreeAccountButtonProps {
  onClick?: () => void;
  className?: string;
  text: string;
  showIcon?: boolean;
}
const FreeAccountButton: React.FC<FreeAccountButtonProps> = ({
  onClick,
  text = "",
  className,
  showIcon = true,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`primary-btn bg-red-linear h-[40px] gap-2 ${className}`}
      >
        {text}
        {showIcon && <SideIcon />}
      </button>
    </>
  );
};

export default FreeAccountButton;
