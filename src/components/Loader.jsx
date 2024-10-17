import React, { useState, useEffect } from "react";
import "./Loader.css";

export const Loader = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Check if width is less than or equal to 767px (mobile breakpoint)
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize); // Add event listener to handle window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener on unmount
  }, []);

  return (
    <div className="loader-container">
      <video
        className="loader-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={isMobile ? "assets/images/loader2/loader.mp4" : "assets/images/loader2/loader2.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
