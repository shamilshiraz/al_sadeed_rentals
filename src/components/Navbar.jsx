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

  /* ---------------- MENU ANIMATION ---------------- */
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 0.6, ease: "expo.inOut" }
      );

      gsap.fromTo(
        menuLinksRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);

  /* ---------------- CALL POPUP ANIMATION ---------------- */
  useEffect(() => {
    if (callPopupOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [callPopupOpen]);

  function closeMenu() {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
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
      {/* ================= HEADER ================= */}
      <header className="w-full bg-black/80 text-white fixed top-0 left-0 z-50 backdrop-blur-md">
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
                <span>{text}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cdaf8c] transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
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

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#booking"
              className="bg-white/10 border border-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#cdaf8c] hover:text-black font-semibold transition"
            >
              BOOK
            </a>

            <button onClick={() => setMenuOpen(true)} className="p-2">
              <HiMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full sm:w-[80vw] max-w-md h-full bg-[#111] flex flex-col px-8 pt-16 z-[60]"
        >
          {/* Close */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-2xl text-white"
          >
            ✕
          </button>

          {/* Links */}
          <nav className="flex flex-col gap-8 text-4xl mt-10 font-medium">
            {["Fleet", "Amenities", "Booking", "Contact"].map((text, i) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                onClick={closeMenu}
                ref={(el) => (menuLinksRef.current[i] = el)}
                className="hover:text-[#cdaf8c] transition text-white"
              >
                {text}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto pb-10">
            <button
              onClick={() => {
                closeMenu();
                setCallPopupOpen(true);
              }}
              className="w-full bg-[#cdaf8c] text-black py-3 rounded-full font-semibold"
            >
              Call Now
            </button>
          </div>
        </div>
      )}

      {/* ================= CALL POPUP ================= */}
      {callPopupOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]"
          onClick={() => setCallPopupOpen(false)}
        >
          <div
            ref={popupRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1e1e1e] border border-gray-700 rounded-2xl p-8 w-[90%] max-w-md text-white shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+966530560602"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3 rounded-full transition font-medium"
              >
                <span>Saudi Arabia (SA)</span>
                <span>+966 53 056 0602</span>
              </a>

              <a
                href="tel:+97470750055"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3 rounded-full transition font-medium"
              >
                <span>Qatar (QR)</span>
                <span>+974 70 750 055</span>
              </a>
            </div>

            <button
              onClick={() => setCallPopupOpen(false)}
              className="mt-6 w-full bg-[#cdaf8c] text-black py-2 rounded-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}