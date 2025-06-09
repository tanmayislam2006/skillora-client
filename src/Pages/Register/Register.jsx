import React, { use, useState } from "react";
import Logo from "../../assets/food-cart.png";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import FoodCartContext from "../../Context/FoodCartContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
  const { googleLogin, errorMessage, setErrorMessage, createAccount, refresh, setRefresh } = use(FoodCartContext);
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setPasswordError("");
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...data } = Object.fromEntries(formData.entries());

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    setPasswordError("");
    createAccount(email, password)
      .then((result) => {
        // save user in db
        const userProfile = {
          email,
          ...data,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
          uid: result.user?.uid,
        };
        fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setErrorMessage("");
              toast.success("Registration Successful");
              setRefresh(!refresh);
              navigate(location?.state || "/");
            }
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Registration Failed");
      });
    setErrorMessage("");
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userProfile = {
          email: user?.email,
          name: user?.displayName,
          photo: user?.photoURL,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
          uid: user?.uid,
        };
        fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setRefresh(!refresh);
              setErrorMessage("");
            }
          });
        setErrorMessage("");
        navigate(location?.state || "/");
        toast.success("Registration Successful");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Failed...",
          text: error.message,
        });
      });
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <img
          src={Logo}
          alt="Food Cart Logo"
          className="w-20 h-20 mb-4 rounded-full border-4 border-primary/20 bg-white object-contain"
        />
        <h2 className="text-2xl font-bold text-primary mb-6">
          Create Your Account
        </h2>
        {passwordError && (
          <div className="w-full mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-2 text-sm text-center">
            {passwordError}
          </div>
        )}
        {errorMessage && (
          <div className="w-full mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-2 text-sm text-center">
            {errorMessage}
          </div>
        )}
        <form
          onSubmit={handleSubmitRegister}
          className="w-full flex flex-col gap-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <input
            name="photo"
            type="url"
            placeholder="Enter Your Photo URL"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <div className="mb-4 relative ">
            <p
              onClick={() => setShowPass(!showPass)}
              className="absolute right-8 bottom-4 cursor-pointer"
            >
              {showPass ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </p>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
              required
            />
          </div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <input
            name="number"
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
            required
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-white font-bold py-3 rounded-lg mt-2"
          >
            Register
          </button>
        </form>
        <div className="my-4 w-full flex items-center">
          <div className="flex-1 h-px bg-primary/20"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-primary/20"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full cursor-pointer flex items-center justify-center gap-3 border border-primary/30 py-3 rounded-lg font-semibold text-primary bg-white"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
        <p className="mt-6 text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;