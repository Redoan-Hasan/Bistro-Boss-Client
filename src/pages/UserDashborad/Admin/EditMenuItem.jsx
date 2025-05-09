import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router";
import { FaUtensils } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../shared/Loader";

const EditMenuItem = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    // const [menuItem,setMenuItem] = useState([]);
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const {data : menuItem = {}  , isLoading} = useQuery({
        queryKey: ['editMenuItem',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/editMenuItem/${id}`);
            return res.data;
        }
    })
    console.log(menuItem);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
        {
            isLoading && <Loader />
        }
      <div className="bg-white w-full min-h-screen">
        <div>
          <div className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-center">
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
                // placeholder="Recipe name"
                className="input input-bordered w-full bg-white focus:outline-none"
                defaultValue={menuItem.name}{...register("name", { required: "Recipe name is required" })}
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
                  {...register("category", {
                    required: "Category is required",
                  })}
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
                <span className="label-text font-semibold">
                  Recipe Details*
                </span>
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
                Update Recipe Details <FaUtensils />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenuItem;
