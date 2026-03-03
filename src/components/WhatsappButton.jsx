import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function WhatsappButton() {
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (popupOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [popupOpen]);

  return (
    <>
<div className="fixed bottom-6 right-6 sm:right-10 z-50">
  <button
    onClick={() => setPopupOpen(true)}
    className="flex items-center gap-3 px-6 py-3 rounded-lg 
               bg-[#cdaf8c] text-black font-semibold text-sm
               shadow-2xl hover:scale-105 transition-all duration-300"
  >
    <img src="/icons/chat.svg" alt="Chat Icon" className="w-5 h-5" />
    <span>Chat With Us</span>
  </button>
</div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div
            ref={popupRef}
            className="bg-[#000] border border-gray-700 rounded-2xl p-8 w-[90%] max-w-md text-white shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Chat on WhatsApp
            </h2>

            <div className="flex flex-col gap-4">
              {/* Saudi */}
              <a
                href="https://wa.me/966530560602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3  transition font-medium"
              >
                <span>Saudi Arabia (SA)</span>
                <span>+966 530 560 602</span>
              </a>

              {/* Qatar */}
              <a
                href="https://wa.me/97470750055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center bg-white/10 hover:bg-[#cdaf8c] hover:text-black px-5 py-3  transition font-medium"
              >
                <span>Qatar (QR)</span>
                <span>+974 70 750 055</span>
              </a>
            </div>

            <button
              onClick={() => setPopupOpen(false)}
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

export default WhatsappButton;