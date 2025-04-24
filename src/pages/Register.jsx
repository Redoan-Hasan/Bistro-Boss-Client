import React from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div>
        <title>Bistro Boss |Register</title>
      <div className="min-h-screen w-full bg-[url('/assets/others/authentication.png')] bg-cover bg-center flex items-center justify-center py-16 px-4 font-inter">
        <div className="w-full max-w-7xl bg-[url('/assets/others/authentication.png')] bg-cover bg-center p-8 rounded-lg shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col items-center md:flex-row-reverse">
            {/* Image Section */}
            <div className="flex justify-center w-full mb-8 md:w-1/2 md:mb-0">
              <img
                src="/assets/others/authentication2.png"
                alt="Restaurant illustration"
                className="h-auto max-w-full"
              />
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-center">Sign Up</h2>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                  />
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className="w-full py-3 rounded transition-color bg-[#D1A054] text-white hover:bg-[#c08b3b] cursor-pointer"
                />
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#D1A054]">
                  New here?{" "}
                  <Link to="/register" className="text-[#D1A054] font-bold">
                    Create a New Account
                  </Link>
                </p>

                <div className="mt-4">
                  <p className="mb-2 text-sm">Or sign in with</p>
                  <div className="flex justify-center space-x-4">
                    <button className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:bg-gray-100">
                      <FaFacebookF />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:bg-gray-100">
                      <FaGoogle />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full hover:bg-gray-100">
                      <FaGithub />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
