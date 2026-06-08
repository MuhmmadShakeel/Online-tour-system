import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

function ContactUs() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ EmailJS CONFIG (Frontend safe)
  const SERVICE_ID = "service_vbu28eq";
  const TEMPLATE_ID = "template_dpbnptu";
  const PUBLIC_KEY = "XektYOO9wWBY0zqQ6";

  // ✅ Initialize EmailJS (required like your working HTML example)
  useEffect(() => {
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    if (!formRef.current) {
      setLoading(false);
      setError("Unable to access form. Please reload the page and try again.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.text || err?.message || "EmailJS failed to send the message.");
        console.log("EmailJS Error:", err);
      });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-20 flex justify-center">
      <div className="max-w-7xl w-full px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Contact <span className="text-[#237227]">Us</span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-md">
                We are here to help you. Send us a message and we will respond quickly and professionally.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50">
                  <Mail className="text-[#237227]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="font-medium">support@otms.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50">
                  <Phone className="text-[#237227]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="font-medium">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50">
                  <MapPin className="text-[#237227]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="font-medium">Islamabad, Pakistan</p>
                </div>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-10">

            <form ref={formRef} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-5">

              <input
                name="name"
                required
                placeholder="Full Name"
                className="md:col-span-2 px-4 py-3 border rounded-lg outline-none focus:border-[#237227]"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="md:col-span-2 px-4 py-3 border rounded-lg outline-none focus:border-[#237227]"
              />

              <input
                name="title"
                required
                placeholder="Subject"
                className="md:col-span-2 px-4 py-3 border rounded-lg outline-none focus:border-[#237227]"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message..."
                className="md:col-span-2 px-4 py-3 border rounded-lg outline-none resize-none focus:border-[#237227]"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 flex items-center justify-center gap-2 bg-[#237227] text-white py-3 rounded-lg font-semibold hover:bg-[#1a551d] transition"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {success && (
                <div className="md:col-span-2 flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="md:col-span-2 text-sm text-red-600">
                  {error}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;