import { useEffect, useState } from "react";

const categories = ["SEDANS", "MPVs", "SUVs", "ULTRA-LUXURY", "VANS & BUSES"];

export default function Fleet() {
  const [cars, setCars] = useState([]);
  const [activeCategory, setActiveCategory] = useState("SEDANS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://shining-surprise-39b39707af.strapiapp.com/api/cars?populate=*&pagination[pageSize]=100"
        );
        const json = await res.json();
        setCars(json.data || []);
      } catch (error) {
        console.error("Error fetching fleet:", error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredCars = Array.isArray(cars)
    ? cars
        .filter(
          (car) =>
            car.category?.toUpperCase() === activeCategory.toUpperCase()
        )
        .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
    : [];

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading fleet...
      </div>
    );
  }

  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="uppercase text-amber-500 text-sm font-medium tracking-wider">
            Our Fleet
          </p>
          <h2 className="text-4xl font-semibold mt-2 text-gray-900">
            Our Signature Fleet
          </h2>
        </div>

        {/* ---------- DESKTOP (TABS + GRID) ---------- */}
        <div className="hidden lg:block">
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory.toUpperCase() === cat.toUpperCase()
                    ? "bg-black text-white shadow"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredCars.length === 0 ? (
            <p className="text-center text-gray-500">
              No vehicles available in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>

        {/* ---------- MOBILE (CAROUSEL PER CATEGORY) ---------- */}
        <div className="block lg:hidden space-y-12">
          {categories.map((cat) => {
            const categoryCars = cars.filter(
              (car) => car.category?.toUpperCase() === cat.toUpperCase()
            );
            if (categoryCars.length === 0) return null;

            return (
              <div key={cat}>
                {/* Category title */}
                <div className="flex  mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.charAt(0) + cat.slice(1).toLowerCase()}
                  </h3>
                </div>

                {/* Carousel */}
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

/* --------------------------
   Reusable Car Card Component
--------------------------- */
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

  const imgUrl =
    carImage && carImage.length > 0
      ? carImage[0].url ||
        carImage[0].formats?.thumbnail?.url ||
        "/placeholder.jpg"
      : "/placeholder.jpg";

  const fullImgUrl = imgUrl.startsWith("http")
    ? imgUrl
    : `https://shining-surprise-39b39707af.media.strapiapp.com${imgUrl}`;

  return (
    <div
      className="
        bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all
        w-[90vw] sm:w-auto min-h-[360px] flex-shrink-0 flex flex-col
      "
    >
      {/* Image Section */}
      <div className="bg-gray-100 p-6 flex items-center justify-center h-[200px]">
        <img
          src={fullImgUrl}
          alt={carName}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        {/* Title + Info */}
        <div>
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
        </div>

        {/* Prices + Book Button */}
        <div className="flex gap-2 mt-4 flex-wrap items-center">
          <span className="px-2 sm:px-4 py-2 bg-gray-100 rounded-xl text-xs">
            QAR {cost5hrs} / 5hr
          </span>
          <span className="px-2 sm:px-4 py-2 bg-gray-100 rounded-xl text-xs">
            QAR {cost10hrs} / 10hr
          </span>
          <a
            href={`https://wa.me/97470750055?text=I%20am%20interested%20in%20${encodeURIComponent(
              car.carName
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 sm:px-4 py-2 bg-black text-white rounded-xl text-xs flex-1 text-center"
          >
            Book a ride
          </a>
        </div>
      </div>
    </div>
  );
}


