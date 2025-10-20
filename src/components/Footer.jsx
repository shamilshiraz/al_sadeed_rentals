import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';
import { FaSnapchatGhost, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div id='contact' className="bg-black text-[#cdaf86] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 text-left">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="/logos/al_sadeed_logo_gold.png"
              alt="Al Sadeed Logo"
              className="h-14 md:h-10 mb-2"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <AiOutlineMail className="h-4 w-4" />
              <span>Info@alsadeedluxuryrental.com</span>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlinePhone className="h-4 w-4" />
              <span>+974 70750055</span>
            </div>

            <div className="flex items-start gap-2">
              <AiOutlineEnvironment className="h-4 w-4 mt-1" />
              <span>
                Floor -6, Office no-230<br />
                Munthaza trading center building,<br />
                Doha, Qatar
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-4 text-xl">
              <a href="https://www.snapchat.com/add/alsadeed25?share_id=MLKsldlvuTs&locale=en-IN" target="_blank" rel="noopener noreferrer">
                <FaSnapchatGhost />
              </a>
              <a href="https://wa.me/97470750055" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/@ALSADEEDLUXURYRENTAL" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/alsadeedluxuryrental?igsh=MWoweXhlZDd0a2Nnbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/al-sadeed-luxury-rental-aa634b38b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
