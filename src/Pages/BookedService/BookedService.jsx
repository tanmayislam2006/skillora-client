import React, { useEffect, useState, useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
import { FaCheckCircle, FaHourglassHalf, FaSpinner } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Spiner from "../../Components/Loader/Spiner";

const statusMap = {
  pending: {
    label: "Pending",
    icon: <FaHourglassHalf className="text-yellow-500 animate-pulse" />,
    color: "text-yellow-600 bg-yellow-100",
  },
  working: {
    label: "Working",
    icon: <FaSpinner className="text-blue-500 animate-spin" />,
    color: "text-blue-600 bg-blue-100",
  },
  completed: {
    label: "Completed",
    icon: <FaCheckCircle className="text-green-500" />,
    color: "text-green-600 bg-green-100",
  },
};

const BookedService = () => {
  const { user, firebaseUser } = useContext(SkilloraContext);
  const [bookedServices, setBookedServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true)
    axios
      .get(`https://skillora-server.vercel.app/purchaseService/${user.uid}`,{
        headers: {
          authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
        },
      })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBookedServices(res.data);
          setLoading(false)
        } else {
          setBookedServices([]);
          setLoading(false)
        }
      });
  }, [user,firebaseUser]);

  return (
    <div className="max-w-5xl mx-auto px-2 py-8">
      <Helmet>
        <title>Booked Services | Skillora</title>
        <meta
          name="description"
          content="View and manage your booked services on Skillora."
        />
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        My Booked Services
      </h2>
      {loading && <Spiner/>}
      {!loading && bookedServices.length === 0 ? (
        <div className="text-center py-16">
          You have not booked any services yet.
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
            {bookedServices.map((service) => {
              const status =
                statusMap[service.serviceStatus] || statusMap.pending;
              return (
                <div
                  key={service._id}
                  className="rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden border border-primary"
                >
                  <img
                    src={service.servicePhoto}
                    alt={service.serviceName}
                    className="w-full md:w-40 h-40 object-cover"
                  />
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {service.serviceName}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}
                        >
                          {status.icon}
                          {status.label}
                        </span>
                      </div>
                      <div className="text-sm  mb-1">
                        <span className="font-semibold">Provider:</span>{" "}
                        {service.providerName}
                      </div>
                      <div className="text-sm  mb-1">
                        <span className="font-semibold">Taking Date:</span>{" "}
                        {service.serviceDate}
                      </div>
                      <div className="text-sm  mb-1">
                        <span className="font-semibold">Price:</span> $
                        {service.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelected(service)}
                      className="mt-4 w-full md:w-auto px-6 py-2 rounded-full bg-primary text-white font-bold"
                    >
                      Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Table for large devices */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto rounded-xl shadow">
              <table className="min-w-full bg-base-100 border border-primary/20">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="py-3 px-4 rounded-tl-xl">Photo</th>
                    <th className="py-3 px-4">Service Name</th>
                    <th className="py-3 px-4">Provider</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookedServices.map((service) => {
                    const status =
                      statusMap[service.serviceStatus] || statusMap.pending;
                    return (
                      <tr key={service._id} className="border-b">
                        <td className="py-2 px-4">
                          <img
                            src={service.servicePhoto}
                            alt={service.serviceName}
                            className="w-16 h-12 object-cover rounded"
                          />
                        </td>
                        <td className="py-2 px-4 font-semibold">
                          {service.serviceName}
                        </td>
                        <td className="py-2 px-4">{service.providerName}</td>
                        <td className="py-2 px-4">{service.serviceDate}</td>
                        <td className="py-2 px-4">${service.price}</td>
                        <td className="py-2 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}
                          >
                            {status.icon}
                            {status.label}
                          </span>
                        </td>
                        <td className="py-2 px-4">
                          <button
                            onClick={() =>{
                              setSelected(service);
                            }}
                            className="cursor-pointer px-4 py-1 rounded-full bg-primary text-white font-bold"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {/* modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
          <div className="bg-base-100 border border-primary/20 max-w-md  md:max-w-lg lg:max-w-xl w-full rounded-2xl shadow-2xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-5xl text-primary font-bold cursor-pointer"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              Service Details
            </h3>
            <img
              src={selected.servicePhoto}
              alt={selected.serviceName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Service Name:</span>{" "}
                {selected.serviceName}
              </div>
              <div>
                <span className="font-semibold">Provider:</span>{" "}
                {selected.providerName}
              </div>
              <div>
                <span className="font-semibold">Date:</span>{" "}
                {selected.serviceDate}
              </div>
              <div>
                <span className="font-semibold">Price:</span> ${selected.price}
              </div>
              <div>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
                    statusMap[selected.serviceStatus]?.color
                  }`}
                >
                  {statusMap[selected.serviceStatus]?.icon}
                  {statusMap[selected.serviceStatus]?.label}
                </span>
              </div>
              <div>
                <span className="font-semibold">Special Instruction:</span>{" "}
                {selected.specialInstruction}
              </div>
              <div>
                <span className="font-semibold">Your Name:</span>{" "}
                {selected.userName}
              </div>
              <div>
                <span className="font-semibold">Your Email:</span>{" "}
                {selected.userEmail}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedService;
