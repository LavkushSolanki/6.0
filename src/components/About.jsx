import React from "react";
import "./Member.css";
export const About = () => {
  return (
    <div id="about">
      <div className="polygon-border-about relative text-center p-5 md:w-1/2 w-3/4">
        <h1 className="text-white text-3xl">About</h1>
      </div>
      <br />
      <div className="flex flex-col md:flex-row bg-cover bg-center">
        <div className="md:w-1/2 w-full flex items-center justify-center p-4">
          <iframe
            style={{
              boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.9)",
            }}
            width="560"
            height="315"
            className="rounded-3xl w-[300px] h-[200px] lg:w-[560px] lg:h-[315px] md:w-[500px] md:h-[275px]"
            src="https://www.youtube.com/embed/_InqQJRqGW4?si=LCtZYF7E6yAPXUrs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="md:w-1/2 sm:text-sm md:text-lg lg:text-lg text-sm font-light w-full flex items-center justify-center text-[#DEC7A0] p-8 md:p-12">
          <p className="leading-relaxed max-w-xl">
            Welcome to the Spark Up Summit, where innovation and
            entrepreneurship converge to ignite extraordinary possibilities!
            This summit isn't just an event—it's a vibrant platform for
            visionaries, creators, and changemakers to unite and spark the next
            wave of ideas that will shape the future. At Spark Up, bold
            startups, cutting-edge technology, and fresh perspectives take
            center stage. Here, innovators showcase their brilliance, engage in
            inspiring discussions, and connect with industry leaders and
            investors eager to back the next big thing. Whether you're pitching
            your idea, networking, or learning from the best, Spark Up will fuel
            your entrepreneurial spirit and propel your ideas into the future.
          </p>
        </div>
      </div>
    </div>
  );
};
