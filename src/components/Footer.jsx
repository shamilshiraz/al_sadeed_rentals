import React from 'react';

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
              <img src="/icons/email.svg" alt="email" className="h-4" />
              <span>Info@alsadeedluxuryrental.com</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/phone2.svg" alt="phone" className="h-4" />
              <span>+974 70750055</span>
            </div>

            <div className="flex items-start gap-2">
              <img src="/icons/location2.svg" alt="location" className="h-4 mt-1" />
              <span>
                Floor -6, Office no-230<br />
                Munthaza trading center building,<br />
                Doha, Qatar
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
