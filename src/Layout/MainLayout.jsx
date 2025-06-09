import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto ">
      <Navbar />{" "}
      <ToastContainer/>
      <main className="flex-1 flex justify-center items-start">
        <div className="w-full min-h-[calc(100vh-130px)]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
