import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Gomesh Agarwal",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/gomesh.jpg",
  },
  {
    name: "Sneha Sen",
    year: "2nd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/icon.png",
  },
  {
    name: "Jaydeep Dash",
    year: "2nd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/icon.png",
  },
  {
    name: "Bhimesh",
    year: "2nd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/icon.png",
  },
];

const Graphics = () => {
  return (
    <div className="bg-black">
      <h1
        className="text-center p-5 text-white text-7xl font-bold font-redressed lg:text-8xl"
        id="team-text"
      >
        Grap<span className="text-red-500">hics</span>
      </h1>{" "}
      <div className="grid-container">
        {members.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="flip-card-back">
                <img src={member.img2} />
                <h2>{member.name}</h2>
                <h3>{member.year}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
