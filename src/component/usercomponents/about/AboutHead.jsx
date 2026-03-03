import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHead() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
      
      {/* Professional Background Image */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
        alt="Office Management System"
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl space-y-6">

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transforming Visitor
            <span className="text-[#FFAA00]"> Management</span>.
          </h1>

          <p
            className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            OTMS is built to enhance organizational security, streamline visitor tracking, and simplify check-in processes with modern digital solutions.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutHead;