import React from "react";

function WhatsappButton() {
  return (
    <div className="fixed bottom-2 right-6 sm:right-10 z-50">
      <button
        className="flex items-center gap-3 px-6 py-3 rounded-xl text-white shadow-xl bg-gray-500/50 transition-all"
      >
        <img
          src="/icons/chat.svg"
          alt="Chat Icon"
          className=""
        />
        <span className="text-xs font-medium">Chat on WhatsApp</span>
      </button>
    </div>
  );
}

export default WhatsappButton;
