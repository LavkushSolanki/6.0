import React from 'react';
import './Home.css'; // Make sure to update your CSS
import ParticlesComponent from "./Particles"; // Import the Particles component

const Home = () => {
  return (
    <div className="home-container">
      {/* First div container */}
      <div className="first-container">
             <ParticlesComponent id="particles" />
      </div>

      {/* Second div container */}
      <div className="second-container">
        <div className="text-content">
            <p>this section will be mask with gun moving with scroll </p>
        </div>
      </div>

      {/* Third div container */}
      <div className="third-container">
        <p>This is the third section will be having an bubble particles</p>
      </div>
    </div>
  );
};

export default Home;
