import React from "react";

export const EmptyState: React.FC = () => {
  return (
    <div className="border-stiletto rounded-lg border px-4 py-10 text-center">
      <div className="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-list text-aliceBlue/50 mx-auto"
        >
          <line x1="8" x2="21" y1="6" y2="6"></line>
          <line x1="8" x2="21" y1="12" y2="12"></line>
          <line x1="8" x2="21" y1="18" y2="18"></line>
          <line x1="3" x2="3.01" y1="6" y2="6"></line>
          <line x1="3" x2="3.01" y1="12" y2="12"></line>
          <line x1="3" x2="3.01" y1="18" y2="18"></line>
        </svg>
      </div>
      <p className="text-aliceBlue">
        No items added to your comparison list yet.
      </p>
      <p className="text-aliceBlue/70 mt-1 text-sm">
        Search for materials above and click "Add to List" to start comparing.
      </p>
    </div>
  );
};
