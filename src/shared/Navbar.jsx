import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-[rgba(21,21,21,0.50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col items-center">
              <h1 className="text-white text-2xl font-bold uppercase font-cinzel">
                BISTRO BOSS
              </h1>
              <p className="text-white tracking-[0.38em] text-sm font-cinzel">
                RESTAURANT
              </p>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 font-inter">
              <NavLink
                to="/"
                className={({isActive})=>`${isActive? 'text-[#EEFF25]': 'text-white'} hover:text-gray-300 uppercase text-sm font-medium`}
              >
                HOME
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-300 uppercase text-sm font-medium"
              >
                CONTACT US
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-white hover:text-gray-300 uppercase text-sm font-medium"
              >
                DASHBOARD
              </NavLink>
              <NavLink
                to="/menu"
                className="text-white hover:text-gray-300 uppercase text-sm font-medium"
              >
                OUR MENU
              </NavLink>
              <NavLink
                to="/shop"
                className="text-white hover:text-gray-300 uppercase text-sm font-medium flex items-center"
              >
                OUR SHOP
                <div className="relative ml-1">
                  <img
                    src="/public/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
                    alt="Cart"
                    className="w-12 h-10"
                  />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/signin"
                className="text-white hover:text-gray-300 uppercase text-sm font-medium flex items-center gap-3"
              >
                SIGN OUT
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#151515] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-inter">
            <NavLink
              to="/"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
            >
              HOME
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
            >
              CONTACT US
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to="/menu"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
            >
              OUR MENU
            </NavLink>
            <NavLink
              to="/shop"
              className="text-white hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium uppercase flex items-center"
            >
              OUR SHOP
              <div className="relative ml-2">
                <img
                  src="/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
                  alt="Cart"
                  className="w-8 h-6"
                />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/signin"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium uppercase flex items-center gap-3"
            >
              SIGN OUT
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
