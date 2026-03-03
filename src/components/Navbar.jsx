import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [callPopupOpen, setCallPopupOpen] = useState(false);

  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const popupRef = useRef(null);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "expo.inOut" }
      );

      gsap.fromTo(
        menuLinksRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    if (callPopupOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [callPopupOpen]);

  function closeMenu() {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "expo.in",
        onComplete: () => setMenuOpen(false),
      });
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <header className="w-full bg-black/80 text-white shadow-md fixed top-0 left-0 z-50">
        <div className="mx-auto flex items-center justify-between py-3 px-4 sm:px-20">
          {/* Logo */}
          <img
            src="/logos/al_sadeed_logo_gold.png"
            alt="Al Sadeed Logo"
            className="h-8"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {["Fleet", "Amenities", "Booking", "Contact"].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="relative group"
              >
                <span className="relative z-10">{text}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cdaf8c] transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Call + Booking */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCallPopupOpen(true)}
              className="flex items-center bg-white/10 border border-gray-700 px-4 py-1 rounded-full hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm"
            >
              <MdCall className="mr-2" />
              Call Now
            </button>

            <a
              href="#booking"
              className="bg-white/10 border border-gray-700 px-4 py-1 rounded-full hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <a
              href="#booking"
              className="bg-white/10 border border-gray-700 px-3 py-1 rounded-full mr-2 text-sm hover:bg-[#cdaf8c] hover:text-black font-semibold transition"
            >
              BOOK NOW
            </a>
            <button
              className="p-2"
              onClick={() => setMenuOpen(true)}
            >
              <HiMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Call Popup */}
      {callPopupOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div
            ref={popupRef}
            className="bg-[#1e1e1e] border border-gray-700 rounded-2xl p-8 w-[90%] max-w-md text-white shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+966XXXXXXXXX"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3  transition font-medium"
              >
                <span>Saudi Arabia (SA)</span>
                <span>+966 530 560 602</span>
              </a>

              <a
                href="tel:+97470750055"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3 transition font-medium"
              >
                <span>Qatar (QR)</span>
                <span>+974 70 750 055</span>
              </a>
            </div>

            <button
              onClick={() => setCallPopupOpen(false)}
              className="mt-6 w-full bg-[#cdaf8c] text-black py-2 rounded-full font-semibold hover:bg-[#d9ba97] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}