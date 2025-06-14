import React, { use } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaTools,
  FaSignInAlt,
  FaSignOutAlt,
  FaThLarge,
  FaPlusCircle,
  FaClipboardList,
  FaTasks,
  FaUser,
} from "react-icons/fa";
import { toast } from "react-toastify";
import SkilloraContext from "../../Context/SkilloraContext";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const { user, logoutUser } = use(SkilloraContext);
  const handleLogOut = () => {
    logoutUser().then(() => toast.success("LogOut Succesfully"));
  };

  const link = (
    <>
      <li>
        <NavLink
          to="/addService"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 font-bold text-primary"
              : "flex items-center gap-2"
          }
        >
          <FaPlusCircle size={20} />
          <span className="">Add Services</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageService"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 font-bold text-primary"
              : "flex items-center gap-2"
          }
        >
          <FaTools size={20} />
          <span className="">Manage Services</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookedServices"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 font-bold text-primary"
              : "flex items-center gap-2"
          }
        >
          <FaClipboardList size={20} />
          <span className="">Booked Services</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/serviceToDo"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 font-bold text-primary"
              : "flex items-center gap-2"
          }
        >
          <FaTasks size={20} />
          <span className="">Service To Do</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="w-full bg-base-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 ">
          <Link to="/" className="flex items-center gap-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
              className="mt-2"
            >
              <title>Skillora Logo</title>
              <path d="M32 4.5C21.2 4.5 12.5 13.2 12.5 24c0 7.8 4.6 14.5 11.1 17.6v4.3c0 2.2 1.8 3.9 4 3.9h8.8c2.2 0 4-1.8 4-3.9v-4.3c6.5-3.1 11.1-9.8 11.1-17.6C51.5 13.2 42.8 4.5 32 4.5z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M26 22c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4v-2"
              />
            </svg>
            <span className="text-2xl font-extrabold text-primary hidden lg:block">
              Skillora
            </span>
          </Link>
          <ul className="hidden lg:flex gap-8 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline flex items-center gap-1"
                    : "font-semibold flex items-center gap-1"
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline flex items-center gap-1"
                    : "font-semibold flex items-center gap-1"
                }
              >
                <FaTools /> Services
              </NavLink>
            </li>
            {user && (
              <li>
                <div className="dropdown dropdown-down mt-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <FaThLarge size={20} />
                    <span className="font-medium">Dashboard</span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm space-y-6"
                  >
                    {link}
                  </ul>
                </div>
              </li>
            )}
          </ul>
          <div className="flex gap-4 md:gap-10 items-center">
            <ThemeToggle />
            {user ? (
              <div className="dropdown dropdown-end mr-5  cursor-pointer">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar relative group "
                >
                  <div className="w-10 rounded-full">
                    <img alt="user" src={user?.photo} />
                  </div>
                  <p className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-gray-800 text-white  rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    {user?.name}
                  </p>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm bg-base-100 dropdown-content rounded-box z-1 mt-3 w-64 p-2 shadow space-y-5 py-2"
                >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold text-primary underline flex items-center gap-1"
                          : "font-semibold flex items-center gap-1"
                      }
                    >
                      <FaHome /> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold text-primary underline flex items-center gap-1"
                          : "font-semibold flex items-center gap-1"
                      }
                    >
                      <FaTools /> Services
                    </NavLink>
                  </li>
                  {user && (
                    <li>
                      <div className="dropdown dropdown-down mt-2">
                        <div
                          tabIndex={0}
                          role="button"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <FaThLarge size={20} />
                          <span className="font-medium">Dashboard</span>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm space-y-6"
                        >
                          {link}
                        </ul>
                      </div>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold mt-2"
                    >
                      <FaSignOutAlt /> Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="hidden md:flex gap-3">
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold"
                >
                  <FaSignInAlt /> Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 shadow bg-base-100 lg:hidden">
        <ul className="flex justify-around items-center py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center font-bold underline text-primary"
                  : "flex flex-col items-center"
              }
            >
              <FaHome size={24} />
              <span className="">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center font-bold underline text-primary"
                  : "flex flex-col items-center"
              }
            >
              <FaTools size={24} />
              <span className="">Services</span>
            </NavLink>
          </li>
          {user && (
            <li>
              <div className="dropdown dropdown-top">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex  items-center flex-col"
                >
                  <FaThLarge size={30} />
                  <span className="">Dashboard</span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm space-y-6"
                >
                  {link}
                </ul>
              </div>
            </li>
          )}
          {user ? (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col items-center font-bold underline text-primary"
                    : "flex flex-col items-center"
                }
              >
                <FaUser size={24} />
                <span className="">Profile</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <Link to="/login" className="flex flex-col items-center">
                <FaSignInAlt size={24} />
                <span className="">Login</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
