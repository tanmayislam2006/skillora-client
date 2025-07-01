import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Share Your Service",
    description:
      "List your skills or services and reach people who need your expertise. Find the best.",
  },
  {
    id: 2,
    title: "Scalable Solution",
    description:
      "Deploy across departments and programs with flexible implementation options.",
  },
  {
    id: 3,
    title: "Book Instantly",
    description:
      "Browse available services, compare options, and book what fits your needs.",
  },
  {
    id: 4,
    title: "Track & Manage",
    description:
      "Easily manage your bookings, update statuses, and communicate with others.",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic-bezier
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        How Skillora Works
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={cardVariants}
            className="flex flex-col items-center bg-base-300 py-10 rounded-xl border border-primary/20 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white text-2xl font-bold">
              {step.id}
            </div>
            <h4 className="font-semibold text-lg mb-2 text-center">
              {step.title}
            </h4>
            <p className="px-3 text-center">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
