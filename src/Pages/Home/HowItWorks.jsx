import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
        How Skillora Works
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white text-2xl font-bold">
            1
          </div>
          <h4 className="font-semibold text-lg mb-2">Share Your Service</h4>
          <p className="text-center opacity-80">
            List your skills or services and reach people who need your
            expertise.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white text-2xl font-bold">
            2
          </div>
          <h4 className="font-semibold text-lg mb-2">Book Instantly</h4>
          <p className="text-center opacity-80">
            Browse available services, compare options, and book what fits your
            needs.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white text-2xl font-bold">
            3
          </div>
          <h4 className="font-semibold text-lg mb-2">Track & Manage</h4>
          <p className="text-center opacity-80">
            Easily manage your bookings, update statuses, and communicate with
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
