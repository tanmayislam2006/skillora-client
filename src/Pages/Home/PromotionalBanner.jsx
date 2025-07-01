import React from "react";
import { Link } from "react-router";

const PromotionalBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-12 mx-4 ">
      <div className="absolute inset-0 opacity-20 bg-[url('https://i.ibb.co/d4rKjPwc/banner.jpg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div data-aos="fade-right" className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get 10% Off Your First Booking!
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Join Skillora today and discover trusted local service providers for your everyday needs.
          </p>
          <Link to="/register">
            <button className="btn btn-accent text-white">
              Sign Up & Save Now
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" className="flex-1 hidden md:flex justify-end h-72">
          <img
            src="https://i.ibb.co/JWRH63WS/banner-image-1.jpg"
            alt=""
            className="max-w-full rounded-xl shadow-lg h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
