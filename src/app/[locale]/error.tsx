"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold text-red-500">
        Something went wrong
      </h2>
      <p className="mb-6 text-gray-600">{error.message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
