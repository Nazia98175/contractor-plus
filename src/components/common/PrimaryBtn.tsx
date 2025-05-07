import React, { ReactNode, MouseEventHandler } from "react";

interface PrimaryBtnProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button onClick={onClick} className={`${className} primary-btn`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
