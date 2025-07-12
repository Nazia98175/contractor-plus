"use client";
import React, { useState, useEffect } from "react";
import { LazyWrapper } from "@/components/LazyWrapper";
import { Platform } from "@/types";
import Image from "next/image";

const SlugPageClientOptimized = ({
  slug,
  trackProperties,
  // likeYouDo,
  // howContractorWork,
  kindAdorable,
  teamUsingContractor,
  thousandReviews,
  reviews,
  blogs,
  blogsList,
  faq,
  createBtn,
  mobileBtn,
  ncc,
  crmService,
}: any) => {
  const [platforms, setPlatforms] = useState<Platform[] | null>(null);
 
  useEffect(() => {
    let mounted = true;

    const loadPlatforms = async () => {
      try {
        const { platforms: platformsData } = await import(
          "@/components/common/Helper"
        );
        if (mounted) {
          setPlatforms(platformsData);
        }
      } catch (error) {
        console.error("Failed to load platforms data:", error);
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadPlatforms);
    } else {
      setTimeout(loadPlatforms, 100);
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="bg-white">
        {Boolean(trackProperties?.featureHighlightSectionVisible) && (
          <>
            <LazyWrapper
              importFn={() => import("../crmbussiness/TrackProperties")}
              props={{ ncc, trackProperties }}
              fallback={<div className="h-32 animate-pulse bg-gray-100" />}
            />

            <LazyWrapper
              importFn={() => import("../crmbussiness/LikeYouDoContacts")}
              props={{ trackProperties }}
              fallback={<div className="h-40 animate-pulse bg-gray-100" />}
            />

            <LazyWrapper
              importFn={() => import("../crmbussiness/HowContractorWork")}
              props={{ ncc, trackProperties }}
              fallback={<div className="h-48 animate-pulse bg-gray-100" />}
            />
          </>
        )}

        <LazyWrapper
          importFn={() => import("../crmbussiness/KindAdorable")}
          props={{ slug, kindAdorable }}
          fallback={<div className="h-56 animate-pulse bg-gray-100" />}
          threshold={0.05}
          rootMargin="100px"
        />

        <LazyWrapper
          importFn={() => import("../crmbussiness/TeamsUsingContractor")}
          props={{ data: teamUsingContractor, slug }}
          fallback={<div className="h-64 animate-pulse bg-gray-100" />}
          threshold={0.05}
          rootMargin="100px"
        />

        <LazyWrapper
          importFn={() => import("../crmbussiness/ThousandsReviews")}
          props={{ data: thousandReviews, reviews }}
          fallback={<div className="h-72 animate-pulse bg-gray-100" />}
          threshold={0.05}
          rootMargin="100px"
        />
      </div>

      <div className="relative overflow-hidden">
        {/* Icons loaded only when visible */}
        <LazyWrapper
          importFn={() =>
            import("../common/Icons").then((mod) => ({
              default: mod.FooterRedLineIcon,
            }))
          }
          className="pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block"
          props={{
            className:
              "pointer-events-none absolute top-[-20%] left-[-2%] hidden max-h-[994px] w-full max-w-[840px] sm:block",
          }}
          fallback={<div className="h-32 w-full" />}
          threshold={0.01}
          rootMargin="200px"
        />

        <LazyWrapper
          importFn={() =>
            import("../common/Icons").then((mod) => ({
              default: mod.FooterRedLineMobileIcon,
            }))
          }
          className="pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden"
          props={{
            className:
              "pointer-events-none absolute top-[-20%] left-0 block max-h-[994px] w-full max-w-[840px] sm:hidden",
          }}
          fallback={<div className="h-32 w-full" />}
          threshold={0.01}
          rootMargin="200px"
        />
        <div className="relative">
          <Image
            width={800}
            height={1000}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute top-[10px] left-0 z-10 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
            src={"/images/webp/hero-red-line.webp"}
            alt="hero-red-line"
          />

          <LazyWrapper
            importFn={() => import("../crmbussiness/CrmSercive")}
            props={{
              createBtn: createBtn,
              mobileBtn: mobileBtn,
              ncc: ncc,
              data: crmService,
              variant: "primary",
              className: ` ${slug === "crm" ? "xs:max-w-[89%] max-w-[83%] pt-10 sm:max-w-[1120px] sm:pt-0" : "xs:max-w-[81%] max-w-[76%] pt-10 sm:max-w-[662px] sm:pt-0"}`,
              variantBtn: "light",
            }}
            fallback={<div className="h-48 animate-pulse bg-gray-100" />}
            threshold={0.05}
            rootMargin="100px"
          />
        </div>
        {platforms && (
          <LazyWrapper
            importFn={() => import("../industry/hvca/TrustBarHvca")}
            props={{
              platforms,
              className: "mx-auto w-full max-w-[889px]",
            }}
            fallback={<div className="h-20 animate-pulse bg-gray-100" />}
            threshold={0.05}
            rootMargin="100px"
          />
        )}

        <LazyWrapper
          importFn={() => import("../crmbussiness/Faq")}
          props={{
            faq,
            classNameAnswer: "pt-1",
            mainContainerclassName:
              "px-2 pt-[66px] pb-0 md:pt-[76px] md:pb-[83px]",
            TittleClassName: "max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto",
          }}
          fallback={<div className="h-64 animate-pulse bg-gray-100" />}
          threshold={0.05}
          rootMargin="100px"
        />
      </div>

      <LazyWrapper
        importFn={() => import("../crmbussiness/BlogPosts")}
        props={{
          data: blogsList,
          blogs,
          className: "mt-7 md:mt-9 mb-20",
          classMaxwidth: "max-w-[90%] xs:max-w-[98%] sm:max-w-full",
        }}
        fallback={<div className="h-80 animate-pulse bg-gray-100" />}
        threshold={0.05}
        rootMargin="100px"
      />
    </>
  );
};

export default SlugPageClientOptimized;
