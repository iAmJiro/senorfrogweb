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
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={hoveredIndex === index ? image.hover : image.default}
            alt={`Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg transition-opacity duration-500 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
