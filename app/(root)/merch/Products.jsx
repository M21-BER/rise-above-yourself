import { FaCartPlus } from "react-icons/fa";

export default function ProductSection() {
  const products = [
    "Campus Shoes – Yellow",
    "Golf T-Shirt",
    "Jeans – Gray",
    "Nike Shoes",
    "Polo T-Shirt – Yellow",
    "Sneaker Skater Shoes",
    "Soccer Shoes",
    "Sports Shoes",
    "Sweater Colourful",
    "Sweater Red",
    "T-Shirt Green",
    "T-Shirt Pink",
  ];

  return (
    <section className=" bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Shop Our Products
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <aside className="col-span-1">
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-white">Filter by Price</h3>
              <input type="range" min="5" max="100" className="w-full" />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-white">
                Filter by Category
              </h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <input type="checkbox" /> Shoes
                </li>
                <li>
                  <input type="checkbox" /> T-Shirts
                </li>
                <li>
                  <input type="checkbox" /> Sweaters
                </li>
                <li>
                  <input type="checkbox" /> Jeans
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">Filter by Color</h3>
              <div className="flex gap-2">
                {["red", "blue", "green", "yellow"].map((color, idx) => (
                  <div
                    key={idx}
                    className={`w-5 h-5 rounded-full bg-${color}-500 border`}
                  ></div>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((name, idx) => (
              <div
                key={idx}
                className="border border-gray-700 p-3 flex flex-col items-center text-center"
              >
                <div className="w-full h-40 bg-gray-800 mb-2"></div>
                <p className="text-sm font-medium mb-1 text-white">{name}</p>
                <button className="flex items-center gap-2 bg-[#e30803] text-white px-3 py-1 text-xs sm:text-sm md:text-base sm:px-4 sm:py-2 rounded">
                  <FaCartPlus className="text-sm sm:text-base" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
