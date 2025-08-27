"use client";
import Resource from "@/components/resourcehub/Resource";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ResourceHubPage = () => {
  const queryClientRef = useRef(new QueryClient());
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <main id="home-page-view-port-screen" className="bg-white">
        <Resource />
      </main>
    </QueryClientProvider>
  );
};

export default ResourceHubPage;
