import React, { useState } from "react";
import Footer from "./Footer";
import shirt3_1 from "/images/shirtimages/shirt3-1.png";
import shirt4_1 from "/images/shirtimages/shirt4-1.png";

const products = [
  {
    id: 1,
    name: "2006/07 AC Milan Home Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt1-${i + 1}.png`
    ),
    description:
      "Celebrate a legendary season with the iconic 06/07 AC Milan home shirt",
  },
  {
    id: 2,
    name: "1998 Argentina Away Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt2-${i + 1}.png`
    ),
    description: "A true classic from the 1998 World Cup in France",
  },
  {
    id: 3,
    name: "2004 Brazil Home Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt3-${i + 1}.png`
    ),
    description:
      "The 2004 Brazil home shirt is a vibrant tribute to the beautiful game",
  },
  {
    id: 4,
    name: "1994 Germany Home Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt4-${i + 1}.png`
    ),
    description: "One of the most iconic football shirts of the ‘90s",
  },
  {
    id: 5,
    name: "2006 France Away Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt5-${i + 1}.png`
    ),
    description:
      "Worn during France’s memorable run to the 2006 World Cup final",
  },
  {
    id: 6,
    name: "2006/07 Manchester United Home Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt6-${i + 1}.png`
    ),
    description:
      "This 06/07 Manchester United home shirt marked the start of a new era",
  },
  {
    id: 7,
    name: "2000/01 FC Barcelona x Travis Scott Retro Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt7-${i + 1}.png`
    ),
    description:
      "This limited-edition jersey reimagines Barça's classic 2000/01 home kit",
  },
  {
    id: 8,
    name: "2006/07 AC Milan Away Jersey – UCL Final",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt8-${i + 1}.png`
    ),
    description: "Worn in the 2007 Champions League Final in Athens",
  },
  {
    id: 9,
    name: "1999/2000 Real Madrid Home Jersey",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt9-${i + 1}.png`
    ),
    description: "Worn during a season when Real clinched the La Liga title",
  },
  {
    id: 10,
    name: "1998/99 Inter Milan Third Jersey – Champions League Edition",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt10-${i + 1}.png`
    ),
    description:
      "Worn by Ronaldo, Zanetti, and Baggio during their Champions League campaign",
  },
  {
    id: 11,
    name: "2006/07 Manchester United Home Jersey – UCL Edition",
    price: "$59.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt11-${i + 1}.jpg`
    ),
    description: "A standout from their semi-final run in Europe",
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
  const [modalImages, setModalImages] = useState(null);
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
    setModalImages([...product.images]); // Store image order for swapping
  };
  const swapImages = (index) => {
    const newImages = [...modalImages];
    [newImages[0], newImages[index]] = [newImages[index], newImages[0]]; // Swap first image with clicked one
    setModalImages(newImages);
  };

  const [customize, setCustomize] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-gray-900 py-26 md:pt-38 md:pb-4 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 md:min-h-[400px] text-sm sm:text-base flex flex-col"
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

              {/* Push price and button to bottom */}
              <div className="flex items-center justify-between mt-auto">
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
      {selectedProduct && modalImages && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 md:pt-10">
          <div
            className={`bg-white p-8 rounded-lg shadow-lg ${
              isExpanded ? "max-w-5xl" : "max-w-4xl"
            } w-full flex`}
          >
            <div className="flex flex-col items-start">
              {/* Main Image */}
              <img
                src={modalImages[0]}
                alt={selectedProduct.name}
                className="w-64 h-64 rounded-md"
              />
              {/* Thumbnail Images */}
              <div className="flex space-x-2 mt-4">
                {modalImages.slice(1).map((image, index) => (
                  <img
                    key={index + 1}
                    src={image}
                    alt={selectedProduct.name}
                    className="w-20 h-20 rounded-md cursor-pointer hover:opacity-75"
                    onClick={() => swapImages(index + 1)}
                  />
                ))}
              </div>
            </div>

            {/* Right Panel - Size & Customization */}
            <div className="ml-6 flex flex-col">
              <h2 className="text-2xl font-bold text-left">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-500 text-left w-2/3">
                {selectedProduct.description}
              </p>

              {/* Shirt Size Selection */}
              <label className="mt-4 text-gray-900 font-bold">
                Choose Size:
              </label>
              <select className="mt-2 p-2 border rounded-md">
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>

              {/* Checkbox & Inputs Aligned Horizontally */}
              <div className="mt-4 flex items-center space-x-4">
                {/* Checkbox for Customization */}
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isExpanded}
                    onChange={() => setIsExpanded(!isExpanded)}
                    className="mr-2"
                  />
                  <span className="text-gray-900 font-bold">
                    Add Custom Name & Number
                  </span>
                </label>

                {/* Inputs Appear to the Right When Checkbox is Checked */}
                {isExpanded && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter Top Name"
                      className="p-2 border rounded-md w-40"
                    />
                    <input
                      type="text"
                      placeholder="Enter Bottom Name"
                      className="p-2 border rounded-md w-40"
                    />
                    <input
                      type="number"
                      placeholder="Number"
                      className="p-2 border rounded-md w-20"
                    />
                  </>
                )}
              </div>

              <p className="text-gray-900 font-bold mt-4 text-left">
                {selectedProduct.price}
              </p>

              {/* Buttons Section */}
              {/* Buttons Section - Positioned at the Bottom Right */}
              {/* Buttons Section - Anchored to the Bottom of the White Box */}
              <div className="flex justify-end space-x-4 mt-auto">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700"
                >
                  Close
                </button>
                <button
                  onClick={() => handleNextStep()}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default ProductShowcase;
