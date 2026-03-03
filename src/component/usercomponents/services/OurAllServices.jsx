import React, { useState } from "react";
import { Search, X, Filter } from "lucide-react";

function OurAllServices() {
  const servicesData = [
    {
      id: 1,
      title: "Visitor Registration",
      category: "Security",
      description:
        "Digital visitor check-in with ID verification and badge printing.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Access Control",
      category: "Security",
      description:
        "Advanced access permissions to secure restricted areas.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Real-Time Monitoring",
      category: "Monitoring",
      description:
        "Live visitor tracking with instant activity reports.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Analytics & Reports",
      category: "Analytics",
      description:
        "Detailed reporting dashboards for better decisions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Pre-Registration",
      category: "Management",
      description:
        "Pre-book and approve visitors before arrival.",
      image:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Emergency Alerts",
      category: "Security",
      description:
        "Instant emergency notification & evacuation tracking.",
      image:
        "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Badge Printing",
      category: "Management",
      description:
        "Custom visitor badges with QR identification.",
      image:
        "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Digital NDA Signing",
      category: "Security",
      description:
        "Secure digital document signing at check-in.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = [
    "All",
    "Security",
    "Monitoring",
    "Analytics",
    "Management",
  ];

  const filteredServices = servicesData.filter((service) => {
    const categoryMatch =
      activeCategory === "All" || service.category === activeCategory;
    const searchMatch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="relative py-12 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-green-700">
              Solutions Catalog
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 leading-tight">
            Our <span className="text-[#237227]">Services</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-slate-600 font-light leading-relaxed">
            Comprehensive visitor management solutions tailored for modern enterprises.
          </p>
        </div>

        {/* Search + Filter - Desktop */}
        <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-4 mb-8" data-aos="fade-up">
          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-sm transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#237227] text-white shadow-lg shadow-green-100"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-green-200 hover:text-[#237227]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Search & Filter */}
        <div className="md:hidden mb-8 space-y-4" data-aos="fade-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-bold text-sm"
          >
            <Filter className="w-5 h-5" />
            Filter Categories
          </button>

          {showMobileFilter && (
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xl">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setShowMobileFilter(false);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition ${
                      activeCategory === cat
                        ? "bg-[#237227] text-white"
                        : "bg-slate-50 text-slate-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4" data-aos="fade-up">
          <span className="text-sm text-slate-400 font-medium">
            Found <span className="text-slate-900 font-bold">{filteredServices.length}</span> services
          </span>
          {(activeCategory !== "All" || searchTerm) && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="text-xs font-bold text-[#237227] hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-green-100 hover:shadow-2xl hover:shadow-green-50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#237227] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#237227] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center text-xs font-bold text-[#237227] hover:text-[#FFAA00] transition-all group/btn">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200" data-aos="zoom-in">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500 font-light mb-8 max-w-sm mx-auto">We couldn't find any services matching your current search or filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="px-8 py-3 bg-[#237227] text-white rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurAllServices;