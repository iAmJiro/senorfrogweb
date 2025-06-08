import React from "react";
import "../App.css";
import GalleryHome from "./GalleryHome";
function Home() {
  return (
    <div className="homeMotherDiv">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src="../public/images/crowd.jpeg"
            alt="Luxury Suit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 image-gradient"></div>
        </div>

        {/* Text at Bottom-Left */}
        <div className="absolute bottom-20 left-6 text-white text-lg sm:text-xl font-light tracking-wide">
          Elegance in Every Stitch.
        </div>

        {/* Get in Touch Button - Positioned Slightly to the Right */}
        <button className="absolute bottom-5 left-8 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-[0.2em]">
          GET IN TOUCH
        </button>
      </div>
      <GalleryHome></GalleryHome>
    </div>
  );
}

export default Home;
