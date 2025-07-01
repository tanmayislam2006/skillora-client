import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Customer",
    rating: 5,
    feedback: "Skillora helped me find an electrician in minutes. Professional and fast!",
    photo: "https://i.ibb.co/PzZsRBRh/doctor9.jpg",
  },
  {
    id: 2,
    name: "Rahim Uddin",
    role: "Service Provider",
    rating: 4,
    feedback: "Great platform to get more clients for my plumbing services.",
    photo: "https://i.ibb.co/XxZbRLJ3/Lewandowski.jpg",
  },
  {
    id: 3,
    name: "Mariam Begum",
    role: "Customer",
    rating: 5,
    feedback: "Easy booking and secure payments. Highly recommended.",
    photo: "https://i.ibb.co/qMmX8yHq/medium-shot-anime-woman-hugging-cat.jpg",
  },
  {
    id: 4,
    name: "Shohan Khan",
    role: "Service Provider",
    rating: 5,
    feedback: "Skillora helped me grow my freelance design business seamlessly.",
    photo: "https://i.ibb.co/21zHyPk3/pexels-sidesimagery-3351927.jpg",
  },
];

const animations = ["fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left"];

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          data-aos="fade-down"
        >
          What Our Users Say
        </h2>
        <p className="mb-10 text-gray-500">
          Real feedback from customers and service providers on Skillora
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              data-aos={animations[idx % animations.length]}
              data-aos-delay={idx * 150}
              data-aos-duration="1000"
              className="rounded-xl border bg-base-100 shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
              />
              <h3 className="text-xl font-semibold text-primary mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{item.role}</p>
              <div className="flex justify-center mb-3 text-accent">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="italic max-w-sm text-gray-600">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
