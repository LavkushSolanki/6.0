import React, { useState, useEffect } from 'react';
import gunImage from "/assets/images/home_center/gun2.png";
import gun1Image from "/assets/images/home_center/gun1.png";
import maskImage from "/assets/images/home_center/mask2.jpg";

const Card = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setRotation(scrollTop / 5); // Adjust the divisor to control rotation speed
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black max-h-screen  w-full flex flex-col justify-start items-center text-white p-2">
      <img
        src={maskImage}
        alt="Mask"
        className="w-64 h-auto mt-[150px] md:mt-27 sm:w-80 sm:h-96 md:w-96 md:h-[500px] lg:h-[450px]  xl:h-[300px] object-contain mb-16"
      />

      {/* Container for Rotating Images and Text */}
      <div className="flex flex-row items-center justify-center space-x-[-36px] mb-4 md:mb-0 mt-[-50px]  lg:space-x-[-50px]">
        {/* First Image Rotates in Opposite Direction, Starting at 45 Degrees */}
        <img
        src={gun1Image}
        alt="Gun1"
        className="w-32 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[160px] object-contain"
        style={{ transform: `rotate(${40 - rotation}deg)` }} // Fixed syntax for rotation
      />

        {/* Second Image Rotates in the Same Direction, Starting at 45 Degrees */}
        <img
          src={gunImage}
          alt="Gun"
          className="w-32 h-auto ml-[-20px] md:w-80 lg:w-96 xl:w-[160px] object-contain" // Increased sizes
          style={{ transform: `rotate(${rotation - 40}deg)` }} // Rotating in the same direction from 45 degrees
        />
      </div>

      {/* Text below the images */}
      <div
        className="text-center font-anton text-4xl lg:text-5xl xl:text-7xl text-white my-4"
      >
        SPARK UP SUMMIT
      </div>
    </div>
  );
};

export default Card;