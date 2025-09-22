import React, { ReactNode } from "react";

interface SubHeadingProps {
  children: ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  className = "",
}) => {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
};

export default SubHeading;
