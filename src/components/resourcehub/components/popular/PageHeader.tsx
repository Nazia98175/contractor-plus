
import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center py-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-[700px]">
        {description}
      </p>
    </div>
  );
};
