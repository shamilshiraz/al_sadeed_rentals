import { useEffect, useState } from "react";

const categories = ["SEDANS", "VANS & MPVs", "SUVs", "ULTRA-LUXURY"];

export default function Fleet() {
  const [cars, setCars] = useState([]);
  const [activeCategory, setActiveCategory] = useState("SUVs");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
"https://shining-surprise-39b39707af.strapiapp.com/api/cars?populate=*&pagination[pageSize]=100"
        );
        const json = await res.json();
        console.log("All cars:", json.data);
        console.log("Categories:", json.data.map(car => car.category));
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
        (car) => car.category?.toUpperCase() === activeCategory.toUpperCase()
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
    <section id="fleet" className="py-16 bg-gray-50">
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
          <div>
            {/* Mobile Carousel */}
            <div className="block sm:hidden overflow-x-auto whitespace-nowrap scroll-smooth scroll-pl-4 -ml-4 pl-4 pb-4 snap-x">
              <div className="inline-flex gap-4 pr-4">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all w-[80vw] snap-start"
                  >
                    <div className="bg-gray-100 p-6 flex items-center justify-center">
                      <img
                        src={
                          car.carImage?.[0]?.url?.startsWith("http")
                            ? car.carImage[0].url
                            : `https://shining-surprise-39b39707af.media.strapiapp.com${car.carImage?.[0]?.url || ""}`
                        }
                        alt={car.carName}
                        className="w-full h-40 object-contain"
                      />
                    </div>
                    <div className="py-5 px-4">
                      <h3 className="font-semibold text-xl text-gray-900">{car.carName}</h3>
                      <div className="flex justify-between mt-2 text-gray-500 text-sm">
                        <p>{car.tagline}</p>
                        <div className="flex items-center gap-1">
                          <img src="/icons/PERSON.svg" alt="person" className="w-4 h-4" />
                          <span>{car.headCount}</span>
                          <span>|</span>
                          <img src="/icons/BAG.svg" alt="bag" className="w-4 h-4" />
                          <span>{car.luggage}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-4 py-2 bg-gray-100 rounded-xl text-xs">
                          QAR {car.cost5hrs} / 5hr
                        </span>
                        <span className="px-4 py-2 bg-gray-100 rounded-xl text-xs">
                          QAR {car.cost10hrs} / 10hr
                        </span>
                        <span className="px-4 py-2 bg-black text-white rounded-xl text-xs">
                          Book a ride
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => {
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
                    <div className="bg-gray-100 p-6 flex items-center justify-center">
                      <img
                        src={fullImgUrl}
                        alt={carName}
                        className="w-full h-40 object-contain"
                      />
                    </div>
                    <div className="py-5 px-4">
                      <h3 className="font-semibold text-xl text-gray-900">{carName}</h3>
                      <div className="flex justify-between mt-2 text-gray-500 text-sm">
                        <p>{tagline}</p>
                        <div className="flex items-center gap-1">
                          <img src="/icons/PERSON.svg" alt="person" className="w-4 h-4" />
                          <span>{headCount}</span>
                          <span>|</span>
                          <img src="/icons/BAG.svg" alt="bag" className="w-4 h-4" />
                          <span>{luggage}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        <span className="px-4 py-2 bg-gray-100 rounded-xl text-xs">
                          QAR {cost5hrs} / 5hr
                        </span>
                        <span className="px-4 py-2 bg-gray-100 rounded-xl text-xs">
                          QAR {cost10hrs} / 10hr
                        </span>
                        <span className="px-4 py-2 bg-black text-white rounded-xl text-xs">
                          Book a ride
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}