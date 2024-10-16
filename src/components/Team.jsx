import React from "react";

const Team = () => {
  return (
    <div className="relative h-screen overflow-hidden  flex justify-center items-center">
      {/* Main Image in the Foreground */}
      <div className="relative z-10">
        <img
          src="assets/images/mask1.jpg"
          alt="Main Mask"
          className="h-auto w-full max-w-screen-md object-contain"
        />
      </div>

      {/* Infinite Horizontal Slideshow in the Background */}
      <div className="absolute inset-0 z-0 flex items-center overflow-hidden">
        <div className="flex w-[200%] animate-infinite-slide">
          {/* First set of images */}
          <img
            src="assets/images/p1.jpg"
            alt="Slide 1"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p2.jpg"
            alt="Slide 2"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p3.jpg"
            alt="Slide 3"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p4.jpg"
            alt="Slide 4"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p5.jpg"
            alt="Slide 5"
            className="w-1/5 h-96 p-2"
          />

          {/* Second set of images for seamless looping */}
          <img
            src="assets/images/p1.jpg"
            alt="Slide 1"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p2.jpg"
            alt="Slide 2"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p3.jpg"
            alt="Slide 3"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p4.jpg"
            alt="Slide 4"
            className="w-1/5 h-96 p-2"
          />
          <img
            src="assets/images/p5.jpg"
            alt="Slide 5"
            className="w-1/5 h-96 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
