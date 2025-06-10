import React from 'react';

const Community = () => {
    return (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
          alt="Community"
          className="w-full max-w-md rounded-2xl shadow mx-auto"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Join a Thriving Community
        </h2>
        <p className="text-lg mb-6 opacity-80">
          Connect with passionate individuals, grow your network, and discover new
          opportunities. Skillora is more than a platform—it's a vibrant community
          where everyone can learn, share, and succeed together.
        </p>
        <div className="flex gap-4">
          <a
            href="/register"
            className="px-7 py-3 rounded-full font-bold bg-primary text-white"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-7 py-3 rounded-full font-bold border border-primary hover:bg-primary hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Community;