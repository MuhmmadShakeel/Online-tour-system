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
          src="https://static01.nyt.com/images/2020/11/10/travel/11experiences-1/oakImage-1605034567551-articleLarge.jpg?quality=75&auto=webp&disable=upscale" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b  from-[#237227]/60 to-[#237227]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <h1
          data-aos="fade-down"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFAA00] drop-shadow-lg"
        >
          Onlie Tour Management System
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-white max-w-2xl drop-shadow-md"
        >
          Simplifying Appointments, Visitors, and Tracking — All in One Place
           we provide the secure and more reliabe tour that you could afford easily
        </p>
       
      </div>
    </header>
  );
}

export default Header;