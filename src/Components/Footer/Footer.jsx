import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300 w-full shadow-xl  ">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-2">
            <svg
              width="60"
              height="60"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
            >
              <title>Skillora Logo</title>
              <path d="M32 4.5C21.2 4.5 12.5 13.2 12.5 24c0 7.8 4.6 14.5 11.1 17.6v4.3c0 2.2 1.8 3.9 4 3.9h8.8c2.2 0 4-1.8 4-3.9v-4.3c6.5-3.1 11.1-9.8 11.1-17.6C51.5 13.2 42.8 4.5 32 4.5z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M26 22c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4v-2"
              />
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-primary tracking-tight">
            Skillora
          </span>
          <p className=" text-sm mt-1">
            &copy; {new Date().getFullYear()} Skillora. All rights reserved.
          </p>
        </div>
        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="/" className=" text-sm hover:text-primary transition">
            Home
          </a>
          <a
            href="/services"
            className=" text-sm hover:text-primary transition"
          >
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
