import React, { useEffect, useState, useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ServiceToDo = () => {
  const { user } = useContext(SkilloraContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [bookedUsers, setBookedUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (user?.uid) {
      axios
        .get(`http://localhost:5000/userService/${user?.uid}`)
        .then((res) => {
          setBookings(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
          setLoading(false);
        });
    }
  }, [user?.uid, refresh]);

  const handleCustomerBooked = (id) => {
    axios.get(`http://localhost:5000/customerBooked/${id}`).then((res) => {
      setBookedUsers(res.data);
    });
  };
  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Services To Do
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-48">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {!loading && bookings.length === 0 && (
        <div className="w-full max-w-4xl flex flex-col items-center justify-center py-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No bookings"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-lg  text-center font-semibold">
            You have no booked services to do yet.
          </p>
        </div>
      )}

      {/* Table for large devices */}
      {!loading && bookings.length > 0 && (
        <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-x-auto border border-gray-200 hidden md:block">
          <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="border-b border-gray-100 text-center">
                <th className="py-3 px-4">Photo</th>
                <th className="py-3 px-4">Service Name</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Area</th>
                <th className="py-3 px-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b._id}
                  className="border-b border-gray-100 text-center"
                >
                  <td className="py-3 px-4 align-middle">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-14 h-14 object-cover rounded-md shadow mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold align-middle">
                    {b.name}
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <button
                      onClick={() => handleCustomerBooked(b._id)}
                      className="btn"
                    >
                      {b.booked || 0}
                    </button>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    {b.area || <span className="">N/A</span>}
                  </td>
                  <td className="py-3 px-4 align-middle">${b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile card view */}
      {!loading && bookings.length > 0 && (
        <div className="w-full max-w-4xl flex flex-col gap-4 md:hidden mt-6">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="rounded-xl shadow-lg p-4 flex flex-col gap-2 border border-primary/20 bg-base-100 "
            >
              <div className="flex items-center gap-5">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-28 h-28 object-cover rounded-lg shadow"
                />
                <div className="flex flex-col gap-4">
                  <div className="font-bold text-lg text-primary">{b.name}</div>
                  <div className="text-sm flex items-center gap-2 mt-1">
                    <FaUser size={20} /> {b.booked || 0}
                  </div>
                  <div className="text-sm  flex items-center gap-1">
                    <FaMapMarkerAlt size={20} /> {b.area || "N/A"}
                  </div>
                  <div className="text-sm">Price: ${b.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
