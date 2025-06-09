import React, { useContext } from "react";
import { useParams } from "react-router";
import FoodCartContext from "../../Context/FoodCartContext";
import BouncingLoader from "../../Components/Loader/BouncingLoader";
import axios from "axios";
import { toast } from "react-toastify";

const Update = () => {
  const { foodItemsAll } = useContext(FoodCartContext);
  const { id } = useParams();

  const dishToUpdate = foodItemsAll.find((item) => item._id === id);

  if (!dishToUpdate) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <BouncingLoader />
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Loading dish details or Dish not found...
        </p>
      </div>
    );
  }
  const haandleUpdateDish = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateInfo = Object.fromEntries(formData.entries());
    axios
      .put(`http://localhost:5000/updateDish/${id}`, {
        ...updateInfo,
      })
      .then((res) => {
        if (res.data?.matchedCount) {
          toast.success("Dish Update Succes!");
        }
      });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 w-full max-w-5xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-8 md:mb-10">
          Update Dish Details
        </h2>
        <form
          onSubmit={haandleUpdateDish}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-base font-semibold text-gray-700  mb-2"
            >
              Dish Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={dishToUpdate.name || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              defaultValue={dishToUpdate.image || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              defaultValue={dishToUpdate.price || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="display"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Display Status
            </label>
            <select
              id="display"
              name="display"
              defaultValue={dishToUpdate.display || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            >
              <option value="">Select Display Status</option>
              <option value="populer">Popular</option>
              <option value="new">New Arrival</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-700  mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              defaultValue={dishToUpdate.category || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              defaultValue={dishToUpdate.stock || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] text-base dark:bg-gray-700 dark:text-white transition duration-200 ease-in-out"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="desc"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              defaultValue={dishToUpdate.desc || ""}
              className="block w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] text-base dark:bg-gray-700 dark:text-white transition duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="flex md:justify-end md:col-span-2 pt-4">
            <button type="submit" className="btn btn-primary ">
              Update Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
