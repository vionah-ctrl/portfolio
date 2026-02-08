import { useState } from "react";
import img1 from "../assets/portfolio/img1.jpeg";
import img2 from "../assets/portfolio/img2.jpeg";
import img3 from "../assets/portfolio/img3.jpeg";
import img4 from "../assets/portfolio/img4.jpeg";
import img5 from "../assets/portfolio/img5.jpeg";
import img6 from "../assets/portfolio/img6.jpeg";
import img7 from "../assets/portfolio/img7.jpeg";
import img8 from "../assets/portfolio/img8.jpeg";

const categories = ["All", "Nature", "Travel", "Portraits", "Lifestyle"];

const images = [
  { src: img1, category: "Nature" },
  { src: img2, category: "Nature" },
  { src: img3, category: "Travel" },
  { src: img4, category: "Travel" },
  { src: img5, category: "Portraits" },
  { src: img6, category: "Nature" },
  { src: img7, category: "Lifestyle" },
  { src: img8, category: "Lifestyle" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <section className="bg-[#f3efe8] py-12">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading with lines */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 h-px bg-[#c9a66b]"></div>
          <h2 className="text-4xl font-serif text-gray-800 px-6 text-center">
            Portfolio
          </h2>
          <div className="flex-1 h-px bg-[#c9a66b]"></div>
        </div>
        <p className="text-center text-sm text-gray-600 mb-12">
          A Selection of My Best Work
        </p>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/70 backdrop-blur-md rounded-md p-1 flex gap-1 shadow">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm rounded-md transition ${
                  active === cat
                    ? "bg-[#5a5f4a] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {filtered.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow group"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
