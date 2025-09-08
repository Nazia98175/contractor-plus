import React, { useEffect, useRef } from "react";

import { Clock, Video } from "lucide-react";
import { getPermitCostText, formatLocationName } from "@/data/faq-data";
import { ProjectDetail } from "@/types/resources/projectDetail";
import { videoUrlData } from "@/data/videoUrlData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface TimelineSectionProps {
  projectSlug: string;
  location: string;
  projectName: string;
  projectValues?: ProjectDetail;
}

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper to check if it's a YouTube URL
const isYouTubeUrl = (url: string): boolean => {
  return /youtu\.be|youtube\.com/.test(url);
};

// Helper to check if it's an S3 bucket URL
const isS3BucketUrl = (url: string): boolean => {
  return url?.includes("contractor-plus-website.s3.") || url.includes(".s3.");
};

// Helper to get HLS URL from S3 MP4 URL
const getHlsUrl = (s3Url: string): string => {
  // Extract the video filename from S3 URL
  const match = s3Url?.match(/reshub-how-to-vids\/(.+)\.mp4$/);
  if (match && match[1]) {
    // Try HLS first, but we'll fallback to direct MP4 if CORS fails
    return `https://cdn.contractorplus.app/hls/${match[1]}/index.m3u8`;
  }
  return s3Url;
};

// S3 Video Component with HLS support and SEO schema
const S3VideoPlayer: React.FC<{
  videoUrl: string;
  embedSettings?: any;
  projectName: string;
}> = ({ videoUrl, embedSettings, projectName }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Inject VideoObject schema for SEO if embedSettings exist
    if (embedSettings) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(embedSettings);
      document.head.appendChild(script);

      // Cleanup function to remove the script when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [embedSettings]);

  useEffect(() => {
    // For now, skip HLS due to CORS issues and use direct MP4 playback
    if (videoRef.current && isS3BucketUrl(videoUrl)) {
      // Direct MP4 playback until CORS is fixed on CDN
      videoRef.current.src = videoUrl;

      // TODO: Re-enable HLS when CORS headers are configured on cdn.contractorplus.app
      /*
      const hlsUrl = getHlsUrl(videoUrl);
      
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
        
        // Handle HLS errors and fallback to direct MP4
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.log('HLS Network error, falling back to direct MP4');
                hls.destroy();
                if (videoRef.current) {
                  videoRef.current.src = videoUrl;
                }
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log('HLS Media error, attempting recovery');
                hls.recoverMediaError();
                break;
              default:
                console.log('HLS Fatal error, falling back to direct MP4');
                hls.destroy();
                if (videoRef.current) {
                  videoRef.current.src = videoUrl;
                }
                break;
            }
          }
        });
        
        // Cleanup HLS instance on unmount
        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari and other browsers that support HLS natively
        videoRef.current.src = hlsUrl;
        
        // Fallback to MP4 if HLS fails on Safari
        videoRef.current.onerror = () => {
          if (videoRef.current) {
            videoRef.current.src = videoUrl;
          }
        };
      } else {
        // Fallback to direct MP4 playback
        videoRef.current.src = videoUrl;
      }
      */
    }
  }, [videoUrl]);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md">
      <video
        ref={videoRef}
        poster={embedSettings?.thumbnailUrl}
        controls
        playsInline
        preload="none"
        width="100%"
        height="100%"
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          objectFit: "cover",
        }}
        className="h-full w-full"
      >
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  projectSlug,
  location,
  projectName,
  projectValues,
}) => {
  const steps = projectValues?.timeline?.steps || [];
  const locationName = formatLocationName(location);
  const permitCostText = getPermitCostText(location);

  const projectData = videoUrlData?.find(
    (project) => project?.slug === projectSlug,
  );

  const videoUrl = projectData?.videoURL;

  if (!videoUrl) {
    return null;
  }

  const isYouTube = isYouTubeUrl(videoUrl);
  const isS3Bucket = isS3BucketUrl(videoUrl);
  const videoId = isYouTube ? getYouTubeVideoId(videoUrl) : null;
  const embedSettings = projectData?.embedSettings;

  // if (steps.length === 0) {
  //   const defaultVideoId = getYouTubeVideoId(
  //     "https://www.youtube.com/watch?v=OLyK9IPw3OQ"
  //   );
  //   return (
  //     <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
  //       {/* Timeline Content */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle className="flex items-center gap-2">
  //             <Clock className="h-5 w-5" />
  //             Project Timeline & Process
  //           </CardTitle>
  //         </CardHeader>
  //         <CardContent>
  //           <p className="text-aliceBlue mb-4">
  //             A typical {projectName.toLowerCase()} project in {locationName}{" "}
  //             follows these phases:
  //           </p>
  //           <div className="space-y-4">
  //             <div>
  //               <h4 className="font-semibold text-foreground">
  //                 Planning & Preparation (1-2 days)
  //               </h4>
  //               <p className="text-sm text-aliceBlue">
  //                 Site assessment, material ordering, and permit acquisition in{" "}
  //                 {locationName}. This phase ensures all requirements are met
  //                 before work begins.
  //               </p>
  //             </div>
  //             <div>
  //               <h4 className="font-semibold text-foreground">
  //                 Installation Phase (1-3 days)
  //               </h4>
  //               <p className="text-sm text-aliceBlue">
  //                 Professional installation by qualified {locationName}{" "}
  //                 contractors, including any necessary preparation work and
  //                 final connections.
  //               </p>
  //             </div>
  //             <div>
  //               <h4 className="font-semibold text-foreground">
  //                 Completion & Cleanup (1 day)
  //               </h4>
  //               <p className="text-sm text-aliceBlue">
  //                 Final inspections, testing, cleanup, and walk-through to
  //                 ensure work meets {locationName} standards and your
  //                 expectations.
  //               </p>
  //             </div>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Video Embed */}
  //       {defaultVideoId && (
  //         <Card className="lg:h-fit">
  //           <CardHeader>
  //             <CardTitle className="flex items-center gap-2 text-lg">
  //               <Video className="h-5 w-5" />
  //               Video Tutorial: How To {projectName}
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent>
  //             <div className="aspect-video w-full">
  //               <iframe
  //                 width="100%"
  //                 height="100%"
  //                 src={`https://www.youtube.com/embed/${defaultVideoId}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&end=1`}
  //                 title="Project Installation Guide"
  //                 frameBorder="0"
  //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //                 allowFullScreen
  //                 className="rounded-md"
  //               />
  //             </div>
  //           </CardContent>
  //         </Card>
  //       )}
  //     </div>
  //   );
  // }

  // Replace dynamic content in timeline steps
  const processText = (text: string): string => {
    return text
      .replace(/\{location\}/g, locationName)
      .replace(/\{projectName\}/g, projectName.toLowerCase())
      .replace(/\{permitCost\}/g, permitCostText);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {/* Timeline Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Project Timeline & Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-aliceBlue mb-6">
            A typical project to {projectName.toLowerCase()} in {locationName}{" "}
            follows these key phases:
          </p>
          <div className="relative">
            <div className="bg-border absolute top-4 bottom-4 left-6 w-0.5"></div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div className="text-alice relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-semibold xl:h-12 xl:w-12">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1 pb-4">
                    <div className="mb-2 flex items-start gap-2">
                      <h4 className="text-foreground font-semibold">
                        {step.title}
                      </h4>
                      <Badge variant="outline" className="text-xs text-nowrap">
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-aliceBlue text-sm leading-relaxed">
                      {processText(step.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Embed */}
      {videoUrl && (
        <Card className="lg:h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Video className="h-5 w-5" />
              Video Tutorial: How To {projectName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isYouTube && videoId ? (
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&end=1`}
                  title="Project Installation Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-md"
                />
              </div>
            ) : isS3Bucket ? (
              <S3VideoPlayer
                videoUrl={videoUrl}
                embedSettings={embedSettings}
                projectName={projectName}
              />
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <video
                  controls
                  className="h-full w-full rounded-md object-cover"
                  poster={embedSettings?.thumbnailUrl}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TimelineSection;
