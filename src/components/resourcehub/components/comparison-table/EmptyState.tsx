
import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-10 border rounded-lg bg-muted/20 px-4">
      <div className="mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list mx-auto text-muted-foreground/50">
          <line x1="8" x2="21" y1="6" y2="6"></line>
          <line x1="8" x2="21" y1="12" y2="12"></line>
          <line x1="8" x2="21" y1="18" y2="18"></line>
          <line x1="3" x2="3.01" y1="6" y2="6"></line>
          <line x1="3" x2="3.01" y1="12" y2="12"></line>
          <line x1="3" x2="3.01" y1="18" y2="18"></line>
        </svg>
      </div>
      <p className="text-muted-foreground">No items added to your comparison list yet.</p>
      <p className="text-sm text-muted-foreground/70 mt-1">
        Search for materials above and click "Add to List" to start comparing.
      </p>
    </div>
  );
};
