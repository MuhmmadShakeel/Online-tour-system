import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // duration in ms, animate only once
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect and Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#237227]/60 to-[#237227]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFAA00] drop-shadow-lg"
        >
          OTMS
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow-md"
        >
          Simplifying Appointments, Visitors, and Tracking — All in One Place
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-3 bg-[#FFAA00] text-[#237227] font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-[#FFAA00] text-[#FFAA00] font-semibold rounded-full shadow-lg hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;