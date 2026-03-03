import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";

function OurTestemonials() {
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "HR Manager",
      message:
        "OTMS has completely transformed how we manage visitors. The system is secure, efficient, and extremely easy to use.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Khan",
      role: "Office Administrator",
      message:
        "The digital check-in process has reduced waiting time significantly. Our front desk operations are now seamless.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bilal Hussain",
      role: "Security Supervisor",
      message:
        "Real-time visitor tracking and reports have improved our building security and monitoring standards.",
      image:
        "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Fatima Noor",
      role: "Operations Manager",
      message:
        "Professional, reliable, and highly customizable. OTMS is exactly what modern organizations need.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-gray-50">

      {/* Background Glow Effect */}
      <div className="absolute w-96 h-96 bg-green-200/30 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
              Success Stories
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted by <span className="text-green-600">Industry Leaders</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Empowering organizations with secure and smart visitor management solutions.
          </p>
        </div>

        {/* Swiper */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-500 h-full flex flex-col">

                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 text-green-300 opacity-20 w-10 h-10" />

                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-green-300"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{item.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 w-3 h-3 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light flex-grow">
                    "{item.message}"
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-green-400 to-green-200 rounded-full"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default OurTestemonials;