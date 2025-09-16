import React from "react";
import { NoBlogIcon } from "./Icons";

const NoEventFound = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <NoBlogIcon />
      </div>
      <p className="x text-base font-medium">No Events found</p>
      <p className="mt-1 text-sm text-gray-500">
        Check back later for new content.
      </p>
    </div>
  );
};

export default NoEventFound;
