import React from 'react';

const Feedback = () => {
    return (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      What Our Users Say
    </h2>
    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-xl shadow p-6 bg-base-100 flex flex-col items-center border border-primary">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User 1"
          className="w-16 h-16 rounded-full mb-4"
        />
        <p className="italic text-center mb-3">
          "Skillora made it so easy to find clients for my web design services. The booking and management tools are a game changer!"
        </p>
        <span className="font-semibold">Alex P.</span>
      </div>
      <div className="rounded-xl shadow p-6 bg-base-100 flex flex-col items-center border border-primary">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User 2"
          className="w-16 h-16 rounded-full mb-4"
        />
        <p className="italic text-center mb-3">
          "I love how simple it is to book tutoring sessions and track my appointments. Highly recommended!"
        </p>
        <span className="font-semibold">Maria L.</span>
      </div>
      <div className="rounded-xl shadow p-6 bg-base-100 flex flex-col items-center border border-primary">
        <img
          src="https://randomuser.me/api/portraits/men/65.jpg"
          alt="User 3"
          className="w-16 h-16 rounded-full mb-4"
        />
        <p className="italic text-center mb-3">
          "The Skillora community is so supportive. I found great opportunities and new friends!"
        </p>
        <span className="font-semibold">James R.</span>
      </div>
    </div>
  </div>
    );
};

export default Feedback;