// BouncingLoader.jsx
import React from "react";
import "./BouncingLoader.css"; // Import the CSS for the animation

const BouncingLoader = () => {
  return (
    <div className=" flex justify-center items-center">
      <div
        className="
        relative
        h-8
        w-[150px]
        box-border
        border-2 border-gray-400
        rounded-full
        loader
      "
      ></div>
    </div>
  );
};

export default BouncingLoader;
