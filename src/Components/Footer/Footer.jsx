import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100  ">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <span className="text-2xl font-extrabold text-primary tracking-tight">
           Skillora
          </span>
          <p className=" text-sm mt-1">
            &copy; {new Date().getFullYear()} Skillora. All rights reserved.
          </p>
        </div>
        {/* Links */}
        <div className="flex gap-6">
          <a href="/" className=" text-sm hover:text-primary transition">
            Home
          </a>
          <a href="/services" className=" text-sm hover:text-primary transition">
            Services
          </a>
          <a href="/about" className=" text-sm hover:text-primary transition">
            About
          </a>
          <a href="/contact" className=" text-sm hover:text-primary transition">
            Contact
          </a>
        </div>
        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
