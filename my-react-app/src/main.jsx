import { StrictMode } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "../src/components/Home.jsx";
import Products from "./components/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
);
