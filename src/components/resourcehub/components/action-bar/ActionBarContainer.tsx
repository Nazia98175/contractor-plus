
import React from 'react';

interface ActionBarContainerProps {
  children: React.ReactNode;
  itemCount?: number; // Making this optional since it wasn't in the original interface
}

export const ActionBarContainer = ({ children }: ActionBarContainerProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      {children}
    </div>
  );
};
