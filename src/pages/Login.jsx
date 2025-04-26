import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { login } = useAuth();
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      loadCaptchaEnginge(6, "transparent");
    }, 100);
  }, []);

  const handleReloadCaptcha = () => {
    loadCaptchaEnginge(6, "transparent");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((data) => {
        console.log(data);
        Swal.fire(
          {
            icon: "success",
            title: "Logged In Successfully",
          },
          navigate(from , {replace: true})
        );
      })
      .catch((error) => {
        Swal.error({
          icon: "error",
          title: error.message,
        });
      });
  };
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      Swal.fire({
          icon: 'error',
          title: 'Invalid Captcha',
      });
      captchaRef.current.value = "";
    }
  };
  return (
    <div className="min-h-screen w-full bg-[url('/assets/others/authentication.png')] bg-cover bg-center flex items-center justify-center py-16 px-4 font-inter">
      <title>Bistro Boss | Login</title>
      <div className="w-full max-w-7xl bg-[url('/assets/others/authentication.png')] bg-cover bg-center p-8 rounded-lg shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center md:flex-row">
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
            <h2 className="mb-6 text-3xl font-bold text-center">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
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

              {/* Captcha display field */}
              <div>
                <div className="w-full p-3 border border-gray-300 rounded bg-transparent flex justify-start items-center h-[50px] overflow-hidden">
                  <LoadCanvasTemplateNoReload />
                </div>
                <div className="mt-1">
                  <button
                    type="button"
                    onClick={handleReloadCaptcha}
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    Reload Captcha
                  </button>
                </div>
              </div>

              {/* Captcha input field */}
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    placeholder="Type here"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    type="button"
                    className="px-4 py-3 bg-[#D1A054] text-white rounded hover:bg-[#c08b3b] transition-colors whitespace-nowrap"
                  >
                    Validate
                  </button>
                </div>
              </div>

              <input
                disabled={disabled}
                type="submit"
                value="Sign In"
                className={`w-full py-3 rounded transition-colors ${
                  disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#D1A054] text-white hover:bg-[#c08b3b] cursor-pointer"
                }`}
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
  );
};

export default Login;
