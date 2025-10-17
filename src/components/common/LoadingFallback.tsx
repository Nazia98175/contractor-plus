import React from "react";

const LoadingFallback = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="border-philippineBrown h-8 w-8 animate-spin rounded-full border-4" />
    </div>
  );
};

export default LoadingFallback;
