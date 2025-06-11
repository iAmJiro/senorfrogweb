import React from "react";
import "../App.css";
import GalleryHome from "./GalleryHome";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homeMotherDiv">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/legends.webp"
            alt="Luxury Suit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 image-gradient"></div>
        </div>

        {/* Text at Bottom-Left */}
        <div className="absolute bottom-20 left-6 text-white text-lg sm:text-xl font-light tracking-wide">
          Elegance in Every Stitch.
        </div>

        <Link
          to="/Products"
          className="absolute bottom-5 left-8 px-6 py-3 border border-yellow-600 text-white hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-[0.2em]"
        >
          PRODUCTS
        </Link>
      </div>
      <div class="overflow-hidden py-4 sm:py-8 bg-black text-white border-y border-black/20">
        <div class="whitespace-nowrap marquee inline-block text-[80px] sm:text-[120px] md:text-[180px] font-light leading-none opacity-90">
          ATHLETE WEAR &nbsp;&nbsp;&nbsp; ATHLETE WEAR &nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <h1 className="text-center pt-10 text-3xl">
        {" "}
        WE OFFER HIGH QUALITY JERSEYS
      </h1>
      <GalleryHome></GalleryHome>
      <Link
        to="/products"
        className="mb-2 md:pb-0 block w-fit mx-auto px-6 py-3 md:my-4 text-lg font-semibold text-white bg-black rounded-lg shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all"
      >
        Products
      </Link>
      <h1 className="bg-black text-center pt-5 text-3xl text-white py-4">
        {" "}
        AND MANY MORE ITEMS
      </h1>

      <Footer></Footer>
    </div>
  );
}

export default Home;
