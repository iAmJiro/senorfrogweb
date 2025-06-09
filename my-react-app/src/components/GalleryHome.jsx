import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    {
      default: "/images/shirtimages/shirt1-1.png",
      hover: "/images/shirtimages/shirt1-3.png",
    },
    {
      default: "/images/shirtimages/shirt2-1.png",
      hover: "/images/shirtimages/shirt2-3.png",
    },
    {
      default: "/images/shirtimages/shirt3-1.png",
      hover: "/images/shirtimages/shirt3-3.png",
    },
    {
      default: "/images/shirtimages/shirt4-1.png",
      hover: "/images/shirtimages/shirt4-3.png",
    },
    {
      default: "/images/shirtimages/shirt5-1.png",
      hover: "/images/shirtimages/shirt5-3.png",
    },
    {
      default: "/images/shirtimages/shirt6-1.png",
      hover: "/images/shirtimages/shirt6-3.png",
    },
    {
      default: "/images/shirtimages/shirt7-1.png",
      hover: "/images/shirtimages/shirt7-3.png",
    },
    {
      default: "/images/shirtimages/shirt8-1.png",
      hover: "/images/shirtimages/shirt8-3.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative cursor-pointer">
          {/* Default Image */}
          <img
            src={image.default}
            alt={`Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
          />
          {/* Hover Image */}
          <img
            src={image.hover}
            alt={`Hover Image ${index + 1}`}
            className="absolute top-0 left-0 w-full h-48 object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
