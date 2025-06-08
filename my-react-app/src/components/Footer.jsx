import React from "react";

const Footer = () => {
  const navLinks = ["Home", "About", "Services", "Media", "Gallery", "Contact"];
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: "https://img.icons8.com/fluent/30/000000/facebook-new.png",
    },
    {
      href: "https://linkedin.com",
      icon: "https://img.icons8.com/fluent/30/000000/linkedin-2.png",
    },
    {
      href: "https://instagram.com",
      icon: "https://img.icons8.com/fluent/30/000000/instagram-new.png",
    },
    {
      href: "https://messenger.com",
      icon: "https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png",
    },
    {
      href: "https://twitter.com",
      icon: "https://img.icons8.com/fluent/30/000000/twitter.png",
    },
  ];

  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {navLinks.map((link, index) => (
          <a key={index} className="hover:text-gray-900" href="#">
            {link}
          </a>
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
        &copy; 2022 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
