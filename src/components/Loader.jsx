import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container"> {/* Use loader-container class */}
      <video
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="assets/images/loader2/loader2-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
