"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const EventsDirectoryHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-events", {
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
    }, 700);
  }, []);
  return (
    <div id="home-page-view-port-screen-events" className="relative opacity-0">
      EventsDirectoryHero
    </div>
  );
};

export default EventsDirectoryHero;
