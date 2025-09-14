import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-6 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-aliceBlue max-w-[700px]">{description}</p>
    </div>
  );
};
