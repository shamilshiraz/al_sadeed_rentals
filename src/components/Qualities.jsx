import React from "react";

const qualities = [
  {
    icon: "/icons/hourly.svg",
    text: "Hourly or full day bookings",
  },
  {
    icon: "/icons/24h.svg",
    text: "Service availability",
  },
  {
    icon: "/icons/easyonline.svg",
    text: "Easy online booking & payment",
  },
];

function Qualities() {
  return (
    <div className="bg-black text-[#cdaf8c]">
      <div className="px-6 sm:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20 items-center text-center">
          {qualities.map((quality, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <img
                src={quality.icon}
                alt={quality.text}
<<<<<<< HEAD
                className="h-10 sm:h-16"
=======
                className="h-10"
>>>>>>> 80db274 (Initial commit)
              />
              <p className="text-base sm:text-lg">{quality.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Qualities;
