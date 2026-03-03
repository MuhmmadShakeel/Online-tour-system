import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS Animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Team members data for OTMS
  const teamData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      name: "Alice Johnson",
      role: "Project Manager",
      description:
        "Oversees all operations and ensures smooth execution of the visitor management system.",
      bgColor: "bg-[#237227]",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      name: "Robert Smith",
      role: "Frontend Developer",
      description:
        "Designs intuitive interfaces and responsive layouts for a seamless user experience.",
      bgColor: "bg-[#FFAA00]",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      name: "Linda Davis",
      role: "Backend Developer",
      description:
        "Implements server-side logic and ensures data security and reliability.",
      bgColor: "bg-[#237227]",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      name: "Michael Lee",
      role: "QA Specialist",
      description:
        "Tests the system thoroughly to ensure error-free and high-quality performance.",
      bgColor: "bg-[#FFAA00]",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamData.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
              Our Experts
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Meet the <span className="text-[#237227]">Passionate Minds</span> behind OTMS.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-slate-600 font-light leading-relaxed">
            Ensuring smooth, secure, and efficient visitor management with every line of code.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center" data-aos="zoom-in-up">
          {/* Left - Images with modern frame */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-[6px] border-white">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {teamData.map((member) => (
                <div key={member.id} className="w-full flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[250px] md:h-[350px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              {teamData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#237227] w-6"
                      : "bg-slate-400 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Content with clean card */}
          <div className="relative h-[250px] md:h-[300px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="w-full flex-shrink-0 p-8 md:p-12 flex flex-col justify-center bg-white border border-slate-100 rounded-2xl"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-md">
                      {member.role}
                    </div>
                    <p className="text-base text-slate-600 font-light leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;