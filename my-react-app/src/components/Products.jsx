import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

const products = [
  {
    id: 1,
    name: "2006/07 AC Milan Home Jersey",
    price: "$64.99",
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
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt2-${i + 1}.png`
    ),
    description: "A true classic from the 1998 World Cup in France",
  },
  {
    id: 3,
    name: "2004 Brazil Home Jersey",
    price: "$64.99",
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
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt4-${i + 1}.png`
    ),
    description: "One of the most iconic football shirts of the ‘90s",
  },
  {
    id: 5,
    name: "2006 France Away Jersey",
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt8-${i + 1}.png`
    ),
    description: "Worn in the 2007 Champions League Final in Athens",
  },
  {
    id: 9,
    name: "1999/2000 Real Madrid Home Jersey",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt9-${i + 1}.png`
    ),
    description: "Worn during a season when Real clinched the La Liga title",
  },
  {
    id: 10,
    name: "1998/99 Inter Milan Third Jersey",
    price: "$64.99",
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
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt11-${i + 1}.jpg`
    ),
    description: "A standout from their semi-final run in Europe",
  },
  {
    id: 12,
    name: "1998 England Home Jersey",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt12-${i + 1}.jpg`
    ),
    description:
      "Worn at the 1998 World Cup by icons like Beckham, Shearer, and Owen",
  },
  {
    id: 13,
    name: "FC Barcelona 16/17 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt13-${i + 1}.jpg`
    ),
    description:
      "Worn during a competitive season with Qatar Airways as the main sponsor",
  },
  {
    id: 14,
    name: "Santos FC 11/12 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt14-${i + 1}.jpg`
    ),
    description:
      "A deep red home shirt celebrating Liverpool’s 125th anniversary",
  },
  {
    id: 15,
    name: "Liverpool FC 17/18 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt15-${i + 1}.jpg`
    ),
    description:
      "A deep red home shirt celebrating Liverpool’s 125th anniversary",
  },
  {
    id: 16,
    name: "Paris Saint-Germain 99/00 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt16-${i + 1}.jpg`
    ),
    description: "This kit was worn during a transitional season for PSG",
  },
  {
    id: 17,
    name: "Liverpool FC 10/11 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt17-${i + 1}.jpg`
    ),
    description: "This kit marked the arrival of Kenny Dalglish as manager",
  },
  {
    id: 18,
    name: "FC Barcelona 10/11",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt18-${i + 1}.jpg`
    ),
    description:
      "Was worn by an iconic squad including Messi, Xavi, and Iniesta",
  },
  {
    id: 19,
    name: "Real Madrid 15/16 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt19-${i + 1}.jpg`
    ),
    description: "This kit saw Madrid claim the UEFA Champions League title",
  },
  {
    id: 20,
    name: "Real Madrid 16/17 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt20-${i + 1}.jpg`
    ),
    description:
      "This kit became iconic as Madrid secured their 12th Champions League title",
  },
  {
    id: 21,
    name: "Argentina 2006 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt21-${i + 1}.jpg`
    ),
    description:
      "This kit was donned by legends like Juan Román Riquelme and Lionel Messi",
  },
  {
    id: 22,
    name: "Croatia 2006 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt22-${i + 1}.jpg`
    ),
    description: "This kit was worn during the 2006 FIFA World Cup",
  },
  {
    id: 23,
    name: "FC Barcelona 10/11 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt23-${i + 1}.jpg`
    ),
    description:
      "Commemorating Barcelona’s 2011 Champions League triumph over Manchester United",
  },
  {
    id: 24,
    name: "Arsenal 03/04 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt24-${i + 1}.jpg`
    ),
    description: "This iconic kit was worn during Arsenal’s Invincibles season",
  },
  {
    id: 25,
    name: "Mexico 2010 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt25-${i + 1}.jpg`
    ),
    description: "Worn during the 2010 FIFA World Cup",
  },
  {
    id: 26,
    name: "Paris Saint-Germain 17/18 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt26-${i + 1}.jpg`
    ),
    description: "This kit saw the arrival of Neymar and Mbappé",
  },
  {
    id: 27,
    name: "Chelsea 14/15 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt27-${i + 1}.jpg`
    ),
    description: "This kit saw Chelsea dominate the Premier League",
  },
  {
    id: 28,
    name: "Argentina 11/12 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt28-${i + 1}.jpg`
    ),
    description: "This kit was sported by stars like Messi, Agüero, and Tevez",
  },
  {
    id: 29,
    name: "Argentina 22/23 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt29-${i + 1}.jpg`
    ),
    description: "Worn during the 2022 FIFA World Cup",
  },
  {
    id: 30,
    name: "FC Barcelona 99/00",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt30-${i + 1}.jpg`
    ),
    description:
      "This kit was created to celebrate Barcelona’s 100th anniversary (1899-1999)",
  },
  {
    id: 31,
    name: "Atlético Madrid 04/05",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt31-${i + 1}.jpg`
    ),
    description: "Worn during select matches in the 2004/05 season",
  },
  {
    id: 32,
    name: "Portugal 22/23 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt32-${i + 1}.jpg`
    ),
    description:
      "This kit was worn during Portugal’s 2022 FIFA World Cup campaign",
  },
  {
    id: 33,
    name: "Manchester City 99/00",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt33-${i + 1}.jpg`
    ),
    description: "Worn during Manchester City's promotion-winning campaign",
  },
  {
    id: 34,
    name: "Juventus 15/16 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt34-${i + 1}.jpg`
    ),
    description:
      "A striking pink away shirt, featuring black Adidas stripes and Jeep as the main sponsor.",
  },
  {
    id: 35,
    name: "AC Milan 06/07 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt35-${i + 1}.jpg`
    ),
    description: "This kit was donned by legends like Kaká and Paolo Maldini",
  },
  {
    id: 36,
    name: "Manchester United 08/09",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt36-${i + 1}.jpg`
    ),
    description:
      "Worn during a season where United won the Premier League and reached the Champions League final",
  },
  {
    id: 37,
    name: "Germany 14/15 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt37-${i + 1}.jpg`
    ),
    description:
      "This kit became legendary as Germany defeated Argentina in the final",
  },
  {
    id: 38,
    name: "Nigeria 98/00 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt38-${i + 1}.jpg`
    ),
    description: "This kit was worn during Nigeria’s 1998 World Cup campaign",
  },
  {
    id: 39,
    name: "Arsenal 94/95 Away",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt39-${i + 1}.jpg`
    ),
    description:
      "This kit became one of Arsenal’s most unique and recognizable designs",
  },
  {
    id: 40,
    name: "France 98 Home",
    price: "$64.99",
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/shirtimages/shirt40-${i + 1}.jpg`
    ),
    description:
      "This iconic kit was worn during France's historic World Cup triumph",
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
  const [formData, setFormData] = useState({
    size: "",
    name: "",
    number: "",
    email: "",
  });

  const [showEmailStep, setShowEmailStep] = useState(false);
  const handleNextStep = () => {
    const templateParams = {
      size: formData.size,
      top_name: formData.topName || "N/A",
      number: formData.number || "N/A",
      email: formData.email,
    };

    emailjs
      .send(
        "service_6i599gq",
        "template_goxcei7",
        templateParams,
        "go5Pq4Cfcv3H503_h"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Order sent! We will contact you soon!");
          setSelectedProduct(null); // optional: close modal
          setShowEmailStep(false); // optional: reset to first screen
        },
        (err) => {
          console.error("Email failed...", err);
          alert("Failed to send email. Please try again.");
        }
      );
  };
  useEffect(() => {
    document.body.style.overflow = showEmailStep ? "hidden" : "auto";
  }, [showEmailStep]);

  return (
    <div className="bg-gray-900 py-26 md:pt-38 md:pb-4 min-h-screen">
      <div className="container mx-auto px-4 md:mt-0 mt-6">
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
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && modalImages && (
        <div className="fixed inset-0 flex items-center justify-center bg-black m-4 md:m-0 bg-opacity-50 p-4 md:p-10 h-full">
          {showEmailStep ? (
            <div className="bg-white p-6 md:mt-16 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Confirm Your Details
              </h2>

              <img
                src={modalImages[0]}
                alt={selectedProduct.name}
                className="w-full h-48 md:h-64 object-contain rounded-md mb-4"
              />

              <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-sm md:text-base w-full md:w-1/2">
                  Size: {formData.size}
                </p>
                <p className="text-sm md:text-base w-full md:w-1/2">
                  Number: {formData.number?.toString().trim() || "N/A"}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <p className="text-sm md:text-base w-full md:w-1/2">
                  Name: {formData.topName?.trim() || "N/A"}
                </p>
              </div>

              <h1 className="pb-2 text-sm md:text-base text-center">
                We will get in contact with you to confirm your order! Please
                include your email address below.
              </h1>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="p-2 border rounded-md w-full text-sm md:text-base"
              />

              <div className="flex flex-col md:flex-row justify-between mt-6 space-y-2 md:space-y-0">
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 text-sm md:text-base"
                  onClick={() => setShowEmailStep(false)}
                >
                  Back
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm md:text-base"
                  onClick={() => {
                    console.log("Submit order");
                    handleNextStep();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`bg-white p-6 mt-16 md:mt-0 md:p-8 rounded-lg shadow-lg ${
                isExpanded ? "max-w-5xl" : "max-w-4xl"
              } w-full flex flex-col md:flex-row`}
            >
              {/* Left Column */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={modalImages[0]}
                  alt={selectedProduct.name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-md object-contain"
                />
                <div className="flex space-x-2 mt-4">
                  {modalImages.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={selectedProduct.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer hover:opacity-75"
                    />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="mt-4 md:ml-6 flex flex-col items-center md:items-start">
                <h2 className="text-xl md:text-2xl font-bold">
                  {selectedProduct.name}
                </h2>
                <p className="text-sm md:text-base text-gray-500 text-center md:text-left">
                  {selectedProduct.description}
                </p>

                <label className="mt-4 text-gray-900 font-bold">
                  Choose Size:
                </label>
                <select
                  className="mt-2 p-2 border rounded-md w-full text-sm md:text-base"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, size: e.target.value }))
                  }
                >
                  <option value="">Select</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                  <option value="XXL">Double Extra Large</option>
                  <option value="XXXL">Triple Extra Large</option>
                </select>

                <div className="mt-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isExpanded}
                      onChange={() => setIsExpanded(!isExpanded)}
                      className="mr-2"
                    />
                    <span className="text-gray-900 font-bold">
                      Add Custom Name & Number (+$5.00)
                    </span>
                  </label>

                  {isExpanded && (
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
                      <div className="flex flex-row space-x-4 w-full">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          className="p-2 border rounded-md w-1/2 text-sm md:text-base"
                          value={formData.topName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              topName: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="number"
                          placeholder="Num."
                          className="p-2 border rounded-md w-1/2 text-sm md:text-base"
                          value={formData.number}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              number: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Display */}
                <div className="mt-4 text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold text-gray-900">
                    {selectedProduct.price}
                  </p>
                </div>

                <div className="overflow-hidden relative w-full min-h-[65px] md:min-h-[150px]">
                  {/* Other modal content */}

                  <div className="absolute bottom-0 w-full flex justify-center md:justify-end md:right-4 space-x-4 p-4">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 text-sm md:text-base"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => setShowEmailStep(true)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 text-sm md:text-base"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default ProductShowcase;
