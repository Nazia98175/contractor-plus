"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CommunicateRedIcon,
  KeepUpIcon,
  RedClockIcon,
  SmartPhoneIcon,
  UpArrowRedIcon,
} from "../common/Icons";
import Copy from "../common/Copy";

gsap.registerPlugin(ScrollTrigger);

const WhyNow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;
    
    // Get viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Calculate optimal scales based on viewport (especially for 1440px)
    // Start scale should fit text nicely
    const startScale = vw <= 1440 ? 1.2 : 1.5;
    
    // Calculate max scale to ensure circle stays visible throughout
    // For 1440px screens, we need smaller max scale
    let maxScale;
    if (vw <= 1440) {
      maxScale = 2.2; // Smaller for 1440px
    } else if (vw <= 1920) {
      maxScale = 2.5; // Medium for 1920px
    } else {
      maxScale = 2.8; // Larger for bigger screens
    }

    // Set initial scale of background image
    gsap.set(bgImageRef.current, { 
      scale: startScale,
      opacity: 1 
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.5, // Smoother scrubbing
        pin: false,
        invalidateOnRefresh: true,
      },
    });

    // Initial setup - first section visible
    gsap.set(sections[0], { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)"
    });
    
    // Hide all other sections with proper positioning
    sections.slice(1).forEach((section, i) => {
      gsap.set(section, { 
        opacity: 0, 
        y: 100,
        scale: 0.9,
        filter: "blur(15px)"
      });
    });
    
    // Background circle animation - gradual scale and rotation
    tl.fromTo(
      bgImageRef.current,
      {
        scale: startScale,
        rotation: 0,
        opacity: 1
      },
      {
        scale: maxScale,
        rotation: 720,
        opacity: 0.3, // Fade out gradually at the end
        duration: sections.length * 1.2,
        ease: "none",
      },
      0
    );
    
    // Text section animations with improved timing
    const sectionDuration = 1.2;
    
    sections.forEach((section, index) => {
      const startTime = index * sectionDuration;
      
      if (index === 0) {
        // First section - "Why now?" 
        tl.to(section, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          filter: "blur(10px)",
          duration: sectionDuration * 0.7,
          ease: "power1.in"
        }, startTime + sectionDuration * 0.3);
        
      } else {
        // Show preview of upcoming section
        if (index > 0) {
          tl.fromTo(section,
            {
              opacity: 0,
              y: 100,
              scale: 0.85,
              filter: "blur(20px)"
            },
            {
              opacity: 0.3,
              y: 60,
              scale: 0.9,
              filter: "blur(12px)",
              duration: sectionDuration * 0.3,
              ease: "power1.out"
            },
            startTime - sectionDuration * 0.8
          );
        }
        
        // Full entrance animation
        tl.to(section,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: sectionDuration * 0.5,
            ease: "power2.out"
          },
          startTime - 0.2
        );
        
        // Exit animation (except for last section)
        if (index < sections.length - 1) {
          // First fade to preview state
          tl.to(section, {
            opacity: 0.4,
            y: -60,
            scale: 0.95,
            filter: "blur(10px)",
            duration: sectionDuration * 0.5,
            ease: "power1.in"
          }, startTime + sectionDuration * 0.5);
          
          // Then fully hide
          tl.to(section, {
            opacity: 0,
            y: -100,
            filter: "blur(15px)",
            duration: sectionDuration * 0.3,
          }, startTime + sectionDuration);
        }
      }
      
      // Special handling for last section - fade out circle completely
      if (index === sections.length - 1) {
        tl.to(bgImageRef.current, {
          opacity: 0,
          scale: maxScale * 1.2,
          duration: sectionDuration,
          ease: "power1.in"
        }, startTime + sectionDuration * 0.5);
      }
    });

    // Store timeline reference
    timelineRef.current = tl;

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sectionData = [
    {
      icon: null,
      title: "Why now?",
      description: "Field service is in the middle of a generational software shift.",
      isTitle: true
    },
    {
      icon: <UpArrowRedIcon />,
      description: "Labor and material costs are rising, businesses need to run as efficiently and effectively as possible"
    },
    {
      icon: <RedClockIcon />,
      description: "Customers demand speed in work and communication from contractors"
    },
    {
      icon: <CommunicateRedIcon />,
      description: "AI is changing how contractors communicate, quote, schedule, and manage jobs"
    },
    {
      icon: <SmartPhoneIcon />,
      description: "Smartphone-first crews are demanding tools that actually work in the field"
    },
    {
      icon: <KeepUpIcon />,
      description: "The industry's dominant players have gotten too big, slow, and expensive to keep up."
    }
  ];

  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <div ref={containerRef} className="relative h-[700vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background circle image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              ref={bgImageRef}
              className="h-full w-full object-contain lg:block"
              src="/images/webp/vector.webp"
              alt="now bg"
              style={{ 
                transformOrigin: "center center",
                maxWidth: "min(90vw, 90vh)",
                maxHeight: "90vh"
              }}
            />
          </div>
          
          {/* Content sections */}
          <div className="relative flex h-full w-full items-center justify-center">
            {sectionData.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionsRef.current[index] = el;
                }}
                className={`absolute flex flex-col items-center justify-center ${
                  index === 0 ? 'max-w-[500px]' : 'max-w-[550px]'
                } w-full px-6`}
                style={{ 
                  willChange: "transform, opacity, filter",
                  zIndex: 10 - index // Ensure proper layering
                }}
              >
                {section.isTitle ? (
                  <>
                    <Copy animateOnScroll={true}>
                      <h3 className="text-white text-center text-2xl font-semibold sm:text-4xl lg:text-5xl xl:text-[52px]">
                        {section.title}
                      </h3>
                    </Copy>
                    <Copy animateOnScroll={true}>
                      <p className="text-gray-300 pt-3 text-center text-sm font-medium sm:text-lg md:text-xl lg:text-2xl">
                        {section.description}
                      </p>
                    </Copy>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      {section.icon}
                    </div>
                    <Copy animateOnScroll={true}>
                      <p className="text-gray-300 text-center text-sm font-medium sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                        {section.description}
                      </p>
                    </Copy>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;