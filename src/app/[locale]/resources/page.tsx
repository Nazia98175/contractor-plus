"use client";

import Resource from "@/components/resource-hub/Resource";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

const Page = () => {
  // useRef ensures the QueryClient is only created once per render
  const queryClientRef = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <main className="bg-white">
        <Resource />
      </main>
    </QueryClientProvider>
  );
};

export default Page;
