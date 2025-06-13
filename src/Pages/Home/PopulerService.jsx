import axios from "axios";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const PopulerService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://skillora-server.vercel.app/allServices")
      .then((response) => {
        const responseData = response.data;
        //    make slice of first 6 services
        setServices(responseData.slice(0, 6));
      });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 800});
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2
        className="text-primary text-3xl md:text-4xl font-bold text-center"
      >
        Popular Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services.map((service,idx) => (
          <div
            key={service._id}
            className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-base-100 border border-gray-200"
            data-aos="fade-right"
            data-aos-delay={idx * 300}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-secondary text-xl font-bold mb-2">
                  {service.name}
                </h3>
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
                  href={`/service/${service._id}`}
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
