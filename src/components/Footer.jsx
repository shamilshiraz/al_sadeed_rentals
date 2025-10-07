import React from "react";

<<<<<<< HEAD
const Footer = () => (
  <footer className="bg-black text-[#cdaf86] py-10 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between  relative">
    {/* Logo and Brand */}
    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
      {/* Replace with <img src="..." /> if you have the logo as image */}
      <div className="mb-2">
        {/* Example SVG, replace with your actual logo if available */}
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0">
          <path d="M 6 16 L 24 3 L 42 16 L 24 29 Z" fill="#d4b999" />
        </svg>
      </div>
      <span className="uppercase tracking-widest font-semibold text-lg mb-1">
        AL SADEED
      </span>
      <span className="tracking-wide font-light text-sm">
        Luxury Rental
      </span>
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 mr-2 text-[#d4b999]" fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M16 12H8m0 0l4-4m-4 4l4 4"/>
        </svg>
        <a href="mailto:Alsadeedluxuryrental@gmail.com" className="hover:underline">
          Alsadeedluxuryrental@gmail.com
        </a>
      </div>
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 mr-2 text-[#d4b999]" fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 5.75C3 4.23122 4.23122 3 5.75 3H18.25C19.7688 3 21 4.23122 21 5.75V18.25C21 19.7688 19.7688 21 18.25 21H5.75C4.23122 21 3 19.7688 3 18.25V5.75ZM12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17ZM7 7H17M7 10H17"/>
        </svg>
        <a href="tel:+97470750055" className="tracking-wider">+974 70750055</a>
      </div>
      <div className="flex items-start">
        <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-1 text-[#d4b999]" fill="none" stroke="currentColor"
          strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        <div>
          Floor -6, Office no-230<br />
          Munthaza trading center building,<br />
          Doha, Qatar
        </div>
      </div>
    </div>

    {/* Border lines on the sides for visual accent */}
    <div className="absolute top-0 left-0 h-full w-1 border-l-2 border-[#12e3e2] hidden md:block"></div>
    <div className="absolute top-0 right-0 h-full w-1 border-r-2 border-[#12e3e2] hidden md:block"></div>
  </footer>
);
=======
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
>>>>>>> 80db274 (Initial commit)

export default Footer;
