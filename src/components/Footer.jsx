import React from "react";

function Footer() {
  return (
    <div className="bg-black text-[#cdaf8b] py-10 px-6 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png" // Replace with your logo image path
            alt="Al Sadeed Luxury Rental"
            className="h-8 w-auto"
          />
          <span className="uppercase tracking-widest text-sm font-light">
            AL SADEED <br /> LUXURY RENTAL
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-sm leading-snug max-w-xs">
          <div className="flex items-center gap-3">
            <img src="/mail.png" alt="Email" className="h-5 w-5 object-contain" />
            <a href="mailto:Alsadeedluxuryrental@gmail.com" className="hover:underline">
              Alsadeedluxuryrental@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img src="/phone.png" alt="Phone" className="h-5 w-5 object-contain" />
            <a href="tel:+97470750055" className="hover:underline">
              +974 70750055
            </a>
          </div>
          <div className="flex items-start gap-3">
            <img src="/location.png" alt="Location" className="h-5 w-5 mt-1 object-contain" />
            <address className="not-italic">
              Floor-6, Office no-230 <br />
              Munthaza trading center building, Doha, Qatar
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
