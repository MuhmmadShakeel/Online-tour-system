import React from "react";
import { X } from "lucide-react";

const ConsultationForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
          Get Consultation
        </h3>
        <p className="text-slate-500 mb-6 text-sm">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#9f8660] focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#9f8660] focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#9f8660] focus:border-transparent outline-none transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-slate-900 text-white rounded-lg hover:bg-[#9f8660] transition-colors font-medium text-sm tracking-wide"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
