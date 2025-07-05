
"use client";
import { useState, useEffect, useRef } from "react";

// Skeleton components
const SkeletonLoader = ({ height = "h-32", className = "" }: { height?: string; className?: string }) => (
  <div className={`${height} animate-pulse bg-gray-100 rounded-md mx-auto max-w-4xl ${className}`} />
);

interface LazyContentLoaderProps {
  data: {
    slug: string;
    theme: string;
    hero: any;
    reviews: any;
    switchingTool: any;
    fieldServiceData: any;
    trackProperties: any;
    comparison: any;
    teamsUsingContractor: any;
    crmService: any;
    thousandReviews: any;
    reviewsData: any;
    faq: any;
    blogs: any;
    blogsList: any;
    createBtn: any;
    mobileBtn: any;
    ncc: any;
  };
}

const LazyContentLoader = ({ data }: LazyContentLoaderProps) => {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set());
  const [components, setComponents] = useState<Record<string, any>>({});
  
  // Intersection observer refs
  const fieldServiceRef = useRef<HTMLDivElement>(null);
  const slugContentRef = useRef<HTMLDivElement>(null);

  // Progressive component loading
  const loadComponent = async (name: string, importFn: () => Promise<any>) => {
    if (components[name] || loadedSections.has(name)) return;
    
    setLoadedSections(prev => new Set(prev).add(name));
    
    try {
      const module = await importFn();
      setComponents(prev => ({ 
        ...prev, 
        [name]: module.default || module 
      }));
    } catch (error) {
      console.error(`Failed to load ${name}:`, error);
    }
  };

  // Intersection observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '100px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('data-section');
          
          switch (targetId) {
            case 'field-service':
              loadComponent('FieldService', () => import("@/components/crmbussiness/FieldService"));
              break;
            case 'slug-content':
              loadComponent('SlugPageClient', () => import("@/components/slugPage/SlugPageClient"));
              break;
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    [ fieldServiceRef, slugContentRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const FieldService = components.FieldService;
  const SlugPageClient = components.SlugPageClient;

  return (
    <>

      {/* Field Service Section */}
      <div ref={fieldServiceRef} data-section="field-service">
        {FieldService ? (
          <FieldService
            slug={data.slug}
            fieldService={data.fieldServiceData}
            theme={data.theme}
            apiData={true}
            mainClassName="max-w-[90%] xs:max-w-[84%] sm:max-w-[813px] mx-auto"
          />
        ) : (
          <SkeletonLoader height="h-48" />
        )}
      </div>

      {/* Slug Content Section */}
      <div ref={slugContentRef} data-section="slug-content">
        {SlugPageClient ? (
          <SlugPageClient
            slug={data.slug}
            fieldService={data.fieldServiceData}
            theme={data.theme}
            ncc={data.ncc}
            trackProperties={data.trackProperties}
            // likeYouDo={data.trackProperties?.cardDetails?.[0]}
            // howContractorWork={data.trackProperties?.cardDetails?.[1]}
            kindAdorable={data.comparison}
            teamUsingContractor={data.teamsUsingContractor}
            crmService={data.crmService}
            thousandReviews={data.thousandReviews}
            reviews={data.reviewsData}
            faq={data.faq}
            blogs={data.blogs}
            blogsList={data.blogsList}
            createBtn={data.createBtn}
            mobileBtn={data.mobileBtn}
          />
        ) : ( null
          // <div className="space-y-6">
          //   <SkeletonLoader height="h-64" />
          //   <SkeletonLoader height="h-48" />
          //   <SkeletonLoader height="h-56" />
          // </div>
        )}
      </div>
    </>
  );
};

export default LazyContentLoader;