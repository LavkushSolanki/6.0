import React from "react";
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div
      id="team"
      className="w-full h-full flex items-center justify-center bg-cover bg-black bg-center"
    >
      <div className="relative flex items-center justify-center">
        <img
          src="assets\images\mask.jpg"
          alt="Mask"
          className="max-w-[300px] h-[550px] mt-[100px] ml-[-30px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] max-h-[40%] object-contain"
        />
        <h1
          className="absolute top-[20px] left-5 text-white text-7xl font-bold lg:text-8xl"
          id="team-text"
        >
          El&nbsp;<span className="text-red-500">Equipo</span>
        </h1>
        <div className="text-white opacity-60 text-2xl mt-[85px] md:ml-1 md:w-1/2 space-y-2 font-bold">
          <Link to="/Leads">
            <h2 className="text-white">
              L<span className="text-red-500">eads</span>
            </h2>
          </Link>
          <Link to="/Content">
            <h2>
              Co<span className="text-red-500">ntent</span>
            </h2>
          </Link>
          <Link to="/Creative">
            <h2>
              Cre<span className="text-red-500">ative</span>
            </h2>
          </Link>
          <Link to="/Logistics">
            <h2>
              Logi<span className="text-red-500">stics</span>
            </h2>
          </Link>
          <Link to="/Marketing">
            <h2>
              Marke<span className="text-red-500">ting</span>
            </h2>
          </Link>
          <Link to="/SocialMedia">
            <h2>
              Social<span className="text-red-500"> Media</span>
            </h2>
          </Link>
          <Link to="/Sponsorship">
            <h2>
              Spons<span className="text-red-500">orship</span>
            </h2>
          </Link>
          <Link to="/Production">
            <h2>
              Prod<span className="text-red-500">uction</span>
            </h2>
          </Link>
          <Link to="/Graphics">
            <h2>
              Gra<span className="text-red-500">phics</span>
            </h2>
          </Link>
          <Link to="/Finance">
            <h2>
              Fi<span className="text-red-500">nance</span>
            </h2>
          </Link>
          <Link to="/Web">
            <h2 className="text-white">
              W<span className="text-red-500">eb</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Members;
