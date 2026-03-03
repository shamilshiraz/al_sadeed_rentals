import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import {
  FaSnapchatGhost,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div id="contact" className="bg-black text-[#cdaf86] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* LEFT SIDE — Logo + Social */}
          <div className="flex flex-col items-start gap-6">

            <img
              src="/logos/al_sadeed_logo_gold.png"
              alt="Al Sadeed Logo"
              className="h-14 md:h-12"
            />

            {/* Social Links under Logo */}
            <div className="flex items-center gap-5 text-xl">
              <a href="https://www.snapchat.com/add/alsadeed25" target="_blank" rel="noopener noreferrer">
                <FaSnapchatGhost className="hover:text-white transition" />
              </a>

              <a href="https://wa.me/97470750055" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-white transition" />
              </a>

              <a href="https://www.youtube.com/@ALSADEEDLUXURYRENTAL" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-white transition" />
              </a>

              <a href="https://www.instagram.com/alsadeedluxuryrental" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-white transition" />
              </a>

              <a href="https://www.linkedin.com/in/al-sadeed-luxury-rental-aa634b38b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — Offices */}
          <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base">

            {/* Qatar */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold mb-2">Qatar Office</h3>

              <div className="flex items-center gap-2">
                <AiOutlinePhone />
                <a href="tel:+97470750055" className="hover:text-white transition">
                  +974 70 750 055
                </a>
              </div>

              <div className="flex items-start gap-2">
                <AiOutlineEnvironment className="mt-1" />
                <span>
                  Floor -6, Office no-230<br />
                  Munthaza Trading Center Building<br />
                  Doha, Qatar
                </span>
              </div>
            </div>

            {/* Saudi Arabia */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Saudi Arabia</h3>

                <div className="flex items-center gap-2 mb-3">
                  <AiOutlinePhone />
                  <a href="tel:+966530560602" className="hover:text-white transition">
                    +966 53 056 0602
                  </a>
                </div>
              </div>

              {/* Dammam / Al Khobar */}
              <div className="flex items-start gap-2">
                <AiOutlineEnvironment className="mt-1" />
                <span>
                  Khalid Bin Al Walid St,<br />
                  AR Rakah Al Janubiyah<br />
                  Al Khobar 34226<br />
                  Saudi Arabia
                </span>
              </div>

              {/* Riyadh */}
              <div className="flex items-start gap-2">
                <AiOutlineEnvironment className="mt-1" />
                <span>
                  Near Kingdom Tower Office, No. 112,<br />
                  1st Floor, Leaders Tower 2 Building<br />
                  Riyadh 12271<br />
                  Saudi Arabia
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 md:col-span-2 mt-4">
              <AiOutlineMail />
              <span>Info@alsadeedluxuryrental.com</span>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#cdaf86]/20 mt-10 pt-6 text-center text-xs text-[#cdaf86]/70">
          © {new Date().getFullYear()} Al Sadeed Luxury Rental. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;