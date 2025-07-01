import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// Sample, consistent placeholder user images
const featuredProviders = [
  {
    id: 1,
    name: "Jane Doe",
    service: "Hair Stylist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahim Uddin",
    service: "Plumber",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Lina Akter",
    service: "Photographer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Shohan Khan",
    service: "Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const FeaturedProviders = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-center text-primary mb-10"
      >
        Featured Service Providers
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {featuredProviders.map((provider) => (
          <motion.div
            key={provider.id}
            variants={cardVariants}
            className="bg-base-100 border rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Decorative background */}
            <FaUserCircle className="absolute text-primary/10 text-[8rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

            <img
              src={provider.image}
              alt={provider.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary z-10"
            />

            <h3 className="text-xl font-bold z-10">{provider.name}</h3>
            <p className="text-sm mb-2 z-10">{provider.service}</p>
            <div className="flex items-center justify-center text-yellow-400 mb-3 z-10">
              <FaStar />
              <span className="ml-1 font-medium">{provider.rating}</span>
            </div>
            <span className="text-xs text-gray-400 z-10">Verified Provider</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProviders;
