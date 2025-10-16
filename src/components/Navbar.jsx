import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      // Animate menu coming from RIGHT
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "expo.inOut" }
      );

      // Animate links with stagger and slight delay
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
    <header className="w-full bg-black/80 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between py-3 px-4 sm:px-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logos/al_sadeed_logo_gold.png"
            alt="Al Sadeed Logo"
            className="h-8"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Fleet", "Amenities", "Booking", "Contact"].map((text, i) => (
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

        {/* Desktop Call / Booking */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+97470750055">
            <span className="flex items-center bg-white/10 border border-gray-700 px-4 py-1 rounded-full ml-3 hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm">
              <MdCall className="mr-2" />
              +974 70 750 055
            </span>
          </a>
          <a
            href="#booking"
            className="bg-white/10 border border-gray-700 px-4 py-1 rounded-full ml-3 hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Nav Trigger */}
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
            aria-label="Open menu"
          >
            <HiMenu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full sm:w-[80vw] max-w-md h-full bg-[#1e1e1efa] backdrop-blur-lg flex flex-col items-start px-8 pt-16 z-50 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-8 text-2xl text-white"
            aria-label="Close menu"
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
              <line x1="4" y1="4" x2="16" y2="16" stroke="white" strokeWidth="2" />
              <line x1="16" y1="4" x2="4" y2="16" stroke="white" strokeWidth="2" />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-8 text-5xl mt-10 w-full font-medium z-50">
            {["Fleet", "Amenities", "Booking", "Contact"].map((text, i) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                onClick={closeMenu}
                ref={(el) => (menuLinksRef.current[i] = el)}
                className="text-white tracking-wide hover:text-[#cdaf8c] transition-colors"
              >
                {text}
              </a>
            ))}
          </nav>

          {/* Optional Contact CTA at bottom */}
          <div className="mt-auto pb-10 w-full">
            <a
              href="tel:+97470750055"
              className="flex items-center justify-center w-full bg-[#cdaf8c] text-black py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#d9ba97] transition"
            >
              <MdCall className="mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
