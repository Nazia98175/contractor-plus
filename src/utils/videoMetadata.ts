import { EmbedSettings, VideoData } from "@/data/videoUrlData";

export interface VideoMetadata {
  title: string;
  description: string;
  duration: string;
  uploadDate: string;
  thumbnailUrl: string;
  contentUrl: string;
  embedUrl: string;
  transcript: string;
  publisher: {
    name: string;
    logo: string;
  };
  viewCount: number;
}

export class VideoMetadataHandler {
  /**
   * Extract metadata from VideoData
   */
  static extractMetadata(videoData: VideoData): VideoMetadata | null {
    if (!videoData?.embedSettings) return null;

    const settings = videoData.embedSettings;
    return {
      title: settings.name,
      description: settings.description,
      duration: this.formatDuration(settings.duration),
      uploadDate: settings.uploadDate,
      thumbnailUrl: settings.thumbnailUrl,
      contentUrl: settings.contentUrl,
      embedUrl: settings.embedUrl,
      transcript: settings.transcript,
      publisher: {
        name: settings.publisher.name,
        logo: settings.publisher.logo.url,
      },
      viewCount: settings.interactionStatistic.userInteractionCount,
    };
  }

  /**
   * Format ISO 8601 duration to readable format
   */
  static formatDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return duration;

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  }

  /**
   * Create iframe embed for S3 video with metadata
   */
  static createS3IframeEmbed(
    videoData: VideoData,
    options: {
      width?: string;
      height?: string;
      autoplay?: boolean;
      muted?: boolean;
      controls?: boolean;
    } = {},
  ): string {
    const {
      width = "100%",
      height = "100%",
      autoplay = false,
      muted = false,
      controls = true,
    } = options;

    const metadata = this.extractMetadata(videoData);
    if (!metadata) return "";

    // Create a custom HTML page that embeds the video with metadata
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${metadata.title}</title>
        <style>
          body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
          .video-container { position: relative; width: 100%; height: 100vh; }
          video { width: 100%; height: 100%; object-fit: cover; }
          .metadata-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: white;
            padding: 20px;
            box-sizing: border-box;
          }
          .metadata-title { font-size: 18px; font-weight: bold; margin-bottom: 8px; }
          .metadata-description { font-size: 14px; margin-bottom: 12px; opacity: 0.9; }
          .metadata-details { font-size: 12px; opacity: 0.7; }
          .metadata-details span { margin-right: 15px; }
        </style>
        <script type="application/ld+json">
          ${JSON.stringify(videoData.embedSettings)}
        </script>
      </head>
      <body>
        <div class="video-container">
          <video 
            controls
            ${autoplay ? "autoplay" : ""}
            ${muted ? "muted" : ""}
            ${controls ? "controls" : ""}
            poster="${metadata.thumbnailUrl}"
            preload="metadata"
          >
            <source src="${videoData.videoURL}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="metadata-overlay">
            <div class="metadata-title">${metadata.title}</div>
            <div class="metadata-description">${metadata.description}</div>
            <div class="metadata-details">
              <span>Duration: ${metadata.duration}</span>
              <span>Uploaded: ${new Date(
                metadata.uploadDate,
              ).toLocaleDateString()}</span>
              <span>Publisher: ${metadata.publisher.name}</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create a blob URL for the HTML content
    const blob = new Blob([htmlContent], { type: "text/html" });
    return URL.createObjectURL(blob);
  }

  /**
   * Create enhanced video player with metadata
   */
  static createEnhancedVideoPlayer(
    videoData: VideoData,
    containerId: string,
  ): void {
    const metadata = this.extractMetadata(videoData);
    if (!metadata) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    // Add JSON-LD schema
    this.addVideoSchema(videoData.embedSettings);

    // Create video element with enhanced attributes
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.poster = metadata.thumbnailUrl;
    video.title = metadata.title;
    video.setAttribute("aria-label", metadata.description);

    // Add source
    const source = document.createElement("source");
    source.src = videoData.videoURL;
    source.type = "video/mp4";
    video.appendChild(source);

    // Create metadata overlay
    const overlay = document.createElement("div");
    overlay.className = "video-metadata-overlay";
    overlay.innerHTML = `
      <div class="metadata-content">
        <h3>${metadata.title}</h3>
        <p>${metadata.description}</p>
        <div class="metadata-details">
          <span>Duration: ${metadata.duration}</span>
          <span>Uploaded: ${new Date(
            metadata.uploadDate,
          ).toLocaleDateString()}</span>
          <span>Publisher: ${metadata.publisher.name}</span>
        </div>
      </div>
    `;

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      .video-metadata-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .video-container:hover .video-metadata-overlay {
        opacity: 1;
      }
      .metadata-content h3 {
        margin: 0 0 8px 0;
        font-size: 16px;
        font-weight: bold;
      }
      .metadata-content p {
        margin: 0 0 12px 0;
        font-size: 14px;
        opacity: 0.9;
      }
      .metadata-details {
        font-size: 12px;
        opacity: 0.7;
      }
      .metadata-details span {
        margin-right: 15px;
      }
    `;

    // Create wrapper container
    const wrapper = document.createElement("div");
    wrapper.className = "video-container";
    wrapper.style.position = "relative";
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";

    wrapper.appendChild(video);
    wrapper.appendChild(overlay);

    // Clear container and add elements
    container.innerHTML = "";
    container.appendChild(style);
    container.appendChild(wrapper);
  }

  /**
   * Add JSON-LD schema to document head
   */
  static addVideoSchema(embedSettings: EmbedSettings): void {
    // Remove existing schema if any
    const existingSchema = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(embedSettings);
    document.head.appendChild(script);
  }

  /**
   * Track video analytics events
   */
  static trackVideoEvent(
    event: string,
    videoData: VideoData,
    additionalData?: Record<string, unknown>,
  ): void {
    const eventData = {
      event,
      videoSlug: videoData.slug,
      videoTitle: videoData.embedSettings?.name,
      videoUrl: videoData.videoURL,
      timestamp: new Date().toISOString(),
      ...additionalData,
    };

    // Send to analytics service
    console.log("Video Event:", eventData);

    // You can integrate with your analytics service here
    // Example: analytics.track('video_event', eventData);

    // Or send to your backend
    // fetch('/api/video-analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(eventData)
    // });
  }

  /**
   * Get video thumbnail with different sizes
   */
  static getVideoThumbnail(
    videoData: VideoData,
    size: "small" | "medium" | "large" = "medium",
  ): string {
    const thumbnailUrl = videoData.embedSettings?.thumbnailUrl;
    if (!thumbnailUrl) return "";

    // If you have different thumbnail sizes, you can modify the URL here
    // Example: return thumbnailUrl.replace('.jpg', `-${size}.jpg`);
    return thumbnailUrl;
  }

  /**
   * Validate video data
   */
  static validateVideoData(videoData: VideoData): boolean {
    return !!(
      videoData?.slug &&
      videoData?.videoURL &&
      videoData?.embedSettings?.name &&
      videoData?.embedSettings?.contentUrl
    );
  }
}

// Utility functions for common video operations
export const VideoUtils = {
  /**
   * Check if URL is a video file
   */
  isVideoUrl: (url: string): boolean => {
    const videoExtensions = /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv)$/i;
    return videoExtensions.test(url);
  },

  /**
   * Get video file extension
   */
  getVideoExtension: (url: string): string => {
    const match = url.match(/\.([^.]+)$/);
    return match ? match[1].toLowerCase() : "";
  },

  /**
   * Format file size
   */
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  },

  /**
   * Create video download link
   */
  createDownloadLink: (videoData: VideoData): string => {
    const link = document.createElement("a");
    link.href = videoData.videoURL;
    link.download = `${videoData.slug}.mp4`;
    link.textContent = "Download Video";
    return link.outerHTML;
  },
};
