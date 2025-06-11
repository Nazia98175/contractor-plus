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
  className = "bg-red-linear primary-btn h-[40px] gap-2",
  showIcon = true,
}) => {
  return (
    <>
      <Button onClick={onClick} className={className}>
        <span className="hidden lg:block">{text}</span>
        <span className="block lg:hidden">{text}</span>
        {showIcon && <SideIcon />}
      </Button>
    </>
  );
};

export default FreeAccountButton;
