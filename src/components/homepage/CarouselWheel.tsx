"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { Flip } from "gsap/dist/Flip";

// GSAP plugins को रजिस्टर करें (client-side पर ही)
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, Flip);
}

interface CardProps {
  id: string;
  image: string;
  alt?: string;
}

interface WheelCarouselProps {
  cards: CardProps[];
  className?: string;
  cardsPerView?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const WheelCarousel: React.FC<WheelCarouselProps> = ({
  cards,
  className = "",
  cardsPerView = 5,
  autoRotate = true,
  rotationSpeed = 20,
}) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState<HTMLElement | null>(null);
  const autoAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Client-side पर ही चलाएं
    if (
      typeof window === "undefined" ||
      !wheelRef.current ||
      !headerRef.current
    )
      return;

    const wheel = wheelRef.current;
    const cardElements = gsap.utils.toArray<HTMLElement>(".wheel__card");

    // Setup function - cards को सर्कल में arrange करें
    const setup = () => {
      if (!wheel) return;

      const radius = wheel.offsetWidth / 2.2; // Slightly smaller radius for better visibility
      const center = radius;
      const slice = 360 / cardElements.length;
      const DEG2RAD = Math.PI / 180;

      // Calculate visible angle range (for 5 cards, it's about 120 degrees total or 60 degrees from center)
      const visibleAngleRange = 360 * (cardsPerView / cardElements.length);

      gsap.set(cardElements, {
        x: (i: number) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i: number) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i: number) => i * slice,
        xPercent: -50,
        yPercent: -50,
        scale: (i: number) => {
          // Calculate how far this card is from the center position (in degrees)
          const cardAngle = (i * slice) % 360;
          const distanceFromCenter = Math.min(
            Math.abs(cardAngle - 0),
            Math.abs(cardAngle - 360)
          );

          // Scale cards based on their distance from the center (front position)
          if (distanceFromCenter <= visibleAngleRange / 2) {
            // Cards within visible range maintain larger scale
            return gsap.utils.mapRange(
              0,
              visibleAngleRange / 2,
              1,
              0.8
            )(distanceFromCenter);
          } else {
            // Cards outside visible range are smaller
            return 0.7;
          }
        },
        opacity: (i: number) => {
          // Similar to scale, but for opacity
          const cardAngle = (i * slice) % 360;
          const distanceFromCenter = Math.min(
            Math.abs(cardAngle - 0),
            Math.abs(cardAngle - 360)
          );

          if (distanceFromCenter <= visibleAngleRange / 2) {
            return gsap.utils.mapRange(
              0,
              visibleAngleRange / 2,
              1,
              0.7
            )(distanceFromCenter);
          } else {
            return 0.5;
          }
        },
        zIndex: (i: number) => {
          const cardAngle = (i * slice) % 360;
          const distanceFromCenter = Math.min(
            Math.abs(cardAngle - 0),
            Math.abs(cardAngle - 360)
          );

          // Higher z-index for center cards (for better hover effects)
          return 100 - Math.floor(distanceFromCenter);
        },
      });
    };

    // Initial setup
    setup();

    // Resize handler
    window.addEventListener("resize", setup);

    // Draggable wheel with smoother inertia and finer snapping
    Draggable.create(wheel, {
      allowContextMenu: true,
      type: "rotation",
      trigger: wheel,
      inertia: true,
      snap: {
        rotation: gsap.utils.snap(360 / cardElements.length),
      },
      onDrag: function () {
        // Stop auto rotation during manual dragging
        if (autoAnimationRef.current) {
          autoAnimationRef.current.pause();
        }
      },
      onDragEnd: function () {
        // Update card positions after drag
        updateCardVisibility();

        // Resume auto rotation after a delay if enabled
        if (autoRotate) {
          setTimeout(() => {
            startAutoRotation();
          }, 2000);
        }
      },
    });

    // Function to update card visibility based on position
    const updateCardVisibility = () => {
      const rotation = gsap.getProperty(wheel, "rotation") as number;
      const normalizedRotation = ((rotation % 360) + 360) % 360; // Normalize to 0-360

      cardElements.forEach((card, i) => {
        const slice = 360 / cardElements.length;
        const cardAngle = (i * slice) % 360;

        // Calculate how visible this card should be based on wheel rotation
        const angleFromFront = Math.abs(
          ((((cardAngle - normalizedRotation) % 360) + 540) % 360) - 180
        );
        const visibleAngleRange = 360 * (cardsPerView / cardElements.length);

        if (angleFromFront < visibleAngleRange / 2) {
          // Cards in visible range
          const scale = gsap.utils.mapRange(
            0,
            visibleAngleRange / 2,
            1,
            0.8
          )(angleFromFront);
          const opacity = gsap.utils.mapRange(
            0,
            visibleAngleRange / 2,
            1,
            0.7
          )(angleFromFront);
          gsap.to(card, { scale, opacity, duration: 0.3 });
        } else {
          // Cards outside visible range
          gsap.to(card, { scale: 0.7, opacity: 0.5, duration: 0.3 });
        }
      });
    };

    // Auto rotation function
    const startAutoRotation = () => {
      if (autoAnimationRef.current) {
        autoAnimationRef.current.kill();
      }

      if (autoRotate) {
        autoAnimationRef.current = gsap.to(wheel, {
          rotation: "-=360",
          duration: rotationSpeed,
          ease: "none",
          repeat: -1,
          onUpdate: updateCardVisibility,
        });
      }
    };

    // Start auto rotation if enabled
    if (autoRotate) {
      startAutoRotation();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setup);
      gsap.killTweensOf(wheel);
      if (autoAnimationRef.current) {
        autoAnimationRef.current.kill();
      }
      const draggable = Draggable.get(wheel);
      if (draggable) draggable.kill();
    };
  }, [cardsPerView, autoRotate, rotationSpeed]);

  // Current expanded card को बंद करने का function
  const closeCurrentCard = () => {
    if (currentCard && headerRef.current) {
      const img = headerRef.current.querySelector("img");
      if (img) {
        const state = Flip.getState(img);
        currentCard.appendChild(img);
        Flip.from(state, {
          ease: "power2.inOut",
          scale: true,
          duration: 0.8,
        });
        setCurrentCard(null);
      }
    }
  };

  // Card click handler with smoother animation
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const image = card.querySelector("img");

    if (!headerRef.current || !image) return;

    // Pause auto rotation when card is clicked
    if (autoAnimationRef.current) {
      autoAnimationRef.current.pause();
    }

    if (card !== currentCard) {
      // नया कार्ड चुना गया है
      closeCurrentCard();
      setCurrentCard(card);

      const state = Flip.getState(image);
      headerRef.current.appendChild(image);

      Flip.from(state, {
        duration: 0.8,
        scale: true,
        ease: "power2.inOut",
        onComplete: () => {
          // Add subtle pulse animation to the expanded image
          gsap.to(image, {
            scale: 1.02,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      });
    } else {
      // वही कार्ड फिर से क्लिक किया गया
      closeCurrentCard();

      // Resume auto rotation after card is closed
      if (autoRotate && autoAnimationRef.current) {
        setTimeout(() => {
          autoAnimationRef.current?.play();
        }, 1000);
      }
    }
  };

  return (
    <div className={`wheel-carousel-container ${className}`}>
      {/* Header जहां expanded image दिखेगी */}
      <div
        ref={headerRef}
        className="header"
        onClick={closeCurrentCard}
        aria-label="Expanded image container"
      ></div>

      {/* Wheel container */}
      <div ref={wheelRef} className="wheel" aria-label="Interactive card wheel">
        {cards.map((card) => (
          <div key={card.id} className="wheel__card" onClick={handleCardClick}>
            <img
              src={card.image}
              alt={card.alt || "Card image"}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WheelCarousel;
