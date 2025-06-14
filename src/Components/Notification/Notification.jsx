import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const dummyNotifications = [
  { id: 1, title: "New booking received", time: "2 min ago" },
  { id: 2, title: "Service approved", time: "1 hour ago" },
  { id: 3, title: "Profile updated", time: "Yesterday" },
];

const Notification = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full bg-base-200 
        focus:outline-none cursor-pointer"
      >
        <FaBell size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-base-100 border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b font-bold text-primary">Notifications</div>
          <ul>
            {dummyNotifications.map((item) => (
              <li key={item.id} className="px-4 py-2 hover:bg-base-200 cursor-pointer">
                <div className="font-medium">{item.title}</div>
                <div className="text-xs ">{item.time}</div>
              </li>
            ))}
          </ul>
          <div className="p-2 text-center text-sm  border-t">View all</div>
        </div>
      )}
    </div>
  );
};

export default Notification;