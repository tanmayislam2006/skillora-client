import React, { useEffect, useState, useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Spiner from "../../Components/Loader/Spiner";
import MyCalendar from "./MyCalendar";

const ManageService = () => {
  const { user, firebaseUser } = useContext(SkilloraContext);
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://skillora-server.vercel.app/userService/${user?.uid}`, {
        headers: {
          authorization: `Bearer ${firebaseUser?.accessToken}`,
        },
      })
      .then((res) => {
        setMyServices(res.data);
        setLoading(false);
      });
  }, [user?.uid, user?.email, refresh, firebaseUser]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16A34A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://skillora-server.vercel.app/deleteService/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setRefresh((prev) => !prev);
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
                confirmButtonColor: "#3b82f6",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete service. Please try again.",
                icon: "error",
                confirmButtonColor: "#16A34A",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred during deletion.",
              icon: "error",
              confirmButtonColor: "#16A34A",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <Helmet>
        <title>My Services | Skillora</title>
        <meta name="description" content="Manage your services on Skillora." />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        My Services
      </h1>

      {loading && <Spiner />}

      {!loading && myServices.length === 0 && (
        <div className="w-full max-w-4xl flex flex-col items-center justify-center py-16">
          <img
            src="https://i.ibb.co/NwjF62y/No-data-cuate.png"
            alt="No services"
            className="w-32 h-32 md:w-52 md:h-52 mb-4 opacity-70"
          />
          <p className="text-lg text-gray-500 text-center font-semibold">
            You have not added any services yet.
            <br />
            Click <span className="text-primary font-bold">Add Service</span> to
            get started!
          </p>
        </div>
      )}
      {/* large device */}
      {!loading && myServices.length > 0 && (
        <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-x-auto border border-gray-200 hidden md:block">
          <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="border-b border-gray-100 text-center">
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Service Name</th>
                <th className="py-3 px-4">Provider</th>
                <th className="py-3 px-4">Area</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myServices.map((service) => (
                <tr
                  key={service._id}
                  className="border-b border-gray-100 text-center"
                >
                  <td className="py-3 px-4 align-middle">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-14 h-14 object-cover rounded-md shadow mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold align-middle">
                    {service.name}
                  </td>
                  <td className="py-3 px-4 align-middle ">
                    {service.provider?.name}
                  </td>
                  <td className="py-3 px-4 align-middle">{service.area}</td>
                  <td className="py-3 px-4 align-middle">${service.price}</td>
                  <td className="px-4 py-2 align-middle">
                    <button
                      onClick={() => navigate(`/editService/${service._id}`)}
                      className="text-primary cursor-pointer mx-3 my-2"
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile card view */}
      {!loading && myServices.length > 0 && (
        <div className="w-full max-w-4xl flex flex-col gap-4 md:hidden mt-6">
          {myServices.map((service) => (
            <div
              key={service._id}
              className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-16 h-16 object-cover rounded-md shadow"
                />
                <div>
                  <div className="font-bold text-lg">{service.name}</div>
                  <div className="text-sm flex items-center gap-2">
                    <img
                      src={service.provider?.image}
                      alt={service.provider?.name}
                      className="w-7 h-7 rounded-full object-cover border"
                    />
                    <span>{service.provider?.name}</span>
                  </div>
                  <div className="text-sm">Area: {service.area}</div>
                  <div className="text-sm">Price: ${service.price}</div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => navigate(`/editService/${service._id}`)}
                  className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaPen className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaTrash className="inline mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Service Button */}
      <div className="md:min-w-3xl lg:min-w-4xl flex justify-end mt-10 w-full max-w-4xl">
        <Link
          to="/addService"
          className="btn btn-primary font-bold text-white flex items-center gap-2"
        >
          <FaPlus />
          Add Service
        </Link>
      </div>
    </div>
  );
};

export default ManageService;
