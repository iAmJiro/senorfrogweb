import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="bg-cyan-800 text-white selection:bg-white selection:text-black">
      <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="text-2xl sm:text-3xl font-light tracking-[0.3em] logo">
              FOOTBALL OUTLET NZ
            </div>
            <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              <Link to="/" className="hover-line">
                HOME
              </Link>
              <Link to="/products" className="hover-line">
                ORDER
              </Link>
            </div>
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className="w-full h-[1px] bg-white transform transition-transform origin-right"
                style={{ transform: menuActive ? "rotate(-45deg)" : "none" }}
              ></span>
              <span
                className="w-full h-[1px] bg-white transform transition-transform origin-right"
                style={{ transform: menuActive ? "rotate(45deg)" : "none" }}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 bg-black z-40 nav-blur pt-24 ${
          menuActive
            ? "flex flex-col justify-center items-center space-y-12"
            : "hidden"
        }`}
      >
        <a
          href="#"
          className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        >
          ORDER
        </a>
      </div>
    </div>
  );
}
export default Navbar;
