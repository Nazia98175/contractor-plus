// app/not-found.tsx or app/[locale]/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
        Go Back Home
      </Link>
    </div>
  );
}
