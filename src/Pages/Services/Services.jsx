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
      name: "Rakibul Hasan",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    area: "Dhaka",
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
      name: "Mitu Akter",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    area: "Gopalganj",
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
      name: "Jashim Uddin",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    area: "Faridpur",
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
      name: "Sadia Sultana",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    area: "Madaripur",
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
      name: "Shakib Al Hasan",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    area: "Barisal",
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
      name: "Lamia Rahman",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    area: "Khulna",
    price: 50,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    name: "IT Support",
    description:
      "Get fast and reliable IT support for your home or business devices.",
    provider: {
      name: "Rafiq Hasan",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    area: "Cumilla",
    price: 90,
  },
];

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        All Services
      </h2>
      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-base-100 border-2 border-primary"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-56 h-56 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="mb-3 opacity-80">
                  {service.description.slice(0, 100)}
                  {service.description.length > 100 && "..."}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={service.provider.image}
                    alt={service.provider.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{service.provider.name}</span>
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Area:</span> {service.area}
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Price:</span> ${service.price}
                </div>
              </div>
              <div>
                <Link
                  to={`/services/${service.id}`}
                  className="px-5 py-2 rounded-full font-semibold bg-primary text-white w-max"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
