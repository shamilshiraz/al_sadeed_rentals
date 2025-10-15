import React from "react";
import { FaRegCalendarAlt, FaPaperPlane, FaCheck } from "react-icons/fa";

function ChauffeurForm() {
  return (
    <div id="booking" className="bg-[#f7f9fd] py-20 px-4">
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
            <div className="">
              <p>Full Name</p>
            <input
              type="text"
              label=""
              required
              placeholder="Your name"
              className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
            </div>

                        <div className="">
              <p>Company </p>
            <input
              type="text"
              placeholder="Company (optional)"
              className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
            </div>


            {/* Company */}


            {/* Email */}

                                    <div className="">
              <p>Mail </p>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
            </div>

            {/* Phone */}

                                                <div className="">
              <p>Phone </p>
            <div className="flex items-center border rounded-lg px-2">
              <span className="text-gray-500 px-2">+974</span>
              <input
              required
                type="text"
                placeholder="Phone (WhatsApp)"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>
            </div>

 



            {/* Date & Time */}


            {/* Vehicle Preference */}


            {/* Notes (Full Width) */}
            <div className="hidden sm:block">
              <p>Specifications</p>
            <textarea
              placeholder="Notes (child seat, signage, hours...)"
              className="md:col-span-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 ">
              <div className="">
                <p>Pickup</p>
            <input
              type="text"
              placeholder="Pickup"
              className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
              </div>
                            <div className="">
                <p>Drop off</p>
            <input
              type="text"
              placeholder="Drop-off"
              className="border w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
              </div>
              <div className="">
                <p>Date & Time</p>
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yy"
                className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#cdaf8c]"
              />
              <FaRegCalendarAlt className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
            </div>
              </div>
                            <div className="">
                <p>Vehicle preference</p>
            <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]">
              <option>Sedans</option>
              <option>SUV</option>
              <option>Vans & MPVs</option>
                            <option>Ultra luxury</option>
            </select>
              </div>
            </div>
                        <div className="sm:hidden block">
              <p>Specifications</p>
            <textarea
              placeholder="Notes (child seat, signage, hours...)"
              className="md:col-span-2 w-full h-[30vh] border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#cdaf8c]"
            />
            </div>
<div className="flex-1"></div>
<div className="flex gap-4"> 
  <button className="bg-black shadow-lg text-white px-3 py-2 rounded-lg">Submit Enquiry </button>
  <button className="flex gap-3 bg-white py-2 px-3 rounded-lg shadow-lg"> <img src="/icons/chat.svg" alt="" />Chat on Whatsapp</button>
</div>
<div className="flex-1"></div>

          <p className="text-xs text-gray-400 mt-4">
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
