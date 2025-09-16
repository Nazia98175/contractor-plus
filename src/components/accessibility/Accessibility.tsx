"use client";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import { TermsServiceData } from "@/types";
import { FC } from "react";
import BlocksRender from "../common/BlocksRender";

const Accessibility: FC<{ data: TermsServiceData.Data }> = ({ data }) => {
  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);
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
