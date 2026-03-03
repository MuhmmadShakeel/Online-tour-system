import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Globe,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Tours", to: "/tour" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#237227] via-green-400 to-[#237227]" />

      {/* Decorative blur */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#237227]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#237227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#237227] flex items-center justify-center">
                <Globe size={20} className="text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                OTMS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted Online Tour Management System. We simplify travel
              planning, tour bookings, and adventure management — all in one
              place.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#237227] hover:border-[#237227] hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#237227] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#237227]" />
                </div>
                <span className="text-sm text-slate-400 leading-relaxed">
                  123 Main Street, Bahawalpur, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#237227]" />
                </div>
                <a
                  href="tel:+923001234567"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                >
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#237227]" />
                </div>
                <a
                  href="mailto:info@otms.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                >
                  info@otms.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to get the latest tour updates and exclusive deals
              delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-[#237227] focus:ring-1 focus:ring-[#237227]/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-lg bg-[#237227] text-sm font-bold text-white hover:bg-green-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} OTMS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;