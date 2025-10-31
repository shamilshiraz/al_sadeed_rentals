import { useState } from "react";
import carsData from "../../cars.json";

const categories = ["SEDANS", "MPVs", "SUVs", "ULTRA-LUXURY", "VANS & BUSES"];

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("SEDANS");

  const filteredCars = carsData.filter(
    (car) => car.category?.toUpperCase() === activeCategory.toUpperCase()
  );

  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="uppercase text-[#cdaf8c] text-sm font-medium tracking-wider">
            Our Fleet
          </p>
          <h2 className="text-4xl font-semibold mt-2 text-gray-900">
            Our Signature Fleet
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white shadow"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="block lg:hidden space-y-12">
          {categories.map((cat) => {
            const categoryCars = carsData.filter(
              (car) => car.category?.toUpperCase() === cat.toUpperCase()
            );
            if (categoryCars.length === 0) return null;

            return (
              <div key={cat}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {cat}
                </h3>
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 pb-2 snap-x snap-mandatory scroll-smooth">
                    {categoryCars.map((car) => (
                      <div key={car.id} className="min-w-[95%] snap-start">
                        <CarCard car={car} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }) {
  const {
    carName,
    tagline,
    luggage,
    headCount,
    cost5hrs,
    cost10hrs,
    carImage,
  } = car;

  const imgUrl = `/cars/${carImage}`; // Should exist in public/assets/

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all w-[90vw] sm:w-auto min-h-[400px] flex-shrink-0 flex flex-col">
      {/* IMAGE: No padding */}
      <div className="bg-gray-100 flex items-center justify-center h-[200px]">
        <img
          src={imgUrl}
          alt={carName}
          className="w-full h-full object-contain"
          onError={(e) => (e.target.src = "/placeholder.jpg")}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <h3 className="font-semibold text-xl text-gray-900">{carName}</h3>
        <div className="flex justify-between mt-2 text-gray-500 text-sm">
          <p className="truncate">{tagline}</p>
          <div className="flex items-center gap-1">
            <img src="/icons/PERSON.svg" alt="person" className="w-4 h-4" />
            <span>{headCount}</span>
            <span>|</span>
            <img src="/icons/BAG.svg" alt="bag" className="w-4 h-4" />
            <span>{luggage}</span>
          </div>
        </div>

        {/* PRICES & BUTTON */}
        <div className="flex-nowrap flex gap-2 w-full mt-6 items-between justify-between">
          <div className="px-1 h-12 flex items-center bg-gray-100 rounded-xl text-xs">
            QAR {cost5hrs} / 5hr
          </div>
          <div className="px-1 h-12 flex items-center bg-gray-100 rounded-xl text-xs">
            QAR {cost10hrs} / 10hr
          </div>
                    <div className="px-1 h-12 flex items-between justify-between bg-black rounded-xl text-xs">
          <a
            href={`https://wa.me/97470750055?text=I%20am%20interested%20in%20${encodeURIComponent(carName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 h-12 flex items-center bg-black text-white rounded-xl text-xs gap-2 text-center whitespace-nowrap"
            style={{ minWidth: 120 }}
          >
            <img src="/icons/CAR.svg" className="h-4 " alt="" />
            Book a ride
          </a>
          </div>
          

        </div>
      </div>
    </div>
  );
}


