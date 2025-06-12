import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import SkilloraContext from "../../Context/SkilloraContext";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    googleLogin,
    loginUser,
    setErrorMessage,
    errorMessage,
    refresh,
    setRefresh,
  } = use(SkilloraContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate("");
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        // check user from database
        fetch(`https://skillora-server.vercel.app/user/${user?.uid}`)
          .then((res) => res.json())
          .then((data) => {
            const availableUser = data?.user;
            // if user is not available
            if (!availableUser) {
              const userProfile = {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
                creationTime: user?.metadata?.creationTime,
                lastSignInTime: user?.metadata?.lastSignInTime,
                uid: user?.uid,
              };
              fetch("https://skillora-server.vercel.app/register", {
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
            }
          });
        if (user) {
          // update log in information   in db
          fetch("https://skillora-server.vercel.app/login", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: user?.email,
              lastSignInTime: user?.metadata?.lastSignInTime,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                setRefresh(!refresh);
              }
            });
        }

        navigate(location?.state || "/");

        toast.success("Login successful!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          // update information in db
          fetch("https://skillora-server.vercel.app/login", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: user?.email,
              lastSignInTime: user?.metadata?.lastSignInTime,
            }),
          });
        }
        navigate(location?.state || "/");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-primary/5 py-12 px-4">
      <Helmet>
        <title>Login | Skillora</title>
        <meta
          name="description"
          content="Login to Skillora and continue your learning journey."
        />
      </Helmet>
      <div className="max-w-md w-full border-2 border-primary/20 rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <svg
          width="60"
          height="60"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="4"
        >
          <title>Skillora Logo</title>
          <path d="M32 4.5C21.2 4.5 12.5 13.2 12.5 24c0 7.8 4.6 14.5 11.1 17.6v4.3c0 2.2 1.8 3.9 4 3.9h8.8c2.2 0 4-1.8 4-3.9v-4.3c6.5-3.1 11.1-9.8 11.1-17.6C51.5 13.2 42.8 4.5 32 4.5z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M26 22c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4v-2"
          />
        </svg>

        <h2 className="text-2xl font-bold text-primary mb-6">
          Login to Skillora
        </h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            name="email"
            type="email"
            defaultValue={"abcd@gmail.com"}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary"
            required
          />
          <div className="mb-4 relative ">
            <p
              onClick={() => setShowPass(!showPass)}
              className="absolute right-8 bottom-4 cursor-pointer"
            >
              {showPass ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </p>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              defaultValue={"123456Aa@"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary cursor-pointer text-white font-bold py-3 rounded-lg mt-2"
          >
            Login
          </button>
        </form>
        <div className="my-4 w-full flex items-center">
          <div className="flex-1 h-px bg-primary/20"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-primary/20"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full cursor-pointer flex items-center justify-center gap-3 border border-primary/30 py-3 rounded-lg font-semibold text-primary "
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
        <p className="mt-6 text-sm">
          Don't have an account?{" "}
          <Link
            state={location.state}
            to="/register"
            className="text-primary font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
