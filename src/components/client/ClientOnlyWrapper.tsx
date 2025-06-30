"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ContentLoader = dynamic(() => import("@/components/lazy/ContentLoader"), {
  loading: () => (
    <div className="space-y-6">
      <div className="h-32 animate-pulse bg-gray-100 rounded-md" />
      <div className="h-40 animate-pulse bg-gray-100 rounded-md" />
      <div className="h-48 animate-pulse bg-gray-100 rounded-md" />
    </div>
  )
});

interface ClientOnlyWrapperProps {
  data: any;
}

export default function ClientOnlyWrapper({ data }: ClientOnlyWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="space-y-6">
        <div className="h-32 animate-pulse bg-gray-100 rounded-md" />
        <div className="h-40 animate-pulse bg-gray-100 rounded-md" />
        <div className="h-48 animate-pulse bg-gray-100 rounded-md" />
      </div>
    );
  }

  return <ContentLoader data={data} />;
}
