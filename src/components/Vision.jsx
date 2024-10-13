import React from "react";
import "./Member.css";
export const Vision = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="polygon-border-vision relative text-center p-5 md:w-1/2 w-3/4">
          <h1 className="text-white text-3xl">Our Vision</h1>
        </div>
      </div>
      <br />
      <div className="flex flex-col md:flex-row bg-cover bg-center">
        <div className="md:w-1/2 w-full flex items-center justify-center p-4">
          <img
            style={{
              boxShadow: "-9px 9px 0px rgba(0, 0, 0, 0.9)",
            }}
            className="rounded-3xl w-[300px] h-[200px] lg:w-[560px] lg:h-[315px] transform-image"
            width="560"
            height="315"
            src="assets/images/vision2.png"
            alt="Vision"
          />
        </div>
        <div className="md:w-1/2 sm:text-sm md:text-lg lg:text-lg text-sm font-light w-full flex items-center justify-center text-[#DEC7A0] p-8 md:p-12">
          <p className="leading-relaxed max-w-xl">
            E-fest 6.0 aims to spark an entrepreneurial spirit among diverse
            participants by fostering a collaborative environment for idea
            exchange, experience sharing, and mentorship, which are key elements
            for success. Through networking sessions, various competitions, and
            mentorship programs, young entrepreneurs gain vital skills and
            connections to scale their ventures while emphasizing sustainable
            practices and ethical decision-making. By embracing diversity and
            promoting collaboration, E-fest empowers students to unleash their
            potential and drive positive change in their communities, expanding
            our reach through alliances with various stakeholders to create
            opportunities for all to engage in and contribute to our vibrant
            community
          </p>
        </div>
      </div>
    </div>
  );
};
