import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Piyush",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/piyush.jpg",
  },
  {
    name: "Rahul",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Ayushman",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Satyam",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Satyam",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Satyam",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Satyam",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  {
    name: "Satyam",
    year: "3rd year",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  // Add more members here if needed
];

const Leads = () => {
  return (
    <div>
      {/* <h1 className="text-white text-center">WEB TEAM</h1> */}
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

export default Leads;
