import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import SkilloraContext from "../../Context/SkilloraContext";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = use(SkilloraContext);
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/${id}`)
      .then((response) => {
        setService(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [id]);
  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const purchaseData = {
        uid: user?.uid,
        ...data,
        serviceStatus: "pending",

    }
    console.log(purchaseData);
  };
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
              <div className="text-lg font-semibold">
                {service.provider.name}
              </div>
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
              onClick={() => document.getElementById("my_modal_1").showModal()}
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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-4xl w-full rounded-3xl shadow-2xl p-6 md:p-10 relative">
          <h3 className="font-bold text-2xl md:text-3xl text-center text-primary mb-2">
            Book This Service
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Please fill the form below to confirm your booking.
          </p>
          <form onSubmit={handlePurchase} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Service ID */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Service ID
                </label>
                <input
                  type="text"
                  name="serviceId"
                  value={service._id}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out font-semibold"
                />
              </div>
              {/* Service Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Service Name
                </label>
                <input
                  type="text"
                  name="serviceName"
                  value={service.name}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out font-semibold"
                />
              </div>
              {/* Service Photo */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Service Photo
                </label>
                <input
                  type="text"
                  name="servicePhoto"
                  value={service.image || ""}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Provider Email */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Provider Email
                </label>
                <input
                  type="text"
                  name="providerEmail"
                  value={service.provider?.email || ""}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Provider Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Provider Name
                </label>
                <input
                  type="text"
                  name="providerName"
                  value={service.provider.name}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Your Email */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Your Email
                </label>
                <input
                  type="text"
                  name="userEmail"
                  value={user?.email || ""}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Your Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName || user?.name || ""}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Service Taking Date */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Service Taking Date
                </label>
                <input
                  required
                  type="date"
                  name="serviceDate"
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                />
              </div>
              {/* Special Instruction */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Special Instruction
                </label>
                <textarea
                  required
                  name="specialInstruction"
                  placeholder="Address, area, or any special request"
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                  rows={2}
                />
              </div>
              {/* Price */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">
                  Price $
                </label>
                <input
                  type="text"
                  name="price"
                  value={`${service.price}`}
                  readOnly
                  className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out font-semibold"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-8/12 flex justify-center mx-auto cursor-pointer mt-4 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-primary to-blue-500 text-white text-lg shadow-lg "
            >
              Purchase
            </button>
          </form>
          <div className="modal-action mt-6">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
