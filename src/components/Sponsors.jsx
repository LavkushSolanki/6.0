import React from "react";
import "./Sponsors.css";

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
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-6 w-full items-center">
          {sponsorsData.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg"
              style={{ minWidth: "150px" }} // Adjust width as per need
            >
              <img
                src={sponsor.img}
                alt={`Sponsor ${sponsor.id}`}
                className="h-32 object-contain"
              />
            </div>
          ))}
          {/* Duplicate the elements to create the infinite effect */}
          {sponsorsData.map((sponsor) => (
            <div
              key={`duplicate-${sponsor.id}`}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg"
              style={{ minWidth: "150px" }}
            >
              <img
                src={sponsor.img}
                alt={`Sponsor ${sponsor.id}`}
                className="h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
