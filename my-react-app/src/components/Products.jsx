import React, { useState } from "react";
import shirt3_1 from "/images/shirtimages/shirt3-1.png";
import shirt4_1 from "/images/shirtimages/shirt4-1.png";

const products = [
  {
    id: 1,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 8 },
      (_, i) => `/images/shirtimages/shirt1-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
  {
    id: 2,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 7 },
      (_, i) => `/images/shirtimages/shirt2-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
  {
    id: 3,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 6 },
      (_, i) => `/images/shirtimages/shirt3-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
  {
    id: 4,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 8 },
      (_, i) => `/images/shirtimages/shirt4-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
  {
    id: 5,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 10 },
      (_, i) => `/images/shirtimages/shirt5-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
  {
    id: 6,
    name: "Product Name",
    price: "$29.99",
    images: Array.from(
      { length: 7 },
      (_, i) => `/images/shirtimages/shirt6-${i + 1}.png`
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
  },
];

const ProductShowcase = () => {
  const [imageIndexes, setImageIndexes] = useState(products.map(() => 0));

  const handleImageChange = (productIndex, direction) => {
    setImageIndexes((prev) =>
      prev.map((currIndex, i) => {
        if (i !== productIndex) return currIndex;
        const length = products[productIndex].images.length;
        return direction === "next"
          ? (currIndex + 1) % length
          : (currIndex - 1 + length) % length;
      })
    );
  };

  return (
    <div className="bg-gray-900 py-16 md:pt-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden group">
                <img
                  src={product.images[imageIndexes[idx]]}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-opacity duration-500 rounded-md"
                />

                {/* Left Arrow */}
                <button
                  onClick={() => handleImageChange(idx, "prev")}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-r focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &#8592;
                </button>
                {/* Right Arrow */}
                <button
                  onClick={() => handleImageChange(idx, "next")}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-2 rounded-l focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &#8594;
                </button>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">
                  {product.price}
                </span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
