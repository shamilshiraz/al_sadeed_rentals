import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef([]);

  useEffect(() => {
    if (navLinksRef.current.length > 0) {
      gsap.fromTo(
        navLinksRef.current,
        { 
          y: -30, 
          opacity: 0,
          rotationX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          stagger: 0.05,
          duration: 1.4,
          ease: "expo.out",
          delay: 0.3,
        }
      );
    }
  }, []);

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
          {["fleet", "Amenities", "Booking", "Contact"].map((text, i) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="relative opacity-0 overflow-hidden group"
              ref={(el) => (navLinksRef.current[i] = el)}
            >
              <span className="relative z-10">{text}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#cdaf8c] transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center bg-white/10 border border-gray-700 px-4 py-1 rounded-full ml-3 hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm">
            <MdCall className="mr-2" />
            +974 0000 0000
          </span>
          <a
            href="#book"
            className="bg-white/10 border border-gray-700 px-4 py-1 rounded-full ml-3 hover:bg-[#cdaf8c] hover:text-black transition font-semibold text-sm"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Nav trigger*/}
        <div className="md:hidden flex items-center">
          <a
            href="#book"
            className="bg-white/10 border border-gray-700 px-3 py-1 rounded-full mr-2 text-sm hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            BOOK NOW
          </a>
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <HiMenu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e1e1ef0] px-6 pb-3 flex flex-col gap-3">
          {["fleet", "Amenities", "Booking", "Contact"].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="py-2 border-b border-gray-600"
            >
              {text}
            </a>
          ))}
          <span className="flex items-center bg-black/60 rounded px-3 py-2 mt-2 text-sm w-fit">
            <MdCall className="mr-2" />
            +974 0000 0000
          </span>
        </div>
      )}
    </header>
  );
}