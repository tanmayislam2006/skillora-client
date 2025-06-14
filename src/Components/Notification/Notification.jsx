import React, { use, useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import SkilloraContext from "../../Context/SkilloraContext";
import axios from "axios";
const Notification = () => {
  const { firebaseUser } = use(SkilloraContext);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (firebaseUser?.email) {
      axios
        .get(
          `https://skillora-server.vercel.app/notifications/${firebaseUser?.email}`,
          {
            headers: {
              authorization: `Bearer ${firebaseUser?.accessToken || ""}`,
            },
          }
        )
        .then((res) => setNotifications(res.data));
    }
  }, [firebaseUser?.email, firebaseUser?.accessToken, open]);

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full bg-base-200 cursor-pointer"
      >
        <FaBell size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 border bg-base-100 border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b font-bold text-primary">
            Notifications
          </div>
          <ul>
            {notifications && notifications.length > 0 ? (
              notifications.map((item) => (
                <li
                  key={item._id}
                  className="px-4 py-3 hover:bg-base-200 cursor-pointer border-b"
                >
                  <div className="font-medium ">{item.message}</div>
                  <div className="text-xs  mt-1 flex justify-between">
                    <span>From: {item.senderUser}</span>
                    <span>{item.time}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-center">No notifications</li>
            )}
          </ul>
          <div className="p-2 text-center text-sm  border-t">View all</div>
        </div>
      )}
    </div>
  );
};

export default Notification;
