import Button from "./Button";
interface FreeAccountButtonProps {
  onClick?: () => void;
  className?: string;
}
const FreeAccountButton: React.FC<FreeAccountButtonProps> = ({
  onClick,
  className = "bg-red-linear primary-btn h-[40px] gap-2",
}) => {
  return (
    <>
      <Button onClick={onClick} className={className}>
        <span className="hidden lg:block">Create Free Account</span>
        <span className="block lg:hidden">Download Free App</span>
      </Button>
    </>
  );
};

export default FreeAccountButton;
