import React from 'react';
import './Home.css'; // Make sure to update your CSS
import ParticlesComponent from "./Particles"; // Import the Particles component

const Home = () => {
  return (
    <div className="home-container">
      {/* First div container */}
      <div className="first-container">
        <h1>First Section</h1>
        <p>This is the first section of the page.</p>

        {/* New div inside first container with an image */}
             <ParticlesComponent id="particles" />
      </div>

      {/* Second div container with Particles */}
      <div className="second-container">
        {/* Apply ParticlesComponent only here */}
        {/* <ParticlesComponent id="particles" /> */}
        <div className="text-content">
          <h1>Second Section with Particles</h1>
          <p>This section has particles in the background.</p>
        </div>
      </div>

      {/* Third div container */}
      <div className="third-container">
        <h1>Third Section</h1>
        <p>This is the third section of the page.</p>
      </div>
    </div>
  );
};

export default Home;
