import React, { ReactNode } from "react";

interface MainHeadingProps {
  children: ReactNode;
  className?: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ children, className }) => {
  return <h1 className={`main-heading ${className}`}>{children}</h1>;
};

export default MainHeading;
