import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Map, Users } from "lucide-react";
import TourDetailsModal from "./TourDetailsModal";

const ourTours = [
  {
    id: 1,
    title: "Skardu Valley Expedition",
    location: "Gilgit-Baltistan",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    price: "PKR 45,000",
    description:
      "Explore the breathtaking landscapes of Skardu Valley, including Shangrila Resort, Upper and Lower Kachura Lakes, and the stunning Deosai Plains.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shangrila_resort_skardu.jpg/1280px-Shangrila_resort_skardu.jpg",
  },
  {
    id: 2,
    title: "Hunza Valley 7-Day Trip",
    location: "Hunza",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    price: "PKR 55,000",
    description:
      "A week-long journey through the magical Hunza Valley — visit Karimabad, Attabad Lake, Eagle's Nest viewpoint, and the ancient Baltit Fort.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-GbXvmEzfDbtk3N2x3cKyWp4eyH7UxxQow&s",
  },
  {
    id: 3,
    title: "Fairy Meadows Trek",
    location: "Nanga Parbat",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    price: "PKR 35,000",
    description:
      "Trek through lush green meadows with the stunning Nanga Parbat as your backdrop. A paradise for nature lovers and adventure seekers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Nanga_Parbat_The_Killer_Mountain.jpg",
  },
  {
    id: 4,
    title: "Lahore Cultural Walk",
    location: "Lahore",
    duration: "2 Days / 1 Night",
    rating: 4.5,
    price: "PKR 15,000",
    description:
      "Immerse yourself in the rich Mughal heritage of Lahore — explore the Badshahi Mosque, Lahore Fort, Shalimar Gardens, and the vibrant Food Street.",
    image:
      "https://www.superior.edu.pk/wp-content/uploads/2025/05/Rectangle-1.webp",
  },
];

const userTours = [
  {
    id: "u1",
    title: "Kumrat Valley Camping",
    location: "Upper Dir",
    duration: "3 Days / 2 Nights",
    rating: 4.6,
    price: "PKR 25,000",
    description:
      "Camp under the stars in the untouched beauty of Kumrat Valley. Enjoy riverside camping, forest hikes, and crystal-clear streams.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "u2",
    title: "Neelum Valley Retreat",
    location: "AJK",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    price: "PKR 30,000",
    description:
      "Discover the lush green valleys and roaring rivers of Neelum. Visit Sharda, Kel, and Arang Kel for an unforgettable retreat.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "u3",
    title: "Khunjerab Pass Drive",
    location: "Hunza",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    price: "PKR 50,000",
    description:
      "Drive along the spectacular Karakoram Highway to the highest paved border crossing in the world at 4,693 meters elevation.",
    image:
      "https://global-geography.org/attach/Geography/Asia/Pakistan/Pictures/Northern_Pakistan/Khunjerab_Pass_Pak_China_Border_1/scaled-900x600-55jpg.jpg",
  },
  {
    id: "u4",
    title: "Malam Jabba Snow Day",
    location: "Swat",
    duration: "2 Days / 1 Night",
    rating: 4.4,
    price: "PKR 18,000",
    description:
      "Experience the thrill of skiing and snowboarding at Pakistan's premier ski resort surrounded by pine forests and snow-covered peaks.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
];

function TourToggle() {
  const [active, setActive] = useState("our");
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const data = active === "our" ? ourTours : userTours;

  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-8 sm:mb-10" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-green-700">
              Browse Tours
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900">
            Discover <span className="text-[#237227]">Experiences</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-light max-w-2xl">
            Switch between our curated tours and community-submitted adventures.
          </p>

          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <button
              onClick={() => setActive("our")}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                active === "our"
                  ? "bg-[#237227] text-white border-[#237227]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#237227]/50"
              }`}
            >
              <Map size={16} />
              Our Tours
            </button>
            <button
              onClick={() => setActive("user")}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                active === "user"
                  ? "bg-[#237227] text-white border-[#237227]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#237227]/50"
              }`}
            >
              <Users size={16} />
              User Tours
            </button>
          </div>
        </div>

        <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="100">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden bg-white border border-slate-100 hover:border-green-200 hover:shadow-2xl hover:shadow-slate-100 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur border border-white text-slate-700">
                  {active === "our" ? "Our Tour" : "User Tour"}
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#237227] transition-colors duration-300">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 group-hover:text-slate-700 transition-colors duration-300">{item.location}</p>
                <div className="mt-3">
                  <button
                    onClick={() => setSelectedTour(item)}
                    className="px-4 py-2 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-[#237227] hover:text-white hover:border-[#237227] transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Details Modal */}
      {selectedTour && (
        <TourDetailsModal
          tour={selectedTour}
          tourType={active}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </section>
  );
}

export default TourToggle;
