import React from "react";
import { Link } from "react-router";

const services = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    name: "Web Design",
    description:
      "Professional web design services to help your business stand out online and attract more customers.",
    provider: {
      name: "Alex Morgan",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    price: 120,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    name: "Math Tutoring",
    description:
      "Expert math tutoring for all levels. Boost your grades and confidence with personalized sessions.",
    provider: {
      name: "Maria Lee",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    price: 40,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    name: "Home Repair",
    description:
      "Quick and reliable home repair services for all your household needs, big or small.",
    provider: {
      name: "James Ray",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    price: 75,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    name: "Photography",
    description:
      "Capture your special moments with professional photography sessions tailored to your style.",
    provider: {
      name: "Sophie Turner",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    price: 200,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    name: "Fitness Coaching",
    description:
      "Personalized fitness coaching to help you achieve your health and wellness goals.",
    provider: {
      name: "Chris Evans",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    price: 60,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    name: "Language Lessons",
    description:
      "Learn a new language with engaging lessons from an experienced tutor.",
    provider: {
      name: "Linda Park",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    price: 50,
  },
];

const PopulerService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center">
        Popular Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-base-100 border border-gray-200"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-secondary text-xl font-bold mb-2">{service.name}</h3>
                <p className="mb-4 opacity-80">
                  {service.description.slice(0, 100)}
                  {service.description.length > 100 && "..."}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={service.provider.image}
                    alt={service.provider.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{service.provider.name}</span>
                </div>
                <span className="font-bold text-lg">${service.price}</span>
              </div>
              <div className="mt-6">
                <a
                  href={`/services/${service.id}`}
                  className="px-5 py-2 rounded-full font-semibold bg-primary text-white  w-max"
                >
                  View Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          to="/services"
          className=" px-6 py-2 rounded-full font-semibold border border-primary hover:bg-primary hover:text-white transition"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopulerService;
