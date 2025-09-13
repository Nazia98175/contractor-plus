"use client";
import { TermsServiceData } from "@/types";
import gsap from "gsap";
import { FC, useEffect } from "react";
import BlocksRender from "../common/BlocksRender";

const Accessibility: FC<{ data: TermsServiceData.Data }> = ({ data }) => {
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
    <div className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {data?.pageDescription ? (
          <article className="prose prose-gray max-w-none">
            <BlocksRender
              //@ts-ignore
              content={data?.pageDescription}
            />
          </article>
        ) : (
          <p className="text-center">No content available</p>
        )}
      </div>
    </div>
  );
};

export default Accessibility;
