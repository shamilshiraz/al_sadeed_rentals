import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function ChauffeurForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca475208-b6bf-403a-8930-f645bd1c836a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your enquiry has been sent successfully ✅");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Something went wrong. Please try again ❌");
    }
  };

  return (
    <div id="booking" className="bg-[#f7f9fd] py-20 px-4">
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

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div>
              <p>Full Name</p>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Company */}
            <div>
              <p>Company</p>
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Email */}
            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Phone */}
            <div>
              <p>Phone</p>
              <div className="flex items-center border rounded-lg px-2">
                <span className="text-gray-500 px-2">+974</span>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone (WhatsApp)"
                  className="flex-1 px-2 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* Pickup */}
            <div>
              <p>Pickup</p>
              <input
                type="text"
                name="pickup"
                placeholder="Pickup location"
                className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Drop off */}
            <div>
              <p>Drop off</p>
              <input
                type="text"
                name="dropoff"
                placeholder="Drop-off location"
                className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Date & Time */}
            <div>
              <p>Date & Time</p>
              <div className="relative">
                <input
                  type="text"
                  name="datetime"
                  placeholder="dd/mm/yy"
                  className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#cdaf8c]"
                />
                <FaRegCalendarAlt className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Vehicle preference */}
            <div>
              <p>Vehicle preference</p>
              <select
                name="vehicle"
                className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              >
                <option>Sedans</option>
                <option>SUV</option>
                <option>Vans & MPVs</option>
                <option>Ultra luxury</option>
              </select>
            </div>

            {/* Specifications / Notes */}
            <div className="md:col-span-2">
              <p>Specifications</p>
              <textarea
                name="specifications"
                placeholder="Notes (child seat, signage, hours...)"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="bg-black shadow-lg text-white px-4 py-3 rounded-lg hover:bg-[#cdaf8c] transition"
              >
                Submit Enquiry
              </button>

              <a
                href="https://wa.me/97470750055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white py-2 px-3 rounded-lg shadow-lg"
              >
                <img src="/icons/chat.svg" alt="chat" />
                Chat on Whatsapp
              </a>
            </div>

            {/* Status Message */}
            {result && (
              <p className="text-sm mt-4 text-gray-600 md:col-span-2">{result}</p>
            )}

            <p className="text-xs text-gray-400 mt-4 md:col-span-2">
              By submitting, you agree to our terms. *Some rides are available
              only upon prior booking.
            </p>
          </form>
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
                <img src="/icons/tick.svg" alt="TICK" className="w-4 h-4" />
                Trained, uniformed chauffeurs with route optimization
              </li>
              <li className="flex items-center gap-2">
                <img src="/icons/tick.svg" alt="TICK" className="w-4 h-4" />
                New-shape vehicles, discreet & impeccably maintained
              </li>
              <li className="flex items-center gap-2">
                <img src="/icons/tick.svg" alt="TICK" className="w-4 h-4" />
                Airport meet & greet with personalized signage
              </li>
              <li className="flex items-center gap-2">
                <img src="/icons/tick.svg" alt="TICK" className="w-4 h-4" />
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
