import React from 'react';
import './Home.css'; // Make sure to update your CSS
import ParticlesComponent from "./Particles"; // Import the Particles component
import Home_Center from "./Home_center"

const Home = () => {
  return (
    <div className="home-container ">
      <div className={(window.innerWidth < 400)?"flex-none":"first-container" }>
        <ParticlesComponent id="particles" />
      </div>
      <div className='h-screen md:w-1/3 w-screen pt-6 '>
        <Home_Center/>
      </div>
      <div className={(window.innerWidth < 400)?"flex-none":"first-container"}>
        <ParticlesComponent id="particles1" />
      </div>
    </div>
  );
};

export default Home;