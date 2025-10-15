import React from "react";

const sections = [
  {
    id: 1,
    badge: "IN-CAR FACILITIES",
    title: (
      <>
        Every Ride, <br /> Thoughtfully Equipped
      </>
    ),
    image: "./amenities.png",
    reverse: false,
    features: [
      { icon: "/icons/wifi.svg", title: "Wi-Fi in all vehicles" },
      { icon: "/icons/BOTTLE.svg", title: "Bottled water & refreshments" },
      { icon: "/icons/charging.svg", title: "Mobile phone charging ports" },
      { icon: "/icons/leather.svg", title: "Luxury leather seating with ample legroom" },
      { icon: "/icons/ccc.svg", title: "Climate-controlled cabins (AC & heating)" },
      { icon: "/icons/pcpc.svg", title: "Privacy curtains in premium cars" },
    ],
  },
  {
    id: 2,
    badge: "SAFETY & COMFORT",
    title: "Your peace of mind",
    image: "./safety_and_comfort.png",
    reverse: true,
    features: [
      { icon: "/icons/professional_chaffeurs.svg", title: "Professional, trained chauffeurs" },
      { icon: "/icons/sanitized.svg", title: "Strict hygiene & sanitization of vehicles" },
      { icon: "/icons/child_safety.svg", title: "Child safety seats on request" },
      { icon: "/icons/gpstracking.svg", title: "GPS tracking & route optimization" },
    ],
  },
  {
    id: 3,
    badge: "PREMIUM AMENITIES",
    title: (
      <>
        Beyond standard luxury
      </>
    ),
    image: "./premium_amenities.png",
    reverse: false,
    features: [
      { icon: "/icons/airport.svg", title: "Personalized welcome signage at airport pickup" },
      { icon: "/icons/assistance_with_luggage.svg", title: "Assistance with luggage" },
      { icon: "/icons/newspapers.svg", title: "Newspapers, magazines, or in car entertainment" },
      { icon: "/icons/scented_interiors.svg", title: "Option for scented interiors and ambient lighting" },
    ],
  },
];

function Features() {
  return (
    <div id="amenities" className="px-8 sm:px-20 py-20">
      <h3 className="flex justify-center text-[#cdaf8c]">
        INCLUDED WITH EVERY RIDE
      </h3>
      <h3 className="flex justify-center text-3xl md:text-5xl font-semibold mb-5 leading-tight py-4">
        Amenities & Comfort
      </h3>

      {sections.map((section) => (
        <section
          key={section.id}
          className={`flex flex-col bg-[#f7f9fd]  sm:flex-row ${
            section.reverse ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Left/Right Image */}
          <div className="w-full sm:w-1/2 h-[40vh] sm:h-[70vh] bg-black">
            <img
              src={section.image}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Side (now centered vertically) */}
          <div className="w-full sm:w-1/2 py-16 sm:py-8 sm:px-20 px-4 flex flex-col justify-center">
            <div className="bg-black w-fit px-3 py-2 text-white text-sm rounded-2xl">
              {section.badge}
            </div>

            <div className="text-3xl sm:text-5xl py-3">{section.title}</div>

            <div className="grid grid-cols-2 py-5 gap-8">
              {section.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-xs"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Features;
