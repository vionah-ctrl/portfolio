import React from "react";
import bg from "../assets/bg.jpeg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 pt-40 flex items-center text-white">
        
        {/* Text + Buttons + Stats */}
        <div className="animate-fadeIn text-left max-w-2xl">
          <p className="text-[#d8c49a] text-lg mb-3">Hi! I’m Ivy Wahu</p>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Freelance <br />
            <span className="font-light">Photographer</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="bg-[#c9a66b] text-black px-6 py-3 rounded-md font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300">
              Hire Me
            </button>
            <button className="border border-[#c9a66b] px-6 py-3 rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            <div className="text-center">
              <h3 className="text-3xl text-[#c9a66b] font-semibold">8+</h3>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-[#c9a66b] font-semibold">500+</h3>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-[#c9a66b] font-semibold">20+</h3>
              <p className="text-sm text-gray-300">Countries Visited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
