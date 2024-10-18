import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const sponsorsData = [
  { id: 1, img: "/assets/images/sponsors/sp1.png" },
  { id: 2, img: "/assets/images/sponsors/sp2.jpeg" },
  { id: 3, img: "/assets/images/sponsors/sp3.jpeg" },
  { id: 4, img: "/assets/images/sponsors/sp4.jpeg" },
  { id: 5, img: "/assets/images/sponsors/sp5.jpeg" },
  { id: 6, img: "/assets/images/sponsors/sp6.jpeg" },
  { id: 7, img: "/assets/images/sponsors/sp7.jpeg" },
  { id: 8, img: "/assets/images/sponsors/sp8.jpeg" },
  { id: 9, img: "/assets/images/sponsors/sp9.jpeg" },
  { id: 10, img: "/assets/images/sponsors/sp10.jpeg" },
  { id: 11, img: "/assets/images/sponsors/sp11.jpeg" },
  { id: 12, img: "/assets/images/sponsors/sp12.jpeg" },
  { id: 13, img: "/assets/images/sponsors/sp13.jpeg" },
  { id: 14, img: "/assets/images/sponsors/sp14.jpeg" },
  { id: 15, img: "/assets/images/sponsors/sp15.jpeg" },
];

const Sponsors = () => {
  return (
    <div className="mx-auto px-4 lg:px-12 py-8 lg:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
        Our Sponsors
      </h2>
      <div className="flex justify-center w-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <InfiniteMovingCards
            items={sponsorsData}
            direction="right"
            speed="normal"
            cardClassName="text-lg lg:text-2xl h-32 lg:h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
