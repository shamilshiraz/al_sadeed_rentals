import { useEffect, useState } from "react";

const categories = ["SEDANS", "VANS & MPVs", "SUVs", "ULTRA-LUXURY"];

export default function Fleet() {
  const [cars, setCars] = useState([]);
  const [activeCategory, setActiveCategory] = useState("SUVS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://shining-surprise-39b39707af.strapiapp.com/api/cars?populate=*"
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
    ? cars.filter(
        (car) => car.category?.toUpperCase() === activeCategory
      )
    : [];

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading fleet...
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="uppercase text-amber-500 text-sm font-medium tracking-wider">
            Our Fleet
          </p>
          <h2 className="text-4xl font-semibold mt-2 text-gray-900">
            Our Signature Fleet
          </h2>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No vehicles available in this category.
            </p>
          ) : (
            filteredCars.map((car) => {
              const {
                id,
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
                  key={id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <img
                    src={fullImgUrl}
                    alt={carName}
                    className="w-full h-56 object-contain bg-gray-100"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {carName}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{tagline}</p>
                    <div className="flex justify-between text-xs text-gray-600 mb-4 flex-wrap">
                      <span>🧳 {luggage || 4} Bags</span>
                      <span>👥 {headCount || 4} Seats</span>
                      <span>⏱ {cost5hrs} / 5 hrs</span>
                      <span>⏱ {cost10hrs} / 10 hrs</span>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800 transition-all">
                      Book & Ride
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
