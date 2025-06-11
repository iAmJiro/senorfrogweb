import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="bg-cyan-800 text-white selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] logo">
              FOOTBALL OUTLET NZ
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              <Link to="/" className="hover-line">
                HOME
              </Link>
              <Link to="/products" className="hover-line">
                ORDER
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`w-full h-[2px] bg-white transition-transform duration-300 ${
                  menuActive ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[2px] bg-white transition-opacity duration-300 ${
                  menuActive ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-[2px] bg-white transition-transform duration-300 ${
                  menuActive ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-[60] nav-blur pt-24 transition-all duration-300 ${
          menuActive
            ? "opacity-100 visible flex flex-col justify-center items-center space-y-12"
            : "opacity-0 invisible"
        }`}
      >
        <Link
          to="/"
          onClick={() => setMenuActive(false)}
          className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        >
          HOME
        </Link>
        <Link
          to="/products"
          onClick={() => setMenuActive(false)}
          className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        >
          ORDER
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
