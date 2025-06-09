import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "../public/images/shirtimages/shirt1-1.png",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ];

  const placeholderImage = "../public/images/shirtimages/shirt1-1.png"; // Placeholder

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative cursor-pointer">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg transition-opacity duration-300"
            onMouseEnter={(e) => (e.target.src = placeholderImage)}
            onMouseLeave={(e) => (e.target.src = src)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
