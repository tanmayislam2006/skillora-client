import React, { useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user, firebaseUser } = useContext(SkilloraContext);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const getData = Object.fromEntries(formData.entries());
    const serviceData = {
      ...getData,
      provider: {
        name: user?.displayName || user?.name,
        email: user?.email,
        image: user?.photo,
      },
      uid: user?.uid,
    };
    axios
      .post("https://skillora-server.vercel.app/addService", serviceData, {
        headers: {
          authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          toast.success("Service added successfully!");
        }
      })
      .catch((error) => {
        console.error("Error adding service:", error);
        toast.error("Failed to add service. Please try again.");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-2">
      <Helmet>
        <title>Add Service | Skillora</title>
        <meta name="description" content="Add a new service to Skillora." />
      </Helmet>
      <div className="w-full max-w-7xl rounded-3xl shadow-2xl p-8 md:p-12 bg-base-100 border-2 border-primary/20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center tracking-tight">
          Add New Service
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form below to add your service. Your provider information
          will be included automatically.
        </p>
        <form onSubmit={handleAddService} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Service Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter service image URL"
                className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Service Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter service name"
                className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Service Area
              </label>
              <input
                type="text"
                name="area"
                placeholder="Enter service area"
                className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter service description"
                rows={3}
                className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-4 bg-base-100 rounded-lg p-4 border border-primary/10">
              <img
                src={user?.photo}
                alt={user?.displayName || user?.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <div className="font-semibold text-primary">
                  {user?.displayName || user?.name}
                </div>
                <div className="text-sm text-gray-500">{user?.email}</div>
                <div className="text-xs text-gray-400 mt-1">
                  Service Provider
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-8/12 flex justify-center mx-auto cursor-pointer mt-4 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-primary to-blue-500 text-white text-lg shadow-lg "
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
