import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          Empower Your <span className="text-primary">Skills</span>, <br className="hidden md:block" />
          Connect & Grow with <span className="text-primary">Skillora</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover a seamless platform to add, update, and manage your services, book what you need from others, and keep track of every booking and status. Skillora makes service sharing simple, organized, and accessible for everyone.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/services"
            className="px-7 py-3 rounded-full font-bold bg-primary text-white "
          >
            Explore Services
          </Link>
          <Link
            to="addService"
            className="px-7 py-3 rounded-full font-bold border border-primary hover:bg-primary hover:text-white transition"
          >
            Offer a Service
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Service Collaboration"
          className="w-full max-w-md rounded-xl shadow"
        />
      </div>
    </section>
  );
};

export default Hero;