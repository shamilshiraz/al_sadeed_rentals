import React from "react";
import { FaRegCalendarAlt, FaPaperPlane, FaCheck } from "react-icons/fa";

function ChauffeurForm() {
  return (
    <div className="bg-gray-50 py-20 px-4">
      {/* Centered Container */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-[#cdaf8c] font-medium">
            INSTANT ENQUIRY
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Book Your Chauffeur
          </h2>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Ride Details
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Your name"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Company */}
            <input
              type="text"
              placeholder="Company (optional)"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="you@email.com"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Phone */}
            <div className="flex items-center border rounded-lg px-2">
              <span className="text-gray-500 px-2">+974</span>
              <input
                type="text"
                placeholder="Phone (WhatsApp)"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>

            {/* Pickup */}
            <input
              type="text"
              placeholder="Pickup"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Dropoff */}
            <input
              type="text"
              placeholder="Drop-off"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Date & Time */}
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#cdaf8c]"
              />
              <FaRegCalendarAlt className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
            </div>

            {/* Vehicle Preference */}
            <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]">
              <option>Mercedes-Benz S450</option>
              <option>BMW 7 Series</option>
              <option>Audi A8</option>
            </select>

            {/* Notes (Full Width) */}
            <textarea
              placeholder="Notes (child seat, signage, hours...)"
              className="md:col-span-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />

            {/* Submit Button */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                <FaPaperPlane className="w-4 h-4" /> Submit Enquiry
              </button>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" /> Chat on WhatsApp
              </label>
            </div>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            By submitting, you agree to our terms. *Some rides are available
            only upon prior booking.
          </p>
        </div>

        {/* Bottom Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Why Choose */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-lg flex gap-3 font-semibold text-gray-900 mb-4">
              <img src="/icons/why_al_sadeed.svg" alt="" />
             <span>Why Choose Al Sadeed</span> 
            </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
  <li className="flex items-center gap-2">
    <img src="/icons/TICK.svg" alt="TICK" className="w-4 h-4" />
    Trained, uniformed chauffeurs with route optimization
  </li>
  <li className="flex items-center gap-2">
    <img src="/icons/TICK.svg" alt="TICK" className="w-4 h-4" />
    New-shape vehicles, discreet & impeccably maintained
  </li>
  <li className="flex items-center gap-2">
    <img src="/icons/TICK.svg" alt="TICK" className="w-4 h-4" />
    Airport meet & greet with personalized signage
  </li>
  <li className="flex items-center gap-2">
    <img src="/icons/TICK.svg" alt="TICK" className="w-4 h-4" />
    Transparent pricing, online payment & 24/7 support
  </li>
</ul>

          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-lg flex gap-3 font-semibold text-gray-900 mb-4">
              <img src="/icons/location.svg" alt="" />
             <span>Service Areas</span> 
            </div>
            <p className="text-gray-700 text-sm">
              Chauffeur services available nationwide, anywhere in Qatar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChauffeurForm;
