import Button from "./Button";
interface FreeAccountButtonProps {
  onClick?: () => void;
  className?: string;
  text: string;
}
const FreeAccountButton: React.FC<FreeAccountButtonProps> = ({
  onClick,
  text = "",
  className = "bg-red-linear primary-btn h-[40px] gap-2",
}) => {
  return (
    <>
      <Button onClick={onClick} className={className}>
        <span className="hidden lg:block">{text}</span>
        <span className="block lg:hidden">{text}</span>
      </Button>
    </>
  );
};

export default FreeAccountButton;
