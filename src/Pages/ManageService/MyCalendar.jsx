import React, { use, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

const MyCalendar = () => {
  const [selected, setSelected] = useState();
  const formatingDate = selected ? selected.toLocaleDateString("en-CA") : null;
  const { firebaseUser } = use(SkilloraContext);
  const [scheduleData, setScheduleData] = useState([]);
  let url = `https://skillora-server.vercel.app/schedule/`;
  if (formatingDate) {
    url += `${firebaseUser?.uid}?serviceDate=${formatingDate}`;
  }
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
        },
      })
      .then((res) => {
        if (res.data) {
          setScheduleData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [firebaseUser?.accessToken, url]);

  return (
    <div className="flex justify-center">
      <div className="">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        <div className="mt-2 text-center font-semibold">
          {selected ? `Selected: ${formatingDate}` : "Pick a day."}
        </div>
      </div>
      {/* modal */}
      {scheduleData.length > 0 && (
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
                  {scheduleData.map((bUser) => (
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
                        {bUser?.serviceStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-action">
              <button
                onClick={() => setScheduleData([])}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
