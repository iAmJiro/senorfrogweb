import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Order", href: "/products" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/footballoutlet.nz/?hl=en",
      icon: "https://img.icons8.com/fluent/30/000000/instagram-new.png",
    },
  ];

  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {navLinks.map((link, index) => (
          <Link key={index} className="hover:text-gray-900" to={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} alt={`${social.href} icon`} />
          </a>
        ))}
      </div>

      {/* Footer Copyright */}
      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
