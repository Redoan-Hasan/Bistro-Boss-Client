import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const ShopMenuItems = ({ id, image, name, recipe, price, item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (specificItem) => {
    if (user && user.email) {
      console.log(specificItem);
    } else {
      Swal.fire({
        title: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Wanna Login?",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login" , {state: {from: location}});
        }
      });
    }
  };
  return (
    <div className="mx-auto w-full max-w-sm">
      <div
        key={id}
        className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden flex flex-col h-full"
      >
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute font-inter text-sm sm:text-base top-2 right-2 bg-black text-white px-2 py-1 rounded">
            <p>${price}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center p-4 sm:p-5 md:p-6 text-center font-inter flex-grow">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              {name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">
              {recipe}
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(item)}
            className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg uppercase text-sm sm:text-base font-medium border-b-4 border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-b-4 hover:border-[#BB8506] transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopMenuItems;
