import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/service/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-primary">Service not found.</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-2">
      <div className="w-full max-w-6xl rounded-2xl shadow-2xl p-6 md:p-12 flex flex-col lg:flex-row gap-10 bg-base-100 border-2 border-primary/20">
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full lg:w-1/2 relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-72 md:h-[420px] object-cover rounded-xl shadow mb-6"
          />
          <div className="flex items-center gap-4 mt-2">
            <img
              src={service.provider.image}
              alt={service.provider.name}
              className="w-12 h-12 object-cover rounded-full border-2 border-primary"
            />
            <div>
              <div className="text-lg font-semibold">{service.provider.name}</div>
              <div className="text-xs opacity-70">{service.area}</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {service.name}
            </h1>
            <p className="mb-8 whitespace-pre-line text-lg">
              {service.description}
            </p>
            <div className="">
              <p className="font-semibold px-4 py-2 rounded-full">
                Area: {service.area}
              </p>
              <p className="font-semibold px-4 py-2 rounded-full">
                Provider: {service.provider.name}
              </p>
              <p className="font-semibold px-4 py-2 rounded-full">
                Price: ${service.price}
              </p>
            </div>
            <button
              className="cursor-pointer px-8 py-3 rounded-lg font-bold bg-primary text-white mb-4"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer mx-4 px-8 py-3 rounded-lg font-bold border border-primary hover:bg-primary hover:text-white transition"
            >
              Back
            </button>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-sm text-gray-500">
              Service ID: <span className="font-medium">{service._id}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;