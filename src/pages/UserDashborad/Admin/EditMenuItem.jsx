import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../shared/Loader";
import { useState } from "react";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_imageHostingKey;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const EditMenuItem = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [imagePreview, setImagePreview] = useState(null);
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    
    const {data : menuItem = {}  , isLoading , refetch} = useQuery({
        queryKey: ['editMenuItem',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/editMenuItem/${id}`);
            return res.data;
        }
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader);
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async(data) => {
    let imgURL = menuItem.image; // Default to existing image
    
    // Only upload new image if provided
    if (data.image && data.image[0]) {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      
      try {
        const res = await axiosPublic.post(imageHostingAPI, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        
        if (res.data.success) {
          imgURL = res.data.data.display_url;
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: "Image Upload Failed",
          text: error.message
        });
        return;
      }
    }
    
    const { name, price, category, recipe } = data;
    const updatedItem = {
      name,
      price: parseFloat(price),
      category,
      recipe,
      image: imgURL,
    };
    
    try {
      const res = await axiosSecure.patch(`/updateMenuItem/${id}`, updatedItem);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item updated successfully',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: "Something went wrong!",
        text: err.message
      });
    }
  };

  return (
    <div>
        {isLoading && <Loader />}
      <div className="bg-white w-full min-h-screen">
        <div>
          <div className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
            <p className="text-[#D99904] italic font-inter text-base md:text-lg mb-2">
              ---Update Item---
            </p>
            <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
            <h2 className="font-inter text-black uppercase text-2xl md:text-3xl lg:text-4xl font-semibold my-2">
              EDIT MENU ITEM
            </h2>
            <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-[#F3F3F3] p-6 md:p-10 rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 font-inter"
          >
            {/* Recipe Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Recipe name*</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-white focus:outline-none"
                defaultValue={menuItem?.name}
                {...register("name", { required: "Recipe name is required" })}
              />
              {errors.name && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Two column layout for Category and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Dropdown */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Category*</span>
                </label>
                <select
                  className="select select-bordered w-full bg-white focus:outline-none"
                  defaultValue={menuItem?.category}
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="" disabled>
                    Category
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-red-600 text-sm mt-1">
                    {errors.category.message}
                  </span>
                )}
              </div>

              {/* Price - Changed to input field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Price*</span>
                </label>
                <input
                  type="number"
                  min={1}
                  placeholder="Price"
                  className="input input-bordered w-full bg-white focus:outline-none"
                  defaultValue={menuItem?.price}
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" },
                  })}
                />
                {errors.price && (
                  <span className="text-red-600 text-sm mt-1">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            {/* Recipe Details */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Recipe Details*
                </span>
              </label>
              <textarea
                placeholder="Recipe Details"
                className="textarea textarea-bordered w-full h-32 bg-white focus:outline-none"
                defaultValue={menuItem?.recipe}
                {...register("recipe", {
                  required: "Recipe details are required",
                })}
              ></textarea>
              {errors.details && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.details.message}
                </span>
              )}
            </div>

            {/* Image Upload with Preview */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Image*</span>
              </label>
              
              {/* Current Image Preview */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                <img 
                  src={imagePreview || menuItem?.image} 
                  alt={menuItem?.name} 
                  className="w-40 h-40 object-cover rounded-md border border-gray-300"
                />
              </div>
              
              {/* File Input */}
              <input 
                type="file" 
                className="file-input w-full" 
                {...register("image")} 
                onChange={handleImageChange}
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty to keep the current image</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start mt-8">
              <button
                type="submit"
                className="btn text-white px-8 flex items-center gap-2 border-none"
                style={{
                  background:
                    "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
                }}
              >
                Update Menu Item <FaUtensils />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenuItem;
