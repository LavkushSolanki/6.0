import React from "react";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <video
        className="w-full h-full object-fill"
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