import React, { useEffect, useState, useContext } from "react";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import MyCalendar from "../ManageService/MyCalendar";

const ServiceToDo = () => {
  const { user, firebaseUser } = useContext(SkilloraContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [bookedUsers, setBookedUsers] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (user?.uid) {
      axios
        .get(
          `https://skillora-server.vercel.app/userService/${user?.uid}`,
          {
            headers: {
              authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
            },
          }
        )
        .then((res) => {
          setBookings(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
          setLoading(false);
        });
    }
  }, [user?.uid, refresh, firebaseUser]);

  const handleCustomerBooked = (id) => {
    axios
      .get(`https://skillora-server.vercel.app/customerBooked/${id}`, {
        headers: {
          authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
        },
      })
      .then((res) => {
        setBookedUsers(res.data);
      });
  };
  const handleStatusChange = (id, serviceStatus) => {
    axios
      .put(
        `https://skillora-server.vercel.app/updateServiceStatus/${id}`,
        {
          serviceStatus,
        },
        {
          headers: {
            authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          setRefresh((prev) => !prev);
        }
      })
      .catch((error) => {
        console.error("Error updating service status:", error);
      });
  };
  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <Helmet>
        <title>Services To Do | Skillora</title>
        <meta
          name="description"
          content="Manage your services to do on Skillora."
        />
      </Helmet>
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
        <div className="w-full max-w-5xl rounded-lg shadow-md overflow-x-auto border border-gray-200 hidden md:block">
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

      {/*mobile */}
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
                    <FaUser size={20} />{" "}
                    <button
                      onClick={() => handleCustomerBooked(b._id)}
                      className="btn"
                    >
                      {b.booked || 0}
                    </button>
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
      {/* modal */}
      {bookedUsers.length > 0 && (
        <div className="modal modal-open">
          <div className="modal-box relative md:max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-primary text-center">
              Booked Users
            </h2>
            <div className="overflow-y-auto max-h-60">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr className="border-b border-gray-100 text-center ">
                    <th className="py-3 px-4 hidden md:table-cell">Photo</th>
                    <th className="py-3 px-4 hidden md:table-cell">
                      User Name
                    </th>
                    <th className="md:py-3 md:px-4">User Email</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookedUsers.map((bUser) => (
                    <tr
                      key={bUser._id}
                      className="border-b border-primary/40 text-center"
                    >
                      <td className="py-3 px-4 align-middle hidden md:table-cell">
                        <img
                          src={bUser.servicePhoto}
                          alt={bUser.userName}
                          className="w-12 h-12 rounded-full object-cover mx-auto"
                        />
                      </td>
                      <td className="py-3 px-4 align-middle font-semibold hidden md:table-cell">
                        {bUser.userName}
                      </td>
                      <td className="md:py-3 md:px-4 align-middle">
                        <span className="flex items-center justify-center gap-1">
                          <FaEnvelope className="inline mr-1" />
                          {bUser.userEmail}
                        </span>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <select
                          onChange={(e) =>
                            handleStatusChange(bUser?._id, e.target.value)
                          }
                          defaultValue={bUser?.serviceStatus}
                          name="status"
                          className="bg-base-100 border border-primary/20 rounded-md px-3 py-1 text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="working">Working</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-action">
              <button
                onClick={() => setBookedUsers([])}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Check Section */}
      <div className="w-full max-w-5xl mx-auto mb-8 bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border border-primary/20 mt-20">
        <h2 className="text-xl font-bold mb-3 text-primary text-center">
          Check the schedule for today's work or service
        </h2>
        <button
          className="btn btn-primary font-bold px-8"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? "No" : "Yes"}
        </button>
        
      {/* Show Calendar if Yes is clicked */}
      {showCalendar && (
        <div className="w-full max-w-2xl mx-auto mb-8 bg-base-100 rounded-xl shadow p-6 flex flex-col items-center">
          <MyCalendar />
        </div>
      )}
      </div>

    </div>
  );
};

export default ServiceToDo;
