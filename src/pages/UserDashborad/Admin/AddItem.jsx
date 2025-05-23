import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const imageHostingKey = import.meta.env.VITE_imageHostingKey;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
// console.log(imageHostingAPI);
const AddItem =() => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // console.log(data.image);
    const image = data.image[0];
    // console.log(imageFile);
    const res = await axiosPublic.post(imageHostingAPI, {image} , { //the file name have to image otherwise it will give you error
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const imgURL = res.data.data.display_url;
      const { name, price, category, recipe } = data;
      const newItem = {
        name,
        price: parseFloat(price),
        category,
        recipe,
        image: imgURL,
      };
      await axiosSecure.post("/singleMenu", newItem)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item added successfully',
          })
        }
      })
      .catch(err=>{
        Swal.fire({
          icon:'error',
          title:"Something went wrong!",
          text: err.message
        })
      })
    reset();
  }};

  // Dummy categories for dropdown
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  return (
    <div className="bg-white w-full min-h-screen">
      <div>
        <div className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
          <p className="text-[#D99904] italic font-inter text-base md:text-lg mb-2">
          ---What's new?---
          </p>
          <hr className="border-[#E8E8E8] border-2 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto my-4" />
          <h2 className="font-inter text-black uppercase text-2xl md:text-3xl lg:text-4xl font-semibold my-2">
          ADD AN ITEM
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
              placeholder="Recipe name"
              className="input input-bordered w-full bg-white focus:outline-none"
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
                {...register("category", { required: "Category is required" })}
                
              >
                <option value="" disabled selected>
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
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              className="textarea textarea-bordered w-full h-32 bg-white focus:outline-none"
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

          {/* File Upload - Styled to match the image */}
          <div className="form-control w-full">
          <input {...register("image", {required : "Image is required"})} type="file" className="file-input" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start mt-8">
            <button
              type="submit"
              className="btn text-white px-8 flex items-center gap-2 border-none"
              style={{
                background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
              }}
            >
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
