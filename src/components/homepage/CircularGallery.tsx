// CircularGallery.tsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";

// Make sure to register the Draggable plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items?: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  textPosition?: "top" | "bottom";
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  items = [],
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 16px DM Sans",
  textPosition = "top",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Default items if none provided
  const galleryItems =
    items.length > 0
      ? items
      : [
          { image: "https://picsum.photos/seed/1/800/600", text: "Bridge" },
          { image: "https://picsum.photos/seed/2/800/600", text: "Desk Setup" },
          { image: "https://picsum.photos/seed/3/800/600", text: "Waterfall" },
          {
            image: "https://picsum.photos/seed/4/800/600",
            text: "Strawberries",
          },
          {
            image: "https://picsum.photos/seed/5/800/600",
            text: "Deep Diving",
          },
          {
            image: "https://picsum.photos/seed/16/800/600",
            text: "Train Track",
          },
        ];

  // Double the items to create an infinite loop effect
  const duplicatedItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const container = containerRef.current;
    const track = trackRef.current;
    const items = track.children;
    const itemWidth = container.clientWidth * 0.6; // 60% of container width
    const totalItems = items.length;

    // Position items in a circle
    const radius = container.clientWidth / 2;
    const angleStep = (2 * Math.PI) / totalItems;

    // Set the track width
    const trackWidth = itemWidth * totalItems;
    gsap.set(track, { width: trackWidth });

    // Initialize positions
    gsap.set(items, {
      position: "absolute",
      width: itemWidth,
      height: "auto",
      borderRadius: `${borderRadius * 100}%`,
      overflow: "hidden",
    });

    // Position items in a circular path
    for (let i = 0; i < totalItems; i++) {
      const item = items[i] as HTMLElement;
      const angle = i * angleStep;

      // Calculate x position on the circle
      const x = radius * Math.cos(angle);

      // Calculate y position with bend factor
      let y = 0;
      if (bend !== 0) {
        // Apply bend effect
        const bendFactor = bend * 0.1;
        y = radius * Math.sin(angle) * bendFactor;
      }

      // Get scale factor based on y position (items closer to viewer are larger)
      const scale = gsap.utils.mapRange(-radius * 0.1, radius * 0.1, 0.8, 1, y);

      // Set initial position and scale
      gsap.set(item, {
        x: x,
        y: y,
        scale: scale,
        zIndex: Math.round(scale * 100),
      });
    }

    // Make the track draggable
    let rotation = 0;
    const draggable = Draggable.create(track, {
      type: "x",
      bounds: { minX: -trackWidth / 2, maxX: trackWidth / 2 },
      edgeResistance: 0.8,
      onDrag: function () {
        updateItemPositions(this.x);
      },
      onThrowUpdate: function () {
        updateItemPositions(this.x);
      },
      inertia: true,
    })[0];

    // Function to update item positions based on track position
    function updateItemPositions(trackX: number) {
      rotation = (trackX / trackWidth) * (2 * Math.PI);

      // Calculate which item is closest to the center
      const centerX = 0;
      let minDistance = Infinity;
      let closestIndex = 0;

      for (let i = 0; i < totalItems; i++) {
        const item = items[i] as HTMLElement;
        const angle = i * angleStep + rotation;

        // Calculate new position on circle
        const x = radius * Math.cos(angle);

        // Calculate y position with bend factor
        let y = 0;
        if (bend !== 0) {
          const bendFactor = bend * 0.1;
          y = radius * Math.sin(angle) * bendFactor;
        }

        // Calculate scale based on y position
        const scale = gsap.utils.mapRange(
          -radius * 0.1,
          radius * 0.1,
          0.8,
          1,
          y
        );

        // Update position and scale
        gsap.set(item, {
          x: x,
          y: y,
          scale: scale,
          zIndex: Math.round(scale * 100),
        });

        // Check if this is the closest item to center
        const distance = Math.abs(x - centerX);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      // Update active index (mod by original items length to get actual index)
      setActiveIndex(closestIndex % galleryItems.length);
    }

    // Cleanup
    return () => {
      draggable.kill();
    };
  }, [galleryItems, bend, borderRadius]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden z-50"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={trackRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="gallery-item cursor-pointer">
            {textPosition === "top" && (
              <div
                className="text-center py-2 absolute w-full"
                style={{
                  color: textColor,
                  font: font,
                  top: "-30px",
                  left: 0,
                  right: 0,
                }}
              >
                {item.text}
              </div>
            )}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover"
            />
            {textPosition === "bottom" && (
              <div
                className="text-center py-2 absolute w-full"
                style={{
                  color: textColor,
                  font: font,
                  bottom: "-30px",
                  left: 0,
                  right: 0,
                }}
              >
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularGallery;
