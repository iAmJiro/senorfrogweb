import React, { useState } from "react";
import shirt3_1 from "/images/shirtimages/shirt3-1.png";
import shirt4_1 from "/images/shirtimages/shirt4-1.png";

const products = [
  {
    id: 1,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt1-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 2,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt2-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 3,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt3-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 4,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt4-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 5,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt5-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 6,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt6-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 7,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt7-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 8,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt8-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 9,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt9-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 10,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt10-${i + 1}.png`
    ),
    description: "I love football",
  },
  {
    id: 11,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt11-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 12,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt12-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 13,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt13-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 14,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt14-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 15,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt15-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 16,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt16-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 17,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt17-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 18,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt18-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 19,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt19-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 20,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt20-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 21,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt21-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 22,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt22-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 23,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt23-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 24,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt24-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 25,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt25-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 26,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt26-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 27,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt27-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 28,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt28-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 29,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt29-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 30,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt30-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 31,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt31-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 32,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt32-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 33,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt33-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 34,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt34-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 35,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt35-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 36,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt36-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 37,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt37-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 38,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt38-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 39,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt39-${i + 1}.jpg`
    ),
    description: "I love football",
  },
  {
    id: 40,
    name: "Product Name",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt40-${i + 1}.jpg`
    ),
    description: "I love football",
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-gray-900 py-26 md:py-16 md:pt-36 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 md:min-h-[400px] text-sm sm:text-base"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={product.images[imageIndexes[idx]]}
                  alt={product.name}
                  className="w-full h-auto sm:h-48 md:h-64 object-cover transition-opacity duration-500 rounded-md"
                />

                {/* Left Arrow */}
                <button
                  onClick={() => handleImageChange(idx, "prev")}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-1 sm:p-2 rounded-r focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &#8592;
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleImageChange(idx, "next")}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-700 hover:bg-gray-200 p-1 sm:p-2 rounded-l focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  &#8594;
                </button>
                <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 sm:mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2 sm:mt-4">
                <span className="text-gray-900 font-bold text-base sm:text-lg">
                  {product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-full font-bold hover:bg-gray-800 text-sm md:text-xl w-full sm:w-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="text-gray-500">{selectedProduct.description}</p>
            <div className="flex space-x-2 mt-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={selectedProduct.name}
                  className="w-16 h-16 rounded-md"
                />
              ))}
            </div>
            <p className="text-gray-900 font-bold mt-4">
              {selectedProduct.price}
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
