// components/common/LazyYouTubeEmbed.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface LazyYouTubeEmbedProps {
  videoUrl: string;
  thumbnailUrl?: string;
  onStateChange?: (isPlaying: boolean) => void;
  className?: string;
}

const LazyYouTubeEmbed: React.FC<LazyYouTubeEmbedProps> = ({
  videoUrl,
  thumbnailUrl,
  onStateChange,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;

      try {
        const data = JSON.parse(event.data);
        if (
          data.event === "infoDelivery" &&
          data.info &&
          data.info.playerState !== undefined
        ) {
          const isPlaying = data.info.playerState === 1;
          onStateChange?.(isPlaying);
        }
      } catch (e) {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);

    const interval = setInterval(() => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"listening","id":"1","channel":"widget"}',
          "*"
        );
      }
    }, 100);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(interval);
    };
  }, [isLoaded, onStateChange]);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const defaultThumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <div className={`relative h-full w-full ${className}`}>
      {!isLoaded ? (
        // Thumbnail with play button
        <div
          className="group absolute inset-0 cursor-pointer overflow-hidden"
          onClick={() => setIsLoaded(true)}
        >
          {/* Thumbnail Image */}
          {(thumbnailUrl || defaultThumbnail) && (
            <img
              src={thumbnailUrl || defaultThumbnail || ''}
              alt="Video thumbnail"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700 sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8 translate-x-0.5 text-white sm:h-10 sm:w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Optional: Loading indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/80">
            Click to load video
          </div>
        </div>
      ) : (
        // YouTube iframe
        <iframe
          ref={iframeRef}
          className="absolute inset-0 h-full w-full"
          src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}rel=0&modestbranding=1&showinfo=0&autoplay=1&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;